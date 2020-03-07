<template>
<div>
  <div class="city-header-content">
    <el-row class="city-header">
      <el-col :span="6"><span class="city-header-return" @click="rHome"><i class="iconfont">&#xe743;</i></span></el-col>
      <el-col :span="12" class="select-city-header"><span>城市选择</span></el-col>
    </el-row>
    <el-row class="city-header">
      <el-col class="city-search" :span="20" :offset="2">
        <el-input size="small" v-model="input" placeholder="请输入城市"></el-input>
      </el-col>
    </el-row>
  </div>
  <div class="city-search-content" v-show="input">
    <p class="city-search-tips" v-show="!this.list.length">输入城市搜索</p>
    <ul class="city-search-ul">
      <li class="city-search-li" v-for="item in list" :key="item.id" @click="cityClick(item.name)">{{ item.name }}</li>
    </ul>
  </div>
  <div class="city-list-con" ref="wrapper">
    <div>
      <el-row class="city-list" id="city" v-for="(item, key) in cityData" :key="key" :ref="key">
        <el-col :span="24" class="city-initals"><span>{{ key }}</span></el-col>
        <ul class="city-list-ul">
        <li
          :span="23"
          class="city-name"
          v-for="city in item"
          :key="city.id"
          @click="cityClick(city.name)"
        ><span>{{ city.name }}</span></li>
        </ul>
      </el-row>
    </div>
  </div>
  <childLetterList
    v-bind:cityData="cityData"
    @change = "handleLettersChange"
  ></childLetterList>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
import childLetterList from './childLetterList'
// import { eventBus } from '../../main.js'
export default {
  data () {
    return {
      input: '',
      cityData: '',
      letter: '',
      timer: null,
      list: ''
    }
  },
  mounted () {
    this.getCityInfo()
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  },
  methods: {
    getCityInfo () {
      this.$axios.get('/api/city.json')
        .then(this.handletGetCityInfoSucc)
    },
    handletGetCityInfoSucc (res) {
      let city = res.data
      let cityData = city.data
      this.cityData = cityData.cities
    },
    handleLettersChange (letter) {
      this.letter = letter
    },
    rHome () {
      this.$router.push({
        path: '/index'
      })
    },
    cityClick (cityName) {
      this.$store.dispatch('setIndex', cityName)
      this.$router.push('/')
      // this.$emit('cityChange', cityName)
      // eventBus.$emit('cityChange', cityName)
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element.$el)
      }
    },
    input () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cityData) {
          this.cityData[i].forEach(element => {
            if ((element.spell.indexOf(this.input) > -1) || (element.name.indexOf(this.input) > -1)) {
              result.push(element)
            }
          })
        }
        this.list = result
      }, 500)
    }
  },
  components: {
    childLetterList
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.city-header-content
  position: fixed
  top: 0
  left: 0
  right: 0
  .city-header
    height: 0
    line-height: 12vw
    padding-bottom: 12.3333333vw
    background-image: $bgColor
    color: #fff
    .select-city-header, .add-new-index
      text-align: center
    .city-header-return
      line-height: 10vw
      margin-left: 6vw
    .select-city-header
      font-size: 4.8vw
    .add-new-index
      font-size: 3.6vw
.city-search-content
  background: #ffffff
  position: fixed
  top: 25vw
  left: 0
  right: 0
  bottom: 0
  z-index: 9999
  padding: 2vw
  .city-search-tips
    text-align: center
    padding-top: 2vw
    color: #c1c1c1
    font-size: 4vw
  .city-search-ul
    .city-search-li
      border-bottom: 1px solid #eee
      padding: 2.5vw 0
.city-list-con
  position: absolute
  top: 25vw
  left: 0
  right: 0
  bottom: 0
  overflow: hidden
  .city-list
    .city-initals
      height: 6vw
      line-height: 6vw
      background-color: #eee
      color: #666
      padding-left: 2vw
    .city-name
      line-height: 8vw
      margin-left: 2vw
      padding-left: 1vw
      border-bottom: 1px solid #eee
</style>

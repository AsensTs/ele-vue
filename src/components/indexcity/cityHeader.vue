<template>
<div>
  <el-row class="city-header">
    <el-col :span="6"><span class="city-header-return" @click="rHome"><i class="iconfont">&#xe743;</i></span></el-col>
    <el-col :span="12" class="select-city-header"><span>选择收获地址</span></el-col>
    <el-col :span="6" class="add-new-index"><span>新增地址</span></el-col>
  </el-row>
  <el-row class="city-Search">
    <el-col :span="5"><router-link tag="div" :to="{name: 'childCityIndex'}" class="city-search-select"><span>选择...</span><i class="i-caret el-icon-caret-bottom"></i></router-link></el-col>
    <el-col :span="19"><router-link tag="div" :to="{name: 'childCityIndex'}" class="city-search-input"><i class="iconfont">@</i><span> 请输入地址</span></router-link></el-col>
  </el-row>
</div>
</template>

<script>
export default {
  methods: {
    rHome () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
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
.city-Search
  height: 0
  padding-bottom: 15vw
  color: $textColor
  font-size: 2vw
  overflow: hidden
  .city-search-select, .city-search-input
    height: 10vw
    line-height: 10vw
    margin: 3vw
  .city-search-select
    padding-left: 0
    padding-top: .4vw
  .city-search-input
    background: #f2f2f2
    padding-left: 2vw
</style>

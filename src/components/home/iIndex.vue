<template>
<el-container direction="vertical">
  <el-row class="iIndex-eKJL1">
    <el-col :span="24">
      <router-link :to="{name: 'Index'}" class="iIndex-eJKN2">
        <div class="iIndex-eJKF0"><i class="iconfont">&#xe734;</i><span>{{ this.$store.getters.getCity }}</span><i class="i-caret el-icon-caret-bottom"></i></div>
      </router-link>
    </el-col>
  </el-row>
</el-container>
</template>

<script>
export default {
  name: 'iHeader',
  data () {
    return {
      cityIndex: '北京'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .iIndex-eKJL1
    background-image: linear-gradient(90deg, #0af, #0085ff)
    height: .5rem
    overflow: hidden
    .iIndex-eJKN2
      height: .4rem
      padding: .1rem .2rem 0 .2rem
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      .iIndex-eJKF0
        height: .22rem
        font-weight: bold
        font-size: .22rem
        color: #fff
        line-height: .4rem
        display: flex
        -webkit-box-align: center
        align-items: center
      .iIndex-eJKF0 span
        padding: 0 1vw
      .iconfont
        font-size: 5vw
</style>

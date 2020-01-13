<template>
  <div class="index-eRec-r0">
    <div class="index-eRec-title-r1">推荐商家</div>
    <el-container direction="vertical">
      <el-row class="index-eRec-nav-r2">
        <el-col :span="6" class="index-eNav-z"><span>综合排序</span><i class="el-icon-caret-bottom"></i></el-col>
        <el-col :span="6" class="index-eNav-z"><span>距离最近</span></el-col>
        <el-col :span="6" class="index-eNav-z"><i class="iconfont">&#xe6bb;</i><span>会员领红包</span></el-col>
        <el-col :span="6" class="index-eNav-z"><span>筛选</span><i class="iconfont">&#xe615;</i></el-col>
      </el-row>
    </el-container>
    <i-store v-for="i in 5" v-bind:key="i"></i-store>
  </div>
</template>

<script>
import iStore from './iStore'
export default {
  components: {
    iStore
  }
}
</script>

<style lang="stylus" scoped>
.index-eRec-r0
  padding-top: .2rem
  padding-bottom: 13.3333333vw
  .index-eRec-title-r1
    height: 10.6666666667vw
    line-height: 10.6666666667vw
    font-size: 4vw
    text-align: center
  .index-eRec-title-r1:before, .index-eRec-title-r1:after
    content: ''
    display: block
    width: 5.333333vw
    height: .3vw
    background: #b1b1b1
    margin: 0 auto
    position:relative
  .index-eRec-title-r1:before
    top: 5.5vw
    right: 14vw
  .index-eRec-title-r1:after
    left: 14vw
    bottom: 5.5vw
  .index-eRec-nav-r2
    height: 10.6666666667vw
    line-height: 10.6666666667vw
    color: #797272
    font-size: 3.666666vw
    .index-eNav-z
      text-align: center
</style>

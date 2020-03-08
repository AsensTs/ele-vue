<template>
  <el-row class="store-nav-row">
    <el-col class="nav-col" :span="8"><span class="nav-col-name">商品</span></el-col>
    <el-col class="nav-col" :span="8"><span class="nav-col-name">评价</span></el-col>
    <el-col class="nav-col" :span="8"><span class="nav-col-name">商家</span></el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.store-nav-row
  border-bottom-color: rgb(7,17,27,0.1)
  .nav-col
    height: vw(80)
    text-align: center
    vertical_center()
    .nav-col-name
      font-size: vw(28)
      line-height: vw(28)
      display: block
      color: rgb(77,85,93)
</style>

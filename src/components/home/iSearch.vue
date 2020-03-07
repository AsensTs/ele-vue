<template>
  <el-container direction="vertical" class="iSearch-eFDx12">
    <el-row type="flex" justify="center" class="iSearch-eFDx21">
      <el-col :span="24"><span><i class="iconfont">@</i></span><span>搜索饿了么商家、商品名称</span></el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'iSearch'
}
</script>

<style lang="stylus" scoped>
  .iSearch-eFDx12
    background-image: linear-gradient(90deg, #0af, #0085ff)
    height: .5rem
    overflow: hidden
    .iSearch-eFDx21
      height: .36rem
      margin: .05rem .15rem .09rem .15rem
      text-align: center
      justify-content: center
      align-items: center
      background: #fff
      color: #808080
    .iSearch-eFDx21 span
      font-size: .15rem
</style>

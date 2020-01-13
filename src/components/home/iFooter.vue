<template>
    <el-container direction="vertical">
      <el-footer>
        <el-row class="ifooter-content">
          <el-col :span="6"><i class="footer-icons el-icon-eleme"></i><p class="footer-item-name">首页</p></el-col>
          <el-col :span="6"><i class="footer-icons el-icon-eleme"></i><p class="footer-item-name">首页</p></el-col>
          <el-col :span="6"><i class="footer-icons el-icon-eleme"></i><p class="footer-item-name">首页</p></el-col>
          <el-col :span="6"><i class="footer-icons el-icon-eleme"></i><p class="footer-item-name">首页</p></el-col>
        </el-row>
      </el-footer>
    </el-container>
</template>
<script>
export default {
  name: 'iFooter',
  data () {
    return {
    }
  }
}

</script>
<style lang="stylus" scoped>
  .el-container
    position: fixed
    left: 0;
    right: 0;
    bottom: 0
    background: #FFF
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    color: #8e8e93
    z-index: 9999
    .el-footer
      height: 13.333333vw !important
      padding: 0
      .ifooter-content
        padding-top: 1vw
      .el-row
        .el-col
          text-align: center
          color: #777777
          .footer-icons
            font-size: 6.6666vw
          .footer-item-name
            font-size: 1vw
</style>

<template>
<div>
  <el-container direction="vertical">
    <div class="store-header-bg"></div>
    <div class="store-header">
      <div class="store-left">
        <img class="store-logo-img" :src="storeLogoImg">
      </div>
      <div class="store-right">
        <h2 class="store-right-title"><span class="title-brand"></span><span class="title-disc">华莱士·全鸡汉堡(中信广场店)</span></h2>
        <div class="store-right-disc">
          <span class="disc-39dxas">评价4.5</span>
          <span class="disc-39dxas">月售205单</span>
          <span class="disc-39dxas">蜂鸟专送<span class="time-41txas">约30分钟</span></span>
        </div>
        <div class="store-right-preferential">
          <span class="preferential-brand"></span>
          <span class="preferential-disc">在线支付满28减5,满50减10</span>
        </div>
      </div>
    </div>
  </el-container>
  <div class="store-notice">
    <span class="notice-brand"></span>
    <span class="notice-disc">欢迎光临，用餐高峰期请提前下单，谢谢。</span>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      storeLogoImg: 'https://cube.elemecdn.com/6/b5/10bf4d2dae1f2883c12cb18f9430cpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
.store-header-bg
  width: 100%
  height: vw(268)
  background-image: url("https://cube.elemecdn.com/d/fb/b7a93d707c6177186e1c354f2807apng.png?x-oss-process=image/format,webp/resize,w_450")
  position: absolute
  z-index: -1
.store-header
  display: flex
  background-image: linear-gradient(top, rgba(0,0,0,0.8), rgba(0,0,0,0.4))
  .store-left
    .store-logo-img
      width: vw(128)
      height: vw(128)
      margin: vw(48) vw(32) vw(36) vw(48)
      border-radius: vw(4)
  .store-right
    height: vw(128)
    margin-top: vw(48)
    color: #ffffff
    .store-right-title
      margin: vw(4) 0 vw(16) 0
      .title-brand
        width: vw(60)
        height: vw(36)
        display: inline-block
        vertical-align: top
        bg-image('brand')
        background-repeat: no-repeat
        background-size: contain
        margin-right: vw(12)
      .title-disc
        font-size: vw(32)
        font-weight: bold
        line-height: vw(36)
    .store-right-disc
      margin-bottom: vw(20)
      .disc-39dxas
        font-size: vw(24)
        line-height: vw(24)
        font-weight: 200
    .store-right-preferential
      margin-bottom: vw(4)
      .preferential-brand
        width: vw(24)
        height: vw(24)
        bg-image('decrease_1')
        display: inline-block
        background-repeat: no-repeat
        background-size: contain
        vertical-align: top
      .preferential-disc
        font-size: vw(20)
        font-weight: 200
        line-height: vw(24)
.store-notice
  height: vw(56)
  background-color: rgba(7,17,27,0.2)
  line-height: vw(56)
  color: #ffffff
  .notice-brand
    width: vw(51.3)
    height: vw(28)
    display: inline-block
    bg-image('bulletin')
    background-repeat: no-repeat
    background-size: contain
    margin: vw(12) vw(8) 0 vw(24)
    vertical-align: top
  .notice-disc
    font-size: vw(20)
    font-weight: 200
</style>

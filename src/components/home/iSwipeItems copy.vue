<template>
    <div class="mint-swipe">
      <div class="mint-swipe-item-wrap">
        <div class="mint-swipe-item">
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>美食</span></a>
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>大牌惠吃</span></a>
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>跑腿代购</span></a>
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>汉堡批萨</span></a>
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>速食简餐</span></a>
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>汉堡批萨</span></a>
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>速食简餐</span></a>
          <a><div class="item-pic"><img src="https://cube.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>跑腿代购</span></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'swipeItems'
}
</script>

<style lang="stylus" scoped>
  .mint-swipe-item
    width: 100%
    height: 100%
    display: flex
    flex-wrap: wrap
    text-align: center
  .mint-swipe-item a
    display: block
    width: 20%
    margin-top: 1.99999vw
    .item-pic img
      width: 60%
  .mint-swipe-item span
    font-size: .11999999rem
    color: #808080
    position: relative
    top: -8px
</style>

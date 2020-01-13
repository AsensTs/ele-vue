<template>
    <div class="mint-swipe">
        <el-row type="flex" justify="space-around" :gutter="10" class="mint-swipe-item">
          <el-col :span="4" ><div class="item-pic"><img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>美食</span></el-col>
          <el-col :span="4"><div class="item-pic"><img src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>大牌惠吃</span></el-col>
          <el-col :span="4"><div class="item-pic"><img src="https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>跑腿代购</span></el-col>
          <el-col :span="4"><div class="item-pic"><img src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>汉堡批萨</span></el-col>
          <el-col :span="4"><div class="item-pic"><img src="https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>速食简餐</span></el-col>
        </el-row>
        <el-row type="flex" justify="space-around" :gutter="10" class="mint-swipe-item">
          <el-col :span="4" ><div class="item-pic"><img src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>美食</span></el-col>
          <el-col :span="4"><div class="item-pic"><img src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"/></div><span>大牌惠吃</span></el-col>
          <el-col :span="4"><div class="item-pic"><img src=""/></div><span></span></el-col>
          <el-col :span="4"><div class="item-pic"><img src=""/></div><span></span></el-col>
          <el-col :span="4"><div class="item-pic"><img src=""/></div><span></span></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'swipeItems'
}
</script>

<style lang="stylus" scoped>
.mint-swipe
  padding: 3vw
  .item-pic img
    width: 100%
    margin-bottom: 1vw
  .mint-swipe-item
    font-size: 3.33vw
    color: #777
    text-align: center
</style>

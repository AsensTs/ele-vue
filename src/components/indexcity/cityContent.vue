<template>
<div  class="city-content">
  <div>
    <div class="city-content-title"><h4>当前地址</h4></div>
    <div class="index-city">
      <div class="index-city-left">
        <span v-show="flag">正在获取地址...</span>
        <span>{{ cityIndex }}</span>
      </div>
      <div class="index-city-right"><i class="iconfont">@</i><span>重新定位</span></div>
    </div>
  </div>
  <div>
    <div class="city-content-title"><h4>收货地址</h4></div>
    <div class="address-cell">
      <p><span class="cell-name">姓</span><span class="cell-call">先生</span><span class="cell-phone">88888888</span></p>
      <p><span class="address">地址</span></p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      flag: true,
      cityIndex: ''
    }
  },
  mounted () {
    this.cityIndex = this.$store.getters.getCity
    this.flag = false
  }
}
</script>

<style lang="stylus" scoped>
.city-content
  padding: .1rem 4vw 0 4vw
  .city-content-title
    height: 0
    line-height: 10vw
    padding-bottom: 10vw
    margin-top: 2vw
    overflow: hidden
    font-size: 3.6666vw
    color: #666
  .index-city, .address-cell
    height: 0;
    padding-bottom: 12.5vw
    overflow: hidden
  .index-city
    line-height: 12.5vw
  .address-cell
    margin-top: 4vw
    line-height: 6.25vw
  .index-city, .cell-name
    font-size: 4vw
    font-weight: bold
  .index-city-left
    float: left
  .index-city-right
    float: right
    font-weight: 100
    font-size: 3.6vw
  .cell-call, .cell-phone, .address
    font-size: 3.4vw
  .cell-call, .cell-phone
    margin-left: 1.5vw
  .address-cell p
    box-sizing: border-box
</style>

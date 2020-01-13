<template>
  <div>
    <i-index></i-index>
    <i-search></i-search>
    <i-swipe-items></i-swipe-items>
    <i-activity></i-activity>
    <i-Recommend></i-Recommend>
    <i-Footer></i-Footer>
  </div>
</template>

<script>
import iIndex from '@components/home/iIndex'
import iSearch from '@components/home/iSearch'
import iSwipeItems from '@components/home/iSwipeItems'
import iActivity from '@components/home/iActivity'
import iRecommend from '@components/home/iRecommend'
import iFooter from '@components/home/iFooter'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    iIndex,
    iSearch,
    iSwipeItems,
    iActivity,
    iRecommend,
    iFooter
  }
}
</script>

<style>
</style>

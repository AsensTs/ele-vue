<template>
<div>
  <cityHeader></cityHeader>
  <cityContent></cityContent>
</div>
</template>

<script>
import cityHeader from './cityHeader'
import citySearch from './citySearch'
import cityContent from './cityContent'
export default {
  components: {
    cityHeader,
    citySearch,
    cityContent
  }
}
</script>

<style lang="stylus" scoped>
</style>

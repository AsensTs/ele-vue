<template>
<div class="letter-List">
  <p
    class="letter-name"
    v-for = "(item, key) in letters"
    :key = "key"
    :ref = "item "
    @click = "handleLettersChange"
    @touchstart = "handleTouchStart"
    @touchmove = "handleTouchMove"
    @touchend = "handleTouchEnd"
  > {{ item }} </p>
</div>
</template>

<script>
export default {
  props: ['cityData'],
  data () {
    return {
      touchstatus: 'false'
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cityData) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLettersChange (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchstatus = true
    },
    handleTouchMove (e) {
      if (this.touchstatus) {
        let startY = this.$refs['A'][0].offsetTop
        let touchY = e.touches[0].clientY - 100
        const index = Math.floor((touchY - startY) / 20)
        this.$emit('change', this.letters[index])
      }
    },
    handleTouchEnd () {
      this.touchstatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.letter-List
  width: 7vw
  position: fixed
  right: 0
  top: 25vw
  bottom: 0
  padding-top: 15vw
  text-align: center
  .letter-name
    padding: 1vw 0
    color: #008cff
    cursor: pointer
</style>

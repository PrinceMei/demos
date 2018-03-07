<template>
  <div class="busImage">
    <div class="busImage__body">
      <div class="busImage__floor busImage__floor-first">
        <span class="busImage__floor-first__window" v-for="n in 5"></span> 
      </div>
      <div class="busImage__floor busImage__floor-second">
        <div class="busImage__floor-second__door">
          <div class="busImage__floor-second__door__step" v-for="n in 5"></div>
        </div>
        <div class="busImage__floor-second__window" v-for="n in 4"></div>
        <div class="busImage__floor-second__front">
          <div class="busImage__floor-second__front__shine"></div> 
        </div>
      </div>
      <div class="busImage__wheel busImage__wheel-left"></div>
      <div class="busImage__wheel busImage__wheel-right"></div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "./index.scss"
</style>
<script>

export default {
  name: 'busApp',
  data() {
    return {
    }
  }
}
</script>


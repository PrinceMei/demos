<template>
  <div class="cssCarousels">
    <input type="radio" name="carousel" :id="'carousel_'+n" v-for="n in num" class="cssCarousels__input" :checked="n==1">
    <div class="cssCarousels__controls" v-for="n in num">
      <label :for="'carousel_'+ (n<=1? num: n-1)" class="cssCarousels__controls__label cssCarousels__controls__label-left"></label>
      <label :for="'carousel_'+(n>=num? 1: n+1)" class="cssCarousels__controls__label cssCarousels__controls__label-right"></label>
    </div>
    <div class="cssCarousels__track">
      <section class="cssCarousels__slide" v-for="n in num">
      </section>
    </div>
    <div class="cssCarousels__indicators">
      <label :for="'carousel_'+n" v-for="n in num" class="cssCarousels__indicators__indicator"></label>
    </div>
  </div>
</template>
<style lang="scss">
  @import "./index.scss"
</style>

<script>

export default {
  name: 'cssCarousels',
  data() {
    return {
      num: 5
    }
  }
}
</script>


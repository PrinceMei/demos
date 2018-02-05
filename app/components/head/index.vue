<template>
  <div id="head" class="head">
    <div class="head_title">{{title}}</div>
    <p class="head_info">
      {{info}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'appHead',
  props:['title', 'info'] 
}
</script>

<style scoped>
.head_title{
  color: #404040;
  text-align: left;
  font-size: 32px;
  margin: .67em 0;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 24px;
  margin-top: 8px;
}
.head_info{
  text-align: left;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
  margin: 0 0 1em;
}
</style>

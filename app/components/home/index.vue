<template>
  <div class="home">
    <ul>
      <!-- 示例 -->
      <!--       <li>
              <router-link to="/example"></router-link>
            </li>
       -->
      <li>
        <router-link to="/lazyLoad">图片懒加载</router-link>
      </li>
      

    </ul> 
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

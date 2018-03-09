<template>
  <div class="home">
    <ul class="home__list">
      <!-- 示例 -->
      <!--       <li>
              <router-link to="/example"></router-link>
            </li>
       -->
      <li v-for="(item, index) in components" class="home__list__item">
        <router-link :to="item.value">{{item.name}}</router-link>
      </li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      components: [
        {
          value: '/lazyLoad',
          name: '图片懒加载'
        },
        {
          value: '/verticalCenter',
          name: '垂直居中大集合'
        },
        {
          value: '/oauth',
          name: '第三方登录(github)'
        },
        {
          value: '/busImage',
          name: '纯css卡通车'
        },
        {
          value: '/cssCarousels',
          name: '纯css轮播图'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home{
    &__list{
      border-radius: 4px;
      width: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      color: rgba(0, 0, 0, 0.65);      
      -webkit-box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
      box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
      margin: 1rem 0;
      padding: 1em 1em;
      border-radius: .28571429rem;
      font-size: 1rem;
      
      &__item{
        a:hover{
          color: #1890ff;
        }
      }
      &__item:not(:last-child){
        padding-bottom: .42857143em;
        border-bottom: 1px solid rgba(34,36,38,.1); 
      }
      &__item:not(:first-child){
        padding-top: .42857143em;
      }
    }
  }
</style>

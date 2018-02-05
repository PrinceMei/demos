<template>
  <div class="lazyLoad">
    <app-head :title= 'title' :info='info'></app-head>
    <ul class="lazyLoad__list">
      <li class="lazyLoad__list__item" v-for="n in imgList.total">
        <img :src="bitmapSrc" :data-src="imgList.content.imgItem.src" class="lazyLoad__list__item__img" ref="image">
      </li>
    </ul>
  </div>
</template>

<script>
// 节流函数
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        }  else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
};

import appHead from '@/components/head/index'

export default {
  name: 'lazyLoad',
  data () {
    return {
      title: '图片懒加载',
      info: '采用vue编写，使用节流函数进行性能优化',
      imageIndex: 0, //存储图片加载到的位置，避免每次都从第一张图片开始遍历
      scrollTop: 0,
      clientHeight: 0,
      bitmapSrc: 'http://via.placeholder.com/200x200',
      //图片列表
      imgList: {
        content: {
          imgItem: {
            src: '/app/assets/image/lazyLoad.jpg'
          }
        },
        total: 50
      },
    }
  },
  mounted () {
    var vm= this;
    vm.isInView();

    // 采用了节流函数
    window.addEventListener('scroll', throttle(vm.isInView, 500, {
    leading: false}));
  },
  methods: {
    isInView() {
      var vm= this;
      vm.scrollTop= document.body.scrollTop|| document.documentElement.scrollTop;//页面滚动高度
      vm.clientHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//可视区高度

      for(var i=vm.imageIndex; i<vm.imgList.total; i++) {
        var curDom= vm.$refs['image'][i];
        //判断是否在显示范围
        if (curDom.offsetTop < vm.viewHeight) {
          curDom.src= vm.imgList.content.imgItem.src;

          vm.imageIndex+=0;
        }
      }
    }
  },
  computed: {
    viewHeight: function() {
      return this.scrollTop + this.clientHeight 
    }
  },
  components: {
    'app-head': appHead
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lazyLoad{
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
  }
  .lazyLoad__list_item,.lazyLoad__list__item__img{
    display: block;
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
  }

</style>

<template>
  <div class="lazyLoad">
    <ul class="lazyLoad__list">
      <li class="lazyLoad__list__item" v-for="n in imgList.total">
        <img :src="bitmapSrc" :data-src="imgList.content.imgItem.src+n" class="lazyLoad__list__item__img" ref="image">
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

// 引入IntersectionObserverEntry api垫片
import '@/assets/polyfill/intersection-observer.js'

export default {
  name: 'lazyLoad',
  data () {
    return {
      title: '图片懒加载',
      info: '采用vue编写，使用节流函数进行性能优化',
      imageIndex: 0,//记录遍历位置
      bitmapSrc: 'http://via.placeholder.com/200x200',
      //图片列表
      imgList: {
        content: {
          imgItem: {
            src: 'https://picsum.photos/300/300/?image='
          }
        },
        total: 50
      },
    }
  },
  mounted () {
    var vm= this;
    // vm.boundingClientRectView();
    // 采用了节流函数
    // window.addEventListener('scroll', throttle(vm.boundingClientRectView, 500, {
    // leading: false}));
    
    vm.intersectionView();
  },
  methods: {
    // scrollTop 判断
    scrollTopView() {
      var vm= this;
      var scrollTop= document.body.scrollTop|| document.documentElement.scrollTop;//页面滚动高度
      var clientHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//可视区高度
      var viewHeight= scrollTop+clientHeight+100; //预加载 +80像素

      for(var i=vm.imageIndex; i<vm.imgList.total; i++) {
        var curDom= vm.$refs['image'][i];
        //判断是否在显示范围
        if (curDom.offsetTop < viewHeight && curDom.src != vm.imgList.content.imgItem.src) {
          curDom.src= vm.imgList.content.imgItem.src;

          vm.imageIndex+=0;
        }
      }
    },

    // getBoundingClientRect 判断
    boundingClientRectView() {
      var vm= this;
      for(var i=vm.imageIndex; i<vm.imgList.total; i++) {
        var curDom= vm.$refs['image'][i];
        var bound = curDom.getBoundingClientRect();
        var clientHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;//可视区高度
        if (bound.top <= (clientHeight + 100) && curDom.src != vm.imgList.content.imgItem.src) {
          curDom.src= vm.imgList.content.imgItem.src;

          vm.imageIndex+=0;
        } 
        
      };
    },

    // IntersectionObserver api
    intersectionView() {
      var vm= this;
      //声明观察回调函数
      var observer = new IntersectionObserver(
        function(changes) {
          changes.forEach(function(change) {
            var imgItem = change.target;
            //获取目标元素的可见比例
            var intersectionRatio = change.intersectionRatio;
            var realSrc= imgItem.getAttribute('data-src');
            var dataSrc= imgItem.getAttribute('src');
            if (intersectionRatio > 0 && realSrc != dataSrc) {
              //可见范围替换图片地址，并取消监测
              imgItem.setAttribute('src', realSrc);
              observer.unobserve(imgItem);
            };
          });
        }
      );

      vm.$refs['image'].forEach(function (item) {
        observer.observe(item);
      }); 
    }
  },
  computed: {
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
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    width: 300px;
    height: 300px;
  }

</style>

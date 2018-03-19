<template>
  <div class="pullDown">
    <div class="pullDown__loading"  ref="loading">
      <div class="pullDown__loading__sign">
        <i class="pullDown__loading__sign__pulldown" :class="{'z-roate': pullStatus=='up'}" v-if="!isLoading"></i>
        <i class="pullDown__loading__sign__loading" v-else></i>
      </div>
      <div class="pullDown__loading__caption">
        <span v-if="pullStatus == 'down' && !isLoading">下拉可以刷新</span> 
        <span v-if="pullStatus == 'up' && !isLoading">释放立即刷新</span> 
        <span v-if="isLoading">正在刷新...</span> 
      </div>
    </div>
    <div class="pullDown__scroll" ref="scroll" @touchstart= "touchstart" @touchmove="touchmove" @touchend="touchend">
      <ul class="pullDown__list">
        <li class="pullDown__list__item">请切换手机模式浏览</li>
        <li class="pullDown__list__item" v-for="n in randomArray">Item {{n}} </li> 
      </ul>
    </div>
  </div>
</template>

<style type="text/css" lang="scss">
  .pullDown{
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    width: 100%;

    &__scroll{
      background-color: #fff;
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      /* 增加该属性，可以增加弹性 */
      -webkit-overflow-scrolling: touch;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      // -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      // transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      border-bottom: 1px solid #e8e8e8;
      border-top: 1px solid #e8e8e8;
    } 
    &__list{
      &__item{
        padding: 16px 24px; 
        position: relative;

        &:not(:last-child):after {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 15px;
          height: 1px;
          content: '';
          -webkit-transform: scaleY(.5);
          transform: scaleY(.5);
          background-color: #e8e8e8;
        }
      }
    }

    &__loading{
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      overflow: hidden;
      width: 100%;
      height: 50px;
      text-align: center;
      padding: 16px 24px; 
      z-index: 1;
      background-color: #fff;

      &__sign{
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;

        &__pulldown{
          -webkit-transition: -webkit-transform .4s;
          transition: transform .4s;
          -webkit-transition-duration: 300ms;
          transition-duration: 300ms;
          transform: rotate(-180deg);
          -webkit-transform: rotate(-180deg);
          display: block;
          width: 24px;
          height: 24px;
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAw0lEQVRIS+2U0Q2DIBCG77qOjlAauwEbVCcrI7BBm9IRcJ3SXCPJhVA5Hkh8wBckwPd5/6kIjS9szIdjCQalDQCE1dlFWrm4AoIjwo3AIYCRSkQCDo9PLpUUBTl4jWRXkMSyIMJ9i4jf78b1VzCe9QQneETg6qwZLzrQ3L8sDkrPUQgfuPq3feYaX6pgpkMEp5ELaE4Svl4tSA+kAsmrWmwyh3RBMdIeUY8om8DBPjSlfz807+xUbNi2oaoCKZTvay74AmOHdBkgAHGiAAAAAElFTkSuQmCC");        

          &.z-roate{
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
          }
        }

        &__loading{
          display: block;
          width: 24px;
          height: 24px;
          border: 4px solid #2c3e50;
          border-right-color: transparent;
          border-radius: 50%;
          position: relative;
          animation: loader-rotate 1s linear infinite;
          -webkit-animation: loader-rotate 1s linear infinite;
          top: 50%;
          margin: -4px auto 0 auto;          
          vertical-align: middle;

          &:after{
            content: '';
            width: 4px;
            height: 4px;
            background: #2c3e50;
            border-radius: 50%;
            position: absolute;
            top: -1px;
            left: 13px;
          }
        }
      }
      &__caption{
        font-size: 15px;
        line-height: 24px;
        position: relative;
        display: inline-block;
        overflow: visible;
        margin-top: 0;
        vertical-align: middle;
      }
    }
  };

  @keyframes loader-rotate {
    0% {
      transform: rotate(0); 
    }
    100% {
      transform: rotate(360deg); 
    } 
  };
  @-webkit-keyframes loader-rotate {
    0% {
      -webkit-transform: rotate(0); 
    }
    100% {
      -webkit-transform: rotate(360deg); 
    } 
  };
</style>

<script type="text/javascript">
  export default {
    name: 'pullDown',
    data() {
      return {
        isLoading: false, //是否刷新中
        isPull: false, //是否能拉动
        isBack: false, //是否初始状态中
        pullStatus: 'down', //状态： down, up
        offsetTop: 0, //判断依据到顶值
        startPos: 0, //拉动起始位置
        endPos: 0, //拉动结束位置
        distance: 0, //拉动距离
        modulus: 0.3, //拉动距离系数

        _scrollWrap: {},
        _loadingWrap: {},

        randomLength: 20,
        randomArray: []
      }
    },
    mounted() {
      var vm= this;

      //处理微信露底
      vm.fixExposed();

      vm.randomArray= vm.randomNumber(vm.randomLength);
      vm._scrollWrap= vm.$refs.scroll;
      vm._loadingWrap= vm.$refs.loading;
    },
    methods: {
      touchstart($event) {
        var vm= this;

        if (!vm.isPull && !vm.isLoading && vm._scrollWrap.scrollTop == vm.offsetTop) {
          vm.isPull= true;
          vm.startPos= $event.touches[0].pageY;
        };
      },
      touchmove($event) {
        var vm= this;
        vm.endPos= $event.touches[0].pageY;
        if (!vm.isLoading && vm.isPull && vm.startPos<vm.endPos) {
          vm.distance= (vm.endPos- vm.startPos)*vm.modulus;
          var offsetLoading= vm._loadingWrap.offsetHeight;

          if (vm.distance >= offsetLoading) {
            vm.pullStatus = 'up'
          }else{
            vm.pullStatus = 'down'
          }
          vm.moveTransition(vm.$refs.scroll, vm.distance, 0);
        }
      },
      touchend($event) {
        var vm= this;
        var offsetLoading= vm._loadingWrap.offsetHeight;
        // vm.isPull= false;

        //加载中 或 移动距离小于0不能移动
        if (vm.isLoading || vm.distance<=0 || vm.isBack) {return false;}

        //拉动距离大于临界值
        if ( vm.distance>0 && vm.distance >= offsetLoading) {

          //执行刷新动作
          vm.pullTransition({
            dom: vm._scrollWrap,
            begin: offsetLoading,
            end: vm.distance,
            duration: 500
          });

          //后台刷新数据
          vm.refresh();
        }else{

          vm.isBack= true;
          // 返回back初始状态
          vm.pullTransition({
            dom: vm._scrollWrap,
            end: vm.distance,
            duration: 500,
            callback: vm.resetStatus
          });
        }
      },

      /**
       * [pullTransition 动画拉动]
       * @param  {[type]} dom [元素]
       * @param  {[type]} begin [起始值]
       * @param  {[type]} end [结束值]
       * @param  {[type]} duration [时间]
       * @param  {[type]} callback [回调函数]
       * @return {[type]}          [description]
       */
      pullTransition(opt) {
        var vm= this;
        if (!opt.dom || !opt.end) {
          console.error('参数不足');
          return false;
        };

        var opt= {
          dom: opt.dom,
          currentTime: 0,
          begin: opt.begin? opt.begin: 0,
          end: opt.end,
          duration: opt.duration? Math.ceil(opt.duration / 17) : 0,
          callback: opt.callback || false
        };

        var step= function() {

          //根据缓动算法取的值
          var value = opt.end-vm.easeInOut(opt.currentTime, opt.begin, opt.end-opt.begin, opt.duration)+opt.begin;
          opt.dom.style.transform= 'translate3d(0,'+value+'px,0)';

          opt.currentTime++;

          //判断是否到时间
          if (opt.currentTime <= opt.duration) {
               // 继续运动
               requestAnimationFrame(step);
          } else {
              // 动画结束
              if(opt.callback) opt.callback();
          } 
        };
        step();
      },

      moveTransition(dom, distance, duration){
        dom.style.transform= 'translate3d(0,'+distance+'px,0)';
      },

      /**
       * [refresh 刷新后台刷新]
       * @return {[type]} [description]
       */
      refresh() {
        var vm= this;
        if (!vm.isLoading) {
          vm.isLoading= true;
          var offsetLoading= vm._loadingWrap.offsetHeight;

          //模拟接口数据
          setTimeout(function(){
            //产生随机数列
            vm.randomArray= vm.randomNumber(vm.randomLength);
            //回滚原始状态
            vm.pullTransition({
              dom: vm._scrollWrap,
              end: offsetLoading,
              duration: 500,
              callback: vm.resetStatus
            });
          }, 800);
        }
      },

      /**
       * [resetStatus 重置状态]
       * @return {[type]} [description]
       */
      resetStatus() {
        var vm= this;
        vm.isPull= false;
        vm.isLoading= false;
        vm.isBack= false;
        vm.startPos= 0;
        vm.endPos= 0;
        vm.distance= 0;
      },

      fixExposed() {
        var vm= this;
        // 防止内容区域滚到底后引起页面整体的滚动
        var content = document.querySelector('.pullDown__scroll');
        var startY;

        content.addEventListener('touchstart', function (e) {
            startY = e.touches[0].clientY;
        });

        content.addEventListener('touchmove', function (e) {
            // 高位表示向上滚动
            // 底位表示向下滚动
            // 1容许 0禁止
            var status = '11';
            var ele = this;

            var currentY = e.touches[0].clientY;

            if (ele.scrollTop === 0) {
                // 如果内容小于容器则同时禁止上下滚动
                status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01';
            } else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
                // 已经滚到底部了只能向上滚动
                status = '10';
            }

            if (status != '11') {
                // 判断当前的滚动方向
                var direction = currentY - startY > 0 ? '10' : '01';
                // 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
                if (!(parseInt(status, 2) & parseInt(direction, 2))) {
                  e.preventDefault();
                  e.stopPropagation();
                }
            }
        });
      },
      /**
       * [randomNumber 产生随机数]
       * @param  {[type]} length [随机数组长度]
       * @return {[type]}        [description]
       */
      randomNumber(length) {
        var arr= [];
        for(var i=0; i<length; i++) {
          arr.push(Math.floor(Math.random()*100+1));
        }
        return arr;
      },

      /**
       * [Linear 缓动算法]
       * @param {[type]} t [current time（当前时间）]
       * @param {[type]} b [beginning value（初始值）]
       * @param {[type]} c [change in value（变化量）]
       * @param {[type]} d [duration（持续时间）]
       */
      easeInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t*t + b;
        return c / 2*((t -= 2) * t * t + 2) + b;      
      }
    }
  }
</script>

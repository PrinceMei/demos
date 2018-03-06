<template>
  <div id="vertical">
    <div class="box">
      <div class="box__title">
        方法一： table-cell
      </div>
      <div class="box__demo">
        <div class="table">
          <div class="table-cell">
          </div>
        </div>
      </div>
      <div class="box__code">
        .table{
          display: table-cell;
          vertical-align: middle;
          width: 200px;
          height: 200px;
          background-color: #1890ff;
        }
        .table-cell{
          margin-left: auto;
          margin-right: auto;
          width: 100px;
          height: 100px;
          background-color: #fff;
        }
      </div>
    </div>

    <div class="box">
      <div class="box__title">
        方法二： display:flex
      </div>
      <div class="box__demo">
        <div class="flex">
          <div>
            <p>文字垂直居中</p>  
          </div>
        </div>
      </div>
      <div class="box__code">
        .flex{
          width: 200px;
          height: 200px;
          background-color: #1890ff;
          color: #fff;

          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-align: center;
          -webkit-align-items: center;
          align-items: center;
          -webkit-box-pack:center;
          -webkit-justify-content:center;
          -ms-flex-pack:center;
          justify-content:center;
        }
      </div>
    </div>

    <div class="box">
      <div class="box__title">
        方法三： 绝对定位和负边距(确定子元素宽高)
      </div>
      <div class="box__demo">
        <div class="position">
          <div class="position-child">
          </div>
        </div>
      </div>
      <div class="box__code">
        .position{
          width: 200px;
          height: 200px;
          background-color: #1890ff;
          color: #fff;

          position: relative;
        }
        position-child{
          position: absolute;
          top:50%;
          left:50%;
          width: 100px;
          height: 100px;
          margin-left: -50px;
          margin-top: -50px;
          background-color: #f8f8f8;
          color: #000;
        }
      </div>
    </div>   

    <div class="box">
      <div class="box__title">
        方法四： translate(方法三的变种, 但子元素可不固定高度、宽度)
      </div>
      <div class="box__demo">
        <div class="translate">
          <div class="translate-child">
          </div>
        </div>
      </div>
      <div class="box__code">
        .translate{
          width: 200px;
          height: 200px;
          background-color: #1890ff;
          color: #fff;

          position: relative;
        }
        .translate-child{
          position: absolute;
          top:50%;             
          left:50%;             
          transform:translate(-50%,-50%);             
          -webkit-transform:translate(-50%,-50%);             
          -moz-transform:translate(-50%,-50%);             
          -ms-transform:translate(-50%,-50%);
          width: 100px;
          height: 100px;
          background-color: #f8f8f8;
        }
      </div>
    </div>

    <div class="box">
      <div class="box__title">
        方法五： top,bottom,left,right: 0
      </div>
      <div class="box__demo">
        <div class="reset">
          <div class="reset-child">
          </div>
        </div>
      </div>
      <div class="box__code">
        .reset{
          width: 200px;
          height: 200px;
          background-color: #1890ff;
          color: #fff;

          position: relative;
        }
        .reset-child{
          position: absolute;
          width: 100px;
          height: 100px;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin:auto;
          background-color: #f8f8f8;
        }
      </div>
    </div>   

    <div class="box">
      <div class="box__title">
        方法六： line-height(常用于文字垂直居中)
      </div>
      <div class="box__demo">
        <div class="lineHeight">
          <p>文字垂直居中</p>
        </div>
      </div>
      <div class="box__code">
        .lineHeight{
          width: 200px;
          height: 200px;
          background-color: #1890ff;
          color: #fff;
          line-height: 200px;
          text-align: center;
        }
      </div>
    </div>   

  </div>
</template>

<script>
import '@/components/vertical-center/index.scss'

export default {
  name: 'Vertical',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>


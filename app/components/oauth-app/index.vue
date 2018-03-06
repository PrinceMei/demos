<template>
  <div id="ouathApp">
    <a class="ouathApp__login" :href="identity_url">
      <span>GitHub</span>
    </a>  
    <div class="ouathApp__data">
      <p v-for="(value, key) in user">
        {{key}} ：<span>{{value}}</span>
      </p>
    </div>  
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'ouathApp',
  data() {
    return {
      identity_url: '/oauth/github/login',
      access_token: '',
      user: {}
    }
  },
  mounted() {
    var vm= this;
    if (vm.getCookieQuery('access_token')) {
      vm.access_token= vm.getCookieQuery('access_token');
      vm.getUser();
    }
  }, 
  methods:
  {
    getCookieQuery(name) {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); //正则匹配
      if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
      } else{
       return null;
      }    
    },
    getUser() {
      var vm= this;
      var path= '/oauth/github/getUser?access_token='+ vm.access_token;
      axios.get(path).then(function(response) {
        vm.user= response.data;
      });
    }
  },
  components: {
  }
}
</script>

<style scoped>
  .ouathApp__login{
    margin: 2em;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    line-height: 32px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
  }
  .ouathApp__data{
    line-height: 1.2;
    padding: 2em;
  }
</style>
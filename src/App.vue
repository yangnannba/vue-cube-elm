<template>
  <div id="app">

    <MyHeader  :seller="seller"/>
    <ul class="tabs">
      <router-link :to="{path:'/diancan'}" tag="li">商品</router-link>
      <router-link :to="{path:'/pingjia'}" tag="li">评价</router-link>
      <router-link :to="{path:'/shangjia'}" tag="li">商家</router-link>

    </ul>
    
    <router-view :seller="seller"/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import seller from './seller.json'
export default {
  name: 'App',
  components:{
    MyHeader
  },
  data(){
    return {
seller:seller
    }
      
  },
  /*
  computed:{
    seller:function(){
      return this.$store.state.seller
    }
  },*/

}
</script>

<style scoped lang="scss">
@import './common/style/styles.scss';
.tabs{
  display: flex;
  width: 100%;
  border-bottom: px2rem(1px) solid  #ccc;
  font-size: 0.6rem;

  li{
    flex:1;
    line-height:2.2em;
    text-align: center;
    color:#626262;
  }
  .router-link-active{
    color:#000;
    font-weight: bold;

    &:after{
      content:"";
      display: block;
      height:px2rem(4px);
      width:2rem;
      margin: 0 auto;
      background: #2696fc;
    }
  }
}
</style>

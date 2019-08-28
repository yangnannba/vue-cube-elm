<template>
<div>
  <div class="shopcart">
    <div class="shopcart-left" @click="toggleshopcart">
      <div class="gouwuche" :class="{'highlight':totalcount>0}">
        <i class="iconfont icon-gouwucheman"></i>
        <span class="totalcount" v-show="totalcount">{{totalcount}}</span>
      </div>
      <div class="price" :class="{'highlight':totalcount>0}">{{totalprice}}元</div>
      <div class="desc">配送费{{deliveryprice}}元</div>
    </div>
    <div class="shopcart-right" :class="{'highlight':totalprice>minprice}">{{pay}}</div>
  </div>
  <transition name="mask">
  <div class="list-mask" v-show="listshow">
    <div class="list-header">
      <h3>已选商品</h3>
      <span @click="clearcart"><i class="iconfont icon-icon_qingkong"></i> 清空</span>
    </div>
    <div class="list-content">
      <ul>
        <li v-for="(food,index) in selectfoods" :key="index" class="list-item">
          <div>
            {{food.name}}
          </div>
          <div>
            <span class="fooditemprice">￥{{food.price * food.count}}</span>
            <div class="cart-control">
<cart-control :good="food" :totalcount="totalcount" @mydis="mynone"></cart-control>
            </div>
            
          </div>
        </li>
      </ul>
    </div>

  </div>
  </transition>
</div>
</template>

<script>
import CartControl from "./CartControl"
export default {
  name: 'shopcart',
  data:function(){
  return {
    listshow:false
  }
  },
  props:{
    selectfoods:{
      type:Array,
      default (){
        return [
                         {
                            price: 1,
                            count: 1
                        },
                        {
                            price: 10,
                            count: 5
                        }         
        ]
      }
    },
    deliveryprice:{
      type:Number,
      default:0

    },
    minprice:{
      type:Number,
      default:0
    }
  },
  computed:{
    totalprice:function(){
      let total=0;
      this.selectfoods.forEach((food)=>{
           total+=food.price * food.count ;
      })
      return total;
    },
    totalcount(){
      let total=0;
      this.selectfoods.forEach((food)=>{
           total+=food.count ;
      })
      return total;      
    },
    pay(){
      if(this.totalprice===0){
        return `￥${this.minprice}元起送`;
      }else if(this.totalprice<this.minprice){
        let diff=this.minprice-this.totalprice;
        return `还差${diff}元起送`;

      }else{
        return "去支付";
      }
    }
  },
  methods:{
    toggleshopcart:function(){
      if(this.totalcount===0){
       return ;
      }
      this.listshow=!this.listshow
    },
    clearcart(){
      this.selectfoods.forEach((food)=>{
           food.count=0;
      })
      this.listshow=false
    },
    mynone(){
      if(this.totalcount===0){
 this.listshow=false
      }
    }

  },
  components:{
    CartControl
  }

}
</script>


<style lang="scss" scoped>
@import "../common/style/styles.scss";
.shopcart{
  width: 100%;
  height: px2rem(80px);
  position: fixed;
  bottom: 0;
  left: 0;
  background: #242827;
  display: flex;
  z-index: 9;
  justify-content: space-between;
      color:rgba(255,255,255,0.4);
  .shopcart-left{
    flex: 1;
    .gouwuche{
      width:px2rem(80px);
      height: px2rem(80px);
      background: #1c1b19;
      border-radius: 50%;
      border: 0.25rem solid #242827;
      position: relative;
      top: -0.5rem;
      margin: 0 px2rem(25px);
      display: inline-block;
      vertical-align: top;
      text-align: center;
      .totalcount{
        position: absolute;
        top: -0.2rem;
        right:-0.2rem;
        background: #f91b18;
        color: #fff;
        display: inline-block;
        border-radius: 0.5rem;
        padding:0.1rem 0.3rem;
        font-size: 0.5rem;
      }
      &.highlight{
        background: #00a0dc;
        .icon-gouwucheman{
          color: #fff;

        }
      }
      .icon-gouwucheman{
        line-height:px2rem(80px);
        font-size: 0.9rem;

      }
    }
    .price{
      display: inline-block;
      border-right:px2rem(1px) solid rgba(255,255,255,0.4); 
      line-height: px2rem(40px);
      padding-right: px2rem(18px);
      margin-top: px2rem(20px);
      margin-right:px2rem(18px);
      font-weight: bold;
      font-size: 0.6rem;
      &.highlight{
        color: #fff;
      }
    }
    .desc{
      display: inline-block;
      font-weight: 200;
      font-size: 0.5rem;
    }
  }
  .shopcart-right{
    background: #2b343b;
    height: px2rem(80px);
    width: px2rem(180px);
    text-align: center;
    color:rgba(255,255,255,0.4);
    line-height: px2rem(80px);
    font-size: 0.6rem;
    font-weight: bold;
    &.highlight{
      background: #39c972;
      color: #fff;
    }

  }
}

.list-mask{
  position: fixed;
  bottom: px2rem(80px);
  left: 0;
  width: 100%;
  background: #fdfffe;
  z-index: 1;
  font-size: 0.5rem;
  .list-header{
    height: px2rem(66px);
    background: #eff0f4;
    color: #858988;
    line-height:px2rem(66px);
    display: flex;
    justify-content:space-between;
    padding: 0 px2rem(26px);
    border-bottom:px2rem(1px) solid #ccc;

    h3{
      font-weight: normal;

    }
    span{

    }
  }
  .list-content{
    padding: 0 px2rem(26px);
    max-height: px2rem(400px);
    overflow: auto;

    li.list-item{
      position: relative;
      display:flex;
      justify-content: space-between;
      border-bottom: px2rem(1px) solid #f1f3f2;
      line-height: px2rem(80px);
      .fooditemprice{
        font-weight: bold;
        color:#f91b18;
      }
      .cart-control{
        display: inline-block;
        margin-left: 0.4rem;
      }
    }
  }
}


.mask-enter,.mask-leave-to{
  transform: translateY(px2rem(480px));
}
.mask-enter-active,.mask-leave-active{
  transition: all 0.3s;
}
</style>

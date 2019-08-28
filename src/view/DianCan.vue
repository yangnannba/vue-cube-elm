<template>
  <div class="diancan">
    <!--<div class="menu-wrapper" ref="menuwrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :key="index">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodswrapper">
      <ul>
      <li v-for="(item,index) in goods" :key="index">
        <h2 class="title">{{item.name}}</h2>
        <ul>
          <li v-for="(good,index) in item.foods" class="good-item" :key="index" @click="showfooddateil(good)">
            <div class="icon">
              <img :src="good.icon" />
            </div>
            <div class="content">
              <h3 class="name">{{good.name}}</h3>
              <p class="cellcount">月售{{good.sellCount}}份 好评率{{good.rating}}%</p>
              <p class="price">￥{{good.price}} <span class="oldprice" v-if="good.oldPrice">￥{{good.oldPrice}}</span></p>
            </div>
            <div class="cart-control">
              <cart-control :good="good"></cart-control>
            </div>
            
          </li>
        </ul>
      </li>
      </ul>
    </div>-->

<cube-scroll-nav
  :side="true"
  :data="goods"
  :current="current"
  @change="changeHandler"
  @sticky-change="stickyChangeHandler">

  <cube-scroll-nav-panel
  class="menu-wrapper"
    v-for="item in goods "
    :key="item.name"
    :label="item.name"
    :title="item.name">
    <ul class="foods-wrapper">
      <li v-for="(food,index) in item.foods" class="good-item" :key="index" @click="showfooddateil(food)">
        
            <div class="icon">
              <img :src="food.icon" />
            </div>
            <div class="content">
              <h3 class="name">{{food.name}}</h3>
              <p class="cellcount">月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
              <p class="price">￥{{food.price}} <span class="oldprice" v-if="food.oldPrice">￥{{food.oldPrice}}</span></p>
            </div>
            <div class="cart-control">
              <cart-control :good="food"></cart-control>
            </div>
        
      </li>
    </ul>
  </cube-scroll-nav-panel>
</cube-scroll-nav>




    <ShopCart :selectfoods="selectfoods" :deliveryprice="seller.deliveryPrice"   :minprice="seller.minPrice"/>
    <food-details :food="food" ref="fooddetail"></food-details>
  </div>





  
</template>

<script>
//import BScroll from 'better-scroll'
import { createAPI, BetterScroll, Locale } from 'cube-ui'
import ShopCart from '../components/ShopCart'
import CartControl from "../components/CartControl"
import FoodDetails from "../components/FoodDetails"

export default {
  name: 'diancan',
  data:function(){
    return {
      food:{},
      goods:[],
   current:"热销榜"
    }

  },
  props:["seller"],
  computed:{
/*

    goods:function(){
      return this.$store.state.goods
    },
    */

    selectfoods:function(){
      let foods=[];
      this.goods.forEach((good)=>{
          good.foods.forEach((food)=>{
            if(food.count){
              foods.push(food);
            }
          })
      })
      return foods;
    }
  },
  /*
  methods:{

    initscroll:function(){
      let menuwrapper = new BScroll(this.$refs.menuwrapper,{
          scrollY: true,
          click: true
      })

      let foodswrapper = new BScroll(this.$refs.foodswrapper,{
          scrollY: true,
          click: true
      })

    },

 
  },
  */
  methods:{
      changeHandler(label) {
        this.current=label       
        console.log('changed to:', label)
      },
      stickyChangeHandler(current) {
        this.current=current
        console.log('sticky-change0000000', current)
      },
      showfooddateil(good){
      this.food=good;
      this.$refs.fooddetail.showfood=true
      }
  },
  components:{
    ShopCart,
    CartControl,
    FoodDetails


  },
  created(){
/*
          this.$nextTick(() => {
               this.initscroll();
          });*/

    this.$http.get("/api/goods.json").then(res=>{
       this.goods=res.data.goods
    })



  }
}
</script>

<style lang="scss" >
@import '../common/style/styles.scss';
.diancan{
  position: fixed;
  top:11.2rem;
  left: 0;
  right: 0;
  bottom: px2rem(80px);
  display: flex;
  width: 100%;
  overflow: hidden;
    background: #f7f9f8;

  .menu-wrapper{
    flex-basis:px2rem(130px); 
    background: #f7f9f8;
  }
  .menu-item{
    display: flex;
    align-items:center;
    height: px2rem(80px);
    font-size: 0.5rem;
    span{
      padding: 0 0.4rem;
    }
  }
}

.foods-wrapper{

  .good-item{
    position: relative;
    display: flex;
    margin: 0.6rem;
    border-bottom: px2rem(1px) solid  #f2f2f2;
    padding-bottom: 0.6rem;
    &:last-child{
       border-bottom: none;
       padding-bottom: 0;

    }
    .cart-control{
     position: absolute;
    bottom: 0.4rem;
    right: 0;     
    }
    .icon{
      width: px2rem(120px);
      height:px2rem(120px);
      margin-right :px2rem(20px);
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex:1;
      .name{
        font-size: 0.6rem;
      }
      .cellcount{
        color: #8d8d8d;
        font-size: 0.5rem;
      }
      .price{
        
        color: #f01b1f;
        font-weight: bold;
        font-size: 0.6rem;
        .oldprice{
          color: #95989d;

          font-size: 0.5rem;
          text-decoration: line-through;
        }
      }

    }
  }
}
  .cube-scroll-nav-panel-title{
    background: #f4f5f7;
    color:#959aa0;
    font-size: 0.6rem;
    font-weight: 200;
    line-height: 2em;
    border-left: 0.1rem solid #d9dce1;
    text-indent: 0.4rem;
    width: 100%;
  }
</style>

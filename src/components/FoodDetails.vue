<template>
<transition name="mask">
  <div class="FoodDetails" v-if="showfood">
      <div class="image">
          <img :src="food.image" />
          <span class="close" @click="showfood=false">X</span>
      </div>
      <div class="food-content">
          <h2>{{food.name}}</h2>
          <div class="sellcount">月售{{food.sellCount}} 好评率{{food.rating}}%</div>
          <div class="foodprice">
            <span class="fooditemprice">￥{{food.price}}</span>

            <cart-control :good="food"></cart-control>

            
          </div>    
          <p class="desc">{{food.info}}</p>      
      </div>

  </div>
</transition>
</template>

<script>
import CartControl from "./CartControl"
export default {
  name: 'FoodDetails',
  props:{
      food:{
          type:Object
      }


  },
  data () {
    return {
      showfood:false
    }
  },
  components:{
    CartControl
  }
}
</script>


<style lang="scss" scoped>
@import "../common/style/styles.scss";
.FoodDetails{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: px2rem(80px);
    background: #fff;
    z-index: 1;
    .image{
        width: 100%;
        height: 0;
        padding-top: 100%;
        box-sizing: border-box;
        position: relative;
        img{
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height:100%;
        }
        .close{
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            width: px2rem(50px);
            height: px2rem(50px);
            border-radius: 50%;
            text-align: center;
            line-height: px2rem(50px);
            background: rgba(0,0,0,0.5);
            color: #fff;
            font-size: 1rem;
        }


    }
    .food-content{
        padding: px2rem(28px);
        h2{
            font-size: .8rem;
            margin-bottom: 0.2rem;
        }
        .sellcount{
            font-size: 0.6rem;
            color: #58585a;
            margin-bottom: 0.5rem;
        }
        .foodprice{
            display: flex;
            justify-content:space-between;
            margin-bottom: 0.3rem;
        }
        .fooditemprice{
            color:#f91b18;
            font-size: 0.5rem;
        }
        .desc{
            line-height: 1.6em;
            color: #565658;
            font-size: 0.6rem;
        }
    }

}

.mask-enter,.mask-leave-to{
  transform: translateY(100%);
}
.mask-enter-active,.mask-leave-active{
  transition: all 0.3s;
}
</style>

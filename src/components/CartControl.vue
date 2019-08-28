<template>
  <div class="cartcontrol">
      <transition name="mymove">
           <div @click.stop="myjian"  class="jian" v-if="good.count>0"><i class="iconfont icon-jianhao"></i></div>
      </transition>
       <transition name="mymove">     
      <div class="count" v-show="good.count>0">{{good.count}}</div>
      </transition>      
      <div @click.stop="myjia" class="jia"><i class="iconfont icon-jiahao"></i></div>

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'cartcontrol',
  props:{
      good:{
          type:Object
      }

  },
  data () {
    return {
      
    }
  },
  methods:{
      myjia:function(){
          console.log(11);
          if(!this.good.count){
              //this.good.count=1;
              Vue.set(this.good,'count',1);
          }else{
              this.good.count+=1;
          }
      },
      myjian:function(){
          if(this.good.count){
              this.good.count-=1;
          }
          
              this.$emit("mydis")
          
      }
  }
}
</script>


<style lang="scss" scoped>
@import "../common/style/styles.scss";
.cartcontrol{


    color: #00a0dc;
    .jian{
     

        display: inline-block;
         vertical-align: middle;       
        .iconfont{
            font-size: 0.8rem;
        }
    }
    .count{
        display: inline-block;
        margin: 0 px2rem(5px);
        color: #999ea4;
        font-size: 0.5rem;
        vertical-align: middle;
    }
    .jia{
        display: inline-block;
         vertical-align: middle;       
        .iconfont{
            font-size: 0.8rem;
        }        
    }

}


.mymove-enter,.mymove-leave-to{
    opacity: 0;
    transform: translateX(20px);
}
.mymove-enter-active,.mymove-leave-active{
    transition: all 0.3s ease;
  
}
</style>

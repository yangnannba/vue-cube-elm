<template>
  <div class="myheader">
     <div class="logo">
       <img :src="seller.avatar" />
       <div class="background"><img :src="seller.avatar"  /></div>
     </div>
     <h1 class="myh">{{seller.name}}</h1>
     <p class="sunh">评价{{seller.score}}  月售{{seller.sellCount}}单 蜂鸟专送约{{seller.deliveryTime}}分钟</p>
     <p class="youhui jianman" v-if="seller.supports" @click="showdetail">{{seller.supports[0].description}} <span class="youhui-length">{{seller.supports.length}}个优惠</span></p>
     <p class="gonggao" @click="showdetail">公告：{{seller.bulletin}}</p>
     <transition name="fade">
     <div class="detail" v-show="detailshow">
       <div class="detail-wrap">
         <div class="detail-main">
           <h2 class="name">{{seller.name}}</h2>
           
<rate :myscore="myscore" :disabled="disabled" :justify="justify" class="myrate"></rate>
           <div class="title">
             <div class="line"></div>
             <div class="text">优惠信息</div>
             <div class="line"></div>

           </div>

           <ul class="supports">
             <li class="support-item" v-for="item in seller.supports" :class="{'jianman':item.type==0,'zhekou':item.type==1,'taochan':item.type==2,'baozhang':item.type==3,'jihua':item.type==4,}">
               {{item.description}}
             </li>
           </ul>

           <div class="title">
             <div class="line"></div>
             <div class="text">商家公告</div>
             <div class="line"></div>

           </div>
           <div class="bulletin">
             <p class="content">{{seller.bulletin}}</p>
           </div>
         </div>
       </div>
       <div class="close"  @click="hidedetail">X</div>
     </div>
     </transition>
  </div>
</template>

<script>
import rate from "./rate"
export default {
  name: 'myheader',
  props:{
    seller:{
      type:Object
    }

  },
  data () {
    return {
      detailshow:false,
      justify:true,

      disabled:true
    }
  },
  computed:{
    myscore:function(){
      return this.seller.score
    }
  },
  methods:{
    showdetail(){
      this.detailshow=true;
    },
    hidedetail(){
      this.detailshow=false;      
    }
  },
  components:{
    rate
  }
}
</script>


<style lang="scss" scoped>
@import "../common/style/styles.scss";
.myheader{

  .logo{
      width: 100%;
      height: px2rem(90px);
      background: rgba(0, 0, 0,0.5) ;
      margin-bottom: 1rem;
      position: relative;

      .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        overflow: hidden;
        img{
         width: 100%;
        height: 100%; 
                filter: blur(10px);        
        }
      }
    img{
      position: relative;
      top:.6rem;
      width:  px2rem(80px);
      height:  px2rem(80px);
      margin: 0 auto;
      @include radius(0.1rem);

    }

  }
    .myh{
      font-size:0.8rem;
      text-align: center;
      margin-bottom: 0.2rem;
    }
    .sunh{
      text-align: center;
      font-size: .5rem;
      margin-bottom: 0.4rem;
    }
    .youhui{
      color:#303030;
      font-size: 0.6rem;
      padding:0 px2rem(60px);
      margin-bottom: 0.4rem;
    }
    .youhui-length{
      float: right;
    
      color: #9b9b9b;
      &:after{
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border-top:0.3rem  solid  #9b9b9b;
        border-left: 0.3rem solid transparent;
        border-right: 0.3rem solid transparent;  
        margin-left: 0.2rem;       
      }
    }

    .jianman{
      &:before{
        content:"减满";
        display: inline-block;
        background: #e57571;
        color: #fff;
        padding: 0.1rem 0.2rem;
        border-radius: 0.1rem;
        margin-right: px2rem(10px);
      }
    }





    .zhekou{
      &:before{
        content:"折扣";
        display: inline-block;
        background: #f89d10;
        color: #fff;
        padding: 0.1rem  0.2rem;
        border-radius: 0.1rem;
        margin-right: px2rem(10px);
      }
    }


    .taochan{
      &:before{
        content:"套餐";
        display: inline-block;
        background: #fe5c07;
        color: #fff;
        padding: 0.1rem  0.2rem;
        border-radius: 0.1rem;
        margin-right: px2rem(10px);
      }
    }


    .baozhang{
      &:before{
        content:"保障";
        display: inline-block;
        background: #7ac26c;
        color: #fff;
        padding:0.1rem  0.2rem;
        border-radius: 0.1rem;
        margin-right: px2rem(10px);
      }
    }


    .jihua{
      &:before{
        content:"计划";
        display: inline-block;
        background: #009ff5;
        color: #fff;
        padding: 0.1rem  0.2rem;
        border-radius: 0.1rem;
        margin-right: px2rem(10px);
      }
    }


.gonggao{
       padding:0 px2rem(60px);
       white-space: nowrap;
       overflow: hidden; 
       text-overflow: ellipsis;
       font-size: 0.5rem;
       color: #a09ea1;
}

}

.detail{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0,0.8);

   backdrop-filter: blur(20px);
  overflow: auto;
  z-index: 999;
  .name{
    font-size: 0.7rem;
    text-align: center;
    margin-bottom: .6rem;
    padding-top: 2rem;
  }
  .detail-wrap{
    min-height: 100%;

  }
  .detail-main{
        color: #fff;
    padding-bottom: 2rem;
  }
  .title{
    display: flex;
    font-size: 0.6rem;
    width: 80%;
    margin: 0 auto px2rem(30px);
    .text{
      padding:0 0.5rem;
    }
    .line{
      flex: 1;
      border-bottom: px2rem(1px) solid rgba(255,255,255,0.5);
      position: relative;
      top: -0.35rem;
    }

  }
  .close{
    position: relative;
    margin:-2rem auto 0;
    font-size: px2rem(50px);
    color: #fff;
    text-align: center;


  }
  .supports{
    width:80%;
    margin: 0 auto 1.6rem;
    font-size: 0.6rem;
  }
  .support-item{
    margin-bottom: px2rem(16px);
  }
  .bulletin{
    width: 80%;
    margin:0 auto;
    .content{
      line-height: 2em;
      font-size:0.6rem;
    }
  }
}

.myrate{
  width: 50%;
  margin: 0 auto px2rem(50px);
}
.fade-enter,.fade-leave-to{
  opacity: 0;


}
.fade-enter-active,.fade-leave-active{
  transition: all 0.4s;
}
</style>

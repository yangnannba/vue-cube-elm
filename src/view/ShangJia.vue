<template>
  <div id="shangjia">
    <div class="peisong-item">
      <h2 class='title'>配送信息</h2>
      <div>
        <div class="fnzs"><span >蜂鸟专送</span>约{{seller.deliveryTime}}分钟送到，距离{{seller.rankRate}}km</div>
        <div class="psf">配送费￥{{seller.deliveryPrice}}</div>
      </div>

    </div>
    <split></split>
    <div class="fuwu-item">
      <h2 class='title'>商家服务</h2>
      <ul class="supports">
        <li v-for="(item,index) in seller.supports" :key="index" class="supports-item" :class="{'jianman':item.type==0,'zhekou':item.type==1,'taochan':item.type==2,'baozhang':item.type==3,'jihua':item.type==4,}">
          {{item.description}}
        </li>
      </ul>
    </div>  

    <split></split>
    <div class="shijing-item">
      <h2 class='title'>商家实景</h2>
      <ul class="pics">
        <li v-for="(item,index) in seller.pics" class="pics-item" :key="index">
          <img :src="item" />
        </li>
      </ul>
    </div>   


    <split></split>
    <div class="shunagjia-item">
      <h2 class='title'>商家信息</h2>
      <div class="bulletin">{{seller.bulletin}}</div>
      <ul>
        <li v-for="(item,index) in seller.infos" class="info-item" :key="index">
          {{item}}
        </li>
      </ul>
    </div>    

  </div>
</template>

<script>
import split from '../components/split'




export default {
  name: 'shangjia',
  props:["seller"],
  components:{
    split
  }
}
</script>


<style lang="scss" scoped>
@import "../common/style/styles.scss";
#shangjia{
  font-size: 0.6rem;
}
  h2.title{
    font-size: 0.6rem;
    color: #000;
    margin-bottom: px2rem(22px);
  }

.peisong-item{
  padding: px2rem(28px) px2rem(26px);
  color: #525252;

  .fnzs{
    margin-bottom:px2rem(10px);
    span{
      background: #0098fd;
      color: #fff;
      padding:0 0.2rem;
      line-height: 2em;
      display:inline-block;
      border-radius: 0.2rem;
      margin-right: px2rem(18px);
    }
  }
}
.shunagjia-item{
  padding: px2rem(28px) px2rem(26px); 
  .bulletin{
    margin-bottom: px2rem(24px);
    color: #505050;
    line-height: 1.5em;
  } 
  .info-item{
    padding:px2rem(26px) 0;
    border-top: px2rem(1px) solid #eeeeee;
    color: #000;
  }
}


.fuwu-item{
  padding: px2rem(28px) px2rem(26px);  
  .supports-item{
    padding:px2rem(26px) 0;
    border-top: px2rem(1px) solid #eeeeee;
  }

} 

    .jianman{
      &:before{
        content:"减满";
        display: inline-block;
        background: #e57571;
        color: #fff;
        padding: 0 0.2rem;
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
        padding: 0 0.2rem;
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
        padding: 0 0.2rem;
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
        padding: 0 0.2rem;
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
        padding: 0 0.2rem;
        border-radius: 0.1rem;
        margin-right: px2rem(10px);
      }
    }



.shijing-item{
  padding: px2rem(28px) px2rem(26px);    
  .pics{
    display: flex;
    overflow: auto;

    
  }
  .pics-item{
    flex:0 0 px2rem(206px);
    width: px2rem(206px);
    display: inline-block;
    height:px2rem(152px);
    margin-right: px2rem(10px);
    img{
      width:100%;
      height:100%;
    }
  }
}
</style>

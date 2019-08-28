<template>
  <div id="pingjia">
    <div class="pingfeng">
      <div class="pingfeng-left">
        <div class="score">{{seller.score}}</div>
        <div class="suangjia">
          <span>商家评分</span>
          <rate  :myscore="myscore" :disabled="disabled" :justify="justify" class="myrate"></rate>
        </div>
      </div>
      <div class="pingfeng-right">
        <div>味道<span>{{seller.foodScore}}</span></div>
        <div>包装<span>{{seller.serviceScore}}</span></div>
        <div>配送<span>{{seller.deliveryTime}}</span></div>
      </div>
    </div>
    <split></split>
    <div class="ratingselect">
      <ul class="rating-type">
        <li :class="{'active':rateType===2}" @click="rateType=2">全部{{ratings.length}}</li>
        <li :class="{'active':rateType===0}" @click="rateType=0">满意{{manyi.length}}</li>
        <li :class="{'active':rateType===1}" @click="rateType=1" class="no">不满意{{bumanyi.length}}</li>
      </ul>
      <div @click="onlyContent=!onlyContent" class='switch'><span class="iconfont icon-icon_duihao-mian" :class="onlyContent?'lan':'hui'" ></span><span>只看有内容的评论</span></div>
    </div>
    <ul class="list-pingjia">
      <li v-for="(item,index) in myratings" :key="index" class="pingjia-item" v-if="onlyContent?item.text:true">
        <div class="touxiang"><img :src="item.avatar" /></div>
        <div class="pingjia-content">
          <h2 class="name">{{item.username}}</h2>
          <div class="score">
            <rate  :myscore="item.score" :disabled="disabled" :justify="justify" class="myrate"></rate>
            <span v-if="item.deliveryTime" class="deliveryTime">{{item.deliveryTime}}分钟送达</span>
          </div>
          <p class="text">{{item.text}}</p>
          <div class="ratetime">{{item.rateTime | mytime}}</div>
          <ul class="recommend-list">
            <i :class="{ 'cubeic-good':item.rateType===0,'cubeic-bad':item.rateType===1}" v-if="item.recommend.length>0"></i>
            <li v-for="(biaoqian,index) in item.recommend" :key="index">
              {{biaoqian}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import split from "../components/split"
import rate from "../components/rate"
import ratings from '../ratings.json'
export default {
  name: 'pingjia',
  props:["seller"],
  data:function(){
    return {
      rateType:2,
      onlyContent:true,
      ratings:ratings,
            justify:false,

      disabled:true
    }

  },
  computed:{
    /*
    ratings:function(){
      return this.$store.state.sratings
    },
    */
       myscore:function(){
      return this.seller.score
    },
    myratings:function(){
      if(this.rateType===0){
        return this.manyi;
      }else if(this.rateType===1){
        return this.bumanyi;
      }else{
         return this.ratings;       
      }

    },
    manyi:function(){
      return this.ratings.filter((item)=>{
        return item.rateType===0;
      })
    },
    bumanyi:function(){
      return this.ratings.filter((item)=>{
        return item.rateType===1;

      })
    }
  },
  filters:{
    mytime:function(value){
      let sjijian=new Date(value);
      let nian=sjijian.getFullYear();
      let yue=sjijian.getMonth()+1;
      let ri=sjijian.getDay();
      let shi=sjijian.getHours();
      let fen=sjijian.getMinutes();
      let miao=sjijian.getSeconds();
      function zhuanhuan(time){
        if(time<10){
          return "0"+time;
        }else{
          return time;
        }
      }
      return nian+"-"+zhuanhuan(yue)+"-"+zhuanhuan(ri)+" "+zhuanhuan(shi)+":"+zhuanhuan(fen)+":"+zhuanhuan(miao);
    }
  },
  components:{
    split,
    rate
  }
}
</script>

<style lang="scss" scoped>
@import "../common/style/styles.scss";
.pingfeng{
   display: flex; 
   text-align: center;
   padding: px2rem(40px) px2rem(20px);
}
.pingfeng-left{
  width: 48%;
  display: flex;
  .score{
    color: #f66200;
    font-size: 2rem;
    width: 60%;

  }
  .suangjia{
    width: 40%;
    text-align: left;
    span{
      font-size: 0.5rem;
    }
  }

}
.pingfeng-right{
   display: flex; 
   width: 51.99%;
   font-size: 0.6rem;
   div{
     flex: 1;
   }
   span{
     display: block;
     font-size: 1rem;
     color: #666;
     margin-top:0.4rem;
   }
}
.list-pingjia{
  padding: 0 px2rem(34px);
}
.pingjia-item{

  display: flex;
  padding: px2rem(34px) 0;
  border-bottom: px2rem(1px) solid #ccc;
  .pingjia-content{
      position: relative;
    flex: 1;
    .name{
      font-size: 0.6rem;
      font-weight: normal;
      margin-bottom:0.2rem;
    }
    .score{
      font-size: 0.4rem;
      margin-bottom: 0.4rem;
      .myrate{
        width: 3rem;
        display: inline-block;
                vertical-align: bottom;
      }
      .deliveryTime{
        display:inline-block;
        vertical-align: bottom;
        color:#adb1b4;
        margin-left: 0.2rem;
      }
    }
    .text{
      font-size: 0.5rem;
      line-height: 1.8em;
      margin-bottom: 0.3rem;

    }
    .ratetime{
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.5rem;
      font-weight: 200;
      color: #97989a;
    }

  }
  .recommend-list{
    i{
      font-size:0.6rem;
      line-height: 2em;
      display: inline-block;
      vertical-align: bottom;
    }
    .cubeic-good{
      color:#01a1df;
    }
    .cubeic-bad{
      color:#b7babf;
    }
    li{
      display:inline-block;
      color:#909399;
      font-size: 0.4rem;
      border:px2rem(1px) solid #ededed;
      padding: 0.15rem 0.3rem;
      border-radius: 0.1rem;
      margin-right: 0.2rem;
      margin-bottom: 0.2rem;
    }
  }
}
.touxiang{
  width: px2rem(56px);
  flex: 0 0 px2rem(56px);
  margin-right: px2rem(22px);
  img{
    width: px2rem(56px);
    height: px2rem(56px);
    border-radius: 50%;
  }
  
}

.ratingselect{
   border-bottom: px2rem(1px) solid #ccc; 
  padding:px2rem(24px) px2rem(30px);   
  font-size: 0.6rem;
  .switch{
    color:#b7babf;
    .iconfont{
      font-size: 0.8rem;
      vertical-align: middle;
      margin-right: 0.2rem;
      display: inline-block;
    }
  }
}
.rating-type{
  margin-bottom: px2rem(20px);


  li{
    display: inline-block;
    padding: 0 0.5rem;
    line-height: 3em;
    background: #eff7f9;
    color:#7d8a92;
    margin-right: px2rem(12px);
    &.active{
     background: #0691fa;
     color:#fefff5;     
    }

  }
  li.no{
    background: #f7f7f7;
    color: #b1b1b1;
    &.active{
     background: #b1b1b1;
     color:#fefff5;     
    }
  }
}
.hui{
  color:#b7babf;
}
.lan{
  color:#00a0dc;
}
</style>

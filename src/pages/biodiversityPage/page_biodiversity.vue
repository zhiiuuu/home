/** 
  我是生物多样性页面
*/
<template lang="pug">
  div
    div(class="biod_container")
      div(class="biod_box" v-for="(item, index) of kindList" v-if="index < 6" v-bind:key="item.id")
        img(class="img_box" :src="item.thumbnail && item.thumbnail.indexOf('http') !== -1 ? item.thumbnail : 'http://w.wfjjt.top/bird.png' ")
        a(id="detail" href="/bioddetailslist.html") {{ item.name }}
    FooterTab    
</template>
<script>
import FooterTab from '../components/footer_tab.vue'
import * as API from '../../../api/biodiversity'
export default {
  components:{
        FooterTab
      },
  data: () => {
    return {
      kindList:[
        {
          id:'001',
          imgURL:'http://w.wfjjt.top/bird.png',
          kindName:'鸟类'
        },
        {
          id:'002',
          imgURL:'http://w.wfjjt.top/snake.png',
          kindName:'哺乳类'
        },
        {
          id:'003',
          imgURL:'http://w.wfjjt.top/bird.png',
          kindName:'鱼类'
        },
        {
          id:'004',
          imgURL:'http://w.wfjjt.top/snake.png',
          kindName:'两栖爬行类'
        },
        {
          id:'005',
          imgURL:'http://w.wfjjt.top/bird.png',
          kindName:'植物与真菌'
        },
        {
          id:'006',
          imgURL:'http://w.wfjjt.top/snake.png',
          kindName:'无脊椎动物'
        }
      ]
    }
  },
  created() {
    this.$_get(API.BIODIVERSITY_DATA).then(res => {
      if(!res.data.isError){
        this.kindList = res.data.dateList;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .biod_container{
    width:1230px;
    height: 980px;
    margin:150px auto 0px;
    margin-bottom:60px;
  }
  .biod_box{
    width:382px;
    height:465px;
    margin:0 13.5px 50px;
    background: #FFFFFF;
    box-shadow: 0 11px 37px 0 rgba(220,220,220,0.50);
    float:left;
    margin-bottom:50px;
    cursor:pointer;
  }
  a{
    display:block;
    text-decoration:none;
    font-family:PingFangSC-Semibold;
    font-size:26px;
    color: #2D2F29;
    line-height:37px;
    text-align:center;
    margin-top:20px;
  }
</style>
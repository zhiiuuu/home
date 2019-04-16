/** 
  我是生物多样性页面
*/
<template lang="pug">
  div
    div(class="biod_container")
      div(class="biod_box" v-for="item of kindList" v-bind:key="item.id")
        img(class="img_box" :src="item.imgURL")
        p {{item.kindName}}
    FooterTab    
</template>
<script>
import FooterTab from './components/footer_tab.vue'
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
    margin-right:27px;
    background: #FFFFFF;
    box-shadow: 0 11px 37px 0 rgba(220,220,220,0.50);
    float:left;
    margin-bottom:50px;
  }
</style>
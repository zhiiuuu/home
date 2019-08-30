/** 
  我是高黎贡山介绍页面
*/
<template lang="pug">
  div
    Gaoligongslide
    Content
    FooterTab    
</template>
<script>
import Content from './components/content.vue'
import Gaoligongslide from './components/gaoligongslide.vue'
import FooterTab from '../components/footer_tab.vue'

export default {
  components:{
    FooterTab,
    Gaoligongslide,
    Content
  },
}
</script>

<style lang="scss" scoped>
  .slide_box{
    width: 100%;
    height: 900px;
    background-image: url('../../../src/images/slide2.png')
  }
</style>
<template lang='pug'>
    div(class='swiper-box')
      swiper(:options="swiperOption" ref="mySwiper" @someSwiperEvent="callback")
          swiper-slid I'm Slide 1
          swiper-slid I'm Slide 2
          swiper-slid I'm Slide 3
          swiper-slid I'm Slide 4
          swiper-slid I'm Slide 5
          swiper-slid I'm Slide 6
          div(class="swiper-pagination"  slot="pagination")           
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'detailsslide',
    components:{
        swiper,
        swiperSlide
    },
    data() {
        return {
             swiperOption: {
                pagination: '.swiper-pagination'
                // nextEl: '.swiper-button-next',
                // prevEl: '.swiper-button-next',
                // el: '.swiper-scrollbar'
            }
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    } 
}
</script>
<style lang="scss" scoped>
    .swiper-box{
      overflow: hidden;
      width: 1200px;
      height: auto;
      margin: 0 auto;
      border: 1px solid red;
    }
    swiper-slid{
      width: 1200px;
      height: 660px;
    }
</style>
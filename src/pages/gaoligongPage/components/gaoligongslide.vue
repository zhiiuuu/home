<template>
  <div>
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" ref="swiperTop" class="slide_box">
        <swiper-slide class="slide-1" v-for="itemImg of swiperImg" :key="itemImg.id">
          <img :src="itemImg.largeImg" :alt="itemImg.title">
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'gaoligongslide',
  components:{
      swiper,
      swiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        effect: 'fade',
        loop: true,
        loopedSlides: 4,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      swiperImg:[
        {
          id:1,
          title: 'slide1',
          largeImg:'http://w.wfjjt.top/j.jpg'
        },
        {
          id:2,
          title:'slide2',
          largeImg:'http://w.wfjjt.top/y.jpg'
        },
        {
          id:3,
          title:'slide3',
          largeImg:'http://w.wfjjt.top/j.jpg'
        },
        {
          id:4,
          title:'slide4',
          largeImg:'http://w.wfjjt.top/y.jpg'
        },
        {
          id:5,
          title:'slide5',
          largeImg:'http://w.wfjjt.top/j.jpg'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
    })
  }
}
</script>

<style lang="scss" scoped>
  .slide_box{
    width: 100%;
    img{
      width: 100%;
      height: 897px;
    }
    .swiper-pagination{
      z-index: 100;
      bottom: 50px;
      left: 580px;
    }
  }
  .slide_box /deep/ .swiper-pagination-bullet{
    width: 5px;
    height: 5px;
    margin:0 15px;
    display: inline-block;
    border-radius: 100%;
    background-color: #c5cbce;
    opacity: 1;
  }
  .slide_box /deep/ .swiper-pagination-bullet-active{
    box-shadow: 0px 0px 2px 4px #8b9695;
  }
</style>

<template>
  <div>
      <!-- swiper1 -->
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide class="slide-1" v-for="itemImg of swiperImg" :key="itemImg.id">
          <img :src="itemImg.largeImg" :alt="itemImg.title">
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1" v-for="itemImg of swiperImg" :key="itemImg.id">
          <div class="imgItem">
            <img :src="itemImg.largeImg" :alt="itemImg.title">
          </div>
        </swiper-slide>
      </swiper>
      <!-- 前后进退按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'detailsslide',
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
        loopedSlides: 4
      },
      swiperOptionThumbs: {
        spaceBetween: 18,
        slidesPerView: 4,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4,//looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
        },
        {
          id:6,
          title:'slide6',
          largeImg:'http://w.wfjjt.top/y.jpg'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style scoped>
  .swiper-container{
  }
  .gallery-top {
    width: 62.5%;
    margin:0 auto;
  }
  .gallery-top .swiper-slide img{
    width:824px;
    height:509px;
    display: block;
  }
  .gallery-thumbs {
    box-sizing: border-box;
    width: 62.5%;
    margin-top: 40px;
    margin-bottom: 32px;
  }
  .gallery-thumbs .swiper-slide {
    width: 100%;
    height: 120px;
    cursor: pointer;
    opacity:0.6;
  }
  .gallery-thumbs .swiper-slide img{
    width:178px;
    height:120px;
    display: block;
  }
  .gallery-thumbs .swiper-slide-active{
    opacity: 1;
  }
</style>

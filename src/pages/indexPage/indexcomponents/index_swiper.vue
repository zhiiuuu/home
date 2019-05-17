<template lang='pug'>
  .container 
    .banner-box
      .swiper-box
        .swiper-box-item(
          v-for="(item, index) of imgSrcs"
          :class="{current: currentIndex == index, prev: prevIndex == index}"
        )
          .swiper-box-item-bg(
            :style="{ backgroundImage: `url(${item})` }"
          )
          .swiper-box-item-mirror(
            :style="{ backgroundImage: `url(${item})` }"
          )
      .info-box

      .control-box
        .btn-box
          button(@click="propPage()") <
          button(@click="nextPage()") >
</template>

<script>
  import _ from 'lodash'
  export default {
    data () {
      return {
        currentIndex: 0,
        imgSrcs: [
          require('@src/images/baozi.jpg'),
          require('@src/images/banma.jpg'),
          require('@src/images/shizi.jpg'),
        ]
      }
    },

    computed:{
      prevIndex(){
        if(this.currentIndex == 0) return this.imgSrcs.length - 1;
        return this.currentIndex - 1
      }
    },

    mounted () {
      
    },

    methods:{

      propPage(){
        if(this.currentIndex == 0) return this.currentIndex = this.imgSrcs.length - 1
        this.currentIndex = this.currentIndex - 1;
      },

      nextPage(){
        if(this.currentIndex == this.imgSrcs.length - 1) return this.currentIndex = 0;
        this.currentIndex = this.currentIndex + 1;
      }
    }
  }
</script>

<style lang='scss' scoped>
.container{
  .banner-box{
    width: 100%;
    height: 100vh;
    position: relative;
    .swiper-box{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      &-item{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        &-bg{
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
        }
        &-mirror{
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
        }
      }
      &-item.current{
        z-index: 10;
        .swiper-box-item-bg{
          -webkit-filter:blur(0px) brightness(50%);
        }
        .swiper-box-item-mirror{
          animation-name: mirror-front-half;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.000, 0.575, 0.430, 0.990);
          animation-delay: 2s;
          animation-duration: 5s;
          mask-image: url('~@src/images/mirror.png');
          mask-repeat: no-repeat;
          mask-size: cover;
          mask-position: -150vw center;
        }
      }
      &-item.prev{
        animation-name: swiper;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
        animation-duration: 3s;
        z-index: 100;
        .swiper-box-item-bg{
          -webkit-filter:blur(0px) brightness(50%);
          animation-name: reskew;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
          animation-duration: 3s;
        }
        .swiper-box-item-mirror{
          animation-name: mirror-reskew;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.615, 0.115, 0.900, 0.475);
          animation-duration: 3s;
          mask-image: url('~@src/images/mirror.png');
          mask-repeat: no-repeat;
          mask-size: cover;
        }
      }
    }
    .info-box{
      width: 30%;
      height: 30%;
      position: absolute;
      left: 10%;
      top: 20%;
      border: 1px solid red;
    }
    .control-box{
      position: absolute;
      z-index: 101;
      right: 0;
      bottom: 0;
      width: 50%;
      height: 25%;
      background-color: #fff;
      .btn-box{
        position: absolute;
        top: -40px;
        left: 0;
        height: 40px;
        width: 81px;
        background-color: rgba(0,0,0,.6);
        display: flex;
        justify-content: space-between;
        button{
          background-color: rgba(0,139,139,1);
          border: none;
          width: 40px;
          height: 40px;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          outline: 0;
        }
        button:active{
          background-color: rgba(0,139,139,.6);
          border: none;
          outline: none;
        }
      }
    }
  }
}
@keyframes swiper {
  0% {transform: translateX(0) skewX(-10deg)}
  100%{transform:  translateX(110%) skewX(-10deg)}
}
@keyframes reskew {
  0% {transform: translateX(0) skewX(10deg)}
  100% {transform: translateX(-110%) skewX(10deg)}
}
@keyframes mirror-reskew {
  0% {transform: translateX(0) skewX(10deg); mask-position: -40vw}
  100% {transform: translateX(-110%) skewX(10deg); mask-position: 120vw}
}
@keyframes mirror-front-half {
  0% {mask-position: -150vw center}
  100% {mask-position: -40vw center}
}
</style>
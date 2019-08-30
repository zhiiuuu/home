<template lang='pug'>
    div(class='biod_list_box')
        div(class='biod_list_title')
            span(class='title-CN') 鸟类 
            span(class='title-EN') Aves
        
        div(class='biod_list_img')
            div(class='list_img' 
            v-for="(item,index) of list_details" :key="item.id"
            v-on:mouseenter="enter(index)"
            v-on:mouseleave="leave()"
            )
                img(:src="item.imgURL")
                a(class='btn' href='/bioddetails.html' v-show="one_shade && index == current")
                  div(class="list_img_shade")
                      span(class="titleText") {{item.imgTitle}}
                      span(class="img_desc") {{item.imgMsg}}
                      //- span(class="t") 省略号
                      //- a(class='btn' href='/bioddetails.html' ) 查看详情按钮
                    
</template>
<script>
import * as API from "../../../../api/biodiversity";

export default {
  name: "biod_list_details",
  data() {
    return {
      btn_msg: "查看详情",
      one_shade: true,
      current: null,
      list_details: [
        {
          id: 1,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。"
        },
        {
          id: 2,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 3,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 4,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 5,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 6,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 7,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 8,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 9,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 10,
          imgURL: "http://w.wfjjt.top/list_details03.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 11,
          imgURL: "http://w.wfjjt.top/list_details02.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        },
        {
          id: 12,
          imgURL: "http://w.wfjjt.top/list_details01.png",
          imgTitle: "天行长臂猿",
          imgMsg:
            "天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克"
        }
      ]
    };
  },
  methods: {
    enter(index) {
      this.one_shade = true;
      this.current = index;
    },
    leave() {
      this.one_shade = false;
      this.current = null;
    },
    getQueryVariable(variable) {
      let reg = new RegExp("(^|&)" + variable + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    }
  },
  created() {
    if (this.getQueryVariable("id")) {
      this.$_get(API.BIODIVERSITY_DETAIL_LIST_DATA, {
        speciesId: this.getQueryVariable("id")
      }).then(res => {
        if (!res.data.isError) {
          // this.list_details = res.data;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.biod_list_box {
  width: 62.5%;
  height: auto;
  margin: 0 auto;
  margin-top: 100px;
}
.biod_list_title {
  width: 172px;
  height: 48px;
}
.title-CN {
  font-family: PingFangSC-Semibold;
  font-size: 30px;
  color: rgb(45, 47, 41);
  letter-spacing: 2px;
}
.title-EN {
  font-family: CenturyGothic;
  font-size: 30px;
  color: rgb(70, 120, 125);
  letter-spacing: 2px;
  line-height: 48px;
}
.biod_list_img {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 114px;
  justify-content: space-between;
  .list_img {
    position: relative;
    width: 23.5%;
    margin-top: 19px;
    img{
      width: 100%;
      vertical-align:top;
    }
    .list_img_shade {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.75);
      cursor: pointer;
    }
  }
}


.titleText {
  display: block;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #ffffff;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;
}
.img_desc {
  display: block;
  overflow: hidden;
  padding: 0 15px;
  text-align:center;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: rgba(#ffffff, 0.7);
  height: 54px;
  margin: 0 auto;
  line-height: 18px;
}
.t:after {
  width: 20px;
  display: block;
  margin: 0 auto;
  content: "......";
  font-size: 14px;
  color: rgba(#ffffff, 0.7);
}
.btn {
  display: block;
  
}
</style>
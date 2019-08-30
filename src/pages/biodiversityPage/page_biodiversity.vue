/** 
  我是生物多样性页面
*/
<template lang="pug">
  div
    div(class="biod_container")
      div(class="biod_box" v-for="(item, index) of kindList" v-bind:key="item.id")
        img(class="img_box" :src="item.thumbnail && item.thumbnail.indexOf('http') !== -1 ? item.thumbnail : 'http://w.wfjjt.top/bird.png' " @click="getBirdiversityList(item)")
        a(id="detail" @click="getBirdiversityList(item)") {{ item.title }}
    FooterTab    
</template>
<script>
import FooterTab from "../components/footer_tab.vue";
import * as API from "../../../api/biodiversity";
export default {
  components: {
    FooterTab
  },
  data: () => {
    return {
      kindList: [
        {
          id: "001",
          thumbnail: "http://w.wfjjt.top/bird.png",
          title: "鸟类"
        },
        {
          id: "002",
          thumbnail: "http://w.wfjjt.top/snake.png",
          title: "哺乳类"
        },
        {
          id: "003",
          thumbnail: "http://w.wfjjt.top/bird.png",
          title: "鱼类"
        },
        {
          id: "004",
          thumbnail: "http://w.wfjjt.top/snake.png",
          title: "两栖爬行类"
        },
        {
          id: "005",
          thumbnail: "http://w.wfjjt.top/bird.png",
          title: "植物与真菌"
        },
        {
          id: "006",
          thumbnail: "http://w.wfjjt.top/snake.png",
          title: "无脊椎动物"
        }
      ]
    };
  },
  created() {
    this.$_get(API.BIODIVERSITY_DATA).then(res => {
      if (!res.data.isError) {
        /**
         * 接口返回的数据
         *  */
        // this.kindList = res.data;
      }
    });
  },
  methods: {
    getBirdiversityList(item) {
      location.href = `/bioddetailslist.html?id=${item.id}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.biod_container {
  width: 62.5%;
  margin: 100px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.biod_box {
  width: 31%;
  margin-bottom: 40px;
  background: #ffffff;
  box-shadow: 0 11px 37px 0 rgba(220, 220, 220, 0.5);
  float: left;
  cursor: pointer;
  img {
    width: 100%;
    display: block;
  }
}
a {
  display: block;
  text-decoration: none;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #2d2f29;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-weight: 700;
}
</style>
<template>
    <ul class='comtent_box'>
        <li class="li_style" v-for="cont of listContent" :key="cont.id">
            <p class="title_style">{{cont.title}}</p>
            <p class="msg_style">{{cont.msg}}</p>
        </li>
    </ul>
</template>
<script>
export default {
    name:'Content',
    data() {
        return {
            listContent:[
                {
                    id: 1,
                    title: '物种简介',
                    msg: '天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。'
                },
                {
                    id: 2,
                    title: '分布区域',
                    msg: '天行长臂猿（学名：Hoolock tianxing）：成年天行长臂猿的体长600-900厘米，后足长140-153厘米，颅全长93-99厘米；体重6-8.5千克。雄性和雌性的体型差别不大，但雄性有长阴毛；对生而短的拇指；弯曲的手指悬挂时可牢固抓握。无尾。前肢明显长于后肢，用来悬挂和在树间荡臂。'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .comtent_box{
        width: 1200px;
        height: auto;
        margin:0 auto;
    }
    .li_style{
        margin-bottom: 58px;
    }
    .title_style{
        height: 37px;
        line-height: 37px;
        font-family: PingFangSC-Semibold;
        font-size: 26px;
        color: #2D2F29;
        text-align: center;
        margin-bottom: 18px;
    }
    .msg_style{
        height: auto;
        line-height: 24px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #9D9E9C;
        line-height: 24px;
        text-indent: 30px;
    }

</style>
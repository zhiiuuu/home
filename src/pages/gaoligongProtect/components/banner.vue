<template lang="pug">
    div
        div(class='banner_box')
            img(class='banner_img' src='http://w.wfjjt.top/banner.jpg')
            div(class='banner_info')
                div(class='banner_title') 保护工作
                    span(class='banner_title_EN') Conservation Actions
                

</template>
<script>
export default {
    name: 'banner'
}
</script>
<style lang="scss" scoped>
    .banner_box{
        width: 100%;
        height: 1058px;
        position: relative;
    }
    .banner_img{
        width: 100%;
        height: 1058px;
    }
    .banner_info{
        position: absolute;
        width: 100%;
        height: 72px;
        line-height: 72px;
        bottom: 28px;
        left: 0;
        background-color: rgba(#fff,0.38);
    }
    .banner_title{
        width: 444px;
        height: 48px;
        font-family: PingFangSC-Semibold;
        font-size: 34px;
        color: #FFFFFF;
        margin-left: 42px;
        margin-top: 12px;
        line-height: 48px;
    }
    .banner_title_EN{
        width: 290px;
        height: 48px;
        font-family: CenturyGothic;
        font-size: 28px;
        color: rgb(255, 255, 255);
        line-height: 48px;
        margin-left: 20px;
    }
</style>

<template>
    <ul class='page'>
        <li class='li_style' v-for="mark_item of listmark" :key="mark_item.id" :my_mark='mark_item.markers'>
            <span class="product-mark">{{mark_item.title}}</span>
            <span class='mark-kind' :class="[mark_item.id == 1 ? greenColor : mark_item.id == 2 ? redColor : yellowColor]" v-for="mark of mark_item.markers" :key="mark.id">{{mark.mark}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    name:'Thepag',
    data() {
        return {
           greenColor: 'greenStyle',
           redColor: 'redStyle',
           yellowColor: 'yellowStyle',
           listmark:[
               {
                   id:1,
                   title:'保护等级',
                   markers:[
                       {
                           id:1,
                           mark: '国家一级'
                       },
                       {
                           id:2,
                           mark: '世界一级'
                       }
                   ]
               },
               {
                   id:2,
                   title:'濒危等级',
                   markers:[
                       {
                           id:1,
                           mark: '极度濒危'
                       }
                   ]
               },
               {
                   id:3,
                   title:'物种分类',
                   markers:[
                       {
                           id:1,
                           mark: '鸟类'
                       },
                       {
                           id:2,
                           mark: '鹗属'
                       },
                       {
                           id:3,
                           mark: '鸟类'
                       }
                   ]
               }
           ] 
        }
    }
}
</script>
<style lang="scss" scoped>
    .page{
        width: 1200px;
        height: auto;
        margin:0 auto;
        margin-bottom: 20px;
    }
    .li_style{
        margin-bottom: 6px;
    }
    .li_style:last-child{
        margin-bottom:0px;
    }
    .product-mark{
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #2D2F29;
        width: 64px;
        height: 22px;
        line-height: 22px;
        font-weight: 800;
    }
    .mark-kind{
        display:inline-block;
        width: 100px;
        height: 22px;
        line-height: 22px;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        text-align: center;
        margin-left: 13px;
        color:white;
        font-weight: 400;
    }
    .greenStyle{
        background-color:#4CA100;
        border: 0 solid #84C556;
        border-radius: 11px;
    }
    .redStyle{
        background-color:#FF0000;
        border: 0 solid #FF0000;
        border-radius: 11px;
    }
    .yellowStyle{
        background-color:#F5A623;
        border: 0 solid #F5A623;
        border-radius: 11px;
    }

</style>


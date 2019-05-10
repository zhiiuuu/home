<template lang="pug">
    div
        div(class="slideShow")
        FlagshipSpecies
        LatestNews
        PartNers
        FooterTab
</template>
<script>
import FooterTab from '../components/footer_tab.vue'
import FlagshipSpecies from './indexcomponents/flagship_species.vue'
import LatestNews from './indexcomponents/latest_news.vue'
import PartNers from './indexcomponents/partners.vue'
export default {
    components: {
        FlagshipSpecies,
        LatestNews,
        PartNers,
        FooterTab
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    .slideShow{
        width: 100%;
        height: 900px;
        background-image: url('http://w.wfjjt.top/slideShow.png');
    }
</style>
<template lang='pug'>
    div
        HeaderTab
        Details
        DetailsSlide
        FooterTab
</template>
<script>
import HeaderTab from './components/headertab.vue'
import Details from './components/details.vue'
import DetailsSlide from './components/detailsslide.vue'
import FooterTab from '../components/footer_tab.vue'
export default {
    components:{
        HeaderTab,
        Details,
        DetailsSlide,
        FooterTab
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>
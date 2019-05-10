<template lang='pug'>
    div
       HeaderTab
       Banner
       BannerWork
       FooterTab
</template>

<script>
import HeaderTab from './components/header_tab.vue'
import Banner from './components/banner.vue'
import BannerWork from './components/banner_work.vue'
import FooterTab from '../components/footer_tab.vue'
export default {
    components: {
        HeaderTab,
        Banner,
        BannerWork,
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

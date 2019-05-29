<template lang='pug'>
    div
        HeaderTab
        AboutmeBanner
        FooterTab
</template>
<script>
import HeaderTab from './components/header_tab.vue'
import AboutmeBanner from './components/aboutmeBanner.vue'
import FooterTab from '../components/footer_tab.vue'
export default {
  components:{
      HeaderTab,
      AboutmeBanner,
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
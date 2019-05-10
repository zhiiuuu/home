<template lang='pug'>
    div
        HeaderTab
        BiodListDetails
        FooterTab
</template>
<script>
import HeaderTab from './components/header_tab.vue'
import BiodListDetails from './components/biod_list_details.vue'
import FooterTab from '../components/footer_tab.vue'
export default {
  components:{
      HeaderTab,
      BiodListDetails,
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
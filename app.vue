<template lang="pug">
  div.app
    slot
</template>
<script>
import * as API from './api'
export default {
  mounted(){
    console.log('APP')
    this.$_get(API.CMS_DATA).then(res => console.log(res)).catch(err => console.log(err))
  }
}
</script>
<style lang="scss" scoped>

</style>

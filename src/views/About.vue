<template>
  <div>
    <mobile />
    <computer />
    <get-data />
  </div>
</template>

<script>
import Computer from '../components/computer.vue'
import GetData from '../components/getData.vue'
import Mobile from '../components/Mobile.vue'
  export default {
  components: { Mobile, Computer, GetData },
    
  }
</script>

<style lang="scss" scoped>

</style>
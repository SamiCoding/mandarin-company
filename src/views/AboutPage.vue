<template>
  <div class="page">
    <div class="page-content">
      <AboutCeo v-if="menuQuery==='ceo'"/>
      <AboutVision v-else-if="menuQuery==='vision'"/>
      <AboutHistory v-else-if="menuQuery==='history'"/>
      <AboutOrganization v-else-if="menuQuery==='organization'"/>
      <AboutLocation v-else-if="menuQuery==='location'"/>
    </div>
  </div>
</template>

<script>
import AboutCeo from '@/components/page/about/AboutCeo.vue'
import AboutVision from '@/components/page/about/AboutVision.vue'
import AboutHistory from '@/components/page/about/AboutHistory.vue'
import AboutOrganization from '@/components/page/about/AboutOrganization.vue'
import AboutLocation from '@/components/page/about/AboutLocation.vue'

export default {
  components: {
    AboutCeo,
    AboutVision,
    AboutHistory,
    AboutOrganization,
    AboutLocation,
  },
  
  data: () => ({
    menuQuery: '',
  }),

  mounted() {
    this.menuQuery = this.$route.params.str
  },

  watch: {
    $route() {
      this.menuQuery = this.$route.params.str
    },
  },
}
</script>

<style>

</style>
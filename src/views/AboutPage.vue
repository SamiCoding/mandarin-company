<template>
  <div class="page">
    <ProgressNav
      :progressMenu="progressMenu"
      :progressSubMenu="progressSubMenu"
    />
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
import ProgressNav from '@/components/nav/ProgressNav.vue'
import AboutCeo from '@/components/page/about/AboutCeo.vue'
import AboutVision from '@/components/page/about/AboutVision.vue'
import AboutHistory from '@/components/page/about/AboutHistory.vue'
import AboutOrganization from '@/components/page/about/AboutOrganization.vue'
import AboutLocation from '@/components/page/about/AboutLocation.vue'

export default {
  components: {
    ProgressNav,
    AboutCeo,
    AboutVision,
    AboutHistory,
    AboutOrganization,
    AboutLocation,
  },
  
  data: () => ({
    progressMenu: '',
    progressSubMenu: '',
    menuQuery: '',
  }),

  mounted() {
    const progressNav = this.$progressNav()
    this.progressMenu = progressNav.progressMenu
    this.progressSubMenu = progressNav.progressSubMenu
    this.menuQuery = this.$route.params.str
  },

  watch: {
    $route() {
      const progressNav = this.$progressNav()
      this.progressMenu = progressNav.progressMenu
      this.progressSubMenu = progressNav.progressSubMenu
      this.menuQuery = this.$route.params.str
    },
  },
}
</script>

<style scoped>
  @import '@/assets/css/page.css';
</style>
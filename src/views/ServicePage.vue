<template>
  <div class="page">
    <ProgressNav
      :progressMenu="progressMenu"
      :progressSubMenu="progressSubMenu"
    />
    <div class="page-content">
      <ServiceBusiness v-if="menuQuery==='business'"/>
      <ServiceProject v-else-if="menuQuery==='project'"/>
    </div>
  </div>
</template>

<script>
import ProgressNav from '@/components/nav/ProgressNav.vue'
import ServiceBusiness from '@/components/page/service/ServiceBusiness.vue'
import ServiceProject from '@/components/page/service/ServiceProject.vue'

export default {
  components: {
    ProgressNav,
    ServiceBusiness,
    ServiceProject,
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
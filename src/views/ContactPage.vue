<template>
  <div class="page">
    <ProgressNav
      :progressMenu="progressMenu"
      :progressSubMenu="progressSubMenu"
    />
    <div class="page-content">
      <ContactInquiry v-if="menuQuery==='inquiry'"/>
    </div>
  </div>
</template>

<script>
import ProgressNav from '@/components/nav/ProgressNav.vue'
import ContactInquiry from '@/components/page/contact/ContactInquiry.vue'

export default {
  components: {
    ProgressNav,
    ContactInquiry,
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
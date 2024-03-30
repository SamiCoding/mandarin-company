<template>
  <div class="page">
    <div class="page-content">
      <ContactInquiry v-if="menuQuery==='inquiry'"/>
    </div>
  </div>
</template>

<script>
import ContactInquiry from '@/components/page/contact/ContactInquiry.vue'

export default {
  components: {
    ContactInquiry,
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

<style scoped>
  @import '@/assets/css/page.css';
</style>
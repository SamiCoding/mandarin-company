<template>
  <div class="page">
    <div class="page-content">
      <ServiceBusiness v-if="menuQuery==='business'"/>
      <ServiceProject v-else-if="menuQuery==='project'"/>
    </div>
  </div>
</template>

<script>
import ServiceBusiness from '@/components/page/service/ServiceBusiness.vue'
import ServiceProject from '@/components/page/service/ServiceProject.vue'

export default {
  components: {
    ServiceBusiness,
    ServiceProject,
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
<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <b v-bind="activatorProps">{{ title }}</b>
    </template>
    <template v-slot:default="{ isActive }">
      <v-card class="policy">
        <div class="policy__action">
          <v-icon icon="mdi-close" @click="isActive.value=false"/>
        </div>
        <div class="policy__title">
          <h2>{{ title }}</h2>
        </div>
        <div class="policy__content">
          <div class="policy__content__box">
            Content
          </div>
        </div>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    title: '개인정보 처리방침'
  }),
}
</script>

<style scoped>
  @import '@/assets/css/policy.css';
</style>
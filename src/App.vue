<template>
  <v-app>
    <v-main>
      <MainNav/>
      <component id="content" :is="$route.meta.layout || 'div'">
        <router-view/>
      </component>
      <FooterNav/>
    </v-main>
  </v-app>
</template>

<script>
import MainNav from '@/components/nav/MainNav.vue'
import FooterNav from '@/components/nav/FooterNav.vue'

export default {
  name: 'App',

  components: {
    MainNav,
    FooterNav,
  },

  data: () => ({
    //
  }),
}
</script>

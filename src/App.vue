<template>
  <v-app>
    <v-main>
      <component id="content" :is="$route.meta.layout || 'div'">
        <router-view/>
      </component>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
}
</script>

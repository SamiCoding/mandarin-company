<template>
  <v-app>
    <v-main id="main">
      <MainNav id="nav"/>
      <component id="content" :is="$route.meta.layout || 'div'">
        <router-view/>
      </component>
      <FooterNav id="footer"/>
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

<style>
  @font-face {
    font-family: 'NanumSquareExtraBold';
    src: url('./assets/fonts/NanumSquareEB.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquareBold';
    src: url('./assets/fonts/NanumSquareB.ttf') format('truetype');
  }

  @font-face {
    font-family: 'NanumSquare';
    src: url('./assets/fonts/NanumSquareR.ttf') format('truetype');
  }
  
  #main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: 100vh;
    background-color: rgba(255, 0, 0, 0.3);
  }

  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    height: 80px;
    margin: 0;
    padding: 0 10vw;
    background-color: rgba(0, 0, 255, 0.3);
    font-family: 'NanumSquareExtraBold';
  }

  #content {
    position: relative;
    min-height: calc(100vh - 80px - 140px);
    font-family: 'NanumSquareBold';
  }

  #footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 140px;
    margin: 0;
    padding: 0 5vw;
    background-color: rgba(0, 255, 0, 0.3);
    font-family: 'NanumSquare';
  }
</style>
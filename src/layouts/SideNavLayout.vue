<template>
  <div>
    <div class="side-image">
      <div class="side-image__img"></div>
    </div>
    <div class="side-layout">
      <SideNav id="side-nav"/>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SideNav from '@/components/nav/SideNav.vue'

export default {
  components: {
    SideNav,
  },
}
</script>

<style scoped>
  .side-image {
    height: 150px;
    background: none;
  }

  .side-image__img {
    height: 100%;
    background-image: url("../../public/images/main_img.jpg");
    background-size: cover;
  }

  .side-layout {
    display: flex;
    margin: 0 10vw;
  }

  #side-nav {
    min-width: 160px;
  }

  @media (max-width: 1000px) {
    .side-layout {
      margin: 0 5vw;
    }
  }

  /* mobile */
  @media (max-width: 700px) {
    .side-image {
      height: 100px;
    }

    .side-layout {
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    .side-image {
      height: 50px;
    }

    #side-nav {
      display: none;
    }
  }
</style>
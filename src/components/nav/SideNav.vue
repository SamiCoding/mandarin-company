<template>
  <nav>
    <div class="side-nav__main">{{ sideMenu[0] }}</div>
    <ul class="side-nav__sub">
      <li v-for="(sideSubMenu, i) in sideSubMenuList" :key="i">
        <router-link
          :class="{'side-nav__selected' : menuQuery===sideSubMenu[1]}"
          :to="{
            name: `${sideMenu[1]}Page`,
            params: {str: `${sideSubMenu[1]}`},
          }"
        >
          {{ sideSubMenu[0] }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    sideMenu: [],
    sideSubMenuList: [],
    menuQuery: '',
  }),

  mounted() {
    const sideNav = this.$sideNav()
    
    if (sideNav.correctPath) {
      this.sideMenu = sideNav.sideMenu
      this.sideSubMenuList = sideNav.sideSubMenuList
      this.menuQuery = this.$route.params.str
    }
  },

  watch: {
    $route() {
      const sideNav = this.$sideNav()
      this.sideMenu = sideNav.sideMenu
      this.sideSubMenuList = sideNav.sideSubMenuList
      this.menuQuery = this.$route.params.str
    },
  },
}
</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .side-nav__main {
    padding: 50px 0 10px 10px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    background-color: rgba(0, 100, 255, 0.6);
    font-family: 'NanumSquareExtraBold';
    font-size: 18px;
  }

  .side-nav__sub {
    border-left: 1px solid black;
    border-right: 1px solid black;
    background-color: rgba(255, 255, 0, 0.3);
    font-family: 'NanumSquareBold';
  }

  .side-nav__sub > li {
    border-bottom: 1px solid black;
  }

  .side-nav__sub > li > a {
    display: inline-block;
    width: 100%;
    padding: 5px 15px;
  }

  .side-nav__selected {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
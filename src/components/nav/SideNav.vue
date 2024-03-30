<template>
  <nav>
    <div>{{ sideMenu[0] }}</div>
    <ul>
      <li v-for="(sideSubMenu, i) in sideSubMenuList" :key="i">
        <router-link
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

<style>

</style>
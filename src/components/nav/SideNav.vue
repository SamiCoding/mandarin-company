<template>
  <nav>
    <div>{{ sideMenu[0] }}</div>
    <ul>
      <li v-for="(sideSubMenu, i) in sideSubMenuList" :key="i">
        {{ sideSubMenu[0] }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    sideMenu: [],
    sideSubMenuList: [],
  }),

  mounted() {
    const sideNav = this.$sideNav()
    
    if (sideNav.correctPath) {
      this.sideMenu = sideNav.sideMenu
      this.sideSubMenuList = sideNav.sideSubMenuList
    }
  },
}
</script>

<style>

</style>
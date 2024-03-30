<template>
  <nav>
    <div>
      <v-img src="../../../public/images/귤컴퍼니_logo.png" alt="Logo" width="60px"/>
      <span>귤컴퍼니</span>
    </div>
    <div>
      <ul>
        <li v-for="(navMenu, i) in navMenuList" :key="i">
          <span>{{ navMenu[0] }}</span>
          <ul>
            <li v-for="(navSubMenu, j) in navSubMenuList[i]" :key="j">
              <span>{{ navSubMenu[0] }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navMenuList: [],
    navSubMenuList: [],
  }),

  mounted() {
    this.navMenuList = this.$navMenuList
    this.navSubMenuList = this.$navSubMenuList
  },
}
</script>

<style>

</style>
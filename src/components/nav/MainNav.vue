<template>
  <nav>
    <div>
      <router-link to="/">
        <v-img src="../../../public/images/귤컴퍼니_logo.png" alt="Logo" width="60px"/>
        <span>귤컴퍼니</span>
      </router-link>
    </div>
    <div>
      <ul>
        <li v-for="(navMenu, i) in navMenuList" :key="i">
          <span>
            <router-link
              :to="{
                name: `${navMenu[1]}Page`,
                params: {str: `${navSubMenuList[i][0][1]}`},
              }"
            >
              {{ navMenu[0] }}
            </router-link>
          </span>
          <ul>
            <li v-for="(navSubMenu, j) in navSubMenuList[i]" :key="j">
              <span>
                <router-link
                  :to="{
                    name: `${navMenu[1]}Page`,
                    params: {str: `${navSubMenu[1]}`},
                  }"
                >
                  {{ navSubMenu[0] }}
                </router-link>
              </span>
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
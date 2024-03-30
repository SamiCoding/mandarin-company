<template>
  <nav>
    <div class="nav-logo">
      <router-link to="/">
        <v-img src="../../../public/images/귤컴퍼니_logo.png" alt="Logo" width="60px"/>
        <span>귤컴퍼니</span>
      </router-link>
    </div>
    <div class="nav-menu">
      <ul class="nav-menu__main">
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
          <ul class="nav-menu__sub" ref="subMenuList">
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

  .nav-logo {
    height: 80%;
    padding: 0 10px;
    border-radius: 30px 5px 20px 5px;
    background-color: sandybrown;
    font-size: 24px;
    text-align: center;
  }

  .nav-logo > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-logo > a > img {
    height: 100%;
  }

  .nav-logo > a > span {
    padding-left: 10px;
  }

  .nav-menu {
    height: 100%;
  }

  .nav-menu__main {
    height: 100%;
    font-size: 19px;
  }
    
  .nav-menu__main > li {
    float: left;
    height: 100%;
    text-align: center;
  }
    
  .nav-menu__main > li > span {
    display: inline-block;
    position: relative;
    height: 100%;
    padding: 0 20px;
  }

  .nav-menu__main > li > span > a {
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  .nav-menu__sub {
    visibility: hidden;
    overflow: hidden;
    height: 0;
    padding: 10px 0;
    background-color: rgba(255, 255, 255, 0.9);
    font-family: 'NanumSquare';
    font-size: 15px;
  }

  .nav-menu__main:hover .nav-menu__sub {
    visibility: hidden;
    height: 0;
    transition-duration: 0s;
  }

  .nav-menu__sub > li {
    height: 30px;
  }

  .nav-menu__sub > li > span {
    position: relative;
    height: 100%;
  }

  .nav-menu__sub > li > span > a {
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (hover: hover) {
    .nav-menu__main:hover .nav-menu__sub {
      visibility: visible;
      height: 170px;
      transition-duration: 0.5s;
    }
  }
</style>
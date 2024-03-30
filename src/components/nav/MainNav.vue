<template>
  <nav>
    <div class="nav-logo">
      <router-link to="/">
        <v-img src="../../../public/images/귤컴퍼니_logo.png" alt="Logo" width="60px"/>
        <span>귤컴퍼니</span>
      </router-link>
    </div>
    <input class="nav-icon" id="nav-icon__btn" type="checkbox">
    <div class="nav-icon">
      <label class="nav-icon__menu" for="nav-icon__btn"><v-icon icon="mdi-menu"/></label>
      <label class="nav-icon__close" for="nav-icon__btn"><v-icon icon="mdi-close"/></label>
      <label class="nav-icon__close" for="nav-icon__btn"><div class="nav-close"></div></label>
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

  .nav-icon {
    display: none;
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

  /* mobile */
  @media (max-width: 700px) {
    .nav-icon {
      display: block;
      position: absolute;
      right: 0;
      padding: 0 20px;
      z-index: 10;
    }

    #nav-icon__btn {
      display: none;
    }

    .nav-icon__menu {
      display: block;
      cursor: pointer;
    }

    #nav-icon__btn:checked ~ .nav-icon > .nav-icon__menu {
      display: none;
    }

    .nav-icon__close {
      display: none;
      cursor: pointer;
    }

    #nav-icon__btn:checked ~ .nav-icon > .nav-icon__close {
      display: block;
    }

    .nav-close {
      position: fixed;
      top: 0;
      left: 0;
      width: calc(100% - 250px);
      height: 100vh;
      cursor: default;
    }

    .nav-menu {
      visibility: hidden;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
    }

    #nav-icon__btn:checked ~ .nav-menu {
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .nav-menu__main {
      overflow: scroll;
      position: fixed;
      top: 0;
      right: -250px;
      width: 250px;
      height: 100vh;
      padding: 100px 30px 0 30px;
      background-color: white;
      box-sizing: border-box;
    }

    #nav-icon__btn:checked ~ .nav-menu > .nav-menu__main {
      right: 0;
    }

    .nav-menu__main > li {
      float: none;
      height: auto;
      text-align: right;
    }

    .nav-menu__main > li > span {
      width: 100%;
      height: auto;
      padding: 10px 0 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      text-align: left;
    }

    .nav-menu__main > li > span > a {
      top: auto;
      transform: none;
    }

    .nav-menu__sub {
      visibility: hidden;
      height: auto;
      padding: 0;
      background-color: transparent;
    }

    .nav-menu__main:hover .nav-menu__sub {
      height: auto;
      transition: none;
    }

    #nav-icon__btn:checked ~ .nav-menu > .nav-menu__main .nav-menu__sub {
      visibility: visible;
    }

    .nav-menu__sub > li {
      height: auto;
    }

    .nav-menu__sub > li > span {
      display: inline-block;
      width: 90%;
      height: auto;
      padding: 10px 0 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      text-align: left;
    }
    
    .nav-menu__sub > li > span > a {
      top: auto;
      transform: none;
    }

    @media (hover: hover) {
      .nav-menu__main {
        overflow: visible;
      }
    }
  }

  @media (max-width: 500px) {
    .nav-logo {
      width: 200px;
    }

    .nav-icon {
      padding: 0 10px;
    }

    .nav-menu__main {
      width: 200px;
      padding: 100px 20px 0 20px;
    }

    .nav-close {
      width: calc(100% - 200px);
    }

    .nav-menu__main > li > span {
      padding: 8px 0 4px;
    }

    .nav-menu__sub > li > span {
      padding: 8px 0 4px;
    }
  }
</style>
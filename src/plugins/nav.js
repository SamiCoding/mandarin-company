export default {
  install: (app) => {
    const navMenuList = [
      ['회사 소개', 'about'],
      ['사업 영역', 'service'],
      ['문의·의뢰', 'contact'],
    ]
    const navSubMenuList = [
      [
        ['CEO 인사말', 'ceo'],
        ['경영 철학', 'vision'],
        ['회사 연혁', 'history'],
        ['조직도', 'organization'],
        ['오시는 길', 'location'],
      ],
      [
        ['사업 분야', 'business'],
        ['프로젝트 수행현황', 'project'],
      ],
      [
        ['문의·의뢰', 'inquiry'],
      ],
    ]
    const sideNav = function() {
      const menuKeyword = this.$route.fullPath.split('/')[1]
      const menuQuery = this.$route.params.str
      const menuIndex = navMenuList.findIndex(v => v[1] === menuKeyword)

      return {
        sideMenu: navMenuList[menuIndex],
        sideSubMenuList: navSubMenuList[menuIndex],
        correctPath: navSubMenuList[menuIndex].flat().includes(menuQuery), 
      }
    }
    app.config.globalProperties.$navMenuList = navMenuList
    app.config.globalProperties.$navSubMenuList = navSubMenuList
    app.config.globalProperties.$sideNav = sideNav
  }
}
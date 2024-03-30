<template>
  <div class="not-found">
    <div class="not-found__title">요청하신 페이지를 찾을 수 없습니다.</div>
    <div class="not-found__content">
      <router-link to="/">
        <div>처음 화면으로 돌아가기</div>
      </router-link>
    </div>
    <div class="not-found__content">
      <router-link :to="`/${aboutName}/${aboutParam}`">
        <div>회사 소개 둘러보기</div>
      </router-link>
      <router-link :to="`/${serviceName}/${serviceParam}`">
        <div>사업 영역 확인하기</div>
      </router-link>
      <router-link :to="`/${contactName}/${contactParam}`">
        <div>문의 남기기</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    aboutName: '',
    aboutParam: '',
    serviceName: '',
    serviceParam: '',
    contactName: '',
    contactParam: '',
  }),

  mounted() {
    const navMenuList = this.$navMenuList
    const navSubMenuList = this.$navSubMenuList

    this.aboutName = navMenuList[0][1]
    this.aboutParam = navSubMenuList[0][0][1]
    this.serviceName = navMenuList[1][1]
    this.serviceParam = navSubMenuList[1][0][1]
    this.contactName = navMenuList[2][1]
    this.contactParam = navSubMenuList[2][0][1]
  },
}
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }

  .not-found {
    margin: 50px 10px;
    text-align: center;
  }

  .not-found__title {
    padding: 10px 0;
    font-size: 30px;
  }

  .not-found__content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px 0;
  }

  .not-found__content > a > div {
    width: 180px;
    margin: 5px 10px;
    padding: 20px 10px;
    border: 1px solid black;
    border-radius: 5px;
  }
</style>
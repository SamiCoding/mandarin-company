<template>
  <div>
    <ul class="footer__policy">
      <li><PrivacyPolicy/></li>
      <li><EmailPolicy/></li>
    </ul>
    <ul class="footer__info">
      <li>상호 : 귤컴퍼니</li>
      <li>대표 : 김귤</li>
      <li>전화 : 010-1234-5678</li>
      <li>팩스 : 12-345-6789</li>
      <li>사업자 등록번호 : 012-34-56789</li>
      <li>주소 : 광주광역시 서구</li>
    </ul>
    <ul class="footer__copyright">
      <li>Copyright ⓒ 2024 귤컴퍼니. All Rights Reserved.</li>
    </ul>
  </div>
</template>

<script>
import PrivacyPolicy from '../policy/PrivacyPolicy.vue'
import EmailPolicy from '../policy/EmailPolicy.vue'

export default {
  components: {
    PrivacyPolicy,
    EmailPolicy,
  },
}
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5px 0;
    cursor: default;
    font-size: 14px;
    text-align: center;
    list-style: none;
  }

  ul > li:not(:last-of-type)::after {
    content: "|";
    padding: 10px;
  }
</style>
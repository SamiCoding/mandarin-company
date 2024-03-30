<template>
  <div class="progress-nav">
    <span><v-icon icon="mdi-home"/>홈</span>
    <span>{{ progressMenu }}</span>
    <span>{{ progressSubMenu }}</span>
  </div>
</template>

<script>
export default {
  props: {
    progressMenu: String,
    progressSubMenu: String,
  },
}
</script>

<style scoped>
  .progress-nav {
    width: 300px;
    margin: 5px 5px 5px 30px;
    padding: 5px 10px;
    border-bottom: 1px solid black;
    font-size: 14px;
    cursor: default;
  }

  .progress-nav > span:not(:last-of-type)::after {
    content: ">";
    padding: 0 12px;
  }

  /* mobile */
  @media (max-width: 700px) {
    .progress-nav {
      margin: 5px 10px 5px 10px;
    }
  }

  @media (max-width: 500px) {
    .progress-nav {
      width: 250px;
      font-size: 13px;
    }

    .progress-nav > span:not(:last-of-type)::after {
      padding: 0 6px;
    }
  }
</style>
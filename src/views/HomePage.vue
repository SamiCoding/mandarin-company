<template>
  <div class="home-image">
    <div class="home-image__img"></div>
    <span class="home-image__text">귤컴퍼니</span>
  </div>
  <div class="home-content">
    Content
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .home-image {
    position: relative;
    height: 250px;
    background: none;
  }
  
  .home-image__img {
    height: 100%;
    background-image: url("../../public/images/main_img.jpg");
    background-size: cover;
  }
  
  .home-image__text {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 180px;
    padding: 0 10px;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 50px;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .home-content {
    margin: 20px 10vw;
    padding: 10px;
    background-color: white;
  }

  @media (max-width: 1000px) {
    .home-content {
      margin: 20px 5vw;
    }
  }

  /* mobile */
  @media (max-width: 700px) {
    .home-image {
      height: 200px;
    }

    .home-content {
      margin: 10px 0;
    }
  }

  @media (max-width: 500px) {
    .home-image {
      height: 150px;
    }

    .home-image__text {
      min-width: 170px;
      font-size: 40px;
    }
  }

  @media (max-width: 300px) {
    .home-image {
      height: 100px;
    }

    .home-image__text {
      min-width: 160px;
      font-size: 30px;
    }
  }
</style>
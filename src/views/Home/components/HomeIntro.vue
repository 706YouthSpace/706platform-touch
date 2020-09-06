<template>
  <div class="home__intro">
    <img class="home__intro__img" src="@/assets/images/Home/sec-02.png">
    <h2 class="home__intro__title">
      706 青年空间
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HomeIntro'
}
</script>

<style scoped lang="less">
  .home__intro {
    background: #fff;
    &__img {
      display: block;
      width: 330px;
      height: 242px;
      margin: 0 auto;
      transform: translateY(-54px);
    }
    &__title {
      position: relative;
      height: 47px;
    }
  }
</style>

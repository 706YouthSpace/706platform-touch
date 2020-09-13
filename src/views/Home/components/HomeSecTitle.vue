<template>
  <h2 class="home__sec__title">
    {{title}}
  </h2>
</template>

<script>
export default {
  name: 'HomeSecTitle',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}
</script>

<style scoped lang="less">
  .home__sec__title {
    position: relative;
    padding-bottom: 20px;
    font-size: 23px;
    text-align: center;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 102px;
      height: 5px;
      background: #0b800b;
      transform: translateX(-50%);
    }
  }
</style>

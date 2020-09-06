<template>
    <header class="header">
      <i class="fa fa-bars header__menu"></i>
      <a class="header__link">
        <img src="@/assets/images/logo.png" />
        706青年空间
      </a>
      <i class="fa fa-user-circle header__user"></i>
    </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped lang="less">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
    padding: 0 8px 0 15px;
    background: #fff;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.47);

    &__menu {
      font-size: 20px;
      color: rgba(0, 0, 0, .47);
    }

    &__link {
      display: flex;
      align-items: center;
      font-size: 17px;
      color: #3a3a3a;
      img {
        display: block;
        height: 17px;
        margin-right: 8px;
      }
    }

    &__user {
      font-size: 35px;
      color: rgba(0, 0, 0, .47);
    }
  }
</style>

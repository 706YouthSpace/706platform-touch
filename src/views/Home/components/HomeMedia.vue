<template>
  <div class="home__media">
    <home-sec-title class="home__media__title" title="影响力" />
    <img class="home__media__img" src="@/assets/images/Home/media-map.png">
    <div class="home__media__list">
      <div class="media-item">
        <p class="title">历时<strong>8</strong>年</p>
        <p class="text">从2012年创立至今</p>
      </div>
      <div class="media-item">
        <p class="title">建立<strong>30</strong>多家</p>
        <p class="text">在我们的影响下全国建立了30多家青年空间</p>
      </div>
      <div class="media-item">
        <p class="title">覆盖<strong>10</strong>多个城市</p>
        <p class="text">北京、上海、广州、深圳、南京、杭州、成都...</p>
      </div>
      <div class="media-item">
        <p class="title">被<strong>20</strong>多家媒体报道</p>
        <p class="text">纽约时报、NHK、新华社、人民网、中国青年报...</p>
      </div>
      <div class="home__media__more">
        了解更多
      </div>
    </div>
  </div>
</template>

<script>
import HomeSecTitle from './HomeSecTitle'
export default {
  name: 'HomeMedia',
  components: { HomeSecTitle }
}
</script>

<style scoped lang="less">
  .home__media {
    padding: 80px 0 46px 0;
    background: #fff;
    &__title {
      margin-bottom: 39px;
    }
    &__img {
      display: block;
      width: 100%;
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 53px;
      padding: 0 15px;
      .media-item {
        flex: 0 0 142px;
        margin-bottom: 40px;
        .title {
          font-size: 14px;
          line-height: 20px;
          color: #2C2C2C;
          text-align: center;
          strong {
            display: inline-block;
            margin: 0 3px;
            font-size: 24px;
            font-weight: bold;
          }
        }
        .text {
          margin-top: 14px;
          font-size: 12px;
          line-height: 14px;
          text-align: justify;
        }
      }
    }
    &__more {
      width: 133px;
      height: 40px;
      margin: 0 auto;
      line-height: 40px;
      text-align: center;
      background: #0B7F0B;
      color: #fff;
    }
  }
</style>

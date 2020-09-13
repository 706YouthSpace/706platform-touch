<template>
  <div class="home__intro">
    <img class="home__intro__img" src="@/assets/images/Home/sec-02.png">
    <home-sec-title class="home__intro__title" title="706青年空间"/>
    <div class="home__intro__text">
      <p>“706青年空间”是中国第一家青年空间，于2011年在国内首创“青年空间”这一概念，也是目前国内最活跃和相对成熟的青年空间。</p>
      <p>青年空间的使命是在实体和精神上将年轻人聚集在一起，通过对空间功能更多可能性的探索，让青年人认识自己、改变自己、提升自己，让青年人在这里找到真正的精神归宿。</p>
    </div>
    <div class="home__intro__list img-list">
      <div class="img-item">
        <img class="img-item__bg" src="@/assets/images/Home/intro-canteen.png">
        <div class="img-item__cover">
          <div class="img-item__content">
            <p class="img-item__title">706花生食堂</p>
            <p class="img-item__text">我们在这里围坐着边吃饭边聊天，我们在这里深夜聚餐，这里是706最家长里短，充满烟火气的地方。</p>
          </div>
        </div>
      </div>
      <div class="img-item">
        <img class="img-item__bg" src="@/assets/images/Home/intro-coffee.png">
        <div class="img-item__cover">
          <div class="img-item__content">
            <p class="img-item__title">706花生食堂</p>
            <p class="img-item__text">我们在这里围坐着边吃饭边聊天，我们在这里深夜聚餐，这里是706最家长里短，充满烟火气的地方。</p>
          </div>
        </div>
      </div>
      <div class="img-item">
        <img class="img-item__bg" src="@/assets/images/Home/intro-exhibit.png">
        <div class="img-item__cover">
          <div class="img-item__content">
            <p class="img-item__title">706花生食堂</p>
            <p class="img-item__text">我们在这里围坐着边吃饭边聊天，我们在这里深夜聚餐，这里是706最家长里短，充满烟火气的地方。</p>
          </div>
        </div>
      </div>
      <div class="img-item">
        <img class="img-item__bg" src="@/assets/images/Home/intro-gym.png">
        <div class="img-item__cover">
          <div class="img-item__content">
            <p class="img-item__title">706花生食堂</p>
            <p class="img-item__text">我们在这里围坐着边吃饭边聊天，我们在这里深夜聚餐，这里是706最家长里短，充满烟火气的地方。</p>
          </div>
        </div>
      </div>
      <div class="img-item">
        <img class="img-item__bg" src="@/assets/images/Home/intro-hotel.png">
        <div class="img-item__cover">
          <div class="img-item__content">
            <p class="img-item__title">706花生食堂</p>
            <p class="img-item__text">我们在这里围坐着边吃饭边聊天，我们在这里深夜聚餐，这里是706最家长里短，充满烟火气的地方。</p>
          </div>
        </div>
      </div>
      <div class="img-item">
        <img class="img-item__bg" src="@/assets/images/Home/intro-labor.png">
        <div class="img-item__cover">
          <div class="img-item__content">
            <p class="img-item__title">706花生食堂</p>
            <p class="img-item__text">我们在这里围坐着边吃饭边聊天，我们在这里深夜聚餐，这里是706最家长里短，充满烟火气的地方。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home__intro__btn">
      了解更多
    </div>
  </div>
</template>

<script>
import HomeSecTitle from './HomeSecTitle'
export default {
  name: 'HomeIntro',
  components: { HomeSecTitle }
}
</script>

<style scoped lang="less">
  .home__intro {
    background: #fff;
    padding-bottom: 31px;
    &__img {
      display: block;
      width: 316px;
      margin: 0 auto;
      transform: translateY(-54px);
    }
    &__title {
      margin-top: -23px;
    }
    &__text {
      margin-top: 31px;
      padding: 0 12px;
      font-size: 14px;
      line-height: 18px;
      text-align: justify;
      & > p {
        margin-bottom: 22px;
      }
    }
    .img-list {
      display: flex;
      flex-wrap: wrap;
    }
    .img-item {
      position: relative;
      flex-basis: 50%;
      &::after {
        content: "";
        display: block;
        padding-top: 100%;
      }
      &__bg {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &__cover {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
      }
      &__content {
        position: absolute;
        top: 50%;
        padding: 0 17px;
        transform: translateY(-50%);
        text-align: center;
        color: #fff;
      }
      &__title {
        font-size: 14px;
        margin-bottom: 18px;
      }
      &__text {
        font-size: 12px;
        line-height: 16px;
      }
    }
    &__btn {
      width: 133px;
      height: 40px;
      line-height: 40px;
      margin: 28px auto 0 auto;
      color: #fff;
      background: #0b800b;
      text-align: center;
    }
  }
</style>

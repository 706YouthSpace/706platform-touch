<template>
  <div class="home__project">
    <home-sec-title title="事业&项目"/>
    <p class="home__project__text">
      目前706青年空间正在进行的项目有：线上平台开发、706旗舰店建设、生活实验室建设、虚拟城市建设等
    </p>
    <swiper class="swiper home__project__swiper" :options="swiperOption">
      <swiper-slide class="project-item">
        <div class="project-item-inner">
          <p class="title">线上平台</p>
          <p class="sub-title">706青年空间的在线社交平台</p>
          <p class="text">有时我骑自行车去客户的办公室，有时我步行去MING工作室。根据我当天在哪里工作，我会路过著名的Eisbach河，人们一大早就在那里冲浪(即使是在冬天……嘿嘿)。当我走到办公室时，我穿过Viktualienmarkt食品市场，这里在一天的这个时候相当平静。</p>
          <p class="more">了解更多</p>
        </div>
      </swiper-slide>
      <swiper-slide class="project-item">
        <div class="project-item-inner">
          <p class="title">线上平台</p>
          <p class="sub-title">706青年空间的在线社交平台</p>
          <p class="text">有时我骑自行车去客户的办公室，有时我步行去MING工作室。根据我当天在哪里工作，我会路过著名的Eisbach河，人们一大早就在那里冲浪(即使是在冬天……嘿嘿)。当我走到办公室时，我穿过Viktualienmarkt食品市场，这里在一天的这个时候相当平静。</p>
          <p class="more">了解更多</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import HomeSecTitle from './HomeSecTitle'
export default {
  name: 'HomeProject',
  components: {
    HomeSecTitle,
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        slidesPerView: 1.2,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .home__project {
    padding: 80px 0 38px 0;
    background: #F3F7F9;
    &__text {
      margin-top: 58px;
      padding: 0 12px;
      font-size: 14px;
      line-height: 20px;
      color: #2C2C2C;
    }
    &__swiper {
      height: 428px;
      margin-top: 50px;
      .project-item {
        &-inner {
          position: relative;
          padding: 39px 30px 32px 30px;
          background: #E7E7EB;
          box-sizing: border-box;
          height: 400px;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
          color: #2C2C2C;
          text-align: center;
        }
        .sub-title {
          margin-top: 47px;
          font-size: 14px;
          color: #737373;
          text-align: center;
        }
        .text {
          margin-top: 25px;
          text-align: justify;
        }
        .more {
          position: absolute;
          left: 0;
          bottom: 32px;
          width: 100%;
          color: #017DB3;
          text-decoration: underline;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
</style>

<style lang="less">
  .home__project__swiper {
    &.swiper-container-3d .swiper-slide-shadow-left,
    &.swiper-container-3d .swiper-slide-shadow-right {
      background-image: none;
    }
  }
  .swiper-pagination {
    bottom: 0;
    .swiper-pagination-bullet-active {
      background: #0B7F0B;
    }
  }
</style>

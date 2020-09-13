<template>
  <div class="home__activity">
    <home-sec-title class="home__activity__title" title="706青年空间"/>
    <div class="home__activity__text">
      成立九年以来，我们开创了几十种活动类型，举办了超过3000场活动。<br>钱理群、秦晖、罗振宇、许知远、黄西等许多知名人士曾来到这里，和大家近距离交流。
    </div>
    <div class="home__activity__img">
      <img src="@/assets/images/Home/activity-48hours.png">
    </div>
    <div class="home__activity__list">
      <ul class="activity-list">
        <li>苏格拉底对话</li>
        <li>苏格拉底对话</li>
        <li>一千零一夜</li>
        <li>一千零一夜</li>
        <li>48小时生活实验室</li>
        <li>48小时生活实验室</li>
        <li>烛光夜聊会</li>
        <li>烛光夜聊会</li>
        <li>围炉夜谈</li>
        <li>围炉夜谈</li>
      </ul>
      <div class="home__activity__more">了解更多</div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'
import HomeSecTitle from './HomeSecTitle'

export default {
  name: 'HomeActivity',
  components: { HomeSecTitle },
  props: {
    bgOffsetY: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      offsetLimit: 50
    }
  },
  created () {
    // document.addEventListener('scroll', this.throttleScrollEvent, false)
  },
  destroyed () {
    // document.removeEventListener('scroll', this.throttleScrollEvent, false)
  },
  methods: {
    throttleScrollEvent () {
      throttle(this.scrollEvent, 50)()
    },
    scrollEvent () {
      const activeArea = 500
      const { top, bottom } = this.$refs.activityBrand.getBoundingClientRect()
      if (bottom < 0 || top > activeArea) {
        return
      }
      this.$emit('bgOffsetYChange', Math.floor((activeArea - top) * this.offsetLimit / (bottom - top + activeArea)))
    }
  }
}
</script>

<style scoped lang="less">
  .home__activity {
    padding-top: 80px;
    background: #F3F7F9;

    &__title {
      margin-bottom: 58px;
    }

    &__text {
      padding: 0 12px;
      margin-bottom: 30px;
      font-size: 14px;
      line-height: 20px;
    }

    &__img {
      width: 100%;
      height: 333px;
      background: #B6B6B6;
      & > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__list {
      padding: 18px 0 22px 0;
      background: #556955;
      .activity-list {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        font-size: 14px;
        line-height: 32px;
        color: #fff;
        li {
          flex: 0 0 50%;
          padding-left: 36px;
          box-sizing: border-box;
        }
      }
    }

    &__more {
      width: 133px;
      height: 39px;
      line-height: 39px;
      margin: 19px auto 0 auto;
      border: 1px solid rgba(255, 255, 255, .3);
      text-align: center;
      color: #fff;
    }
  }
</style>

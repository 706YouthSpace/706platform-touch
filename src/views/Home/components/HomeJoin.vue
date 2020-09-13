<template>
  <div class="home__join">
    <h2 class="home__join__title">加入我们</h2>
    <p class="home__join__text">与这个时代最具活力的青年人一起，探索生活的更多可能性</p>
    <div class="home__join__btn">注册</div>
    <div class="home__join__btn">参与众筹</div>
  </div>
</template>

<script>
import { throttle } from 'lodash'

export default {
  name: 'HomeJoin',
  data () {
    return {
      offsetLimit: 20,
      bgOffsetY: 0
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
      throttle(this.scrollEvent, 10)()
    },
    scrollEvent () {
      const wHeight = document.documentElement.clientHeight
      const { top, bottom } = this.$refs.joinBg.getBoundingClientRect()
      if (top > wHeight) {
        return
      }
      let yOffset = Math.floor(wHeight - top)
      if (yOffset > bottom - top) {
        yOffset = bottom - top
      }
      this.bgOffsetY = Math.floor(yOffset * this.offsetLimit / (bottom - top))
    }
  }
}
</script>

<style scoped lang="less">
  .home__join {
    height: 308px;
    padding-top: 48px;
    box-sizing: border-box;
    color: #fff;
    background: no-repeat url("~@/assets/images/Home/join.png") center / cover;
    text-align: center;
    &__title {
      font-size: 22px;
      font-weight: bold;
    }
    &__text {
      width: 280px;
      margin: 16px auto 34px auto;
      font-size: 14px;
      line-height: 20px;
    }
    &__btn {
      width: 133px;
      height: 39px;
      margin: 13px auto 0 auto;
      line-height: 39px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, .4);
    }
  }
</style>

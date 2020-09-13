<template>
  <div class="home">
    <home-slogan />
    <home-intro />
    <home-activity />
    <home-media />
    <home-project />
    <home-join />
  </div>
</template>

<script>

import { throttle } from 'lodash'
import HomeSlogan from './components/HomeSlogan'
import HomeIntro from './components/HomeIntro'
import HomeActivity from './components/HomeActivity'
import HomeMedia from './components/HomeMedia'
import HomeProject from './components/HomeProject'
import HomeJoin from './components/HomeJoin'
export default {
  name: 'Home',
  components: { HomeJoin, HomeProject, HomeMedia, HomeActivity, HomeIntro, HomeSlogan },
  data () {
    return {
      isActivityShadowShow: false,
      activityBgOffset: 0
    }
  },
  created () {
    // document.addEventListener('scroll', this.scrollEvent, false)
  },
  destroyed () {
    // document.removeEventListener('scroll', this.scrollEvent, false)
  },
  methods: {
    throttleScrollEvent () {
      throttle(this.scrollEvent, 50)()
    },
    scrollEvent () {
      const wHeight = document.documentElement.clientHeight
      const { bottom } = document.getElementById('activity').getBoundingClientRect()
      if (bottom <= wHeight) {
        this.isActivityShadowShow = true
      } else {
        this.isActivityShadowShow = false
      }
    },
    handleBgOffsetYChange (offset) {
      this.activityBgOffset = offset
    }
  }
}
</script>

<style scoped lang="less">
  .home {
  }
</style>

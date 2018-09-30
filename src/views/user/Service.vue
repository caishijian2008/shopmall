<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">服务</div>
      <router-link class="header-item" to="/search" slot="wright" tag="div">
        <i class="header-icon iconfont icon-search"></i>
      </router-link>
    </base-header>

    <!-- content -->
    <div class="app-page">
      <h1>服务中心</h1>
    </div>

    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
import BaseFooter from '../../components/BaseFooter.vue'
export default {
  name: 'service',
  components: {
    BaseHeader,
    BaseFooter
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-page {
  top: 3.125rem;
}
</style>

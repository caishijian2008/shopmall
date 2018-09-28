<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">会员中心</div>
      <div class="header-item" slot="wright"></div>
    </base-header>

    <!-- content -->
    <div class="app-page">
      <div class="text">
        <p class="fz-m">请前往商城App查看会员福利</p>
      </div>
      <div class="action">
        <div class="btn">立即下载商城App</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
// import BaseFooter from '../../components/BaseFooter.vue'
export default {
  name: 'membercenter',
  components: {
    BaseHeader
    // BaseFooter
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
  .text {
    padding: 4.69rem 1.25rem 3.125rem;
    text-align: center;
  }
  .fz-m {
    font-size: 1rem!important;
  }
  .action {
    margin: 0 1.25rem;
  }
  .btn {
    display: block;
    outline: 0;
    background: #ff6700;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 3.125rem;
    line-height: 3.125rem;
    font-size: .875rem;
  }
}
</style>

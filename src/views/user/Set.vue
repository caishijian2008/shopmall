<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-fanhui" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">购物车</div>
      <div class="header-item" slot="wright">
        <i class="header-icon iconfont icon-search"></i>
      </div>
    </base-header>

    <!-- content -->
    <div class="app-page">
      
    </div>
    
    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
import BaseFooter from '../../components/BaseFooter.vue'
export default {
  name: 'set',
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
  top: 50px;
}
</style>

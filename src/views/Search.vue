<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">
        <div class="search-item">
          <input type="search" placeholder="搜索商品名称">
        </div>
      </div>
      <div class="header-item" slot="wright">
        <i class="header-icon iconfont icon-search"></i>
      </div>
    </base-header>
    <!-- content -->
    <div class="app-page">
      <div class="bodys">
        色发射点发射点发
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader.vue'
export default {
  name: 'search',
  components: {
    BaseHeader
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-item {
  border: 1px solid #e5e5e5;
  padding: 0 .625rem;
  background: #fff;
  width: 100%;
  border-radius: .125rem;
  input {
    width: 100%;
    border: 0 none;
    outline: 0;
    font-size: .9rem;
    height: 1.56rem;
    padding: .3125rem 0;
    line-height: normal;
  }
}

.app-page {
  top: 3.125rem;
}
</style>

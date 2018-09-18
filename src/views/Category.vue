<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
    <div class="header-item" slot="wleft">
      <i class="iconfont icon-fanhui" @click="goBack"></i>
    </div>
      <span slot="wmiddle">分类</span>
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
    
    <!-- footer -->
    <footer class="app-footer">
        <router-link to="/" class="flex">
          <i class="bottom-icon iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
        <router-link to="/category" class="flex">
          <i class="bottom-icon iconfont icon-liebiao"></i>
          <span>分类</span>
        </router-link>
        <router-link to="/cart" class="flex">
          <i class="bottom-icon iconfont icon-cart"></i>
          <span>购物车</span>
        </router-link>
        <router-link to="/user" class="flex">
          <i class="bottom-icon iconfont icon-account"></i>
          <span>我的</span>
        </router-link>
    </footer>
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader.vue'
export default {
  name: 'category',
  components: {
    BaseHeader
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">

</style>

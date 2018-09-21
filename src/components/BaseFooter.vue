<template>
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
</template>

<script>
export default {
  name: 'basefooter'
}
</script>

<style lang="sass">
</style>

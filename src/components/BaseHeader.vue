<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-wrapper-left">
        <!-- <div class="header-item logo">
          <img src="../assets/images/logo.png">
        </div> -->
        <slot name="wleft"></slot>
      </div>
      <div class="header-wrapper-middle">
        <div class="header-title">
          <!-- <i class="header-icon iconfont icon-search"></i>
          <span>搜索商品名称</span> -->
          <slot name="wmiddle"></slot>
        </div>
      </div>
      <div class="header-wrapper-right">
        <!-- <div class="header-item">
          <i class="header-icon iconfont icon-account"></i>
        </div> -->
        <slot name="wright"></slot>
      </div>
    </div>
    <!-- <div class="nav-wrapper">
      <div class="nav">
        <div class="nav-item">
          <span class="active">推荐</span>
        </div>
        <div class="nav-item">
          <span class="">手机</span>
        </div>
        <div class="nav-item">
          <span class="">电视5周年</span>
        </div>
        <div class="nav-item">
          <span class="">智能</span>
        </div>
        <div class="nav-item">
          <span class="">笔记本</span>
        </div>
        <div class="nav-item">
          <span class="">家电</span>
        </div>
      </div>
    </div> -->
    <!-- <div class="nav-wrapper">
      <Menu class="nav" mode="horizontal" :theme="light" active-name="1">
        <MenuItem name="1" class="nav-item">
          <span class="active">推荐</span>
        </MenuItem>
        <MenuItem name="2" class="nav-item">
          <span class="">手机</span>
        </MenuItem>
        <MenuItem name="3" class="nav-item">
          <span class="">电视5周年</span>
        </MenuItem>
        <MenuItem name="4" class="nav-item">
          <span class="">智能</span>
        </MenuItem>
        <MenuItem name="5" class="nav-item">
          <span class="">笔记本</span>
        </MenuItem>
        <MenuItem name="6" class="nav-item">
          <span class="">家电</span>
        </MenuItem>
      </Menu>
    </div> -->
    <slot name="wnav"></slot>
  </header>
</template>

<script>
export default {
  name: 'baseheader'
}
</script>

<style lang="sass">

</style>

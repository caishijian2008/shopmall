<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">个人中心</div>
      <router-link class="header-item" to="/search" slot="wright" tag="div">
        <i class="header-icon iconfont icon-search"></i>
      </router-link>
    </base-header>
    <!-- content -->
    <div class="app-page">
      <ul>
        <li>
          <router-link :to="{path: 'address', query:{type: 'user'}}">地址管理</router-link>
          <i class="iconfont icon-rightarrow"></i>
        </li>
      </ul>
    </div>
    <!-- footer -->
    <other-footer>
      <a href="javascript:;">退出账号</a>
    </other-footer>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
import OtherFooter from '../../components/BaseFooter2.vue'
export default {
  components: {
    BaseHeader,
    OtherFooter
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
.other a {
  display: block;
  width: 100%;
  height: 100%;
  color: #3c3c3c;
  font-size: 1rem;
}

ul {
  font-size: 1rem;
  margin-bottom: .9rem;
  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .625rem;
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box;
    text-align: left;
    color: #3c3c3c;
    a {
      color: #3c3c3c;
    }
  }
}
</style>

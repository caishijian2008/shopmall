<template>
  <div class="app-shell">
    <!-- header -->
    <!-- <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-fanhui" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">购物车</div>
      <div class="header-item" slot="wright">
        <i class="header-icon iconfont icon-search"></i>
      </div>
    </base-header> -->
    <header class="hd">
      <div class="user">
        <div class="img">
          <img src="../../assets/images/avatar.png" alt="">
        </div>
        <div class="name">登录/注册</div>
      </div>
    </header>
    <div class="a1">
      <div class="cite">我的订单</div>
      <div class="span">
        <a href="#">全部订单</a>
        <i class="iconfont icon-rightarrow"></i>
      </div>
    </div>
    <ul class="a2">
      <li class="dfk">
        <a href="#">
          <i class="iconfont icon-pay"></i>
          <span>待付款</span>
        </a>
      </li>
      <li class="dsh">
        <a href="#">
          <i class="iconfont icon-shouhuo2"></i>
          <span>待收货</span>
        </a>
      </li>
      <li class="thx">
        <a href="#">
          <i class="iconfont icon-weixiu"></i>
          <span>退换修</span>
        </a>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-member">
        <a href="#">
          <i class="iconfont icon-huiyuanzhongxin"></i>
          <cite>会员中心</cite>
        </a>
        <i class="iconfont icon-rightarrow"></i>
      </li>
      <li class="i-wallet">
        <a href="#">
          <i class="iconfont icon-pay"></i>
          <cite>我的优惠</cite>
        </a>
        <i class="iconfont icon-rightarrow"></i>
      </li>
    </ul>

    
    
    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
import BaseFooter from '../../components/BaseFooter.vue'
export default {
  name: 'user',
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
.hd {
  background: url(../../assets/images/bg.png) center 0 #f37d0f;
  background-size: auto 100%;
  padding: 1rem 0;
  .user {
    display: flex;
    align-items: center;
  }
  .img {
    margin: 0 .5rem 0 1rem;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid rgba(255, 255, 255, 0.4);;;
    text-align: center;
    img {
      width: auto;
      height: 100%;
      margin: 0 auto;
    }
  }
  .name {
    color: #fff;
    font-size: .75rem;
    text-align: left;
  }
}
.a1 {
  background: #fff;
  height: 2.5rem;
  border-bottom: 1px solid rgba(0,0,0,.15);
  color: rgba(0,0,0,.54);
  position: relative;
  padding-right: .75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .cite {
    font-size: .875rem;
    padding: 0 0 0 1rem;
    color: rgba(0,0,0,.87);
  }
  .span, a {
    font-size: .75rem;
    color: rgba(0,0,0,.87);
  }
  .span {
    display: flex;
    align-items: center;
  }
}
.a2 {
  padding: 0 2.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    display: flex;
    align-content: space-between;
    position: relative;
    padding: 1.25rem 0;
    i {
      display: block;
      color: rgba(0,0,0,.87);
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
      margin: 0 auto .5rem;
    }
    span {
      color: rgba(0,0,0,.87);
      font-size: .75rem;
    }
  }
}
.ui-line {
  height: .625rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
.items {
  background: #fff;
  li {
    position: relative;
    color: rgba(0,0,0,.54);
    border-bottom: 1px solid rgba(0,0,0,.15);
    // line-height: 0;
  }
}







.app-page {
  top: 50px;
}
</style>

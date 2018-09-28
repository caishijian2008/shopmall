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
      <router-link to="/list" class="span">
        <span>全部订单</span>
        <i class="iconfont icon-rightarrow"></i>
      </router-link>
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
        <router-link to="/memcenter">
          <div class="a-title">
            <i class="iconfont icon-huiyuanzhongxin"></i>
            <cite>会员中心</cite>
          </div>
          <i class="iconfont icon-rightarrow"></i>
        </router-link>
      </li>
      <li class="i-wallet">
        <router-link to="/coupon">
          <div class="a-title">
            <i class="iconfont icon-qianbao"></i>
            <cite>我的优惠</cite>
          </div>
          <i class="iconfont icon-rightarrow"></i>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-member">
        <a href="#">
          <div class="a-title">
            <i class="iconfont icon-fuwuzhongxin"></i>
            <cite>服务中心</cite>
          </div>
          <i class="iconfont icon-rightarrow"></i>
        </a>
      </li>
      <li class="i-wallet">
        <a href="#">
          <div class="a-title">
            <i class="iconfont icon-jia"></i>
            <cite>小米之家</cite>
          </div>
          <i class="iconfont icon-rightarrow"></i>
        </a>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-member">
        <a href="#">
          <div class="a-title">
            <i class="iconfont icon-f"></i>
            <cite>F码通道</cite>
          </div>
          <i class="iconfont icon-rightarrow"></i>
        </a>
      </li>
    </ul>
    <div class="ui-line"></div>
    <ul class="items">
      <li class="i-member">
        <!-- <router-link :to="{name: 'set'/*, params: {userid: 123}*/}"> -->
        <router-link to="/set">
          <div class="a-title">
            <i class="iconfont icon-set"></i>
            <cite>设置</cite>
          </div>
          <i class="iconfont icon-rightarrow"></i>
        </router-link>
      </li>
    </ul>
    <div class="ui-line"></div>
    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
import BaseFooter from '../../components/BaseFooter.vue'
export default {
  // name: 'user',
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
  .account {
    color: rgba(255, 255, 255, 0.6);
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
    span {
      display: block;
      margin-right: .2rem;
    }
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
    height: 3.25rem;
    line-height: 3.25rem;
    & > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(0,0,0,.54);
      .a-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        & > i {
          display: block;
          font-size: 1.625rem;
          padding-left: .8125rem;
        }
        & > cite {
          display: block;
          font-size: .875rem;
          font-style: normal;
          color: rgba(0,0,0,.87);
          padding-left: 1rem;
        }
        & > i.icon-huiyuanzhongxin {
          color: #fdbf2d;
          font-size: 1.375rem;
        }
        & > i.icon-qianbao {
          color: #51bbe0;
          font-size: 1.75rem;
        }
        & > i.icon-fuwuzhongxin {
          color: #f96c5e;
        }
        & > i.icon-jia {
          color: #ff8b43;
        }
        & > i.icon-f {
          color: #ffb302;
        }
        & > i.icon-set {
          color: rgba(0,0,0,.54);
        }

      }
      &:last-child {
        margin-right: .75rem;
      }
    }

    &:last-child {
      border-bottom: transparent;
    }
    &:not(:first-child):before {
      content: "";
      position: absolute;
      left: 0;
      top: -.125rem;
      height: .19rem;
      background: #fff;
      width: 3.5rem;
    }
  }
}

</style>

<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">优惠券列表</div>
      <router-link class="header-item" to="/search" slot="wright" tag="div">
        <i class="header-icon iconfont icon-search"></i>
      </router-link>
    </base-header>

    <!-- content -->
    <div class="app-page">
      <div class="page-coupon">
        <div class="coupon-tab">
          <router-link to="#1">
            <span>未使用</span>
          </router-link>
          <router-link to="#2">
            <span>已使用 / 已过期</span>
          </router-link>
        </div>
        <ul class="empty" style="display: none;">
          <span>您没有未使用的优惠券</span>
        </ul>
        <ul>
          <li class="">
            <div class="coupon-wrap">
              <div class="coupon-type">
                抵扣
              </div>
              <section>
                <div class="coupon-name"> 最生活毛巾抵扣券</div>
                <div class="coupon-date">
                  <span>2018.09.16  00:00</span>
                  <em>至</em>
                  <span>2018.09.16  23:59</span>
                </div>
              </section>
            </div>
            <div class="coupon-desc"> 可用于兑换最生活毛巾•青春系列1个</div>
          </li>
          <li class="expired">
            <div class="coupon-wrap">
              <div class="coupon-type">
                <i>￥</i>
                <em>20</em>
              </div>
              <section>
                <div class="coupon-name"> 20元现金券</div>
                <div class="coupon-date">
                  <span>2018.08.16  00:00</span>
                  <em>至</em>
                  <span>2018.08.16  23:59</span>
                </div>
              </section>
            </div>
            <div class="coupon-desc"> 全场商品，除虚拟、话费等</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
import BaseFooter from '../../components/BaseFooter.vue'
export default {
  name: 'coupon',
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
  .page-coupon {
    height: 100%;
    padding: 0 .625rem 3.25rem;
    .coupon-tab {
      font-size: .9375rem;
      border-bottom: 1px solid #eee;
      margin-top: .625rem;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        flex: 1;
        text-align: center;
        display: block;
        span {
          padding: .8125rem 0;
          display: inline-block;
          color: #666;
        }
        &.router-link-exact-active {
          span {
            color: #ff3100;
            border-bottom: 2px solid #ff3100;
          }
        }
      }
    }
    .empty {
      font-size: .9375rem;
      text-align: center;
      background: url(../../assets/images/empty.png) 50% 0 no-repeat;
      background-size: 6.25rem 6.25rem;
      padding-top: 7.81rem;
      color: #999;
      margin: 2.5rem 3.125rem 0;
    }
    li {
      margin: .9375rem 0;
      list-style: none;
      .coupon-wrap {
        background: #fe746a url(../../assets/images/coupon.png) no-repeat 0;
        background-size: 5.625rem 5.625rem;
        height: 5.625rem;
        padding-left: 6.25rem;
        position: relative;
        color: #fff;
        text-align: left;
        .coupon-type {
          position: absolute;
          top: 25%;
          left: 0;
          color: #fff;
          width: 5.625rem;
          text-align: center;
          transform: translateY(25%);
          font-size: 1.5625rem;
          i {
            font-size: .75rem;
            vertical-align: super;
          }
        }
        .coupon-name {
          font-size: 1rem;
          padding-top: 1rem;
        }
        .coupon-date {
          opacity: .6;
          font-size: .75rem;
          padding-top: .375rem;
        }
      }
      em, i {
        font-style: normal;
      }
      .coupon-desc {
        text-align: left;
        color: #bbb;
        font-size: .625rem;
        line-height: 1.4;
        padding: .5rem;
        border: 1px solid #dfdfdf;
        border-top: 0;
      }
    }
    .expired {
      .coupon-wrap {
        color: #3c3c3c;
        // background: url(../../assets/images/coupon-expired.png);
        background: #d8d8d8 url(../../assets/images/coupon-expired.png) no-repeat 0;
        // background-color: #d8d8d8;
        background-size: 5.625rem 5.625rem;
        .coupon-type {
          color: #3c3c3c;
        }
        .coupon-date {
          opacity: .5;
        }
      }
    }
  }
}
</style>

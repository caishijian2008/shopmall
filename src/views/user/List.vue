<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">我的订单</div>
      <router-link class="header-item" to="/search" slot="wright" tag="div">
        <i class="header-icon iconfont icon-search"></i>
      </router-link>
    </base-header>

    <!-- content -->
    <div class="app-page">
      <ul class="tab">
        <li><router-link to="#1">全部</router-link></li>
        <li><router-link to="#2">待付款</router-link></li>
        <li><router-link to="#3">待收货</router-link></li>
      </ul>
      <div class="page-con">
        <div class="page-con-items" style="display: none;">
          <div class="container">
            <div class="order-list">
              <ul>
                <li>
                  <div class="order-item">
                    <div class="item-top">
                      <div class="top-left">
                        <p class="order-data">
                          <strong>订单日期：</strong>
                          <span>2016/12/15 10:01</span>
                        </p>
                        <p class="order-num">
                          <strong>订单编号：</strong>
                          <span>1161215825701492</span>
                        </p>
                      </div>
                      <div class="top-right">已收货</div>
                    </div>
                    <div class="item-center">
                      <img src="../../assets/images/2018092818412345mi4.jpg" alt="">
                      <span>红米4 16GB 灰色 16GB</span>
                    </div>
                    <div class="item-center">
                      <img src="../../assets/images/2018092818493432mi4erji.jpg" alt="">
                      <span>小米活塞耳机 基础版 黑色</span>
                    </div>
                    <div class="item-bottom">
                      <span>共2件商品</span>
                      <span>总金额：</span>
                      <strong>699元</strong>
                    </div>
                  </div>
                  <div class="item-btn"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="page-con-items">
          <div class="container">
            <div class="empty">您还没有 待付款 订单</div>
          </div>
        </div>
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
  name: 'list',
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
  .tab {
    border-bottom: .01rem solid #ececec;
    position: fixed;
    width: 100%;
    background: #fff;
    li {
      display: inline-block;
      width: 33.33333333%;
      text-align: center;
      line-height: 1.875rem;
      a {
        display: inline-block;
        padding: 0 .3125rem;
        line-height: 1.875rem;
        font-size: .875rem;
        color: #3c3c3c;
        &.router-link-exact-active {
          color: #ff6700;
          border-bottom: 1px solid #ff6700;
        }
      }
    }
  }
  .page-con {
    // position: relative;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    .page-con-items {
      // position: absolute;
      // left: 0;
      // right: 0;
      background: #fff;
      transition: transform .4s cubic-bezier(.55, 0, .1, 1);
      .container {
        margin-left: auto;
        margin-right: auto;
        flex-basis: 100%;
        color: rgba(60, 60, 60, 0.87);
        padding-top: 1.875rem;
        li {
          border-top: .625rem solid #ececec;
          padding: 0 1rem;
          font-size: .75rem;
          display: block;
        }
        .item-top {
          border-bottom: 1px solid #ececec;
          display: flex;
          justify-content: space-between;
          padding: .9375rem 0 .625rem;
          .top-left {
            // width: 100%;
            text-align: left;
            .order-data {
              font-size: .9375rem;
              margin-bottom: .1875rem;
            }
            .order-num {
              color: #999;
            }
          }
          .top-right {
            color: #ff5722;
            font-size: .9375rem;
          }
        }
        .item-center {
          padding: .625rem .3125rem;
          text-align: left;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          img {
            width: 3.125rem;
            height: 3.125rem;
            margin-right: .3125rem;
            display: block;
          }
          span {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .item-bottom {
          padding: .625rem 0;
          text-align: right;
          border-top: 1px solid #ececec;
          span {
            margin-left: .625rem;
          }
          strong {
            font-size: .9375rem;
          }
        }
        strong {
          font-weight: 400;
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
      }
    }
  }
}
</style>

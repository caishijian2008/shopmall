<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">购物车</div>
      <router-link class="header-item" to="/search" slot="wright" tag="div">
        <i class="header-icon iconfont icon-search"></i>
      </router-link>
    </base-header>

    <!-- content -->
    <div class="app-page">
      <div class="nologin" style="display: none;">
        <a href="#">
          <div class="span">登录后享受更多优惠</div>
          <div class="em">
            <span>去登录</span>
            <i class="iconfont">></i>
          </div>
        </a>
      </div>
      <div class="noitems" style="display: none;">
        <a href="#">
          <span>购物车还是空的</span>
          <em>去逛逛</em>
        </a>
      </div>
      <div class="cart-list">
        <ul>
          <li class="item">
            <div class="ui-item">
              <div class="choose checked"></div>
              <router-link to="#" class="img-product">
                <img src="../assets/images/2018092818412345mi4.jpg" alt="">
              </router-link>
              <div class="info">
                <p class="name">
                  <span class="ico ico-seckill">秒</span>
                  <span>小米平板4 Plus 10英寸 LTE版 4GB内存 黑色 128GB</span>
                </p>
                <div class="price-without">
                  <span>售价：</span>
                  <span>2099元</span>
                </div>
                <div class="num">
                  <div class="xm-input-number">
                    <div class="input-sub">
                      <i class="iconfont icon-jian"></i>
                    </div>
                    <div class="input-num">
                      <span>1</span>
                    </div>
                    <div class="input-add">
                      <i class="iconfont icon-add"></i>
                    </div>
                  </div>
                  <div class="delete">
                    <i class="iconfont icon-delete"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="ui-item">
              <div class="choose checked"></div>
              <router-link to="#" class="img-product">
                <img src="../assets/images/2018092818412345mi4.jpg" alt="">
              </router-link>
              <div class="info">
                <p class="name">
                  <span class="ico ico-seckill">秒</span>
                  <span>小米平板4 Plus 10英寸 LTE版 4GB内存 黑色 128GB</span>
                </p>
                <div class="price-without">
                  <span>售价：</span>
                  <span>2099元</span>
                </div>
                <div class="num">
                  <div class="xm-input-number">
                    <div class="input-sub">
                      <i class="iconfont icon-jian"></i>
                    </div>
                    <div class="input-num">
                      <span>1</span>
                    </div>
                    <div class="input-add">
                      <i class="iconfont icon-add"></i>
                    </div>
                  </div>
                  <div class="delete">
                    <i class="iconfont icon-delete"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="ui-line"></div>
      </div>
      <div class="recommend-box">
        <!-- <div class="recommend-title">为你推荐</div> -->
        <div class="recommend-top-img">
          <img src="../assets/images/recommend-top-img.jpg" alt="">
        </div>
        <div class="recommend-list layout">
          <div class="goods-item">
            <a href="#">
              <div class="goods-img">
                <img src="../assets/images/2018092215065633n360x360.jpg" alt="">
              </div>
              <div class="goods-info">
                <div class="goods-name">红米S2 4GB+64GB</div>
                <div class="goods-price price">
                  <span>￥999</span>
                  <del class="price">￥1299</del>
                </div>
              </div>
            </a>
          </div>
          <div class="goods-item">
            <a href="#">
              <div class="goods-img">
                <img src="../assets/images/2018092216041779n360x360.jpg" alt="">
              </div>
              <div class="goods-info">
                <div class="goods-name">小米平板4 Plus 10英寸 LTE版 64GB</div>
                <div class="goods-price price">
                  <span>￥1899</span>
                  <!-- <del class="price">￥1299</del> -->
                </div>
              </div>
            </a>
          </div>
          <div class="goods-item">
            <a href="#">
              <div class="goods-img">
                <img src="../assets/images/2018092215065633n360x360.jpg" alt="">
              </div>
              <div class="goods-info">
                <div class="goods-name">红米S2 4GB+64GB</div>
                <div class="goods-price price">
                  <span>￥999</span>
                  <del class="price">￥1299</del>
                </div>
              </div>
            </a>
          </div>
          <div class="goods-item">
            <a href="#">
              <div class="goods-img">
                <img src="../assets/images/2018092216041779n360x360.jpg" alt="">
              </div>
              <div class="goods-info">
                <div class="goods-name">小米平板4 Plus 10英寸 LTE版 64GB</div>
                <div class="goods-price price">
                  <span>￥1899</span>
                  <!-- <del class="price">￥1299</del> -->
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom-submit">
        <div class="price-box">
          <span>共1件 金额：</span>
          <br>
          <strong>2099</strong>
          <span>元</span>
        </div>
        <router-link to="/category" class="btn disable black">继续购物</router-link>
        <router-link to="#" class="btn">去结算</router-link>
      </div>
    </div>

    <!-- footer -->
    <!-- <base-footer></base-footer> -->
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader.vue'
import BaseFooter from '../components/BaseFooter.vue'
export default {
  name: 'cart',
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
  .nologin > a {
    height: 3.38rem;
    padding: 0 1.82rem 0 1rem;
    position: relative;
    color: rgba(0,0,0,.54);
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    .span {
      font-size: 1rem;
      color: rgba(0,0,0,.87);
      text-align: left;
      font-weight: 500;
    }
    .em {
      font-size: .85rem;
      text-align: right;
    }
  }
  .noitems {
    background: #ebebeb;
    // padding: .943rem;
    & > a {
      // height: 4.7rem;
      height: 3.88rem;
      font-size: .85rem;
      text-decoration: none;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: inline-block;
        line-height: 2rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkMyMDBFODQ5MzZGMTFFNjhBRkVDRkI2RUFFODVGQ0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkMyMDBFODM5MzZGMTFFNjhBRkVDRkI2RUFFODVGQ0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBGREIzMkREOTBCNjExRTY4OEIyREY2NjhDQ0I2Q0IzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBGREIzMkRFOTBCNjExRTY4OEIyREY2NjhDQ0I2Q0IzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kl6JcwAAB4FJREFU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) no-repeat 0;
        background-size: auto 100%;
        padding: 0 .5rem 0 3rem;
        color: rgba(0,0,0,.27);
      }
      em {
        display: inline-block;
        border: 1px solid rgba(0,0,0,.15);
        box-sizing: border-box;
        height: 1.66rem;
        line-height: 1.66rem;
        padding: 0 .65rem;
        color: rgba(0,0,0,.87);
        font-style: normal;
      }
    }
  }
  .cart-list {
    background: #fff;
    .item {
      border-bottom: 1px solid #f6f6f6;
      line-height: 0;
      .ui-item {
        padding: .75rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .choose {
        flex: none;
        width: 1.875rem;
        padding: 0 .625rem;
        height: 5.625rem;
        &.checked {
          background: url(../assets/images/check_press.png) 50% 50% no-repeat;
          background-size: 1.25rem;
        }
        &.unchecked {
          background: url(../assets/images/check_normal.png) 50% 50% no-repeat;
          background-size: 1.25rem;
        }
      }
      .img-product {
        flex: none;
        display: block;
        position: relative;
        width: 5.625rem;
        height: 5.625rem;
        margin-right: .625rem;
        border: 1px solid #eee;
        border-radius: .125rem;
        img {
          max-width: 100%;
          width: 100%;
          height: auto;
        }
      }
      .info {
        text-align: left;
        .name {
          font-size: .875rem;
          line-height: 1rem;
          color: #666;
          margin-bottom: .375rem;
          margin-right: .9375rem;
          display: block;
          span {
            display: inline;
          }
        }
        .ico {
          background: #ffa800;
          border-radius: .125rem;
          color: #fff;
          padding: .094rem .3125rem;
          font-size: .6875rem;
          margin-right: .3125rem;
          &.ico-seckill {
            background: #e53935;
          }
        }
        .price-without {
          padding: .375rem 0;
          font-size: .75rem;
          color: #999;
          margin-bottom: .375rem;
          span {
            margin-right: .3125rem;
          }
        }
        .xm-input-number {
          display: inline-block;
          border: 1px solid #eee;
          .input-add, .input-sub {
            display: inline-block;
            width: 1.875rem;
            height: 1.875rem;
            position: relative;
            vertical-align: middle;
            background-color: #fafafa;
            text-align: center;
          }
          .input-add.active,
          .input-sub.active {
            background: #f4f4f4;
          }
          .input-num {
            display: inline-block;
            vertical-align: middle;
            min-width: 1.875rem;
            padding: 0 .375rem;
            text-align: center;
            font-size: 1rem;
          }
          .iconfont {
            display: inline-block;
            background-position: 50%;
            background-repeat: no-repeat;
            opacity: .3;
            width: 1.875rem;
            height: 1.875rem;
            line-height: 1.875rem;
            background-size: .9375rem .9375rem;
          }
        }
        .delete {
          float: right;
          margin-right: .625rem;
          display: block;
        }
      }
    }
  }
  .bottom-submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 99;
    width: 100%;
    height: 3.25rem;
    box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
    display: flex;
    justify-content: center;
    align-items: center;
    .price-box {
      font-size: .8125rem;
      color: #999;
      width: 100%;
      text-align: center;
      padding-top: .469rem;
      flex: 1;
      strong {
        font-size: 1.25rem;
        color: #ff5722;
        margin-right: .25rem;
      }
    }
    .btn {
      flex: 1;
      display: block;
      width: 100%;
      outline: 0;
      background: #ff6700;
      color: #fff;
      text-align: center;
      height: 3.125rem;
      line-height: 3.125rem;
      font-size: .875rem;
    }
    .black {
      color: #333;
    }
    .disable {
      background: #f4f4f4;
      border: 1px solid #f4f4f4;
    }
  }
  .recommend-box {
    background: #fff;
    text-align: left;
    padding-bottom: 2.8rem;
    .recommend-title {
      line-height: 2.5rem;
      padding: 0 1rem;
      font-size: .9rem;
    }
    .recommend-top-img {
      width: 100%;
      img {
        max-width: 100%;
        width: 100%;
        height: auto;
        display: block;
      }
    }
    .layout {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
      align-items: center;
      flex: 1 1 auto;
    }
    .recommend-list {
      overflow: hidden;
      .goods-item{
        flex: 0 1 49.5%;
        overflow: hidden;
        .a {
          display: block;
          color: #3c3c3c;
        }
      }
      .goods-img {
        position: relative;
        img {
          display: block;
          width: 100%;
          min-height: 11.6rem;
          animation: opacity01 .3s;
        }
      }
      .goods-info {
        padding: .52rem .83rem .6rem;
      }
      .goods-name {
        font-size: .85rem;
        color: #3c3c3c;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .goods-price {
        font-size: 1.1rem;
        display: inline-block;
        color: #ff6700;
        margin-top: .48rem;
      }
      .price {
        position: relative;
        // padding-left: .5rem;
        line-height: 1rem;
      }
      del {
        color: rgba(60, 60, 60, 0.716);
        font-size: .75rem;
      }
    }
  }
}
@keyframes opacity01 {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>

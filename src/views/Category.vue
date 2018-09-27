<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">分类</div>
      <router-link class="header-item" to="/search" slot="wright" tag="div">
        <i class="header-icon iconfont icon-search"></i>
      </router-link>
    </base-header>

    <!-- content -->
    <div class="app-page">
      <div class="list-nav">
        <ul>
          <li class="active"><a href="#" class="active"><span>新品</span></a></li>
          <li class=""><a href="#"><span>手机</span></a></li>
          <li class=""><a href="#"><span>电视</span></a></li>
          <li class=""><a href="#"><span>电脑</span></a></li>
          <li class=""><a href="#"><span>家电</span></a></li>
          <li class=""><a href="#"><span>路由</span></a></li>
          <li class=""><a href="#"><span>出行</span></a></li>
          <li class=""><a href="#"><span>穿戴</span></a></li>
          <li class=""><a href="#"><span>智能</span></a></li>
          <li class=""><a href="#"><span>电源</span></a></li>
          <li class=""><a href="#"><span>个护</span></a></li>
          <li class=""><a href="#"><span>灯具</span></a></li>
          <li class=""><a href="#"><span>儿童</span></a></li>
          <li class=""><a href="#"><span>插线板</span></a></li>
        </ul>
      </div>
      <div class="list-wrap">
        <div class="list-item category0">
          <div class="list-main">
            <div class="cells-fill">
              <a href="#" class="item">
                <img src="../assets/images/201809211622451232.jpg" alt="">
              </a>
            </div>
            <div class="category-title">
              <span>手机</span>
            </div>
            <div class="category-group">
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
            </div>
            <div class="category-title">
              <span>电视</span>
            </div>
            <div class="category-group">
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092119043222n120x120.jpg" alt="">
                  </div>
                  <div class="name">75英寸 电视4</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092119043222n120x120.jpg" alt="">
                  </div>
                  <div class="name">75英寸 电视4</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092119043222n120x120.jpg" alt="">
                  </div>
                  <div class="name">75英寸 电视4</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092119043222n120x120.jpg" alt="">
                  </div>
                  <div class="name">75英寸 电视4</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092119043222n120x120.jpg" alt="">
                  </div>
                  <div class="name">75英寸 电视4</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092119043222n120x120.jpg" alt="">
                  </div>
                  <div class="name">75英寸 电视4</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="list-item category1">
          <div class="list-main">
            <div class="cells-fill">
              <a href="#" class="item">
                <img src="../assets/images/201809211622451232.jpg" alt="">
              </a>
            </div>
            <div class="category-title">
              <span>手机</span>
            </div>
            <div class="category-group">
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
              <div class="product">
                <a href="#" class="item">
                  <div class="img">
                    <img src="../assets/images/2018092117594522n120x120.png" alt="">
                  </div>
                  <div class="name">小米8</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader.vue'
import BaseFooter from '../components/BaseFooter.vue'
export default {
  name: 'category',
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
.header-title {
  text-align: center;
}
.app-page {
  top: 3.125rem;
  .list-nav {
    position: fixed;
    top: 3.125rem;
    bottom: 3.25rem;
    left: 0;
    width: 4.52rem;
    border-right: 1px solid #efefef;
    overflow: hidden;
    ul {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -1.2rem;
      padding: .8rem 1.2rem .8rem 0;
      overflow-y: auto;
      li {
        font-size: 1rem;
        height: 2.9rem;
        line-height: 2.9rem;
        overflow: hidden;
        text-align: center;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        transition: transform .1s linear;
        transform-origin: center center;
        transform: scale(.76);
        &.active {
          transform: scale(1);
        }
        a {
          color: #3c3c3c;
          background-color: transparent;
          outline: 0;
          text-decoration: none;
          span {
            display: inline-block;
          }
          &.active {
            color: #fb7d34;
            transform: scale(1);
          }
        }
      }
    }
  }
  .list-wrap {
    position: fixed;
    left: 4.52rem;
    right: 0;
    top: 3.125rem;
    bottom: 3.25rem;
    padding: 2px 1.32rem;
    overflow: auto;
    .cells-fill {
      margin: 0;
      padding: 0;
      width: 100%;
      .item {
        max-width: 100%;
        height: auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .category-title {
      background: #fff;
      font-size: 1rem;
      text-align: center;
      font-weight: 400;
      margin-top: .65rem;
      height: 4.18rem;
      line-height: 4.18rem;
      overflow: hidden;
      span {
        position: relative;
        &:before, &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 1.38rem;
          border-top: 1px solid #e0e0e0;
          transform: translate3d(-150%,-50%,0);
        }
        &:after {
          left: auto;
          right: 0;
          transform: translate3d(150%,-50%,0);
        }
      }
    }
    .category-group {
      background-color: #fff;
      margin: 0;
      width: 100%;
      overflow: hidden;
      .product {
        float: left;
        width: 33.3333333333%;
        text-align: center;
        margin-top: .65rem;
        margin-bottom: .9rem;
        overflow: hidden;
        .img {
          width: 3.25rem;
          height: 3.25rem;
          margin: 0 auto;
          background: #fff;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          margin-top: .93rem;
          white-space: nowrap;
          font-size: .75rem;
          color: rgba(0,0,0,.54);
        }
      }
    }
  }
}
</style>

<template>
  <div id="app">
    <div class="app-shell">
      <!-- header -->
      <header class="header">
        <div class="header-wrapper">
          <div class="header-wrapper-left">
            <div class="header-item logo">
              <img src="./assets/images/logo.png">
            </div>
          </div>
          <div class="header-wrapper-middle">
            <div class="header-title">
              <i class="header-icon iconfont icon-search"></i>
              <span>搜索商品名称</span>
            </div>
          </div>
          <div class="header-wrapper-right">
            <div class="header-item">
              <i class="header-icon iconfont icon-account"></i>
            </div>
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
        <div class="nav-wrapper">
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
        </div>
      </header>

      <!-- content -->
      <div class="app-page" id="home">
        <div class="bodys">
          <div class="banner">
            <swiper :options="swiperOption">
              <swiper-slide>
                <div class="gallery">
                  <a href="#" class="swiper-slide">
                    <img src="./assets/images/2018090817065190314.jpg" alt="">
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="gallery">
                  <a href="#" class="swiper-slide">
                    <img src="./assets/images/2018090817061548504.jpg" alt="">
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="gallery">
                  <a href="#" class="swiper-slide">
                    <img src="./assets/images/2018090817080520863.jpg" alt="">
                  </a>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="gallery">
                  <a href="#" class="swiper-slide">
                    <img src="./assets/images/2018090817091567848.jpg" alt="">
                  </a>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="auto-fill multi-cell">
            <a href="#" class="items">
              <img src="https://i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp" alt="">
            </a>
            <a href="#" class="items">
              <img src="https://i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp" alt="">
            </a>
            <a href="#" class="items">
              <img src="https://i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp" alt="">
            </a>
            <a href="#" class="items">
              <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3df8f589521ea019b3b2d6231af17926.png?thumb=1&w=144&h=152" alt="">
            </a>
            <a href="#" class="items">
              <img src="https://i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp" alt="">
            </a>
          </div>
          <div class="divider-line"></div>
          <div class="auto-fill column-cell">
            <a href="#" class="items">
              <img src="./assets/images/2018091018403546132.jpg" alt="">
            </a>
            <a href="#" class="items">
              <img src="./assets/images/2018091018421741899.jpg" alt="">
            </a>
            <a href="#" class="items">
              <img src="./assets/images/2018091018432090345.jpg" alt="">
            </a>
            <div class="clearfix"></div>
          </div>
          <div class="divider-line"></div>
          <div class="auto-fill">
            <a href="#" class="items">
              <img src="./assets/images/2018091020100945116.jpg" alt="">
            </a>
          </div>
          <div class="divider-line"></div>
          <div class="list-two flex-box">
            <a href="#" class="item">
              <div class="img">
                <img src="./assets/images/2018091113452071845.jpg" alt="">
                <div class="tag">
                  <img src="./assets/images/2018091113544399549.jpg" alt="">
                </div>
              </div>
              <div class="info">
                <div class="name">小米8 SE</div>
                <div class="brief">三星 AMOLED 全面屏 小屏旗舰</div>
                <div class="price">
                  ￥1699<span>起</span>
                  <span class="price old">￥<s>1799</s></span>
                </div>
              </div>
            </a>
            <a href="#" class="item">
              <div class="img">
                <img src="./assets/images/2018091114283791347.jpg" alt="">
                <div class="tag">
                  <img src="./assets/images/2018091113544399549.jpg" alt="">
                </div>
              </div>
              <div class="info">
                <div class="name">小米Max 2</div>
                <div class="brief">6.44"大屏，5300mAh大电量</div>
                <div class="price">
                  ￥1199<!--<span>起</span>-->
                  <span class="price old">￥<s>1699</s></span>
                </div>
              </div>
            </a>
          </div>


        </div>
      </div>

      <!-- footer -->
      <footer class="app-footer">
        <div class="box-flex">
          <a href="#" class="flex on">
            <i class="bottom-icon iconfont icon-shouye"></i>
            <span>首页</span>
          </a>
          <a href="#" class="flex">
            <i class="bottom-icon iconfont icon-liebiao"></i>
            <span>分类</span>
          </a>
          <a href="#" class="flex">
            <i class="bottom-icon iconfont icon-cart"></i>
            <span>购物车</span>
          </a>
          <a href="#" class="flex">
            <i class="bottom-icon iconfont icon-account"></i>
            <span>我的</span>
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  // name: "App",
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      setting: {
        arrow: 'never'
      },
      light: 'light'
    }
  }
}
</script>

<style lang="scss">
/* 公共css */
html, body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.15;
  color: #3c3c3c;
}

* {
  padding: 0;
  margin: 0;
  background-repeat: no-repeat;
}
*, :after, :before {
    box-sizing: border-box;
}

article, aside, footer, header, nav, section {
  display: block;
}

a {
  text-decoration: none;
  background-color: transparent;
  outline: 0;
}
a:hover {
  outline-width: 0;
}
img {
  border-style: none;
}
ul {
  list-style: none;
}

.clearfix {
  clear: both;
  content: '';
}

.app-shell {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 头部css */
.header {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  background: #f2f2f2;
  .header-wrapper>div,
  .header-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-wrapper {
    justify-content: space-between;
    height: 50px;
    background: #f2f2f2;
    color: #666;
    padding: 0;
    .logo img {
      /* width: 80%; */
      width: 25px;
    }
    .header-wrapper-left {
      display: flex;
      align-items: center;
      .header-item {
        display: block;
        /* width: .6rem; */
        margin: 0 1rem;
      }
    }
    .header-wrapper-middle {
      flex: 1;
      font-size: .3rem;
      .header-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #e5e5e5;
        text-align: left;
        width: 100%;
        // height: 1.2rem;
        color: rgba(0,0,0,.3);
        background-color: #fff;
        border-radius: .04rem;
        padding: .5rem 0;
        .icon-search{
          background-size: .4rem .4rem;
          padding: 0 .5rem;
        }
        .header-icon {
          display: block;
          font-size: 14px;
          /* width: .6rem;
          height: 1rem; */
        }
        span {
          font-size: 1rem;
        }
      }
    }
    .header-wrapper-right {
      display: flex;
      align-items: center;
      justify-content: center;
      .header-item {
        display: block;
        width: 1rem;
        margin: 0 1rem;
        .header-icon {
          display: block;
          width: .6rem;
          height: 1rem;
          line-height: 1rem;
          font-size: 1.5rem;
        }
      }
    }
  }

  .nav-wrapper {
    position: relative;
    .nav {
      background: #f2f2f2;
      font-size: .26rem;
      white-space: nowrap;
      z-index: 2;
      overflow-x: auto;
      height: 32px;
      line-height: 32px;
      .nav-item {
        display: inline-block;
        padding: 0 .85rem;
        span {
          display: inline-block;
          font-size: .85rem;
          line-height: 32px;
          border-bottom: 2px solid rgba(237,91,0,0);
          color: #747474;
          border-color: #f2f2f2;
        }
        span.active {
          color: rgb(237, 91, 0);
          // border-color: rgb(237, 91, 0);
        }
      }
    }
  }
}

/* 内容css */
.app-page {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .bodys {
    position: absolute;
    top: 82px;
    left: 0;
    right: 0;
    margin-bottom: 52px;
    background: #fff;
    transition: transform .4s cubic-bezier(.55,0,.1,1);
    .banner {
      // padding-bottom: 50%;
    }
    .gallery {
      background: #ccc;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      display: block;
      overflow: hidden;
      z-index: 1;
      .swiper-slide {
        display: block;
        position: relative;
        max-width: 100%;
        width: 100%;
        height: auto;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
        /* -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        position: absolute;
        left: 50%;
        top: 50%; */
      }
    }
    .auto-fill.multi-cell {
      position: relative;
      display: flex;
      .items {
        flex: 1;
        max-width: 100%;
        height: auto!important;
        width: 100%;
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }
    }
    .divider-line {
      margin: 0 auto;
      border-top: none;
      border-left: none;
      border-right: none;
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
      height: 0.46rem;
      // height: 0.16rem;
      border-bottom: 0.16rem solid rgb(245, 245, 245);
      background-color: rgb(245, 245, 245);
    }
    .auto-fill {
      position: relative;
      margin: 0;
      padding: 0;
      .items {
        width: 100%;
        img{
          max-width: 100%;
          height: auto;
        }
      }
    }
    .auto-fill.column-cell{
      position: relative;
      display: block;
      height:100%;
      width:100%;
      // width: 187px;
      // height: 265px;
      .items:nth-child(1) {
        float: left;
        // width: 187px;
        // height: 265px;
        width: 50%;
        height: 100%;
        margin-bottom: -5px;
      }
      .items:nth-child(2){
        // width: 187px;
        // height: 131px;
        width: 50%;
        height: 50%;
        float: left;
        margin-bottom: -5px;
      }
      .items:nth-child(3){
        // width: 187px;
        // height: 131px;
        // top: 131px;
        width: 50%;
        height: 50%;
        top: 50%;
        float: left;
        margin-bottom: -5px;
      }
    }
    .flex-box {
      display: flex;
    }
    .flex-box>* {
      -webkit-box-flex: 1;
      flex: 1 1 auto;
    }
    .list-two {
      .item {
        width: 3.6rem;
        &:first-child {
          margin-right: .14rem;
        }
      }
      .img {
        position: relative;
        // width: 3.6rem;
        // height: 3.6rem;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .tag {
        position: absolute;
        top: 0;
        left: 0;
        img {
          // width: 1.2rem;
          // height: .32rem;
          height: 1rem;
          display: block;
        }
      }
      .info {
        padding: .4rem .47rem;
        text-align: left;
        .name, .brief {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .name {
          font-size: .88rem;
          color: rgba(0,0,0,.87);
        }
        .brief {
          margin-top: .2rem;
          font-size: .76rem;
          line-height: .86rem;
          color: rgba(0,0,0,.54);
        }
        .price {
          font-size: .88rem;
          color: #ea625b;
          height: 1.5em;
          line-height: 1.7em;
          position: relative;
          display: inline-block;
          span {
            display: inline-block;
            margin-left: .14rem;
            font-size: .62rem;
          }
        }
        .price .old {
          display: inline-block;
          margin: 0 .1rem;
          font-size: .62rem;
          color: rgba(0,0,0,.54);
        }
      }
    }
  }
}

/* 底部css */
.app-footer {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background: #fff;
  transition: transform .2s ease-out;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  .box-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .flex {
    display: flex;
    flex: 1;
    color: #999;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .bottom-icon {
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      font-size: 22px;
      margin: 0 auto .2rem;
    }
  }
  .flex.on {
    color: #ff6700;
  }
}

</style>

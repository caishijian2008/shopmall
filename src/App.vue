<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss">
/* 公共css */
html, body, #app {
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
.fixed-fr {
  position: fixed;
  bottom: 80px;
  right: 15px;
  z-index: 10000;
  #topto {
    padding: 10px;
    width: 16px;
    height: 16px;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    font-size: 24px;
    text-align: center;
    border-radius: 25%;
  }
}

/* 头部css */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // right: 0;
  // z-index: 99;
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
      font-size: 1rem;
      text-align: center;
      .header-title {
        width: 100%;
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
      // z-index: 2;
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
  position: fixed;
  width: 100%;
  bottom: 52px;
  top: 82px;
  overflow: auto;
  .bodys {
    position: relative;
    background: #fff;
    transition: transform .4s cubic-bezier(.55,0,.1,1);
    .banner {
      overflow: hidden;
      width: 100%;
      height: 0;
      padding-bottom: 49.86%;
    }
    .gallery {
      background: #ccc;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      display: block;
      overflow: hidden;
      // z-index: 1;
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
      &.thick {
        height: 0.46rem;
        border-bottom: 0.46rem solid rgb(245, 245, 245);
        background-color: rgb(245, 245, 245);
      }
      &.thin {
        height: 0.1rem;
        border-bottom: 0.1rem solid rgb(206, 206, 206);
        background-color: rgb(206, 206, 206);
      }
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
      }
    }
    .img {
      position: relative;
      img {
        max-width: 100%;
        height: auto;
      }
    }
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
      line-height: 1rem;
      color: rgba(0,0,0,.54);
    }
    .briefwrap {
      margin-top: .2rem;
      font-size: .76rem;
      line-height: 1.3rem;
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
      &.mt32 {
        margin-top: .2rem;
      }
    }
    .price .old {
      display: inline-block;
      margin: 0 .1rem;
      font-size: .62rem;
      color: rgba(0,0,0,.54);
    }
    .list-title {
      .h {
        background: #fff;
        height: 3rem;
        line-height: 3rem;
        font-size: .88rem;
        text-align: center;
        .ti {
          color: rgba(0,0,0,.6);
        }
      }
    }
    .list-one-type2 {
      margin: 0;
      padding: 0;
      .item {
        // width: 100%;
        display: flex;
        .img {
          flex: 1;
          img {
            // width: 187px;
            // height: 187px;
            width: 100%;
            height: auto;
          }
        }
        .info {
          flex:1;
          padding: 2.64rem .32rem 0 0;
          // padding: 2.64rem .22rem 0 .82rem;
          box-sizing: border-box;
          // width: 187px;
          // height: 187px;
          .name { padding-left: .88rem; }
          .briefwrap { padding-left: .88rem; }
          .price { padding-left: .88rem; }
        }
      }
    }
    .list-one-type3 {
      margin: 0;
      padding: 0;
      .item {
        // width: 100%;
        display: flex;
        .img {
          flex: 1;
          img {
            // width: 188px;
            // height: 188px;
            width: 100%;
            height: auto;
          }
        }
        .info {
          flex: 1;
          padding: 2.64rem .22rem 0 0;
          // padding: 2.64rem .22rem 0 .82rem;
          box-sizing: border-box;
          // width: 188px;
          // height: 188px;
          .name { padding-left: .88rem; }
          .briefwrap { padding-left: .88rem; }
          .price { padding-left: .88rem; }
        }
      }
    }
  }
  .top{
      padding: 10px;
      background: rgba(0, 153, 229, .7);
      color: #fff;
      text-align: center;
      border-radius: 2px;
  }
}

/* 底部css */
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  width: 100%;
  background: #fff;
  transition: transform .2s ease-out;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  display: flex;
  .flex {
    display: flex;
    flex: 1;
    color: #999;
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
    &.router-link-exact-active {
      color: #ff6700;
    }
  }

}

</style>

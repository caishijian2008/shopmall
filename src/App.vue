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
ul, ol {
  list-style: none;
}

.clearfix {
  clear: both;
  content: "";
}

.app-shell {
  position: relative;
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

.ui-line {
  height: .625rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
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
    height: 3.125rem;
    background: #f2f2f2;
    color: #666;
    padding: 0;
    .logo img {
      /* width: 80%; */
      width: 1.5625rem;
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
          font-size: 1.3rem;
        }
      }
    }
  }
}

.iconfont.icon-arrowleft {
  font-size: 1.25rem;
}

/* 内容css */
.app-page {
  position: fixed;
  width: 100%;
  bottom: 3.25rem;
  top: 5.125rem;
  overflow: auto;
}

/* 底部css */
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.25rem;
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
      font-size: 1.375rem;
      margin: 0 auto .2rem;
    }
    &.router-link-exact-active {
      color: #ff6700;
    }
  }
}

</style>

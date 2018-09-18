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

</style>

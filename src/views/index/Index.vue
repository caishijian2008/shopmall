<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <router-link class="header-item logo" to="/index" slot="wleft">
        <img src="../../assets/images/logo.png">
      </router-link>
      <router-link class="header-title" to="/search" slot="wmiddle" tag="div">
        <i class="header-icon iconfont icon-search"></i>
        <span>搜索商品名称</span>
      </router-link>
      <router-link class="header-item" to="/user" slot="wright" tag="div">
        <i class="header-icon iconfont icon-account"></i>
      </router-link>
      <div class="nav-wrapper" slot="wnav">
        <div class="nav">
          <div class="nav-item" v-for="(value,tab) in tabs" :key="tab" @click="currentTab = tab">
            <span class="">{{ value }}</span>
          </div>
          <!-- <router-link to="#1" class="nav-item">
            <span class="">推荐</span>
          </router-link>
          <router-link to="#2" class="nav-item">
            <span class="">手机</span>
          </router-link>
          <router-link to="#3" class="nav-item">
            <span class="">电视</span>
          </router-link>
          <router-link to="#4" class="nav-item">
            <span class="">智能</span>
          </router-link>
          <router-link to="#5" class="nav-item">
            <span class="">笔记本</span>
          </router-link>
          <router-link to="#6" class="nav-item">
            <span class="">家电</span>
          </router-link>
          <router-link to="#7" class="nav-item">
            <span class="">游戏本</span>
          </router-link> -->
        </div>
      </div>
      <!-- <div class="nav-wrapper" slot="wnav">
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
      </div> -->
    </base-header>
    <!-- content -->
    <div class="app-page">
      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>
      <tab-recommend></tab-recommend>
      <tab-photo></tab-photo>
      <tab-televi></tab-televi>
      <tab-smart></tab-smart>
      <tab-computer></tab-computer>
      <tab-homeapp></tab-homeapp>
      <tab-gamebook></tab-gamebook>
    </div>
    <!-- footer -->
    <base-footer></base-footer>
  </div>
</template>

<script>
import BaseHeader from '../../components/BaseHeader.vue'
import BaseFooter from '../../components/BaseFooter.vue'
import TabRecommend from '../index/TabRecommend.vue'
import TabPhoto from '../index/TabPhoto.vue'
import TabTelevi from '../index/TabTelevi.vue'
import TabSmart from '../index/TabSmart.vue'
import TabComputer from '../index/TabComputer.vue'
import TabHomeapp from '../index/TabHomeapp.vue'
import TabGamebook from '../index/TabGamebook.vue'
export default {
  name: 'index',
  computed: {
    currentTabComponent () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  components: {
    BaseHeader,
    BaseFooter,
    TabRecommend,
    TabPhoto,
    TabTelevi,
    TabSmart,
    TabComputer,
    TabHomeapp,
    TabGamebook
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      currentTab: 'recommend',
      tabs: { 'recommend': '推荐', 'photo': '手机', 'televi': '电视', 'smart': '智能', 'computer': '笔记本', 'homeapp': '家电', 'gamebook': '游戏本' }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
    position: relative;
    .nav {
      background: #f2f2f2;
      font-size: .26rem;
      white-space: nowrap;
      z-index: 1;
      overflow: hidden;
      overflow-x: scroll;
      height: 2.1rem;
      line-height: 2.1rem;
      &::-webkit-scrollbar {
        display: none;
      }
      .nav-item {
        display: inline-block;
        padding: 0 .85rem;
        span {
          display: inline-block;
          font-size: .85rem;
          line-height: 1.9rem;
          border-bottom: 2px solid rgba(237,91,0,0);
          color: #747474;
          border-color: #f2f2f2;
        }
        &.router-link-exact-active span {
          color: rgb(237, 91, 0);
          border-color: rgb(237, 91, 0);
        }
      }
    }
  }

.header-title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #e5e5e5;
  text-align: left;
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
    font-size: .875rem;
  }
  span {
    font-size: 1rem;
  }
}
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
  .auto-fill.multi-cell {
    display: flex;
    .items {
      flex: 1;
      width: 4.5rem;
      // height: 4.75rem;
      overflow: hidden;
      img {
        display: block;
        max-width: 100%;
        width: 100%;
        height: auto;
      }
    }
  }
  .auto-fill {
    margin: 0;
    padding: 0;
    .items {
      width: 100%;
      img{
        display: block;
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
      // margin-bottom: -5px;
    }
    .items:nth-child(2){
      // width: 187px;
      // height: 131px;
      width: 49.5%;
      // height: 49.5%;
      height: auto;
      float: left;
      margin-left: .5%;
      margin-bottom: .5%;
    }
    .items:nth-child(3){
      // width: 187px;
      // height: 131px;
      // top: 131px;
      width: 49.5%;
      // height: 49.5%;
      height: auto;
      // top: 50%;
      float: left;
      margin-left: .5%;
      margin-top: .5%;
      // margin-bottom: -.3125rem;
    }//
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
    padding: .625rem;
    background: rgba(0, 153, 229, .7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
}
</style>

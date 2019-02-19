<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item" slot="wleft">
        <i class="iconfont icon-arrowleft" @click="goBack"></i>
      </div>
      <div class="header-title" slot="wmiddle">商城</div>
      <router-link class="header-item" to="/search" slot="wright" tag="div">
        <i class="header-icon iconfont icon-search"></i>
      </router-link>
    </base-header>
    <!-- content -->
    <div class="app-page">
      <base-header>
        <div class="header-item" slot="wleft">
          <i class="iconfont icon-arrowleft" @click="goBack"></i>
        </div>
        <div class="header-title" slot="wmiddle"></div>
        <router-link class="header-item" to="/#" slot="wright" tag="div">
          <i class="header-icon iconfont icon-share"></i>
        </router-link>
      </base-header>
      <div class="section section-detail">
        <div class="product-gallery">
          <swiper :options="swiperOption">
            <swiper-slide>
              <div class="gallery">
                <a href="#" class="swiper-slide">
                  <img src="../assets/images/2018090817065190314.jpg" alt="">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="gallery">
                <a href="#" class="swiper-slide">
                  <img src="../assets/images/2018090817061548504.jpg" alt="">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="gallery">
                <a href="#" class="swiper-slide">
                  <img src="../assets/images/2018090817080520863.jpg" alt="">
                </a>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="gallery">
                <a href="#" class="swiper-slide">
                  <img src="../assets/images/2018090817091567848.jpg" alt="">
                </a>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
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
  name: 'details',
  components: {
    BaseHeader,
    BaseFooter
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: none;
}
.app-shell .app-page .header .header-wrapper {
  background: #ff0000;
}
.app-page {
  // top: 3.125rem;
  top: 0;
  background: #fff;
  .header {
    display: block;
    background: transparent;
    box-shadow: none;
    z-index: 99;
    .header-wrapper {
      .header-item {
        color: #ddd;
        background: rgba(0,0,0,.6);
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        .header-icon {
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
        }
        i {
          margin-left: .5rem;
        }
        .iconfont.icon-arrowleft {
          font-size: medium;
        }
      }
    }
  }
}
</style>

<template>
  <div class="app-shell">
    <!-- header -->
    <base-header>
      <div class="header-item logo" slot="wleft">
        <img src="../assets/images/logo.png">
      </div>
      <div class="header-title" slot="wmiddle">
        <i class="header-icon iconfont icon-search"></i>
        <span>搜索商品名称</span>
      </div>
      <div class="header-item" slot="wright">
        <i class="header-icon iconfont icon-account"></i>
      </div>
      <!-- <div class="nav-wrapper" slot="wnav">
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
      <div class="nav-wrapper" slot="wnav">
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
    </base-header>
    <!-- content -->
    <div class="app-page">
      <div class="bodys">
        <div class="banner">
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
        <div class="auto-fill multi-cell">
          <a href="#" class="items">
            <img src="../assets/images/2018092520291785266.jpg" alt="">
          </a>
          <a href="#" class="items">
            <img src="../assets/images/2018092520224679109.jpg" alt="">
          </a>
          <a href="#" class="items">
            <img src="../assets/images/2018092520291785266.jpg" alt="">
          </a>
          <a href="#" class="items">
            <img src="../assets/images/2018092520224679109.jpg" alt="">
          </a>
          <a href="#" class="items">
            <img src="../assets/images/2018092520291785266.jpg" alt="">
          </a>
        </div>
        <div class="divider-line thick"></div>
        <div class="auto-fill column-cell">
          <a href="#" class="items">
            <img src="../assets/images/2018091018403546132.jpg" alt="">
          </a>
          <a href="#" class="items">
            <img src="../assets/images/2018091018421741899.jpg" alt="">
          </a>
          <a href="#" class="items">
            <img src="../assets/images/2018091018432090345.jpg" alt="">
          </a>
          <div class="clearfix"></div>
        </div>
        <div class="divider-line thick"></div>
        <div class="auto-fill">
          <a href="#" class="items">
            <img src="../assets/images/2018091020100945116.jpg" alt="">
          </a>
        </div>
        <div class="divider-line thick"></div>
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="divider-line thick"></div>
        <div class="auto-fill">
          <a href="#" class="items">
            <img src="../assets/images/2018091020100945116.jpg" alt="">
          </a>
        </div>
        <div class="divider-line thick"></div>
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="divider-line thin"></div>
        <div class="list-title flex-box">
          <a href="#" class="h">
            <div class="ti">更多小米XX产品 > </div>
          </a>
        </div>
        <div class="divider-line thick"></div>
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="list-two flex-box">
          <a href="#" class="item">
            <div class="img">
              <img src="../assets/images/2018091113452071845.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
              <img src="../assets/images/2018091114283791347.jpg" alt="">
              <div class="tag">
                <img src="../assets/images/2018091113544399549.jpg" alt="">
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
        <div class="divider-line thick"></div>
        <div class="list-one-type2">
          <a href="#" class="flex-box item">
            <div class="img">
              <img src="../assets/images/2018091116040932349.jpg" alt="">
            </div>
            <div class="info">
              <div class="name">米家 iHealth 体温计</div>
              <div class="briefwrap">又准又快，全家都爱用的体温计dddddddd</div>
              <div class="price mt32">￥129</div>
            </div>
          </a>
        </div>
        <div class="list-one-type3">
          <a href="#" class="flex-box item">
            <div class="info">
              <div class="name">米家便携电动剃须刀</div>
              <div class="briefwrap">超便携，男人必备的第二把剃须刀</div>
              <div class="price mt32">￥179</div>
            </div>
            <div class="img">
              <img src="../assets/images/2018091117023052510.jpg" alt="">
            </div>
          </a>
        </div>
        <div class="list-one-type2">
          <a href="#" class="flex-box item">
            <div class="img">
              <img src="../assets/images/2018091116040932349.jpg" alt="">
            </div>
            <div class="info">
              <div class="name">米家 iHealth 体温计</div>
              <div class="briefwrap">又准又快，全家都爱用的体温计</div>
              <div class="price mt32">￥129</div>
            </div>
          </a>
        </div>
        <div class="divider-line thick"></div>
        <div class="auto-fill">
          <a href="#" class="items">
            <img src="../assets/images/2018091020100945116.jpg" alt="">
          </a>
        </div>
        <div class="divider-line thick"></div>
        <div class="list-title flex-box">
          <a href="#" class="h">
            <div class="ti">了解我们</div>
          </a>
        </div>
        <div class="divider-line thick"></div>
        <!-- <BackTop :height="100" :bottom="100">
          <div class="top">返回顶端</div>
        </BackTop> -->
        <BackTop :bottom="80"></BackTop>
        <!-- <div class="fixed-fr">
          <a href="javascript:;" id="topto"><Icon type="ios-arrow-dropup" /></a>
        </div> -->
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
  name: 'index',
  components: {
    BaseHeader,
    BaseFooter
  },
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

<style lang="scss" scoped>
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

</style>

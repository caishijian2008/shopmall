<template>
  <div class="bodys">
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="gallery">
            <a href="#" class="swiper-slide">
              <img src="../../assets/images/2018090817065190314.jpg" alt="">
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="gallery">
            <a href="#" class="swiper-slide">
              <img src="../../assets/images/2018090817061548504.jpg" alt="">
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="gallery">
            <a href="#" class="swiper-slide">
              <img src="../../assets/images/2018090817080520863.jpg" alt="">
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="gallery">
            <a href="#" class="swiper-slide">
              <img src="../../assets/images/2018090817091567848.jpg" alt="">
            </a>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="auto-fill multi-cell">
      <a href="#" class="items">
        <img src="../../assets/images/2018092520291785266.jpg" alt="">
      </a>
      <a href="#" class="items">
        <img src="../../assets/images/2018092520224679109.jpg" alt="">
      </a>
      <a href="#" class="items">
        <img src="../../assets/images/2018092520291785266.jpg" alt="">
      </a>
      <a href="#" class="items">
        <img src="../../assets/images/2018092520224679109.jpg" alt="">
      </a>
      <a href="#" class="items">
        <img src="../../assets/images/2018092520291785266.jpg" alt="">
      </a>
    </div>
    <div class="divider-line thick"></div>
    <div class="auto-fill column-cell">
      <a href="#" class="items">
        <img src="../../assets/images/2018091018403546132.jpg" alt="">
      </a>
      <a href="#" class="items">
        <img src="../../assets/images/2018091018421741899.jpg" alt="">
      </a>
      <a href="#" class="items">
        <img src="../../assets/images/2018091018432090345.jpg" alt="">
      </a>
      <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
    <div class="divider-line thick"></div>
    <div class="auto-fill">
      <a href="#" class="items">
        <img src="../../assets/images/2018091020100945116.jpg" alt="">
      </a>
    </div>
    <div class="divider-line thick"></div>
    <div class="list-two flex-box">
      <a href="#" class="item">
        <div class="img">
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
        <img src="../../assets/images/2018091020100945116.jpg" alt="">
      </a>
    </div>
    <div class="divider-line thick"></div>
    <div class="list-two flex-box">
      <a href="#" class="item">
        <div class="img">
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091113452071845.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091114283791347.jpg" alt="">
          <div class="tag">
            <img src="../../assets/images/2018091113544399549.jpg" alt="">
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
          <img src="../../assets/images/2018091116040932349.jpg" alt="">
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
          <img src="../../assets/images/2018091117023052510.jpg" alt="">
        </div>
      </a>
    </div>
    <div class="list-one-type2">
      <a href="#" class="flex-box item">
        <div class="img">
          <img src="../../assets/images/2018091116040932349.jpg" alt="">
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
        <img src="../../assets/images/2018091020100945116.jpg" alt="">
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
    <!-- <BackTop :bottom="80"></BackTop> -->
    <!-- <div class="fixed-fr">
      <a href="javascript:;" id="topto"><Icon type="ios-arrow-dropup" /></a>
    </div> -->
  </div>
</template>

<script>
export default {
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
</style>

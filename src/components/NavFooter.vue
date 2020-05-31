<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.baidu.com" target="_blank">
        无敌小松松的主页
        <span>|</span>
      </a>
      <a>
        无敌小松松的主页
        <span>|</span>
      </a>
      <a>
        无敌小松松的主页
        <span>|</span>
      </a>
      <a>
        无敌小松松的主页
        <span>|</span>
      </a>
      <a>无敌小松松的主页</a>
    </div>
    <div class="copyright">CopyRight @2020 I Never Give Up</div>
  </div>
</template>
<script>
export default {
  name: "nav-footer"
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin: 46px 0 31px 0;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
}
</style>
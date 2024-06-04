<template>
  <footer class="footer-box">
    <div class="container">
      <div class="center_list py-3">
        风信创新科技有限公司
      </div>
      <div class="center_list py-3">Copyright © 2024 Fengxin Innovatech 备案号xxxx</div>
    </div>
  </footer>
</template>
<script setup>

</script>
<style lang="less" scoped>
.footer-box {
  width: 100%;
  line-height:50px;
  background: rgb(32, 32, 32);

  .container {
    width: 100%;
    max-width: 1240px;
    margin: auto;

    .center_list {
      width: 100%;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      color: #fff;
    }

    .center_list:nth-child(1)::after {
      content: " ";
      width: 100%;
      height: .5px;
      background: #e5e7eb;
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
  }
}
</style>
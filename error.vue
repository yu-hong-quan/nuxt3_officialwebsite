<template>
    <div class="container">
      <!-- <img :src="noFound" alt=""> -->
      <div class="info">
        <p>The Page not Found-找不到你要访问的页面</p>
        <div class="sub">
            
            <el-button type="primary" @click="navigateTo('/');">
                Back
            </el-button>
        </div>
      </div>
    </div>
  </template>
  <script setup>
//   import noFound from '@/assets/svg/404error.svg'
  </script>
  <style scoped lang="less">
  .container {
    width: 100vw;
    height: 100vh;
    --color: #E1E1E1;
    background-color: #F3F3F3;
    background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
    background-size: 55px 55px;
    position: relative;
   
    img {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 600px;
    }
   
    .info {
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
   
      p {
        font-size: 24px;
        color: #666;
      }
   
      .sub {
        margin-top: 30px;
   
        a {
          color: #fff;
          font-size: 16px;
          padding: 6px 10px;
          border-radius: 10px;
          border: 1px solid #666;
          background-color: var(--color-primary);
        }
      }
    }
  }</style>
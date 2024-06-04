<template>
  <div class="home">
    <HomeComponentBanner></HomeComponentBanner>
    <HomeComponentProductCategory></HomeComponentProductCategory>
    <HomeComponentCharacteristicProduct></HomeComponentCharacteristicProduct>
    <HomeComponentWhyChooseUs></HomeComponentWhyChooseUs>
    <el-backtop :bottom="100" :right="20">
      <div style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      ">
        <el-icon>
          <Top />
        </el-icon>
      </div>
    </el-backtop>
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: '首页',
  ogTitle: '我的神奇网站',
  description: '这是我的神奇网站，让我告诉你关于它的一切。',
  ogDescription: '这是我的神奇网站，让我告诉你关于它的一切。',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
import { Top } from '@element-plus/icons-vue';
import { ElLoading } from 'element-plus';
// const loading = ElLoading.service({
//   lock: true,
//   text: 'Loading',
//   background: 'rgba(255, 255, 255, 0.7)',
// })

onMounted(() => {
  // loading.close();
})
</script>
<style lang="less" scoped>
.home {
  width: 100%;

  :deep(.el-backtop) {
    & div {
      background: #333 !important;
      color: #fff;
      border-radius: 50%;
      font-size: 22px;
      color: #fff !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
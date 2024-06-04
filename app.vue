<template>
  <NuxtLayout name="default">
    <main class="home-main-box">
      <LoadingScreen />
      <NuxtLoadingIndicator :throttle="0" />
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>
<script setup lang="ts">
import 'element-plus/theme-chalk/display.css';
</script>
<style lang="less" scoped></style>

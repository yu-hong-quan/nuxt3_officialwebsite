<template>
    <div v-if="show" class="loading-screen">
        <div class="spinner"></div>
    </div>
</template>
  
<script setup>
const show = ref(true)

onMounted(() => {
    setTimeout(() => {
        show.value = false
    }, 1500)
})
</script>
  
<style scoped>
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
  
<template>
    <div class="home-banner-box">
        <el-carousel indicator-position="outside" arrow="hover" :autoplay="true" :interval="5000">
            <el-carousel-item v-for="item in bannerData" :key="item">
                <el-image :src="item.url" fit="cover" />
            </el-carousel-item>
        </el-carousel>
        <el-button type="danger" round class="about_btn">联系我们</el-button>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue';
let bannerData = ref([]);


const getBannerList = async () => {
    const { data: result } = await useAsyncData("result", () => $fetch('https://api.oioweb.cn/api/bing', {
    }), { lazy: false });//lazy是否开启懒加载，如果开启则变成了useLazyAsyncData
    console.log(result.value);
    if (result.value.code === 200) {
        bannerData.value = result.value.result;
    }
}
onMounted(() => {
    nextTick(() => {
        getBannerList();
    })
})
</script>
<style lang="less" scoped>
.home-banner-box {
    width: 100%;
    height: 600px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;

    .el-carousel {
        width: 100%;
        height: 100%;

        :deep(.el-carousel__container) {
            width: 100%;
            height: 100% !important;
        }

        :deep(.el-carousel__indicators--outside) {
            position: absolute !important;
            margin: 0 auto;
            transform: translateX(-50%);
        }

        :deep(.el-image) {
            width: 100%;
            height: 100% !important;
            cursor: pointer;
        }

        :deep(.el-carousel__arrow) {
            background-color: rgba(0, 0, 0, .5);
        }

        // 指示灯未选中的样式
        :deep(.el-carousel__indicator--horizontal .el-carousel__button) {
            width: 20px;
            height: 4px;
            border-radius: 31px;
            background: #FFFFFF80;
        }

        // 指示灯选中的样式
        :deep(.el-carousel__indicator--horizontal.is-active .el-carousel__button) {
            width: 20px;
            height: 4px;
            border-radius: 31px;
            background: #fff;
        }
    }

    .about_btn {
        width: 150px;
        height: 40px;
        position: absolute;
        left: 100px;
        bottom: 100px;
        font-size: 20px;
        border-radius: 5px;
        background-color: #e80202;
        border: none;
    }
}
</style>
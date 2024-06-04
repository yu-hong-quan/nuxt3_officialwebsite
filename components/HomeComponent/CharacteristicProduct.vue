<template>
    <div class="characteristic-product fade-in-section" ref="container" :class="{ visible: isVisible }">
        <div class="characteristic-product-box">
            <span class="title">特色产品</span>
            <span class="desc_val">皮具是一种高质量、耐用且时尚的产品，广泛应用于时尚界和日常生活中。它们由不同类型的动物皮革制成，经过精心设计和制作而成。</span>
            <div class="info_list_box">
                <div class="list-item">
                    <div class="img-box">
                        <el-image
                            src="https://cn.bing.com/th?id=OHR.ArizonaPinkMoon_ZH-CN5545607389_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
                            fit="cover" alt="product-img" class="img-cls" />
                        <el-button round class="top-btn">￥9999</el-button>
                    </div>
                    <div class="item-info">
                        <span class="item-name">手提包</span>
                        <span class="item-desc">各个都牛得不得了各个都牛得不得了各个都</span>
                    </div>
                </div>
                <div class="list-item">
                    <div class="img-box">
                        <el-image
                            src="https://cn.bing.com/th?id=OHR.ArizonaPinkMoon_ZH-CN5545607389_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
                            fit="cover" alt="product-img" class="img-cls" />
                        <el-button round class="top-btn">￥199999</el-button>
                    </div>
                    <div class="item-info">
                        <span class="item-name">皮质手套</span>
                        <span class="item-desc">各个都牛得不得了各个都牛得不得了各个都</span>
                    </div>
                </div>
                <div class="list-item">
                    <div class="img-box">
                        <el-image
                            src="https://cn.bing.com/th?id=OHR.ArizonaPinkMoon_ZH-CN5545607389_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
                            fit="cover" alt="product-img" class="img-cls" />
                        <el-button round class="top-btn">￥299999</el-button>
                    </div>
                    <div class="item-info">
                        <span class="item-name">皮带</span>
                        <span class="item-desc">各个都牛得不得了各个都牛得不得了各个都</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { TrendCharts, Management, Platform } from '@element-plus/icons-vue';
const container = ref(null)
const isVisible = ref(false)
let observer = null;

const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
        isVisible.value = true
    }
}

onMounted(() => {
    observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    })
    observer.observe(container.value)
})

onUnmounted(() => {
    observer.disconnect()
})

</script>
<style lang="less" scoped>
.characteristic-product {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;

    .characteristic-product-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            color: #c90707;
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .desc_val {
            font-size: 15px;
            color: rgb(68, 68, 68);
            margin-bottom: 40px;
            display: flex;
            padding: 0 20px;
            box-sizing: border-box;
            max-width: 800px;
            text-align: center;
            line-height: 30px;
        }

        .info_list_box {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            .list-item {
                width: 400px;
                height: 500px;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                color: #333;
                box-shadow: 0 0 15px #ccc;
                border-radius: 15px;
                margin: 0 25px;
                margin-bottom: 30px;

                .img-box {
                    width: 100%;
                    height: 250px;
                    position: relative;

                    .img-cls {
                        width: 100%;
                        height: 100%;
                        border-top-left-radius: 15px;
                        border-top-right-radius: 15px;
                    }

                    .top-btn {
                        position: absolute;
                        top: 20px;
                        left: 20px;
                    }
                }

                .item-info {
                    width: 100%;
                    padding: 20px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;

                    .item-name {
                        font-weight: bold;
                        font-size: 22px;
                        margin-bottom: 20px;
                    }

                    .item-desc {
                        font-size: 15px;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <div class="product-category fade-in-section" ref="container" :class="{ visible: isVisible }">
        <div class="category-box">
            <span class="title">产品类别</span>
            <span class="desc_val">皮具是一种高质量、耐用且时尚的产品，广泛应用于时尚界和日常生活中。它们由不同类型的动物皮革制成，经过精心设计和制作而成。</span>
            <div class="info_list_box">
                <div class="list-item">
                    <div class="img-box">
                        <img src="~/assets/img/piju.jpg" fit="cover" alt="product-img" class="img-cls">
                        <!-- <el-image src="~/assets/img/piju.jpg" fit="cover" alt="product-img" class="img-cls"/> -->
                    </div>
                    <span class="item-name">平板</span>
                    <span class="item-desc">手提包是最受欢迎的皮具之一，它们有各种形状、尺寸和风格。从经典的皮革手提包到时尚的斜挎包，手提包提供了便捷的携带方式，同时展现了优雅和品味。</span>
                </div>
                <div class="list-item">
                    <div class="img-box">
                        <img src="~/assets/img/sjk.png" fit="cover" alt="product-img" class="img-cls">
                        <!-- <el-image src="https://cn.bing.com/th?id=OHR.ArizonaPinkMoon_ZH-CN5545607389_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" fit="cover" alt="product-img" class="img-cls"/> -->
                    </div>
                    <span class="item-name">手机壳</span>
                    <span class="item-desc">钱包和卡包是必不可少的日常用品。它们通常由柔软的皮革制成，设计紧凑而功能齐全，可容纳现金、银行卡、身份证和其他必要的小物件。钱包和卡包的设计注重实用性和风格，并经过精细的手工制作。</span>
                </div>
                <div class="list-item">
                    <div class="img-box">
                        <!-- <el-image src="https://cn.bing.com/th?id=OHR.ArizonaPinkMoon_ZH-CN5545607389_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" fit="cover" alt="product-img" class="img-cls"/> -->
                        <img src="~/assets/img/zuodian.jpg" fit="cover" alt="product-img" class="img-cls">
                    </div>
                    <span class="item-name">坐垫</span>
                    <span class="item-desc">皮带是男女通用的配饰，不仅能够固定裤子，还能为整体造型增添亮点。皮带通常由坚韧耐用的皮革制成，经过精密的纹理处理和装饰，使其更具吸引力和独特性。</span>
                </div>
                <!-- <div class="list-item">
                    <div class="img-box">
                        <el-image src="https://cn.bing.com/th?id=OHR.ArizonaPinkMoon_ZH-CN5545607389_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp" fit="cover" alt="product-img" class="img-cls"/>
                    </div>
                    <span class="item-name">皮质手套</span>
                    <span class="item-desc">皮质手套是冬季保暖和时尚的理想选择。它们由柔软的皮革制成，可以保护手部免受寒冷和刺骨的天气侵袭。皮质手套不仅提供舒适度，还展示了细致的工艺和细节。</span>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script setup>
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
.product-category {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;

    .category-box {
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
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;

            .list-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: #333;
                padding: 0 30px;
                box-sizing: border-box;
                flex: 1;
                margin-bottom: 30px;

                .img-box {
                    width: 270px;
                    height: 230px;
                    border: 1px solid rgb(223, 223, 223);
                    box-sizing: border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    cursor: pointer;
                    position: relative;
                    .img-cls {
                        width: 70%;
                        height: 70%;
                        border-radius: 5px;
                        transition:.5s all;
                        position: absolute;
                    }
                }
                .img-box:hover{
                    .img-cls {
                        width: 120%;
                        height: 120%;
                    }
                }

                .item-name{
                    display: flex;
                    width: 270px;
                    text-align: left;
                    font-size: 17px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    text-decoration: underline;
                    cursor: pointer;
                }
                .item-desc{
                    display: flex;
                    width: 270px;
                    text-align: left;
                    font-size: 14px;
                    color: #333;
                    line-height: 22px;
                    cursor: pointer;
                }
            }
        }
    }
}</style>
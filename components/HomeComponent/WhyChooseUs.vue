<template>
    <div class="why-choose-us fade-in-section" ref="container" :class="{ visible: isVisible }">
        <div class="choose-use-box">
            <span class="title">为什么选择我们</span>
            <div class="info_list_box">
                <div class="list-item">
                    <el-icon class="icon-img">
                        <TrendCharts />
                    </el-icon>
                    <span class="item-name">资深的团队</span>
                    <span
                        class="item-desc">我们的团队是一支资深的皮具设计与制作团队，拥有多年的行业经验和丰富的专业知识。我们的团队成员包括设计师、工匠和品质管理人员，每个人都在自己的领域内拥有深厚的造诣和独特的创意。</span>
                </div>
                <div class="list-item">
                    <el-icon class="icon-img">
                        <Management />
                    </el-icon>
                    <span class="item-name">产品自定义</span>
                    <span class="item-desc">我们提供个性化定制服务，让您可以根据个人喜好和需求定制专属于您的皮具产品。
                        首先，您可以选择您喜欢的皮革材质，我们提供多种颜色和质地的高品质皮革供您选择，从经典的牛皮到奢华的鳄鱼皮，满足您对材质的各种需求。
                        其次，您可以根据自己的尺寸和喜好定制产品的尺寸和结构。无论是手提包、钱包还是皮带，我们都可以根据您的要求进行个性化定制，确保产品符合您的实际使用需求。
                        此外，我们还提供个性化的装饰和定制选项，例如刻印姓名、添加特殊图案或者选择独特的金属配件等，让您的皮具产品更加与众不同，彰显个性化风格。
                        最后，我们的设计团队将与您密切合作，倾听您的想法和建议，确保最终的定制产品能够完美呈现您所期望的效果。我们致力于为每一位客户提供独一无二的定制体验，让您拥有与众不同的个性化皮具产品。</span>
                </div>
                <div class="list-item">
                    <el-icon class="icon-img">
                        <Platform />
                    </el-icon>
                    <span class="item-name">货源充足</span>
                    <span class="item-desc">我们为您提供货源充足的保证，确保您能够及时获得所需的产品。
                        首先，我们与多家优质的皮具材料供应商建立了长期的合作关系。这些供应商拥有稳定的生产能力和高品质的皮革材料，能够满足我们的大量采购需求。无论是常见的牛皮、羊皮还是更为特殊的鳄鱼皮、蛇皮，我们都能够从可靠的渠道获得，并确保其质量符合标准。
                        其次，我们拥有完善的生产管理系统和高效的生产流程。我们优化了供应链管理，确保原材料的及时供应和库存控制，以避免出现缺货的情况。同时，我们注重生产计划和调度，合理安排生产资源，以满足客户订单的需求。
                        此外，我们的团队具备较强的生产能力和灵活性。我们拥有一支经验丰富的工人队伍和先进的设备，能够高效地组织生产，确保产品的质量和交货时间。无论订单规模大小，我们都有能力应对，并且可以根据客户需求进行批量生产。
                        最后，我们与物流合作伙伴有着紧密的合作关系。他们在全国范围内拥有广泛的物流网络和高效的配送能力，能够及时将产品送达客户手中。我们的货物追踪系统可以实时监控物流情况，确保您能够及时了解到货物的运输进展。
                        综上所述，我们拥有稳定的供应渠道、高效的生产管理和强大的物流配送能力，为您提供货源充足的保证。无论您的需求有多大，我们都能够满足并及时交付优质的产品。</span>
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
.why-choose-us {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 150px;

    .choose-use-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            color: #c90707;
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 40px;
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
                cursor: pointer;
                color: #333;
                padding: 0 30px;
                box-sizing: border-box;
                flex: 1;

                .icon-img {
                    font-size: 50px;
                    margin-bottom: 20px;
                }

                .item-name {
                    font-weight: bold;
                    font-size: 22px;
                    margin-bottom: 20px;
                }

                .item-desc {
                    font-size: 15px;
                    display: flex;
                    max-width: 500px;
                    line-height: 25px;
                }
            }
        }
    }
}
</style>
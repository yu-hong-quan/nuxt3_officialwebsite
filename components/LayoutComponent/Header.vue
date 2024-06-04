<template>
    <header class="header-nav-box">
        <el-row :gutter="24" class="header-container">
            <el-col :span="17" class="nav-left-box">
                <div class="box-contaner">
                    <img src="~/assets/img/logo2.png" alt="logo" class="logo-img">
                    <client-only>
                        <!-- <el-menu :default-active="activeIndex" text-color="#606266" active-text-color="#e80202"
                            mode="horizontal" :ellipsis="false" @select="handleSelect" :show-timeout="0" :hide-timeout="200"
                            class="nav-menu hidden-sm-and-down">
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-sub-menu index="2">
                                <template #title>中文路课程</template>
                                <el-menu-item index="2-1">儿童普通话课程(港澳)</el-menu-item>
                                <el-menu-item index="2-2">GAPSK考试培训课程(港澳)</el-menu-item>
                                <el-menu-item index="2-3">普教中课程(港澳)</el-menu-item>
                                <el-menu-item index="2-4">商务汉语/普通话课程</el-menu-item>
                                <el-menu-item index="2-5">儿童基础中文课程</el-menu-item>
                                <el-menu-item index="2-6">HSK标准课程</el-menu-item>
                                <el-menu-item index="2-7">HSKK训练课</el-menu-item>
                                <el-menu-item index="2-8">新概念课程</el-menu-item>
                            </el-sub-menu>
                            <el-menu-item index="3">中文路教师</el-menu-item>
                            <el-menu-item index="4">关于中文路</el-menu-item>
                            <el-menu-item index="5">AI测试工具</el-menu-item>
                            <el-sub-menu index="6">
                                <template #title>APP下载</template>
                                <el-menu-item index="6-1">儿童端</el-menu-item>
                                <el-menu-item index="6-2">成人端</el-menu-item>
                            </el-sub-menu>
                        </el-menu> -->
                        <el-menu :default-active="activeIndex" text-color="#606266" active-text-color="#e80202"
                            mode="horizontal" :ellipsis="false" @select="handleSelect" :show-timeout="0" :hide-timeout="200"
                            class="nav-menu hidden-sm-and-down">
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-menu-item index="2">案例</el-menu-item>
                            <el-menu-item index="3">服务</el-menu-item>
                            <el-menu-item index="4">关于我们</el-menu-item>
                            <el-menu-item index="5">联系我们</el-menu-item>
                        </el-menu>
                    </client-only>
                </div>
            </el-col>
            <el-col :span="7" class="nav-right-box">
                <div class="box-contaner hidden-sm-and-down">
                    <el-menu :default-active="languageIndex" text-color="#606266" active-text-color="none" mode="horizontal"
                        :ellipsis="false" @select="handleLanguageSelect" :show-timeout="0" :hide-timeout="200">
                        <el-sub-menu index="1">
                            <template #title>
                                <img src="~/assets/img/icon_switch_language.png" alt="language-icon" srcset=""
                                    class="language-icon">
                                <span class="language_val">{{ languageText }}</span>
                            </template>
                            <el-menu-item index="1-1">简体中文</el-menu-item>
                            <el-menu-item index="1-2">繁体中文</el-menu-item>
                            <el-menu-item index="1-3">English</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                    <!-- <span class="faq-text">FAQ</span>
                    <el-button round class="login-btn" @click="goLogin()">登录</el-button> -->
                </div>
                <img src="~/assets/img/menu-icon.png" alt="menu-icon" class="menu-icon">
            </el-col>
        </el-row>
    </header>
</template>
<script lang="ts" setup>
import 'element-plus/theme-chalk/display.css';
let activeIndex = ref('1');
let languageIndex = ref('1');
let languageText = ref('简体中文');

const handleSelect = (key: String, keyPath: Array<String>) => {
    switch (key) {
        case '1':
            navigateTo('/');
            break;
        case '2':
            navigateTo('/case');
            break;
        case '3':
            navigateTo('/service');
            break;
        case '3':
            navigateTo('/service');
            break;
        case '4':
            navigateTo('/aboutUs');
            break;
        case '5':
            navigateTo('/contactUs');
            break;
        default:
            break;
    }
}

const handleLanguageSelect = (key: String, keyPath: Array<String>) => {
    switch (key) {
        case '1-1':
            languageText.value = '简体中文';
            break;
        case '1-2':
            languageText.value = '繁体中文';
            break;
        case '1-3':
            languageText.value = 'English';
            break;
        default:
            break;
    }
}

const goLogin = () => {
    navigateTo('/aboutUs');
}



</script>
<style lang="less" scoped>
.header-nav-box {
    width: 100%;
    height: 90px;
    position: sticky;
    top: 0;
    padding: 5px 10px;
    box-sizing: border-box;
    z-index: 1000;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    overflow-x: hidden;

    .header-container {
        width: 100%;
        height: 100%;
        max-width: 1240px;
        margin: 0 auto;
        display: flex;
        align-items: center;

        .nav-left-box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 0 !important;
            padding-right: 50px;

            .box-contaner {
                display: flex;
                align-items: center;

                .logo-img {
                    width: 125px;
                    height: 55px;
                    cursor: pointer;
                    margin-right: 50px;
                }

                .el-menu-item,
                .el-sub-menu {
                    width: auto;
                    height: 65px;
                    font-size: 16px;
                    box-sizing: border-box;
                }

                :deep(.el-sub-menu__title) {
                    font-size: 16px;
                    // color: rgb(144, 147, 153);
                }

                :deep(.el-menu.el-menu--horizontal) {
                    border: none;
                    align-items: center;
                }

                :deep(.el-menu--horizontal>.el-menu-item.is-active) {
                    font-weight: bold;
                }

                .el-menu-item:hover {
                    background-color: rgb(255, 236, 236);
                    color: #e80202;
                }

                :deep(.el-sub-menu:hover) {
                    background-color: rgb(255, 236, 236);
                    color: #e80202;
                }

                :deep(.el-sub-menu__title:hover) {
                    background-color: rgb(255, 236, 236);
                    color: #e80202;
                }

                :deep(.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title) {
                    color: #e80202 !important;
                }
            }


        }

        .nav-right-box {
            width: 100%;
            height: 100%;
            padding: 0 !important;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .box-contaner {
                display: flex;
                align-items: center;

                .language-icon {
                    width: 25px;
                    height: 25px;
                    margin-right: 10px;
                }

                .language_val {
                    color: #606266 !important;
                }

                :deep(.el-menu.el-menu--horizontal) {
                    border: none;
                    align-items: center;
                }

                .el-menu-item,
                .el-sub-menu {
                    width: auto;
                    height: 65px;
                    font-size: 16px !important;
                    box-sizing: border-box;
                }

                .faq-text {
                    font-size: 15px;
                    color: #333;
                    cursor: pointer;
                    margin: 0 5px;
                    font-weight: bold;
                }

                .login-btn {
                    width: 80px;
                    height: 36px;
                    background: #e80202;
                    font-size: 15px;
                    font-family: Microsoft YaHei-Bold, Microsoft YaHei;
                    font-weight: bold;
                    color: #fff;
                    line-height: 36px;
                    border-radius: 10px;
                    text-align: center;
                    cursor: pointer;
                    margin-left: 30px;
                    border: none;
                    box-sizing: border-box;
                }
            }

            .menu-icon {
                width: 30px;
                height: 30px;
                visibility: hidden;
                cursor: pointer;
            }
        }
    }

}

.el-popper {
    .el-menu--horizontal {
        .el-menu-item:hover {
            background-color: rgb(255, 236, 236);
            color: #e80202;
        }
    }
}

:deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title) {
    border: none;
}
</style>
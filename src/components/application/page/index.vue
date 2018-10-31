<template>
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="应用图标" name="icon"><TabIcon /></el-tab-pane>
    <el-tab-pane label="通用设置" name="second"><TabGeneral /></el-tab-pane>
    <el-tab-pane label="主界面" name="third"><TabHome /></el-tab-pane>
    <el-tab-pane label="设置界面" name="123"><TabSetting /></el-tab-pane>
    <el-tab-pane label="关于界面" name="fou123rth"><TabAbout /></el-tab-pane>
    <el-tab-pane label="帮助界面" name="fourth"><TabHelp /></el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.el-tabs{
    min-height:480px;
}
</style>
<script>
import TabIcon from './components/icon';
import TabGeneral from './components/general';
import TabHome from './components/home';
import TabSetting from './components/setting';
import TabAbout from './components/about';
import TabHelp from './components/help';
export default {
    components:{
        TabIcon,
        TabGeneral,
        TabHome,
        TabSetting,
        TabAbout,
        TabHelp
    },
    data(){
        return {
            activeName:'icon'
        }
    }
}
</script>



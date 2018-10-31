<template>
  <el-tabs type="border-card">
    <el-tab-pane label="基础信息"><Basic /></el-tab-pane>
    <el-tab-pane lazy label="功能定义"><Define /></el-tab-pane>
    <el-tab-pane lazy label="固件升级"><Update /></el-tab-pane>
    <el-tab-pane lazy label="语音接入"><Voice /></el-tab-pane>
    <el-tab-pane lazy label="产品帮助"><Help /></el-tab-pane>
    <el-tab-pane lazy label="量产接入"><Support /></el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.el-tabs{
    min-height:480px;
}
</style>
<script>
import Basic from './components/basic';
import Define from './components/define';
import Update from './components/update';
import Voice from './components/voice';
import Help from './components/help';
import Support from './components/support';
export default {
    components:{
        Basic,
        Define,
        Update,
        Voice,
        Help,
        Support,
    }
}
</script>


<template>
    <el-tabs type="border-card">
        <el-tab-pane label="iOS 证书"><IOS /></el-tab-pane>
        <el-tab-pane label="Android 证书"><ANDROID /></el-tab-pane>
    </el-tabs>
</template>
<style scoped>
.el-tabs{
    min-height:480px;
}
</style>
<script>
import IOS from './components/ios';
import ANDROID from './components/android';
export default {
    components:{
        IOS,
        ANDROID,
    }
}
</script>


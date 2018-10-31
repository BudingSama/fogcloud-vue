<template>
    <el-form>
        <el-form-item label="数字证书下载">
            <el-button type="primary" icon="el-icon-download" circle plain></el-button>
        </el-form-item>
        <span class="upload-mob">数字证书已由 FogCloud 后台自动生成</span>
    </el-form>
</template>
<style scoped>
.el-form{
    padding: 20px 40px;
}
.el-form-item{
    text-align: left;
}
.el-button{
    margin-left: 20px;
}
.upload-mob{
    float: left;
    font-size: 12px;
}
</style>
<script>
export default {
    
}
</script>


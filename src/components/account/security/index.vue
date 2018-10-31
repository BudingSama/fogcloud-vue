<template>
    <el-form label-position="right" label-width="80px" :model="formLabelAlign">
            <el-form-item label="原始密码">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="重新输入">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">保存变更</el-button>
            </el-form-item>
        </el-form>
</template>
<style scoped>
    .el-form{
        max-width: 500px;
        margin: 0 auto;
    }
    .el-button{
        width:100%;
    }
</style>
<script>
export default {
    data(){
        return {
            formLabelAlign:{
                name:'',
                region:'',
                type:''
            }
        }
    }
}
</script>



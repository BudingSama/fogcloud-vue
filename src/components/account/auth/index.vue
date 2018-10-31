<template>
        <el-form label-position="right" label-width="120px" :model="formLabelAlign">
            <el-form-item label="当前状态">
                <el-tag type="danger">未通过审核</el-tag>
            </el-form-item>
            <el-form-item label="企业全称">
                <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="工商执照注册号">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="法人代表">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="企业注册地址">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="办公电话">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="官网地址">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="组织机构代码">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="工商执照">
                <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="税务登记证">
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
.el-tag{
    float: left;
}
.el-button{
    width: 100%;
}
</style>
<script>
export default {
    data(){
        return {
            formLabelAlign:{
                region:'',
                type:''
            }
        }
    }
}
</script>



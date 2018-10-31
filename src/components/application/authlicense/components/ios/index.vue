<template>
    <el-form :model="ruleForm" ref="ruleForm" label-position="right" label-width="100px">
        <el-form-item label="开发者证书">
            <el-upload
                class="el-upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                limit:1
                :on-exceed="onExceed"
                >
                <el-button class="upload-button" size="small" type="primary" plain>点击上传</el-button>
                <span class="upload-mob">(.mobileprovision)证书</span>
            </el-upload>
        </el-form-item>
        <el-form-item label="证书密码">
            <el-input type="password" v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="推送证书">
            <el-upload
                class="el-upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                limit:1
                :on-exceed="onExceed"
                >
                <el-button class="upload-button" size="small" type="primary" plain>点击上传</el-button>
                <span class="upload-mob">APNs(.p12)证书</span>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button style="margin-left:20px;margin-top:20px;" type="primary" icon="el-icon-check" circle></el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped>
.el-form-item{
    text-align: left;
}
.upload-mob{
    font-size: 12px;
    margin-left: 10px;
}
.el-upload{
    margin-left: 20px;
}
.el-input{
    width: 400px;
    margin-left: 20px;
}
.el-form{
    padding: 20px 40px;   
}
</style>
<script>
export default {
    data(){
        return {
            ruleForm:{
                title:''
            }
        }
    },
    methods:{
        onExceed:function(files, fileList){
            console.log(files)
        }
    }
}
</script>
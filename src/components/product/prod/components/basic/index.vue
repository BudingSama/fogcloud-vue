<template>
    <el-form :model="ruleForm" label-width="80px">
        <el-form-item label="产品图">
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </el-form-item>
        <el-form-item label="产品ID">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="产品名称">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="产品型号">
            <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="产品描述">
            <el-input style="width:400px" type="textarea" v-model="ruleForm.title" autosize :autosize="{ minRows: 4, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item label="产品品类">
            <el-tag size="small">生活电器</el-tag>
            <el-tag size="small" style="margin-left:15px" type="info">球泡灯</el-tag>
        </el-form-item>
        <el-form-item label="二维码">
            <div style="width:200px;height:200px;background:grey"></div>
        </el-form-item>
        <el-form-item style="margin-top:30px">
            <el-button type="primary" icon="el-icon-check" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-form-item>
    </el-form>
</template>
<style scoped>
.el-form{
    text-align: left;
    padding: 20px 40px;
}
.el-input{
    width: 400px;
}
</style>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.avatar {
    width: 100px;
    height: 100px;
    display: block;
}
</style>

<script>
export default {
    data(){
        return {
            imageUrl:false,
            ruleForm:{
                title:''
            }
        }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>


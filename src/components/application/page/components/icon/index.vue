<template>
    <el-form label-position="top" label-width="80px" :model="formLabelAlign">
    <el-form-item label="应用图标">
        <p style="font-size:12px;margin-bottom:20px">此图标将作为主图标展示在应用下载列表，用户手机程序列表等界面。请上传1024*1024尺寸分辨率的JPG/JPEG格式照片。</p>
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
    <el-form-item label="登录/注册界面logo">
        <p style="font-size:12px;margin-bottom:20px">此图标将展示在登录、注册、找回密码等界⾯头部的 logo 展示区域。请上传 500x300 尺⼨分辨率的 PNG 格式图⽚（建议背景透明）</p>
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
<el-button type="primary" icon="el-icon-check" circle></el-button>
    </el-form>
</template>
<style>
.el-form{
    text-align: left;
    padding: 20px 40px;
}
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
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            imageUrl:false
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


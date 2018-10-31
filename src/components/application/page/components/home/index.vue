<template>
    <el-form label-position="top" label-width="80px" :model="formLabelAlign">
        <el-switch
            style="float: right;"
            @change="changeFn"
            v-model="language"
            active-text="English"
            inactive-text="简体中文">
        </el-switch>
        <el-form-item :label="config.title.titlebar[type]">
            <el-switch
                class="show-button"
            ></el-switch>
            <el-input style="width:400px" v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item :label="config.weather.titlebar[type]">
            <el-switch
                class="show-button"
            ></el-switch>
        </el-form-item>
        <el-form-item :label="config.button.titlebar[type]">
            <p>{{config.button.discription[type]}}</p>
            <el-input style="width:400px;margin-bottom:20px" v-model="formLabelAlign.buttontitle"></el-input>
            <p>{{config.button.unselectedupload.title[type]}}</p>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>{{config.button.selectedupload.title[type]}}</p>
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
<style scoped>
.show-button{
    display: block;
    margin-bottom:20px;
}
p{
    font-size:12px;
    margin-bottom:20px;
}
</style>
<script>
import config from './config';
export default {
    data(){
        return {
            formLabelAlign: {
                title: config.title.input.placeholder['cn'],
                region: '',
                type: '',
                buttontitle:config.button.input.placeholder['cn'],
            },
            language:false,
            imageUrl:false,
            config,
            type:'cn',
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
      },
      changeFn:function(e){
        this.type = e ? 'en' : 'cn';
        this.formLabelAlign.title = this.config.title.input.placeholder[this.type];
        this.formLabelAlign.buttontitle = this.config.button.input.placeholder[this.type];
      }
    }
}
</script>



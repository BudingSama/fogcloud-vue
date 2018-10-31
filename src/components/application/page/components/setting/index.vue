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
            <el-input style="width:400px;margin-bottom:20px" v-model="formLabelAlign.title" class="input-with-select">
                <el-select style="width:100px" v-model="selectStyle" slot="prepend" placeholder="请选择">
                    <el-option label="iOS 12" value="1"></el-option>
                    <el-option label="iOS 11" value="2"></el-option>
                    <el-option label="iOS 10" value="3"></el-option>
                    <el-option label="iOS 9" value="4"></el-option>
                    <el-option label="iOS 8" value="5"></el-option>
                    <el-option label="iOS 7" value="6"></el-option>
                </el-select>
            </el-input>
            <div>
                <span style="font-size:12px;">{{config.title.display[type]}}</span>
                <el-switch
                    style="margin-left:10px">
                </el-switch>
            </div>
        </el-form-item>
        <el-form-item :label="config.button.titlebar[type]">
            <el-input style="width:400px;margin-bottom:20px" v-model="formLabelAlign.buttontitle"></el-input>
            <p>{{config.button.unselect[type]}}</p>
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <p>{{config.button.select[type]}}</p>
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
                title:config.title.placeholder['cn'],
                buttontitle:config.title.placeholder['cn'],
            },
            selectStyle:'1',
            language:false,
            type:'cn',
            imageUrl:false,
            config
        }
    },
    methods:{
        changeFn:function(e){
            this.type = e ? 'en' : 'cn';
            this.formLabelAlign.title = this.config.title.placeholder[this.type];
            this.formLabelAlign.buttontitle = this.config.title.placeholder[this.type];
        },
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
    },
}
</script>


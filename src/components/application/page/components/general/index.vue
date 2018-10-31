<template>
    <el-form label-position="top" label-width="80px" :model="formLabelAlign">
        <el-switch
            @change="changeFn"
            v-model="language"
            active-text="English"
            inactive-text="简体中文">
        </el-switch>
        <el-form-item :label="config.title.titlebar[type]">
            <p>{{config.title.des[type]}}</p>
            <el-color-picker
                v-model="color"
                :predefine="predefineColors">
            </el-color-picker>
        </el-form-item>
        <el-form-item :label="config.NetWork.titlebar[type]">
            <p>{{config.NetWork.placeholder.title[type]}}</p>
            <el-input style="width:400px;margin-bottom:20px" v-model="formLabelAlign.button"></el-input>
        </el-form-item>
        <el-button type="primary" icon="el-icon-check" circle></el-button>
        </el-form>
</template>
<style scoped>
.el-switch{
    float: right;
}
p{
    font-size:12px;
    margin-bottom:20px;
}
.el-form{
    text-align: left;
    margin: 0 auto;
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
import config from './config';
export default {
    data(){
        return {
            language:false,
            formLabelAlign: {
                button:config.NetWork.placeholder.content['cn']
            },
            color: '#1e90ff',
            predefineColors: [
            '#ff4500',
            '#ff8c00',
            '#ffd700',
            '#90ee90',
            '#00ced1',
            '#1e90ff',
            '#c71585',
            ],
            config,
            type:'cn',
        }
    },
    methods:{
        changeFn:function(e){
            this.type = e ? 'en' : 'cn';
            this.formLabelAlign.button = this.config.NetWork.placeholder.content[this.type];
        }
    }
}
</script>



<template>
    <el-form label-position="top" label-width="80px" :model="formLabelAlign">
        <el-switch
            style="float: right;"
            @change="changeFn"
            v-model="language"
            active-text="English"
            inactive-text="简体中文">
        </el-switch>
        <el-form-item :label="config.company.titlebar[type]">
            <el-input style="width:400px" type="textarea" autosize :autosize="{ minRows: 5, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item :label="config.hotline.titlebar[type]">
            <div>
                <el-switch>
                </el-switch>
            </div>
            <el-input style="margin-top:20px" v-model="formLabelAlign.hotlinetitle">
                <template slot="prepend">{{config.hotline.inputtitle.title[type]}}</template>
            </el-input>
            <br />
            <el-input style="margin-top:20px">
                <template slot="prepend">{{config.hotline.inputtitle.placeholder[type]}}</template>
            </el-input>
        </el-form-item>
        <el-form-item :label="config.website.titlebar[type]">
            <div>
                <el-switch>
                </el-switch>
            </div>
            <el-input style="margin-top:20px" v-model="formLabelAlign.websitetitle">
                <template slot="prepend">{{config.website.inputtitle.title[type]}}</template>
            </el-input>
            <br />
            <el-input style="margin-top:20px" v-model="formLabelAlign.title">
                <template slot="prepend">{{config.website.inputtitle.placeholder[type]}}</template>
            </el-input>
        </el-form-item>
        <el-form-item :label="config.feedback.titlebar[type]">
            <div>
                <el-switch>
                </el-switch>
            </div>
            <el-input style="margin-top:20px" v-model="formLabelAlign.mailtitle">
                <template slot="prepend">{{config.feedback.inputtitle.title[type]}}</template>
            </el-input>
            <br />
            <el-input style="margin-top:20px" v-model="formLabelAlign.title">
                <template slot="prepend">{{config.feedback.inputphone.title[type]}}</template>
            </el-input>
        </el-form-item>
        <el-button type="primary" icon="el-icon-check" circle></el-button>
    </el-form>
</template>
<style scoped>
.el-input{
    width:400px;
    margin-bottom:20px;
}
</style>

<script>
import config from './config';
export default {
    data(){
        return {
            language:false,
            formLabelAlign:{
                hotlinetitle:config.hotline.inputtitle.placeholder['cn'],
                websitetitle:config.website.inputtitle.placeholder['cn'],
                mailtitle:config.feedback.inputtitle.placeholder['cn'],
            },
            type:'cn',
            config
        }
    },
    methods:{
        changeFn:function(e){
            this.type = e ? 'en' : 'cn';
            this.formLabelAlign.hotlinetitle = this.config.hotline.inputtitle.placeholder[this.type],
            this.formLabelAlign.websitetitle = this.config.website.inputtitle.placeholder[this.type],
            this.formLabelAlign.mailtitle = this.config.website.inputtitle.placeholder[this.type]
        }
    }
}
</script>


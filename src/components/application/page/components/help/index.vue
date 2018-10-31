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
            <el-input v-model="formLabelAlign.content" style="width:400px" type="textarea" autosize :autosize="{ minRows: 12, maxRows: 15}"></el-input>
        </el-form-item>
        <el-button type="primary" icon="el-icon-check" circle></el-button>
    </el-form>
</template>
<style>

</style>
<script>
import config from './config';
export default {
    data(){
        return {
            formLabelAlign:{
                content:config.title.value['cn']
            },
            language:false,
            type:'cn',
            config,
        }
    },
    methods:{
        changeFn:function(e){
            this.type = e ? 'en' : 'cn';
            this.formLabelAlign.content = this.config.title.value[this.type]
        }
    }
}
</script>



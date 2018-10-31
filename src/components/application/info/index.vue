<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="80px">
  <el-form-item label="应用ID">
    <el-input readonly v-model="ruleForm.appid"></el-input>
    <span @click="copyFn" class="copy-appid" :data-id="ruleForm.appid">拷贝</span>
  </el-form-item>
  <el-form-item label="应用名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="英文名称" prop="ename">
    <el-input v-model="ruleForm.ename"></el-input>
  </el-form-item>
  <el-form-item label="应用包名" prop="pname">
    <el-input v-model="ruleForm.pname"></el-input>
    <span class="example-span">例如：com.mxchip.app</span>
  </el-form-item>
  <el-form-item label="应用描述" prop="info">
    <el-input @change="checkFn" type="textarea" v-model="ruleForm.info" autosize :autosize="{ minRows: 3, maxRows: 10}"></el-input>
    <span class="check-num">{{pnum}}/200</span>
  </el-form-item>
  <el-form-item label="语言支持">
    <el-select
        v-model="ruleForm.language"
        multiple
        @remove-tag="sakai"
        placeholder="请选择">
        <el-option
        :disabled="item.chinese=='简体中文'"
        v-for="item in lanData"
        :key="item.english"
        :label="item.chinese"
        :value="item.chinese">
        </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="">
    <el-button style="width:100%" @click="submitForm('ruleForm')" type="primary">保存变更</el-button>
  </el-form-item>
</el-form>
</template>
<style scoped>
.el-form{
    max-width: 500px;
    margin: 0 auto;
}
.el-select{
    width: 100%;
}
.copy-appid{
    position: absolute;
    right: -40px;
    font-size: 12px;
    cursor: pointer;
    color: #409EFF;
}
.example-span{
    float: left;
}
.check-num{
    position:absolute;
    right: -50px;
    font-size: 12px;
}
</style>
<script>
import { req } from './../../../utils/request';
import { mapState } from 'vuex';
export default {
    data(){
        return {
            ruleForm: {
                appid:'',
                name: '',
                ename: '',
                pname:'',
                info:'',
                language:['简体中文'],
            },
            rules:{
                name: [
                    { required: true, message: '请输入应用名称', trigger: 'blur' },
                    { min: 4, max: 30, message: '长度在 4 到 30 个字符', trigger: 'blur' }
                ],
                ename:[
                    { required: true, message: '请输入英文名称', trigger: 'blur' },
                    { min: 4, max: 30, message: '长度在 4 到 30 个字符', trigger: 'blur' }
                ],
                pname:[
                    { required: true, message: '请输入应用包名', trigger: 'blur' },
                ],
                info:[
                    { required: true, message: '请输入应用描述', trigger: 'blur' },
                    { min: 3, max: 200, message: '长度在 3 到 200 个字符', trigger: 'blur' }
                ],
            },
            lanList:[],
            pnum:0,
        }
    },
    created(){
        this.$store.dispatch('setLanAct');
    },
    computed:{
        ...mapState({
            lanData:state=>state.app.lanList,
            appData:state=>state.app.appData.results
        }),
    },
    watch:{
        lanData:function(){
            if(this.appData){
                for(let i = 0; i < this.appData.length; i++){
                    if(this.appData[i].app_id == location.hash.split('?appId=')[1]){
                        let lan = this.appData[i].language;
                        lan = lan.map(ele=>{
                            return ele.chinese;
                        })
                        if(!lan.length){
                            lan = this.ruleForm.language;
                        }
                        const obj = {
                            appid:this.appData[i].app_id,
                            name:this.appData[i].app_name,
                            ename:this.appData[i].e_name,
                            pname:this.appData[i].package_name,
                            info:this.appData[i].description,   
                            language:lan,
                        }
                         this.pnum = this.appData[i].description.length;
                         this.ruleForm = obj;
                         break;
                    }
                }
            }
        },
    },
    methods:{
        sakai:function(e){
            if(e=='简体中文'){
                this.ruleForm.language.unshift('简体中文');
                this.$message({
                message: '语言支持必须包含简体中文',
                type: 'warning'
                });
            }
        },
        submitForm:function(formName){
            const _this = this;
            this.$refs[formName].validate((valid) => {
                const lanList = [];
                _this.lanData.map(ele=>{
                    if(_this.ruleForm.language.indexOf(ele.chinese)>-1){
                        lanList.push(ele.id);
                    }
                })
                if(valid){
                    req({
                    url: '/app/app_info/',
                    method: 'put',
                    param: {
                        app_id: _this.ruleForm.appid,
                        app_name: _this.ruleForm.name,
                        e_name: _this.ruleForm.ename,
                        package_name: _this.ruleForm.pname,
                        description: _this.ruleForm.info,
                        language: lanList,
                    },
                    }).then((res) => {
                    if (res.data.meta.code === 0) {
                        this.$store.dispatch('userInfoAct');
                        this.$message({
                        message: '保存成功',
                        type: 'success'
                        });
                        this.$refs['ruleForm'].clearValidate();
                    }
                    });
                }else{
                    return false;
                }
            })
        },
        copyFn:function(obj){
            const inp = obj.target.previousSibling.children[0];
            inp.select();
            try {
            document.execCommand('copy');
            inp.blur();
            } catch (err) {
            alert('please press Ctrl/Cmd+C to copy');
            }
            this.$message({
            message: '已复制到剪贴板',
            type: 'success'
            });
        },
        checkFn:function(e){
            this.pnum = e.length;
        }
    }
}
</script>



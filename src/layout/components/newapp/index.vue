<template>
    <el-dialog style="text-align:left" title="创建应用" :visible.sync="$store.state.app.newAppBol">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="right" label-width="80px">
        <el-form-item placeholder="在此输入应用名称" label="应用名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="英文名称" prop="ename">
            <el-input v-model="ruleForm.ename"></el-input>
        </el-form-item>
        <el-form-item label="应用包名" prop="pname">
            <el-input v-model="ruleForm.pname"></el-input>
        </el-form-item>
        <el-form-item label="应用描述" prop="info">
            <el-input type="textarea" v-model="ruleForm.info" autosize :autosize="{ minRows: 3, maxRows: 10}"></el-input>
        </el-form-item>
        <el-form-item label="语言选择">
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
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancelFn">取消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        </div>
    </el-dialog>
</template>
<style scoped>
.el-form{
    max-width: 400px;
    margin: 0 auto;
}
.el-select{
    width: 100%;
}
</style>
<script>
import { mapState } from 'vuex';
import { req } from './../../../utils/request';
export default {
    data(){
        return {
            ruleForm: {
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
        }
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
                const lanList = this.ruleForm.language;
                _this.lanData.map(ele=>{
                    if(_this.ruleForm.language.indexOf(ele.chinese)>-1){
                        lanList.push(ele.id);
                    }
                })
                if(valid){
                    req({
                    url: '/app/app_info/',
                    method: 'POST',
                    param: {
                        app_name: _this.ruleForm.name,
                        e_name: _this.ruleForm.ename,
                        package_name: _this.ruleForm.pname,
                        description:_this.ruleForm.info,
                        identifier: 'test',
                        interface: 1,
                        extend: {},
                        language:lanList
                    },
                    }).then((res) => {
                    if (res&&res.data.meta.code === 0) {
                        this.$refs['ruleForm'].resetFields();
                        this.$store.dispatch('setNewAppAct',false);
                        this.$store.dispatch('userInfoAct');
                        this.$store.dispatch('setAppIdAct',res.data.data.app_id);
                        this.$router.push({path:'/'});
                    }
                    });
                }else{
                    return false;
                }
            })
        },
        cancelFn:function(){
            this.$store.dispatch('setNewAppAct',false);
            this.$refs['ruleForm'].resetFields();
        }
    },
    computed:{
        ...mapState({
            lanData:state=>state.app.lanList
        }),
    }
}
</script>



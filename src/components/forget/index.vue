<template>
<div class="signWrap">
    <el-card class="box-card box-card-f">
        <span class="title">单品云</span>
        <el-form label-position="right" status-icon :model="forgetForm" :rules="forgetRules" ref="forgetForm" label-width="0">
            <el-form-item prop='psd'>
                <el-input type="password" prefix-icon="el-icon-view" placeholder="设置新的密码" v-model="forgetForm.psd"></el-input>
            </el-form-item>
            <el-form-item prop='checkpsd'>
                <el-input type="password" prefix-icon="el-icon-view" placeholder="确认新的密码" v-model="forgetForm.checkpsd"></el-input>
            </el-form-item>
            <el-form-item prop='num'>
                <el-input prefix-icon="el-icon-message" placeholder="需要验证的邮箱或手机" v-model="forgetForm.num"></el-input>
            </el-form-item>
            <el-form-item prop='checknum'>
                <el-input class="get-card-input" prefix-icon="el-icon-refresh" placeholder="请输入验证码" v-model="forgetForm.checknum"></el-input>
                <el-button class="get-card" type="primary"  :disabled="isUsed">{{isUsed?`${codeCD} 秒后获取`:'获取验证码'}}</el-button>
            </el-form-item>
             <el-form-item>
                <el-button class="login-btn" type="primary" @click="submitForget('forgetForm')">重置密码</el-button>
            </el-form-item>
        </el-form>
        <div>
            <div class="register" style="float:none">
                <span style="color:#909399">没有账号？<router-link to='register'><a>注册</a></router-link></span>
            </div>
        </div>
    </el-card>
</div>
</template>

<script>
import { req } from '../../utils/request';
export default {
    beforeCreate(){
        if(localStorage.getItem('token')) {
            this.$router.push('/');
        }
    },
    data(){
        const validatePsd = (rule, value, callback) => {
            if(value==''){
                callback(new Error('请设置新密码'))
            }else if(value.length>24||value.length<8){
                callback(new Error('长度在 8 到 24 个字符'));
            }else if(this.forgetForm.checkpsd != '') {
                this.$refs.forgetForm.validateField('checkpsd');
            }
            callback();
        }
        const validateCheckPsd = (rule, value, callback) => {
            if (value == '') {
                callback(new Error('请再次输入密码'));
            }else if (value != this.forgetForm.psd) {
                callback(new Error('两次输入密码不一致'));
            }else{
                callback();
            }
        }
        const validateNum = (rule, value, callback) => {
            const reg = /^(((1[0-9]{1}[0-9]{1}))+\d{8})$/.test(value) || /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value);
            if(value==''){
                this.isUse = false;
                callback(new Error('请输入邮箱或手机号'));
            }else if (!reg) {
                this.isUse = false;
                callback('邮箱或手机号格式有误');
            }else{
                let param;
                console.log(value)
                if (value.indexOf('@') !== -1) {
                    // mail
                    param = {
                        email:value,
                    }
                }else{
                    // phone
                    param = {
                        phone:value,
                    }
                }
                    this.isUse = true;
                    callback();
            }
        }
        const validateCode = (rule, value, callback) => {
            if(value==''){
                callback(new Error('请输入验证码'));
            }else{
                callback();
            }
        }
        return {
            isUsed:false,
            codeCD:60,
            forgetForm:{
                psd:'',
                checkpsd:'',
                num:'',
                checknum:'',
            },
            forgetRules:{
                psd:[
                    { validator: validatePsd, trigger: 'blur' },
                ],
                checkpsd:[
                    { validator: validateCheckPsd, trigger: 'blur'},
                ],
                num:[
                    { validator: validateNum, trigger: 'blur' },
                ],
                checknum:[
                    { validator: validateCode, trigger: 'blur' }
                ],
            }
        }
    },
    methods:{
        getCheckNum:function(){
            //check mail/phone valid
            const _this = this;
            this.$refs.forgetForm.validateField('num');
            if(this.isUse){
                //send message
                _this.getCodeReq();
                const timer = setInterval(function(){
                    _this.codeCD -= 1;
                    if(_this.codeCD == 0){
                        clearInterval(timer);
                        _this.isUsed = false;
                    }
                },1000);
                this.isUsed = true;
                this.$message({
                    message: '验证码发送成功',
                    type: 'success'
                });
            }
        },
        getCodeReq:function(){
            req({
                url: '/account/vercode/',
                method: 'post',
                param: {
                    identification: this.forgetForm.num,
                    type: 0,
                },
                }).then((res) => {
                // if (res.data.meta.code === 0) {
                // }
            });
        },
        submitForget:function(formName){
            const _this = this;
            this.$refs[formName].validate((valid) => {
                if(valid){
                    req({
                    url: '/account/password/reset/',
                    method: 'PUT',
                    param: {
                        identification: _this.forgetForm.num,
                        newpassword:_this.forgetForm.psd,
                        vercode:_this.forgetForm.checknum
                    },
                    }).then((res) => {
                    if (res.status === 200 && res.data.meta.code === 0) {
                        this.$message({
                            message: '重置密码成功',
                            type: 'success'
                        });
                        setTimeout(() => {
                        this.$router.push('signin');
                        }, 1000);
                    }
                    });
                }
            });
        }
    }
}
</script>

<style scoped>
@import '../signin/index.css';
</style>



<template>
<div class="signWrap">
    <el-card class="box-card box-card-r">
        <span class="title">单品云</span>
        <el-form label-position="right" label-width="0" status-icon :model="registerForm" :rules="registerRules" ref="registerForm">
            <el-form-item prop="name">
                <el-input prefix-icon="el-icon-info" placeholder="设置你的用户名" v-model="registerForm.name"></el-input>
            </el-form-item>
            <el-form-item prop="psd">
                <el-input type="password" prefix-icon="el-icon-view" placeholder="设置你的密码" v-model="registerForm.psd"></el-input>
            </el-form-item>
            <el-form-item prop="checkpsd">
                <el-input type="password" prefix-icon="el-icon-view" placeholder="确认你的密码" v-model="registerForm.checkpsd"></el-input>
            </el-form-item>
            <el-form-item prop="num">
                <el-input prefix-icon="el-icon-phone-outline" placeholder="设置你的验证邮箱或手机" v-model="registerForm.num"></el-input>
            </el-form-item>
            <el-form-item prop="checknum">
                <el-input class="get-card-input" prefix-icon="el-icon-refresh" placeholder="请输入验证码" v-model="registerForm.checknum"></el-input>
                <el-button class="get-card" type="primary" :disabled="isUsed">{{isUsed?`${codeCD} 秒后获取`:'获取验证码'}}</el-button>
            </el-form-item>
             <el-form-item>
                <el-button class="login-btn" type="primary" @click="submitRegister('registerForm')">注册</el-button>
            </el-form-item>
        </el-form>
        <div>
            <div class="register relogin">
                <span style="color:#909399">已有账号？<router-link to='signin'><a>由此登录</a></router-link></span>
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
    data() {
    const validateName = (rule, value, callback) => {
        const reg = /^[\u4E00-\u9FA5A-Za-z]/;
        if ( value == '' ) {
          callback(new Error('请输入用户名'));
        }else
        if(!reg.test(value)){
            callback(new Error('只能以字母或中文字符开头'));
        }else
        if(value.length>16||value.length<3){
            callback(new Error('长度在 3 到 16 个字符'));
        }else{
        req({
          url: '/account/registered/check/',
          method: 'post',
          param: {
            username: value,
          },
        }).then((res) => {
            if(!res){
                callback(new Error('用户名已经被占用'));
            }else{
                callback();
            }
        });
        }
      };
    const validatePsd = (rule, value, callback) => {
          if (value == '') {
              callback(new Error('请输入密码'));
          }
          if(value.length>24||value.length<8){
              callback(new Error('长度在 8 到 24 个字符'));
          }
          if (this.registerForm.checkpsd != '') {
              this.$refs.registerForm.validateField('checkpsd');
          }
          callback();
      }
    const validateCheckPsd = (rule, value, callback) => {
          if (value == '') {
            callback(new Error('请再次输入密码'));
          }
          if (value != this.registerForm.psd) {
            callback(new Error('两次输入密码不一致'));
          }
          callback();
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
            req({
            url: '/account/registered/check/',
            method: 'post',
            param,
            }).then((res) => {
            if (!res) {
                callback(new Error('邮箱或手机号已被占用'));
            } else {
                this.isUse = true;
                callback();
            }
            });
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
            registerForm:{
                name:'',
                psd:'',
                checkpsd:'',
                num:'',
                checknum:'',
            },
            registerRules:{
                name:[
                    { validator: validateName, trigger: 'blur' },
                ],
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

            },
        }
    },
    methods: {
        submitRegister:function(formName){
            const _this = this;
            this.$refs[formName].validate((valid) => {
                if(valid){
                    //success
                    req({
                    url: '/account/signup/',
                    method: 'post',
                    param: {
                        username:_this.registerForm.name,
                        password:_this.registerForm.psd,
                        identification:_this.registerForm.num,
                        vercode:_this.registerForm.checknum
                    },
                    }).then(res=>{
                        if(res.data.meta.code==0){
                            req({
                                url: '/account/signin/',
                                method: 'post',
                                param: {
                                    identification: this.registerForm.name,
                                    password:this.registerForm.psd,
                                    rememberme: false,
                                },
                                }).then((res) => {
                                    if(res && res.data.meta.code == 0){
                                        //success
                                        localStorage.setItem('token', res.data.data.token);
                                        this.$store.dispatch('setUserAct', res.data.data.user);
                                        this.$router.push('/dashboard');
                                    }
                            });
                        }
                    })
                }else{
                    //fail
                    return false;
                }
            })
        },
        getCheckNum:function(){
            //check mail/phone valid
            const _this = this;
            this.$refs.registerForm.validateField('num');
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
                    identification: this.registerForm.num,
                    type: 0,
                },
                }).then((res) => {
                // if (res.data.meta.code === 0) {
                // }
            });
        }
    }
}
</script>

<style scoped>
@import  '../signin/index.css';
</style>



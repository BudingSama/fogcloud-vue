<template>
  <div class="signWrap">
        <!-- login -->
    <el-card class="box-card" v-if="showBol=='login'">
        <span class="title">单品云</span>
        <el-form label-position="right" status-icon :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0">
            <el-form-item prop="name">
                <el-input prefix-icon="el-icon-message" placeholder="请输入用户名" v-model="loginForm.name"></el-input>
            </el-form-item>
            <el-form-item prop="psd">
                <el-input type="password" prefix-icon="el-icon-view" placeholder="请输入密码" v-model="loginForm.psd"></el-input>
            </el-form-item>
             <el-form-item>
                <el-button class="login-btn" type="primary" @click="submitLogin('loginForm')">登录</el-button>
            </el-form-item>
        </el-form>
        <div>
            <div class="register">
                <span style="color:#909399">没有账号？<router-link to="register"><a>注册</a></router-link></span>
            </div>
            <div class="forget">
                <span><router-link to='forget'><a>忘记密码</a></router-link></span>
            </div>
        </div>
        </el-card>
  </div>
</template>

<script>
import { req } from '../../utils/request';
  export default {
   data() {
      return {
          showBol:'login',
          loginForm:{
              name:null,
              psd:null,
          },
          loginRules:{
              name:[
                { required: true, message: '请输入用户名', trigger: 'blur' },
              ],
              psd:[
                  { required: true, message: '请输入密码', trigger: 'blur' },
              ],
          },
      };
    },
    created() {
    },
    beforeCreate(){
        if(localStorage.getItem('token')) {
            this.$router.push('/');
        }
    },
    methods: {
        submitLogin:function(formName){
            this.$refs[formName].validate((valid) => {
          if (valid) {
            req({
            url: '/account/signin/',
            method: 'post',
            param: {
                identification: this.loginForm.name,
                password:this.loginForm.psd,
                rememberme: false,
            },
            }).then((res) => {
                if(res && res.data.meta.code == 0){
                    //success
                    localStorage.setItem('token', res.data.data.token);
                    this.$store.dispatch('setUserAct', res.data.data.user);
                    window.location.href = '/';
                }else{
                    //fail
                    // this.$refs['loginForm'].resetFields();
                }
            });
          } else {
            return false;
          }
        });
        },
    }
  }
</script>
<style scoped>
@import  './index.css';
</style>

<template>
    <el-row style="height:100%">
    <el-col :span="12">
        <div class="grid-content bg-purple">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt="">
        </div>
    </el-col>
    <el-col :span="12">
        <div class="grid-content bg-purple-light">
            <h1>欢迎您</h1>
            <p>您还没有创建应用</p>
            <el-button type='primary' icon='el-icon-check' @click="newAppFn">立即创建</el-button>
        </div>
    </el-col>
    </el-row>    
</template>

<script>
export default {
    methods:{
        newAppFn:function(){
            this.$store.dispatch('setNewAppAct',true);
        }
    }
}
</script>


<style scoped>
.el-col{
    display: flex;
    align-items: center;
    height: 100%;
    text-align: center;
}
.grid-content{
    width: 100%;
}
.grid-content h1{
    font-size: 60px;
    width: 100%;
    text-align: center;
}
.grid-content p{
    color: #909399;
    font-size: 16px;
    margin: 20px 0;
}
</style>
<style>
.main-wrap{
    height:100%!important;
}
</style>



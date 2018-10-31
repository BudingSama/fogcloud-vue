<template>
    <el-row style="height:480px">
    <el-col :span="12">
        <div class="grid-content bg-purple">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt="">
        </div>
    </el-col>
    <el-col :span="12">
        <div class="grid-content bg-purple-light">
            <h1>欢迎您</h1>
            <p>您还没有创建产品</p>
            <el-button type='primary' icon='el-icon-check' @click="newProductFn">新建产品</el-button>
        </div>
    </el-col>
    </el-row>  
</template>
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

<script>
export default {
    methods:{
        newProductFn:function(){
        }
    }
}
</script>



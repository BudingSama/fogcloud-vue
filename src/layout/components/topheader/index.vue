<template>
    <el-header class="top-header" height="36px">
        <div style="padding:0 37px">
            <div style="float:left;"><a href="">FogCloud</a></div>
            <ul class="nav-bar">
                <li><a href="">帮助文档</a></li>
                <li><a href="">定制开发</a></li>
                <li><a href="">提交工单</a></li>
                <li><a href="">下载开发者app<i class="el-icon-upload"></i></a></li>
            </ul>
        </div>
    </el-header>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .top-header{
        background: #404040;
        color: #fff;
        font-size: 12px;
        line-height: 36px;
        padding:0 50px;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    .nav-bar{
        float: right;
    }
    .nav-bar li{
        float: left;
        list-style:none;
        padding: 0 10px;
        position: relative;
    }
    .nav-bar li::after{
        content:'';
        height:9px;
        width:1px;
        background: #fff;
        position: absolute;
        right: 0;
        top: 13px;
    }
    .nav-bar li:last-child::after{
        display: none;
    }
    .el-icon-upload{
        margin-left: 5px;
    }
</style>



<template>
    <div class="wrap">
        <el-button type="primary" icon="el-icon-upload2" size="small">新建推送</el-button>
        <el-table
            style="width: 100%">
            <el-table-column
                prop="date"
                label="标题">
            </el-table-column>
            <el-table-column
                prop="name"
                label="推送状态">
            </el-table-column>
            <el-table-column
                prop="address"
                label="最近使用时间">
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>
.el-button{
    float: left;
    margin-bottom: 30px;
}
.wrap{
    min-height: 480px;
}
</style>
<script>
export default {
    
}
</script>



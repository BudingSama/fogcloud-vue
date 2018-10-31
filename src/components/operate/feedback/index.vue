<template>
    <el-table
        :default-sort = "{prop: 'date', order: 'descending'}"
        >
        <el-table-column
        prop="date"
        label="用户名"
        sortable>
        </el-table-column>
        <el-table-column
        prop="name"
        label="所属产品"
        sortable>
        </el-table-column>
        <el-table-column
        prop="address"
        label="状态">
        </el-table-column>
        <el-table-column
        prop="name"
        label="最近更新"
        sortable>
        </el-table-column>
        <el-table-column
        prop="name"
        label="反馈内容"
        sortable>
        </el-table-column>
        <el-table-column
        prop="name"
        label="操作"
        sortable>
        </el-table-column>
    </el-table>
</template>
<style scoped>
.el-table{
    min-height: 480px;
}
</style>
<script>
export default {
    
}
</script>


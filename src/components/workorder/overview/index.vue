<template>
    <el-table>
      <el-table-column
        prop="date"
        label="工单编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="问题描述">
      </el-table-column>
      <el-table-column
        prop="address"
        sortable
        label="状态">
      </el-table-column>
    <el-table-column
        prop="address"
        label="类型">
      </el-table-column>
    <el-table-column
        prop="address"
        label="需要电话支持">
      </el-table-column>
    <el-table-column
        prop="address"
        label="最近更新">
      </el-table-column>
    <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.el-table{
    min-height: 480px;
}
</style>


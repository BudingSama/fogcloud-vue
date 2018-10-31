<template>
    <el-table>
      <el-table-column
        prop="date"
        label="订单号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="订单类型">
      </el-table-column>
      <el-table-column
        prop="address"
        sortable
        label="金额">
      </el-table-column>
    <el-table-column
        prop="address"
        label="状态">
      </el-table-column>
    <el-table-column
        prop="address"
        label="创建时间">
      </el-table-column>
    <el-table-column
        prop="address"
        label="操作">
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



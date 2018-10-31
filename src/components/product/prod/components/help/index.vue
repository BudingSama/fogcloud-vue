<template>
    <div>
        <el-button style="float:left" type="primary" size="small" icon="el-icon-edit">新建产品帮助</el-button>
        <el-table>
        <el-table-column
            prop="date"
            label="名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="状态"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="创建日期"
            sortable
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="操作">
        </el-table-column>
        </el-table>
    </div>
</template>
<style>

</style>
<script>
export default {
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
}
</script>
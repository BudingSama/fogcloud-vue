<template>
    <div>
        <el-button style="float:left" type="primary" size="small" icon="el-icon-upload2">生成新版本</el-button>
        <el-table
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
            >
            <el-table-column
            prop="date"
            label="版本号"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="状态"
            :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
            :filter-method="filterHandler"
            >
            </el-table-column>
            <el-table-column
            prop="address"
            label="创建时间"
            sortable
            :formatter="formatter">
            </el-table-column>
            <el-table-column
            prop="action"
            label="操作">
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>
.el-table{
    min-height: 450px;
}
</style>
<script>
export default {
    methods:{
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

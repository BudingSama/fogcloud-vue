<template>
<div class="wrap">
    <el-button size="small" style="float:left" type="primary" icon="el-icon-upload2">新建固件版本</el-button>
    <el-table>
      <el-table-column
        prop="date"
        label="固件版本"
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
        prop="address"
        sortable
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
    </el-table>
</div>
</template>
<style scoped>
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
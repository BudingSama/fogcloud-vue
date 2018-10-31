<template>
    <div class="wrap">
        <el-input placeholder="请输入内容" size="small" clearable class="input-with-select">
            <el-button type="success" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-table
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="用户名">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属地区">
                    <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="手机号">
                    <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="注册时间">
                    <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="最近使用时间">
                    <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="操作">
                    <span>{{ props.row.address }}</span>
                </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="UUID"
            prop="id">
            </el-table-column>
            <el-table-column
            label="所属产品"
            prop="name">
            </el-table-column>
            <el-table-column
            label="MAC地址"
            prop="desc">
            </el-table-column>
            <el-table-column
            label="注册时间"
            prop="desc">
            </el-table-column>
            <el-table-column
            label="最近使用时间"
            prop="desc">
            </el-table-column>
            <el-table-column
            label="操作"
            prop="desc">
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>
.el-input{
    width: 400px;
    float: left;
    margin-bottom: 15px;
}
.wrap{
    min-height: 480px;
}
</style>
<script>
export default {
    data(){
        return {
        }
    }
    
}
</script>
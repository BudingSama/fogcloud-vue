<template>
    <div>
        <div class="map-wrap">
            <el-radio-group class="radio-group" size="small" v-model="tabPosition">
                <el-radio-button label="top">灯座</el-radio-button>
                <el-radio-button label="right">插座</el-radio-button>
                <el-radio-button label="bottom">球泡灯</el-radio-button>
                <el-radio-button label="left">吸顶灯</el-radio-button>
            </el-radio-group>
            <ChartsMap />
        </div>
        <el-table>
        <el-table-column
            prop="date"
            label="省份">
        </el-table-column>
        <el-table-column
            prop="name"
            sortable
            label="设备数量">
        </el-table-column>
        <el-table-column
            prop="address"
            label="占比">
        </el-table-column>
        </el-table>
         <el-pagination
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>
<style scoped>
#myChart{
    width:100%;
    height: 500px;
}
.map-wrap{
    width: 100%;
    height: 450px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
}
.radio-group{
    position:absolute;
    left: 0;
    z-index: 100;
    margin:20px;
}
.el-pagination{
    float: right;
    margin-top: 30px;
}
</style>
<script>
import ChartsMap from '../overview/components/chartsmap';
export default {
    components:{
        ChartsMap,
    },
    data(){
        return {
            tabPosition:'top'
        }
    }
}
</script>



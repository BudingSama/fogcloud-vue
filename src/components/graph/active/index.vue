<template>
    <div>
        <p class="active-title"><span>1,231</span>&nbsp;平均每日激活</p>
        <div class="select-wrap">
            <el-radio-group size="small" v-model="tabPosition">
                <el-radio-button label="top">灯座</el-radio-button>
                <el-radio-button label="right">插座</el-radio-button>
                <el-radio-button label="bottom">球泡灯</el-radio-button>
                <el-radio-button label="left">吸顶灯</el-radio-button>
            </el-radio-group>
            <el-date-picker
                style="float:right"
                size="small"
                v-model="value7"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
            </el-date-picker>
        </div>
        <div class="line-wrap">
            <LineMap v-if="hasApp" />
        </div>
        <el-table>
        <el-table-column
            prop="date"
            label="日期">
        </el-table-column>
        <el-table-column
            prop="name"
            label="当日激活">
        </el-table-column>
        <el-table-column
            prop="address"
            label="累计激活">
        </el-table-column>
        </el-table>
         <el-pagination
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>
<style scoped>
.active-title{
    text-align: left;
}
.active-title span{
    font-size: 35px;
}
.el-radio-group{
    float:left;
}
.select-wrap{
    margin-top: 40px;
    overflow: hidden;
}
.line-wrap{
    width: 100%;
    position: relative;
    margin-bottom: 30px;
}
.el-pagination{
    margin-top: 30px;
    float: right;
}
</style>
<script>
import LineMap from './components/linemap';
import { mapState } from 'vuex';
export default {
    components:{
        LineMap,
    },
    data () {
      return {
          tabPosition:'top',
          value7: '',
          pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      }
    },
    computed:{
        ...mapState({
            appData:state=>state.app.appData.results,
        }),
        hasApp:function(){
            return this.appData&&this.appData.length > 0 ? true : false;
        }
    }
}
</script>


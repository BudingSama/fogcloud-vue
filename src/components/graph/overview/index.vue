<template>
    <div>
        <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card col-top">
                        <div>
                            <img class="inner-img" src="" alt="">
                            <div class="inner-list">
                                <p>已激活设备数</p>
                                <p class="inner-num">23,402</p>
                                <p>昨日新增 94</p>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card col-top">
                        <div>
                            <img class="inner-img" src="" alt="">
                            <div class="inner-list">
                                <p>注册用户数</p>
                                <p class="inner-num">5,930</p>
                                <p>昨日新增 4</p>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col class="col-top" :span="8">
                <div class="grid-content bg-purple">
                    <el-card class="box-card col-top">
                        <div>
                            <img class="inner-img" src="" alt="">
                            <div class="inner-list">
                                <p>累计产生数据</p>
                                <p class="inner-num">107.2G</p>
                                <p>昨日新增 4.1G</p>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <div style="height:450px" class="box-card custom-card">
                        <div class="map-title">产品分布</div>
                        <div class="inner-map">
                            <ChartsMap v-if="hasApp" />
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <el-row>
                    <el-col style="padding:0" :span="24">
                        <div class="grid-content bg-purple">
                            <div style="height:219px" class="box-card custom-card">
                                <div class="map-title">产品激活趋势</div>
                                <div class="inner-itemmap">
                                    <ChartsBar v-if="hasApp" :ss="dataList.B" chartsId="charts1" />
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col style="padding:0;padding-top:10px" :span="24">
                        <div class="grid-content bg-purple">
                            <div style="height:219px" class="box-card custom-card">
                                <div class="map-title">用户注册趋势</div>
                                <div class="inner-itemmap">
                                    <ChartsBar v-if="hasApp" :ss="dataList.C" chartsId="charts2" />
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
.el-col{
    padding-right: 10px;
    padding-bottom: 10px;
    position: relative;
}
.col-top{
    height: 150px;
}
.inner-img{
    width: 60px;
    height: 60px;
    float: left;
    background: #eeeeee;
    border-radius: 50%;
    margin-top: 20px;
}
.inner-list{
    float: right;
    width: calc(100% - 75px);
    height: 104px;
    color: #909399;
    font-size: 14px;
    text-align: left;
    padding-left: 15px;
}
.inner-num{
    font-size:35px;
    color:rgba(0, 0, 0, 0.65);
    margin:10px 0;
}
.map-title{
    width: calc(100% - 20px);
    background: #fff;
    font-size: 16px;
    text-align: left;
    color: #909399;
    padding: 10px;
}
.inner-map{
    height: 410px;
    overflow: hidden;
}
.custom-card{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
}
.inner-itemmap{
    height: 179px;
    width: 100%;
    overflow: hidden;
    position: relative;
}
</style>
<script>
import ChartsMap from './components/chartsmap';
import ChartsBar from './components/chartsbar';
import { mapState } from 'vuex';
export default {
    components:{
        ChartsMap,
        ChartsBar,
    },
    data(){
        return {
            dataList:{
                A:[],
                B:[120, 200, 150, 80, 70, 110, 130],
                C:[40, 20, 150, 320, 170, 510, 30],
            }
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



<template>
    <div>
        <div class="btn-group">
            <el-button size="small" type="primary" plain>购买云模块</el-button>
            <el-button size="small" type="primary" plain>申请测试协助</el-button>
            <el-button size="small" type="primary" plain>申请量产技术支持</el-button>
        </div>
        <div class="row-wrap">
            <div class="circle-list">
                <div class="no-wrap">
                    <div class="circle-wrapA">
                        <el-progress status="success" :width="130" type="circle" :percentage="100" :show-text="false"></el-progress>
                        <span class="circle-contentA">剩余配额</span>
                        <span style="line-height:150px" class="circle-contentA">10,400</span>
                    </div>
                </div>
                <div style="width:100%;max-width:450px;height:100px;margin:0 auto">
                    <div class="circle-wrap">
                        <el-progress :width="100" type="circle" :percentage="104/150*100" :show-text="false"></el-progress>
                        <span class="circle-content">剩余配额</span>
                        <span style="line-height:120px" class="circle-content">10,400</span>
                    </div>
                    <div class="circle-wrap">
                        <el-progress :width="100" type="circle" status="exception" :percentage="496/1500*100" :show-text="false"></el-progress>
                        <span class="circle-content">已用配额</span>
                        <span style="line-height:120px" class="circle-content">4,960</span>
                    </div>
                    <div class="circle-wrap">
                        <el-progress :width="100" type="circle" :percentage="1305/15000*100" :show-text="false" color="#8e71c7"></el-progress>
                        <span class="circle-content">型号已用配额</span>
                        <span style="line-height:120px" class="circle-content">1,305</span>
                    </div>
                </div>
            </div>
            <div id="myChartA" :style="{width: '350px', height: '350px'}"></div>
        </div>
    </div>
</template>
<style scoped>
 .btn-group{
     text-align: left;
 }
 .no-wrap{
     width: 100%;
     height: 160px;
     padding-top: 40px;
 }
 .myChartA{
     float: left;
 }
 .circle-wrap{
     position:relative;
     width:33%;
     margin: 0 auto;
     float: left;
     max-width: 150px;

 }
 .circle-wrapA{
     position:relative;
     width:150px;
     margin: 0 auto;
     padding: 0 20px;
 }
 .circle-list{
     float: right;
     width:calc(100% - 350px);
 }
 .circle-content{
     position:absolute;
     left:0;
     right:0;
     top:0;
     bottom:0;
     font-size: 13px;
     color: #909399;
     line-height: 80px;
 }
 .circle-contentA{
     position:absolute;
     left:0;
     right:0;
     top:0;
     bottom:0;
     font-size: 13px;
     color: #909399;
     line-height: 100px; 
 }
</style>
<script>
export default {
    mounted() {
        this.drawLine();
    },
    methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('myChartA'))
      myChart.setOption({
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    visualMap: {
        show: false,
        min: 1,
        max: 100000,
        inRange: {
            colorLightness: [0, 5]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:10400, name:'剩余配额'},
                {value:4960, name:'已用配额'},
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    formatter: "{b}\n({d}%)",
                    textStyle: {
                        color: '#909399'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#909399'
                    },
                    smooth: 0.2,
                    length: 7,
                    length2: 7
                }
            },
            itemStyle: {
                normal: {
                    color:'#409EFF',
                    shadowBlur: 50,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
});
    }
  }
}
</script>
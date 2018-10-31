<template>
    <div id="myChartS"></div>
</template>
<style scoped>
#myChartS{
    width: 100%;
    height: 350px;
    margin-top: 30px;
}
</style>
<script>
export default {
    mounted(){
        this.drawLine();
    },
    methods:{
        drawLine:function(){
            let myChart = this.$echarts.init(document.getElementById('myChartS'));
            myChart.setOption({
                title: false,
                tooltip: {
                trigger: 'axis',
                },
                legend: {
                    data:['智能灯串','插座M1','球泡灯','吸顶灯','除湿机']
                },
                grid: {
                right: 30,
                left: 10,
                containLabel: true,
                bottom: 50,
                },
                xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日'],
                nameTextStyle: {
                    fontSize: 10,
                },
                axisLine: {
                    lineStyle: {
                    },
                },
                },
                yAxis: {
                show: true,
                type: 'value',
                boundaryGap: false,
                axisLabel: {
                    formatter: '{value}',
                },
                },
                textStyle: {
                fontSize: 10,
                },
                series: [{
                            name:'智能灯串',
                            type:'line',
                            smooth: true,
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'插座M1',
                            type:'line',
                            smooth: true,
                            data:[40, 23, 654, 234, 290, 32, 122]
                        },
                        {
                            name:'球泡灯',
                            type:'line',
                            smooth: true,
                            data:[3, 145, 201, 2, 190, 330, 43]
                        },
                        {
                            name:'吸顶灯',
                            type:'line',
                            smooth: true,
                            data:[55, 43, 301, 54, 211, 32, 434]
                        },
                        {
                            name:'除湿机',
                            type:'line',
                            smooth: true,
                            data:[54, 21, 54, 433, 123, 2, 54]
                    }],
            })
        }
    }
}
</script>



<template>
    <div class="myChartB" :id="chartsId"></div>
</template>
<style scoped>
.myChartB{
    position: relative;
    /* width:%; */
    height: 249px;
    margin-top: -40px;
}
</style>
<script>
export default {
    props:['ss','chartsId'],
    mounted(){
        if(this.ss&&this.chartsId){
            this.drawLine(this.ss);
        }
    },
    methods:{
        drawLine(dataList){
            let myChartB = this.$echarts.init(document.getElementById(this.chartsId));
            myChartB.setOption({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: dataList,
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color:'#409EFF',
                        }
                    }
                }]
            })
        }
    }
}
</script>

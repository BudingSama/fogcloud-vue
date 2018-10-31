<template>
    <div id="myChart"></div>
</template>
<style scoped>
#myChart{
    width:700px;
    height: 500px;
}
</style>

<script>
const data = [
    {name: '海门', value: 9},
    {name: '鄂尔多斯', value: 12},
    {name: '招远', value: 12},
    {name: '舟山', value: 12},
    {name: '齐齐哈尔', value: 14},
    {name: '盐城', value: 15},
    {name: '赤峰', value: 16},
    {name: '青岛', value: 18},
    {name: '乳山', value: 18},
    {name: '金昌', value: 19},
];
import geoCoordMap from './config';
require('echarts/extension/bmap/bmap');
export default {
    mounted() {
        const _this = this;
        this.$nextTick(function () {
            _this.drawLine();
        })
    },
    methods: {
        convertData(data){
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        },
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      myChart.setOption({
        tooltip : {
            trigger: 'item'
        },
        bmap: {
            center: [121.48,31.22],
            zoom: 5,
            roam: true,
            mapStyle: {
            styleJson: [{
            featureType: 'water',
            elementType: 'all',
            stylers: {
                color: '',
            },
            }, {
            featureType: 'land',
            elementType: 'all',
            stylers: {
                color: '#f3f3f3',
            },
            }, {
            featureType: 'railway',
            elementType: 'all',
            stylers: {
                visibility: 'off',
            },
            }, {
            featureType: 'highway',
            elementType: 'all',
            stylers: {
                color: '#fdfdfd',
            },
            }, {
            featureType: 'highway',
            elementType: 'labels',
            stylers: {
                visibility: 'off',
            },
            }, {
            featureType: 'arterial',
            elementType: 'geometry',
            stylers: {
                color: '#fefefe',
            },
            }, {
            featureType: 'arterial',
            elementType: 'geometry.fill',
            stylers: {
                color: '#fefefe',
            },
            }, {
            featureType: 'poi',
            elementType: 'all',
            stylers: {
                visibility: 'off',
            },
            }, {
            featureType: 'green',
            elementType: 'all',
            stylers: {
                visibility: 'off',
            },
            }, {
            featureType: 'subway',
            elementType: 'all',
            stylers: {
                visibility: 'off',
            },
            }, {
            featureType: 'manmade',
            elementType: 'all',
            stylers: {
                color: '#d1d1d1',
            },
            }, {
            featureType: 'local',
            elementType: 'all',
            stylers: {
                color: '#d1d1d1',
            },
            }, {
            featureType: 'arterial',
            elementType: 'labels',
            stylers: {
                visibility: 'off',
            },
            }, {
            featureType: 'boundary',
            elementType: 'all',
            stylers: {
                color: '#fefefe',
            },
            }, {
            featureType: 'building',
            elementType: 'all',
            stylers: {
                color: '#d1d1d1',
            },
            }, {
            featureType: 'label',
            elementType: 'labels.text.fill',
            stylers: {
                color: '#999999',
            },
            }],
        },
        },
        series : [
            {
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: this.convertData(data),
                symbolSize: function (val) {
                    return val[2]/1.5;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                },
                itemStyle: {
                    normal: {
                        color:'#409EFF',
                    }
                }
            }
        ]
    });
    }
  }
}
</script>
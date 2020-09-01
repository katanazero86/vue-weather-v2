<template>
  <div class="chart-wrap" v-if="targetChartData">
    <div id="chart"></div>
  </div>
</template>

<script>

  import ApexCharts from 'apexcharts';

  export default {
    name: 'LineChart',
    props: {
      targetChartData: {type: Array, default: null},
      visibleChart: {type: Object, default: null}
    },
    watch: {
      'visibleChart': {
        handler: function(after, before) {
          if (this.targetChartDataCopy) {
            this.initChartRender();
          }
        },
        deep: true
      }
    },

    data() {
      return {
        chart: null,
        targetChartDataCopy: this.targetChartData ? {...this.targetChartData} : null,
        chartOptions: {
          chart: {
            height: 400,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          series: [{
            name: 'Temperature',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
          colors: ['#FF1654'],
          dataLabels: {
            enabled: true
          },
          stroke: {
            curve: 'smooth' // straight | smooth | stepline
          },
          title: {
            text: 'Chart weather and forecasts(Temp)',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          xaxis: {
            // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            type: 'datetime'
          },
          yaxis: {
            title: {
              text: 'Temperature'
            }
          },
          tooltip: {
            x: {
              format: 'yyyy-MM-dd HH:mm'
            },
            y: {
              formatter: function(val, {series, seriesIndex, dataPointIndex, w}) {
                if (val != undefined) {
                  return `${val}`;
                  }
              },
              title: {
                formatter: (seriesName) => seriesName
              }
            }
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          },
          markers: {
            size: 1
          }
        }
      };
    },

    mounted() {
      if (this.targetChartDataCopy) {
        this.initChartRender();
      }
    },

    methods: {
      initChartRender() {
        if (this.visibleChart) {
          const targetChartDataArray = [];
          for (let property in this.targetChartDataCopy) {
            targetChartDataArray.push({...this.targetChartDataCopy[property]});
          }
          const temperatureDataArray = [];
          const windDataArray = [];

          if (this.visibleChart.temperature) {
            // 온도

            targetChartDataArray.forEach(data => {
              temperatureDataArray.push([
                this.$moment.unix(data.dt).tz('Asia/Seoul').toDate(),
                `${(data.main.temp - 273.15).toFixed(1)} °C`
              ]);
            });

            this.chartOptions.series = [];
            this.chartOptions.series.push({
              name: 'Temperature',
              data: temperatureDataArray
            });
            this.chartOptions.title = {
              text: 'Chart weather and forecasts(Temp)',
              align: 'left'
            };
            this.chartOptions.yaxis = {
              title: {
                text: 'Temperature'
              }
            };
          }

          if (this.visibleChart.wind) {
            // 풍향

            targetChartDataArray.forEach(data => {
              windDataArray.push([
                this.$moment.unix(data.dt).tz('Asia/Seoul').toDate(),
                `${data.wind.speed} m/s`
              ]);
            });

            this.chartOptions.series = [];
            this.chartOptions.series.push({
              name: 'Wind',
              data: windDataArray
            });
            this.chartOptions.title = {
              text: 'Chart weather and forecasts(Wind)',
              align: 'left'
            };
            this.chartOptions.yaxis = {
              title: {
                text: 'Wind'
              }
            };
          }
        }

        if (!this.chart) {
          this.chart = new ApexCharts(document.querySelector('#chart'), this.chartOptions);
          this.chart.render();
        } else {
          this.chart.destroy();
          this.chart = null;
          this.chart = new ApexCharts(document.querySelector('#chart'), this.chartOptions);
          this.chart.render();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>

  @import '@/assets/scss/app.scss';

  .chart-wrap {

  }

  @include responsive(mobile) {

  }

</style>

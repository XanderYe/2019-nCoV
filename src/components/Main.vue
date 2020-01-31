<template>
  <div class="main" v-wechat-title="title">
    <h2>疫情地图</h2>
    <div class="mapChart" ref="mapChart"></div>
    <div class="data">
      <div class="tab">
        <div :class="tabIndex === 0 ? 'on' : ''" @click="tabIndex = 0">疫情数据</div>
        <div :class="tabIndex === 1 ? 'on' : '' " @click="tabIndex = 1">实时播报</div>
      </div>
      <div class="container">
        <div :class="tabIndex === 0 ? '' : 'hide'">
          <DetailTable :city="city" :diagnosed-data="diagnosedData"></DetailTable>
        </div>
        <div :class="tabIndex === 1 ? '' : 'hide'">
          <DetailReport :news="news"></DetailReport>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DetailReport from "./DetailReport";
  import axios from "axios";
  import DetailTable from "./DetailTable";

  export default {
    name: "Main",
    components: {
      DetailTable,
      DetailReport,
      axios
    },
    data() {
      return {
        title: "",
        city: {},
        // 确诊数据
        diagnosedData: [],
        // 区/市
        districtsData: [],
        // tab的下标
        tabIndex: 0,
        news: [],
        option: {
          tooltip: {},
          visualMap: {
            show: true,
            type: 'piecewise',
            pieces: [
              {gte: 1000, color: "#731919"},
              {gte: 500, lte: 999, color: "#9C2F31"},
              {gte: 100, lte: 499, color: "#C34548"},
              {gte: 10, lte: 99, color: "#E26061"},
              {gte: 1, lte: 9, color: "#F08F7F"},
              {value: 0, color: "#FFFFFF"}
            ],
          },
          geo: {
            map: 'ningbo',
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
        },
      }
    },
    methods: {
      getUrlParam(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
      },
      transferToECharts() {
        let echartsData = [];
        this.diagnosedData.forEach(data => {
          let district = {};
          district.name = data.name;
          district.value = data.diagnosed;
          echartsData.push(district);
        });
        this.option.series =  [
           {
            name: '确诊人数',
            type: 'map',
            geoIndex: 0,
            data: echartsData
          }
        ]
      },
      loadECharts() {
        let url = "static/city/" + this.city.districtNum + "_full.json";
        this.$requests.getJson(url).then(res => {
          let myChart = this.$echarts.init(this.$refs.mapChart);
          const pinyin = this.city.pinyin;
          this.$echarts.registerMap(pinyin, res.data);
          // 设置地图
          this.option.geo.map = pinyin;
          myChart.setOption(this.option);
        })
      },
    },
    mounted() {
      let district = this.getUrlParam("district");
      // 请求数据
      this.$requests.get(interfaceUrl, {
        district: district
      }).then(res => {
        if (res.data.code === 0) {
          this.city = res.data.data.city;
          this.diagnosedData = res.data.data.diagnosedData;
          this.news = res.data.data.news;
          this.title = this.city.name + "新型冠状病毒肺炎确诊患者分布";
          this.transferToECharts();
          this.loadECharts();
        }
      });
    }
  }
</script>

<style lang="less">
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /*滚动条颜色*/
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #BDBDBD;
  }

  .main {
    height: 100%;

    .hide {
      display: none !important;
    }
  }

  @media (min-width:768px) {
    h2 {
      position: absolute;
      margin: 0;
      top: 2%;
      left: 2%;
    }

    .mapChart {
      width: 100%;
      height: 100%;
    }

    .data {
      position: absolute;
      top: 2%;
      right: 2%;
      width: 300px;
      height: 80%;

      .tab {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        height: 50px;

        .on {
          color: #4169E2;
          border-bottom: 2px solid #4169E2;
        }

        div {
          display: inline-block;
          width: 48%;
          height: 45px;
          line-height: 45px;
          text-align: center;
          cursor: pointer;
        }
      }

      .container {
        max-height: 100%;
        overflow-y: scroll;
        margin-top: 10px;
        padding: 0.5rem;
        background-color: #F8F8F8;
      }
    }
  }

  @media (max-width:768px) {
    .main {
      padding: 0.3rem;
      overflow: auto;
      background-color: #FFFFFF;

      h2 {
        padding: 3px 10px;
        border-bottom: 1px solid #efefef;
        position: relative;
      }

      .mapChart {
        width: 100%;
        height: 50%;
      }

      .data {
        margin-top: 10px;
        width: 100%;
        background-color: #FFFFFF;

        .tab {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          height: 50px;

          .on {
            color: #4169E2;
            border-bottom: 2px solid #4169E2;
          }

          div {
            display: inline-block;
            width: 49.3%;
            height: 45px;
            line-height: 45px;
            text-align: center;
            cursor: pointer;
          }
        }

        .container {
          margin-top: 10px;
          padding: 0.5rem;
          background-color: #F8F8F8;
        }
      }
    }
  }
</style>

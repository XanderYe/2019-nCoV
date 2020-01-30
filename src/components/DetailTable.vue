<template>
  <div class="detail-table">
    <div class="district header">
      <div class="name">地区</div>
      <div class="diagnosed">确诊</div>
    </div>
    <div class="district">
      <div class="name active">{{city.name}}</div>
      <div class="diagnosed">{{city.diagnosed}}</div>
    </div>
    <div class="district" v-for="data in diagnosedData" :key="data.id">
      <div class="name">{{data.name}}</div>
      <div class="diagnosed">{{data.diagnosed}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailTable",
    props: {
      city: {
        type: Object,
        require: true
      },
      diagnosedData: {
        type: Array,
        require: true
      },
    }
  }
</script>

<style lang="less" scoped>
  .detail-table {
    .district {
      display: flex;
      text-align: center;

      &:nth-child(1) {
        font-weight: bold;
      }

      &:nth-child(2) {
        font-weight: bold;
        .name, .diagnosed {
          background-color: #F8F8F8 !important;
        }
      }

      .active:before {
        content: ".";
        display: block;
        position: absolute;
        font-size: 0;
        line-height: 0;
        width: 0;
        height: 0;
        border-color: transparent transparent transparent red;
        border-style: solid;
        border-width: 6px 0 6px 6px;
        left: 10px;
        top: 50%;
        -webkit-transform: translateY(-50%) rotate(90deg);
        transform: translateY(-50%) rotate(90deg);
      }

    }

    .header {
      .name {
        background-color: #E3E7F3;
      }

      .diagnosed {
        background-color: #F3BAB0;
      }
    }

    .name {
      flex: 4 1;
      padding: 0.4rem 0;
      position: relative;
    }

    .diagnosed {
      flex: 3 1;
      padding: 0.3rem 0;
      position: relative;
    }

    .name, .diagnosed {
      border: 1px solid #FFF;
      background-color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>

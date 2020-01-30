<template>
  <div>
    <div class="detail-report" v-for="data in news" :key="data.id">
      <div class="reportLeft">
        <span class="leftTime">{{data.time}}</span>
        <span class="leftDot"></span>
        <span class="leftLine"></span>
      </div>
      <div class="reportRight">
        <p class="topicTitle"><a :href="data.url">{{data.title}}</a></p>
        <p class="topicFrom">信息来源：<span>{{data.source}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailReport",
    props: {
      news: {
        type: Array,
        require: true
      },
    }
  }
</script>

<style lang="less" scoped>
  .detail-report {
    display: flex;
    background-color: #F8F8F8;

    .reportLeft {
      position: relative;
      width: 40%;
      overflow: hidden;
    }

    .reportRight {
      position: relative;
      width: 60%;
      flex-grow: 1;
      margin-bottom: 0.5rem;
      margin-right: 0.2rem;
      padding: 0.12rem 0.12rem;
      background: #FFFFFF;
      border-radius: 0.2rem;

      .topicTitle {
        color: #333;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.3em;
        text-overflow: ellipsis;
        a {
          color: #333;
          text-decoration: none;
          &:hover {
            color: #333;
            text-decoration: underline;
          }
        }
      }
      .topicFrom {
        margin-top: 0.04rem;
        text-align: right;
        font-size: 0.2rem;
        color: #999999;
      }
    }

    @media (min-width:768px) {
      .leftTime {
        position: absolute;
        left: 1.0rem;
        font-weight: 500;
        font-size: 0.8rem;
        text-align: right;
        vertical-align: top;
      }
      .leftDot {
        position: absolute;
        top: 0;
        left: 5.8rem;
        z-index: 2;
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background: url("../assets/dot.png");
        background-size: cover;
      }
      .leftLine {
        position: absolute;
        top: 0.4rem;
        left: 6.15rem;
        display: inline-block;
        width: 0.1rem;
        height: 12rem;
        background: #4169E2;
      }
    }

    @media (max-width:768px) {
      .leftTime {
        position: absolute;
        left: 1.4rem;
        font-weight: 500;
        font-size: 0.8rem;
        text-align: right;
        vertical-align: top;
      }
      .leftDot {
        position: absolute;
        top: 0;
        left: 6.2rem;
        z-index: 2;
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background: url("../assets/dot.png");
        background-size: cover;
      }
      .leftLine {
        position: absolute;
        top: 0.4rem;
        left: 6.55rem;
        display: inline-block;
        width: 0.1rem;
        height: 10rem;
        background: #4169E2;
      }
    }
  }
</style>

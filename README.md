# 项目名称

2019-nCoV

# 项目说明

2019年新型冠状病毒感染数据地图，主要用于显示县级区数据

# 部署方法

## 安装依赖

``` bash
npm install
```

## 开发模式运行

``` bash
npm run dev
```

## 构建生产环境

``` bash
npm run build
```

# 接口数据格式

## 简要描述

获取地级市信息，其县级行政区划确诊数据及相关报道

## 请求URL

自定义，修改[static/misc.js](https://github.com/XanderYe/2019-nCoV/blob/master/static/misc.js)中的`interfaceUrl`变量

## 请求方式

-get

## 参数

参数名 | 必选 | 类型 | 说明
-|-|-|-
district | 否 | string | 地区，用于适配其他市，从访问url中的params获取

## 返回示例

```json
{
	"msg": "success",
	"code": 0,
	"data": {
		"news": [
			{
				"id": 1,
				"title": "标题",
				"url": "https://新闻地址/",
				"source": "XX晚报",
				"time": "01-30 10:27"
			}
		],
		"diagnosedData": [
			{
				"id": 1,
				"name": "XX市/区/县",
				"diagnosed": 0,
				"point": "经度,纬度"
			}
		],
		"city": {
			"id": 1,
			"name": "地级市",
			"diagnosed": 0,
			"point": "经度,纬度"
		}
	}
}
```

##### 说明：diagnosed为确诊人数，city的point为初始加载中心，diagnosedData中的point为地区名称标签显示的位置

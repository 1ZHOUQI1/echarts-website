(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{340:function(e,n,t){"use strict";t.r(n),n.default="# Basic Bar Chart\n\nBar Chart, is a chart that presents the comparisons among discrete data. The length of the bars is proportionally related to the categorical data.\n\nTo set the bar chart, you need to set the `type` of `series` as `'bar'`.\n\n[[Option]](${optionPath}series-bar)\n\n## Simple Example\n\nLet's begin with a basic bar chart:\n\n```js\n/*\nlive\n\n*/\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\nIn this case, the x-axis is under the category type. Therefore, you should define some corresponding values for `'xAxis'`. Meanwhile, the data type of the y-axis is numerical. The range of the y-axis will be generated automatically by the `data` in `'series'`.\n\n## Multi-series Bar Chart\n\nYou may use a series to represent a group of related data. To show multiple series in the same chart, you need to add one more array under the `series`.\n\n```js live\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    },\n    {\n      type: 'bar',\n      data: [26, 24, 18, 22, 23, 20, 27]\n    }\n  ]\n};\n```\n\n## Customized Bar Chart\n\n### Styles\n\nIt is a good idea to install the style of Bar Chart by using ['series.itemStyle'](${optionPath}series-bar.itemStyle). Description of the SCI:\n\n- Color of column(`'color'`);\n- Outline color(`'borderColor'`), width(`'borderWidth'`), type(`'borderType'`) of column;\n- Border radius of column(`'barBorderRadius'`);\n- Transparency(`'opacity'`);\n- Shadow type(`'shadowBlur'`, `'shadowColor'`, `'shadowOffsetX'`, `'shadowOffsetY'`)\n\nHere is a example:\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [\n        10,\n        22,\n        28,\n        {\n          value: 43,\n          // Specify the style for single bar\n          itemStyle: {\n            color: '#91cc75',\n            shadowColor: '#91cc75',\n            borderType: 'dashed',\n            opacity: 0.5\n          }\n        },\n        49\n      ],\n      itemStyle: {\n        barBorderRadius: 5,\n        borderWidth: 1,\n        borderType: 'solid',\n        borderColor: '#73c0de',\n        shadowColor: '#5470c6',\n        shadowBlur: 3\n      }\n    }\n  ]\n};\n```\n\nIn this case, we defined the style of the bar chart by `'itemStyle'` of corresponding `series`. For complete configuration items and their usage, please check the configuration item manual: [`series.itemStyle`](${optionPath}series-bar.itemStyle)。\n\n### Width and Height of Column\n\nYou can use [`barWidth`](${optionPath}#series-bar.barWidth) to change the width of the bar. For instance, the `'barWidth'` in the following case was set to `'20%'`. It indicates that width of each bar is 20% of the category width. As there are 5 data in every series, 20% `'barWidth'` means 4% for the entire x-axis.\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [10, 22, 28, 43, 49],\n      barWidth: '20%'\n    }\n  ]\n};\n```\n\nIn addition, [`barMaxWidth`](${optionPath}series-bar.barMaxWidth) has limited the maximum width of the bar. For some small value, you can declare a minimum height for the bar: [`barMinHeight`](${optionPath}series-bar.barMinHeight). When the corresponding height of data is smaller than the limit, ECharts will take 'barMinHeight' as the replaced height.\n\n### Column Spacing\n\nThere are two kinds of column spacing. One is the spacing between different series under the same category: [`barWidth`](${optionPath}series-bar.barWidth). The other is the spacing between categories: [`barCategoryGap`](${optionPath}series-bar.barCategoryGap).\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 18],\n      barGap: '20%',\n      barCategoryGap: '40%'\n    },\n    {\n      type: 'bar',\n      data: [12, 14, 9, 9, 11]\n    }\n  ]\n};\n```\n\nIn this case, the `barGap` is `'20%'`. That means the distance between bars under the same category is 20% of the bar width. For instance, if we set the `barCategoryGap` to `'40%'`, the gap on each side of the bar will take 40% place in categories (compared with the width of the column).\n\nUsually, `barWidth` is not necessary to be clarified if `'barGap'` and `barCategoryGap` was set. If you need to make sure the bar is not too wide while the graph is large, try to use `barMaxWidth` to limit the maximum width of bars.\n\n> In the same cartesian coordinate system, the property will be shared by several column series. To make sure it takes effect on the graph, please set the property on the last bar chart series of the system.\n\n### Add Background Color for Bars\n\nYou might want to change the background color of bars sometimes. After ECharts v4.7.0, this function can be enabled by ['showBackground'](${optionPath}series-bar.showBackground) and configured by ['backgroundStyle'](${optionPath}series-bar.backgroundStyle).\n\n```js live\noption = {\n  xAxis: {\n    type: 'category',\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {\n    type: 'value'\n  },\n  series: [\n    {\n      data: [120, 200, 150, 80, 70, 110, 130],\n      type: 'bar',\n      showBackground: true,\n      backgroundStyle: {\n        color: 'rgba(220, 220, 220, 0.8)'\n      }\n    }\n  ]\n};\n```\n"}}]);
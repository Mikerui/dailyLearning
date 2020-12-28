function brokenLine() {
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    legend: {
      data: ['demo2', 'demo1'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        name: 'demo2',
        smooth: true,
      },
      {
        data: [80, 962, 261, 674, 236, 1340, 1160],
        type: 'line',
        name: 'demo1',
        smooth: true,
      },
    ],
  }

  var myChart = echarts.init(document.getElementById('eCharts'))
  myChart.setOption(options)
}

// 折线
brokenLine()

function columnar() {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: [
        '直接访问',
        '邮件营销',
        '联盟广告',
        '视频广告',
        '搜索引擎',
        '百度',
      ],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: '邮件营销',
        type: 'bar',
        stack: '广告',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '联盟广告',
        type: 'bar',
        stack: '广告',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '视频广告',
        type: 'bar',
        stack: '广告',
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: '搜索引擎',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        markLine: {
          lineStyle: {
            type: 'dashed',
          },
          data: [[{type: 'min'}, {type: 'max'}]],
        },
      },
      {
        name: '百度',
        type: 'bar',
        barWidth: 5,
        stack: '搜索引擎',
        data: [620, 732, 701, 734, 1090, 1130, 1120],
      },
    ],
  }

  var myChart = echarts.init(document.getElementById('columnar'))
  myChart.setOption(option)
}

// 柱状
columnar()

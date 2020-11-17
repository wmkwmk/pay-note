# pay-note
more free simple clear save money pay note

2020/11/12
## 把大象装冰箱分几步
- 创建存储仓库
1、打开github
2、新建项目仓库
- 开发前准备
1、打开vscode
2、打开项目文件夹
3、打开项目文件夹cmd
4、连接远程仓库 git clone 仓库
- 初始化项目
1、vue init webpack paynote-front
2、cd paynote-front
3、npm run dev
## 开发
初始化的：
index.html->App.vue->index.js->HelloWorld.vue
项目框架梳理
统计--账单明细--管理
1、建立文件结构和路由
  componets
    --All 统计
    --List 账单明细
    --Set 设置
2、安装UI框架 muse-ui
  1) npm i muse-ui -S 安装
  2) main.js 增加
  import MuseUI from 'muse-ui'
  import 'muse-ui/dist/muse-ui.css'
  Vue.use(MuseUI)

2020/11/16
v-on:   绑定事件
1、底部导航 Bottom Navigation
icon配置：index.html 添加
    <link rel="stylesheet" href="https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css">
设置to属性，router-link会渲染到router-view中
2、顶部tab Tabs
月账单-年账单
3、图表-bar
安装：https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md
配置项手册：https://echarts.apache.org/zh/option.html#series-bar.barGap

2020/11/17
1、图表-pie
设置图表大小
<v-chart :options="barOption" theme="light" style="width:100%;height:100%" autoresize/>
内联不生效，需要设置行内宽高，style="width:100%;height:100%"
增加autoresize属性，这个 prop 用来指定 ECharts 实例在组件根元素尺寸变化时是否需要自动进行重绘。
2、List
3、搜索、排序、筛选

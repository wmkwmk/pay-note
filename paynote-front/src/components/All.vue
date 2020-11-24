<template>
  <div class="greenBg">
    <div>
      <mu-tabs :value.sync="active1" center class="greenBg" indicator-color="#fff">
        <mu-tab>月账单</mu-tab>
        <mu-tab>年账单</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active1 === 0">
        <mu-date-input
          v-model="startDate"
          icon="today"
          type="month"
          format="YYYY年MM月"
          no-display
          container="bottomSheet"
          style="margin:0;"
          solo
        ></mu-date-input>
      </div>
      <div  v-if="active1 === 1">
          <mu-date-input
          v-model="startDate"
          icon="today"
          type="year"
          format="YYYY年"
          no-display
          container="bottomSheet"
          style="margin:0;"
          solo
        ></mu-date-input>
      </div>
      <mu-list class="badge-list-wrap">
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title class="font-write">支出</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-content>
            <mu-list-item-title class="font-write">￥1200.00</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-badge content="12" color="primary"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
        <mu-divider></mu-divider>
        <mu-list-item>
          <mu-list-item-content>
            <mu-list-item-title class="font-write">收入</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-content>
            <mu-list-item-title class="font-write">￥1200.00</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-badge content="12" color="primary"></mu-badge>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>

    <div style="background-color:#fff;border-radius:10px;padding-top:2em">
      <mu-expansion-panel expand>
        <div slot="header">分类</div>
        <mu-list toggle-nested>
          <mu-list-item
            button
            :ripple="false"
            nested
            :open="open === 'stared'"
            @toggle-nested="open = arguments[0] ? 'stared' : ''"
          >
            <mu-list-item-action>
              <mu-icon value="grade"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>生活缴费</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>
          <mu-list-item
            button
            :ripple="false"
            nested
            :open="open === 'stared'"
            @toggle-nested="open = arguments[0] ? 'stared' : ''"
          >
            <mu-list-item-action>
              <mu-icon value="grade"></mu-icon>
            </mu-list-item-action>
            <mu-list-item-title>餐饮美食</mu-list-item-title>
            <mu-list-item-title>-6000</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
            </mu-list-item-action>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </mu-expansion-panel>
      <mu-expansion-panel expand>
        <div slot="header">统计</div>
        <div class="chartsDiv">
          <v-chart :options="barOption" theme="light" style="width:100%;height:100%" autoresize />
        </div>
      </mu-expansion-panel>
      <mu-expansion-panel expand>
        <div slot="header">统计</div>
        <div class="chartsDiv">
          <v-chart :options="pieOption" theme="light" style="width:100%;height:100%" autoresize />
        </div>
      </mu-expansion-panel>
    </div>
  </div>
</template>

<style scoped>
.font-write{
  color: #fff;
}
.chartsDiv {
  width: 100%;
  height: 200px;
}
.greenBg {
  background-color: #42b983;
}
.mu-item-action{
  min-width: 36px;
}
</style>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'

export default {
  components: {
    'v-chart': ECharts
  },
  data() {
    let dataZ = [3, 4, 5, 6] //支出
    let dataS = [3, 4, 5, 6] //收入
    let dataMonth = [3, 4, 5, 6] //月份

    return {
      active1: 0,
      open: '',
      startDate: '2020-11',
      barOption: {
        xAxis: [
          {
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          }
        ],
        yAxis: [
          {
            show: false // 隐藏y轴
          }
        ],
        series: [
          {
            type: 'bar',
            data: [1, 2, 3, 4],
            barGap: 0, // 两列距离
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  position: 'top', // 在上方显示
                  textStyle: {
                    // 数值样式
                    color: 'black',
                    fontSize: 16
                  }
                }
              }
            }
          },
          {
            type: 'bar',
            data: [2.6, 5.9, 9.0, 2.3],
            itemStyle: {
              normal: {
                label: {
                  show: true, // 开启显示
                  position: 'top', // 在上方显示
                  textStyle: {
                    // 数值样式
                    color: 'black',
                    fontSize: 16
                  }
                }
              }
            }
          }
        ]
      },
      pieOption: {
        legend: {
          bottom: 10,
          left: 'center',
          data: ['生活缴费', '美食', '兖州', '荆州', '幽州']
        },
        series: [
          {
            type: 'pie',
            selectedMode: 'single',
            data: [
              { value: 535, name: '荆州' },
              { value: 510, name: '兖州' },
              { value: 634, name: '益州' },
              { value: 735, name: '西凉' }
            ]
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>

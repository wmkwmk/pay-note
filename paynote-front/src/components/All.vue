<template>
  <div class="All">
    <mu-container>
      <mu-tabs
        :value.sync="active1"
        inverse
        color="secondary"
        text-color="rgba(0, 0, 0, .54)"
        center
      >
        <mu-tab>month</mu-tab>
        <mu-tab>year</mu-tab>
      </mu-tabs>
      <div class="demo-text" v-if="active1 === 0">
        <div class="myReservationRang">
          <mu-date-input
            v-model="startDate"
            type="month"
            format="YYYY年MM月"
            no-display
            container="bottomSheet"
          ></mu-date-input>
        </div>
      </div>
      <div class="demo-text" v-if="active1 === 1">
        <div class="myReservationRang">
          <mu-date-input v-model="startDate" label="选择日期" type="year" format="YYYY年MM月" no-display></mu-date-input>
        </div>
      </div>
      <mu-expansion-panel expand>
        <div slot="header">Panel 1</div>
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
            <mu-list-item-title>Stared</mu-list-item-title>
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
        <div slot="header">Panel 1</div>
        <div class="chartsDiv">
          <v-chart :options="barOption" theme="light" style="width:100%;height:100%" autoresize />
        </div>
      </mu-expansion-panel>
      <mu-expansion-panel expand>
        <div slot="header">Panel 1</div>
        <div class="chartsDiv">
          <v-chart :options="pieOption" theme="light" style="width:100%;height:100%" autoresize />
        </div>
      </mu-expansion-panel>
    </mu-container>
  </div>
</template>

<style>
.chartsDiv {
  width: 100%;
  height: 200px;
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
      startDate: '',
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
          data: ['西凉', '益州', '兖州', '荆州', '幽州']
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

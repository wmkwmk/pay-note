<template>
  <div class="List">
    <div style="text-align:center;background:#42b983" color="primary">
      <mu-icon value="search" style="position:absolute;top:15px;left:11%" size="26" color="#ccc"></mu-icon>
      <input v-model="value1" class="search" placeholder="搜索" />
      <mu-icon value="clear" style="position:absolute;top:15px;right:11%" size="26" color="#ccc"></mu-icon>
    </div>
    <mu-divider></mu-divider>
    <mu-flex
      class="flex-wrapper"
      align-items="center"
      style="background-color:#fff;line-height:2.5;position:relative;"
    >
      <mu-flex class="flex-demo" justify-content="center" fill>全部</mu-flex>
      <mu-flex class="flex-demo" justify-content="center" fill>
        <div @click="show3 = !show3">
          筛选
          <mu-icon value="more_vert" style="position:relative;top:6px;left:-2px;" size="20"></mu-icon>
        </div>
      </mu-flex>
      <mu-expand-transition style="position:absolute;top:2.5em;z-index:4;width:100%;max-height:80%;">
        <div v-show="show3">
          <Sel></Sel>
        </div>
      </mu-expand-transition>
    </mu-flex>
    <mu-container style="background-color:#f5f5f5;font-size:12px;padding:6px">
      <mu-date-input
        type="month"
        format="YYYY年MM月"
        no-display
        solo
        v-model="value6"
        container="bottomSheet"
        action-icon="expand_more"
        style="font-size:12px;width:9em;min-height:0;height:24px;"
      ></mu-date-input>
      <div style="color:#909090">支出12000 收入8000</div>
    </mu-container>
    <mu-divider></mu-divider>
    <mu-list textline="two-line" style="background-color:#fff">
      <mu-list-item v-for="item in list" :key="item.id" style="border-bottom:1px solid #ccc">
        <mu-list-item-action>
          <mu-avatar color="indigo">
            <mu-icon value="account_circle"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title style="font-size:14px;">{{item.mark}}</mu-list-item-title>
          <mu-list-item-sub-title style="font-size:12px;">{{item.chip}}</mu-list-item-sub-title>
          <mu-list-item-sub-title style="font-size:12px;">{{item.time}}</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <span class="amt">{{item.amt}}</span>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <Sel></Sel>
  </div>
</template>

<style scoped>
.mu-input {
  min-height: 36px;
  padding: 0;
}
.search {
  width: 86%;
  height: 36px;
  margin: 10px 0;
  border: 1px solid #e6e6e6;
  border-radius: 36px;
  box-shadow: none;
  -webkit-box-shadow: none;
  outline: none;
  padding-left: 2.6em;
}
.search:focus {
  border: 1px solid #ccc;
}
.amt {
  font-size: 20px;
  color: rgb(255, 157, 0);
}
</style>

<script>
import Sel from './List/Sel.vue'
export default {
  components: { Sel },
  data() {
    return {
      value1: '',
      value6: '2020-11',
      value7: '',
      open: 'false',
      show3: 'show3',
      list: [
        {
          id: '1',
          mark: '转账',
          chip: '转账',
          time: '2020/11/18',
          amt: '-900'
        }
      ],
      openSimple: false
    }
  }
}
</script>
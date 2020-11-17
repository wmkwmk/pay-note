<template>
  <div class="List">
    <!-- <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" left>
      <mu-tab>全部</mu-tab>
      <mu-tab>
        <span>筛选</span>
      </mu-tab>
    </mu-tabs> -->
    <mu-expansion-panel>
      <div slot="header">全部</div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      <mu-button slot="action" flat>Cancel</mu-button>
      <mu-button slot="action" flat color="primary">Save</mu-button>
    </mu-expansion-panel>
    <mu-col span="12" lg="4" sm="6">
      <mu-date-input
        type="month"
        no-display
        v-model="value6"
        label="本月"
        container="bottomSheet"
        label-float
        style="width:3em"
      ></mu-date-input>
    </mu-col>
    <mu-list textline="two-line">
      <mu-list-item avatar :ripple="false" button>
        <mu-list-item-action>
          <mu-avatar color="indigo">
            <mu-icon value="account_circle"></mu-icon>
          </mu-avatar>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title>转账给张三</mu-list-item-title>
          <mu-list-item-sub-title>转账</mu-list-item-sub-title>
          <mu-list-item-sub-title>今天 14:27</mu-list-item-sub-title>
        </mu-list-item-content>
        <mu-list-item-action>
          <span class="amt">-900.00</span>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>
    </mu-list>
  </div>
</template>

<style scoped>
mu-list-item-sub-title {
  font-size: 10px;
}
.amt {
  font-size: 20px;
  font-weight: 600;
  color: rgb(255, 157, 0);
}
</style>

<script>
export default {
  data(){
    return{
      'value6':''
    }
  }
}
</script>
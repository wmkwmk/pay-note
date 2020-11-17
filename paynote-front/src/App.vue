<template>
  <div id="app">
    <router-view />
    <div style="height:60px;"></div>
    <mu-container>
      <mu-bottom-nav class="btNav">
        <mu-bottom-nav-item title="All" icon="restore" to="/"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="List" icon="favorite" to="/List"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="Set" icon="location_on" to="/Set"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
    <mu-button fab color="teal" class="add" to="/Add">
      <mu-icon value="add" ></mu-icon>
    </mu-button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.btNav {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.add{
  position: fixed;
  right: 10px;
  bottom: 80px;
}
</style>

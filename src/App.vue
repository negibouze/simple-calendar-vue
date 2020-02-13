<template>
  <div id="app">
    <calendar month="2020-02" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calendar from "./components/Calendar.vue";

@Component({
  components: {
    Calendar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: inherit;
}
</style>

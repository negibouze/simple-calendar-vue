<template>
  <div id="app">
    <calendar
      :month="month"
      @click-left="handleClickLeft"
      @click-right="handleClickRight"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Calendar from "./components/Calendar.vue";
import { getNextYearMonth, getPreviousYearMonth } from "@/utils/day";

@Component({
  components: {
    Calendar
  }
})
export default class App extends Vue {
  month = "2020-02";

  handleClickLeft() {
    this.month = getPreviousYearMonth(this.month);
  }

  handleClickRight() {
    this.month = getNextYearMonth(this.month);
  }
}
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

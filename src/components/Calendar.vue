<template>
  <div class="calendar-root">
    <div class="day-of-week-container">
      <span v-for="v in dayOfWeek" :key="v" class="day-of-week-item">{{
        v
      }}</span>
    </div>
    <div class="calendar-date-container">
      <div v-for="v in displayPeriod" :key="v" class="calendar-date-content">
        <span class="day">{{ v }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String, required: true }) private month!: string;

  dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  get displayPeriod(): number[] {
    return [...Array(31).keys()];
  }
}
</script>

<style lang="scss" scoped>
.calendar-root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.day-of-week-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 40px;
}

.day-of-week-item {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}

.calendar-date-container {
  display: grid;
  flex-grow: 1;
  grid-auto-rows: minmax(74px, 1fr);
  grid-template-columns: repeat(7, 1fr);
}

.calendar-date-content {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>

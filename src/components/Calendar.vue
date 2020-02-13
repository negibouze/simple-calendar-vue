<template>
  <div>
    <div>{{ month }}</div>
    <div class="calendar-content">
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
.calendar-content {
  background-color: rgba(112, 112, 112, 0.1);
}

.day-of-week-container {
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
  height: 40px;
}

.day-of-week-item {
  align-items: center;
  background-color: #fff;
  display: inline-flex;
  justify-content: center;
}

.calendar-date-container {
  display: grid;
  border: solid 1px rgba(112, 112, 112, 0.1);
  flex-grow: 1;
  grid-auto-rows: minmax(74px, 1fr);
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-date-content {
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
</style>

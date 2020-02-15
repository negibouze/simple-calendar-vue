<template>
  <div class="calendar-root">
    <div class="header">
      <span class="arrow" @click="handleClickLeft">&lt;</span>
      <span class="month">{{ month }}</span>
      <span class="arrow" @click="handleClickRight">&gt;</span>
    </div>
    <div class="calendar-content">
      <div class="day-of-week-container">
        <span v-for="v in dayOfWeek" :key="v" class="day-of-week-item">{{
          v
        }}</span>
      </div>
      <div class="calendar-date-container">
        <div
          v-for="date in displayPeriod"
          :key="date"
          class="calendar-date-content"
        >
          <span class="day">{{ getDay(date) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  getDate,
  getFirstDateOfMonth,
  getLastDateOfMonth,
  getFirstDateOfWeek,
  getLastDateOfWeek,
  getPeriod
} from "@/utils/day";

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String, required: true }) private month!: string;

  dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

  get firstDate() {
    if (!this.month) {
      return undefined;
    }
    return getFirstDateOfMonth(this.month);
  }

  get lastDate() {
    if (!this.month) {
      return undefined;
    }
    return getLastDateOfMonth(this.month);
  }

  get firstDateOfFirstWeek() {
    if (!this.firstDate) {
      return undefined;
    }
    return getFirstDateOfWeek(this.firstDate);
  }

  get lastDateOfLastWeek() {
    if (!this.lastDate) {
      return undefined;
    }
    return getLastDateOfWeek(this.lastDate);
  }

  get displayPeriod(): string[] | undefined {
    if (!(this.firstDateOfFirstWeek && this.lastDateOfLastWeek)) {
      return undefined;
    }
    return getPeriod(this.firstDateOfFirstWeek, this.lastDateOfLastWeek);
  }

  getDay(date: string) {
    return getDate(date);
  }

  handleClickLeft() {
    this.$emit("click-left");
  }

  handleClickRight() {
    this.$emit("click-right");
  }
}
</script>

<style lang="scss" scoped>
.calendar-root {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex: 0 0 60px;
  font-weight: bold;
  padding: 0 40px;

  > span {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}

.arrow {
  flex: 0 0 40px;
}

.month {
  flex: 1 1 auto;
}

.calendar-content {
  background-color: rgba(112, 112, 112, 0.1);
  flex: 1 1 auto;
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

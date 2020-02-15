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
          <span :class="dayClassObject(date)">{{ getDay(date) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  getToday,
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

  get today() {
    return getToday();
  }

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

  dayClassObject(date: string) {
    const inMonth = date.startsWith(this.month);
    return {
      day: true,
      "out-of-month": !inMonth,
      "in-month": inMonth && this.today !== date,
      today: this.today === date
    };
  }
}
</script>

<style lang="scss" scoped>
$color-sunday: #f00;
$color-saturday: #00f;

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

  &:first-of-type {
    > .in-month {
      color: $color-sunday;
    }
  }

  &:last-of-type {
    > .in-month {
      color: $color-saturday;
    }
  }
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
  padding: 2px;

  &:nth-of-type(7n) {
    color: $color-saturday;
  }

  &:nth-of-type(7n + 1) {
    color: $color-sunday;
  }

  .day {
    display: inline-flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;

    &.today {
      background-color: #ff555d;
      border-radius: 50%;
      color: #fff;
    }

    &.out-of-month {
      color: #aaa;
    }
  }
}
</style>

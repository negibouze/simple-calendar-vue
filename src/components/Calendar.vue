<template>
  <div class="calendar-root">
    <div class="day-of-week-container">
      <span v-for="v in dayOfWeek" :key="v" class="day-of-week-item">{{
        v
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String, required: true }) private month!: string;

  dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
}
</script>

<style lang="scss" scoped>
.calendar-root {
  background-color: rgba(112, 112, 112, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.day-of-week-container {
  background-color: #fff;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(7, 1fr);
  height: 40px;
}

.day-of-week-item {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
</style>

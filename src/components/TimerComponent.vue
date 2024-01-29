<script setup lang="ts">

import TimerScreen from './TimerScreenComponent.vue';
import ButtonComponent from './ButtonComponent.vue';
import RingBellComponent from './RingBellComponent.vue';

import { startTimer, isPlayActive, isStopActive, isPauseActive, pauseTimer, stopTimer } from './utils';

</script>

<template>
  <div class="timer">
    <label class="timer__screen" for="timerSeconds">
      <TimerScreen writingMode="false" />
      <!-- <input class="timer__screen__input" type="text" name="timerInput" id="timerMinutes" value="00" placeholder="00" />
      <span class="timer__screen__divider">:</span>
      <input class="timer__screen__input" type="text" name="timerInput" id="timerSeconds" value="00" placeholder="00" /> -->
    </label>
    <div class="timer__buttons">
      <ButtonComponent symbol="play" :isActive="isPlayActive" @click="startTimer"/>
      <ButtonComponent symbol="pause" :isActive="isPauseActive" @click="pauseTimer" />
      <ButtonComponent symbol="stop" :isActive="isStopActive" @click="stopTimer" />

    </div>
    <RingBellComponent />
  </div>
</template>

<style scoped>
@import url("../assets/variables.css");

.timer {
  width: 15.625rem;
  height: 15.625rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--timer-background-color);
}

.timer__screen {
  display: flex;
  width: 13.75rem;
  height: 6.25rem;
  justify-content: center;
  align-items: center;
  border: 0.3125rem solid var(--timer-screen-border);
  background-color: var(--background-color);
}

.timer__screen__input {
  display: block;
  width: 45%;
  font-family: 'Kanit', sans-serif;
}

.timer__screen__divider {
  width: 5%;
}

.timer__screen__input, .timer__screen__divider {
  height: 5rem;
  font: 4rem arial;
  text-align: center;
  background-color: transparent;
  color: var(--timer-font-color);
}
.timer__buttons {
  display: flex;
  width: 13.75rem;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

</style>
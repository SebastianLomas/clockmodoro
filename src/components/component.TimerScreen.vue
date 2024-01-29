<script setup lang="ts">
import { ref } from 'vue';
import { isScreenWritingMode, changeMode, minutes, seconds} from './utils';

defineProps({
    writingMode : String
});
</script>

<template>
  <div v-if="isScreenWritingMode === false" class="timerScreen" @click="changeMode">
    <span class="timerScreen__time">
      {{ minutes }}:{{ seconds }}
    </span>
  </div>
  <div v-else class="timerScreen active">
    <input class="timerScreen__input" type="number" name="timerMinutes" id="timerMinutes" placeholder="00" maxlength="3">
    <span class="timerScreen__separator">:</span>
    <input class="timerScreen__input" type="number" name="timerSeconds" id="timerSeconds" placeholder="00" maxlength="2">
  </div>
</template>

<style scoped>
@import url("../assets/variables.css");
.timerScreen {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
}

.active {
  display: grid;
  grid-template-columns: 45% 10% 45%;
  grid-template-rows: 100%;
  background-color: var(--timer-font-color);
}
.timerScreen__time {
  font-size: 4rem;
  font-family: var(--timer-font);
  color: var(--timer-font-color);
}

.timerScreen__input {
  width: 100%;
  height: 100%;
  outline: none;
  border-bottom: 0.2rem solid var(--timer-background-color);
  background-color: transparent;
}

.timerScreen__input, .timerScreen__input, .timerScreen__separator {
  font-size: 4rem;
  font-family: var(--timer-font);
  text-align: center;
  color: var(--background-color);
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>
<script setup lang="ts">
import { ref } from 'vue';
defineProps({
    writingMode : String
});

const isWriting = ref(false);

const changeMode = function(e : object) {
  isWriting.value = isWriting.value === true ? false : true;
}

</script>

<template>
  <div v-if="isWriting === false" class="timerScreen" @click="changeMode">
    <span class="timerScreen__time">
      00:00
    </span>
  </div>
  <div v-else class="timerScreen active">
    <input type="number" name="timerMinutes" id="timerMinutes">
    <span class="timerSeparator">:</span>
    <input type="number" name="timerSeconds" id="timerSeconds">
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
.timerScreen__time {
  font-size: 4rem;
  font-family: var(--timer-font);
  color: var(--timer-font-color);
}
</style>
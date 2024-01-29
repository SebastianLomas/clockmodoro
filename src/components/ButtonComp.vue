<script setup lang="ts">
import { ref } from 'vue';
defineProps({
  symbol : String,
  isActive : String

});


</script>

<template>
  <div v-if="isActive === 'true'" class="button">
    <div class="stop" v-if="symbol === 'stop'"></div>
    <div class="play" v-if="symbol === 'play'"></div>
    <div class="pause" v-if="symbol === 'pause'">
      <div class="rectangle"></div>
      <div class="rectangle"></div>
    </div>
  </div>
  <div v-else class="button no-active">
    <div class="stop" v-if="symbol === 'stop'"></div>
    <div class="play" v-if="symbol === 'play'"></div>
    <div class="pause" v-if="symbol === 'pause'">
      <div class="rectangle"></div>
      <div class="rectangle"></div>
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/variables.css");
.button {
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: var(--timer-font-color);
}

.button:hover {
  cursor: pointer;
}

.button:has(.play), .button:has(.stop) {
  transform: scale(0.8);
}
.pressed {
  background-color: var(--background-color);
}

.stop {
  width: 1rem;
  height: 1rem;
  background-color: var(--timer-background-color);
}

.play {
  width: 0; 
  height: 0; 
  border-top: 0.7rem solid transparent;
  border-bottom: 0.7rem solid transparent;
  border-left: 0.9rem solid var(--timer-background-color);
}

.pause {
  display: flex;
  width: 1rem;
  height: 1rem;
  justify-content: space-evenly;

}

.rectangle {
  width: 0.3rem;
  height: 1rem;
  background-color: var(--timer-background-color);
}

.no-active {
  background-color: var(--background-color);
}

.no-active .stop, .no-active .rectangle {
  background-color: var(--timer-background-color);
}

.no-active .play {
  border-top: 0.7rem solid transparent;
  border-bottom: 0.7rem solid transparent;
  border-left: 0.9rem solid var(--timer-background-color);
}

.no-active:focus {
  cursor: unset;
}

</style>
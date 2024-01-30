<script setup lang="ts">
defineProps({
  isActive : String
})
</script>

<template>
<div v-if="isActive === 'true'" class="stopButton">
  <span class="stopButton__text">stop</span>
</div>
<div v-else class="stopButton no-active">
  <span class="stopButton__text">stop</span>
</div>
</template>

<style>
:root {
  --button-background-color: #F44343;
  --button-pressed-background-color: #C43535;
  --button-font-color: #B81A1A;
}
.stopButton {
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-self: end;
  justify-content: center;
  box-shadow: inset 0 -0.3rem 0.3rem var(--button-pressed-background-color);
  border-radius: 100%;
  padding-top: 0.2rem;
  background-color: var(--button-background-color);
}

.stopButton .stopButton__text {
  font-family: var(--timer-font);
  font-size: .8rem;
  font-weight: bold;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  color: var(--button-font-color);
}

.no-active {
  align-items: center;
  padding: 0;
  background-color: var(--button-pressed-background-color);
}
</style>
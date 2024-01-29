import { ref } from "vue";

export const isScreenWritingMode = ref(false);

export const minutes = ref('00');
export const seconds = ref('00');
export let timer : number | undefined = undefined;
export let isPlayActive = ref("true");
export let isStopActive = ref("false");
export let isPauseActive = ref("false");

export const changeMode = function() : void {
  isScreenWritingMode.value = isScreenWritingMode.value === true ? false : true;
}

export const startTimer = function() {
  if(isScreenWritingMode.value) {
    const timerMinutes  = document.querySelector("#timerMinutes");
    const timerSeconds  = document.querySelector("#timerSeconds");
    minutes.value = timerMinutes.value || "00";
    seconds.value = timerSeconds.value || "00";
    changeMode();
    isPlayActive.value = "false";
    isPauseActive.value = "true";
    isStopActive.value = "true";
    countDown();
  }
}

const countDown = function() {
  timer = setInterval(() => {
    let numberMinute : number = parseInt(minutes.value);
    let numberSeconds : number = parseInt(seconds.value);

    if(numberSeconds == 0) {
      numberMinute--;
      numberSeconds = 59;
    } else {
      numberSeconds--;
    }

    let stringMinute : string = numberMinute.toString();
    let stringSeconds : string = numberSeconds.toString();

    if(stringMinute.length < 2) {
      stringMinute = "0"+stringMinute;
    }

    if(stringSeconds.length < 2) {
      stringSeconds = "0"+stringSeconds;
    }

    minutes.value = stringMinute;
    seconds.value = stringSeconds;

  }, 1000);
}
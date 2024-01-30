import { ref } from "vue";

export const isScreenWritingMode = ref(false);

export const minutes = ref('00');
export const seconds = ref('00');
export let timer : number | undefined = undefined;
export const isPlayActive = ref("true");
export const isStopActive = ref("false");
export const isPauseActive = ref("false");
export const isRingButtonActive = ref("false");

export const changeMode = function() : void {
  // changes from span to inputs and vice versa
  isScreenWritingMode.value = isScreenWritingMode.value === true ? false : true;
}

export const startTimer = function() : void {
  // If the input are shown (instead of the span that just show the numbers), the codeis executed
  if(isScreenWritingMode.value) {
    const timerMinutes  = document.querySelector("#timerMinutes");
    const timerSeconds  = document.querySelector("#timerSeconds");
    // if the inputs has values when play button is pressed, the span will show the value from the inputs
    // else it is going to show "00:00"
    minutes.value = resolveDigits(timerMinutes.value);
    seconds.value = resolveDigits(timerSeconds.value);
    changeMode();
    // changes the style of the button
    isPlayActive.value = "false";
    isPauseActive.value = "true";
    isStopActive.value = "true";
    countDown();
  } else {
    const timerComponent = document.querySelector(".timerScreen__time");
    const [timerMinutes, timerSeconds] = timerComponent.textContent.split(":");

    console.log(timer)
    if((parseInt(timerMinutes) > 0 || parseInt(timerSeconds) > 0) && !timer) {
      minutes.value = resolveDigits(timerMinutes);
      seconds.value = resolveDigits(timerSeconds);
      isPlayActive.value = "false";
      isPauseActive.value = "true";
      countDown();
      console.log(timerMinutes, timerSeconds);
    }
  }
}

export const pauseTimer = function() : void {
  removeTimer();
  isPlayActive.value = "true";
  isPauseActive.value = "false";
  isStopActive.value = "true";
}

export const stopTimer = function() : void {
  removeTimer();
  const timerComponent = document.querySelector(".timerScreen__time");
  timerComponent.textContent = "00:00";
  isPlayActive.value = "true";
  isPauseActive.value = "false";
  isStopActive.value = "false";
}

const removeTimer = function() : void {
  clearInterval(timer);
  timer = undefined;
}
 
const countDown = function() : void {
  timer = setInterval(() => {
    // Changed to number so can be substract
    let numberMinute : number = parseInt(minutes.value);
    let numberSeconds : number = parseInt(seconds.value);

    // if seconds is 00, this is going to prevent it goes to -01
    // and makes minutes to be reduced by 1
    if(numberSeconds == 0) {
      numberMinute--;
      numberSeconds = 59;
    } else {
      numberSeconds--;
    }

    console.log(`${numberMinute}:${numberSeconds}`);

    let stringMinute : string = numberMinute.toString();
    let stringSeconds : string = numberSeconds.toString();

    stringMinute = resolveDigits(stringMinute);
    stringSeconds = resolveDigits(stringSeconds);

    minutes.value = stringMinute;
    seconds.value = stringSeconds;

    if(numberMinute === 0 && numberSeconds === 0) {
      stopTimer();
      ringTheBell();
    }

  }, 1000);
}

const resolveDigits = function(number : string) : string {
  // This prevents time be shown as "1" when only a "one digit number" is type
  // It's going to be shown as "01" instead
  let finalValue : string = "";
  
  switch(number.length) {
    case(0):
      finalValue = "00";
      break;
    case(1):
      finalValue = "0"+number;
      break;
    default:
      finalValue = number;
      break;
  }

  return finalValue;
}

const ringTheBell = function() : void {
  const ringbell = document.querySelector("#ringbell");
  // "ringbell.load" makes audio to start from the beginning
  ringbell.load();
  ringbell.play();
  isRingButtonActive.value = "true";
}

export const stopBell = function() : void {
  const ringbell = document.querySelector("#ringbell");
  ringbell.pause();
  isRingButtonActive.value = "false";
}
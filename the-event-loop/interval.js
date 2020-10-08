/* eslint-disable no-console */
let seconds = 3;
const countdown = setInterval(() => {
  console.log(seconds);
  seconds--;
  if (seconds === 0) {
    console.log('Blast off!');
    clearInterval(countdown);
  }
}, 1000);

'use strict';

console.log('hello world!');

let usershobby = prompt('What is your favorite hobby?');
let message;

if (usershobby == 'basketball'){
    message = 'That is my favorite too!'
  } else if (usershobby == 'snowboarding') {
    message = "Time to shred some pow!";
  } else if (usershobby == 'fishing'){
    message = "Fish on and bobber down!";
  } else {
    message = 'ehh that hobby is cool too!';
  }
  document.write(message);
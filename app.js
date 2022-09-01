'use strict';

console.log('hello world!');

let usersName = prompt('What is your name?');
let message;

if (usersName == 'Kassie'){
    message = 'HI TEACHER KASSIE!'
  } else if (usersName == 'Jade') {
    message = "Hello there wife!";
  } else if (usersName == 'Mike'){
    message = "Hi Mike!";
  } else {
    message = 'Thank you for checking out my site!';
  }
  document.write(message);
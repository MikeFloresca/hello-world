'use strict';

console.log('hello world!');
console.log('basketball');
console.log('fishing');


function showBasketball(){
  let usersNum =prompt('Blindly rate my page?1-5');
 
  for (let i =0; i < usersNum && i < 5; i++){

    // document.write('<img src="https://c.tenor.com/wCUl5V7vzHwAAAAC/friends-dont-lie-promise.gif" style="width:50px;"/>');
    let image="https://c.tenor.com/wCUl5V7vzHwAAAAC/friends-dont-lie-promise.gif"
     document.write(`<img src=${image} style="width:285px;"/>`);
  }
}

// showBasketball

function greetUsers(){
let usersHobby = prompt('What is your favorite hobby?');
let message;

if (usersHobby == 'Basketball'){
    message = 'That is my favorite too!'
  } else if (usersHobby == 'snowboarding') {
    message = "Time to shred some pow!";
  } else if (usersHobby == 'fishing'){
    message = "Fish on and bobber down!";
  } else {
    message = 'Whatever you said is cool too!';
  }
  document.write(message);
}

// greetUsers();



function pickNum(){
  let userNumber = prompt("Pick a number between 1-3" );
  while (userNumber !== '2'){
    alert('nope that is the wrong number')
    userNumber = prompt("Pick a number between 1-3" );
  }
  alert('Great job!!!')
}

function cyalater(){
document.write('Thanks for checking me out!');
}

// cyalater();


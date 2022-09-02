'use strict';

console.log('hello world!');
console.log('basketball');
console.log('fishing');


function showBasketball(){
  let usersNum =prompt('How many basketballs would you rate my page?1-5');
  
  for (let i =0; i < usersNum && i < 5; i++){

    // document.write('<img src="https://c.tenor.com/jk7wARavBcMAAAAd/basketball-player-basketball-moves.gif" style="width:50px;"/>');
    let image="https://c.tenor.com/jk7wARavBcMAAAAd/basketball-player-basketball-moves.gif"
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

function cyalater(){
document.write('Thanks for checking me out!');
}

// cyalater();
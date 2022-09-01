'use strict';

console.log('hello world!');
console.log('basketball');
console.log('fishing');


function showBasketball(){
  let usersNum =prompt('How many basketballs would you rate my page?1-5');
  
  for (let i =0; i < usersNum && i < 5; i++){

    // document.write('<img src="https://cdn5.vectorstock.com/i/thumb-large/58/69/basketball-ball-in-flame-vector-33865869.jpg" style="width:50px;"/>');
    let image="https://cdn5.vectorstock.com/i/thumb-large/58/69/basketball-ball-in-flame-vector-33865869.jpg"
     document.write(`<img src=${image} style="width:150px;"/>`);
  }
}

// showBasketball

function greetUsers(){
let usersHobby = prompt('What is your favorite hobby?');
let message;

if (usersHobby == 'basketball'){
    message = 'That is my favorite too!'
  } else if (usersHobby == 'snowboarding') {
    message = "Time to shred some pow!";
  } else if (usersHobby == 'fishing'){
    message = "Fish on and bobber down!";
  } else {
    message = 'ehh that hobby is cool too!';
  }
  document.write(message);
}

// greetUsers();

function cyalater(){
document.write('Thanks for checking me out!');
}

// cyalater();
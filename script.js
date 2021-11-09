'use strict';
let secrtnumber = Math.trunc(Math.random() * 20) + 1;

let chance = 10;
let Highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  let guessnumber = Number(document.querySelector('.guess').value);
  if (!guessnumber) {
    document.querySelector('.message').textContent = 'Plese Input the Number!';
  } else if (guessnumber === secrtnumber) {
    document.querySelector('.message').textContent = 'correct number!';
    document.querySelector('.number').textContent = secrtnumber;
    Highscore++;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guessnumber > secrtnumber) {
    if (chance > 0) {
      document.querySelector('.message').textContent = 'High number!';
      chance--;
      document.querySelector('.chance').textContent = chance;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  } else if (guessnumber < secrtnumber) {
    if (chance > 0) {
      document.querySelector('.message').textContent = 'Low number!';
      chance--;
      document.querySelector('.chance').textContent = chance;
    } else {
      document.querySelector('.message').textContent = 'You lose the game!';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secrtnumber = Math.trunc(Math.random() * 20) + 1;
  chance = 10;
  Highscore = 0;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(4, 176, 228);';
  document.querySelector('.message').textContent = 'Start guessings....';
  document.querySelector('.chance').textContent = chance;
});

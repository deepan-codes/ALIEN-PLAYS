'use strict';
const pop_up = document.querySelector('.guide-container');
const play = document.querySelector('.play');
const filter = document.querySelector('.back-filter');
const closeButton = document.querySelector('.close');
play.addEventListener('click', function () {
  pop_up.classList.remove('hidden');
  filter.classList.remove('hidden');
});
closeButton.addEventListener('click', function () {
  pop_up.classList.add('hidden');
  filter.classList.add('hidden');
});
document.querySelector('.back-filter').addEventListener('click', function () {
  pop_up.classList.add('hidden');
  filter.classList.add('hidden');
});
addEventListener('keydown', function (a) {
  if (a.key === 'Escape') {
    if (!filter.classList.contains('hidden')) {
      pop_up.classList.add('hidden');
      filter.classList.add('hidden');
    }
  }
});
// dice
//       select element section           //
const switch0El = document.querySelector('.head--1');
const switch0E2 = document.querySelector('.head--2');
const player0EL = document.querySelector('.score_0');
const player1EL = document.querySelector('.score_1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice-img');
const score1El = document.querySelector('.score--1');
const score0El = document.querySelector('.score--0');
const newGame = document.querySelector('.btn--new');
//    intiallize section               //
diceEl.classList.add('hidden');
player0EL.textContent = 0;
player1EL.textContent = 0;
let active = 0;
let scores = [0, 0];
let plays = true;
let current_score = 0;
//        dice function            //
btnRoll.addEventListener('click', function () {
  if (plays) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      current_score = current_score + dice;
      document.querySelector(`.score--${active}`).textContent = current_score;
    } else {
      current_score = 0;
      document.querySelector(`.score--${active}`).textContent = 0;

      active = active === 0 ? 1 : 0;
      switch0El.classList.toggle('active');
      switch0E2.classList.toggle('active');
    }
  }
});
btnHold.addEventListener('click', function () {
  if (plays) {
    scores[active] = scores[active] + current_score;
    document.querySelector(`.score_${active}`).textContent = scores[active];
    if (scores[active] >= 100) {
      document.querySelector(`.head--${active + 1}`).textContent =
        'YOU WIN  🏆';
      plays = false;
    } else {
      current_score = 0;
      document.querySelector(`.score--${active}`).textContent = 0;

      active = active === 0 ? 1 : 0;
      switch0El.classList.toggle('active');
      switch0E2.classList.toggle('active');
    }
  }
});
newGame.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  player0EL.textContent = 0;
  player1EL.textContent = 0;
  active = 0;
  scores = [0, 0];
  plays = true;
  current_score = 0;
  switch0El.classList.add('active');
  switch0E2.classList.remove('active');
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector('.head--1').textContent = 'PLAYER 1';
  document.querySelector('.head--2').textContent = 'PLAYER 2';
});

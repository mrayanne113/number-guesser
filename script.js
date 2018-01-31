// varibles
var userGuess = document.querySelector('.user-guess');
var guessBttn = document.querySelector('.guess-number');
var lowOrHigh = document.querySelector('.low-or-high');
var showUserGuess = document.querySelector('.user-guess-number');
var clearField = document.querySelector('.clear-number');
var resetGame = document.querySelector('.reset');
var levelUpBttn = document.querySelector('.level-up-bttn');
var userMaxInput = document.querySelector('.new-max');
var userMinInput = document.querySelector('.new-min');
var guessMinMax = document.querySelector('.blue-user');
var guessLevel = document.querySelector('guess-level');
var count = 0;
var guessCount = 0;
var randomNumber = 0;


// event listeners
userGuess.addEventListener('keydown', enableBttns);
guessBttn.addEventListener('click', theUsersGuess);
clearField.addEventListener('click', clearInput);
resetGame.addEventListener('click', resetTheGame);
levelUpBttn.addEventListener('click', userRandomNumber);

// on page load
disableBttns();
newNumber();
toggleClass();

// functions
function newNumber(max, min) {
  var max = 100;
  var min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  console.log('Cheater the answer is ' + randomNumber)
  return randomNumber;
}

function disableBttns() {
  clearField.disabled = true;
  guessBttn.disabled = true;
  resetGame.disabled = true;
}


function enableBttns() {
  clearField.disabled = false;
  guessBttn.disabled = false;
  resetGame.disabled = false;
}

function theUsersGuess() {
  console.log('users/guessCount')
  event.preventDefault();
  var guess = userGuess.value;
  var guessParse = parseInt(guess);
  clearInput();
  showUserGuess.innerText = guess;
  guessBttn.disabled = true;
  feedbackOfGuess(guessParse);
}

function clearInput() {
  event.preventDefault();
  userGuess.value = '';
  clearField.disabled = true;
  // userMinInput.value = '';
  // userMaxInput.value = '';
}

function feedbackOfGuess(guessParse) {
  console.log('feedback/Of/Guess')
  if (randomNumber === guessParse) {
    checkLevel();
  } else if (guessParse > 100 || guessParse < 1){
    showUserGuess.innerText = 'That\'s not in the range, silly';
    lowOrHigh.innerText = 'Error';
  } else if (randomNumber > guessParse) {
    guessCount++;
    lowOrHigh.innerText = 'That was too low';
  } else if (randomNumber < guessParse) {
    guessCount++;
    lowOrHigh.innerText = 'That was too high'
  } else {
    showUserGuess.innerText = '??';
    lowOrHigh.innerText = 'Error';
  } 
  document.querySelector('.guess-count').innerText = guessCount;
}

function checkLevel() {
  levelUp();
  levelTwo();

  if (count >= 2){
  openByTen();  
  }
}

function resetTheGame() {
  clearInput();
  newNumber();
  count = 0;
  guessCount = 0;
  document.querySelector('.high-score').innerText = count;
  document.querySelector('.guess-count').innerText = guessCount;
  userMaxInput.classList.add('display-none');
  userMinInput.classList.add('display-none');
  guessBttn.classList.remove('top-bttn');
  clearField.classList.remove('top-bttn');
  resetGame.classList.remove('reset-blue');
  showUserGuess.style.color = '#EB008B';
  showUserGuess.style.color = '#EB008B';
  showUserGuess.innerText = '??';
  document.querySelector('.header-h1').style.color = '#EB008B';
}

function userRandomNumber() { 
  event.preventDefault();
  userGuess.disabled = false;
  max = document.querySelector('.new-max').value;
  min = document.querySelector('.new-min').value;
  var parseMax = parseInt(max);
  var parseMin = parseInt(min);
  randomNumber = Math.floor(Math.random() * (parseMax - parseMin) + parseMin); 
  console.log('The answer is ' + randomNumber + ' cheater')
  return randomNumber;
}

function levelUp() {
  console.log('level/up')
  document.querySelector('.header-h1').style.color = '#71A2B6';
  userGuess.style.color = '#71A2B6';
  guessBttn.classList.remove('guess-number');
  guessBttn.classList.toggle('guess-level');
  levelUpBttn.classList.remove('display-none');
}

function levelTwo() {
  console.log('level/two')
  count++;
  guessCount++;
  showUserGuess.style.color = '#71A2B6';
  userMaxInput.classList.remove('display-none');
  userMinInput.classList.remove('display-none');
  guessBttn.classList.add('top-bttn');
  clearField.classList.add('top-bttn');
  resetGame.classList.add('reset-blue');
  document.querySelector('.high-score').innerText = count;
  lowOrHigh.innerText = 'BOOM!! Enter your own range and hit go to start';
  showUserGuess.innerText = 'Winner!!';
  userGuess.disabled = true;
}

function openByTen() {
  max = userMaxInput.value;
  min = userMinInput.value;
  var parseMax = parseInt(max) + 10;
  var parseMin = parseInt(min) - 10;
  randomNumber = Math.floor(Math.random() * (parseMax - parseMin) + parseMin); 
  userMinInput.value = parseMin;
  userMaxInput.value = parseMax;
  console.log('random ' + randomNumber)
  showUserGuess.innerText = 'now +10 -10';
  return randomNumber;
}

function toggleClass() {
   // guessBttn.classList.toggle('guess-level');
}


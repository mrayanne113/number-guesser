// varaibles
var userGuess = document.querySelector('.user-guess');
var guessBttn = document.querySelector('.guess-number');
var lowOrHigh = document.querySelector('.low-or-high');
var showUserGuess = document.querySelector('.user-guess-number');
var clearField = document.querySelector('.clear-number');
var resetGame = document.querySelector('.reset');
var levelUpBttn = document.querySelector('.level-up-bttn');
var levelUpClear = document.querySelector('.level-up-clear');
var guessLevelUp = document.querySelector('.guess-level');
var userMaxInput = document.querySelector('.new-max');
var userMinInput = document.querySelector('.new-min');
var guessMinMax = document.querySelector('.blue-user');
var bodies = document.querySelector('.all-inside-top')
var count = 0;
var guessCount = 0;
var randomNumber = 0;

// event listeners
guessBttn.addEventListener('click', theUsersGuess);
userGuess.addEventListener('keydown', enableBttns)
clearField.addEventListener('click', clearInput);
resetGame.addEventListener('click', resetTheGame);
levelUpBttn.addEventListener('click', userRandomNumber);

// on page load
newNumber();
disableBttns();
// window.onload = guessBttn.classList.toggle('top-bttn');
// window.onload = clearField.classList.toggle('top-bttn');
// window.onload = resetGame.classList.toggle('reset-blue');
// window.onload = guessMinMax.classList.toggle('.blue-user')

// functions 
function checkLevel() {
  
}


function theUsersGuess() {
  console.log('users/guessCount')
  event.preventDefault();
  var guess = userGuess.value;
  var guessParse = parseInt(guess);
  clearInput();
  showUserGuess.style.color = '#EB008B';
  showUserGuess.innerText = guess;
  feedbackOfGuess(guessParse);
}

function feedbackOfGuess(guessParse) {
  console.log('feedback/Of/Guess')
  if (randomNumber === guessParse) {
    // showLevelTwo();
    levelUp();
    levelTwo();
  } else if (randomNumber > guessParse) {
    guessCount++;
    lowOrHigh.innerText = 'That was too low';
  } else if (randomNumber < guessParse) {
    guessCount++;
    lowOrHigh.innerText = 'That was too high'
  } else if (guessParse.length = 3){
    showUserGuess.innerText = '??';
    lowOrHigh.innerText = 'Error';
  } else {
    showUserGuess.innerText = '??';
    lowOrHigh.innerText = 'Error';
  } 
  document.querySelector('.guess-count').innerText = guessCount;
}

function newNumber() {
  var max = 100;
  var min = 1;
  randomNumber = parseInt(Math.round(Math.random() * (max - min) + min)); 
  console.log(randomNumber)
  return randomNumber;
}

function resetTheGame() {
  console.log('reset/the/game')
  clearInput();
  newNumber();
  count = 0;
  guessCount = 0;
  document.querySelector('.high-score').innerText = count;
  document.querySelector('.guess-count').innerText = guessCount;
}

function clearInput() {
  event.preventDefault();
  userGuess.value = '';
}

function disableBttns() {
  clearField.disabled = true;
  guessBttn.disabled = true;
  resetGame.disabled = true;
  levelUpBttn.disabled = true;
  // levelUpClear.disabled = true;
  // guessLevelUp.disabled = true;
  userMinInput.disabled = true;
  userMaxInput.disabled = true;
  // guessMinMax.disabled = true;
}


function enableBttns() {
  console.log('enable/Bttns')
  clearField.disabled = false;
  guessBttn.disabled = false;
  resetGame.disabled = false;
}


// first append

// function showLevelTwo() {
//   console.log('hi')
//   var articleMax = document.createElement('input');
//   var articleMin = document.createElement('input');
//   var content = document.createTextNode('peace');

//   articleMax.prepend(content)
//   articleMax.classList.add('blue-user');
//   document.body.prepend(articleMax, section)
//   console.log('peace')
// }

function levelUp() {
  console.log('level/up')
  levelUpClear.disabled = false;
  levelUpBttn.disabled = false;
  guessLevelUp.disabled = false;
  // guessMinMax.disabled = false;
  var headerColor = document.querySelector('.header-h1').style.color = '#71A2B6';
  userGuess.style.color = '#71A2B6';
}


function userRandomNumber() { 
  event.preventDefault();
  clearField.disabled = 'true';
  guessBttn.disabled = 'true';
  max = document.querySelector('.new-max').value;
  min = document.querySelector('.new-min').value;
  var parseMax = parseInt(max);
  var parseMin = parseInt(min);
  randomNumber = Math.floor(Math.random() * (parseMax - parseMin) + parseMin); 
  console.log('turkey' + randomNumber)
  return randomNumber;
}

function userRandomNumberPlusTen() {
  event.preventDefault();
  clearField.disabled = 'true';
  guessBttn.disabled = 'true';
  max = document.querySelector('.new-max').value;
  min = document.querySelector('.new-min').value;
  var parseMax = parseInt(max) + 10;
  var parseMin = parseInt(min) - 10;
  randomNumber = Math.floor(Math.random() * (parseMax - parseMin) + parseMin); 
  console.log('bee ', randomNumber, parseMax, parseMin)
  document.querySelector('.new-max').innerText = (parseMax + 10);
  document.querySelector('.new-min').innerText = (parseMin - 10);
  return randomNumber;
}

function userLevelGuess() {
  console.log('user/level/guess')
  event.preventDefault();
  var guess = userGuess.value;
  var guessParse = parseInt(guess);
  clearInput();
  showUserGuess.style.color = '#71A2B6';
  showUserGuess.innerText = guess;
  levelUpGuess(guessParse);
  newNumber();
}

function levelUpGuess(guessParse) {
  console.log('level/up/guess')
  if (randomNumber === guessParse) {
    count++;
    guessCount++;
    document.querySelector('.high-score').innerText = count;
    userRandomNumberPlusTen();
    lowOrHigh.innerText = 'BOOM!!';
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
  clearField.disabled = 'true';
  guessBttn.disabled = 'true';
}

function levelClear() {
  event.preventDefault();
  clearInput();
}

function levelTwo() {
  console.log('level/two')
  userMinInput.disabled = false;
  userMaxInput.disabled = false;
  count++;
  guessCount++;
  showUserGuess.style.color = '#71A2B6';
  showUserGuess.innerText = 'Party!! You can now enter your own min and max above';
  userMaxInput.classList.remove('display-none');
  userMinInput.classList.remove('display-none');
  guessBttn.classList.add('top-bttn');
  clearField.classList.add('top-bttn');
  resetGame.classList.add('reset-blue');
  document.querySelector('.high-score').innerText = count;
  lowOrHigh.innerText = 'BOOM!! Enter new min and max below';
}


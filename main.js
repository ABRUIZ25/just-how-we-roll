/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
const clicks = []

/********************
 * HELPER FUNCTIONS *
********************/

function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

 function sortByNumber (arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

function getTheMean(arry){
  let sum = 0
  for (let i = 0; i < arry.length; i++){
   number = arry[i]
   sum += number
  }
  return sum / arry.length
}



//everything i will call from html
const singleSixDice = document.querySelector('#d6-roll')
const sumValueSixDice = document.querySelector('#sixMean')
const middleValueSixDice = document.querySelector('#sixMedian')
const doubleSixDiceright = document.querySelector('#d6-right')
const doubleSixDiceleft = document.querySelector('#d6-left')
const twelveSideDice = document.querySelector('#d12-roll')
const twentySideDice = document.querySelector('#d20-roll')

// everthing to do with the single six dice
function changeStartImage (){
 let diceValue = getRandomNumber(6)
  if (diceValue === 1)
  singleSixDice.src = './images/d6/1.png'

  if (diceValue === 2)
  singleSixDice.src = './images/d6/2.png'

  if (diceValue === 3)
  singleSixDice.src = './images/d6/3.png'

  if (diceValue === 4)
  singleSixDice.src = './images/d6/4.png'

  if (diceValue === 5)
  singleSixDice.src = './images/d6/5.png'

  if (diceValue === 6)
  singleSixDice.src = './images/d6/6.png'
  ///TRY TO SEE IF THE CLASS CAN TELL ME WHATS GOING ON HERE!!!!!
  console.log(diceValue)
  getTheMean(sixes)
  sixes.push(diceValue)
  console.log(sixes)
  console.log(getTheMean(sixes))
  sumValueSixDice.style.innerText = getTheMean(sixes)

sortByNumber(sixes)
sumValueSixDice.style.innerText = sortByNumber(sixes)
console.log(sortByNumber(sixes))


}

console.log(sixes)
sumValueSixDice.style.innerText = getTheMean(sixes)

singleSixDice.addEventListener('click', changeStartImage)


//everything to do with the double six dice right
function changeStartImageDoubleright(){
  let diceValue = getRandomNumber(6)
   if (diceValue === 1)
   doubleSixDiceright.src = './images/d6/1.png'
 
   if (diceValue === 2)
   doubleSixDiceright.src = './images/d6/2.png'
 
   if (diceValue === 3)
   doubleSixDiceright.src = './images/d6/3.png'
 
   if (diceValue === 4)
   doubleSixDiceright.src = './images/d6/4.png'
 
   if (diceValue === 5)
   doubleSixDiceright.src = './images/d6/5.png'
 
   if (diceValue === 6)
   doubleSixDiceright.src = './images/d6/6.png'
 }
 
 doubleSixDiceright.addEventListener('click', changeStartImageDoubleright)

 //everything to do with the double six dice right
 function changeStartImageDoubleLeft (){
  let diceValue = getRandomNumber(6)
   if (diceValue === 1)
   doubleSixDiceleft.src = './images/d6/1.png'
 
   if (diceValue === 2)
   doubleSixDiceleft.src = './images/d6/2.png'
 
   if (diceValue === 3)
   doubleSixDiceleft.src = './images/d6/3.png'
 
   if (diceValue === 4)
   doubleSixDiceleft.src = './images/d6/4.png'
 
   if (diceValue === 5)
   doubleSixDiceleft.src = './images/d6/5.png'
 
   if (diceValue === 6)
   doubleSixDiceleft.src = './images/d6/6.png'

 }
 
 doubleSixDiceleft.addEventListener('click',changeStartImageDoubleLeft)

//everthing to do with 12 sided dice
function changeStartImageTwelve (){
  let diceValue = getRandomNumber(12)
   if (diceValue === 1)
   twelveSideDice.src = './images/numbers/1.png'
 
   if (diceValue === 2)
   twelveSideDice.src = './images/numbers/2.png'
 
   if (diceValue === 3)
   twelveSideDice.src = './images/numbers/3.png'
 
   if (diceValue === 4)
   twelveSideDice.src = './images/numbers/4.png'
 
   if (diceValue === 5)
   twelveSideDice.src = './images/numbers/5.png'
 
   if (diceValue === 6)
   twelveSideDice.src = './images/numbers/6.png'

   if (diceValue === 7)
   twelveSideDice.src = './images/numbers/7.png'
 
   if (diceValue === 8)
   twelveSideDice.src = './images/numbers/8.png'
 
   if (diceValue === 9)
   twelveSideDice.src = './images/numbers/9.png'
 
   if (diceValue === 10)
   twelveSideDice.src = './images/numbers/10.png'
 
   if (diceValue === 11)
   twelveSideDice.src = './images/numbers/11.png'
 
   if (diceValue === 12)
   twelveSideDice.src = './images/numbers/12.png'

 }
 
 twelveSideDice.addEventListener('click',changeStartImageTwelve)

//everythiong to do with the 20 sided dice 
function changeStartImageTwenty (){
  let diceValue = getRandomNumber(20)
   if (diceValue === 1)
   twentySideDice.src = './images/numbers/1.png'
 
   if (diceValue === 2)
   twentySideDice.src = './images/numbers/2.png'
 
   if (diceValue === 3)
   twentySideDice.src = './images/numbers/3.png'
 
   if (diceValue === 4)
   twentySideDice.src = './images/numbers/4.png'
 
   if (diceValue === 5)
   twentySideDice.src = './images/numbers/5.png'
 
   if (diceValue === 6)
   twentySideDice.src = './images/numbers/6.png'

   if (diceValue === 7)
   twentySideDice.src = './images/numbers/7.png'
 
   if (diceValue === 8)
   twentySideDice.src = './images/numbers/8.png'
 
   if (diceValue === 9)
   twentySideDice.src = './images/numbers/9.png'
 
   if (diceValue === 10)
   twentySideDice.src = './images/numbers/10.png'
 
   if (diceValue === 11)
   twentySideDice.src = './images/numbers/11.png'
 
   if (diceValue === 12)
   twentySideDice.src = './images/numbers/12.png'

   if (diceValue === 13)
   twentySideDice.src = './images/numbers/13.png'

   if (diceValue === 14)
   twentySideDice.src = './images/numbers/14.png'

   if (diceValue === 15)
   twentySideDice.src = './images/numbers/15.png'

   if (diceValue === 16)
   twentySideDice.src = './images/numbers/16.png'

   if (diceValue === 17)
   twentySideDice.src = './images/numbers/17.png'

   if (diceValue === 18)
   twentySideDice.src = './images/numbers/18.png'

   if (diceValue === 19)
   twentySideDice.src = './images/numbers/19.png'

   if (diceValue === 20)
   twentySideDice.src = './images/numbers/20.png'

 }
 
 twentySideDice.addEventListener('click',changeStartImageTwenty)









/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/




/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/

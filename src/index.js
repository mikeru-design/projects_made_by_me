import './assets/scss/main.scss';
import { addToDo, toDoBtnsFunc, searchToDos } from './assets/js/toDo';
import searchDrinks from './assets/js/searchDrinks';
import billSpliter from './assets/js/billSpliter';
import { logInValidate, valueCheck } from './assets/js/logInValidator';
import fortuneAnswer from './assets/js/eighthBall';

const domElements = {
  toDoForm: toDoForm,
  toDosContainer: document.querySelector('.toDosContainer'),

  searchDrinksForm: searchForm,

  calculatorForm: calculator,

  logInForm: logInValidator,
  logInInputs: logInValidator.querySelectorAll('input'),
  logInInputsMssg: document.querySelectorAll('.logInValidator div p'),
  logedInPopUp: document.querySelector('.logedInPopUp'),
  notLogedInPopUp: document.querySelector('.notLogedInPopUp'),

  eighthBallForm: eighthBallForm,
  eightBall: document.querySelector('.eightBall'),
};

domElements.toDoForm.addEventListener('submit', addToDo);
domElements.toDoForm.toDoInput.addEventListener('keyup', searchToDos);
domElements.toDosContainer.addEventListener('click', toDoBtnsFunc);

domElements.searchDrinksForm.addEventListener('keyup', searchDrinks);
domElements.searchDrinksForm.addEventListener('submit', searchDrinks);

domElements.calculatorForm.addEventListener('submit', billSpliter);

domElements.logInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  logInValidate(
    domElements.logInInputs,
    domElements.logInInputsMssg,
    domElements.logedInPopUp,
    domElements.notLogedInPopUp,
  );
});
domElements.logInInputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    valueCheck(input)
  });
});

domElements.eighthBallForm.addEventListener('submit', (e) => {
  e.preventDefault()

  fortuneAnswer()
})



// --------------------------------------SizeUp, sideDown, colorChange

// const sizeUpBtn = document.querySelector('.sizeUp')
// const sizeDownBtn = document.querySelector('.sizeDown')
// const colorBtn = document.querySelector('.color')
// const text = document.querySelector('.text p')
// let fontSize = Number(window.getComputedStyle(text).fontSize.slice(0, 2))

// console.log(text);

// const sizeUp = () => {
//   if ( fontSize < 40) {
//     fontSize += 1
//     text.style.fontSize = `${fontSize}px`;
//   }
// }
// const sizeDown = () => {
//   if ( fontSize > 1) {
//     fontSize -= 1
//     text.style.fontSize = `${fontSize}px`;
//   }
// }

// const changeColor = () => {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   text.style.color = `#${randomColor}`;
// }

// sizeUpBtn.addEventListener('click', sizeUp)
// sizeDownBtn.addEventListener('click', sizeDown)
// colorBtn.addEventListener('click', changeColor)

// --------------------------------------C to F Converter

// const convertBtn = document.querySelector('.conv');
// const changeUnitstBtn = document.querySelector('.change');
// const resetBtn = document.querySelector('.reset');
// const converterInput = document.querySelector('#converter');
// const inputLabel = document.querySelector('label');
// const result = document.querySelector('.result');
// let units = 'cels'

// console.log(changeUnitstBtn);

// const convert = () => {
//   if ( converterInput.value ) {
//     const inputValue = converterInput.value
//     let celsToFahr = ''
//     let FahrToCels = ''

//     if ( units == 'cels' ) {
//       celsToFahr = ((inputValue * 1.8) + 32).toFixed(1)
//       result.innerHTML = `${inputValue} &deg;C ---- ${celsToFahr} &deg;F`
//     } else if ( units == 'fahr' ){
//       fahrToCels = ((inputValue - 32) / 1.8).toFixed(1)
//       result.innerHTML = `${inputValue} &deg;F ---- ${fahrToCels} &deg;C`
//     }
//   }
// }

// const changeUnits = () => {
//   result.innerHTML = ''
//   if ( units == 'cels') {
//     units = 'fahr'
//     console.log(units);
//     inputLabel.textContent = 'Konwerter °F na °C'
//   } else if ( units == 'fahr'){
//     units = 'cels'
//     console.log(units);
//     inputLabel.textContent = 'Konwerter °C na °F'
//   }
// }

// const reset = (input) => {
//   input.value = ''
//   result.innerHTML = ''
// }

// convertBtn.addEventListener('click', convert)
// changeUnitstBtn.addEventListener('click', changeUnits)
// resetBtn.addEventListener('click', () => reset(converterInput))

// --------------------------------------Food

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')
// const p = document.querySelector('p')

// class Meal {
//   constructor(mealName, mealPrice) {
//     this.mealName = mealName;
//     this.mealPrice = mealPrice;
//   }
// }

// Meal.prototype.logInfo = function() {
//   console.log(`${this.mealName} costs ${this.mealPrice}`);
//   p.textContent = `${this.mealName} costs ${this.mealPrice}`
// }

// const meal_1 = new Meal( 'spaghetti', 35)
// const meal_2 = new Meal( 'pizza', 45)
// const meal_3 = new Meal( 'kebab', 25)

// btn1.addEventListener('click', () => meal_1.logInfo())
// btn2.addEventListener('click', () => meal_2.logInfo())
// btn3.addEventListener('click', () => meal_3.logInfo())

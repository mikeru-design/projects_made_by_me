import axios from 'axios';

const domElements = {
  eighthBallForm: eighthBallForm,
  eightBall: document.querySelector('.eightBall'),
  mssg: eighthBallForm.querySelector('.mssg'),
  answer: document.querySelector('.answer'),
};

let answer = ''
let answerType = ''
let question = ''

const url = 'https://magic-8-ball1.p.rapidapi.com/my_answer/?question=I%20will%20succeed%20%3F';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c8075c937dmshed561edd7edc113p168a32jsnb64878dfdf43',
		'X-RapidAPI-Host': 'magic-8-ball1.p.rapidapi.com'
	}
};

async function getAnswer() {
  try {
    const response = await fetch(url, options);
	  const result = await response.json();
    answer = result.answer
    answerType = result.answer_type

    if ( answerType === 'negative' ) {
      domElements.answer.classList.add('negative');
      domElements.answer.classList.remove('neutral');
      domElements.answer.classList.remove('positive');
    } else if ( answerType === 'affirmative' ){
      domElements.answer.classList.add('positive');
      domElements.answer.classList.remove('neutral');
      domElements.answer.classList.remove('negative');
    } else {
      domElements.answer.classList.add('neutral');
      domElements.answer.classList.remove('positive');
      domElements.answer.classList.remove('negative');
    }

    domElements.answer.innerHTML = `
    <p>Here is your answer to quetion: </br>" <span>${question}</span> "</p>
    <h2>${answer}</h2>`;

  } catch (error) {
    console.error(error);
  }
}

export default fortuneAnswer = () => {
  if (
    domElements.eighthBallForm.eighthBallInput.value &&
    domElements.eighthBallForm.eighthBallInput.value.slice(-1) === '?'
  ) {
    question = domElements.eighthBallForm.eighthBallInput.value;

    getAnswer()

    domElements.mssg.classList.remove('show');
    domElements.mssg.textContent = '';

    domElements.answer.classList.add('show');

    domElements.eightBall.classList.add('shake');

    domElements.eighthBallForm.reset();

    setTimeout(() => {
      domElements.eightBall.classList.remove('shake');
    }, 2000);

  } else if (
    domElements.eighthBallForm.eighthBallInput.value &&
    domElements.eighthBallForm.eighthBallInput.value.slice(-1) !== '?'
    ) {
    domElements.answer.classList.remove('show');
    domElements.mssg.classList.add('show');
    domElements.mssg.textContent = ' Question must finish with a "?" ';
  } else {
    domElements.answer.classList.remove('show');
    domElements.mssg.classList.add('show');
    domElements.mssg.textContent = ' You must type in a question ';
  }
};

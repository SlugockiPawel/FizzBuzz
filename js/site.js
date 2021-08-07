/* eslint-disable no-use-before-define */
// controller function
function handleFizzBuzzBtnClick() {
  // get user input
  const fizzValue = getFizzValue();
  const buzzValue = getBuzzValue();

  // validate user input

  // prepare table rows to display
  const tableRows = generateTableHtml(fizzValue, buzzValue);

  // display data to user
  displayFizzBuzz(tableRows);
}

// logic functions
function getFizzValue() {
  return Number(document.getElementById('fizzValue').value);
}

function getBuzzValue() {
  return Number(document.getElementById('buzzValue').value);
}

function generateTableHtml(startingValue, endingValue) {
  const numArray = generateArr(startingValue, endingValue);

  let tableRows = '';

  numArray.forEach((number) => {
    tableRows += processArrayElement(number);
  });

  return tableRows;
}

function processArrayElement(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return '<tr><td>FizzBuzz</td></tr>';
  } if (number % 3 === 0) {
    return '<tr><td>Fizz</td></tr>';
  } if (number % 5 === 0) {
    return '<tr><td>Buzz</td></tr>';
  }
  return `<tr><td>${number}</td></tr>`;
}

function generateArr(startingValue, endingValue) {
  const arr = [];

  for (let i = startingValue; i <= endingValue; i++) {
    arr.push(i);
  }

  return arr;
}

// validations performed:
// - check if eacj input is an int
// - check if each input value is in 0 - 100 range
// - check if buzz >= fizz
function validateFizzValue(fizzValue) {

}

function validateBuzzValue(buzzValue) {

}

function isBuzzGreaterThanFizz() {

}

// view functions
function displayFizzBuzz(tableRows) {
  document.getElementById('results').innerHTML = tableRows;
}

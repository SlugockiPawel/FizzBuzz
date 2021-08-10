function handleFormInputChange() {
  const alertContainer = document.getElementById('alertContainer');
  const button = document.getElementById('btnSubmit');
  const tableBody = document.getElementById('results');
  const fizzValue = getFizzValue();
  const buzzValue = getBuzzValue();
  const lowerRange = getLowerRangeValue();
  const upperRange = getUpperRangeValue();

  button.classList.remove('disabled');
  alertContainer.innerHTML = '';
  tableBody.innerHTML = '';

  try {
    validateFizzBuzzValues(fizzValue, buzzValue);
    validateRangeValues(lowerRange, upperRange);
  } catch (error) {
    button.classList.add('disabled');
    displayValidationAlert(error.message);
  }
}

// validating user input

// validations performed:
// - check if any of the user input is empty
// - check if each input is an int
// - check if range values are in 0 - 100 range
// - check if buzz >= fizz and higher range >= lower range
// - check if fizz and buzz are > 0 and < 100

function compareNumbers(higherNumber, lowerNumber) {
  return Number(higherNumber) >= Number(lowerNumber);
}

function isEmpty(input) {
  return input.length === 0;
}

function isInt(input) {
  const number = Number(input);

  return Number.isInteger(number);
}

function isZeroToHundredRange(number) {
  return number >= 0 && number <= 100;
}

function isOneToHundredRange(number) {
  return number >= 1 && number <= 100;
}

function validateFizzBuzzValues(fizzValue, buzzValue) {
  if (isEmpty(fizzValue) || isEmpty(buzzValue)) {
    throw new Error('Fizz and Buzz value cannot be Empty');
  }

  if (isInt(fizzValue) === false || isInt(buzzValue) === false) {
    throw new Error('Fizz and Buzz value have to be an Integer');
  }

  if (
    isOneToHundredRange(fizzValue) === false
    || isOneToHundredRange(buzzValue) === false
  ) {
    throw new Error('Fizz and Buzz value have to be in 1 - 100 range');
  }

  if (compareNumbers(buzzValue, fizzValue) === false) {
    throw new Error('Buzz value has to be equal or greater to Fizz Value');
  }
}

function validateRangeValues(lowerRange, upperRange) {
  if (isEmpty(lowerRange) || isEmpty(upperRange)) {
    throw new Error('Lower Range and Upper Range value cannot be Empty');
  }

  if (isInt(lowerRange) === false || isInt(upperRange) === false) {
    throw new Error('Lower Range and Upper Range value have to be an Integer');
  }

  if (
    isZeroToHundredRange(lowerRange) === false
    || isZeroToHundredRange(upperRange) === false
  ) {
    throw new Error('Lower and Upper Range value have to be in 0 - 100 range');
  }

  if (compareNumbers(upperRange, lowerRange) === false) {
    throw new Error(
      'Upper Range value has to be equal or greater to Lower Range Value'
    );
  }
}

function displayValidationAlert(message) {
  const alertContainer = document.getElementById('alertContainer');
  const alertTemplate = document.getElementById('alertTemplate');
  const templateContent = document.importNode(alertTemplate.content, true);
  const messageParagraph = templateContent.querySelector('p');

  alertContainer.innerHTML = '';
  messageParagraph.innerText = message;
  alertContainer.appendChild(templateContent);
}

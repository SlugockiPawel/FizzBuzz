/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

function handleFormInputChange() {
  const fizzValue = getFizzValue();
  const buzzValue = getBuzzValue();
  const lowerRange = getLowerRangeValue();
  const upperRange = getUpperRangeValue();

  validateFizzBuzzValues(fizzValue, buzzValue);
  validateRangeValues(lowerRange, upperRange);
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
    return alert('Fizz and Buzz value cannot be Empty');
  }

  if (isInt(fizzValue) === false || isInt(buzzValue) === false) {
    return alert('Fizz and Buzz value have to be an Integer');
  }

  if (
    isOneToHundredRange(fizzValue) === false ||
    isOneToHundredRange(buzzValue) === false
  ) {
    return alert('Fizz and Buzz value have to be in 1 - 100 range');
  }

  if (compareNumbers(buzzValue, fizzValue) === false) {
    return alert('Buzz value has to be equal or greater to Fizz Value');
  }
}

function validateRangeValues(lowerRange, upperRange) {
  if (isEmpty(lowerRange) || isEmpty(upperRange)) {
    return alert('Lower Range and Upper Range value cannot be Empty');
  }

  if (isInt(lowerRange) === false || isInt(upperRange) === false) {
    return alert('Lower Range and Upper Range value have to be an Integer');
  }

  if (
    isZeroToHundredRange(lowerRange) === false ||
    isZeroToHundredRange(upperRange) === false
  ) {
    return alert(
      'Lower Range and Upper Range value have to be in 0 - 100 range'
    );
  }

  if (compareNumbers(upperRange, lowerRange) === false) {
    return alert(
      'Upper Range value has to be equal or greater to Lower Range Value'
    );
  }
}

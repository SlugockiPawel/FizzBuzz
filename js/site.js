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

function generateTableHtml(startingValue, endingValue){
    const numArray = generateArr(startingValue, endingValue);

    let tableRows = '';

    for (const number of numArray) {
        tableRows += processArrayElement(number);
    }

    return tableRows;
}

function processArrayElement(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return `<tr><td>FizzBuzz</td></tr>`
    }else if(number % 3 === 0) {
        return `<tr><td>Fizz</td></tr>`
    }else if(number % 5 === 0){
        return `<tr><td>Buzz</td></tr>`
    }else {
        return `<tr><td>${number}</td></tr>`
    }
}

function generateArr(startingValue, endingValue){
    const arr = [];

    for (let i = startingValue; i <= endingValue; i++) {
        arr.push(i);
    }

    return arr;
}

// html input is type of 'number' therefore there is no need to validate type
// the only two validations performed:
// - check if each input value is in 0 - 100 range
// check if buzz >= fizz
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

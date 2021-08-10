//
function handleFizzBuzzBtnClick() {
  // get user input
  const fizzValue = getFizzValue();
  const buzzValue = getBuzzValue();
  const lowerValue = getLowerRangeValue();
  const upperValue = getUpperRangeValue();

  // validation is done before fizz buzz button clicked

  // prepare data to display
  const fbArray = generateFizzBuzzArray(
    fizzValue,
    buzzValue,
    lowerValue,
    upperValue
  );

  // display data to user
  displayFizzBuzz(fbArray);
}

// logic functions
function getFizzValue() {
  return document.getElementById('fizzValue').value;
}

function getBuzzValue() {
  return document.getElementById('buzzValue').value;
}

function getLowerRangeValue() {
  return document.getElementById('lowerRange').value;
}

function getUpperRangeValue() {
  return document.getElementById('upperRange').value;
}

function generateFizzBuzzArray(fizzValue, buzzValue, lowerRange, upperRange) {
  const fizzNumber = Number(fizzValue);
  const buzzNumber = Number(buzzValue);
  const lowerNumber = Number(lowerRange);
  const upperNumber = Number(upperRange);
  const arr = [];

  for (let i = lowerNumber; i <= upperNumber; i++) {
    arr.push(processfizzBuzzNumber(Number(i), fizzNumber, buzzNumber));
  }

  return arr;
}

function processfizzBuzzNumber(number, fizzValue, buzzValue) {
  if (number % fizzValue === 0 && number % buzzValue === 0) {
    return 'FizzBuzz';
  }

  if (number % fizzValue === 0) {
    return 'Fizz';
  }

  if (number % buzzValue === 0) {
    return 'Buzz';
  }

  return number.toString();
}

function processFizzBuzzNumberB(number, fizzValue, buzzValue) {
  return (
    (number % fizzValue === 0 ? 'Fizz' : '') +
      (number % buzzValue === 0 ? 'Buzz' : '') || number
  );
}

// view functions
function displayFizzBuzz(fbArray) {
  // get the table body element from the page
  const tableBody = document.getElementById('results');

  // get the template row
  const templateRow = document.getElementById('fbTemplate');

  // clear the table body before populating new data
  tableBody.innerHTML = '';

  for (let i = 0; i < fbArray.length; i += 5) {
    // copy template content without <template> tags
    const tableRow = document.importNode(templateRow.content, true);

    // grab just the <td> from the table row tag (as array)
    const rowCols = tableRow.querySelectorAll('td');
    rowCols[0].classList.add(fbArray[i]);
    rowCols[0].textContent = fbArray[i];

    rowCols[1].classList.add(fbArray[i + 1]);
    rowCols[1].textContent = fbArray[i + 1];

    rowCols[2].classList.add(fbArray[i + 2]);
    rowCols[2].textContent = fbArray[i + 2];

    rowCols[3].classList.add(fbArray[i + 3]);
    rowCols[3].textContent = fbArray[i + 3];

    rowCols[4].classList.add(fbArray[i + 4]);
    rowCols[4].textContent = fbArray[i + 4];

    tableBody.appendChild(tableRow);
  }
}

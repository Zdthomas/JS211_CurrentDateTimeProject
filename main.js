// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

let firstNum = '';
let secondNum = '';
let operatoration = '';

// Write a JavaScript program to convert a number to a string.
function saveFirstNumber(num) {
  console.log(num)
  firstNum = parseInt(num);
  console.log(firstNum)
}

function saveSecondNumber (num) {
  console.log(num)
  secondNum = parseInt(num);
  console.log(secondNum)
}
// Write a JavaScript program to convert a string to the number.



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.

const add = (firstNum, secondNum) => {
  const sum = firstNum + secondNum
  return sum}

const changeOperation = (chosenOperation) => {
    operation = chosenOperation
    console.log(operation)
  }

  const putResultInElement = (operationResults) => {
    document.getElementById("result").innerHTML = "Results: " + operationResults
  
  } 
  
  const equals = () => {
    putResultInElement(add(firstNum, secondNum))
  }
// Write a JavaScript program that runs only when 2 things are true.

// let value1 = '';

// let value2 = '';

const form = document.querySelector('#values');

const testInput = document.querySelector('.value1');
 
const testInput2 = document.querySelector('.value2');

const testValue = document.querySelector('#testResults');

form.addEventListener ('submit', function(event) {
  event.preventDefault();
  
  console.log(typeof testInput.value)

  if (!isFalsy(testInput.value) && !isFalsy(testInput2.value)) {
    testResults.textContent = `${testInput.value} is a truthy value. ${testInput2.value} is a truthy value.`
    

  } else if (isFalsy(testInput.value) && !isFalsy(testInput2.value)) {
    testResults.textContent = `${testInput.value} is a false value.` + ` ` + `${testInput2.value} is truthy value.`
    // testResults.textContent = `${testInput2.value} is truthy value.`
  } else if (!isFalsy(testInput.value) && isFalsy(testInput2.value)) {
    testResults.textContent = `${testInput.value} is a truthy value.` + ` ` + `${testInput2.value} is a false value.`
  } else {
    testResults.textContent = `${testInput.value} is a false value.` + ` ` + `${testInput2.value} is a false value.`
  }


});




function isFalsy(value) {
  if (value === 'undefined') {
    return true;
  } else if (value === 'null') {
    return true;
  } else if (value === '0') { 
    return true;
  } else if (value === '') {
    return true;
  } else if (value === 'NaN') {
    return true
  } else {
    return false
  }
}


// testinput typeof for datatype (typeof testInput/ testinput.value)



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

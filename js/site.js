// get the vales from the page
// start or controller function
function getValues(){
   // get values from the page
   let startValue = document.getElementById("startValue").value;
   let endValue = document.getElementById("endValue").value;

   // we need to validate our input
   // parse into Integers
   startValue = parseInt(startValue);
   endValue = parseInt(endValue);

    if ((Number.isInteger(startValue) && Number.isInteger(endValue)) && startValue < endValue && endValue <= 200) {
        // we call generateNumbers
        let numbers = generateNumbers(startValue,endValue);
         // we call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers and the start value must be less than the end value. Also the end value is restricted to 200 or lower");
    }  
}

// generate numbers from startValue to the endValue
// logic function
function generateNumbers(sValue, eValue){

    let numbers = [];

    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);    
    }
    
    return numbers;
}

// display the numbers and the even numbers are bold.
// display or view function
function displayNumbers(numbers){
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        if (number % 2 == 0) {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;  
        } else {
           templateRows += `<tr><td>${number}</td></tr>`; 
        }
    }
    

    document.getElementById("results").innerHTML = templateRows;

}
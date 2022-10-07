
// The one line solution
// filters anything non integer then maps it to a new funtion that is console logged 
const sortBigO = (elementAmounts) => {

    console.log(elementAmounts.filter(item => Number.isInteger(item)).map(item => item * Math.log(item)));
    
}

//The specified solution
const sortBigOLong = (elementAmounts) => {
    // This can be extracted into a loop as well
    elementAmounts = elementAmounts.filter(item => Number.isInteger(item));

    for(let i = 0; i < elementAmounts.length; i++){
        elementAmounts[i] = elementAmounts[i] * Math.log(elementAmounts[i]);
    }

   return console.log(elementAmounts);
}
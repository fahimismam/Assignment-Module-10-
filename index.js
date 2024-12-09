// ANSWER TO THE QUESTION NO: 01

 function calculateDifference(x,y){
    return (x - y);
 }
 let result =(calculateDifference(13,3));
 console.log(result);


// ANSWER TO THE QUESTION NO: 02

 function isOdd(number){
    return number % 2 !== 0;
 }
 console.log(isOdd(19));



// ANSWER TO THE QUESTION NO: 03

 function findMin(array) {
    return Math.min(...array);
}
 let numbers= [10,1,19,2,94,0,36];
 console.log(findMin(numbers));


 // ANSWER TO THE QUESTION NO: 04

function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}
    console.log(filterEvenNumbers([3, 5, 1, 8, 2]));



 // ANSWER TO THE QUESTION NO: 05

 function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}

console.log(sortArrayDescending([6, 1, 10, 17, 9, 19]));


// ANSWER TO THE QUESTION NO: 06

function lowercaseFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Js"));


// ANSWER TO THE QUESTION NO: 07

function findAverage(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum / numbers.length;
}

console.log(findAverage([1, 2, 3, 4, 5]));


// ANSWER TO THE QUESTION NO: 08

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    if (year % 100 === 0) {
        return false; 
    }
    if ( year % 400 === 0) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2000)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2024)); 
console.log(isLeapYear(2021)); 
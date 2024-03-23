// Map filter

//Lets say that we have an array:

const numList = [1, 2, 3, 4, 5];

const secondNumList = [6, 7, 8, 9, 10];

// creating new list using Map Filter:

let squaredNumList = numList.map(function (num){
    return num * num;
});
console.log('The first list squared: ',squaredNumList);
console.log(" ");

// another way of creating the same list using arrow function:

let squareNumList = secondNumList.map(num => {
    return num * num;
});
console.log('The second list squared: ',squareNumList);

console.log(" ");
let addNum = secondNumList.map(num => {
    return num + 1; // [7, 8, 9, 10, 11]
});
console.log('Adding one to the second list: ',addNum);
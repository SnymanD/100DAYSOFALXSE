// The start of Iterators in JavaScript, I will be doing separate files for different Iterators.
// The forEach iterator

//Lets say that we have a list or an array.

const daysOfWeek = ['Mon', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Lets add Sunday to the list:
daysOfWeek.push('Sunday');
console.log(daysOfWeek);

// Fix Mon to be Monday
daysOfWeek[0] = 'Monday';
console.log(daysOfWeek);

// forEach Iterator
// Printing days of the week one by one:
let days = daysOfWeek.forEach(function (day){
    console.log(day);
})

console.log(" ");

// Another way of printing days:
let day = daysOfWeek.forEach(day => console.log(day));
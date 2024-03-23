// The filter iterator
//Using the same list I used on forEach Iterator.

const daysOfWeek = ['Mon', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Lets add Sunday to the list:
daysOfWeek.push('Sunday');

// Fix Mon to be Monday
daysOfWeek[0] = 'Monday';

// filter Iterator: Filtering days of the week
let dayLength = daysOfWeek.filter(function (day) {
    if (day.length > 6) {
        return day;
    }
});
console.log(`Filtering for the first time: ${dayLength}`);
console.log(" ")
// Using arrow function to filter
// Wednesday length is greater than 7 but for our arrow function lets reassign a new string to it to make it less
//So that for our arrow function it wont be printed:
daysOfWeek[2] = 'Wed';

let daysLength = daysOfWeek.filter( day => {
    if (day.length > 6) {
        return day;
    }
});
console.log(`Filtering for the second time: ${daysLength}`);
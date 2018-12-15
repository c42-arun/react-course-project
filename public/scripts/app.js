"use strict";

// ES 5 style function def in object
// const multiplier = {
//     numbers: [1,2,3,4,5],
//     multiplyBy: 2,
//     multiply: function() {
//         return this.numbers.map(n => n * this.multiplyBy);
//     }
// }

// ES6 style function def in object
// ES5 style function body
const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 2,
    //multiply: () => this.numbers.map(num => num * this.multiplyBy)
    multiply() {
        return this.numbers.map(n => n * this.multiplyBy);
    }
}

// console.log(multiplier.multiply());


// const user = {
//     name: 'Rishi',
//     cities: ['London', 'New York', 'Bangalore'],
//     printLivedIn: function() {
//         console.log(this.name); // 'this' refers to the object the function bound to (which is the user)
//         console.log(this.cities);

//         // ERROR!
//         this.cities.forEach(function(city) {
//             console.log(this.name + ' lived in ' + city); // the function is bound to nothing, so 'this' is 'undefined'
//         })
//     }
// }

const user = {
    name: 'Rishi',
    cities: ['London', 'New York', 'Bangalore'],
    printLivedIn: function() {
        console.log(this.name); // 'this' refers to the object the function bound to (which is the user)
        console.log(this.cities);

        // SUCCESS!
        this.cities.forEach(city => {
            console.log(this.name + ' lived in ' + city); // the arrow function captures the context where it was created (user), so 'this' would refer to user
        })
    }
}

console.log(user.printLivedIn());
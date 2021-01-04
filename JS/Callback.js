// Callbacks

var years = [1995, 1998, 2000, 2005, 2008];

function arrayCalc(arr, cb){
    let newAge = [];
    for (var i = 0; i< arr.length; i++) {
        newAge.push(cb(arr[i]));
    }
    return newAge;
}

function calculateAge(year){
    return 2020 - year
}

let ages = arrayCalc(years, calculateAge)
console.log(ages)


// Arguments
const foo = () => {
    console.log('foobar')
}

const sayHello = () => {
    return 'Hello!'
}

const greeting = (helloMessage, name) => {
    console.log(helloMessage() + name);
}

greeting(sayHello, 'JavaScript!');

// IIFE

(addTogether = () => {
    var x = 20;
    var y = 20;
    var answer = x + y;
    console.log(answer)
})(); // IMPORTANT!!!


// Closures

let outer = () => {
    var b = 10;
    let inner = () => {
        var a = 20
        console.log(a+b)
    }
    return inner
}

// Currying

var years = [1990, 1965, 1937, 2005, 1998]

let arrayCalc1 = (arr, fn) => {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes
}

let calculateAge1 = (el) => {
    return 2016 - el;
} 

let isFullAge = (limit, el) => {
    return el >= limit;
}

var ages1 = arrayCalc1(years, calculateAge1);
var fullJapan = arrayCalc1(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan)
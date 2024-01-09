//!---------Task1---------

const nums1 = [5, 6, 92, 47, 12, -18, 33, 8];
let sum = nums1.reduce(sumNumber);

function sumNumber(total, value) {
    return total + value;
}

console.log(sum);


//!---------Task2---------

const names = ['jack', 'sarah', 'mary', 'joey', 'chris', 'samantha'];
const namesObject = [];

names.forEach((name, index) => {
    let capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    let objectString = {
        name: capitalized, nameLength: name.length
    };
    namesObject.push(objectString);
});
console.log(namesObject);


//!---------Task3---------

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numsRes = [];

nums2.forEach((number, square, cube) => {
    let a = number ** 2;
    let b = number ** 3;
    let objectNumber = {
        number: number, square: a, cube: b
    };
    numsRes.push(objectNumber);
});
console.log(numsRes);


//!---------Task3---------

const numberRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedNumberRow = [];

numberRow.forEach(reversedNumber);

function reversedNumber(a) {
    reversedNumberRow.unshift(a);
}

console.log(reversedNumberRow);


//!---------Task4---------

const cars = [
    {
        make: 'BMW',
        color: 'grey',
        price: 10000
    },
    {
        make: 'Mercedes-Benz',
        color: 'black',
        price: 15000
    },
    {
        make: 'Honda',
        color: 'blue',
        price: 8000
    },
    {
        make: 'Ferrari',
        color: 'red',
        price: 50000
    }
    ];

cars.forEach((car) => {
    console.log(`This is ${car.color} ${car.make}. It costs ${car.price}€.`)
});
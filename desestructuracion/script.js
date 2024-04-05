/*PREDECIR LA DESESTRUCTURACIÓN
Para los siguientes cinco bloques de código, predice la salida. Si una línea de código pasa por un error, indica el error.*/

// PROBLEMA 1 _____________________________________________________________________
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Output: Tesla
console.log(otherRandomCar) // Output: Mercedes

// PROBLEMA 2 _____________________________________________________________________
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); // ReferenceError: name is not defined
console.log(otherName); // Output: Elon

// PROBLEMA 3 _____________________________________________________________________
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  // no hay password en person
//Predict the output
console.log(password); // Output: 12345
console.log(hashedPassword); // Output: undefined

// PROBLEMA 4 _____________________________________________________________________
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // 2
const [,,,second] = numbers; // 5
const [,,,,,,,,third] = numbers; // 2
//Predict the output
console.log(first == second); // Output: false
console.log(first == third); // Output: true

// PROBLEMA 5 _____________________________________________________________________
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // Output: value
console.log(secondKey); // Output: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Output: 1
console.log(willThisWork); // Output: 5


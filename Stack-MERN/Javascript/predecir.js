/////////////// 1 //////////////

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

//Predict the output

console.log(randomCar) 
// Imprime 'Tesla' //
console.log(otherRandomCar)
// Imprime 'Mercedes' //


/////////////// 2 //////////////

const employee = {
    name: 'Elon',
  //othername = 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

//Predict the output

console.log(name); 
// Imprime undefined //
console.log(otherName); 
// Imprime 'Elon' //

/////////////// 3 //////////////

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  

//Predict the output

console.log(password); 
// Imprime '12345'
console.log(hashedPassword); 
// Imprime undefined

 
/////////////// 4 //////////////

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; 
const [,,,second] = numbers; 
const [,,,,,,,,third] = numbers; 
// first=2 second=5 third=2

//Predict the output

console.log(first == second); 
// Imprime false
console.log(first == third); 
// Imprime true


/////////////// 5 //////////////

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest; 
const [ ,willThisWork] = secondKey; 

//Predict the output

console.log(key); 
// Imprime 'value'
console.log(secondKey); 
// Imprime [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
// Imprime 1
console.log(willThisWork); 
// Imprime 5
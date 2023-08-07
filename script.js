// Strings

// const name = 'John';
// const age = 30;

// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age)
// Template String
/*console.log(`My name is ${name} and I am ${age}`)

console.log('Hello')

const s = 'technology, computers, it, code';

console.log(s.split(', '));*/

// Arrays - variables that hold multiple values

/*const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('mangoes');

fruits.unshift('strawberries');

fruits.pop('mangoes');

console.log(Array.isArray('Hello'));

console.log(fruits.indexOf('oranges'));

console.log(fruits);*/

// Object Literals
/*const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// const { firstName, lastName, address: { city }} = person;
// console.log(city)

person.email = 'john@gmail.com'

console.log(person)*/

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// console.log(todos[1].text);

// JSON

/*const todoJSON = JSON.stringify(todos);

console.log(todoJSON)*/

// LOOPS
// FOR LOOPS
// for(let todo of todos) {
//     console.log(todo.id)
// }

// forEach, map, filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.iscompleted === true;
// }).map(function(todo) {
//     return todo.text
// })

// While Loops
// let i = 0;
// while(i < 10) {
//     console.log(`While loop Number: ${i}`);
//     i++;
// }

// Conditionals
// const x = 6;
// const y = 11;

// if(x > 5 && y > 10 ) {
//     console.log('x is more than 5 or y is more than 10');
// }

// Ternary Operators
// const x = 9;

// const color = x > 10 ? 'red' : 'blue';

// // console.log(color)

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default: 
//         console.log('color is not red or blue')
//     break;
// }

// functions
// const addNums = num1 => num1 + 5;

// console.log(addNums(5));

// Object oriented programming
// Constructor function
// function Person (firstName, lastname, dob) {
//     this.firstName = firstName;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
// };

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastname}`
// }

// Class: Syntactic sugar
// class Person {
//     constructor(firstName, lastname, dob) {
//         this.firstName = firstName;
//         this.lastname = lastname;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastname}` 
//     }
// }

// // Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980')
// const person2 = new Person('Mary', 'Smith', '3-6-1970')

// console.log(person2.getFullName())
// console.log(person1)

// DOM 
// Single element selector
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element selector
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove()
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'

// Events
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style. background = '#ccc';
//     // document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });

const myform = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 2000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li);

        // Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }
}











// Arrays
// const fruits = ['apples', 'oranges', 'pears'];

// fruits[3] = 'grapes';

// fruits.push('mangos');

// fruits.unshift('strawberries');

// fruits.pop();

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'))

// console.log(fruits);

// Object Literals
const person = {
    firstName: 'John',
    lastname: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// console.log(person.firstName, person.lastname);
// console.log(person.hobbies[1])
// console.log(person.address.city)

//destructuring 

// const { firstName, lastName, address: { city }} = person;

// console.log(city)

// person.email = 'john@gmail.com';

// console.log(person)

// array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

// // console.log(todos)
// // console.log(todos[1].text);

// // converts JS array into JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

// For loop
// 3 parameters: assignment of the variable/iterator, condition, increment
// for(let i = 0; i < 10; i++) {
//  console.log(`For Loop Number: ${i}`) // template string, remember?
// }

// // While loop
// let i = 0;
// while(i < 10) {
//     console.log(`While Loop Number: ${i}`)
//     i++;
// }

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text)
//    }

// for of loop
// for(let todo of todos) {
//     console.log(todo.id);
// }

// forEach, map, filter array methods

// function is callback function where you put the variable you want to loop through
// forEach
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// map
// actually returns a map
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText);

//filter
// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })

// console.log(todoCompleted);

//conditionals
// const x = 6;
// const y = 11;

// if (x > 5 && y > 10) {
//     console.log('x is more than 5 and y is more than 10');
// } 

// ternary operator
// const x = 9;
//                //if it's true: if it's not true
// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// switch operator
// switch(color) {
//     case 'red':
//         console.log('color is red')
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue')
//         break;
// }

// functional programming
// function addNums1(num1 = 1, num2 = 1) {
//     return num1 + num2;
// }
// console.log(addNums1(5, 5));

// JS version of lambda functions?
// const addNums2 = (num1 = 1, num2 = 1) => num1 + num2;

// console.log(addNums2(5,5));

// //one variable
// const addNums3 = num1 => num1 + 5;

// console.log(addNums3(5));

// // can also use to loop through arrays
// todos.forEach((todo) => console.log(todo));

// OOP
// Constructor function
// function Person(firstName, lastName, dob) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.dob = new Date(dob);
// //  this.getBirthYear = function() {
// //     return this.dob.getFullYear();
// //  }
// //  this.getFullName = function() {
// //     return `${this.firstName} ${this.lastName}`;
// //  }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// Class
// Syntactic version of the prototype stuff above
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
// Looks like object liberal but is prefixed with the actual type of the object
// console.log(person1)
// console.log(person2.firstName);
// console.log(person2.dob.getFullYear());
// console.log(person2.dob);
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person1)

// shows all the elements in the webpage
// console.log(window);

// Selector for single element
const form = document.getElementById('my-form');
// console.log(form)

// Query selector
// console.log(document.querySelector('h1'));

// usually use querySelector and querySelectorAll
// Multiple element selector
// console.log(document.querySelectorAll('.item')); //returns nodelist
// console.log(document.getElementsByClassName('item')); //returns HTMLcoolection
// console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
ul.remove();

// remove item 3
// ul.lastElementChild.remove()

// change the text of item 1 to "Hello"
// ul.firstElementChild.textContent = 'Hello';

// change the text of item 2 to "Brad"
// children is a nodelist, so you can select item by index
// ul.children[1].innerText = 'Brad';

// can add HTML using JS by innterHTML
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// These changes will happen when you click the submit button or when you mouseover, if you replace 'click' with that. other events in documentation
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     // console.log(e.target.id);
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const aliasInput = document.querySelector('#alias');
const passwordInput = document.querySelector('#password');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    console.log(aliasInput.value);
    if (aliasInput.value === '' || passwordInput.value === '') {
        // alert('Please enter fields');

        // makes the message red, based off of the css
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        
        // Makes the error message go away in 3 seconds (represented by the 3000)
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`$
        {aliasInput.value} : ${passwordInput.value}`));
        
        userList.appendChild(li);

        // Clear Fields
        aliasInput.value = '';
        passwordInput.value = ''
    }
}

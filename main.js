'use strict';

const function1 = (str) => {
  return `Hola! ${str}`;
};

const function2 = (str) => {
  return `Adios! ${str}`;
};

const callBackFunction = (str, func) => {
  return func(str);
};

// console.log(callBackFunction('1', function1));
// console.log(callBackFunction('2', function2));

const myBtn = document.getElementById('main-btn');
// console.log(myBtn);

const otherBtn = document.querySelector('#main-btn');
// console.log(otherBtn);

// div.addEventListener(click, () => {
//   console.log('clicked button!');
// });

const youClickedMe = () => {
  console.log('You clicked me!');
};

otherBtn.addEventListener('click', youClickedMe);

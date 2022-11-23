'use strict';

let createbtn = document.querySelector('.createbtn');
let shapebtn = document.querySelector('.shapebtn');
let colorbtn = document.querySelector('.colorbtn');
let mainbox = document.querySelector('.mainbox');
let shape = document.querySelectorAll('.shape-content ul li');
let color = document.querySelectorAll('.color-content ul li');
let items = document.querySelectorAll('.item');
for (let i = 0; i < shape.length; i++) {
    shape[i].addEventListener('click', function() {
        shapebtn.innerHTML = shape[i].innerHTML;
    });
};


for(let i = 0; i < color.length; i++) {
    color[i].addEventListener('click', function() {
        colorbtn.innerHTML = color[i].innerHTML;  
    });
};

let arr = [];
for(let i = 0; i < items.length; i++) {
    arr.push(items[i]);
};

console.log(arr);

let i = 23;
createbtn.addEventListener('click', function() {
    let shape = shapebtn.innerHTML;
    let color = colorbtn.innerHTML;
    
    if(shape == 'Circle') {
        arr[i].style.borderRadius = '50%';
    } else {
        arr[i].style.borderRadius = ' ';
    };

    if(color == 'Green') {
        arr[i].style.backgroundColor = '#9f0';
    } else if(color == 'Purple') {
        arr[i].style.backgroundColor = '#90f';
    } else if(color == 'Pink') {
        arr[i].style.backgroundColor = '#f09';
    } else if(color == 'Blue') {
        arr[i].style.backgroundColor = '#0f9';
    } else {
        arr[i].style.backgroundColor = '#f90';
    };
    i = i - 1;
})
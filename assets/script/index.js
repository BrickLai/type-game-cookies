'use strict';

let addBtn = document.querySelector('.addbtn');
let contacts = document.querySelector('.contactsbox');
let form = document.querySelector(".form");
let arr = [];
let arr2 = [];

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
addBtn.addEventListener('click', function() {
    let inputName = document.querySelector(".inputname").value.trim() ;
    let inputCity = document.querySelector(".inputcity").value.trim() ;
    let inputEmail = document.querySelector(".inputemail").value.trim();
    let contact = document.createElement('div');
    arr.push(inputName);
    arr.push(inputCity);
    arr.push(inputEmail);
    

    if(inputName.length === 0) {
        alert('Name is required');
    } else if (inputCity.length === 0) {
        alert('City is required');
    } else if (inputEmail.length === 0) {
        alert('Email is  required')
    } else if (!emailRegex.test(inputEmail)) {
        alert('A valid email is  required')
    } else {
      for(let i = 0; i < arr.length; i++) {
        contact.innerHTML = `Name:${arr[i - 2]}<br>City:${arr[i - 1]}<br>Email:${arr[i]}`;
        contacts.insertBefore(contact, contacts.children[0]);
       } 
    }
})

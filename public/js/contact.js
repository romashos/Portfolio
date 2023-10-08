//contact.js
// Sofiia Romashova
// 301303223
// October 8, 2023

let button = document.getElementById("button");
button.addEventListener('click', submit);

const myTimeout = setTimeout(submit, 7000);

function submit() {
    // Selecting the input element and storing its value as a variable
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let co = document.getElementById("company").value;
    let subject = document.getElementById("subject").value;

    window.location.href="http://127.0.0.1:5500/views/home.html";
    // alert("function mechanism works!");
  }

  function myStopFunction() {
    clearTimeout(myTimeout);
  }


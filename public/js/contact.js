//contact.js
// Sofiia Romashova
// 301303223
// October 8, 2023

let button = document.getElementById("button");
button.addEventListener('click', submit);

    const myTimeout = setTimeout(submit, 500);

function submit() {
    // Selecting the input element and storing its value as a variable
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let co = document.getElementById("company").value;
    let subject = document.getElementById("subject").value;

    // redirect to homepage
    window.location.href = "/home";

    function myStopFunction() {
    clearTimeout(myTimeout);
    }
  }



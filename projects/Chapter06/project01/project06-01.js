"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Tyson Whelan
      Date:   Feb 23 2024

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", () => {
      if (pwd.validity.patternMismatch) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      } else if (pwd.value !== pwd2.value) {
            pwd.setCustomValidity(""); // Problem where the first validity check would persist even after fixing the error
            pwd2.setCustomValidity("Your passwords must match");
      } else {
            pwd.setCustomValidity("");
            pwd2.setCustomValidity("");
      }
})
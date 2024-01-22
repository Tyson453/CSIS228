/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Tyson Whelan
      Date:   Jan 22 2024

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degreesF) {
  let degreesC = (degreesF - 32) / 1.8
  return degreesC
}

function CelsiusToFahrenheit(degreesC) {
  let degreesF = (degreesC * 1.8) + 32
  return degreesF
}

function fahrenheitChanged() {
  let degreesF = document.getElementById('fValue').value;
  let degreesC = FahrenheitToCelsius(degreesF);
  document.getElementById('cValue').value = Math.round(degreesC * 100) / 100;
}

function celsiusChanged() {
  let degreesC = document.getElementById('cValue').value;
  let degreesF = CelsiusToFahrenheit(degreesC);
  document.getElementById('fValue').value = Math.round(degreesF * 100) / 100;
}

/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Tyson Whelan
      Date:   Jan 22 2024

      Filename: js02.js
 */

const PHOTOGRAPHER_COST_PER_HOUR = 100;
const MEMORY_BOOK_COST = 350;
const REPRODUCTION_RIGHTS_COST = 1250;
const TRAVEL_COST_PER_MILE = 2;

// setup the form when the page loads
window.addEventListener("load", setupForm);


// set the form's default values
function setupForm() {
  document.getElementById("photoNum").value = 1;
  document.getElementById("photoHrs").value = 2;
  document.getElementById("makeBook").checked = false;
  document.getElementById("photoRights").checked = false;
  document.getElementById("photoDist").value = 0;

  document.getElementById("photoNum").onchange = getEstimate;
  document.getElementById("photoHrs").onchange = getEstimate;
  document.getElementById("makeBook").onchange = getEstimate;
  document.getElementById("photoRights").onchange = getEstimate;
  document.getElementById("photoDist").onchange = getEstimate;

  getEstimate()
}

// Get the price estimate
function getEstimate() {
  let totalCost = 0;
  let photographers = document.getElementById("photoNum").value;
  let hours = document.getElementById("photoHrs").value;
  let distance = document.getElementById("photoDist").value;
  let memoryBook = document.getElementById("makeBook").checked;
  let reproductionRights = document.getElementById("photoRights").checked;

  totalCost += photographers * hours * PHOTOGRAPHER_COST_PER_HOUR;
  totalCost += photographers * distance * TRAVEL_COST_PER_MILE
  totalCost += memoryBook * MEMORY_BOOK_COST;
  totalCost += reproductionRights * REPRODUCTION_RIGHTS_COST;

  document.getElementById("estimate").innerHTML = "$" + totalCost;
}

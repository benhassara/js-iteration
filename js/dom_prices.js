/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

var priceAns = document.getElementById('ans');
// var nameAns = document.getElementById('name-ans');

// var btnAllNames = document.getElementById('all-names');
// btnAllNames.setAttribute('onclick', "printNames(names.show(names.all()))");

var btnSumAll = document.getElementById('sum-all');
btnSumAll.setAttribute('onclick', "priceAns.innerHTML=price.sumAll()");

var btnCountSel = document.getElementById('count-selected');
btnCountSel.setAttribute('onclick', "priceAns.innerHTML=price.countSelected(document.getElementsByTagName('option'))");

var btnSumSel = document.getElementById('sum-selected');
btnSumSel.setAttribute('onclick', "priceAns.innerHTML=price.sumSelected(price.grabSelected())");

var btnAvgAll = document.getElementById('average-all');
btnAvgAll.setAttribute('onclick', "priceAns.innerHTML=price.avgAll()");

var btnAvgSel = document.getElementById('average-selected');
btnAvgSel.setAttribute('onclick', "priceAns.innerHTML=price.avgSelected(price.grabSelected())");

// var btnAllNames = document.getElementById('all-names');
// btnAllNames.setAttribute('onclick', "printNames(names.show(names.all()))");

// function printNames(elems) {
//   //elems is an array of li elements
//   //parent is element to add them to
//   for (var i = 0; i < elems.length; i++) {
//     nameAns.appendChild(elems[i]);
//     console.log(elems[i]);
//   }
// }

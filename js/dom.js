/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

var ansdiv = document.getElementById('ans');

var btnSumAll = document.getElementById('sum-all');
btnSumAll.setAttribute('onclick', "ansdiv.innerHTML=price.sumAll()");

var btnCountSel = document.getElementById('count-selected');
btnCountSel.setAttribute('onclick', "ansdiv.innerHTML=price.countSelected(document.getElementsByTagName('option'))");

var btnSumSel = document.getElementById('sum-selected');
btnSumSel.setAttribute('onclick', "ansdiv.innerHTML=price.sumSelected(price.grabSelected())");

var btnAvgAll = document.getElementById('average-all');
btnAvgAll.setAttribute('onclick', "ansdiv.innerHTML=price.avgAll()");

var btnAvgSel = document.getElementById('average-selected');
btnAvgSel.setAttribute('onclick', "ansdiv.innerHTML=price.avgSelected(price.grabSelected())");

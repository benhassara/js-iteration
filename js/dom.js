/*

Hints for the first problem:

  1. Find the button with the ID of `sum-all`
  2. Add an event listener that:
    - finds the select element by name (use getElementsByName)
    - passes all of its options to the `sum` function defined in `logic.js`
    - takes the value returned by the `sum` function and displays it on the page

*/

function sumAll() {
  var valElems = document.getElementsByTagName('option');
  var allVals = [];
  for (var i = 0; i < valElems.length; i++) {
    allVals.push(parseInt(valElems[i].value));
  }
  return sum(allVals);
}

var ansdiv = document.getElementById('ans');

var btnSumAll = document.getElementById('sum-all');
btnSumAll.setAttribute('onclick', "document.getElementById('ans').innerHTML=sumAll()");

var btnCountSel = document.getElementById('count-selected');
btnCountSel.setAttribute('onclick', "ansdiv.innerHTML = countSelected(document.getElementsByTagName('option'))");

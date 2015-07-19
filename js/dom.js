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

function avgAll() {
  var elems = document.getElementsByTagName('option').length;
  return sumAll() / elems;
}

function avgSelected(elems) {
  return sumSelected(elems) / elems.length;
}

function sumSelected(elems) {
  var vals = [];
  for (var i = 0; i < elems.length; i++) {
    vals.push(parseInt(elems[i].value));
  }
  return sum(vals);
}

function grabSelected() {
  var all = document.getElementsByTagName('option');
  var selected = [];
  for (var i = 0; i < all.length; i++) {
    if (all[i].selected === true)
      selected.push(all[i]);
  }
  return selected;
}

var ansdiv = document.getElementById('ans');

var btnSumAll = document.getElementById('sum-all');
btnSumAll.setAttribute('onclick', "ansdiv.innerHTML=sumAll()");

var btnCountSel = document.getElementById('count-selected');
btnCountSel.setAttribute('onclick', "ansdiv.innerHTML=countSelected(document.getElementsByTagName('option'))");

var btnSumSel = document.getElementById('sum-selected');
btnSumSel.setAttribute('onclick', "ansdiv.innerHTML=sumSelected(grabSelected())");

var btnAvgAll = document.getElementById('average-all');
btnAvgAll.setAttribute('onclick', "ansdiv.innerHTML=avgAll()");

var btnAvgSel = document.getElementById('average-selected');
btnAvgSel.setAttribute('onclick', "ansdiv.innerHTML=avgSelected(grabSelected())");

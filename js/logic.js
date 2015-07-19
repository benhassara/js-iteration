/*

Hints for the first problem:

  1. Define a function that:
    - is assigned to a variable named `sum`
    - has one parameter named `options`
    - returns the calculated sum of all of the values of all of the options passed in

NOTE: use a `for` loop to make this happen.

*/
function sum(options) {
  var sum = 0;
  for (var i = 0; i < options.length; i++) {
    sum += options[i];
  }
  return sum;
}

function countSelected(elems) {
  var count = 0;
  for (var i = 0; i < elems.length; i++) {
    if (elems[i].selected === true)
      count++;
  }
  return count;
}

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

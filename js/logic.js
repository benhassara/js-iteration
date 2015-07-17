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

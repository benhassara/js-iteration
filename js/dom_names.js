var nameAns = document.getElementById('name-ans');

var btnAllNames = document.getElementById('all-names');
btnAllNames.setAttribute('onclick', "printNames(names.show(names.all()))");

var btnFirstNames = document.getElementById('first-names');
btnFirstNames.setAttribute('onclick', "printNames(names.show(names.firstNames()))");

var btnLastNames = document.getElementById('last-names');
btnLastNames.setAttribute('onclick', "printNames(names.show(names.lastNames()))");

var btnWithLengths = document.getElementById('names-with-lengths');
btnWithLengths.setAttribute('onclick', "printNames(names.show(names.withLengths()))");

function printNames(elems) {
  //elems is an array of li elements
  //parent is element to add them to
  for (var i = 0; i < elems.length; i++) {
    nameAns.appendChild(elems[i]);
    console.log(elems[i]);
  }
}

var price = {
  sum: function(nums) {
    //nums is an array of computable numbers
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
    return sum;
  },
  countSelected: function(elems) {
    //elems is an array of elements retrieved from DOM
    var count = 0;
    for (var i = 0; i < elems.length; i++) {
      if (elems[i].selected === true)
        count++;
    }
    return count;
  },
  sumAll: function() {
    //grabs all elements in table and returns the sum
    var valElems = document.getElementsByTagName('option');
    var allVals = [];
    for (var i = 0; i < valElems.length; i++) {
      //extract the values
      allVals.push(parseInt(valElems[i].value));
    }
    return price.sum(allVals);
  },
  avgAll: function() {
    var elems = document.getElementsByTagName('option').length;
    return this.sumAll() / elems;
  },
  avgSelected: function(elems) {
    //elems is an array of elements retrieved from DOM
    return this.sumSelected(elems) / elems.length;
  },
  sumSelected: function(elems) {
    //elems is an array of elements retrieved from DOM
    var vals = [];
    for (var i = 0; i < elems.length; i++) {
      vals.push(parseInt(elems[i].value));
    }
    return this.sum(vals);
  },
  grabSelected: function() {
    //return an array of elements that have been selected
    var all = document.getElementsByTagName('option');
    var selected = [];
    for (var i = 0; i < all.length; i++) {
      if (all[i].selected === true)
        selected.push(all[i]);
    }
    return selected;
  }
};

var names = {
  all: function() {
    return document.getElementsByClassName("all-names")[0].value.split("\n");
  },
  show: function(namesArr) {
    //namesArr is an array of names as strings
    var elems = [];
    for (var i = 0; i < namesArr.length; i++) {
      var nli = document.createElement('li');
      nli.innerHTML = namesArr[i];
      elems.push(nli);
    }
    return elems;
  },
  firstNames: function() {
    var fulls = this.all();
    var firsts = [];
    for (var i = 0; i < fulls.length; i++) {
      var space = fulls[i].indexOf(" ");
      firsts.push(fulls[i].slice(0, space));
    }
    return firsts;
  },
  lastNames: function() {
    var fulls = this.all();
    var lasts = [];
    for (var i = 0; i < fulls.length; i++) {
      var space = fulls[i].indexOf(" ");
      var last = fulls[i].slice(space + 1);
      if (last.indexOf(" ") !== -1)
        lasts.push(last.slice(0, last.indexOf(" ")));
      else
        lasts.push(last);
    }
    return lasts;
  },
  withLengths: function() {
    var names = this.all();
    var out = [];
    for (var i = 0; i < names.length; i++) {
      var spaces = 0;
      var current = names[i];
      var chars = names[i].length
      for (var c = 0; c < current.length; c++) {
        if (current[c] === " ")
          spaces++;
      }
      out.push(current + ", " + (chars - spaces) + " characters");
    }
    return out;
  }
}

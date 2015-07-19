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

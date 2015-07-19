var priceAns = document.getElementById('ans');

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

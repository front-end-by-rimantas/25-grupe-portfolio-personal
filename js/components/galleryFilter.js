filterSelection("all");
function filterSelection(a) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (a == "all") a = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(a) > -1) addClass(x[i], "show");
  }
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var filterContainer = document.getElementById("filters");
var fltrs = filterContainer.getElementsByClassName("filterDiv");
for (var i = 0; i < fltrs.length; i++) {
  fltrs[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

export default filterSelection;

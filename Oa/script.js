function clicked(element) {
    var allCells = document.getElementsByTagName("td");
    for (var i = 0; i < allCells.length; i++) {
      allCells[i].classList.remove("clicked");
    }
    element.parentNode.classList.add("clicked");
  }
  
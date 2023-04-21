let data = sessionStorage.getItem(1);
var rating = 0;
var stars = document.querySelectorAll("#rating .star");

for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    rating = this.getAttribute("data-rating");
    highlightStars();
    return;
  });
}

function highlightStars() {
  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].src = "./assets/img/star.svg";
    } else {
      stars[i].src = "./assets/img/blackStar.svg";
    }
  }
}

function endTest() {
  alert("Congrats, you completed your test! Your score was " + data +"/10. You rated EPICODE " + rating + "/10.");
}

/**Cicli e funzioni sotto servono a dare effetto hover con mouseover e rimuoverlo con mouseout, ma non riusciamo a disabilitarli al click quindi sono negativi per la user experience
for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseover", function () {
    rating = this.getAttribute("data-rating");
    highlightStars();
  });
}

for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseout", function () {
    rating = this.getAttribute("data-rating");
    turnoffStar();
  })
}

function turnoffStar() {
  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].src = "./assets/img/blackStar.svg";
    }
  }
}

function lockStar() {
  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].removeEventListener("mouseout", turnoffStar);
    }
}};
*/
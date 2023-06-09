let data = sessionStorage.getItem(1);
if (data == null) {
  data = 0;
}
let selected;
var rating = 0;
var stars = document.querySelectorAll("#rating .star");
if (data == null) {
  data = 0;
}

for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    rating = this.getAttribute("data-rating");
    highlightStars();
    selected = true;
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
  alert("Congrats, you completed your test! Your score was " + data +"/10. You rated EPICODE " + rating + "/10. " + "Your feedback: ' " +  document.querySelector('.leaveFeedback').value + " '");
  /*document.querySelector('.leaveFeedback').value = '';*/
}

/**Cicli e funzioni sotto servono a dare effetto hover con mouseover e rimuoverlo con mouseout, ma non riusciamo a disabilitarli al click quindi sono negativi per la user experience*/
for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseover", function () {
    if(!selected) {
    rating = this.getAttribute("data-rating");
    highlightStars();
  }
  });
}

for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseout", function () {
    if(!selected) {
    rating = this.getAttribute("data-rating");
    turnoffStar();
    }
  })
}

function turnoffStar() {
  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].src = "./assets/img/blackStar.svg";
    }
  }
}



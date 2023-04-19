var rating = 0;
var stars = document.querySelectorAll("#rating .star");

for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function() {
    rating = this.getAttribute("data-rating");
    highlightStars();
  });
}

function highlightStars() {
  for (var i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].img 
    } else {
      stars[i].classList.remove("checked");
    }
  }
} 

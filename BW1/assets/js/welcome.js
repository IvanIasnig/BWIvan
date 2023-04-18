const input = document.querySelector(".radio");
const button = document.querySelector(".button");

input.addEventListener("click", () => {
  if (input.checked) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", true);
  }
});


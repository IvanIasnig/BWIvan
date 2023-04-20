let data = sessionStorage.getItem(1);
let dataWrong = 10 - data;

function percentage(partialValue, totalValue) {
  return (partialValue / totalValue) * 100;
}

function percentageWrong(partialValue, totalValue) {
  return [(totalValue - partialValue) / totalValue] * 100;
}
document.getElementById("percetualeCorrect").innerHTML =
  percentage(data, 10) + "%";
document.getElementById("quantitaCorrect").innerHTML = data;
document.getElementById("percetualeWrong").innerHTML =
  percentageWrong(data, 10) + "%";
document.getElementById("quantitaWrong").innerHTML = dataWrong;

let angolo = dataWrong * 36;
let torta = document.querySelector(".torta");
torta.style.background = `conic-gradient(#D20094 ${angolo}deg, #00ffff ${angolo}deg)`;

/*PROVA SCHEMA CIAMBELLA*/
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
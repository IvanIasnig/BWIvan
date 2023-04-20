let data = sessionStorage.getItem(1);
console.log(data);

/*PROVA SCHEMA CIAMBELLA*/
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
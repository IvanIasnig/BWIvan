let data = sessionStorage.getItem(1);
let dataWrong = data != null ? 10 - data : 10; // set dataWrong to 0 if data is null

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
  
  function percentageWrong(partialValue, totalValue) {
      return [(totalValue - partialValue) / totalValue] * 100;
  }
  document.getElementById("percetualeCorrect").innerHTML = percentage(data, 10) + "%";
  document.getElementById("quantitaCorrect").innerHTML = data;
  document.getElementById("percetualeWrong").innerHTML = percentageWrong(data, 10) + "%";
  document.getElementById("quantitaWrong").innerHTML = dataWrong;

let result = document.querySelector('#testoTorta');
function printResult(partialValue) {
    if (partialValue >= 60) {
        let cong1 = document.createElement("p");
        let cong2 = document.createTextNode('Congratulations!');
        cong1.appendChild(cong2);
        let cong3 = document.createElement("p");
        let cong4 = document.createTextNode('You passed the exam');
        cong3.appendChild(cong4);
        let newNode = document.createElement("p")
        let cong5 = document.createTextNode("We\'ll send you the certificate in few minutes. Check your email (including promotions / spam folders)");
        newNode.appendChild(cong5)
        cong3.appendChild(newNode);
        cong1.appendChild(cong3);
        result.appendChild(cong1);
        cong1.classList.add("primoClass");
        cong3.classList.add("secondoClass");
        newNode.classList.add("terzoClass");

    } else {
        let cong1 = document.createElement("p");
        let cong2 = document.createTextNode('Unfortunate!');
        cong1.appendChild(cong2);
        let cong3 = document.createElement("p");
        let cong4 = document.createTextNode('You DIDN\'T pass the exam');
        cong3.appendChild(cong4);
        let newNode = document.createElement("p")
        let cong5 = document.createTextNode('We\'ll send your death certificate in few minutes. Check your email (including promotions / spam folders)');
        newNode.appendChild(cong5)
        cong3.appendChild(newNode);
        cong1.appendChild(cong3);
        result.appendChild(cong1);
        cong1.classList.add("primoClass");
        cong3.classList.add("secondoClass");
        newNode.classList.add("terzoClass");
    }
}
printResult(percentage(data, 10));

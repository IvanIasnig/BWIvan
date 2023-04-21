// l'array di oggetti contenente le domande e le risposte multiple
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const titleEl = document.querySelector(".titleQuest");
const buttonsContainerEl = document.querySelector(".buttons-container");

let a = -1;
let x;
let corrCount = 0;

function mostraDomanda(index) {
  const domanda = questions[index];
  titleEl.textContent = domanda.question;
  buttonsContainerEl.innerHTML = "";

  let risp = domanda.incorrect_answers.concat(domanda.correct_answer);
  let risposte = risp.sort(() => Math.random() - 0.5);

  risposte.forEach((risposta) => {
    const labelEl = document.createElement("label");
    labelEl.classList.add("btn");

    const radioEl = document.createElement("input");
    radioEl.type = "radio";
    radioEl.name = "answer";
    radioEl.classList.add("radioClass");
    labelEl.appendChild(radioEl);
    labelEl.append(` ${risposta}`);
    buttonsContainerEl.appendChild(labelEl);
    radioEl.addEventListener("click", gestore);
    if (risposta === domanda.correct_answer) {
      radioEl.addEventListener("click", () => {
        corrCount++;
        resetTimer();
        sessionStorage.setItem(1, corrCount);
      });
    } else {
      radioEl.addEventListener("click", () => {
        clearInterval(x);
        resetTimer();
      });
    }
  });

  resetTimer();
}

let y;
function resetTimer() {
  clearInterval(y);
  let circularProgress = document.querySelector(".circular-progress");
  let progressValue = document.querySelector(".progress-value");
  let progressStartValue = 30;
  let progressEndValue = 0;
  let speed = 1000;

  y = setInterval(() => {
    progressStartValue--;
    progressValue.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; flex-direction: column;">
    <span style="font-size: 10px; text-align: center;">SECONDS</span>
    <span style="text-align: center;">${progressStartValue}</span>
    <span style="font-size: 10px; text-align: center;">REMAINING</span>
  </div>`;
    circularProgress.style.background = `conic-gradient(#936799 ${
      progressStartValue * 12
    }deg, #00ffff 0deg)`;

    if (progressStartValue === progressEndValue) {
      clearInterval(y);
      gestore();
    }
  }, speed);
}

gestore();
mostraDomanda(a);


function gestore() {
  
  a++;
  document.querySelector("#piePagina").innerHTML = a + 1;

  if (a < questions.length) {
    mostraDomanda(a);
    clearInterval(x);
    resetTimer();
    x = setInterval(() => {
      a++;
      document.querySelector("#piePagina").innerHTML = a + 1;

      if (a < questions.length) {
        mostraDomanda(a);
        clearInterval(x);
        resetTimer();
      } else {
        clearInterval(x);
        window.location.href = "results.html";
      }
    }, 30000);
  } else {
    window.location.href = "results.html";
  }
}

const ques = [
  {
    question: "Q1. What is the Full Form of HTML",
    options: {
      one: "Hyper Text Mark up language",
      two: "Hyper Total Mark up language",
      three: "Hyper Text Mark down language",
      four: "Viper Text Mark up language",
    },
    correct: 1,
  },
  {
    question: "Q2. What is the Full Form of CSS",
    options: {
      one: "Cosmic Style Sheets",
      two: "Cascading Screen Session",
      three: "Cascading Screen Sheets",
      four: "Cascading Style Sheets",
    },
    correct: 4,
  },
  {
    question: "Q3. Who invented Javascript",
    options: {
      one: "Brendan Eich",
      two: "Arpit Sood",
      three: "Sunaandan Sharma",
      four: "Tim Berners Lee",
    },
    correct: 1,
  },
  {
    question: "Q4. What invented world wide web",
    options: {
      one: "Bill  Gates",
      two: "Steve Jobs",
      three: "Tim Berners Lee",
      four: "Arpit Sood",
    },
    correct: 3,
  },
  {
    question: "Q5. Latest version of HTML",
    options: {
      one: "HTML 1",
      two: "HTML 2",
      three: "HTML 5",
      four: "HTML 6",
    },
    correct: 3,
  },
];
var count = 1;
let que = document.getElementById("question");
que.textContent = ques[0].question;

let option = document.getElementsByClassName("options");

option[0].textContent = ques[count - 1].options.one;
option[1].textContent = ques[count - 1].options.two;
option[2].textContent = ques[count - 1].options.three;
option[3].textContent = ques[count - 1].options.four;

let nxt = document.getElementById("next");
let pre = document.getElementById("prev");
let strt = document.getElementById("submit");
let op = document.getElementById("hello");

var correct = 0;

function Next(e) {
  if (count < 5) {
    count++;
  } else {
    count = 5;
    return;
  }
  var corr = document.getElementsByClassName("hello");

  let ans = 0;
  for (let i = 0; i < 4; i++) {
    if (corr[i].checked) {
      ans = i + 1;
    }
  }

  if (ans == ques[count - 2].correct) {
    correct++;
  }

  que = document.getElementById("question");

  que.textContent = ques[count - 1].question;

  option[0].textContent = ques[count - 1].options.one;
  option[1].textContent = ques[count - 1].options.two;
  option[2].textContent = ques[count - 1].options.three;
  option[3].textContent = ques[count - 1].options.four;
}
function Prev(e) {
  if (count > 1) {
    count--;
  } else {
    count = 1;
    return;
  }

  que = document.getElementById("question");
  que.textContent = ques[count - 1].question;

  option[0].textContent = ques[count - 1].options.one;
  option[1].textContent = ques[count - 1].options.two;
  option[2].textContent = ques[count - 1].options.three;
  option[3].textContent = ques[count - 1].options.four;
}

function Submit() {
  let ans = 0;

  var corr = document.getElementsByClassName("hello");
  for (let i = 0; i < 4; i++) {
    if (corr[i].checked) {
      ans = i + 1;
    }
  }

  if (ans == ques[4].correct) {
    correct++;
  }
  let cr = document.getElementById("correct");
  cr.textContent = correct;
  correct = 0;
}

nxt.addEventListener("click", Next);
pre.addEventListener("click", Prev);
strt.addEventListener("click", Submit);

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};
</script>
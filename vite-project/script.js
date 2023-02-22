const ball1 = document.getElementById("ball1");
const ball2 = document.getElementById("ball2");
const ball3 = document.getElementById("ball3");
const ball4 = document.getElementById("ball4");
const ball5 = document.getElementById("ball5");
const ball6 = document.getElementById("ball6");
const ball7 = document.getElementById("ball7");
const ball8 = document.getElementById("ball8");
const ball9 = document.getElementById("ball9");
const ball10 = document.getElementById("ball10");

let array = [
  ball1,
  ball2,
  ball3,
  ball4,
  ball5,
  ball6,
  ball7,
  ball8,
  ball9,
  ball10,
];

const box = document.getElementById("box");

function changeYforBall(ball) {
  let movingball = ball.getBoundingClientRect();
  let changedY;
  movingball.y = Math.ceil(Math.random() * 558);
  changedY = movingball.y;

  ball.style = `top: ${changedY}px`;
}

function resetYforBall(ball) {
  let movingball = ball.getBoundingClientRect();
  let changedY;
  movingball.y = 550;
  changedY = movingball.y;

  ball.style = `top: ${changedY}px; transition: top 4s ease-in`;
}
function changeball(ball, animation) {
  ball.style = `transform: ${animation}; top:550px;`;
}

let timer1;
let timer2;
let timer3;

setInterval(function () {
  if (timer1) {
    clearTimeout(timer1);
  }
  if (timer2) {
    clearTimeout(timer2);
  }
  if (timer3) {
    clearTimeout(timer3);
  }
  array.forEach((e) => changeYforBall(e));
  timer3 = setTimeout(function () {
    console.log("timer3");
    array.forEach((e) => resetYforBall(e));
  }, 4000);
  timer1 = setTimeout(function () {
    console.log("timer1");
    array.forEach((e) => changeball(e, "scale(1.0, 1.0)"));
  }, 8300);
  timer2 = setTimeout(function () {
    console.log("timer2");
    array.forEach((e) => changeball(e, "scale(1.2, 0.9)"));
  }, 8000);
}, 8300);

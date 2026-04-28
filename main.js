


// welcome text

let text = "Welcome, To Mostfa Doka World";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text[i];
    i++;
    setTimeout(typing, 100);
  }
}

// counter home stats
let nums = document.querySelectorAll(".stats .box .number");
let sectionOfNum = document.querySelector(".stats");
let started = false;
window.onscroll = function (){
if (window.scrollY >= sectionOfNum.offsetTop - 350){
    if (!started){
    nums.forEach((nums) => startCount(nums));
}
started = true ;
}
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count =setInterval(() =>{
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}


// time contact even
let countDownDate = new Date("May 31, 2026 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

typing();

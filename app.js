const tripStart = new Date("2026-07-31T00:00:00");
const tripEnd = new Date("2026-08-21T00:00:00");

const days = [
  {
    image: "images/day1.jpg",
    greeting: "Good morning, Boba ❤️",
    quote: "Distance means so little when someone means so much.",
    letter: `My love,

Today is the first morning of our little journey apart. I already miss having you close, but I want you to begin this trip knowing that you are deeply loved.

Wherever you go today, carry a little piece of my heart with you. I will be counting every sunrise until I can hold you again.

Love always,
Your baby ❤️`,
    challenge: "Take one picture today that you would have shown me if I were beside you."
  },
  ...Array.from({length:20}, (_,i)=>({
    image: "images/day1.jpg",
    greeting: "Good morning, Boba ❤️",
    quote: `A new little message is waiting for you on Day ${i+2}.`,
    letter: `This page is ready for your next photo and message. We will update it together before the trip.`,
    challenge: "Find one beautiful moment today and keep it for us."
  }))
];

const surpriseNotes = [
  "I am probably thinking about you right now.",
  "You are still my favourite notification.",
  "A few more sleeps until I can annoy you in person again.",
  "No distance could ever make you feel less like home.",
  "Close your eyes for five seconds and imagine my biggest hug.",
  "You are loved more than this little screen could ever explain."
];

const welcome = document.getElementById("welcome");
const daily = document.getElementById("daily");

function getDayIndex() {
  const now = new Date();
  if (now < tripStart) return 0;
  const diff = Math.floor((now - tripStart) / 86400000);
  return Math.max(0, Math.min(20, diff));
}

function renderDay(index) {
  const item = days[index];
  document.getElementById("dayLabel").textContent = `Day ${index + 1} of 21`;
  document.getElementById("greeting").textContent = item.greeting;
  document.getElementById("dailyImage").src = item.image;
  document.getElementById("quoteText").textContent = `“${item.quote}”`;
  document.getElementById("letterText").textContent = item.letter;
  document.getElementById("challengeText").textContent = item.challenge;
  document.getElementById("progressBar").style.width = `${((index + 1) / 21) * 100}%`;

  const now = new Date();
  const remaining = Math.max(0, Math.ceil((tripEnd - now) / 86400000));
  document.getElementById("countdownText").textContent =
    remaining === 0 ? "Welcome home, my love ❤️" :
    `${remaining} day${remaining === 1 ? "" : "s"} until you’re home`;
}

document.getElementById("openToday").addEventListener("click", () => {
  renderDay(getDayIndex());
  welcome.classList.remove("active");
  daily.classList.add("active");
});

document.getElementById("backButton").addEventListener("click", () => {
  daily.classList.remove("active");
  welcome.classList.add("active");
});

document.getElementById("missYouButton").addEventListener("click", () => {
  const note = surpriseNotes[Math.floor(Math.random() * surpriseNotes.length)];
  const box = document.getElementById("surpriseNote");
  box.textContent = note;
  box.classList.remove("show");
  void box.offsetWidth;
  box.classList.add("show");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js"));
}

const tripStart=new Date("2026-07-31T00:00:00+04:00");
const tripEnd=new Date("2026-08-21T00:00:00+04:00");
const days=[{"quote": "Distance means so little when someone means so much.", "letter": "My love,\n\nToday begins our little journey apart. I already miss having you close, but I want you to start this trip knowing one thing with complete certainty: you are deeply loved. Wherever you go today, carry a little piece of my heart with you. I will be counting every sunrise until I can hold you again.\n\nLove always,\nYour baby ❤️", "challenge": "Take one picture today that you would have shown me if I were beside you.", "wish": "I wish your journey begins gently and fills you with excitement."}, {"quote": "Home is not a place. It is a person.", "letter": "Good morning, Boba. This photo reminds me how even the simplest moments become special when I am sharing them with you. A drive, a conversation, a laugh—nothing has to be extraordinary when it is us. I hope today brings you little moments that make you smile, and I hope you feel me beside you in every one of them.", "challenge": "Send me the first thing today that made you smile.", "wish": "I wish you feel close to me, even from far away."}, {"quote": "The sea may separate shores, but never hearts.", "letter": "My shona, you love the beach, and I love the way your face changes when you are near the sea. There is something peaceful about watching you there. Today, whenever you see the sky or hear the wind, remember that I am looking at the same world and loving the same person—always you.", "challenge": "Find a view that reminds you of us.", "wish": "I wish every wave brings you peace and every shore brings you back to me."}, {"quote": "With you, every ordinary day becomes a memory.", "letter": "Baby, this photo feels like sunshine to me. I love that we have memories dressed up in white, memories in cars, memories at cafés, and memories where we were doing absolutely nothing special. Two years with you have taught me that love is not only found in big moments—it lives in the tiny ones we choose every day.", "challenge": "Notice one ordinary thing today and make it beautiful.", "wish": "I wish today gives you one memory worth keeping."}, {"quote": "I still choose you—in every mood, every season, every version.", "letter": "My love, I adore the way we can be serious one minute and silly the next. I love every version of us: dressed up, tired, laughing, travelling, arguing, making up, dreaming and simply sitting beside each other. You are not only my girlfriend. You are my comfort, my favourite person, and the one I keep choosing.", "challenge": "Send me your most unserious selfie today.", "wish": "I wish laughter finds you before stress does."}, {"quote": "Some people make the world feel safer just by being in it.", "letter": "Boba, when I look at this photo I see beauty, but more than that, I see the person who makes me feel understood. You have become my safe place. Your voice calms me, your smile lifts me, and seeing your name on my phone still makes me happy. I hope you never forget how much peace you bring into my life.", "challenge": "Take five quiet minutes just for yourself today.", "wish": "I wish you feel protected, peaceful and deeply loved."}, {"quote": "Even among a thousand wonders, I would still look for you.", "letter": "At the aquarium, with an entire world moving behind us, you were still the person I wanted to look at. That is how it always feels with you. No matter where we are or what surrounds us, my attention finds you. I hope your day is full of beautiful things—but I also hope you remember you remain the most beautiful part of mine.", "challenge": "Tell me one surprising thing you saw today.", "wish": "I wish wonder follows you everywhere."}, {"quote": "Love is feeling lucky in the middle of an ordinary moment.", "letter": "Good morning, baby. This picture captures the kind of closeness I miss most—the little moments when we are near each other, teasing, leaning in, existing in our own world. I look forward to seeing you every day because being around you makes my life feel warmer and fuller.", "challenge": "Tell me one thing you cannot wait for us to do when you return.", "wish": "I wish the thought of us brings warmth to your whole day."}, {"quote": "Wherever we go, I want it to be together.", "letter": "My love, mountains always make the world feel larger, but holding you makes everything feel close. I look at this photo and think about all the places still waiting for us—the beaches, roads, mountains and little cafés we have not discovered yet. I do not need every plan figured out. I only know I want you beside me.", "challenge": "Choose one place in the world we should visit together.", "wish": "I wish our future keeps giving us beautiful places to discover."}, {"quote": "Your smile has always been one of my favourite destinations.", "letter": "Boba, I hope you wake up today knowing how beautiful you are—not only in photographs, but in the way you care, love, dream and keep going. I am proud of the woman you are. Distance does not stop me from admiring you; it only gives me more time to think about everything I cherish.", "challenge": "Do one thing today that makes you feel confident.", "wish": "I wish you see yourself through my eyes today."}, {"quote": "I love the life we are quietly building together.", "letter": "This mirror photo feels like a little glimpse of home. Not a perfect room, not a perfect pose—just the two of us standing together. That is what I look forward to most: a life filled with ordinary mornings, shared spaces, silly conversations and the comfort of always having you near.", "challenge": "Imagine one small detail in our future home and tell me about it.", "wish": "I wish every dream we share slowly finds its way to us."}, {"quote": "I am proud to stand beside you.", "letter": "My shona, I love seeing us dressed up, but what matters most is the person standing beside me. I am proud of your heart, your strength, your ambition and your gentleness. Through these two years, you have grown into an even more remarkable woman, and loving you remains one of the easiest things I have ever done.", "challenge": "Write down one thing you are proud of yourself for.", "wish": "I wish you never forget how capable and special you are."}, {"quote": "You make every celebration feel more meaningful.", "letter": "Baby, every event becomes a better memory because you were there. I love the way we can step into a room together and still feel like it is only us. I look forward to many more occasions, photographs, anniversaries and celebrations—with your hand in mine.", "challenge": "Choose a song that would play during a montage of our best memories.", "wish": "I wish life gives us countless reasons to celebrate together."}, {"quote": "The softest moments are often the ones I remember most.", "letter": "My love, this photo feels tender to me. It reminds me that love can be quiet—a hand on your face, a shared look, a moment where nobody else matters. I miss that closeness. Until I have it again, let this message be my hand holding yours from far away.", "challenge": "Close your eyes for five seconds and imagine my biggest hug.", "wish": "I wish you feel my love in every quiet moment today."}, {"quote": "Every road feels right when it leads back to you.", "letter": "Good morning, Boba. Whether we are going somewhere exciting or simply driving around, being with you makes the journey matter. These days apart are another road we have to travel, but I know exactly where it ends: with you back home, and me finally seeing your face again.", "challenge": "Send me one song that belongs on our next road-trip playlist.", "wish": "I wish every road keeps guiding you safely home."}, {"quote": "The best part of every adventure is having you to remember it with.", "letter": "My love, I keep thinking about all the places we have already seen together and everything still waiting for us. I want more beaches with you, more mountains, more spontaneous drives and more moments where we stop just to take a photo because we know one day it will mean everything.", "challenge": "Pick our next small adventure.", "wish": "I wish our love always stays curious and adventurous."}, {"quote": "You are my calm in every changing tide.", "letter": "Boba, the sea changes constantly, but some things remain steady. My love for you is one of them. Some days are easy, others are complicated, but beneath everything, I know where my heart belongs. It belongs with you.", "challenge": "Listen to the sound of water today, even for a moment.", "wish": "I wish peace reaches you like waves reaching the shore."}, {"quote": "Two years later, I still get excited to see you.", "letter": "Baby, after two years, I still look forward to seeing you every day. I still notice your smile, still miss you when you leave, and still feel lucky when you choose to spend your time with me. Familiarity has never made you ordinary to me. You remain my favourite person.", "challenge": "Tell me one thing from our first year that still makes you smile.", "wish": "I wish our love keeps feeling new, even as it grows old."}, {"quote": "You taught me that love can feel like both freedom and home.", "letter": "My shona, loving you has made me braver about the future. You have taught me tenderness, patience, laughter and the beauty of looking forward to someone every single day. I hope this trip gives you freedom, joy and memories—but I hope coming home to me still feels just as beautiful.", "challenge": "Make one wish today and keep it secret.", "wish": "I wish all your beautiful dreams find you."}, {"quote": "A little distance cannot undo a love built every day.", "letter": "Boba, we are almost at the end of these days apart. I hope this little page has made the distance feel softer. Every message was written to remind you that my love did not pause while you were away. It continued in every morning, every thought and every countdown.", "challenge": "Tell me the first thing you want us to do together.", "wish": "I wish these last hours pass quickly and gently."}, {"quote": "Every plane can take you away, but my favourite one brings you home.", "letter": "Welcome home, my love. The countdown is over. No more imagining your hug, no more measuring the distance, no more wishing the days away. You taught me to make a wish whenever a plane takes off. Today, as yours brings you back, I realise my wish came true.\n\nYou came home to me. ❤️", "challenge": "Come find me. I have been waiting for this hug.", "wish": "I wish we never stop choosing each other, wherever life takes us."}];
const notes=[
"I am probably thinking about you right now.",
"You are still my favourite notification.",
"A few more sleeps until I can annoy you in person again.",
"No distance could ever make you feel less like home.",
"Close your eyes and imagine my biggest hug.",
"You are loved more than this little screen could ever explain."
];

const intro=document.getElementById("intro");
const app=document.getElementById("app");
const introText=document.getElementById("introText");
const plane=document.getElementById("plane");
const introLines=[
"Hi Boba...",
"If you’re seeing this, your journey has begun.",
"Twenty-one days sounds small...",
"until the person you love is far away.",
"You taught me something I will never forget.",
"Every time a plane takes off, make a wish.",
"When your plane leaves, I will make the same wish I always do.",
"I already know what I will wish for...",
"You. ❤️"
];

let introTimers=[];
function finishIntro(){
  introTimers.forEach(clearTimeout);
  intro.classList.add("hidden");
  app.classList.remove("hidden");
}
function runIntro(){
  let delay=300;
  introLines.forEach((line,i)=>{
    introTimers.push(setTimeout(()=>{
      introText.classList.remove("show");
      setTimeout(()=>{
        introText.textContent=line;
        introText.classList.add("show");
        if(i===5) plane.classList.add("fly");
      },320);
    },delay));
    delay += i<6 ? 1850 : 2200;
  });
  introTimers.push(setTimeout(finishIntro,delay+600));
}
const music=document.getElementById("backgroundMusic");
const musicToggle=document.getElementById("musicToggle");
const beginPanel=document.getElementById("beginPanel");
let musicOn=false;

async function startMusic(){
  try{
    music.volume=0;
    await music.play();
    musicOn=true;
    musicToggle.classList.remove("hidden","paused");
    let v=0;
    const fade=setInterval(()=>{
      v=Math.min(.38,v+.025); music.volume=v;
      if(v>=.38)clearInterval(fade);
    },90);
  }catch(err){
    musicOn=false;
    musicToggle.classList.remove("hidden");
    musicToggle.classList.add("paused");
  }
}

document.getElementById("beginExperience").onclick=async()=>{
  await startMusic();
  beginPanel.classList.add("hide");
  intro.classList.add("started");
  document.getElementById("skipIntro").classList.remove("hidden");
  setTimeout(()=>{beginPanel.classList.add("hidden");runIntro();},650);
};

document.getElementById("skipIntro").onclick=finishIntro;
musicToggle.onclick=async()=>{
  if(music.paused){
    try{await music.play();musicOn=true;musicToggle.classList.remove("paused");musicToggle.setAttribute("aria-label","Pause music");}catch(e){}
  }else{
    music.pause();musicOn=false;musicToggle.classList.add("paused");musicToggle.setAttribute("aria-label","Play music");
  }
};

function getDayIndex(){
  if(new URLSearchParams(location.search).get("preview")==="1")return 0;
  const now=new Date();
  if(now<tripStart)return -1;
  return Math.max(0,Math.min(20,Math.floor((now-tripStart)/86400000)));
}

function resetEnvelope(){
  document.getElementById("envelopeButton").classList.remove("open");
  document.getElementById("letterPaper").classList.remove("show");
}

function renderDay(index){
  const d=days[index];
  document.getElementById("dayLabel").textContent=`DAY ${index+1} OF 21`;
  document.getElementById("greeting").textContent=index===20?"Welcome home, Boba ❤️":"Good morning, Boba ❤️";
  document.getElementById("dailyImage").src=`images/day${index+1}.jpg`;
  document.getElementById("dailyBackdrop").style.backgroundImage=`url(images/bg${index+1}.jpg)`;
  document.getElementById("quoteText").textContent=`“${d.quote}”`;
  document.getElementById("letterText").textContent=d.letter;
  document.getElementById("challengeText").textContent=d.challenge;
  document.getElementById("wishText").textContent=d.wish;
  document.getElementById("progressBar").style.width=`${((index+1)/21)*100}%`;
  const remaining=Math.max(0,Math.ceil((tripEnd-new Date())/86400000));
  document.getElementById("countdownText").textContent=index===20?"You are home ❤️":`${remaining} day${remaining===1?"":"s"} until you’re home`;
  resetEnvelope();
}

document.getElementById("openToday").onclick=()=>{
  const idx=getDayIndex();
  if(idx<0){
    document.getElementById("lockNote").textContent="Your first surprise unlocks on 31 July ❤️";
    return;
  }
  renderDay(idx);
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("daily").classList.add("active");
};

document.getElementById("backButton").onclick=()=>{
  document.getElementById("daily").classList.remove("active");
  document.getElementById("welcome").classList.add("active");
};

document.getElementById("envelopeButton").onclick=()=>{
  const btn=document.getElementById("envelopeButton");
  const paper=document.getElementById("letterPaper");
  btn.classList.add("open");
  setTimeout(()=>paper.classList.add("show"),500);
};

document.getElementById("missYouButton").onclick=()=>{
  const box=document.getElementById("surpriseNote");
  box.textContent=notes[Math.floor(Math.random()*notes.length)];
  box.classList.remove("show");
  void box.offsetWidth;
  box.classList.add("show");
};

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
}

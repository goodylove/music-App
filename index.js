import marquee from "https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js";
// variable declaration

const img = document.querySelector(".img");
const music = document.querySelector(".music");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const play = document.querySelector(".play");
const pause = document.querySelector("#pause");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container-2");
const drop = document.querySelector(".drop");
const song = document.createElement("audio");
const songTitle = document.querySelector(".song-title");
const airtsName = document.querySelector(".airts-name-title");

let position = 0;
// functionalities;
// 1. function display song to the Dom
function displaySong() {
  console.log(position);
  console.log(musicBank);

  img.src = musicBank[position].imggUrl;
  (songTitle.innerHTML = musicBank[position].songTitle),
    (airtsName.innerHTML = musicBank[position].Artist);
  airtsName.style.color = "whitesmoke";
  song.src = musicBank[position].songUrl;
  song.load();
}

displaySong();
// 2. function onclick play song
function playSong() {
  play.addEventListener("click", () => {
    play.style.display = "none";
    pause.style.display = "block";
    song.play();
  });
}
playSong();

// 3.function onclick pause the song
function pauseSong() {
  pause.addEventListener("click", () => {
    pause.style.display = "none";
    play.style.display = "block";
    song.pause();
  });
}
pauseSong();

// 4.function onclick to next song
function nextSong() {
  next.addEventListener("click", () => {
    if (position >= musicBank.length - 1) {
      position = 0;
      displaySong();
    } else {
      position += 1;
      displaySong();
    }
    song.play();
  });
}
nextSong();
// 5.function onclick to the prev song
//
function prevSong() {
  prev.addEventListener("click", () => {
    position -= 1;
    displaySong();
    console.log("working");
    song.play();
  });
}
prevSong();
//6.function to display playlist and other containers

function changeCon() {
  drop.addEventListener("click", () => {
    container.classList.add("flip");
  });
}
changeCon();

function showAllPlayList() {
  const display = musicBank.map((p) => {
    const { imggUrl, songTitle, songInfo, id } = p;
    return `  <div class="playlist" id="${id}">
    <img
      src="${imggUrl}"
      alt=""
      class="img-2"
    />
    <span class="ttile-2">
      <span>${songTitle}</span
      ><span class="move" id="marquee"> ${songInfo}
        </span
      >
    </span>
    <i class="fas fa-music  music-icon"></i>
  </div>
  <div class="under"></div>
  `;
  });
  container2.innerHTML = display.join("");
}
showAllPlayList();
const allMq = document.querySelectorAll("#marquee");
const musIcon = document.querySelectorAll(".music-icon");
const playlist = document.querySelector(".playlist");

// musIcon.forEach((music_icon_el) => {
//   music_icon_el.addEventListener("click",()=>{
//     song.play();
//   })
//   console.log(mq_el);
//   new marquee(document.getElementById(mq_el.id));
// });

// for (let i = 0; i < musIcon.length; i++) {
//   musIcon[i].addEventListener("click", () => {
//     console.log("clicked");
//     song.play();
//     new marquee(document.getElementById("marquee"));
//     console.log(allMq[i].id);
//   });
// }

function musicIcon() {
  song.play();
}
// new marquee(document.getElementById("marquee"));

function displayEachOnClick() {}

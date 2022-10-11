import marquee from "https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js";
// variable declaration

const img = document.querySelector(".img");
const music = document.querySelector(".music");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const play = document.querySelector(".play");
const pause = document.querySelector("#pause");
const container = document.querySelector(".container");
const container2 = document.querySelector(".con");
const contain = document.querySelector(".container-2");
const container3 = document.querySelector(".container-3");
const contain3 = document.querySelector(".con-3");
const drop = document.querySelector(".drop");
const song = document.createElement("audio");
const songTitle = document.querySelector(".song-title");
const airtsName = document.querySelector(".airts-name-title");
const timer = document.querySelector(".smal-holder");
const left = document.querySelector(".left-2");
const left3 = document.querySelector(".left-3");
const searchCon = document.querySelector(".search-con");
const input = searchCon.querySelector("#search");
const btn = document.querySelector(".btn");
let position = 0;
let currentP = 0;
// functionalities;
// 1. function display song to the Dom
console.log(position);
function displaySong(a) {
  img.src = musicBank[a].imggUrl;
  (songTitle.innerHTML = musicBank[a].songTitle),
    (airtsName.innerHTML = musicBank[a].Artist);
  airtsName.style.color = "whitesmoke";
  song.src = musicBank[a].songUrl;
  song.load();
}

displaySong(position);
// 2. function onclick play song
function playSong() {
  play.addEventListener("click", () => {
    play.style.display = "none";
    pause.style.display = "block";
    musicController();
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
function nextSong(el) {
  next.addEventListener("click", () => {
    if (el >= musicBank.length - 1) {
      el = 0;
      displaySong(el);
    } else {
      el += 1;
      displaySong(el);
    }
    song.play();
  });
}
nextSong(position);
// 5.function onclick to the prev song
//
function prevSong() {
  prev.addEventListener("click", () => {
    position < 1 ? (position = musicBank.length) : "";
    position -= 1;
    displaySong(position);

    console.log();
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
    const { imggUrl, songTitle, songInfo, id, songUrl } = p;
    return `  <div class="playlist" id="${id}">
    <img
      src="${imggUrl}"
      alt=""
      class="img-2"
    />
    <span class="ttile-2">
      <span class="tite">${songTitle}</span
      ><span class="move"> ${songInfo}
        </span
      >
    </span>
    <i class="fas fa-music  music-icon" id="${id}"> </i>
    <i class="fas fa-pause" id="pau"></i>
  </div>
  <div class="under"></div>
  `;
  });
  container2.innerHTML = display.join("");
}
showAllPlayList();

const musIcon = document.querySelectorAll(".music-icon");
const playList = document.querySelectorAll(".playlist");
const pau = document.querySelector("#pau");

const musicIcons = () => {
  musIcon.forEach((icon_el, i) => {
    icon_el.addEventListener("click", (e) => {
      let pel = icon_el.parentElement;

      const moveSong = pel.querySelector(".move");
      moveSong.classList.remove("show");
      const getExactMusic = musicBank.find(({ id }) => {
        return id == icon_el.id;
      });

      song.src = getExactMusic.songUrl;
      song.play();
    });
  });
};
musicIcons();
// musIcon.forEach((p) => {
//   let pel = p.parentElement;

//   const moveSong = pel.querySelector(".move");
//   p.addEventListener("click", () => {
//     song.pause();
//     moveSong.classList.remove("show");
//   });
// });

function displayEachOnClick() {
  playList.forEach((play_el, i) => {
    play_el.addEventListener("click", () => {
      displaySong(i);
      container.style.display = "flex";
      song.play();
      contain.style.display = "none";
    });
  });
}

displayEachOnClick();
// function music timer
const musicController = () => {
  song.addEventListener("timeupdate", (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    timer.style.width = `${progressWidth}%`;

    song.addEventListener("loadeddata", (e) => {
      console.log(e);
      let current = container.querySelector(".min");
      let duration = container.querySelector(".sec");
      let musicDuration = song.duration;
      // update song duration

      let totalMin = Math.floor(musicDuration / 60);
      let totalSec = Math.floor(musicDuration % 60);
      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      }
      duration.innerText = `${totalMin}:${totalSec}`;
      // updating playing song current time

      let curentMusic = song.currentTime;
      let currentMin = Math.floor(curentMusic / 60);
      let currentSec = Math.floor(curentMusic % 60);
      if (currentSec < 10) {
        currentSec = `0${currentSec}`;
      }
      current.innerText = `${currentMin}:${currentSec}`;
    });
  });
};
musicController();

left.addEventListener("click", () => {
  container.style.display = "flex";
  contain.style.display = "none";
});
left3.addEventListener("click", () => {
  container.style.display = "none";
  contain.style.display = "block";
});

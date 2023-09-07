let navme = document.querySelector(".navku");
document.querySelector("#bars").onclick = () => {
  navme.classList.toggle("ula");
};

let tabel = document.querySelector(".d-table");
let cap = document.querySelector(".caption");
document.querySelector("#id-gambar").onclick = () => {
  tabel.classList.toggle("none-table");
  cap.classList.toggle("cap");
  cap.classList.toggle("caption");
};

let heart = document.querySelector(".fa-heart");
document.querySelector("#hearth-bar").onclick = () => {
  heart.classList.toggle("hati");
};

let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active-search");
};

let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");
let img3 = document.querySelector(".img-3");
let img4 = document.querySelector(".img-4");
let play = document.querySelector("#rocky");
document.querySelector("#manual-1").onclick = () => {
  img1.style.display = "block";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
};
document.querySelector("#manual-2").onclick = () => {
  img1.style.display = "none";
  img2.style.display = "block";
  img3.style.display = "none";
  img4.style.display = "none";
};
document.querySelector("#manual-3").onclick = () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "block";
  play.play();
  img4.style.display = "none";
};
document.querySelector("#manual-4").onclick = () => {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "block";
};

function image1() {
  img1.style.display = "block";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
}
function image2() {
  img1.style.display = "none";
  img2.style.display = "block";
  img3.style.display = "none";
  img4.style.display = "none";
}
function image3() {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "block";
  img4.style.display = "none";
}
function image4() {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "block";
}

let cek = {
  gambar1: image1,
  gambar2: image2,
  gambar3: image3,
  gambar4: image4,
};

let cek2 = [image1, image2, image3, image4];

let itung = 1;
setInterval(function () {
  document.getElementsByClassName("img-" + itung).checked = true;
  itung++;

  if (itung == 1) {
    cek.gambar1();
  }
  if (itung == 2) {
    cek.gambar2();
  }
  if (itung == 3) {
    cek.gambar3();
  }
  if (itung == 4) {
    cek.gambar4();
  }
  if (itung == 5) {
    itung = 0;
  }
}, 3000);

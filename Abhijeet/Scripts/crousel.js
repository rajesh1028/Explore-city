let slider = document.querySelector("#slide");
let div_in_slider = document.querySelectorAll("#slide div");
//console.log(div_in_slider.length);
let next = document.querySelector("#btnnext");
let prev = document.querySelector("#btnprev");

let count = 8;
let size = div_in_slider[0].clientWidth + 67;
// console.log(size);

slider.style.transform = `translateX(${-size * count}px)`;

next.addEventListener("click", moveright);
prev.addEventListener("click", moveleft);

function moveright() {
  slider.style.transition = "transform 0.4s ease-in-out";
  count++;
  if (count == 10) {
    slider.style.transition = "none";
    count = 8;
  }
  // console.log(count);
  slider.style.transform = `translateX(${-size * count}px)`;
}

function moveleft() {
  slider.style.transition = "transform 0.4s ease-in-out";

  let flag = false;
  count--;
  if (count == 1) {
    slider.style.transition = "none";
    count = 6;
    slider.style.transform = `translateX(${-size * count}px)`;
    flag = true;
  }
  // console.log(count);
  slider.style.transform = `translateX(${-size * count}px)`;
}

let img_for_trip = [
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16720/photo_200/3a17e0ebf71b11e992500a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16721/photo_200/a85131caf1a511e9924e0a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16723/photo_200/14650812f1a811e9924e0a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16721/photo_200/a85131caf1a511e9924e0a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16725/photo_200/cc19e8ccf70e11e992500a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16726/photo_200/213f117ff1a711e9924e0a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16727/photo_200/92a02d4af1a511e9924e0a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16728/photo_200/de6bc87af1a411e9924e0a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16729/photo_200/58bf80c4f70b11e992500a8e1b1ce4da_photo_200.jpeg",
  "https://d2vcelvjdj7n25.cloudfront.net/media/gated_community/16726/photo_200/213f117ff1a711e9924e0a8e1b1ce4da_photo_200.jpeg",
];
let alldivs = document.querySelectorAll("#explorecity_grid div");
let i = 0;
alldivs.forEach((el) => {
  // console.log(el);
  el.style.backgroundImage = `linear-gradient(rgba(10, 10, 10, 0.6), rgba(4, 4, 4, 0.5)),
    url(${img_for_trip[i]})`;
  i++;
});

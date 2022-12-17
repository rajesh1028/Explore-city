let slider_idea = document.querySelector("#slide_idea");
let div_in_slider_idea = document.querySelectorAll("#slide_idea div");

let next_idea = document.querySelector("#btnnext_ideas");
let prev_idea = document.querySelector("#btnprev_ideas");
next_idea.addEventListener("click", moveright_idea);
prev_idea.addEventListener("click", moveleft_idea);

let count_idea = 5;
let size_idea = div_in_slider_idea[0].clientWidth + 67;

slider_idea.style.transform = `translateX(${-size_idea * count_idea}px)`;

next_idea.addEventListener("click", moveright_idea);
prev_idea.addEventListener("click", moveleft_idea);

function moveright_idea() {
  slider_idea.style.transition = "transform 0.4s ease-in-out";
  count_idea++;
  if (count_idea == 10) {
    slider_idea.style.transition = "none";
    count_idea = 5;
  }

  slider_idea.style.transform = `translateX(${-size_idea * count_idea}px)`;
}

function moveleft_idea() {
  slider_idea.style.transition = "transform 0.4s ease-in-out";

  count_idea--;
  if (count_idea == 1) {
    slider_idea.style.transition = "none";
    count_idea = 6;
    slider_idea.style.transform = `translateX(${-size_idea * count_idea}px)`;
    flag = true;
  }

  slider_idea.style.transform = `translateX(${-size_idea * count_idea}px)`;
}

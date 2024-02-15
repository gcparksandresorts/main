//Label Image ID's with the following: im01, im02, im03, im04

const im1 = document.getElementById("im01");
const im2 = document.getElementById("im02");
const im3 = document.getElementById("im03");
const im4 = document.getElementById("im04");


function runSlideShowFour(s){
  slideTime = s;
  
  im1.style.animation = "FadeIn 0.40s";
  im2.style.animation = "FadeIn 0.40s";
  im3.style.animation = "FadeIn 0.40s";
  im4.style.animation = "FadeIn 0.40s";

  im1.style.display = "block";
  im2.style.display = "none";
  im3.style.display = "none";
  im4.style.display = "none";

  setInterval(secondSlide(), slideTime);
}

function firstSlide(){
      im1.style.display = "block";
      im4.style.display = "none";
      setInterval(secondSlide(), slideTime);
}
function secondSlide(){
      im2.style.display = "block";
      im1.style.display = "none";
      setInterval(thirdSlide(), slideTime);
}
function thirdSlide(){
      im3.style.display = "block";
      im2.style.display = "none";
      setInterval(fourthSlide(), slideTime);
}
function fourthSlide(){
      im4.style.display = "block";
      im3.style.display = "none";
      setInterval(firstSlide(), slideTime);
}

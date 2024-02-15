const head = document.getElementById("header");
const foot = document.getElementById("footer");

const loader = document.getElementById("loader");

function runHeaderSetup(){
  head.innerHTML = "<div id='headerBar'></div>";
  foot.innerHTML = "<div class='container'>(C) 2024 Globe-City Parks and Resorts LLC.</div>";
}//End function run header setup

function endLoadingInitial(){
  loader.style.opacity = 0;
  setTimeout(function(){loader.style.display='none'},1000);
}//End of function end loading initial

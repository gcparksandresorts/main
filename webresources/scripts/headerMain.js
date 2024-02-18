const head = document.getElementById("header");
const foot = document.getElementById("footer");

const loader = document.getElementById("loader");

function runHeaderSetup(){

	let width = screen.width;
	if(width < 900){
		console.log("Smaller Screen Header");
		head.innerHTML = "<div id='headerBar'> <div class='content'> \
			<img src='https://gcparksandresorts.github.io/main/webresources/images/GCPR-logo.png' onclick='window.open("+'"https://gcparksandresorts.github.io/main","_self"'+")'> \
			<a>MENU</a> \
			</div> </div> <div id='headerBarSpacer'></div>";
	}
	else{
		console.log("Large Screen Header");
		head.innerHTML = "<div id='headerBar'> <div class='content'> \
	  		<img src='https://gcparksandresorts.github.io/main/webresources/images/GCPR-logo.png' onclick='window.open("+'"https://gcparksandresorts.github.io/main","_self"'+")'> \
	  		<a>Destinations</a> \
	  		<a>Current Projects</a> \
	  		<a>About Us</a> \
	  		<a>Get in Contact</a> \
	  		</div> </div> <div id='headerBarSpacer'></div>";
	}
  	
  	foot.innerHTML = "<br><br><div class='spacer'></div> <div class='container'>(C) 2024 Globe-City Parks and Resorts LLC.</div><div class='spacer'></div> <div class='container'><a>Legal</a> | <a>Careers</a> | <a>Corporate</a></div>";
}//End function run header setup

function endLoadingInitial(){
  loader.style.opacity = 0;
  setTimeout(function(){loader.style.display='none'},1000);
}//End of function end loading initial

window.onresize = runHeaderSetup;


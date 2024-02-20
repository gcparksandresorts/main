const head = document.getElementById("header");
const foot = document.getElementById("footer");

const loader = document.getElementById("loader");

var minMen = 0;

// https://gcparksandresorts.github.io/main/

function runHeaderSetup(){

	let width = window.innerWidth;
	if(width < 900){
		console.log("Smaller Screen Header");
		head.innerHTML = "<div id='headerBar'> <div class='content'> \
			<img src='https://gcparksandresorts.github.io/main/webresources/images/GCPR-logo.png' onclick='window.open("+'"https://gcparksandresorts.github.io/main","_self"'+")'> \
			<a onclick='miniMenuOpen()'>MENU</a> \
			</div> </div> <div id='headerBarSpacer'></div>";
	}
	else{
		console.log("Large Screen Header");
		head.innerHTML = "<div id='headerBar'> <div class='content'> \
	  		<img src='https://gcparksandresorts.github.io/main/webresources/images/GCPR-logo.png' onclick='window.open("+'"https://gcparksandresorts.github.io/main","_self"'+")'> \
	  		<a href='https://gcparksandresorts.github.io/main/destinations'>Destinations</a> \
	  		<a>Current Projects</a> \
	  		<a href='https://gcparksandresorts.github.io/main/about'>About Us</a> \
	  		<a>Get in Contact</a> \
	  		</div> </div> <div id='headerBarSpacer'></div>";
	}
  	
  	foot.innerHTML = "<br><br><div class='spacer'></div> \
		<div class='container'>(C) 2024 Globe-City Parks and Resorts LLC. <p><b>(312) 900 9132</b><br>15780 West Blvd.<br>Highland, Oras Nou 98810</p></div><div class='spacer'></div> \
		<div class='container'><a>Buisness Opportunities</a> | <a>Meetings and Events</a> | <a>Contracting and Services</a></div> <div class='spacer'></div> \
		<div class='container'><a>Legal</a> | <a>Careers</a> | <a>Corporate</a></div>";
}//End function run header setup

function endLoadingInitial(){
  loader.style.opacity = 0;
  setTimeout(function(){loader.style.display='none'},1000);
}//End of function end loading initial

window.onresize = runHeaderSetup;

function miniMenuOpen(){
	if(minMen == 0){
		head.innerHTML += "<div id='headerMenu'>\
			<a href='https://gcparksandresorts.github.io/main/destinations'>Destinations</a>\
			<a>Projects</a>\
			<a>About Us</a>\
			<a>Get in Contact</a>\
			</div>";
		head.innerHTML += "<div id='headerMenuHide' onclick='miniMenuOpen()'></div>";

		const headMenu = document.getElementById("headerMenu");
		const headMenuHide = document.getElementById("headerMenuHide");

		headerMenu.style.display = 'block';
		setTimeout(function(){headerMenu.style.opacity = 1;},1);
		headMenuHide.style.display = 'block';

		
	}
	else{
		const headMenu = document.getElementById("headerMenu");
		const headMenuHide = document.getElementById("headerMenuHide");
		
		minMen = 0;
		
		headerMenu.style.opacity = 0;
		headMenuHide.style.display = 'none';
		
		setTimeout(function(){headerMenu.style.display = 'none';},1000);
		
	}
}

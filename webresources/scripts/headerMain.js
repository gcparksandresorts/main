const head = document.getElementById("header");
const foot = document.getElementById("footer");

const loader = document.getElementById("loader");

var minMen = 69;

var date = new Date();

// https://gcparksandresorts.github.io/main/

function runHeaderSetup(){

	let width = window.innerWidth;
	if(width < 900){
		console.log("Smaller Screen Header");
		head.innerHTML = "<div id='headerBar'> <div class='content'> \
			<img src='https://gcparksandresorts.github.io/main/webresources/images/gce-logo.png' onclick='window.open("+'"https://gcparksandresorts.github.io/main","_self"'+")'> \
			<a onclick='miniMenuOpen()'>MENU</a> \
			</div> </div> <div id='headerBarSpacer'></div>";
	}
	else{
		console.log("Large Screen Header");
		head.innerHTML = "<div id='headerBar'> <div class='content'> \
	  		<img src='https://gcparksandresorts.github.io/main/webresources/images/gce-logo.png' onclick='window.open("+'"https://gcparksandresorts.github.io/main","_self"'+")'> \
	  		<a href='https://gcparksandresorts.github.io/main/destinations'>Destinations</a> \
	  		<a>Current Projects</a> \
	  		<a href='https://gcparksandresorts.github.io/main/about'>About Us</a> \
	  		<a href='https://gcparksandresorts.github.io/main/careers/home'>Careers</a> \
	  		</div> </div> <div id='headerBarSpacer'></div>";
	}
  	
  	foot.innerHTML = "<br><br><div class='spacer'></div> \
		<div class='container'><p><b>(312) 900 9132</b> | <a href='mailto:globecityparksandresorts@gmail.com'>connect@gcpr.net</a></p><p>1511 West Blvd. #3<br>Highland, Oras Nou 98008</p></div><div class='spacer'></div> \
		<div class='container'><a href='https://gcparksandresorts.github.io/main/business/opportunities'>Buisness Opportunities</a> | <a href='https://gcparksandresorts.github.io/main/meetings-and-events/home'>Meetings and Events</a> | <a href='https://gcparksandresorts.github.io/main/painter-creative'>Painter Creative</a></div> <div class='spacer'></div> \
		<div class='container'><p class='disclaimer'>(C) " + date.getFullYear() +  " Globe-City Parks and Resorts LLC. </p><a>Legal</a> | <a href='https://gcparksandresorts.github.io/main/careers/home'>Careers</a> | <a href='https://gcparksandresorts.github.io/main/business/landing'>Corporate</a></div>";
}//End function run header setup

function endLoadingInitial(){
  loader.style.opacity = 0;
  setTimeout(function(){loader.style.display='none'},1000);
}//End of function end loading initial

window.onresize = runHeaderSetup;

function miniMenuOpen(){
	if(minMen == 69){
		head.innerHTML += "<div id='headerMenu'>\
			<a href='https://gcparksandresorts.github.io/main/destinations'>Destinations</a>\
			<a>Projects</a>\
			<a href='https://gcparksandresorts.github.io/main/about'>About Us</a>\
			<a href='https://gcparksandresorts.github.io/main/careers/home'>Careers</a>\
			</div>";
		head.innerHTML += "<div id='headerMenuHide' onclick='miniMenuOpen()'></div>";

		const headMenu = document.getElementById("headerMenu");
		const headMenuHide = document.getElementById("headerMenuHide");

		headerMenu.style.display = 'block';
		setTimeout(function(){headerMenu.style.opacity = 1;},1);
		headMenuHide.style.display = 'block';

		minMen = 1;
	}
	else if(minMen == 0){
		const headMenu = document.getElementById("headerMenu");
		const headMenuHide = document.getElementById("headerMenuHide");

		headerMenu.style.display = 'block';
		setTimeout(function(){headerMenu.style.opacity = 1;},1);
		headMenuHide.style.display = 'block';

		minMen = 1;
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

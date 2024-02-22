const Header = document.getElementById("header");
const footBar = document.getElementById("footer");

function runHeaderSetup(){
		Header.innerHTML = "";
		
	//	createFooter();
		initializeHeader();
	}

function initializeHeader(){
		console.log('resizing header'); 
    		Header.innerHTML = "<div id='headerSpacer'></div> \
                        <div id='headerBar'><img src='https://gcparksandresorts.github.io/main/webresources/images/gcprMAE-logo.png' onclick='goHome()'><br> \
                        <a href='https://gcparksandresorts.github.io/main/meetings-and-events/home'>Home</a> \
                        <a href='https://gcparksandresorts.github.io/main/meetings-and-events/meeting-spaces'>Meeting Spaces</a> \
                        <a>Event Planning</a> \
                        <a>Event Services</a> \
                        </div>";

		footBar.innerHTML = "<br><br><div class='spacer'></div> \
		<div class='container'>(C) " + date.getFullYear() +  " Globe-City Parks and Resorts LLC. <p><b>(312) 900 9132</b> | <a href='mailto:globecityparksandresorts@gmail.com'>connect@gcpr.net</a></p><p>1511 West Blvd. #3<br>Highland, Oras Nou 98008</p></div><div class='spacer'></div> \
		<div class='container'><a>Buisness Opportunities</a> | <a href='https://gcparksandresorts.github.io/main/meetings-and-events/home'>Meetings and Events</a> | <a>Contracting and Services</a></div> <div class='spacer'></div> \
		<div class='container'><a>Legal</a> | <a href='https://gcparksandresorts.github.io/main/careers/home'>Careers</a> | <a>Corporate</a></div>";

	document.getElementById('loader').style.display = 'none';
	
}//end of function initializeHeader

function goHome(){
	window.open("https://gcparksandresorts.github.io/main","_self");
}

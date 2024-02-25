const BB = document.getElementById("bottomBar");
	var firstTime = 0;

	var myScrollFunc = function() {
	var y = window.scrollY;
	if (y >= 200) {
		  if(firstTime == 0){BB.style.display = 'block'; firstTime = 1; setTimeout(function(){BB.style.opacity = 1;},50);}else{
	    		BB.style.opacity = 1;
		  }
	  } else {
	   	BB.style.opacity = 0;
	  }
	};
		
	window.addEventListener("scroll", myScrollFunc);

/*
	<div>
		<img src='https://gcparksandresorts.github.io/main/webresources/images/painterCreative.png'>
		<a>Contact</a>
		<a href='https://gcparksandresorts.github.io/main/careers/painter-creative'>Careers</a>
	</div>
*/

	const imgLink = '"https://gcparksandresorts.github.io/main/painter-creative","_self"';

	function createBottomBar(){
		BB.innerHTML = "<img src='<img src='https://gcparksandresorts.github.io/main/webresources/images/painterCreative.png'>' onclick='window.open("+imgLink+")'>";
		BB.innerHTML += "<a href='https://gcparksandresorts.github.io/main/careers/painter-creative'>Careers</a> \
				<a href='https://gcparksandresorts.github.io/main/painter-creative/portfolio'>Portfolio</a> \
				<a href='https://gcparksandresorts.github.io/main/painter-creative#contact'>Contact</a>";
	}

	createBottomBar();

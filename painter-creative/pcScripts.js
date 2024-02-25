myID = document.getElementById("bottomBar");
		var firstTime = 0;

		var myScrollFunc = function() {
		  var y = window.scrollY;
		  if (y >= 200) {
			  if(firstTime == 0){myID.style.display = 'block'; firstTime = 1; setTimeout(function(){myID.style.opacity = 1;},50);}else{
		    		myID.style.opacity = 1;
			  }
		  } else {
		    	myID.style.opacity = 0;
		  }
		};
		
		window.addEventListener("scroll", myScrollFunc);

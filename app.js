window.onscroll = function() { 
var scrolled = window.pageYOffset || document.documentElement.scrollTop; 
if(scrolled > 5) { 
	document.getElementById('invest').style.opacity = "1";
	} else { 
	document.getElementById('invest').style.opacity = "0";
};
if(scrolled > 55) {
	document.getElementById('teg1').style.opacity = "1";
	document.getElementById('teg2').style.opacity = "1"; 
} else {
	document.getElementById('teg1').style.opacity = "0";
	document.getElementById('teg2').style.opacity = "0"; 
};
if(scrolled > 205) {
	document.getElementById('titles1').style.opacity = "1";
	document.getElementById('titles2').style.opacity = "1";
	document.getElementById('titles3').style.opacity = "1";
} else {
	document.getElementById('titles1').style.opacity = "0";
	document.getElementById('titles2').style.opacity = "0";
	document.getElementById('titles3').style.opacity = "0";
};
if(scrolled > 305) {
	document.getElementById('icon1').style.opacity = "1";
	document.getElementById('icon2').style.opacity = "1";
	document.getElementById('icon3').style.opacity = "1";
} else {
	document.getElementById('icon1').style.opacity = "0";
	document.getElementById('icon2').style.opacity = "0";
	document.getElementById('icon3').style.opacity = "0";
};
if(scrolled > 405) {
	document.getElementById('tez1').style.opacity = "1";
	document.getElementById('tez2').style.opacity = "1";
	document.getElementById('tez3').style.opacity = "1";
} else {
	document.getElementById('tez1').style.opacity = "0";
	document.getElementById('tez2').style.opacity = "0";
	document.getElementById('tez3').style.opacity = "0";
};
if(scrolled > 1005) { 
	document.getElementById('works').style.opacity = "1"; 
	} else { 
	document.getElementById('works').style.opacity = "0";  
};
if(scrolled > 1055) { 
	document.getElementById('job').style.opacity = "1"; 
	} else { 
	document.getElementById('job').style.opacity = "0";  
};
if(scrolled > 2155) { 
	document.getElementById('touch').style.opacity = "1"; 
	} else { 
	document.getElementById('touch').style.opacity = "0";  
};
if(scrolled > 2255) { 
	document.getElementById('touchText').style.opacity = "1"; 
	} else { 
	document.getElementById('touchText').style.opacity = "0";  
};
}
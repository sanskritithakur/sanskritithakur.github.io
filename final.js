console.log("oo");
var menubar = document.querySelector("#cross");
var sidenav=document.querySelector("#sidenav");
var overlay=document.querySelector("#overlay");
var close=document.querySelector("#close");
var navlink=document.querySelectorAll("#sidenav a");
menubar.addEventListener('click',function (value) {
	console.log(value);
	navlink.forEach(function (v) {
		v.style.color="black";
	});
	//sidenav.style.display="initial";
	overlay.style.display="initial";
overlay.style.background="rgba(0, 0, 0, 0.39)";
	sidenav.style.width='60%';
	
});




console.log(navlink);
close.addEventListener('click',function (value) {
	overlay.style.display="none";
	navlink.forEach(function (v) {
		v.style.color="rgb(255,217,0)";
	});
overlay.style.background="transparent";
//navlink.target.style.color="transparent";

	sidenav.style.width='0%';
	
});





//var myimg=document.querySelector("#myimg");








var typo=document.querySelector('#typing');


var options = {
    strings: ["Full Stack Web Developer.", "UI/UX Designer.", "Front End Developer"],
	typeSpeed: 100,
	backSpeed: 100,// backspacing speed
	backDelay: 500,// time before backspacing
	loop: true,
	loopCount: false,// false = infinite
	showCursor: true,
	cursorChar: "|",
	backDelay: 1000,
  };
  
  var typed = new Typed('#typing', options);
  $(function(){
	$("#typing").typed({
		strings: ["Developers.", "Designers.", "People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 40,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});


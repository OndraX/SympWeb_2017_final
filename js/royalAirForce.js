'use strict';
document.body.classList.remove('scrolled-past-menu');
document.body.classList.remove('noscript');
function getCookie(cname) {


    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
	 //console.log("cookie:",c);
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

	
var fps = 0;
var then = 0;
var _stopLines = false,
    _removeLines = false,
    startedScrollingAboveThing = false;
var deviceFPSCounter = document.createElement('div');
/*document.body.appendChild(deviceFPSCounter);
deviceFPSCounter.style.position = 'fixed';
deviceFPSCounter.style.top = '0px';
deviceFPSCounter.style.left = '0px';
deviceFPSCounter.innerHTML = "&nbsp;";
deviceFPSCounter.style.fontSize = "36px";*/
var performanceAverageator = 0, performanceCountator = 0;
	var _recentlyFired = false;
	var performantDevice = true;

var ua = navigator.userAgent.toLowerCase(); 
console.log('User Agent',ua);
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
  } else {
_removeLines = true;
_stopLines = true;
document.body.classList.add('no-lines');
  }
}
	var _degree = 0, _wasPositive = 0;


var rightAngledLines = function(parent, dx,dy, key, oleft,oright,height,width,scrolledTo, figureHeight, bufferHeight, elementTop,disable){
	    var main, ab, bc, cd;
	    var offsetRight = (figureHeight - scrolledTo) / 12 + oright;
      

 
    if(elementTop < bufferHeight){
            offsetRight =  Math.max( figureHeight/6 + (oright - scrolledTo)/6, 25); //TODO: equations for correct alignment
        }

    offsetRight =  25;

	    if (!document.getElementById(key)) {
	        main = document.createElement("div");
	        ab = document.createElement("div");
	        bc = document.createElement("div");
	        cd = document.createElement("div");
            
            main.setAttribute('id', key);
	        ab.setAttribute("id", key + '_ab');
	        bc.setAttribute("id", key + '_bc');
	        cd.setAttribute("id", key + '_cd');
	       
	        var len = Math.sqrt(dx * dx + dy * dy);
	        //len = len - 120;//TODO: make a constant

            main.style.position = 'absolute';
            main.style.top = '-2px';
            main.style.left = '0px';

	        [ab, bc, cd].map(function(element) {
	            main.appendChild(element);

	            element.style.position = "absolute";
	           /* element.style.height = '0px';
	            element.style.borderBottom = '3px solid';
	            element.style.backgroundColor = "#000000";
	            element.style.color = "inherit";*/
	            element.setAttribute('class', 'overlay-line line-horizontal');

	            /*element.innerHTML = "&nbsp;";*/
	        });


	    } else {
	        main = document.getElementById(key);
	        ab = document.getElementById(key + '_ab');
	        bc = document.getElementById(key + '_bc');
	        cd = document.getElementById(key + '_cd');


	        main.classList.add("animate-transform");
	  
  }
        if(!disable){
        var degree;
    
	    var pad = 20; // offset perpendicular lines so that they do not cross
	    if (dy <= 0) {
	        degree = ( pointersRef.length  + _wasPositive - (_degree++)) * pad;
              
	    } else {
	        degree = ( pointersRef.length  + (_degree++)) * pad;
                _wasPositive++;
        }
        
        //parent.innerText = _wasPositive;
    
       degree = Math.min(degree, dx); 
        var over = 3;
        
	    parent.appendChild(main); // must be appended before styling takes place

	    bc.style.width = '100px';
	    ab.style.width = offsetRight + degree + over + 'px';
 
	    ab.style.top = height + 'px';
	    bc.style.top = Math.min(height - dy, height) + 1 + 'px';
	    cd.style.top = height - dy + 'px';

            //// //console.log(dy);
        
	    bc.style.height = Math.abs(dy) + over - 1+ 'px';
	    bc.style.width = "0px";
	    bc.setAttribute('class', 'overlay-line line-vertical');
    
    
       /* var prevRotation = globalRotations[key];
        var diff = 0;
        globalRotations[key] = Math.atan2(-dy, -(dx - offsetRight - oleft)) * 180 / Math.PI;
        if (typeof prevRotation === 'undefined' || isNaN(prevRotation)) {
            prevRotation = globalRotations[key];
        } else {}

        diff = globalRotations[key] - prevRotation;
        var compareAgainst = 0;
        if (Math.sign(globalRotations[key] - compareAgainst) !== Math.sign((prevRotation % 360) - compareAgainst)) {
            globalRotations[key] = prevRotation + ((360 + diff) % 360); //get rotation smoothly(no jump from 180 to -180i)
        }
    
    
        bc.style.height = '0px';
	    bc.style.width = Math.sqrt(Math.pow(dx - oleft - offsetRight, 2 ), dy) + 'px';
	    bc.setAttribute('class', 'overlay-line line-horizontal');
    
        bc.style.transform = 'rotate(' + globalRotations[key] + 'deg) translateZ(0)';
        bc.style.transformOrigin = '0 100%';
	    cd.style.width = offsetRight + 'px';*/

    width = 0;
	    ab.style.right = (width + 0) + "px";
	    //bc.style.right = (width + offsetRight + degree) + 'px';
	    bc.style.right = (width + offsetRight + degree) + 'px';
	    cd.style.right = (width + offsetRight + degree) +  1 + 'px';
	    //cd.style.right = (width + dx - oleft + degree) + 1 + 'px';
	    cd.style.width = Math.abs(dx - (width + offsetRight + degree)) + 'px';
            main.style.display = "block";
        }else{
            
            main.style.display = "none";
          
		 // //console.log(main);
        
		if(_removeLines){
		main.parentNode.removeChild(main);
		_stopLines = true;
		}
		}

	}

var globalRotations = {};
var _scrolledPast = false;
var getOffset = function (object) {

    var coords = {
        x: 0,
        y: 0
    };


    if (((typeof window.scrollY !== 'undefined') && (typeof object.getBoundingClientRect() !== 'undefined'))) {
        coords.x = object.getBoundingClientRect().left + window.scrollX;
        coords.y = object.getBoundingClientRect().top + window.scrollY;
    } else {

        throw new browserIsJankException();

    }

    return coords;

}

var performanceTempString = "",performanceAverageator = 0,performanceFinal = 0;

function updatePointers(points,offsetLeft,offsetRight,scrolledTo,figureHeight,bufferHeight,currentLink,enable) {
    //query lines -- make them if not made, init SVG if not inited (or call as prerequisitei)
    //// //console.log(points);
    
    
    
//BEGIN PERFORMANCE DETECTION

   var diff = performance.now() - then; 

if(diff < 128){ //if you have actually scrolled
     performanceAverageator+=diff;
	performanceTempString = diff + "," + performanceTempString;
	 //console.log("s: ",performanceTempString);	
        then = performance.now();
        performanceFinal=performanceAverageator/(++performanceCountator);
     //console.log("Time difference in scrolling: f:",performanceFinal,", a:",performanceAverageator,", c:",performanceCountator);	}
    
    then = performance.now();
    var first =  document.getElementById('first-heading') || document.getElementsByTagName('h2')[0];
    var eltop = first.getBoundingClientRect().top;
    
     if(document.getElementById('main-menu-padding-container').getBoundingClientRect().top < 50){
        document.body.classList.add('scrolled-past-menu');
    }else{
        document.body.classList.remove('scrolled-past-menu');
    }
    
    if(eltop < 250){
        
        if(performanceFinal > 50){ //less than 20fps @ 60Hz        
            
             //console.log("BEEP BEEP! You appear to have a really awfully slow device." ,performanceAverageator, performanceCountator);	
           	if(_scrolledPast || performanceCountator > 6){
		document.body.classList.add('no-lines');
		}
	    }
	
        }else{
	if(startedScrollingAboveThing && (performanceCountator < 5 || performanceFinal > 80) && _scrolledPast){
		document.body.classList.add('transparent-lines'); //detect devices so slow they slip through standard scroll end threshold
	}
	 if((performanceFinal > 60) && performanceCountator > 24){ //more than half a second of awful performance
            

 	setCookie('COOKIE_SLOW_DEVICE','TRUE');
		_removeLines = true;
	 //console.log('')
        }
	}
    //END TEMP PERFORMANCE DETECTION
    
    
    points.forEach(function (element, index, object) {
        var e = element;
        var dx, dy, parent, id;
        dx = e['dx'];
        dy = e['dy'];
        parent = e['parent'];
        id = 'point_' + e['key'];
	//var disableUnlessPerformant = e['disableUnlessPerformant'];    
       //also pass id and keyed element
        // //console.log(e.parent,currentLink);
        if(e.parent.classList){
        if(e.parent !== currentLink){
        e.parent.classList.remove('current-link');
        }
        else{
            e.parent.classList.add('current-link');
        }
        }
	/*if(!disableUnlessPerformant || performantDevice || true){*/

	if(enable){
        rightAngledLines(e['parent'], e['dx'],e['dy'], id, offsetLeft,offsetRight,e['parentHeight'],e['parentWidth'],scrolledTo,figureHeight,bufferHeight,eltop,e['disableUnlessPerformant'] | _removeLines);
        }/*else{
        var tempElem = document.getElementById(id);
        // //console.log('tempElem:', tempElem)
        if (tempElem == null) {
            tempElem = document.createElement('div');

            tempElem.setAttribute('class', 'overlay-line line-horizontal');
            tempElem.setAttribute('id', id);

            parent.appendChild(tempElem);
        }

        tempElem.style.width = '100px';
        tempElem.style.transformOrigin = '100% 100%';
        if (typeof globalRotations === 'undefined') {
            window.globalRotations = {};
        }

        var prevRotation = globalRotations[id];
        var diff = 0;
        globalRotations[id] = Math.atan2(-dy, -dx) * 180 / Math.PI;
        if (typeof prevRotation === 'undefined' || isNaN(prevRotation)) {
            prevRotation = globalRotations[id];
        } else {}

        diff = globalRotations[id] - prevRotation;
        var compareAgainst = 0;
        if (Math.sign(globalRotations[id] - compareAgainst) !== Math.sign((prevRotation % 360) - compareAgainst)) {
            globalRotations[id] = prevRotation + ((360 + diff) % 360); //get rotation smoothly(no jump from 180 to -180i)
        }
        
        var scale = Math.sqrt(dx * dx + dy * dy);
        tempElem.style.transform = 'rotate(' + globalRotations[id] + 'deg) scaleX(' + scale / 100 + ') translateZ(0)';
        //tempElem.style.height = dy +'px';
        tempElem.style.top = -dy + 'px';
        tempElem.style.left = -dx + 'px';
        tempElem.style.background = 'black';
        }*/    });
    
    
    _degree = 0;
    _wasPositive = 0; //calculates offset to page
    
    //foreach over arrs, calculate differences
    //output format: {parent, dx, dy, offsetLeft,offsetRight}
	



}

var pointersRef = [{
        anchor: 'harmonogram-link',
        alt: 'harmonogram',
        x: 0.58,
        y: 0.09
    },
    {
        anchor: 'o-akci-link',
        alt: 'o-akci',
        x: 0.56,
        y: 0.32,
        hoverEffect: '#heart'
    },
    {
        anchor: 'kontakt-link',
        alt: 'kontakt',
        x: 0.16,
        y: 0.56
    },
    {
        anchor: 'cesta-link',
        alt: 'cesta',
        x: 0.36,
        y: 0.92
    }];


pointersRef.sort(function (a, b) {
    return a.alt.offsetTop - b.alt.offsetTop; //TODO: maybe use true top for more DOM freedom	
});
var constPointedTo = 'figura'; //TODO: make const
// TODO: prerequisite: sort pointersRef by alt top position
var pointee = document.getElementById('pointed-to');
var selector = '';
var _objects = {};
var bindings = [];
var _top = window.scrollY;
var wheelJaggednessTimer; //the bleeding scroll wheel doesn't fire when it finishes
/*window.addEventListener('mousewheelup', function(){
        clearTimeout(wheelJaggednessTimer);
        handleScroll(true);
        wheelJaggednessTimer = setTimeout(function(){window.scrollTo(window.scrollX, window.scrollY);}, 500)});
window.addEventListener('DOMMouseScroll', function(){
        clearTimeout(wheelJaggednessTimer);
        handleScroll(true);
        wheelJaggednessTimer = setTimeout(function(){window.scrollTo(window.scrollX, window.scrollY);}, 500)});
window.addEventListener('onmousewheel', function(){
        clearTimeout(wheelJaggednessTimer);
        handleScroll(true);
        wheelJaggednessTimer = setTimeout(function(){window.scrollTo(window.scrollX, window.scrollY);}, 500)});
*/

window.addEventListener('DOMContentLoaded', function(){
						

					  	var stopLines = getCookie('COOKIE_SLOW_DEVICE');

if(stopLines === "TRUE"){
	_stopLines = true;
	document.body.classList.add('no-lines');
	}
					    //console.log("loaded");
                                           handleScroll();});

document.body.addEventListener('DOMContentLoaded', function(){ //console.log("loaded");
                                           handleScroll();});

window.addEventListener('load', function(){ //console.log("loaded");
                                           handleScroll();});
window.addEventListener('resize', handleScroll,{passive:true});

var delayedExec = function(after, fn) {
    var timer;
    return function() {
        timer && clearTimeout(timer);
        timer = setTimeout(fn, after);
    };
};

window.addEventListener('scroll', handleScroll,{passive:true});
window.addEventListener('mousewheel', handleScroll,{passive:true});
window.addEventListener('onmousewheel', handleScroll,{passive:true});
window.addEventListener('touchmove', handleScroll,{passive:true});

function handleScroll(transitions){
    // //console.log("scrolling");
    var countup = 0;
    var setCurrentLink = null;
    // //console.log('handling that scroll');
    var parameters = [];
    
    // check if alts ha	ve been scrolled past 
    //_scrolledPast = false;
    pointersRef.forEach(function (line) {
        var pointer = document.getElementById(line.anchor);
        var alt = document.getElementById(line.alt);

        var pointsToNowhere = false;
        if (alt === null || typeof alt === 'undefined') {
            pointsToNowhere = true;
            alt = document.getElementById('page-foot');
        }
        
                // //console.log('alt: ', alt.getBoundingClientRect().top );
        
        //if (!_scrolledPast) {
            var scrollOffset = 60 * (countup++ + .85) - 10;
        // //console.log('countup:', scrollOffset);
            if (document.getElementById(pointersRef[0].alt).getBoundingClientRect().top < scrollOffset) {//temporary
                _scrolledPast = true;
            }else{
                _scrolledPast = false;
		 startedScrollingAboveThing = true;
            }
        //}
           // _scrolledPast = false; //*cri everitiem*
        var pointee =  ((_scrolledPast) ? document.getElementById(line.alt): document.getElementById(constPointedTo)); //if not scrolled past, get body position, else get
        var pos1 = getOffset(pointee);
        if(!_scrolledPast){
        pos1.x += pointee.offsetWidth * line.x;
        pos1.y += pointee.offsetHeight * line.y;
            
        }else{
            pos1.x += pointee.offsetWidth; 
            pos1.y += pointee.offsetHeight;
            
        }
        
        if(document.getElementById(line.alt).getBoundingClientRect().top < 250){
            setCurrentLink = pointer; //dynamic link lightupification
        }
        
        
        var pos2 = getOffset(pointer);
        pos2.y += pointer.offsetHeight;
        var dx = pos2.x - pos1.x;
        var dy = pos2.y - pos1.y;
		
        //	// //console.log('pos1:',pos1,'pos2:',pos2);	
        //var parent = initSVG();
        parameters.push({
            'key': line.anchor,
            'dx': dx,
            'dy': dy,
            'parent': pointer,
            'parentWidth': pointer.offsetWidth,
            'parentHeight': pointer.offsetHeight/2,
	    'disableUnlessPerformant': _scrolledPast,
        });
    });
  /* if(_scrolledPast){
	document.body.classList.add('no-lines');
	}else if(document.body.classList.contains('no-lines')){
	document.body.classList.remove('no-lines');
	}*/
    function pointersDelegate(array,offsetLeft,offsetRight,scrolledTo,figureHeight,bufferHeight,currentLink,enable) {
        updatePointers(array,offsetLeft,offsetRight,scrolledTo,figureHeight,bufferHeight,currentLink,enable);
    }

    requestAnimationFrame(function () {
        pointersDelegate(parameters,20,20,window.scrollY,document.getElementById("figura").offsetHeight,300,setCurrentLink,!_stopLines);
    });
}

function browserIsJankException() {
    // //console.log("Your browser does not seem to support functionality which is key for a cosmetic feature of this website. So no biggie.");
    return 0;
}


function makeDistantRelative(hoveree,distantRelative,classes){//TODO: adjust for generic function
    
    hoveree.addEventListener('mouseover',function(){
   distantRelative.classList.add(classes);
})
    hoveree.addEventListener('mouseout',function(){
   distantRelative.classList.remove(classes);  
});
    
}

}
makeDistantRelative(document.querySelector('#o-akci-link'),document.querySelector('#heart'),'hovered');
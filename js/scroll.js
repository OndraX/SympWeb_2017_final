'use strict';
var IDglobal = 0;
var _scrolledPast = false;
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight,
        D.documentElement.scrollHeight,
        D.body.offsetHeight,
        D.documentElement.offsetHeight,
        D.body.clientHeight,
        D.documentElement.clientHeight
    );
}
 var globalRotations = {};   
var globalCounter = {};  
var svg; //needed to be global
var svgNS = "http://www.w3.org/2000/svg"; 
var pointers = $('*[data-pointsTo]');
var pointee = $('[data-pointedto]').first();//TODO: create more elaborate selector
//console.log(pointee.position().left);
var coordRef = {'brain':{x:.39,y:.09,id:'#program'},
                'heart':{x:.32,y:.30,id:'#o-akci'},
                'junk':{x:.395,y:.50,id:'#kontakt'},
                'foots':{x:.36,y:.92,id:'#cesta'}};


var initSVG = function(){
    console.log("Initing that SVG");
   if(!document.getElementById("SVG-overlay")){ 
    var o = document.createElementNS(svgNS,"svg");
	}else{
	o = document.getElementById("SVG-overlay");
	}

    document.body.appendChild(o);
    o.setAttribute("id","SVG-overlay");
//    if(makeFilter){makeFilter(o,svgNS);}
    return o;
    
}

var resizeSVG = function(){


        console.log("resizing that SVG");
            if(document.getElementById("SVG-overlay") == null){
                svg = initSVG();
            }
            
            /*svg.setAttribute("height",  window.innerHeight);
            svg.setAttribute("width",   window.innerWidth);*/
            /*svg.style.height= getDocHeight()  + 'px';
            svg.style.width=  window.innerWidth + 'px';*/
            updateThings(); 
        }
        
        var makeLine = function(parent,x1,y1,x2,y2,key,rest){
        	var line = null;
            if(typeof rest === 'undefined'){
                rest = [];
            }

	
	
	 if(!svg){ svg = initSVG();}  
	
             var dx = (x2-x1);
	     var dy = (y2-y1)
		var len = Math.sqrt(dx*dx + dy*dy);
                len = len;// - 120;//TODO: make a constant

	 if(!document.getElementById(key)){ 

            var line = document.createElement("div");
         parent.appendChild(line);
		line.style.position = "absolute";
		line.style.top = parent.offsetHeight -4 + 'px';
		line.style.left =1 + 'px';
		line.style.width = '100px';
		line.style.height = '0px';
		line.style.borderBottom = '3px solid';
		line.style.backgroundColor = "#000000";
		line.style.color = "inherit";
		line.setAttribute('class','line');
		line.setAttribute('id',key);
		line.innerHTML = "&nbsp;";
	    /* line.setAttributeNS(null,'id',key);
             line.setAttributeNS(null,'x1',x1);
             line.setAttributeNS(null,'y1',y1);
             line.setAttributeNS(null,'x2',x1 + 100);
             line.setAttributeNS(null,'y2',y1);
	*/
		}else{
		line = document.getElementById(key);
            line.classList.add("animate-transform");
		}

            var prevRotation = globalRotations[key];
            var diff = 0;
globalRotations[key] = Math.atan2(-dy,-dx)*180/Math.PI; 
                if(typeof prevRotation === 'undefined' || isNaN(prevRotation)){
                prevRotation = globalRotations[key];
                }else{
		}

		diff = globalRotations[key] - prevRotation;
                var compareAgainst = 0;
            if(Math.sign(globalRotations[key] - compareAgainst) !== Math.sign((prevRotation % 360) - compareAgainst)){
                globalRotations[key] = prevRotation + ((360 + diff ) % 360);
            }
		 //Should be a foolproof way to count angles over 2pi -- otherwise jump to 0 causes twitchy animation
            console.log("rotation angle:" , globalRotations[key]);
var scale = len - 120;

		//console.log(transformString);
        	line.style.transform = 'rotate(' + globalRotations[key]  + 'deg) scaleX('+scale/100+') translateZ(0)';
            line.style.opacity = "1";
		//line.setAttributeNS(null,'transform','translate('+x1+' '+y1+') rotate('+rotate+') scale(' +scale/100 + ')');    
	line.style.transformOrigin = '0px 0px';        
	/*if(typeof rest['color'] === 'undefined'){
             	line.setAttributeNS(null,"stroke","#000000");
                line.style.stroke = "#000000";
                }else{
             	line.setAttributeNS(null,"stroke",rest['color']);            line.style.stroke = rest['color'];
		}
           
                if(typeof rest['width'] === 'undefined'){
             	line.setAttributeNS(null,"stroke-width",'1');
                line.style.strokeWidth = '1px';
                }else{
             	line.setAttributeNS(null,"stroke",rest['width']);            line.style.strokeWidth = rest['width'] + 'px';
		}
	
		line.setAttribute("mask", "url('#fade')");
	*/
	 
            //console.log("The element is here:");
            //console.log($('#'+key));
//console.log($('#'+key).offset());
        }
        var menu = document.getElementById("main-menu");
        window.addEventListener("resize",resizeSVG);
        window.addEventListener("load", doItAll);
	window.addEventListener("scroll",function(){updateThings();
						    snap(menu);});	
	window.addEventListener("wheel",updateThings);	
	//var int = window.setInterval(updateThings,50,false);
	function uid(prefix = ""){
	if(typeof id == 'undefined'){
		window.id = 0;
		}
	return prefix + String(id++);
	}        
        
        function doItAll(){
            console.log("doing that all");
             svg = initSVG();  
             resizeSVG();
	     updateThings();
        }
        
	function updateThings(){//TODO: function to update pointation origin based on scroll top, modify function accordingly
//TODO: add link between pointer and pointee, change line colour on hover	
                                       //console.log("updating those things");        
             pointers.each(function(){
           // console.log("foreaching over those pointers");
                 var e = $(this);
                 var u;
	if(!e.attr('data-key')){
		u = uid();
		e.attr('data-key',u);
		}else{
		u = e.attr('data-key');
		}

                 var data = 'use strict';
var IDglobal = 0;
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight,
        D.documentElement.scrollHeight,
        D.body.offsetHeight,
        D.documentElement.offsetHeight,
        D.body.clientHeight,
        D.documentElement.clientHeight
    );
}
 var globalRotations = {};   
var globalCounter = {};  
var svg; //needed to be global
var svgNS = "http://www.w3.org/2000/svg"; 
var pointers = $('*[data-pointsTo]');
var pointee = $('[data-pointedto]').first();//TODO: create more elaborate selector
//console.log(pointee.position().left);
var coordRef = {'brain':{x:.39,y:.09},
                'heart':{x:.32,y:.30},
                'junk':{x:.395,y:.50},
                'foots':{x:.36,y:.92},};

var initSVG = function(){
    console.log("Initing that SVG");
   if(!document.getElementById("SVG-overlay")){ 
    var o = document.createElementNS(svgNS,"svg");
	}else{
	o = document.getElementById("SVG-overlay");
	}

    document.body.appendChild(o);
    o.setAttribute("id","SVG-overlay");
//    if(makeFilter){makeFilter(o,svgNS);}
    return o;
    
}

var resizeSVG = function(){


        console.log("resizing that SVG");
            if(document.getElementById("SVG-overlay") == null){
                svg = initSVG();
            }
            
            /*svg.setAttribute("height",  window.innerHeight);
            svg.setAttribute("width",   window.innerWidth);*/
            /*svg.style.height= getDocHeight()  + 'px';
            svg.style.width=  window.innerWidth + 'px';*/
            updateThings(); 
        }
        
        var makeLine = function(parent,x1,y1,x2,y2,key,rest){
        	var line = null;
            if(typeof rest === 'undefined'){
                rest = [];
            }

	
	
	 if(!svg){ svg = initSVG();}  
	
             var dx = (x2-x1);
	     var dy = (y2-y1)
		var len = Math.sqrt(dx*dx + dy*dy);
                len = len;// - 120;//TODO: make a constant

	 if(!document.getElementById(key)){ 

            var line = document.createElement("div");
         parent.appendChild(line);
		line.style.position = "absolute";
		line.style.top = parent.offsetHeight -4 + 'px';
		line.style.left =1 + 'px';
		line.style.width = '100px';
		line.style.height = '0px';
		line.style.borderBottom = '3px solid';
		line.style.backgroundColor = "#000000";
		line.style.color = "inherit";
		line.setAttribute('class','line');
		line.setAttribute('id',key);
		line.innerHTML = "&nbsp;";
	    /* line.setAttributeNS(null,'id',key);
             line.setAttributeNS(null,'x1',x1);
             line.setAttributeNS(null,'y1',y1);
             line.setAttributeNS(null,'x2',x1 + 100);
             line.setAttributeNS(null,'y2',y1);
	*/
		}else{
		line = document.getElementById(key);
            line.classList.add("animate-transform");
		}

            var prevRotation = globalRotations[key];
            var diff = 0;
globalRotations[key] = Math.atan2(-dy,-dx)*180/Math.PI; 
                if(typeof prevRotation === 'undefined' || isNaN(prevRotation)){
                prevRotation = globalRotations[key];
                }else{
		}

		diff = globalRotations[key] - prevRotation;
                var compareAgainst = 0;
            if(Math.sign(globalRotations[key] - compareAgainst) !== Math.sign((prevRotation % 360) - compareAgainst)){
                globalRotations[key] = prevRotation + ((360 + diff ) % 360);
            }
		 //Should be a foolproof way to count angles over 2pi -- otherwise jump to 0 causes twitchy animation
            console.log("rotation angle:" , globalRotations[key]);
var scale = len - 120;

		//console.log(transformString);
        	line.style.transform = 'rotate(' + globalRotations[key]  + 'deg) scaleX('+scale/100+') translateZ(0)';
            line.style.opacity = "1";
		//line.setAttributeNS(null,'transform','translate('+x1+' '+y1+') rotate('+rotate+') scale(' +scale/100 + ')');    
	line.style.transformOrigin = '0px 0px';        
	/*if(typeof rest['color'] === 'undefined'){
             	line.setAttributeNS(null,"stroke","#000000");
                line.style.stroke = "#000000";
                }else{
             	line.setAttributeNS(null,"stroke",rest['color']);            line.style.stroke = rest['color'];
		}
           
                if(typeof rest['width'] === 'undefined'){
             	line.setAttributeNS(null,"stroke-width",'1');
                line.style.strokeWidth = '1px';
                }else{
             	line.setAttributeNS(null,"stroke",rest['width']);            line.style.strokeWidth = rest['width'] + 'px';
		}
	
		line.setAttribute("mask", "url('#fade')");
	*/
	 
            //console.log("The element is here:");
            //console.log($('#'+key));
//console.log($('#'+key).offset());
        }
        var menu = document.getElementById("main-menu");
        window.addEventListener("resize",resizeSVG);
        window.addEventListener("load", doItAll);
	window.addEventListener("scroll",function(){updateThings();
						    snap(menu);});	
	window.addEventListener("wheel",updateThings);	
	//var int = window.setInterval(updateThings,50,false);
	function uid(prefix = ""){
	if(typeof id == 'undefined'){
		window.id = 0;
		}
	return prefix + String(id++);
	}        
        
        function doItAll(){
            console.log("doing that all");
             svg = initSVG();  
             resizeSVG();
	     updateThings();
        }
        
	function updateThings(){//TODO: function to update pointation origin based on scroll top, modify function accordingly
//TODO: add link between pointer and pointee, change line colour on hover	
                                       //console.log("updating those things");        
             pointers.each(function(){
           // console.log("foreaching over those pointers");
                 var e = $(this);
                 var u;
	if(!e.attr('data-key')){
		u = uid();
		e.attr('data-key',u);
		}else{
		u = e.attr('data-key');
		}
                 var x, y;
                 var ref = coordRef[e.attr('data-pointsTo')];//batch get before batch set
              /*   var heading = document.querySelector(data.id);
                 console.log("heading:", heading);
                 if(heading  == null ){
                     heading = document.querySelector('#page-foot');
                 }
                 if(heading.getBoundingClientRect().top < 0){
                     
                    x = heading.offsetLeft + 0.5 * pointee.width();
                    y = heading.offsetTop + 0.5 * pointee.height();    
                     
                    
                 }else{*/
                    x = pointee[0].offsetLeft + ref.x * pointee.innerWidth;
                    y = pointee[0].offsetTop + ref.y * pointee.innerHeight;  
                 //}
                    
                 
		//console.log('x:',x," ; y: ", y);
		var mainMenu = $("#main-menu");
		var left = mainMenu.position().left;
                 if(typeof makeLineRightAngle !== 'undefined'){
                     makeLine = makeLineRightAngle;
                 }
                 
		//mainMenu.css({'position':'absolute','top':window.scrollY,'right':'0px'});
             makeLine(e[0],x,y,  left + e.position().left +  2, e.offset().top +  e.innerHeight(),u,{'width':3});
            
            // console.log(e);
             });

	}        
 
function snap(element){
if(element.getBoundingClientRect())
} 

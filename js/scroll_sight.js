	var _degree = 0, _wasNegative = false;
	var makeLineRightAngle = function(parent, x1, y1, x2, y2, key, rest) {
	    var main, ab, bc, cd;
	    var offsetRight = 250 - 40 * window.scrollY/window.innerHeight, 
            offsetLeft = 200 +  40 * window.scrollY/window.innerHeight;
        
        if(document.getElementById("first-header").offsetTop - document.body.scrollTop < 0){
            offsetRight -= 100;
        }
	    if (typeof rest === 'undefined') {
	        rest = [];
	    }

 var dx = (x2 - x1);
	        var dy = (y2 - y1);


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
	        len = len; // - 120;//TODO: make a constant

            main.style.position = 'absolute';
            main.style.top = '-9px';
            main.style.right = '0px';

	        [ab, bc, cd].map(function(element) {
	            main.appendChild(element);

	            element.style.position = "absolute";
	           /* element.style.height = '0px';
	            element.style.borderBottom = '3px solid';
	            element.style.backgroundColor = "#000000";*/
	            element.style.color = "inherit";
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
        
	    var pad = 20; // offset perpendicular lines so that they do not cross
	    var items = 4;
	    if (dy <= 0) {
	        degree = (items - (_degree++) - 1) * pad;
            _wasNegative++;
	    } else {
	        degree = ( (_degree++) - _wasNegative) * pad;
	    }
        
        if(_degree >= items){
                _degree = 0;
                _wasNegative = 0;
        }
        
        var over = 3;
        
	    parent.appendChild(main); // must be appended before styling takes place

	    bc.style.width = '100px';
	    ab.style.width = offsetRight + degree + over + 'px';
 
	    ab.style.top = parent.offsetHeight + 'px';
	    bc.style.top = parent.offsetHeight+ 3 + 'px';
	    cd.style.top = parent.offsetHeight - dy + 'px';
        
        
        
             //console.log(dy);
        
	    /*bc.style.height = Math.abs(dy) + over - 1+ 'px';
	    bc.style.width = "0px";*/
        
        dx_offset = dx - offsetRight - offsetLeft;
         var prevRotation = globalRotations[key];
            var diff = 0;
globalRotations[key] = Math.atan2(-dy,-dx_offset)*180/Math.PI; 
        console.log(globalRotations[key]);
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
        var scale = Math.abs(Math.sqrt(Math.pow(dy,2)+Math.pow(dx_offset,2)));

		//console.log(transformString);
        	bc.style.transform = 'rotate(' + globalRotations[key]  + 'deg) scaleX('+scale/100+') translateZ(0)';
            bc.style.transformOrigin = '0px 0px';
	    bc.setAttribute('class', 'overlay-line line-horizontal');
        

       

	    cd.style.width = offsetRight + 'px';
	    var width = parent.offsetWidth;
	    ab.style.right = (width) + "px";
	    bc.style.right = (width + offsetRight -offsetLeft + degree + over) + 'px';
	    cd.style.right = (width + dx - offsetLeft) + 1 + 'px';
	    cd.style.width = dx - (width + offsetRight + degree) + 'px';
cd.style.width = offsetLeft + 'px';

	}
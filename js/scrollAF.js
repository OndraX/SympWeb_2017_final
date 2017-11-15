function stuff(scrolledPast,lightUp,lightUpPrev){//YAY for semantic names!
		if(lightUp)
		if(lightUp.classList){

            lightUp.classList.add('current-link');
        }
		
		if(lightUpPrev)
		if(lightUpPrev.classList){

            lightUpPrev.classList.remove('current-link');
        }
		
		/*if(lightUpPrev.parent)
		if(lightUpPrev.parent.classList){

            lightUpPrev.parent.classList.remove('current-link');
        }*/
		
		if(scrolledPast)
			document.body.classList.add('scrolled-past-menu');
		else
			document.body.classList.remove('scrolled-past-menu');
		
	
}

document.body.addEventListener("scroll",function(){
lightupificationMagic
	});
	
window.addEventListener('scroll', lightupificationMagic,{passive:true});
window.addEventListener('mousewheel', lightupificationMagic,{passive:true});
window.addEventListener('onmousewheel',lightupificationMagic,{passive:true});
window.addEventListener('touchmove', lightupificationMagic,{passive:true});
	var mLightUp = null,
		mScrolledPast = false;
	function lightupificationMagic(){
	
	var links = [{item:"#harmonogram",link:"#harmonogram-link"}, {item:"#o-akci",link:"#o-akci-link"}, {item:"#kontakt",link:"#kontakt-link"}, {item:"#cesta",link:"#cesta-link"}];
	
	mScrolledPast = (document.getElementById('main-menu-padding-container').getBoundingClientRect().top < 50);
	mLightUpPrev = mLightUp;
	links.forEach(function(o){
		
					
			if(document.querySelector(o.item).getBoundingClientRect().top< 60){
				mLightUp = document.querySelector(o.link);
			}
			

		});
				mLightUpPrev = (mLightUpPrev === mLightUp)?null:mLightUpPrev;
				
	
	function stuffDelegate(a,b,c){//and yet more semanticity
		stuff(a,b,c);
	}
	
	requestAnimationFrame(function(){
		stuffDelegate(mScrolledPast,mLightUp,mLightUpPrev);
	});
	
	
	}
	
	
	function makeDistantRelative(hoveree,distantRelative,classes){//TODO: adjust for generic function
    
    hoveree.addEventListener('mouseover',function(){
   distantRelative.classList.add(classes);
})
    hoveree.addEventListener('mouseout',function(){
   distantRelative.classList.remove(classes);  
});
    
}

makeDistantRelative(document.querySelector('#o-akci-link'),document.querySelector('#heart'),'hovered');

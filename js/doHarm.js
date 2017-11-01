var _doTituly = false;
var _itIsAlive = false;
var fallback = document.getElementById("harmonogram-fallback");
var harmonogram = document.getElementById("harmonogram");
if(!_doTituly){
    
    var tituly = document.getElementsByClassName('tituly');
    
    for(var i = 0; i< tituly.length; i++){
        
        tituly[i].style.display = "none";//TEMP
        
        //console.log("removed titul: \'",tituly[i].textContent,"\'");
        
    }
    
}

if(_itIsAlive){
    
   fallback.style.display = "none"; //TEMP  
    
   /*var request = new XMLHttpRequest();
   request.open("GET", "/harmonogram/temp.json", false);
   request.send(null);
   var harmonogram = JSON.parse(request.responseText);
   alert(my_JSON_object.result[0]);*/
    
}else{
    harmonogram.style.display = "none"; //TEMP  
  
    
}
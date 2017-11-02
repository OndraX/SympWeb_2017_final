var _doTituly = false;
var _itIsAlive = false;
var fallback = document.getElementById("harmonogram-fallback");
var harmonogram = document.getElementById("harmonogram-wrap");
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


var data = [{
    'jmeno': 'Petr Kulhánek',
    'jmenoTituly': 'Prof. RNDr. Petr KulhĂˇnek, CSc.,',
    'medailon': '',
    'cas': null,    
},
{
    'jmeno': 'Dana Drábová',
    'jmenoTituly': 'Ing. Dana DrĂˇbovĂˇ, Ph.D.',
    'medailon': '',
    'cas': null,    
},
{
    'jmeno': 'Martin Soukup',
    'jmenoTituly': 'Doc. PhDr. Martin Soukup, Ph.D.',
    'medailon': '',
    'cas': null,    
},
{
    'jmeno': '',
    'jmenoTituly': '',
    'medailon': '',
    'cas': null,    
} 

    
    ];

    var constCount = 3;
var build = function(data, parent){
    
    var dataSub = [];
    var ctr = 0;
    var item;
    while(item = data.splice(Math.floor(Math.random()*data.length),1)[0] && dataSub.length < (constCount || 3)){
          
        dataSub.push(item);
        
          }
    console.log(dataSub);
    
    
    
}

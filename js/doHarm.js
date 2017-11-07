var _doTituly = false;
var _itIsAlive = true;
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


var samplePrednasky = [{
    'jmeno': 'Petr Kulhánek',
    'nazev': 'Bing bong název přednášky',
    'jmenoTituly': 'Prof. RNDr. Petr Kulhánek, CSc.,',
    'medailon': 'woopty doo text medailonu doobly diio',
    'anotace':'bla bla bla text anotace bla bla bla',
    'cas': null, 
    'ref': 1
},
{
    'jmeno': 'Dana Drábová',
    'nazev': 'Bing bong název přednášky',
    'jmenoTituly': 'Ing. Dana Drábová, Ph.D.',
    'medailon': 'woopty doo text medailonu doobly diio',
    'anotace':'bla bla bla text anotace bla bla bla',
    'cas': null, 
    'ref': 2
},
{
    'jmeno': 'Martin Soukup',
    'nazev': 'Bing bong název přednášky',
    'jmenoTituly': 'Doc. PhDr. Martin Soukup, Ph.D.',
    'medailon': 'woopty doo text medailonu doobly diio',
    'anotace':'bla bla bla text anotace bla bla bla',
    'cas': null, 
    'ref': 3
},
{
    'jmeno': 'Člověk McOsoba',
    'nazev': 'Bing bong název přednášky',
    'jmenoTituly': 'Doc. Člověk McOsoba, Ph.D.',
    'medailon': 'woopty doo text medailonu doobly diio',
    'anotace':'bla bla bla text anotace bla bla bla',
    'cas': null, 
    'ref': 4
},
{
    'jmeno': 'Člověk McOsoba',
    'nazev': 'Bing bong název přednášky',
    'jmenoTituly': 'Doc. Člověk McOsoba, Ph.D.',
    'medailon': 'woopty doo text medailonu doobly diio',
    'anotace':'bla bla bla text anotace bla bla bla',
    'cas': null, 
    'ref': 4
},                    
                       
                      ];

var head = ['Prostor:','Aula','USV','Sborovna','P2.2','P2.3'];

var content = [
    
    {'den':'sobota', 
    'program':[
        
        {'cas':'10-12','prednasky':samplePrednasky},
        {'cas':'12-13','prednasky':samplePrednasky},
        {'cas':'13-15','prednasky':samplePrednasky},
        {'cas':'15-17','prednasky':samplePrednasky},
        {'cas':'17-19','prednasky':samplePrednasky},
        
    ]},
    {'den':'neděle', 
    'program':[
        
        {'cas':'10-12','prednasky':samplePrednasky},
        {'cas':'12-13','prednasky':samplePrednasky},
        {'cas':'13-15','prednasky':samplePrednasky},
        {'cas':'15-17','prednasky':samplePrednasky},
        {'cas':'17-19','prednasky':samplePrednasky},
        
    ]}
    
    ];

if(typeof data !== 'undefined'){
    
    content = data;
    
}
    var constCount = 3;
var makeRandomSelection = function(data, parent){
    
    var dataSub = [];
    var ctr = 0;
    var item;
    while(dataSub.length < (constCount || 3)){
          item = data.splice(Math.floor(Math.random()*data.length),1)[0];
        dataSub.push(item);
        
          }
    console.log(dataSub);
    
    
    
}

function createDOM(obj,text,properties,parent){
    
    var o = document.createElement(obj);
    
    for (var name in properties){
        //TODO: traverse tree if object(css)
        if(properties.hasOwnProperty(name)){
        o.setAttribute(name,properties[name]);
        }   
    }
    
    o.innerHTML = text;
    
    parent.appendChild(o);
    return o;
}

String.prototype.toBactrianCamelCase = function(str){//capitalise even the beginning -- convert name to ref
  return this.split(' ').map(function(word,index){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}
String.prototype.titlify = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var build = function(data,parent){

    data.forEach(function(day){
        createDOM('h2',day['den'],{class:'headingClass',},parent);
        var table = createDOM('table','',{'class':'table-harm u-full-width u-max-full-width standard','id':'tableId'},parent);
        var th = createDOM('tr','',{'class':'thClass','id':'thId'},createDOM('thead','',{'class':'theadClass','id':'tableHeadId'},table));
        
        for(var i in day['header']){
            createDOM('th',day['header'][i],{'class':'tableClass','id':'tableHeadId'},th);
        }
        day['program'].forEach(function(list){
            
            var row = createDOM('tr','',{'class':'rowClass'},table);
            
            createDOM('td',list['cas'],{'class':'harm_cas',},row);
            list['prednasky'].forEach(function(prednaska){
                
                var props = {'class':'cellClass','id':prednaska['ref']};
                console.log(prednaska["spans"], prednaska.hasOwnProperty("spans"));
                if(prednaska.hasOwnProperty("spans")){
                    
                    props["colspan"] = prednaska["spans"];
                    props["class"] = "cellClass center";
                    
                }
               var item = createDOM('td','',props,row);  
                var nazev = '</strong> ';
                if(prednaska['nazev'].length>0){
                    nazev = ':' + '</strong> ' + prednaska['nazev'].titlify();
                }
               var text = '<strong>' + prednaska['jmeno']  + nazev;
               //pra sááár na
                   
               if(!(prednaska['isEmpty'] )  && ((typeof doLinks === 'undefined') | doLinks)){
                   var link = createDOM('span',text,{'class':'pointable default'/*,'href':'#'+prednaska['ref']*/},item);
                   var pred = function(prednaska){
                       
                       var popup = vex.open({
                       content: '',
                       buttons: null,

                        });
                           createDOM('h2',prednaska['nazev'].titlify(),{class:'popupHeading'},popup.contentEl);  
                          if(prednaska['anotace'].length > 0)
                                createDOM('p',prednaska['anotace'],{},popup.contentEl);
                           createDOM('h2',(typeof prednaska['jmenoTituly'] !== 'undefined')?prednaska['jmenoTituly']:prednaska['jmeno'],{class:'popupHeading'},popup.contentEl);
                           createDOM('p',prednaska['medailon'],{},popup.contentEl);
                       if(history.pushState) {
                           history.pushState(null, null, '#'+ prednaska['ref']);
                       }
                       else {
                           location.hash = '#' + prednaska['ref'];
                       }
                    
                    };
                   
                   link.addEventListener('click',function(e){e.preventDefault(); pred(prednaska)},false);
                   
                   
                   
                   
               }else{
                   createDOM('span',text,{'class':'textClass default'},item); 
               }
            });
            
        })
        
    });
    
}


document.addEventListener('DOMContentLoaded',function(){build(content, harmonogram)});

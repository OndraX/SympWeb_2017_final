<?php

$raw = file_get_contents("js/json/harm.json");

$data = json_decode($raw, true);

require 'vendor\autoload.php';
Mustache_Autoloader::register();


/*foreach($data as $den){
    
    echo "<h2 class = 'heading'>".$den['den']."</h2>";
    
    $o = "<table class = 'table-harm u-full-width u-max-full-width standard'>
            <thead>
                <tr>";
    
    foreach(array_merge(["Čas:"],$den['header']) as $h){
        $o.= "<td>".""."</td>";
    }
    
    
    $o.="</tr></thead>";
    
    
    
    
    $o.="</table>";
    echo $o;
        
        
        
    
}*/

$m = new Mustache_Engine;
echo $m->render('{{#.}}
{{#den}}<h2>{{&.}}</h2>
<table class = "table-harm u-full-width u-max-full-width standard">
    <thead>
        <tr>{{#header}} 
                <td>{{.}}
                </td>{{/header}}
            <tr>

        </thead>
        <tbody>
            {{#program}}
            <tr>
            <td>{{cas}}</td>
            {{#prednasky}}
            <td class = "harm-data{{#spans}} center" colspan="{{.}}{{/spans}}" {{#spansRows}} rowspan = "{{.}}"{{/spansRows}}>
                {{^isEmpty}}<span class = "pointable" data-ref="{{ref}}">{{/isEmpty}}
            <strong>{{&jmeno}}</strong>{{#nazev}}&nbsp;: {{&.}}{{/nazev}}
                {{^isEmpty}}</span>{{/isEmpty}}
            </td>
            {{/prednasky}}
            </tr>
            {{/program}}
        </tbody>    
        
    </table>{{/den}}

{{/.}}', $data); // Jsem břídil a nedokázal jsem si zformátovat json, takže ten template bude nečitelnej, mno
?>





 <!--data.forEach(function(day){
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
            
                if(prednaska.hasOwnProperty("spans")){
                    
                    props["colspan"] = prednaska["spans"];
                    props["class"] = "cellClass center";
                    
                }
                if(prednaska.hasOwnProperty("spansRows")){
                    
                    props["rowspan"] = prednaska["spansRows"];
                    
                }
               var item = createDOM('td','',props,row);  
                var nazev = '</strong> ';
                if(prednaska['nazev'].length>0){
                    nazev = ':<br>' + '</strong> ' + prednaska['nazev'].titlify();
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
                       if(prednaska.hasOwnProperty("lide")){
                           
                           prednaska["lide"].forEach(function(e){
                               
                               if(typeof e['anotace'] !== 'undefined'){createDOM('p',e['anotace'],{},popup.contentEl);
                                                                      }
                           createDOM('h2',(typeof e['jmenoTituly'] !== 'undefined')?e['jmenoTituly']:e['jmeno'],{class:'popupHeading'},popup.contentEl);
                           if(typeof e['medailon'] !== 'undefined'){createDOM('p',e['medailon'],{},popup.contentEl);
                                                                      }
                               
                           })
                           
                       }
                       
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
    
}-->
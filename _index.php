<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>TĚLO | Symposion GJK 2017</title>
	
	 <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>TĚLO - Symposion GJK 2017</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link href="css/eb-garamond.min.css" rel="stylesheet" type="text/css">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.min.css">
  <link rel="stylesheet" href="css/skeleton.min.css">
  <!--TODO: minimize overhead by joining minned files together (perhaps use google code thingy on server)-->
  <link rel="stylesheet" href="css/override.min.css">
  <link rel="stylesheet" href="css/maps.min.css">
  <link rel="stylesheet" href="css/pattern-fill.min.css">
  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d67b54">
<meta name="theme-color" content="#ffffff">

   <script src = "js/src/jquery-3.2.1.min.js"></script>
   <script src = "js/utils.min.js"></script>
   <script src="js/vex.combined.min.js"></script>
<script>vex.defaultOptions.className = 'vex-theme-wireframe'</script>
<link rel="stylesheet" href="css/vex.css" />
<link rel="stylesheet" href="css/vex-theme-wireframe.css" />
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-69182521-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-69182521-1');
  doLinks = true;
</script>
</head>
<body class = "scrolled-past-menu noscript">
<div id = "phone-overlay" class = "lt_tablet float-overlay">
    <button id = "drawer-button"></button>
    <div id = "drawer">
        
        <div id = "phone-menu" class = " soul">
		       <nav>
		 <ul>
	            <li class = "underline-wrap-thin">
	                <a  href="#harmonogram" class="animate-transform underline-inside">Program</a></li>
	            
                <li class = "underline-wrap-thin">
	                <a href = "#o-akci"  class="animate-transform underline-inside">O akci</a></li>
                <li class = "underline-wrap-thin">
	                <a href="#kontakt" class="animate-transform intext-illustration underline-inside">Kontakt</a></li>
	            
	            <li class = "underline-wrap-thin">
	                <a href="#cesta" class="animate-transform underline-inside">cesta</a></li>
	        </ul>
	    </nav>
             </div>
             <div class = "figure-wrap" id = "figura-mobile">
        <img class = "wrapped-image"  src="images/telo_rw.png" alt="tělo">
        <a class = "heart-wrap" href = "#o-akci"><img src="images/heart_color.png" alt="srdce" class="heart beating overlay-image"></a>
    </div>
    </div>
</div>

	<div id = "main-wrap" >
		<header id = "page-head" class="row">
                    
                    
          <img class="logo" src="images/logo.png" alt="logo">          
						<div class = "figure-wrap">
	        <img id = "figura" class = "telo" src="images/telo_rw.png" alt="tělo Symposion GJK">
	            <a class = "heart-wrap" href = "#o-akci"><img src="images/heart_color.png"  id = "heart" alt="srdce" class="heart beating overlay-image"></a>
</div>
		<table class = "align-left contact-info" id = "heads-up-info">
                    <tr>
                        <td><picture class = "social-icon">
    <source type="image/svg+xml" srcset="font-awesome-reduced/calendar.svg">
    <img src="font-awesome-reduced/calendar.png" alt="Kdy?">
</picture></td>
                        <td><strong>16.&nbsp;- 1&nbsp;8. 11. 2&nbsp;017</strong></td></tr>
                        
                        <td><picture class = "social-icon">
    <source type="image/svg+xml" srcset="font-awesome-reduced/map.svg">
    <img src="font-awesome-reducedmap.png" alt="Kde?">
</picture></td>
                        <td><a href = "#map">Parléřova 2&nbsp;, 169 0&nbsp;0 P&nbsp;raha 6&nbsp;</a></td></tr>
                      <tr>  <td><!--<img src="images/social_icons_facebook.png" class ="social-icon" alt="Facebook?">--><picture class = "social-icon">
    <source type="image/svg+xml" srcset="font-awesome-reduced/facebook.svg">
    <img src="font-awesome-reduced/facebook.png" alt="Facebook">
</picture></td>
                        <td><a href="https://facebook.com/SymposionGjk">fb.me/SymposionGjk</a></tr>
                       <tr> <td><picture class = "social-icon">
    <source type="image/svg+xml" srcset="font-awesome-reduced/envelope.svg">
    <img src="font-awesome-reduced/envelope.png" alt="e-mail">
</picture></td>
               <td><a href="mailto:symposion@gjk.cz">symposion@gjk.cz</a></td></tr>
                    </table>	

			<div class="four columns"></div>
		</header>
		<div class="row">
		<div id = "main-menu-padding-container">
	<div id = "main-menu" class = "gt_mobile soul pattern-fill-topography">
		       <nav>
		 <ul>
	            <li data-pointsTo="brain" class = "underline-wrap-thin">
	                <a  href="#harmonogram" id="harmonogram-link" class="animate-transform underline-inside">Program</a></li>
	            
                <li data-pointsTo="heart" class = "underline-wrap-thin">
	                <a href = "#o-akci" id="o-akci-link" class="animate-transform underline-inside">O akci</a></li>
                    <li data-pointsTo="junk" class = "underline-wrap-thin">
	                <a  href="#kontakt" id="kontakt-link" class="animate-transform underline-inside">Kontakt</a></li>
	            
	            <li  data-pointsTo="foots" class = "underline-wrap-thin">
	                <a  href="#cesta" id="cesta-link" class="animate-transform underline-inside">Cesta</a></li>
	        </ul>
	    </nav>
             </div>
		</div>
			<div class="container container-dock-left" id = "page-content-wrap">

<article id="harmonogram-part">	
			        <header class="subsection-header" id = "first-header">
                    <h2 id = 'harmonogram'>
                        Harmonogram Symposionu
                    </h2><br>
                    </header>

<section class = 'text-content twelve columns'>


    <p id="harmonogram-fallback">
    
    
<div id ="harmonogram-wrap">


    </div>

</section>
</article>

                   <article id = "o-akci-part">
                     <header class="subsection-header">
                    <h2 id = 'o-akci'>
                       O akci
                    </h2><br>
                    </header>
                    <section class = "text-content twelve columns">              <p>
                    <em>   
 Lezou vám už krkem akce, které ne&shy;mají hlavu ani patu? Máte plné zuby bez&shy;duchého mletí hubou? Připadá vám, jako by na pražské intelek&shy;tuální scéně tento pod&shy;zim mrzlo až praš&shy;<span class="accent">tělo</span>?  <strong>Nech<span class="accent">tělo</span> by to změnu?</strong></em>  Jsme stu&shy;denti, kteří ne&shy;drží jen tak jazyk za zuby a&nbsp;chceme vás proto srdečně pozvat  na 21. ročník Symposionu, před&shy;náškového a&nbsp;dis&shy;kusního fóra pořádané&shy;ho u&nbsp;příležitosti Dne studentstva. Zvána je široká veřejnost, není třeba se nikde pře&shy;dem registrovat; vstup je <strong>zdarma</strong>. Zapište si za uši, že se akce koná <strong>16.&nbsp;</strong>až&nbsp;<strong>18.&nbsp; listopadu 2017</strong>.
</p>   
      <p>Cílem Symposionu, zaměřeného každý rok na jiné téma, je zprost&shy;ředkovat návštěv&shy;níkům setkání s&nbsp;význam&shy;nými českými vědci, umělci a&nbsp;dalšími zajímavými osobnostmi. Bude řeč o&nbsp;tématech, která nám leží přímo pod nosem, ale i o jistých pikant&shy;nějších, ba dokonce přímo tabu&shy;izovaných zále&shy;žitostech. Komu to v poslední době ne&shy;dostatečně zažívá, může si tento deficit doplnit zážitky z workshopů, kon&shy;certu či filmové noci.
</p>
      <p>Rámcové téma pro Symposion 2017 zní: <strong class = "all-caps important"> TĚLO</strong>.
      </p>
	<p><em>Tělo neboli korpus, jako zá&shy;klad či schránka ukrývají&shy;cí a&nbsp;držící obsah po&shy;hromadě. Tělo, jako věc nám nejbližší a&nbsp;jediná vlastní. Senzualita a&nbsp;animalita, jako základní kámen naší existence. Tělo celistvé, živoucí a&nbsp;v pohybu.</em></p>
     <div class = "center-image-wrap">
     <img src="images/vrtelo.png" alt="Vrtělo" class="image soft-two-thirds">
     </div>
     <!--TODO: make slideshow of puns-->
      <!--<p><em>Co na srdci, to na jazyku</em> Komunikace pomocí těla, chuť, <br>
<em>Oko — do duše okno </em> Lorem ipsum dolor sit amet ... [duševní zdraví, optika]<br>
<em>Kosmos jako tělo[neco napasovatelnyho na prirodovedce]</em> Lorem ipsum dolor sit amet ... [nebeská tělesa, mikrotelesa, korpus literarni tvorby]</p>
      
      -->
                        <p>Až budete mít laloky pře&shy;sycené naší nes&shy;mírně bohatou dušev&shy;ní stravou, nasyťte se pro kom&shy;penzaci i&nbsp;tělesně, neboť hlad má velké oči. Do nosu si můžete dát v&nbsp;naší student&shy;ské kavárně, v jídel&shy;ně Scola&shy;rest si pří&shy;padně můžete naplnit i dal&shy;ší dutiny. Stravu ve Scolarestu na celý den objednáte za <strong>120</strong> Kč.</p><p>
Po dobře stráve&shy;ném dni můžou také ti, kterým bude tře&shy;ba trocha klidu na stráve&shy;ní všech zážitků, složit svá unavená tě&shy;la v&nbsp;naší noc&shy;lehárně či je očistit u&nbsp;nás ve sprchách, kde ruka ruku myje.
                           
                            Cena za noční uskladnění <strong>100</strong> Kč za osobu, vlastní spacák nezbytný. </p>
                            <p>
                            Máte-li o&nbsp;jedno či dru&shy;hé zájem, kon&shy;taktujte nás na e-mailu <a href="mailto:symposion@gjk.cz">symposion@gjk.cz</a>.</p>
      <p>
Na nikoho ne&shy;hledíme přes prsty, vítáme děti i&nbsp;zvířenu, do&shy;konce pro ně máme zvlášť uzpůsob&shy;ené prostory.
</p>
<p>
Pokud si budete chtít duševně odpočinout od svých rato&shy;lestí, můžete je od za&shy;čátku do konce před&shy;nášek ponechat v našem dětském kou&shy;tku, kde se mo&shy;hou vy&shy;řádit mezi spous&shy;tou her, paste&shy;lek a jiných krás, které oslní jejich smysly.
</p>
      <p><em>P.S.: Pro informace o&nbsp;aktuálním dění nezapomeňte sledovat naši <a href="https://www.facebook.com/SymposionGjk/">facebookovou stránku</a>.</em></p>
      
      <h4>Mediální partneři</h4>
        	
		<a  class = "intext-illustration image" href="http://www.kudyznudy.cz/?utm_source=kzn&utm_medium=partneri_kzn&utm_campaign=banner" title="Kudyznudy.cz - tipy na výlet" target="_blank"> <img src="images/partner/kudyznudy-RGB.jpg" style = "width: 50%; min-width: 250px; max-width: 468px; height: auto; mix-blend-mode: darken" border="0" alt="Kudyznudy.cz - tipy na výlet"> </a>
		  <!-- provizorium hadr --> 
	<img src = "images/o-akci.png" class = "intext-illustration">
                    </section>
                    </article>
			       


                <article id = "kontakt-part">
		<header class="subsection-header">
		<h2 id = 'kontakt'>Kontakt</h2><br><!--necessary because of scrolling feature-->
			

		</header>
		<section class="text-content twelve colums">
                   
                   <table class = "align-left contact-info">
                    <tr><td><picture class = "social-icon">
    <source type="image/svg+xml" srcset="font-awesome-reduced/map.svg">
    <img src="font-awesome-reduced/map.png" alt="Kde?">
</picture></td>
                        <td><a href = "#map">Parléřova 2&nbsp;, 169 0&nbsp;0 P&nbsp;raha 6&nbsp;</a></td></tr>
                       <tr> <td><picture class = "social-icon">
    <source type="image/svg+xml" srcset="font-awesome-reduced/facebook.svg">
    <img src="font-awesome-reduced/facebook.png" alt="Facebook:">
</picture></td>
				<td><a href="https://facebook.com/SymposionGjk">fb.me/SymposionGjk</a></td>
			</tr><tr>	<td><picture class = "social-icon">
	    <source type="image/svg+xml" srcset="font-awesome-reduced/envelope.svg">
	  <img src="font-awesome-reduced/envelope.png" alt="E-mail:">
	</picture></td>
				<td><a href="mailto:symposion@gjk.cz">symposion@gjk.cz</a></td></tr>
                    </table>

                   <p>
                   
                   <img src="images/kontakt.png" alt="Kontakt" class = "full-width two-thirds_gt-phablet" style = "float: right;
    height: auto;
    -webkit-shape-outside: polygon( 0 100%, 100% 100%, 100% 0, 25% 30%, 31% 70%);
    shape-outside: polygon( 0 100%, 100% 100%, 100% 0, 25% 30%, 31% 70%);
    -webkit-shape-margin: 2em;
    shape-margin: 2em;
    margin-left: -20%;
    max-width: 100%" class="wrap" property="image"><!--inline styles because specific to image-->
  
            
                    </p>
                                     
                    
		</section>
                </article>
                
                 <article id = "cesta-part">
			        <header class="subsection-header">
                    <h2 id = 'cesta'>
                        Jak se k nám dopravíte?
                    </h2><br>
                    </header>
                    <section class = "text-content twelve columns">
			
     <img src="images/cesta.png" class = "full-width large-screen-two-thirds  intext-illustration">
     
      <p class = "full-width large-screen-third"><em>

			
Náš duše- a&nbsp;tělovýchovný ústav se nachází v&nbsp;Gym&shy;náziu Jana Kepl&shy;era na adrese Parléřova 2, hned ved&shy;le v kovu zvěčněných těl veli&shy;kánů Tycha Braha a Jana Keplera, svého epo&shy;nyma. Kdo by chtěl k&nbsp;naší líto&shy;sti ne&shy;chat svoje tě&shy;lo zahnívat a&nbsp;namísto pro&shy;tažení kon&shy;četin svi&shy;žným během chřad&shy;nout v&nbsp;dopravním pro&shy;středku, může využít tram&shy;vajových linek 22 <strong> na Pohořelec</strong> nebo 25 <strong>na Hládkov</strong>.  </em></p>
</section>
<div id ="map-wrap">
<h3>Mapa</h3>
    <div id="map"></div>

</div>
                        
                </article>



                
			</div>
            </div>
	
	<div class="modal">
  <div class="modal-inner"> <a rel="modal:close">&times;</a>
    <div class="modal-content"></div>
  </div>
</div>

	
	<script src = "js/smoothAF.js"></script>
	<script src = "js/json/harm.js"></script>
	<script src = "js/doHarm.js"></script>
	
		<script src = "js/royalAirForce.min.js"></script>
    <!- ----------------------
    ------MAP SECTION-------
    ----------------------->

        <script src = "js/gmaps.js"></script>
	   <script>
      function initMap() {
        var kepler = {lat: 50.087775, lng: 14.387195};
          var theSunMotherfucker = kepler;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: theSunMotherfucker,
          styles: corporeal
        });
        var marker = new google.maps.Marker({
          position: kepler,
          map: map
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDLAMPlkHPG7YbKMjrAo6vC9IL5GPhawgw&callback=initMap">
    </script>
	<script>
    
    var mobileMenuButton = document.getElementById("drawer-button");
    var mobileAnchors = document.getElementById("phone-menu").getElementsByTagName('a');
	var handleDrawer = function(e){
            var clist = document.getElementById("phone-overlay").classList;
           console.log("Ship hattens"); 
            if(clist.contains("drawn-out")){
                clist.remove("drawn-out");
            }else{
                clist.add("drawn-out");
            }
        }

        
        mobileMenuButton.addEventListener('click',function(e){handleDrawer(e)});
       	for(var i =0 ; i<mobileAnchors.length; i++)(mobileAnchors[i].addEventListener('click',function(e){handleDrawer(e)}));
	
    </script>
</body>
</html>



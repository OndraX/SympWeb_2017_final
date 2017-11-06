var rozvrh = [
    {'den':'Čtvrtek 16.11.<strong> doprovodný program </strong>',
    'header': ['Aula'],
    'program': [
 {
   'cas': "18:30 - 18:45",
   'prednasky':['Zahájení']
 },
 {
   "cas": "18:45 - 19:30",
   'prednasky':['LukasCerny']
 },
 {
   "cas": "19:30 - 20:15",
   'prednasky':['LukasAdam']
 },
 {
   "cas": "20:15 - 21:00",
   'prednasky':['JakubCibula']
 },
 {
   "cas": "21:00 - 23:00",
   'prednasky':['JanVacha']
 }
    ]},   
    
    {'den':'Pátek 17.11',
     'header': ['Aula',
   'USV',
   'Sborovna',
   'P2.3',
   'P2.2'],
   
 program:[
 {
   'cas': '10:00 - 12:00',
    'prednasky':[
    'JanRoyt',
    'MartinSoukup',
    'PetrKulhanek',
    'PetrVyletal',
    'Jan Kozák'
    ]
 },
 {
   'cas': '12:00 - 13:00 Oběd',
       'prednasky':[
    '',
    '',
    '',
    '',
    ''
           ]
 },
 {
   'cas': '13:00 - 15:00',
       'prednasky':[
    'Debata (Umělá inteligence)',
    'KarelThein',
    'KaterinaKolarova',
    'JosefRidky',
    'IvaBaslarova'
           ]
 },
 {
   'cas': '15:00 - 17:00',
       'prednasky':[
    'HelenaIllnerova',
    'RadkaMajerova',
    'FilipMatejka',
    'TerezaGafnaVanova',
    'AliceKlouzkova'
           ]
 },
 {
   'cas': '17:00 - 19:00',
    'prednasky':[
    'MonikaSvecSybolova',
    'Vít Dvořák', //Hanus nebo Dvořák
    'LukasCerny',
    'OndrejBeran',
    'RadekSkarnitzl'
    ]
 },
 {
   'cas': '20:00 - 23:00',
       'prednasky':[
    'FILMOVÁ NOC',
    '',
    '',
    '',
    ''
           ]
 }
]},
    {   den:'Sobota 18.11.',
        'header': ['Aula',
   'USV',
   'Sborovna',
   'P2.3',
   'P2.2'],
        'program':[

 {
   'cas': '10:00 - 12:00',
   'prednasky':[
   'Debata (Transhumanismus)',
   'Martin Semerád',
   'Helena Vávrová',
   'P. Klusák',
   'MarieSalomonova'
   ]
 },
 {
   'cas': '12:00 - 13:00 Oběd',
   'prednasky':[
   'Beseda s Filipem Zajíčkem',
   '',
   '',
   '',
   ''
   ]
 },
 {
   'cas': '13:00 - 15:00',
   'prednasky':[
   'Debata (Žurnalistika)',
   'Lukáš Pollert',
   'DanaDrabova',
   'MartinSuk',
   'BarbaraHerz'
   ]
 },
 {
   'cas': '15:00 - 17:00',
   'prednasky':[
   'TomasChytka',
   'MichalBurian',
   'Flígl + Tesař',
   'Petr Zewlakk Vrabec',
   'Lucie Šrámková'
   ]
 },
 {
   'cas': '17:00 - 19:00',
   'prednasky':[
   'Šimon Pánek',
   'JanPaces',
   'PetrPojman',
   'PavelJosefMacku',
   'JohannaNejedlova'
   ]
 }
]
        
    }
];

var data ={'JanRomportl':{"jmeno":"Jan Romportl","cas":"Pátek 17.11. 13:00-15:00)","nazev":"","anotace":"","medailon":"Ing. Mgr. Jan Romportl, Ph.D. vystudoval kybernetiku a umělou inteligenci na Fakultě aplikovaných věd Západočeské univerzity v Plzni a filozofii vědy na Fakultě filozofické téže univerzity. Do roku 2015 se zabýval výzkumem v oblasti aplikované umělé inteligence a řečových technologií na Katedře kybernetiky FAV ZČU, kde také vyučoval předměty týkající se filozofických otázek umělé inteligence, vztahu nových technologií k člověku a historie kybernetiky. Od roku 2003 se zároveň věnoval alternativní teorii množin prof. Petra Vopěnky, se kterým úzce spolupracoval na přípravě plzeňských badatelských seminářů z fenomenologie matematiky. V letech 2009-2015 vedl oddělení Mezioborových aktivit výzkumného centra Nové Technologie ZČU (dnes oddělení Interakce člověka a stroje NTC ZČU). Od roku 2015 do současnosti působí na tomto pracovišti jako výzkumný pracovník a zároveň pracuje mimo akademickou sféru jako Chief Data Scientist ve společnosti O2 Czech Republic a.s..","reklama":"","ref":"JanRomportl"},"length":null,'RomanNeruda':{"jmeno":"Roman Neruda","cas":"Pátek 17.11. 13:00-15:00)","nazev":"","anotace":"","medailon":"Vědecký pracovník Ústavu informatiky AV ČR, přednáší na Matematicko-fyzikální fakultě Univerzity Karlovy v Praze. Zabývá se umělou inteligencí, hlavně oblastmi umělých neuronových sítí, evolučních algoritmů a inteligentních agentů a aplikací těchto metod v robotice, strojovém učení a získávání znalostí z dat (data mining).","reklama":"","ref":"RomanNeruda"},

'KaterinaKolarova':{"jmeno":"Kateřina Kolářová","cas":"Pátek 17.11. 10-12 (když nebude zbytí tak i 13-15)","nazev":"","anotace":"","medailon":"Mgr. Kateřina Kolářová, PhD. působí na katedře genderových studií při FHS UK v Praze. Zabývá se bádáním v oblasti genderu, feministických kulturních studií, queer teorie a disability studies. V současnosti pracuje na publikaci zabývající se HIV, AIDS a vnímání nemocných společností.","reklama":"","ref":"KaterinaKolarova"},

'JohannaNejedlova':{"jmeno":"Johanna Nejedlová","cas":"Sobota 18.11. 17-19","nazev":"","anotace":"","medailon":"Johanna Nejedlová je novinářka a aktivistka spolupracující mimo jiné s webovým portálem A2larm a deníkem Referendum. Je také členkou sdružení Konsent. Založila a momentálně vede osvětovou kampaň o znásilnění \"Když to nechce, tak to nechce\".","reklama":"","ref":"JohannaNejedlova"},

'MartinSoukup':{"jmeno":"Martin Soukup","jmenoTituly":"Doc. PhDr. Martin Soukup, Ph.D.","cas":"17.11., 10:00 - 12:00","nazev":"antropologická analýza a interpretace lidského těla","anotace":"V každé kultuře podstupuje lidské tělo specifické tělesné modifikace a tak může být naše tělesná schránka chápána jako specifický artefakt. Důraz je také kladen na disciplinaci lidského těla – vždy totiž dochází ke kulturně specifickému přivádění těla a tělesných procesů pod kontrolu. V neposlední řadě jsou lidské tělo a jeho procesy nositelé mnoha významů. Při provádění antropologické analýzy a interpretace lidského těla, při kterých se snažíme určit různé aspekty týkající se tělesnosti, stavíme na poznatcích z mnoha mimoevropských kultur z různých kulturních areálů.","medailon":"Doc. PhDr. Martin Soukup, Ph.D. vystudoval kulturologii na Filozofické fakultě Univerzity Karlovy v Praze. Po dokončení studia až do roku 2015 působil na Univerzitě Karlově jako odborný asistent. V dnešní době zde působí jako docent a zástupce vedoucího pro obor kulturní antropologie. Mezi jeho předměty odborného zájmu patří teorie, metodologie a dějiny sociální a kulturní antropologie. Zajímá se také o antropologii těla a vizuální antropologii. Zvýšenou pozornost věnuje oblasti Melanésie, kde provedl už několik terénních výzkumů, především pak v Papui-Nové Guineji. O svých poznatcích z této části Oceánie publikoval řadu studií. V roce 2017 se stal laureátem Ceny pro mladé vědce za společenské vědy právě díky svému výzkumu obyvatelstva na největším tropickém ostrově světa. Podílel se také na výstavě Lovci lebek v Náprstkově muzeu v Praze","reklama":"","ref":"MartinSoukup"},

'RadkaMajerova':{"jmeno":"Radka Majerová","jmenoTituly":"Mgr. Radka Majerová, Ph.D.","cas":"17.11. 13:00-15:00","nazev":"Řeč je světlo ve těle","anotace":"„…ve těle“ není chyba v předložce. Jde o psanou výpověď 25 letého muže s vývojovou anartrií, který byl do 19 let negramotný. Vývojová anartrie (neschopnost mluvit), stejně jako orální dyspraxie (dyskoordinace artikulace), dysfázie (porucha dětského porozumění) a afázie (porucha porozumění či produkce, gramatiky), postihuje vnitřněřečové procesy, odehrávající se v mozku. Hlavní obtíž tkví nikoli v řečově-artikulačních mechanismech, ale v jazykových mechanismech (fonologické analýze, plánování gramatiky). Mnohdy inteligentní lidé s jazykovými hendikepy mají rozvinuté obsahy vědomí a nechtějí být komunikačně omezeni obrázkovými systémy. Rádi by verbalizovali své myšlení, o čemž svědčí výrok muže, jemuž se to podařilo: „Řeč je světlo ve těle.“ Díky lingvistickým přístupům jsou lidé s vývojovou anartrií schopni získat gramotnost. Lidé s orální dyspraxií rozvinout psaní. Lidé s dysfázií naučit se rozumět, mluvit, psát. Lidé s afázií rehabilitovat čtení, psaní. Někteří z nich mohou být tělesně postiženi, jiní mohou vypadat takzvaně tělesně zdrávi. Video mj. představí zdánlivě zdravého 10 letého chlapce s nesrozumitelnou řečí, kterak halí tělo do pláště animovaného hrdiny. Vzdor vysokému intelektu je odmítán školami, i školami pro lidi s tělesným postižením, z důvodu, že není tělesně postižen. Kde vlastně mozek je? Není náhodou… v těle?!","medailon":"Mgr. Radka Majerová, Ph.D. pracuje v Jedličkově ústavu a školách a v Evropském centru jazykové rehabilitace jako klinická lingvistka. Zabývá se rozvojem jazykových schopností u lidí s kognitivně jazykovými hendikepy – afázií, dysfázií, vývojovou anartrií a orální dyspraxií. Vyvinula rehabilitační metody jazykového hendikepu: audiovizuální čtení, červenomodré psaní, software VoCo a epizodické komunikační scénáře.","reklama":"","ref":"RadkaMajerova"},

'PetrVyletal':{"jmeno":"Petr Vyleťal","jmenoTituly":"Ing. Petr Vyleťal, Ph.D.","cas":"17.11. 10:00-12:00","nazev":"Současné přístupy k hledání genetických příčin nemocí","anotace":"Molekulární medicína je vědní obor zkoumající podstatu nemocí na molekulární úrovni a získaných poznatků využívá ke zlepšení prevence, diagnostiky a léčby. Velikost lidského dědičného materiálu v kombinaci s jeho proměnlivostí a počtem lidí na Zemi jsou na jedné straně zdrojem velké rozmanitosti, ale na druhé i velkého množství geneticky podmíněných onemocnění. Ta byla v minulosti, vzhledem k omezeným možnostem zkoumání, členěna do řady oddělených kategorií. Současné technologie a poznatky o struktuře a funkci lidského dědičného materiálu nám však umožňují ucelenější pohled a my jsme dnes svědky zásadní změny pohledu na podstatu těchto onemocnění. Hranice mezi tradičními kategoriemi se vytrácejí a zároveň se nám otevírá cesta k zodpovězení otázek, nad kterými si lámaly hlavu předchozí generace vědců.","medailon":"Ing. Petr Vyleťal, Ph.D. pracuje jako vědecký pracovník a bioanalytik na Klinice dětského a dorostového lékařství 1. LF UK a VFN v Praze. Vystudoval biomedicínské inženýrství na VŠCHT v Praze. Získal doktorát v oboru Molekulární a buněčná biologie, genetika a virologie na 1. LF UK. Také získal atestaci v oboru klinické genetiky. Zabývá se výzkumem molekulární podstaty dědičných onemocnění ledvin a jejich diagnostikou.","reklama":"","ref":"PetrVyletal"},

'RadekSkarnitzl':{"jmeno":"Radek Skarnitzl","jmenoTituly":"doc. Mgr. Radek Skarnitzl, Ph.D.","cas":"17.11., 17:00 - 19:00 (případně 15:00 - 17:00)","nazev":"Jak používáme náš hlas a co o nás prozrazuje","anotace":"Hlas používáme jako bohatý nástroj, mnohdy aniž bychom si to uvědomovali. Přednáška představí plasticitu řeči, která nám umožňuje vyjadřovat širokou paletu komunikačních funkcí. Zaměří se na variabilitu melodického chování a na kvalitu hlasu v nejširším slova smyslu, od specifických nastavení hlasivkového kmitání po modifikace ústní a nosní dutiny. Hlas zároveň funguje jako naše „zvuková tvář“: stejně jako tvář prozrazuje mnohé o jejím nositeli, tak i z hlasu se o mluvčím dozvíme mnoho informací. Druhá část přednášky se proto věnuje perspektivě posluchače a tomu, co všechno o nás hlas může prozradit.","medailon":"Radek Skarnitzl je ředitelem Fonetického ústavu na Filozofické fakultě Univerzity Karlovy. K jeho hlavním zájmům patří oblasti pohybující se na pomezí fonetiky a dalších věd - například možnost identifikace mluvčího z řečového signálu pro forenzní účely, vliv řeči a konkrétních řečových jevů na psychosociální stránku komunikac nebo hodnocení mluvčího v komunikaci (v rodném i cizím jazyce).","reklama":"","ref":"RadekSkarnitzl"},

'KarelThein':{"jmeno":"Karel Thein","cas":"17.11. 13-15","nazev":"Hlavou ke hvězdám: lidské tělo v antické filosofii","anotace":"Vzpřímený postoj a jím uvolněné ruce jsou tím prvním, čím se na vnímatelné rovině liší lidské tělo od těla jiných živých bytostí:\nZatím co ostatní tvorstvo je schýleno, k zemi se dívá,\nčlověku vztyčenou tvář on [Prométheus] poskytl, k nebi mu kázal\nhledět a vzpřímený zrak vždy k hvězdám do výše zdvíhat. (Ovidius Proměny I, 84-86).\nZajímavost některých způsobů, jimiž jedinečný lidský postoj vysvětlují antičtí myslitelé včetně Platóna i Aristotela, spočívá v tom, že dokáže sloučit naturalistickou fyziologii na straně jedné (vliv srdce a krve) a silně intelektuální představu o smyslu lidské existence na straně druhé: vnitřní fyziologie a na ni vázaná anatomie vzpřímený postoj umožňuje, rozumová činnost je pak tím, čemu tento postoj slouží. Podrobnější pohled na vysvětlení tohoto typu rovněž ukáže, proč jeho stopy nečekaně nacházíme i v moderních teoriích, a to včetně teorie evoluční.","medailon":"Karel Thein (1961) studoval knihovnictví na FF UK a filosofii na École des Hautes Études en Sciences Sociales ve Francii. Přepracovaná disertační práce byla publikována pod názvem Le lien intraitable. Enquete sur le temps dans la République et le Timée de Platon. Věnuje se především dějinám antické a ranně moderní filosofie a filosofii umění. V dnešní době je profesorem v Ústavu filosofie a religionistiky FF UK. Píše jako externí spolupracovník například pro Respekt, časopis Aluze či Host.","reklama":"","ref":"KarelThein"},

'IvaBaslarova':{"jmeno":"Iva Baslarová","cas":"","nazev":"","anotace":"","medailon":"Iva Baslarová je socioložka a genderoložka vyučujucí na katedře genderových studií FHS. Zabývá se především otázkami feminismu a jeho vnímání a znázornění v popkultuře a médiích. Je externí spolupracovnicí portálu A2larm. cz a webového magazínu femag.cz","reklama":"","ref":"IvaBaslarova"},

'OndrejBeran':{"jmeno":"Ondřej Beran","cas":"","nazev":"Your Mind Has Left Your Body', 'My Body Is a Cage'","anotace":"My lidé jsme víc než jen tělo. Máme také ducha. A právě v ní spočívá to, kým doopravdy jsme. Takhle celkem běžně mluvíme \"my lidé\" i \"my filosofové\". O řadě hraničních fenoménů, které se zdají být právě \"o\" vztahu mezi tělem a myslí/duší - (drogová) závislost, reinkarnace, mimotělní zkušenosti -, ale lze uvažovat i bez tohoto vstupního předpokladu. I když je otázka, jestli pak budeme moudřejší, nebo spíš zmatenější","medailon":"Ondřej Beran je český filosof a fenomenolog. Po studiu latiny a filosofie na FF UK se stal badatelem ve Filosofickém ústavu AVČR, kde pracuje dodnes. Je také badatelem na částečný úvazek na FF ZČU v Plzni a profesorem filosofie na univerzitě v Pardubicích. Zaměřuje se především na analytickou filosofii, úlohy jazyka, paměti a času. Mezi jeho odborné publikace patří například knihy Když je řeč o barvách: Barvy jako předmět filosofického a empirického studia jazyka nebo Náš jazyk, můj svět: Wittgenstein, Husserl a Heidegger – vzájemná setkávání a míjení.","reklama":"","ref":"OndrejBeran"},

'AliceKlouzkova':{"jmeno":"Alice Klouzková","cas":"17.11. 15-17","nazev":"","anotace":"Czech Craft Heritage je projekt, jehož cílem je dokázat, že tradiční řemeslné techniky nejsou odsouzeny k zániku, ale mohou existovat jako funkční součást soudobého módní produkce. Zaměřuje se hlavně na modrotisk, doplňkem pak mohou být i práce s paličkovanou krajkou, výšivkou ze skleněných perliček a tradičně tkanými látkami. Ve spolupráci s lokálními výrobci, kteří jsou mistry ve svém oboru, jsou tvořeny oděvy s výrazným řemeslným akcentem. Důležitým tématem se stalo nalezení vyváženého propojení tradice a inovace, tj. jak dosáhnout skloubení moderního výtvarného názoru s precizním rukodělným zpracováním čerpajícím z tradice při zachovaní samotné podstaty dané techniky. Inspiraci pro citlivý a fundovaný přístup designera k tomuto problému Alice Klouzková našla hlavně v produkci Ústředí lidové umělecké výroby (ÚLUV). Podstatnou částí tohoto doktorského projektu je i propagace zkoumaného tématu formou workshopů se studenty a aktivitami směřujícími k veřejnosti.","medailon":"Alice Klouzková vystudovala Ateliér módní tvorby na Vysoké škole uměleckoprůmyslové v Praze a po studiích zde několik let působila jako asistentka. V roce 2005 založila společně s Janou Jetelovou módní značku SISTERSCONSPIRACY. Od roku 2014 vede Ateliér módního designu na škole současného umění Scholastika. V rámci doktorského studia na VŠUP zkoumá využití modrotisku a dalších tradičních textilních technik v současném oděvním designu a výsledky prezentuje v projektu Czech Craft Heritage. V roce 2016 vydala knihu Dědictví: Tradice, inovace, móda, kde se zabývá tradičními českými a moravskými textilními technikami. Aktuálně můžete navštívit její výstavu Modré inovace v Českém centru ve Vídni.","reklama":"","ref":"AliceKlouzkova"},

'DanaDrabova':{"jmeno":"Dana Drábová","cas":"18.11. 13-15","nazev":"Vliv ionizujícího záření na lidské tělo","anotace":"","medailon":"Ing. Dana Drábová, Ph.D., dr. h. c. mult. je česká jaderná fyzička a také lokální i regionální politička. Od roku 1999 je předsedkyní Státního úřadu pro jadernou bezpečnost. Od roku 2010 je také místostarostkou Pyšel a v letech 2016 až 2017 byla zastupitelkou Středočeského kraje. V říjnu 2013 převzala na liberecké Technické univerzitě v Liberci čestný doktorát za propagaci vědy. 28. října 2014 jí český prezident Miloš Zeman udělil medaili Za zásluhy I. stupně a v dubnu 2016 převzala na Vysoké škole báňské v Ostravě další čestný doktorát.","reklama":"","ref":"DanaDrabova"},

'PetrKulhanek':{"jmeno":"Petr Kulhánek","jmenoTituly":"Prof. RNDr. Petr Kulhánek, CSc.","cas":"17.11. 10:00-12:00","nazev":"Příběh vody","anotace":"Kde se vzala voda, co určuje její výjimečné vlastnosti a proč má tolik podob? Vydejme se společně na cestu začínající tvorbou prvních částic v zárodečné polévce Velkého třesku, pokračující jejich spojováním do atomových jader, tvorbou prvních atomů a končící vznikem prvních vodních molekul v propastných hlubinách vesmírných mlhovin. Tyto molekuly se poté za pomoci komet a planetek dostaly na naši Zem, kde se staly nejdůležitější součásti života, a tedy i našich těl. Voda tekoucí z vodovodního kohoutku má stejně zajímavý životní osud jako kdokoli z nás.","medailon":"Prof. RNDr. Petr Kulhánek, CSc. je špičkový český astrofyzik a astronom. Vystudoval magisterský obor matematická fyzika na MFF UK, během svého doktorského studia se věnoval problematice urychlovačů plazmatu. V současné době se zabývá teorií plazmatu a numerickými simulacemi. Vyučuje teoretickou fyziku na ČVUT, zároveň spolupracuje na řadě výzkumných projektů světového významu. Proslavil se rovněž jako autor řady popularizačních knih o astronomii i astrofyzice.","reklama":"","ref":"PetrKulhanek"},

'JanRoyt':{"jmeno":"Jan Royt","cas":"17.11. 10:00-12:00","nazev":"Proměny těla ukřižovaného Krista během staletí","anotace":"","medailon":"Prof. PhDr. Ing. Jan Royt, Ph.D. vystudoval dějiny umění na FF UK. Do roku 1990 pracoval v pražském nakladatelství Odeon jako redaktor literatury o výtvarném umění Poté se stal odborným asistentem a tajemníkem Ústavu pro dějiny umění FF UK. Zde působí dodnes, od roku 2006 ve funkci ředitele. V roce 1997 se habilitoval na FF UK prací Obraz a kult v Čechách 17. a 18. století, kterou o dva roky později vydalo nakladatelství Karolinum. Roku 2004 byl jmenován profesorem UK. Působí či působil jako stálý i externí pedagog na řadě vysokých škol (např. AVU, Katolická teologická fakulta UK, Filosofická fakulta Univerzity J. E. Purkyně v Ústí nad Labem aj.). Je držitelem ceny Josefa Krásy, udělované Uměleckohistorickou společností v českých zemích, členem vědeckých rad řady institucí (mj. UK, Národní galerie, Uměleckoprůmyslového muzea, Ústavu humanitních studií UJEP aj.) a redakční rady časopisu Umění, vydávaného Ústavem dějin umění AV ČR. Od roku 1985 publikoval na dvě stovky monografií a studií v českých i zahraničních sbornících a periodikách. Pravidelně se účastní konferencí v ČR, Německu a Polsku.","reklama":"","ref":"JanRoyt"},

'JosefRidky':{"jmeno":"Josef Řídký","cas":"","nazev":"","anotace":"","medailon":"Josef Řídký po dokončení studia na Gymnáziu Jana Keplera vystudoval historii a komparatistiku na FF UK. Věnuje se vztahu genderu a ideologie, především za doby normalizace. V současné době také spolupracuje se serverem A2larm.cz a kulturním čtrnáctideníkem A2.","reklama":"","ref":"JosefRidky"},

'PavelJosefMacku':{"jmeno":"Pavel Josef Macků","jmenoTituly":"Mgr. Pavel Josef Macků, Ph.D.","cas":"sobota","nazev":"Vývoj hudebních nástrojů od pravěku po současnost","anotace":"Přijďte si poslechnout na padesát různých nástrojů. Přednáška seznámí posluchače s historií vývoje hudebních nástrojů od prehistorických až po současné formy. Téměř kompletní vývojová řada všech druhů dechových a strunných nástrojů bude doplněna hranými ukázkami. Posluchači tak budou mít unikátní možnost na vlastní oči vidět a hlavně slyšet kromě jiných také některé středověké či renesanční nástroje jako např. zvířecí rohy, chrotu, cink, křivý roh, loutnu, fidulu, psalterium, středověkou harfu a další.","medailon":"Mgr. Pavel Josef Macků, Ph.D. na Masarykově univerzitě v Brně nejdříve vystudoval matematiku, fyziku a psychologii, poté také teologii na Univerzitě Palackého v Olomouci. Kromě toho se intenzivně věnuje i hudbě. Také sbírá i staví historické hudební nástroje.Mezi jeho další záliby patří například olejomalba či řezbářství.V současnosti pořádá nejrůznější přednášky a kurzy pro školy i veřejnost.","reklama":"","ref":"PavelJosefMacku"},

'MartinSuk':{"jmeno":"Martin Šuk","cas":"18.11. 13:00-15:00","nazev":"","anotace":"","medailon":"Martin Šuk, kytarář. Po studiu uměleckořemeslné stavby kytar v Lubech u Chebu a uměleckého zpracování dřeva v Hradci Králové zakládá v roce 2007 vlastní kytarářskou dílnu v Poděbradech, kde staví koncertní klasické kytary tradiční španělskou metodou.","reklama":"","ref":"MartinSuk"},

'HelenaIllnerova':{"jmeno":"Helena Illnerová","jmenoTituly":"Prof. RNDr. Helena Illnerová, DrSc. ","cas":"17.11. 15-17","nazev":"Denní časový program organismů","anotace":"Všechny živé organismy vykazují denní rytmy. U člověka jsou to např. rytmy ve spánku a bdění, v tělesné teplotě či ve stovkách dalších proměnných. Savčí a tudíž i lidské rytmy jsou řízeny z centrálních biologických hodin uložených v mozku, ale nejnovější objevy ukázaly, že hodiny se nacházejí i v periferních orgánech jako jsou játra, srdce, ledviny apod. Přednáška ukáže, jak jsou centrální savčí hodiny synchronizovány s vnějším dnem pomocí pravidelného střídání světla a tmy, jaké světlo je zejména pro tuto synchronizaci potřebné, jaké jsou mechanismy této synchronizace, a jak za určitých okolností, např. po letech přes časová pásma či při směnném provozu, může dojít k desynchronizaci celého časového systému s vnějším prostředím i navzájem mezi jednotlivými orgány. Tato desynchronizace může být  rizikovým faktorem pro spánková, psychická, metabolická, nádorová i kardiovaskulární onemocnění. V závěru bude pak podán návod jak zdravě žít, který pomůže tento rizikový faktor umenšit.","medailon":"Prof. RNDr. Helena Illnerová, DrSc. je světově uznávaná fyzioložka a biochemička. Po studiu na Přírodovědecké fakultě UK se věnovala výzkumu v oblasti chronobiologie. Jako první na světě objevila závislost funkce biologických hodin v mozku savců na délce dne během ročních období. Prof. Illnerová byla v letech 2001 - 2005 předsedkyní Akademie věd České republiky, kde zavedla program podpory mladých nadějných vědců. Dále předsedala Učené společnosti České republiky a České komisi pro UNESCO. Dodnes se pohybuje v několika vědeckých radách a v etických komisích. Za přínos pro vědu a její řízení jí byla udělena řada domácích i zahraničních ocenění.","reklama":"","ref":"HelenaIllnerova"},

'TerezaGafnaVanova':{"jmeno":"Tereza Gafna Váňová","cas":"může jen 17.11. 14-16 nebo jen hodinu dopoledne10-11 nebo sobota až od 17:45 dál","nazev":"","anotace":"","medailon":"Tereza Gafna Váňová je učitelkou v Lauderových školách a odbornou pracovnicí v Nadačním fondu obětem holokaustu. Vystudovala angličtinu a základy společenských věd na Pedf UK, hebraistiku na Oxford University a rok strávila na konzervativní ješivě v Jeruzalémě. Na Lauderových školách vyučuje židovskou výchovu a hebrejštinu.","reklama":"","ref":"TerezaGafnaVanova"},

'Loono':{"jmeno":"Loono, ŽIJESSRDCEM","cas":"17.11. 12-13","nazev":"#žiješsrdcem","anotace":"Kardiovaskulární onemocnění nejsou totiž vidět a ani nebolí. Projeví se až v okamžiku, kdy je již ''příliš pozdě'', což lidé často netuší, a proto si myslí, že se jich netýkají. Opak je bohužel pravdou. Proto je důležité věnovat dostatečnou pozornost preventivním opatřením - zdravému životnímu stylu a návštěvám preventivních prohlídek u praktických lékařů či kardiologů. Důležité je také včas rozpoznat příznaky akutního infarktu či mozkové mrtvice. \nA co se dozvítě na workshopu? \n - jak srdce vypadá a k čemu slouží\n - jak včas odhalit infarkt, mrtvici a jiná kardiovaskulární onemocnění i jak jim předcházet\n - jak se zachovat v případě, že potkají přímo je nebo někoho v jejich okolí\n - kde a jak probíhají preventivní kontroly\n - jak o nemoci mluvit, pokud onecmocní oni sami nebo někdo z jejich blízkých.","medailon":"Loono /čti Lůno) je tým mladých lékařů, studentů lékařských fakult a jiných nadšenců. Jejich společným cílem je prevence společnosti skrze vzdělávací workshopy, přednášky, publikace a videa. O zdraví a těle mluví srozumitelně, nestraší statistikami a inspirují ostatní, aby se o sebe začali starat včas a rádi. Mezi největší ocenění patří Sozial Marie (2016) & Gratias Tibi (2016). K celorepublikovém úspěchu s workshopem #prsakoule se nyní přidává i workshop #žiješsrdcem, v kterém se dozvíte vše o fukncích srdce, jeho onemocnění a jaké to je, si srdce poslechnout.","reklama":"","ref":"Loono"},

'PetrPojman':{"jmeno":"Petr Pojman","cas":"18.11. 17-19","nazev":"Obchodování s lidmi v dnešní době","anotace":"","medailon":"Petr Pojman je absolventem Mezinárodních  teritoriálních studií a Ruských a východoevropských studií na IMS FSV, UK. Absolvoval řadu studijních a výzkumných pobytů v Rusku, Bělorusku, Ukrajině a Velké Británii. V letech 2008-2009 působil v humanitárním projektu Charity ČR, Magdala, který pomáhá obětem obchodování s lidmi v ČR. V oblasti boje proti obchodu s lidmi a volebního pozorování spolupracuje s Organizací pro bezpečnost a spolupráci v Evropě. \nDále Petr Pojman působí v Ukrajině od r. 2014 v rámci projektu The Prague Security Studies Institute. Zaměřuje se na problematiku bezpečnosti, organizovaného zločinu a na studium nových metod hybridní války. Za účelem pomoci progresivním složkám ukrajinské společnosti i státu vytvořil v r. 2015 Team4Ukraine.","reklama":"","ref":"PetrPojman"},

'FilipMatejka':{"jmeno":"Filip Matějka","jmenoTituly":"RNDr. Filip Matějka, Ph.D.","cas":"17.11. 15-17","nazev":"Behaviorální ekonomie","anotace":"","medailon":"RNDr. Filip Matějka, Ph.D. vystudoval fyziku na Univerzitě Karlově a získal doktorát z aplikované matematiky na Princetonské univerzitě v USA. Od roku 2010 působí jako výzkumný pracovník Národohospodářského ústavu AV ČR. Od roku 2011 je členem akademického sboru CERGE-EI, společného pracoviště Univerzity Karlovy a Akademie věd ČR. K ekonomii přešel na začátku doktorských studiích na Princetonu. Studuje zejména makroekonomii, ekonomickou teorii, ekonomii informací a behaviorální ekonomii. V roce 2015 získal Starting grant Evropské výzkumné rady ve výši 30 milionů korun. Je zakladatelem iEkonomie, odborného diskuzního fóra o aktuálních ekonomických otázkách. Pomocí ekonomických teorií vysvětluje chování lidí i státu.","reklama":"","ref":"FilipMatejka"},

'BarbaraHerz':{"jmeno":"Barbara Herz","cas":"","nazev":"Přítomné tělo: tělesnost v postdramatickém divadle","anotace":"Akcentovaná tělesnost je jedním z hlavních principů postdramatického divadla patřícího k podstatným divadelním proudům poslední dekády. Ať už se jedná o divadlo dokumentární, pohybové či různé formy performance, herec zde přestává být pouhým reprezentantem dramatické postavy, jak je tomu u divadla tradičního. Do dialogu s divákem vstupuje namísto hry na „Hamleta“ jeho vlastní tělo, bolest, únava, zdravotní stav či libovolná osobní anamnéza…  Jak rozdílné podoby může práce s tělesností nabývat si ukážeme na příkladech několika významných světových tvůrců postdramatického divadla, jimiž jsou Rimini Protokoll, Chritoph Schlingensief, She She Pop, Lola Arias, Romeo Castellucci a Sasha Walz.","medailon":"Barbara Herz je divadelní režisérka. Vystudovala režii na brněnské JAMU a zároveň komparatistiku a divadelní vědu na FF UK v Praze. Spolupracovala s mnoha divadly jako Divadlo v Dlouhé, Husa na provázku nebo Národní divadlo Brno. Převážně se ale věnuje divadelní platformě DOK.TRIN, kterou sama založila. DOK.TRIN se v čele s Barbarou Herz věnuje autorskému, dokumentárnímu divadlu, scénickým esejům a experimentu s realitou. Zároveň vyučuje na JAMU v Brně.","reklama":"","ref":"BarbaraHerz"},

'AntoninTesar':{"jmeno":"Antonín Tesař","cas":"18.11. 15-17","nazev":"a Jiří Flígl","anotace":"","medailon":"Antonín Tesař je významný český filmový recenzent, jehož kritiky můžeme nalézt například v kulturně zaměřeném čtrnáctideníku A2, na webu Radia Wave či v ryze filmovém dvouměsíčníku Cinepur. Přispívá však i do nespecializovaných časopisů, jakým je např. týdeník Respekt. Jako dramaturg se podílí na Festivalu otrlého diváka, který se letos konal již po třinácté. Kromě filmového odvětví se věnuje také japonské kultuře. Je spoluautorem souboru esejů o japonské popkultuře Made in Japan a byl jedním z autorů dnes již neaktivních webových stránek Rejže.cz, zabývajících se japonským filmem. Zajímá se také o tzv. manga komiksy, píše o nich na webu Kobuta.cz, napomáhá vydávání každoroční sbírky české mangy s názvem Vějíř a sám je také autorem několika exemplářů.","reklama":"","ref":"AntoninTesar"},

'JanPaces':{"jmeno":"Jan Pačes","jmenoTituly":"Jan Pačes, Ph.D.","cas":"18.11. 17-19","nazev":"ČLOVĚK A ŠIMPANZ ANEB LEKCE OD BRATRANCŮ","anotace":"","medailon":"Jan Pačes, Ph.D., (*1967) vystudoval PřF UK a v Ústavu molekulární genetiky AV ČR, v. v. i., studuje strukturu genomů. Zaměřuje se zejména na lidské endogenní retrovirové elementy, jejichž dosud nejúplnější databázi sestavil. Přednáší ve studijním programu bioinformatiky a je koordinátorem velké vědecké infrastruktury ELIXIR.","reklama":"ČLOVĚK A ŠIMPANZ ANEB LEKCE OD BRATRANCŮ: Šimpanze můžeme brát jako bratrance z druhého kolena. U nich více než u ostatních živočichů můžeme vysledovat lidské aspekty chování. Starají se láskyplně o své blízké, shánějí spolu potravu a následně se o ni dělí, udržují dlouhotrvající přátelství, jsou schopni se učit po celý život a získávat stále nové dovednosti, umějí používat nástroje, společně řeší problémy a díky své dobré paměti zaznamenávají jedince, místa a události. Šimpanzi si rovněž dokážou uvědomit sami sebe. Při pohledu do zrcadla si plně uvědomují svoji individualitu. Jan Pačes, Ph.D., (*1967) vystudoval PřF UK a v Ústavu molekulární genetiky AV ČR, v. v. i., studuje strukturu genomů. V jeho přednášce se dozvíte o srovnání genetické informace člověka a šimpanze a hledání těch odlišností, které jsou zodpovědné za vznik člověka. Zapomeňte na teorii kreacionismu a pojďte se konfrontovat s evolučními fakty přímo lidoopího charakteru.","ref":"JanPaces"},

'TomasChytka':{"jmeno":"MUDr. Tomáš Chytka","cas":"18.11.-15:00","nazev":"Od Gymnázia Jana Keplera k Leksellovu gama noži","anotace":"Jít si za tím, co nás baví a zajímá, nejčastěji  začíná již na střední škole, kdy pomalu zjišťujeme, čemu bychom se chtěli v budoucnu věnovat. Od studenta pražského gymnázia jsem se dostal až k současné  práci na Leksellov2 gama noži. Jedná se přístroj, který využíváme při radiochirurgii,  \nexcelentní léčebné modalitě, která dokáže neinvazivním způsobem likvidovat nitrolební patologická ložiska. Pojem radiochirurgie do mediciny zavádí průkopník stereotaxe, švédský neurochirurg Lars Leksell. Označil jím postup, kdy při křížovitém prozáření přesně definovaného místa v nitrolebním prostoru svazky slabého záření z mnoha směrů se kumuluje v místě křížení účinná dávka, zatímco tkáň v jednotlivých směrech záření je zatížena minimálně a bez biologického účinku. Svou koncepci publikoval v roce 1951 a Gama nůž č. 1 byl instalován v roce 1968 ve Švédsku.  Gama nůž  v Praze má  číslo 37 a  byl uveden do provozu v říjnu 1992 a letos tedy oslavil 25 .leté výročí .","medailon":"MUDr. Tomáš Chytka odmaturoval na pražském Gymnáziu Jana Keplera v roce 1984. Po vystudování univerzity se stal neurochirugem a je jeden z mála lékařů v této zemi, který operuje pomocí Leksellova gama nože v nemocnici Na Homolce. Mimo to organizuje různé běhy pro zdraví a kondici a pořádá různé výstavy.","reklama":"","ref":"TomasChytka"},

'LukasCerny':{"jmeno":"Lukáš Černý","cas":"16.11. 18:45 - 19:30","nazev":"příliš pevné, příliš křehké\ntragické tělo","anotace":"Tragédie jakožto dramatický žánr osciluje mezi jazykem a tělem. V tom prvním přetrvává, v tom druhém se rodí a umírá. Nebo naopak. V každém případě hraje tělesnost v tragédii zásadní roli. Podívame se tedy pod kůži tomu tragickému hrdinovi, který je svojí kůží i svojí rolí přímo posedlý: náhledneme pod černý plášť Hamleta, principála všech šmíráků. Právě ten totiž vlastní tělesnost neustále reflektuje, nahlíží ji jako bytostně divadelní, a možná tak i nepřímo pojmenovává funkci těla v tragédii vůbec - nebo se o to alespoň snaží. Otázka je, nakolik jeho slovům můžeme věřit...","medailon":"Lukáš Černý studuje čtvrtým rokem Divadelní vědu na Filozofické fakultě Univerzity Karlovy. V rámci studia inklinuje k tragičnu, někdy až k absurdnu, tj. zabývá se především teorií a dějinami tragédie, od vzniku až po její rezidua v moderní dramatice. S tímto úsilím započal už na Gymnáziu Jana Keplera, kde absolvoval v roce 2014. Mimo to se od svého krátkého působení na Freie Universität v Berlíně zabývá také současným německým divadlem a teorií performance. Příležitostně působí v redakcích zpravodajů při festivalech amatérského divadla.","reklama":"","ref":"LukasCerny"},

'LukasAdam':{"jmeno":"Jakub Cibula & Lukáš Adam","cas":"16.11. 19:30 - 20:15","nazev":"O kráse těla","anotace":"Přijďte se podívat na dvě krásná těla a jejich jedinečný a interaktivní seminář, naučte se vnímat krásu lidí okolo sebe (a také krásu sebe sama), seznamte se s lidským tělem všemi smysly.","medailon":"Jakub Cibula & Lukáš Adam. Legendární duo (název ještě v procesu) poprvé po dvaceti letech vystoupí v České republice.","reklama":"","ref":"LukasAdam"},

'JakubCibula':{"jmeno":"Jakub Cibula & Lukáš Adam","cas":"16.11. 19:30 - 20:15","nazev":"O kráse těla","anotace":"Přijďte se podívat na dvě krásná těla a jejich jedinečný a interaktivní seminář, naučte se vnímat krásu lidí okolo sebe (a také krásu sebe sama), seznamte se s lidským tělem všemi smysly.","medailon":"Jakub Cibula & Lukáš Adam. Legendární duo (název ještě v procesu) poprvé po dvaceti letech vystoupí v České republice.","reklama":"","ref":"JakubCibula"},

'JanVacha':{"jmeno":"Jan Vácha","cas":"16.11. 21:00","nazev":"PUBQUIZ: Lidské tělo","anotace":"Lidské tělo je fascinující. Skrývá mnoho zajímavostí. Překvapuje nás svým potenciálem. Je v neustálém boji se svými nepřáteli. Ale na své straně má armádu velmi dobře vyzbrojených opravářů. Dejte hlavy dohromady, vytvořte tým a otestuje své znalosti o lidském těle a medicíně.","medailon":"Jan Vácha, absolvent GJK, nyní student 2. LF UK v Praze. Studium lidského těla ho uchvacuje už mnoho let a své poznatky předává studentům v semináři Biologie člověka. V budoucnu se chce věnovat opravování těch nejmenších lidských těl, tedy dětí.","reklama":"","ref":"JanVacha"},

'JanCerny':{"jmeno":"Jan Černý","jmenoTituly":"Prof. RNDr. Jan Černý PhD.","cas":"17.11. 15:00","nazev":"Mikrochimerismus","anotace":".","medailon":"Prof. RNDr. Jan Černý, PhD. vystudoval na Přírodovědecké fakultě Univerzity Karlovy v Praze obor molekulární biologie a genetika, dále pak na PřF UK studoval obor imunologie v rámci doktorského studia. V dnešní době se věnuje studiu molekul a jejich spojení s membrány leukocytů (bílých krvinek), ale také studiu biologických aktiviti sekundárních metabolitů bakterií a hub. Získal mnoho ocenění, naposledy v roce 2005, kdy obdržel cenu Akademie věd České republiky právě za soubor publikací o adaptorových proteinech lidských leukocytů.","reklama":"","ref":"JanCerny"},

'MichalBurian':{"jmeno":"Michal Burian","jmenoTituly":"Plk. Mgr. Michal Burian","cas":"18.11. 15:00","nazev":"","anotace":"","medailon":"Plk. Mgr. Michal Burian, PhD. je ředitel odboru muzeí VHÚ. Od roku 1995 je pracovníkem\nVojenského historického ústavu Praha, kde působil ve vědeckém, expozičním a\nsbírkovém oddělení a v odboru muzejně správním. Od roku 2008 je ředitelem\nodboru muzeí. Je kurátorem sbírek automobilní a těžké bojové techniky a\nspojovacího materiálu. Dříve byl rovněž kurátorem sbírky chemického materiálu. Dlouhodobě\nse mimo jiné zabývá historií sudetoněmeckých paramilitárních organizací a České\nobce sokolské. Je členem Rady pro výstavní činnost Národního muzea, Výstavní a\nprogramové rady Národního technického muzea, Redakční rady časopisu Historie a\nVojenství, Ediční rady Ústavu pro studium totalitních režimů a Předsednictva\nvzdělavatelského odboru České obce sokolské.","reklama":"","ref":"MichalBurian"},

'MonikaSvecSybolova':{"jmeno":"Monika Švec Sybolová","cas":"17.11. 17:00-19:00","nazev":"Erotické signály ve výtvarném umění 19. století","anotace":"Přednáška se zaměří na fenomén, jak do vysokého umění 19. století postupně proniká erotično jako osvěžující, moderní a samozřejmě lehce skandální motiv. Podíváme se na to, čím se ve vizuálním umění vysílají erotické signály. Je to jenom ženské tělo v různém odhalení a natočení? Nebo je to ještě něco dalšího? Porovnáme erotično v obraze a v textu, budeme sledovat souboj erotična s duchovnem a nakonec se uvidíme, co se s erotickou tělesností stane ve 20. století. Přednáška bude pracovat hlavně s díly Josefa Mánesa a Maxe Švabinského.","medailon":"Studium estetiky a dějin umění na Filozofické fakultě Univerzity Karlovy v Praze. Od roku 1993 externí lektorkou Sbírky umění 19. století Národní galerie v Praze a od roku 2000 kurátorkou pro edukační činnost tamtéž. Nejdříve realizace a organizace a od roku 2000 i ideová koncepce doprovodných vzdělávacích a zážitkových programů k velkým výstavám NG jako Mistr Theodorik, Gotika v západních Čechách, Julius Mařák a jeho žáci, Václav Brožík, František Ženíšek, Emil Filla, Mikoláš Aleš, Otakar Lebeda, Piepenhagenové, Jakub Schikaneder, Theodor Pištěk, František Kupka. Cesta k Amorfě, Ludvík Kuba, Tajemné dálky, Velkorysost. Umění obdarovat, Celník Rousseau. Realizace a později i příprava vzdělávacích programů pro střední školy, dospělé a seniory ve stálých expozicích NG jako je klášter sv. Anežky (do roku 2000), Veletržní palác (od roku 2000), palác Kinských (do roku 2009), klášter sv. Jiří (od roku 2008), Salmovský palác (od roku 2012). Organizuje a připravuje s kolegy Kurzy dějin umění, Letní krajinářské dílny pro studenty a dospělé, Jednodenní dramaticko-výtvarné plenéry a soutěž pro studenty středních škol Máš umělecké střevo?. Spolupracuje na doprovodných programech pro jiné galerie jako např. pro GASK, AJG a Památník Lidice. Je spoluautorkou knih pro děti Deník Jakuba S. nebo Čapek a Čapek. Byla kurátorkou spolu s Ondřejem Horákem galerie Benzinka (2006-2008) a podílela se na uměleckých projektech Art Box a Cargo. Spolupracovala na tanečních představeních Sen všech žen pro festival Habrovka a Den a noc a noc a den skupiny NANOHACH a na performancích reagující na výtvarné umění v galeriích.","reklama":"","ref":"MonikaSvecSybolova"}

          };

console.log(rozvrh);
var tempNew = {};
/*data*/rozvrh.forEach(function(den){
    if(den['program'])
    den['program'].forEach(function(blok){
        if(blok['prednasky'])
        blok['prednasky'].forEach(function(element,index){
    //console.log("e:",element);
   //console.log("d:",data[element]);
    
    if(!(typeof data[element] === 'undefined') && !( data[element] == null)){
        
        blok['prednasky'][index] = data[element];
            }else{
                blok['prednasky'][index] = {'jmeno':element,isEmpty:true};
                console.log(element);
            }
        });
    });
    /*tempNew[element['ref']] = element;
    
    //delete tempNew[element['ref']]['ref'];
    tempNew.length++;*/
    
});


console.log(rozvrh);
document.body.innerHTML = (tempNew);
var base_chars = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '
];
String.prototype.englishize = function () {
    return this.normalize('NFKD').split('')
        .map(function (c) {
            base_chars.find(function (bc) {
                bc.localeCompare(c, 'en', {
                    sensitivity: 'base'
                }) == 0
            })
        })
        .join('');
}

const fix = str => str.normalize('NFKD').split('')
    .map(c => base_chars.find(bc => bc.localeCompare(c, 'en', {
        sensitivity: 'base'
    }) == 0))
    .join('');

String.prototype.toBactrianCamelCase = function () { //capitalise even the beginning -- convert name to ref
    return this.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}
String.prototype.titlify = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}



var data = [
    {
        "jmeno": "Jan Romportl",
        "cas": "Pátek 17.11. 13:00-15:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Ing. Mgr. Jan Romportl, Ph.D. vystudoval kybernetiku a umělou inteligenci na Fakultě aplikovaných věd Západočeské univerzity v Plzni a filozofii vědy na Fakultě filozofické téže univerzity. Do roku 2015 se zabýval výzkumem v oblasti aplikované umělé inteligence a řečových technologií na Katedře kybernetiky FAV ZČU, kde také vyučoval předměty týkající se filozofických otázek umělé inteligence, vztahu nových technologií k člověku a historie kybernetiky. Od roku 2003 se zároveň věnoval alternativní teorii množin prof. Petra Vopěnky, se kterým úzce spolupracoval na přípravě plzeňských badatelských seminářů z fenomenologie matematiky. V letech 2009-2015 vedl oddělení Mezioborových aktivit výzkumného centra Nové Technologie ZČU (dnes oddělení Interakce člověka a stroje NTC ZČU). Od roku 2015 do současnosti působí na tomto pracovišti jako výzkumný pracovník a zároveň pracuje mimo akademickou sféru jako Chief Data Scientist ve společnosti O2 Czech Republic a.s.."
 },
    {
        "jmeno": "Roman Neruda",
        "cas": "Pátek 17.11. 13:00-15:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Vědecký pracovník Ústavu informatiky AV ČR, přednáší na Matematicko-fyzikální fakultě Univerzity Karlovy v Praze. Zabývá se umělou inteligencí, hlavně oblastmi umělých neuronových sítí, evolučních algoritmů a inteligentních agentů a aplikací těchto metod v robotice, strojovém učení a získávání znalostí z dat (data mining)."
 },
    {
        "jmeno": "Kateřina Kolářová",
        "cas": "Pátek 17.11. 10-12 (když nebude zbytí tak i 13-15)",
        "nazev": "",
        "anotace": "",
        "medailon": "Mgr. Kateřina Kolářová, PhD. působí na katedře genderových studií při FHS UK v Praze. Zabývá se bádáním v oblasti genderu, feministických kulturních studií, queer teorie a disability studies. V současnosti pracuje na publikaci zabývající se HIV, AIDS a vnímání nemocných společností."
 },
    {
        "jmeno": "Johanna Nejedlová",
        "cas": "Sobota 18.11. 17-19",
        "nazev": "Když to nechce, tak to nechce",
        "anotace": "\"Nechceme říkat dívkám a ženám, co mají dělat, aby je nikdo neznásilnil. Chceme se o znásilnění bavit s těmi, kteří ho skutečně můžou zastavit - s muži a kluky. Chceme svět, kde jako ženy budeme moct žít svobodně, bez strachu, bez nutnosti se vyhýbat určitým situacím nebo se jich bát. Nechceme, aby nás limitoval někdo jiný,” říkají členky sdružení Konsent. Jejich osvětová kampaň o znásilnění rozvířila nejen mediální a internetové vody. Jak málo stačí k tomu, abyste mohli změnit učebnice? Kolik sil ale stojí přesvědčit celou společnost?\n",
        "medailon": "Johanna Nejedlová je novinářka a aktivistka spolupracující mimo jiné s webovým portálem A2larm a deníkem Referendum. Je také členkou sdružení Konsent. Založila a momentálně vede osvětovou kampaň o znásilnění \"Když to nechce, tak to nechce\"."
 },
    {
        "jmeno": "Doc. PhDr. Martin Soukup, Ph.D.",
        "cas": "17.11., 10:00 - 12:00, (nechce mít rozkouskovaný celý den)",
        "nazev": "Antropologická analýza a interpretace lidského těla",
        "anotace": "",
        "medailon": "Doc. PhDr. Martin Soukup, Ph.D. vystudoval kulturologii na Filozofické fakultě Univerzity Karlovy v Praze. Po dokončení studia až do roku 2015 působil na Univerzitě Karlově jako odborný asistent. V dnešní době zde působí jako docent a zástupce vedoucího pro obor kulturní antropologie. Mezi jeho předměty odborného zájmu patří teorie, metodologie a dějiny sociální a kulturní antropologie. Zajímá se také o antropologii těla a vizuální antropologii. Zvýšenou pozornost věnuje oblasti Melanésie, kde provedl už několik terénních výzkumů, především pak v Papui-Nové Guineji. O svých poznatcích z této části Oceánie publikoval řadu studií. V roce 2017 se stal laureátem Ceny pro mladé vědce za společenské vědy právě díky svému výzkumu obyvatelstva na největším tropickém ostrově světa. Podílel se také na výstavě Lovci lebek v Náprstkově muzeu v Praze"
 },
    {
        "jmeno": "Mgr. Radka Majerová, Ph.D.",
        "cas": "17.11. 13:00-15:00 (chce být po K. Kolářové",
        "nazev": "Řeč je světlo ve těle",
        "anotace": " „…ve těle“ není chyba v předložce. Jde o psanou výpověď 25 letého muže s vývojovou anartrií, který byl do 19 let negramotný. Vývojová anartrie (neschopnost mluvit), stejně jako orální dyspraxie (dyskoordinace artikulace), dysfázie (porucha dětského porozumění) a afázie (porucha porozumění či produkce, gramatiky), postihuje vnitřněřečové procesy, odehrávající se v mozku. Hlavní obtíž tkví nikoli v řečově-artikulačních mechanismech, ale v mechanismech jazykových (fonologické analýze, plánování gramatiky). Inteligentní lidé s jazykovými hendikepy mnohdy mají rozvinuté obsahy vědomí a nechtějí být komunikačně omezeni obrázkovými systémy. Rádi by verbalizovali své myšlení, o čemž svědčí výrok muže, jemuž se to podařilo: „Řeč je světlo ve těle.“ Díky lingvistickým přístupům jsou lidé s vývojovou anartrií schopni získat gramotnost. Lidé s orální dyspraxií rozvinout psaní. Lidé s dysfázií naučit se rozumět, mluvit, psát. Lidé s afázií rehabilitovat čtení, psaní. Někteří z nich mohou být tělesně postiženi, jiní mohou vypadat takzvaně tělesně zdrávi. Video mj. představí zdánlivě zdravého 10 letého chlapce s nesrozumitelnou řečí, kterak halí tělo do pláště animovaného hrdiny. Vzdor vysokému intelektu je odmítán školami, i školami pro lidi s tělesným postižením, z důvodu, že není tělesně postižen. Kde vlastně mozek je? Není náhodou… v těle?! ",
        "medailon": "Mgr. Radka Majerová, Ph.D. pracuje v Jedličkově ústavu a školách a v Evropském centru jazykové rehabilitace jako klinická lingvistka. Zabývá se rozvojem jazykových schopností u lidí s kognitivně jazykovými hendikepy – afázií, dysfázií, vývojovou anartrií a orální dyspraxií. Vyvinula rehabilitační metody jazykového hendikepu: audiovizuální čtení, červenomodré psaní, software VoCo a epizodické komunikační scénáře."
 },
    {
        "jmeno": "Ing. Petr Vyleťal, Ph.D.",
        "cas": "17.11. 10:00-12:00",
        "nazev": "Současné přístupy k hledání genetických příčin nemocí",
        "anotace": "Molekulární medicína je vědní obor zkoumající podstatu nemocí na molekulární úrovni a získaných poznatků využívá ke zlepšení prevence, diagnostiky a léčby. Velikost lidského dědičného materiálu v kombinaci s jeho proměnlivostí a počtem lidí na Zemi jsou na jedné straně zdrojem velké rozmanitosti, ale na druhé i velkého množství geneticky podmíněných onemocnění. Ta byla v minulosti, vzhledem k omezeným možnostem zkoumání, členěna do řady oddělených kategorií. Současné technologie a poznatky o struktuře a funkci lidského dědičného materiálu nám však umožňují ucelenější pohled a my jsme dnes svědky zásadní změny pohledu na podstatu těchto onemocnění. Hranice mezi tradičními kategoriemi se vytrácejí a zároveň se nám otevírá cesta k zodpovězení otázek, nad kterými si lámaly hlavu předchozí generace vědců.  ",
        "medailon": "Ing. Petr Vyleťal, Ph.D. pracuje jako vědecký pracovník a bioanalytik na Klinice dětského a dorostového lékařství 1. LF UK a VFN v Praze. Vystudoval biomedicínské inženýrství na VŠCHT v Praze. Získal doktorát v oboru Molekulární a buněčná biologie, genetika a virologie na 1. LF UK. Také získal atestaci v oboru klinické genetiky. Zabývá se výzkumem molekulární podstaty dědičných onemocnění ledvin a jejich diagnostikou."
 },
    {
        "jmeno": "doc. Mgr. Radek Skarnitzl, Ph.D.",
        "cas": "17.11., 17:00 - 19:00 (případně 15:00 - 17:00)",
        "nazev": "Jak používáme náš hlas a co o nás prozrazuje",
        "anotace": "Hlas používáme jako bohatý nástroj, mnohdy aniž bychom si to uvědomovali. Přednáška představí plasticitu řeči, která nám umožňuje vyjadřovat širokou paletu komunikačních funkcí. Zaměří se na variabilitu melodického chování a na kvalitu hlasu v nejširším slova smyslu, od specifických nastavení hlasivkového kmitání po modifikace ústní a nosní dutiny. Hlas zároveň funguje jako naše „zvuková tvář“: stejně jako tvář prozrazuje mnohé o jejím nositeli, tak i z hlasu se o mluvčím dozvíme mnoho informací. Druhá část přednášky se proto věnuje perspektivě posluchače a tomu, co všechno o nás hlas může prozradit.        ",
        "medailon": "Radek Skarnitzl je ředitelem Fonetického ústavu na Filozofické fakultě Univerzity Karlovy. K jeho hlavním zájmům patří oblasti pohybující se na pomezí fonetiky a dalších věd - například možnost identifikace mluvčího z řečového signálu pro forenzní účely, vliv řeči a konkrétních řečových jevů na psychosociální stránku komunikac nebo hodnocení mluvčího v komunikaci (v rodném i cizím jazyce)."
 },
    {
        "jmeno": "Karel Thein",
        "cas": "17.11. 13-15",
        "nazev": "Hlavou ke hvězdám: lidské tělo v antické filosofii",
        "anotace": "Vzpřímený postoj a jím uvolněné ruce jsou tím prvním, čím se na vnímatelné rovině liší lidské tělo od těla jiných živých bytostí:\nZatím co ostatní tvorstvo je schýleno, k zemi se dívá,\nčlověku vztyčenou tvář on [Prométheus] poskytl, k nebi mu kázal\nhledět a vzpřímený zrak vždy k hvězdám do výše zdvíhat. (Ovidius Proměny I, 84-86).\nZajímavost některých způsobů, jimiž jedinečný lidský postoj vysvětlují antičtí myslitelé včetně Platóna i Aristotela, spočívá v tom, že dokáže sloučit naturalistickou fyziologii na straně jedné (vliv srdce a krve) a silně intelektuální představu o smyslu lidské existence na straně druhé: vnitřní fyziologie a na ni vázaná anatomie vzpřímeného postoje umožňuje rozvoj, jehož konečným cílem je rozumová činnost. Podrobnější pohled na vysvětlení tohoto typu rovněž ukáže, proč jeho stopy nečekaně nacházíme i v moderních teoriích, a to včetně teorie evoluční.",
        "medailon": "Karel Thein (1961) studoval knihovnictví na FF UK a filosofii na École des Hautes Études en Sciences Sociales ve Francii. Přepracovaná disertační práce byla publikována pod názvem Le lien intraitable. Enquete sur le temps dans la République et le Timée de Platon. Věnuje se především dějinám antické a ranně moderní filosofie a filosofii umění. V dnešní době je profesorem v Ústavu filosofie a religionistiky FF UK. Píše jako externí spolupracovník například pro Respekt, časopis Aluze či Host."
 },
    {
        "jmeno": "Iva Baslarová",
        "cas": "",
        "nazev": "",
        "anotace": "",
        "medailon": "Iva Baslarová je socioložka a genderoložka vyučujucí na katedře genderových studií FHS. Zabývá se především otázkami feminismu a jeho vnímání a znázornění v popkultuře a médiích. Je externí spolupracovnicí portálu A2larm. cz a webového magazínu femag.cz"
 },
    {
        "jmeno": "Ondřej Beran",
        "cas": "",
        "nazev": "My Body Is a Cage'",
        "anotace": "My lidé jsme víc než jen tělo. Máme také ducha. A právě v ní spočívá to, kým doopravdy jsme. Takhle celkem běžně mluvíme \"my lidé\" i \"my filosofové\". O řadě hraničních fenoménů, které se zdají být právě \"o\" vztahu mezi tělem a myslí/duší - (drogová) závislost, reinkarnace, mimotělní zkušenosti -, ale lze uvažovat i bez tohoto vstupního předpokladu. I když je otázka, jestli pak budeme moudřejší, nebo spíš zmatenější",
        "medailon": "Ondřej Beran je český filosof a fenomenolog. Po studiu latiny a filosofie na FF UK se stal badatelem ve Filosofickém ústavu AVČR, kde pracuje dodnes. Je také badatelem na částečný úvazek na FF ZČU v Plzni a profesorem filosofie na univerzitě v Pardubicích. Zaměřuje se především na analytickou filosofii, úlohy jazyka, paměti a času. Mezi jeho odborné publikace patří například knihy Když je řeč o barvách: Barvy jako předmět filosofického a empirického studia jazyka nebo Náš jazyk, můj svět: Wittgenstein, Husserl a Heidegger – vzájemná setkávání a míjení."
 },
    {
        "jmeno": "Alice Klouzková",
        "cas": "17.11. 15-17",
        "nazev": "",
        "anotace": "Czech Craft Heritage je projekt, jehož cílem je dokázat, že tradiční řemeslné techniky nejsou odsouzeny k zániku, ale mohou existovat jako funkční součást soudobého módní produkce. Zaměřuje se hlavně na modrotisk, doplňkem pak mohou být i práce s paličkovanou krajkou, výšivkou ze skleněných perliček a tradičně tkanými látkami. Ve spolupráci s lokálními výrobci, kteří jsou mistry ve svém oboru, jsou tvořeny oděvy s výrazným řemeslným akcentem. Důležitým tématem se stalo nalezení vyváženého propojení tradice a inovace, tj. jak dosáhnout skloubení moderního výtvarného názoru s precizním rukodělným zpracováním čerpajícím z tradice při zachovaní samotné podstaty dané techniky. Inspiraci pro citlivý a fundovaný přístup designera k tomuto problému Alice Klouzková našla hlavně v produkci Ústředí lidové umělecké výroby (ÚLUV). Podstatnou částí tohoto doktorského projektu je i propagace zkoumaného tématu formou workshopů se studenty a aktivitami směřujícími k veřejnosti.",
        "medailon": "Alice Klouzková vystudovala Ateliér módní tvorby na Vysoké škole uměleckoprůmyslové v Praze a po studiích zde několik let působila jako asistentka. V roce 2005 založila společně s Janou Jetelovou módní značku SISTERSCONSPIRACY. Od roku 2014 vede Ateliér módního designu na škole současného umění Scholastika. V rámci doktorského studia na VŠUP zkoumá využití modrotisku a dalších tradičních textilních technik v současném oděvním designu a výsledky prezentuje v projektu Czech Craft Heritage. V roce 2016 vydala knihu Dědictví: Tradice, inovace, móda, kde se zabývá tradičními českými a moravskými textilními technikami. Aktuálně můžete navštívit její výstavu Modré inovace v Českém centru ve Vídni.\n"
 },
    {
        "jmeno": "Dana Drábová",
        "cas": "18.11. 13-15",
        "nazev": "Vliv ionizujícího záření na lidské tělo",
        "anotace": "Spousta lidí má strach z radioaktivity a z toho, co může způsobit. Málokdo si však uvědomuje, že radioaktivita je všudypřítomná a lidské tělo je jí vystavené od narození až do smrti. Jak tedy ovlivňuje naše těla a jaký vliv mola mít míra radiace, přijímané naším tělem, na chování obyvatelstva za posledních několik dekád? ",
        "medailon": "Ing. Dana Drábová, Ph.D., dr. h. c. mult. je česká jaderná fyzička a také lokální i regionální politička. Od roku 1999 je předsedkyní Státního úřadu pro jadernou bezpečnost. Od roku 2010 je také místostarostkou Pyšel a v letech 2016 až 2017 byla zastupitelkou Středočeského kraje. V říjnu 2013 převzala na liberecké Technické univerzitě v Liberci čestný doktorát za propagaci vědy. 28. října 2014 jí český prezident Miloš Zeman udělil medaili Za zásluhy I. stupně a v dubnu 2016 převzala na Vysoké škole báňské v Ostravě další čestný doktorát."
 },
    {
        "jmeno": "Petr Kulhánek",
        "cas": "17.11. 10:00-12:00",
        "nazev": "Příběh vody",
        "anotace": "Kde se vzala voda, co určuje její výjimečné vlastnosti a proč má tolik podob? Vydejme se společně na cestu začínající tvorbou prvních částic v zárodečné polévce Velkého třesku, pokračující jejich spojováním do atomových jader, tvorbou prvních atomů a končící vznikem prvních vodních molekul v propastných hlubinách vesmírných mlhovin. Tyto molekuly se poté za pomoci komet a planetek dostaly na naši Zem, kde se staly nejdůležitější součásti života, a tedy i našich těl. Voda tekoucí z vodovodního kohoutku má stejně zajímavý životní osud jako kdokoli z nás.",
        "medailon": "Prof. RNDr. Petr Kulhánek, CSc. je špičkový český astrofyzik a astronom. Vystudoval magisterský obor matematická fyzika na MFF UK, během svého doktorského studia se věnoval problematice urychlovačů plazmatu. V současné době se zabývá teorií plazmatu a numerickými simulacemi. Vyučuje teoretickou fyziku na ČVUT, zároveň spolupracuje na řadě výzkumných projektů světového významu. Proslavil se rovněž jako autor řady popularizačních knih o astronomii i astrofyzice. "
 },
    {
        "jmeno": "Jan Royt",
        "cas": "10h-12 Pátek",
        "nazev": "Korpus ukřižovaného těla v průběhu staletí",
        "anotace": "První tematický celek přinese vhled do raně křesťanské společnosti. Kristova tělesnost této doby v sobě nese rozpor mezi Bohem a člověkem. V období středověku se zaměří na typický crucifixus dolorosus, ztvárnění tělesné podoby Krista trpícího a Krista vítězného. Zvláštní pozornost bude v přednášce věnována významovému rozměru krucifixu Člověk na kříži od Michelangela Buonarottiho. Jak velké zemětřesení, co se týče duchovních předpokladů doby, v daném ohledu způsobilTridentský koncil? Závěr přednášky přiblíží umění devatenáctého a dvacátého století, to, jakou změnu do něj vtiskla konfese, společné vyznání víry, a jak se změnilo pojetí ukřižovaného Krista. Po celý čas bude přednáška doprovázena bohatou obrazovou dokumentací.",
        "medailon": "Prof. PhDr. Ing. Jan Royt, Ph.D. vystudoval dějiny umění na FF UK. Do roku 1990 pracoval v pražském nakladatelství Odeon jako redaktor literatury o výtvarném umění Poté se stal odborným asistentem a tajemníkem Ústavu pro dějiny umění FF UK. Zde působí dodnes, od roku 2006 ve funkci ředitele. V roce 1997 se habilitoval na FF UK prací Obraz a kult v Čechách 17. a 18. století, kterou o dva roky později vydalo nakladatelství Karolinum. Roku 2004 byl jmenován profesorem UK. Působí či působil jako stálý i externí pedagog na řadě vysokých škol (např. AVU, Katolická teologická fakulta UK, Filosofická fakulta Univerzity J. E. Purkyně v Ústí nad Labem aj.). Je držitelem ceny Josefa Krásy, udělované Uměleckohistorickou společností v českých zemích, členem vědeckých rad řady institucí (mj. UK, Národní galerie, Uměleckoprůmyslového muzea, Ústavu humanitních studií UJEP aj.) a redakční rady časopisu Umění, vydávaného Ústavem dějin umění AV ČR. Od roku 1985 publikoval na dvě stovky monografií a studií v českých i zahraničních sbornících a periodikách. Pravidelně se účastní konferencí v ČR, Německu a Polsku. "
 },
    {
        "jmeno": "Josef Řídký",
        "cas": "",
        "nazev": "",
        "anotace": "„K vrcholné něžnosti je třeba jemné pleti, měkkosti pohybu, jemnosti skladby těla, obecné citovosti a vláčnosti. Tyto vlastnosti jsou biologickými vlastnostmi ženy, nikoliv muže. Je velikou chybou, že se ženy při emancipaci, ve snaze napodobovat muže, něžnosti zbavují nebo na ni zapomínají.“ Takové i jiné výroky zaznívaly během 20. století z úst vážených pánů v bílých pláštích a s tituly, mužů, kteří měli moc nad lidským (duševním) zdravím a kteří rozhodovali, co je ještě normální, a co už ne. Opravdu si dívky píšou deníky s milostnými básněmi, zatímco se chlapci otužují? Je skupinový sex v pořádku, pokud se ho pár dopouští pro záchranu manželství? A když se někomu líbí jedinec stejného pohlaví, má pro to nutně sklony k umění? To jsou jen některé z otázek, jaké si kladli českoslovenští a čeští sexuologové a sexuoložky. My se potom budeme ptát, co je k jejich tázání vlastně vedlo – opravdu naše těla a touhy tolik vypovídají o tom, kým jsme? Anebo jsou sexuologické pojmy naší tělesnosti přeci jen příliš těsné?",
        "medailon": "Josef Řídký po dokončení studia na Gymnáziu Jana Keplera vystudoval historii a komparatistiku na FF UK. Věnuje se vztahu genderu a ideologie, především za doby normalizace. V současné době také spolupracuje se serverem A2larm.cz a kulturním čtrnáctideníkem A2."
 },
    {
        "jmeno": "Mgr. Pavel Josef Macků, Ph.D.",
        "cas": "sobota",
        "nazev": "Vývoj hudebních nástrojů od pravěku po současnost",
        "anotace": "Přijďte si poslechnout hru na padesát různých nástrojů. Přednáška seznámí posluchače s historií vývoje hudebních nástrojů od prehistorických až po současné formy. Téměř kompletní vývojová řada všech druhů dechových a strunných nástrojů bude doplněna hranými ukázkami. Posluchači tak budou mít unikátní možnost na vlastní oči vidět a hlavně slyšet kromě jiných také některé středověké či renesanční nástroje jako např. zvířecí rohy, chrotu, cink, křivý roh, loutnu, fidulu, psalterium, středověkou harfu a další.        ",
        "medailon": "Mgr. Pavel Josef Macků, Ph.D. na Masarykově univerzitě v Brně nejdříve vystudoval matematiku, fyziku a psychologii, poté také teologii na Univerzitě Palackého v Olomouci. Kromě toho se intenzivně věnuje i hudbě. Také sbírá i staví historické hudební nástroje.Mezi jeho další záliby patří například olejomalba či řezbářství.V současnosti pořádá nejrůznější přednášky a kurzy pro školy i veřejnost."
 },
    {
        "jmeno": "Martin Šuk",
        "cas": "předběžně 18.11. od 13:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Martin Šuk, kytarář. Po studiu uměleckořemeslné stavby kytar v Lubech u Chebu a uměleckého zpracování dřeva v Hradci Králové zakládá v roce 2007 vlastní kytarářskou dílnu v Poděbradech, kde staví koncertní klasické kytary tradiční španělskou metodou."
 },
    {
        "jmeno": "Helena Illnerová",
        "cas": "17.11. 15-17",
        "nazev": "Denní časový program organismů",
        "anotace": "",
        "medailon": "Prof. RNDr. Helena Illnerová, DrSc. je světově uznávaná fyzioložka a biochemička. Po studiu na Přírodovědecké fakultě UK se věnovala výzkumu v oblasti chronobiologie. Jako první na světě objevila závislost funkce biologických hodin v mozku savců na délce dne během ročních období. Prof. Illnerová byla v letech 2001 - 2005 předsedkyní Akademie věd České republiky, kde zavedla program podpory mladých nadějných vědců. Dále předsedala Učené společnosti České republiky a České komisi pro UNESCO. Dodnes se pohybuje v několika vědeckých radách a etických komisích. Za přínos pro vědu a její řízení jí byla udělena řada domácích i zahraničních ocenění."
 },
    {
        "jmeno": "Tereza Gafna Váňová",
        "cas": " může jen 17.11. 14-16 nebo jen hodinu dopoledne10-11 nebo sobota až od 17:45 dál",
        "nazev": "",
        "anotace": "",
        "medailon": "Tereza Gafna Váňová je učitelkou v Lauderových školách a odbornou pracovnicí v Nadačním fondu obětem holokaustu. Vystudovala angličtinu a základy společenských věd na Pedf UK, hebraistiku na Oxford University a rok strávila na konzervativní ješivě v Jeruzalémě. Na Lauderových školách vyučuje židovskou výchovu a hebrejštinu."
 },
    {
        "jmeno": "",
        "cas": "",
        "nazev": "",
        "anotace": "",
        "medailon": ""
 },
    {
        "jmeno": "Loono, ŽIJESSRDCEM",
        "cas": "17.11. 12-13",
        "nazev": "#žiješsrdcem",
        "anotace": "",
        "medailon": "Loono (čti Lůno) je tým mladých lékařů, studentů lékařských fakult a jiných nadšenců. Jejich společným cílem je prevence společnosti skrze vzdělávací workshopy, přednášky, publikace a videa. O zdraví a těle mluví srozumitelně, nestraší statistikami a inspirují ostatní, aby se o sebe začali starat včas a rádi. Mezi největší ocenění patří Sozial Marie (2016) & Gratias Tibi (2016). K celorepublikovém úspěchu s workshopem #prsakoule se nyní přidává i workshop #žiješsrdcem, v kterém se dozvíte vše o fukncích srdce, jeho onemocnění a jaké to je, si srdce poslechnout."
 },
    {
        "jmeno": "Petr Pojman",
        "cas": "18.11. 17-19",
        "nazev": "Obchodování s lidmi v dnešní době",
        "anotace": "",
        "medailon": "Petr Pojman je absolventem Mezinárodních  teritoriálních studií a Ruských a východoevropských studií na IMS FSV UK. Absolvoval řadu studijních a výzkumných pobytů v Rusku, Bělorusku, Ukrajině a Velké Británii. V letech 2008-2009 působil v humanitárním projektu Charity ČR Magdala, který pomáhá obětem obchodování s lidmi v ČR. V oblasti boje proti obchodu s lidmi a volebního pozorování spolupracuje s Organizací pro bezpečnost a spolupráci v Evropě. \nDále působí v Ukrajině od r. 2014 v rámci projektu The Prague Security Studies Institute. Zaměřuje se na problematiku bezpečnosti, organizovaného zločinu a na studium nových metod hybridní války. Za účelem pomoci progresivním složkám ukrajinské společnosti i státu vytvořil v r. 2015 Team4Ukraine."
 },
    {
        "jmeno": "Filip Matějka",
        "cas": "17.11. 15-17",
        "nazev": "Behaviorální ekonomie",
        "anotace": "",
        "medailon": "RNDr. Filip Matějka, Ph.D. vystudoval fyziku na Univerzitě Karlově a získal doktorát z aplikované matematiky na Princetonské univerzitě v USA. Od roku 2010 působí jako výzkumný pracovník Národohospodářského ústavu AV ČR. Od roku 2011 je členem akademického sboru CERGE-EI, společného pracoviště Univerzity Karlovy a Akademie věd ČR. K ekonomii přešel na začátku doktorských studiích na Princetonu. Studuje zejména makroekonomii, ekonomickou teorii, ekonomii informací a behaviorální ekonomii. V roce 2015 získal Starting grant Evropské výzkumné rady ve výši 30 milionů korun. Je zakladatelem iEkonomie, odborného diskuzního fóra o aktuálních ekonomických otázkách. Pomocí ekonomických teorií vysvětluje chování lidí i státu."
 },
    {
        "jmeno": "Barbara Herz",
        "cas": "",
        "nazev": "Přítomné tělo: tělesnost v postdramatickém divadle",
        "anotace": "Akcentovaná tělesnost je jedním z hlavních principů postdramatického divadla patřícího k podstatným divadelním proudům poslední dekády. Ať už se jedná o divadlo dokumentární, pohybové či různé formy performance, herec zde přestává být pouhým reprezentantem dramatické postavy, jak je tomu u divadla tradičního. Do dialogu s divákem vstupuje namísto hry na „Hamleta“ jeho vlastní tělo, bolest, únava, zdravotní stav či libovolná osobní anamnéza…  Jak rozdílné podoby může práce s tělesností nabývat si ukážeme na příkladech několika významných světových tvůrců postdramatického divadla, jimiž jsou Rimini Protokoll, Chritoph Schlingensief, She She Pop, Lola Arias, Romeo Castellucci a Sasha Walz. Po celý čas bude přednáška doprovázena bohatou obrazovou dokumentací.",
        "medailon": "Barbara Herz je divadelní režisérka. Vystudovala režii na brněnské JAMU a zároveň komparatistiku a divadelní vědu na FF UK v Praze. Spolupracovala s mnoha divadly jako Divadlo v Dlouhé, Husa na provázku nebo Národní divadlo Brno. Převážně se ale věnuje divadelní platformě DOK.TRIN, kterou sama založila. DOK.TRIN se v čele s Barbarou Herz věnuje autorskému, dokumentárnímu divadlu, scénickým esejům a experimentu s realitou. Zároveň také ale i vyučuje na JAMU v Brně."
 },
    {
        "jmeno": "Jiří Flígl",
        "cas": "18.11. 15-17",
        "nazev": "",
        "anotace": "",
        "medailon": "Jiří Flígl je český filmový kritik recenzent spolupracující mimo jiné s kritickým dvouměsíčníkem pro filmové cinefily Cinepur či kulturním čtrnáctideníkem A2, jeho starší texty si zase můžete přečíst na serveru aktuálně.cz. Jako dramaturg se podílí na Festivalu otrlého diváka, festivalu Filmasia, má na starosti sekci půlnočních lahůdek na Letní filmové škole v Uherském Hradišti. Specializuje se především na kinematografii Dálného východu, dále jej také zajímá braková, campová a exploatační estetika."
 },
    {
        "jmeno": "Antonín Tesař",
        "cas": "18.11. 15-17",
        "nazev": "",
        "anotace": "Při pohledu na americké akční filmy posledního desetiletí by mohl leckterý fanoušek i znalec žánru lamentovat nad tím, že se z nich vytratila skutečná fyzická akce, která byla nahrazena počítačovými efekty a lehce napodobitelným frenetickým stylem v podobě zběsilého střihu nebo těkající kamery. Je pravda, že „kinematografie chaosu“ na jistou dobu ovládla hollywoodskou akční mainstreamovou produkci a někteří tvůrci ji dokonce přijali za svůj autorský trademark. Kde tedy můžeme stále i dnes najít poctivou akci a rvačky tzv. tělo na tělo? Odpovědi se zdají být v béčkové kinematografii, nebo ještě lépe na dálném východu.",
        "medailon": "\nAntonín Tesař je významný český filmový recenzent, jehož kritiky můžeme nalézt například v kulturně zaměřeném čtrnáctideníku A2, na webu Radia Wave či v ryze filmovém dvouměsíčníku Cinepur. Rovněž přispívá do nespecializovaných časopisů, jako například týdeník Respekt. Jako dramaturg se podílí na Festivalu otrlého diváka, který se letos konal již potřinácté. Mimo filmové odvětví se věnuje také japonské kultuře. Je spoluautorem souboru esejů o japonské popkultuře Made in Japan a byl jedním z autorů dnes již neaktivních webových stránek Rejže.cz, zabývajících se japonským filmem. Zajímá se také o tzv. manga komiksy, píše o nich na webu Kobuta.cz, napomáhá vydávání každoroční sbírky české mangy s názvem Vějíř a sám je také autorem několika exemplářů.\n"
 },
    {
        "jmeno": "Jan Pačes",
        "cas": "18.11. 17-19",
        "nazev": "Člověk a šimpanz aneb lekce od bratranců",
        "anotace": "",
        "medailon": "Jan Pačes, Ph.D., (*1967) vystudoval PřF UK a v Ústavu molekulární genetiky AV ČR, v. v. i., studuje strukturu genomů. Zaměřuje se zejména na lidské endogenní retrovirové elementy, jejichž dosud nejúplnější databázi sestavil. Přednáší ve studijním programu bioinformatiky a je koordinátorem velké vědecké infrastruktury ELIXIR."
 },
    {
        "jmeno": "Tomáš Chytka ",
        "cas": "18.11.-15:00",
        "nazev": "Od Gymnázia Jana Keplera k Leksellovu gama noži",
        "anotace": " Jít si za tím, co nás baví a zajímá, nejčastěji  začíná již na střední škole, kdy pomalu zjišťujeme, čemu bychom se chtěli v budoucnu věnovat. Od studenta pražského gymnázia se dá dostat až k současné  práci na Leksellově gama noži. Jedná se o přístroj, který je využíván při radiochirurgii, excelentní léčebné modalitě, která dokáže neinvazivním způsobem likvidovat nitrolební patologická ložiska. Pojem radiochirurgie do mediciny zavedl průkopník stereotaxe, švédský neurochirurg Lars Leksell. Označil jím postup, kdy při křížovitém prozáření přesně definovaného místa v nitrolebním prostoru svazky slabého záření z mnoha směrů se kumuluje v místě křížení účinná dávka, zatímco tkáň v jednotlivých směrech záření je zatížena minimálně a bez biologického účinku. Svou koncepci publikoval v roce 1951 a Gama nůž č. 1 byl instalován v roce 1968 ve Švédsku.  Gama nůž v Praze má  číslo 37 a byl uveden do provozu v říjnu 1992 a letos tedy oslavil 25 .leté výročí .",
        "medailon": "\nMUDr. Tomáš Chytka odmaturoval na pražském Gymnáziu Jana Keplera v roce 1984. Po vystudování univerzity se stal neurochirugem a je jeden z mála lékařů v této zemi, který operuje pomocí Leksellova gama nože v nemocnici Na Homolce. Mimo to organizuje různé běhy pro zdraví a kondici a pořádá všemožné autorské výstavy. "
 },
    {
        "jmeno": "Lukáš Černý",
        "cas": "16.11. 18:45 - 19:30 ",
        "nazev": "Příliš pevné, příliš křehké\ntragické tělo",
        "anotace": "Tragédie jakožto dramatický žánr osciluje mezi jazykem a tělem. V tom prvním přetrvává, v tom druhém se rodí a umírá. Nebo naopak. V každém případě hraje tělesnost v tragédii zásadní roli. Podívame se tedy pod kůži tomu tragickému hrdinovi, který je svojí kůží i svojí rolí přímo posedlý: náhledneme pod černý plášť Hamleta, principála všech šmíráků. Právě ten totiž vlastní tělesnost neustále reflektuje, nahlíží ji jako bytostně divadelní, a možná tak i nepřímo pojmenovává funkci těla v tragédii vůbec - nebo se o to alespoň snaží. Otázka je, nakolik jeho slovům můžeme věřit...",
        "medailon": "Lukáš Černý studuje čtvrtým rokem Divadelní vědu na Filozofické fakultě Univerzity Karlovy. V rámci studia inklinuje k tragičnu, někdy až k absurdnu, tj. zabývá se především teorií a dějinami tragédie, od vzniku až po její rezidua v moderní dramatice. S tímto úsilím započal už na Gymnáziu Jana Keplera, kde absolvoval v roce 2014. Mimo to se od svého krátkého působení na Freie Universität v Berlíně zabývá také současným německým divadlem a teorií performance. Příležitostně působí v redakcích zpravodajů při festivalech amatérského divadla."
 },
    {
        "jmeno": "Jakub Cibula & Lukáš Adam",
        "cas": "16.11. 19:30 - 20:15",
        "nazev": "O kráse těla",
        "anotace": "Přijďte se podívat na dvě krásná těla a jejich jedinečný a interaktivní seminář, naučte se vnímat krásu lidí okolo sebe (a také krásu sebe sama), seznamte se s lidským tělem všemi smysly.",
        "medailon": "Jakub Cibula & Lukáš Adam. Legendární duo (název ještě v procesu) poprvé po dvaceti letech vystoupí v České republice."
 },
    {
        "jmeno": "Jan Vácha",
        "cas": "16.11. 21:00",
        "nazev": "PUBQUIZ: Lidské tělo",
        "anotace": "Lidské tělo je fascinující. Skrývá mnoho zajímavostí. Překvapuje nás svým potenciálem. Je v neustálém boji se svými nepřáteli. Ale na své straně má armádu velmi dobře vyzbrojených opravářů. Dejte hlavy dohromady, vytvořte tým a otestuje své znalosti o lidském těle a medicíně.",
        "medailon": "Jan Vácha, absolvent GJK, nyní student 2. LF UK v Praze. Studium lidského těla ho uchvacuje už mnoho let a své poznatky předává studentům v semináři Biologie člověka. V budoucnu se chce věnovat opravování těch nejmenších lidských těl, tedy dětí."
 },
    {
        "jmeno": "Jan Černý ",
        "cas": "17.11. 15:00",
        "nazev": "Mikrochimerismus",
        "anotace": ".",
        "medailon": "Prof. RNDr. Jan Černý PhD. vystudoval na Přírodovědecké fakultě Univerzity Karlovy v Praze obor molekulární biologie a genetika, dále pak na PřF UK studoval obor imunologie v rámci doktorského studia. V dnešní době se věnuje studiu molekul a jejich spojení s membránami leukocytů (bílých krvinek), ale také studiu biologických aktiviti sekundárních metabolitů bakterií a hub. Získal mnoho ocenění, naposledy v roce 2005, kdy obdržel cenu Akademie věd České republiky právě za soubor publikací o adaptorových proteinech lidských leukocytů."
 },
    {
        "jmeno": "Michal Burian",
        "cas": "18.11. 15:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Plk. Mgr. Michal Burian, PhD. je ředitel odboru muzeí VHÚ. Od roku 1995 je pracovníkem Vojenského historického ústavu Praha, kde působil ve vědeckém, expozičním a sbírkovém oddělení a v odboru muzejně správním. Od roku 2008 je ředitelem odboru muzeí. Je kurátorem sbírek automobilní a těžké bojové techniky a\nspojovacího materiálu. Dříve byl rovněž kurátorem sbírky chemického materiálu. Dlouhodobě se mimo jiné zabývá historií sudetoněmeckých paramilitárních organizací a České obce sokolské. Je členem Rady pro výstavní činnost Národního muzea, Výstavní a programové rady Národního technického muzea, Redakční rady časopisu Historie a Vojenství, Ediční rady Ústavu pro studium totalitních režimů a Předsednictva vzdělavatelského odboru České obce sokolské.\n\n"
 },
    {
        "jmeno": "Lukáš Pollert",
        "cas": "18.11. 13:00",
        "nazev": "",
        "anotace": "",
        "medailon": "MUDr. Lukáš Pollert je absolventem GJK z počátku 90. let, ve svém studiu pokračoval na 2. lékařské fakultě UK. Proslavil se jako vynikající vodní slalomář a kanoista, například v roce 1992 se stal olympijským vítězem na LOH v Barceloně. Po ukončení sportovní kariéry se začal naplno věnovat medicíně: nejprve pracoval na interně, poté na oddělení urgentního příjmu Ústřední vojenské nemocnice. V současnosti pracuje ve Fakultní nemocnici v Motole na klinice anesteziologie a resuscitace."
 },
    {
        "jmeno": "Monika Švec Sybolová",
        "cas": "17.11. 17-19",
        "nazev": "Erotické signály ve výtvarném umění 19. století",
        "anotace": "Přednáška se zaměří na fenomén, jak do vysokého umění 19. století postupně proniká erotično jako osvěžující, moderní a samozřejmě lehce skandální motiv. Podíváme se na to, čím se ve vizuálním umění vysílají erotické signály. Je to jenom ženské tělo v různém odhalení a natočení? Nebo je to ještě něco dalšího? Porovnáme erotično v obraze a v textu, budeme sledovat souboj erotična s duchovnem a nakonec se uvidíme, co se s erotickou tělesností stane ve 20. století. Přednáška bude pracovat hlavně s díly Josefa Mánesa a Maxe Švabinského.",
        "medailon": "Monika Sybolová vystudovala estetiku a dějiny umění na FF UK. Od roku 1993 je externí lektorkou Sbírky umění 19. století Národní galerie v Praze a od roku 2000 kurátorkou pro edukační činnost tamtéž. V současnosti organizje doprovodné a vzdělávací programy k výstavám NG jako Tajemné dálky či Celník Rousseau. Dále se podílí na programech pro školy v Anežském klášteře či Salmovském paláci. Organizuje a připravuje s kolegy Kurzy dějin umění, Letní krajinářské dílny pro studenty a dospělé, Jednodenní dramaticko-výtvarné plenéry a soutěž pro studenty středních škol Máš umělecké střevo?. Je také spoluautorkou knih pro děti Deník Jakuba S. nebo Čapek a Čapek. Spolupracovala na tanečních představeních Sen všech žen pro festival Habrovka a Den a noc a noc a den skupiny NANOHACH a na performancích reagující na výtvarné umění v galeriích."
 },
    {
        "jmeno": "Debata ŽURNALISMUS",
        "cas": "18.11. 13-15",
        "nazev": "Tělesnost žurnalistiky",
        "anotace": "Má novinařina bez osobního kontaktu redaktora a subjektu pro daný článek či reportáž hlavu a patu? Jak moc je zkreslený výsledný produkt nepřímé komunikace, například přes emailové dopisování? Jakou měrou se liší od akce a zapálené investigace? Je takto žurnalismus degenerovaný a nenaplněný? Různé aspekty soft news a hard news - jak jsou ovlivňovány a jak mohou samy ovlivňovat? Ubývá prostor pro tělenost dnešní žurnalistky?Na téma těchto otázek bude diskutovat trojice českých novinářek, s nimiž poté tělo na tělo budete moci probrat své osobní názory, pocity a připomínky.",
        "medailon": "Saša Uhlová vystudovala romistiku na Filozofické fakultě Univerzity Karlovy. Po studiích se živila antropologickým terénním výzkumem v sociálně vyloučených lokalitách. Čtyři roky učila na Romské střední škole sociální v Kolíně. Od listopadu roku 2009 do prosince 2016 byla redaktorkou internetového deníku Deník Referendum. V soutěži Novinářská cena 2015 získala Čestné uznání. Začátkem roku 2017 se stala redaktorkou internetového deníku A2larm, kde vzbudila rozruch sérií reportáží Hrdinové kapitalistické práce, kde se nechávala zaměstnávat pod změněnou identitou jako brigádnice v různých nízkopříjmových zaměstnáních. Tento projekt podpořený Nadačním fondem nezávislé žurnalistiky mapuje pracovní podmínky nekvalifikovaných a nízkopříjmových skupin obyvatel v českých firmách. Je také protagonistkou dokumentárních filmů Rozhořčené a Když děti nosí stát."
 },
    {
        "jmeno": "Debata ŽURNALISMUS",
        "cas": "18.11. 13-15",
        "nazev": "Tělesnost žurnalistiky",
        "anotace": "Má novinařina bez osobního kontaktu redaktora a subjektu pro daný článek či reportáž hlavu a patu? Jak moc je zkreslený výsledný produkt nepřímé komunikace, například přes emailové dopisování? Jakou měrou se liší od akce a zapálené investigace? Je tato forma žurnalismu degenerovaná a nenaplněná? Různé aspekty soft news a hard news - jak jsou ovlivňovány a jak mohou samy ovlivňovat? Ubývá prostor pro tělenost dnešní žurnalistky? Na téma těchto otázek bude diskutovat trojice českých novinářek, s nimiž poté budete moci tělo na tělo  probrat své osobní názory, pocity a připomínky.",
        "medailon": "Apolena Rychlíková (* 1989, Brno) je česká dokumentaristka, levicová aktivistka a novinářka. Po absolvování Biskupského gymnázia v Brně získala titul bakaláře na Katedře dokumentární tvorby FAMU. Ohlas vzbudil její dokumentární film Hájek na zámku, Petr v podzámčí (2011) který obdržel Cenu Karla Vachka Anime, jež se uděluje jako součást Cen Nikolaje Stankoviče. V roce 2012 byla autorkou námětu k dokumentárnímu cyklu Expremiéři, v rámci něhož natočila snímek o Mirku Topolánkovi, uvedený roku 2014. Její snímek Hranice práce, který popisuje problematiku levné práce v České republice, získal na Mezinárodním festivalu dokumentárních filmů Ji.hlava 2017 cenu Česká radost za nejlepší český dokument a cenu diváků. V minulosti přispívala do Deníku Referendum, Romea a Nového prostoru.V současnosti působí v redakci zpravodajského webu A2larm."
 },
    {
        "jmeno": "Pavel Klusák",
        "cas": "18.11. 10-12",
        "nazev": "Rituál se vrací: Tělo v současném umění & hudbě",
        "anotace": "Vystačit si jen s vlastním tělem. Dát ho v sázku. Otestovat ho. Navázat na dávnou zkušenost s přechodovými rituály. Použít pro svůj tvůrčí experiment sebe sama. To je cesta současných umělců, kteří odkládají všechno, aby jim nakonec zbyl zásadní materiál: vlastní tělo a hlas.\n",
        "medailon": ""
 },
    {
        "jmeno": "Jan Kozák",
        "cas": "17.11-10-12",
        "nazev": "Na počátku byla vražda: Stvoření světa z lidského těla v mytologii",
        "anotace": "Motiv oběti prvotní bytosti a stvoření kosmu z jejího těla najdeme v celé řadě světových mytologií. V rámci přednášky toto transkulturní mytické téma prozkoumáme a vrhneme na něj světlo z řady různých stran: ukážeme si, že vyjadřuje starobylým jazykem symbolů myšlenku paralelismu mezi makrokosmem a mikrokosmem (\"holografický vesmír\") a předznamenává tak renesanční \"člověk je mírou všech věcí\"; že ilustruje názorně princip konceptuální metafory, který je jedním ze základních nástrojů lidského poznávacího aparátu; že objasňuje smysl a funkci oběti v náboženství a že je principem dodnes živoucím v podobě křesťanské eucharistie. Podíváme se blíže na symboliku jednotlivých částí těla a způsobů, jakými strukturace kosmického těla odpovídá rozdělení kosmických sfér či sociálních vrstev a jak funguje coby nástroj klasifikace a legitimizace.",
        "medailon": "Mgr. Jan Kozák, Ph.D.  Jan Kozák (1979) je absolventem Gymnázia Jana Keplera. Vystudoval religionistiku a latinu na FFUK, kde v současnosti přednáší. Zaměřuje se na náboženství předkřesťanské Skandinávie, ale také teorie mýtu a historie jeho interpretací. Zabývá se komparativní lingvistikou a překládá ze staroseverštiny i latiny, případně z angličtiny (Tolkienovy eposy). Ve volné čase se věnuje výuce šermu a kaligrafii."
 },
    {
        "jmeno": "Martin Semerád",
        "cas": "",
        "nazev": "Kosmologické pojednání o vzniku tělesnosti člověka z pohledu Anthroposofie za přispění pohledů, který nám dává moudrost matematiky",
        "anotace": "Ve filosofii nejsou tolik důležité odpovědi, jako otázky, které klademe, neboť především způsob, jak se ptáme, dává světu možnost, aby nám podle toho také odpovídal. Člověk sám pak zůstává (a to i svým tělem) sám sobě především živou otázkou – Kdo jsem, odkud jdu a kam? Způsob hledání odpovědi přitom není podmíněna jen časem, ve kterém se ptáme, ale především celým naším myšlenkovým konceptem, tedy oním světem kultu - kultury, ve kterém je prožíván (chápán) také náš vlastní příběh, náš vlastní život. Přednáška, která bude pronesena, je zasazena v návaznost mythu pythagorejského – do světa, kdy Moudrost Hvězd ještě promlouvá k Člověku, ve kterém matematika sama sebe ještě chápe jako božskou vědu a kdy svět včel je viditelným tajemstvím možné lidské budoucnosti. V posledku však může být i tato anotace pouze poukazem na cestu, po které se vydáme společně – neboť přednáška je koncipována jako setkání a tedy možný rozhovor, ve kterém okruh otázek není vymezován jen přednášejícím, ale také posluchači. Těším se tedy na setkání.",
        "medailon": "Mgr. Martin Semerád, Ph.D. je lektorem Akademie sociálního umění TABOR v Praze. Vystudoval magisterský obor \"Matematická analýza\" na Matematicko fyzikální fakultě Univerzity Karlovy v Praze (1999), obor Léčebná pedagogika a sociálně umělecká terapie v Akademii sociálního umění Tabor v Praze (2009) a doktorské studium oboru Filosofie na Pedagogické fakultě Univerzity Karlovy v Praze (2011). Ve své doktorské práci Imaginace nekonečna rozvíjí koncept imaginativního přístupu v matematice, který dále uplatňuje ve výuce dětí i dospělých. Mezi oblasti jeho profesního zájmu patří filosofie matematiky, hermenautika, prostor a čas, hudba, včely."
 }
]






/////////////////////////////////////////////////////////////////


var rozvrh = [
    {
        'den': 'Čtvrtek 16.11.<strong> doprovodný program </strong>',
        'header': ['Aula'],
        'program': [
            {
                'cas': "18:30 - 18:45",
                'prednasky': ['Zahájení']
 },
            {
                "cas": "18:45 - 19:30",
                'prednasky': ['LukasCerny']
 },
            {
                "cas": "19:30 - 20:15",
                'prednasky': ['LukasAdam']
 },
            {
                "cas": "20:15 - 21:00",
                'prednasky': ['JakubCibula']
 },
            {
                "cas": "21:00 - 23:00",
                'prednasky': ['JanVacha']
 }
    ]
    },

    {
        'den': 'Pátek 17.11',
        'header': ['Aula',
   'USV',
   'Sborovna',
   'P2.3',
   'P2.2'],

        program: [
            {
                'cas': '10:00 - 12:00',
                'prednasky': [
    'JanRoyt',
    'MartinSoukup',
    'PetrKulhanek',
    'PetrVyletal',
    'JanKozak'
    ]
 },
            {
                'cas': '12:00 - 13:00',
                'prednasky': [
    'Oběd',
    'Loono #ŽIJEŠSRDCEM',
           ]
 },
            {
                'cas': '13:00 - 15:00',
                'prednasky': [
    'Debata (Umělá inteligence)',
    'KarelThein',
    'KaterinaKolarova',
    'JosefRidky',
    'IvaBaslarova'
           ]
 },
            {
                'cas': '15:00 - 17:00',
                'prednasky': [
    'HelenaIllnerova',
    'RadkaMajerova',
    'FilipMatejka',
    'TerezaGafnaVanova',
    'AliceKlouzkova'
           ]
 },
            {
                'cas': '17:00 - 19:00',
                'prednasky': [
    'MonikaSvecSybolova',
    'Michal Hanus', //Hanus nebo Dvořák
    'LukasCerny',
    'OndrejBeran',
    'RadekSkarnitzl'
    ]
 },
            {
                'cas': '20:00 - 23:00',
                'prednasky': [
    'FILMOVÁ NOC',
    '',
    '',
    '',
    ''
           ]
 }
]
    },
    {
        den: 'Sobota 18.11.',
        'header': ['Aula',
   'USV',
   'Sborovna',
   'P2.3',
   'P2.2'],
        'program': [

            {
                'cas': '10:00 - 12:00',
                'prednasky': [
   'Debata (Transhumanismus)',
   'Martin Semerád',
   'Helena Vávrová',
   'P. Klusák',
   'MarieSalomonova'
   ]
 },
            {
                'cas': '12:00 - 13:00 Oběd',
                'prednasky': [
   'Beseda s Filipem Zajíčkem',
   '',
   '',
   '',
   ''
   ]
 },
            {
                'cas': '13:00 - 15:00',
                'prednasky': [
   'Debata (Žurnalistika)',
   'Lukáš Pollert',
   'DanaDrabova',
   'MartinSuk',
   'BarbaraHerz'
   ]
 },
            {
                'cas': '15:00 - 17:00',
                'prednasky': [
   'TomasChytka',
   'MichalBurian',
    'Jiří Flígl',
   'Petr Zewlakk Vrabec',
   'Lucie Šrámková'
   ]
 },
            {
                'cas': '17:00 - 19:00',
                'prednasky': [
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


var data = {
    "JanRomportl": {
        "jmeno": "Jan Romportl",
        "cas": "Pátek 17.11. 13:00-15:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Ing. Mgr. Jan Romportl, Ph.D. vystudoval kybernetiku a umělou inteligenci na Fakultě aplikovaných věd Západočeské univerzity v Plzni a filozofii vědy na Fakultě filozofické téže univerzity. Do roku 2015 se zabýval výzkumem v oblasti aplikované umělé inteligence a řečových technologií na Katedře kybernetiky FAV ZČU, kde také vyučoval předměty týkající se filozofických otázek umělé inteligence, vztahu nových technologií k člověku a historie kybernetiky. Od roku 2003 se zároveň věnoval alternativní teorii množin prof. Petra Vopěnky, se kterým úzce spolupracoval na přípravě plzeňských badatelských seminářů z fenomenologie matematiky. V letech 2009-2015 vedl oddělení Mezioborových aktivit výzkumného centra Nové Technologie ZČU (dnes oddělení Interakce člověka a stroje NTC ZČU). Od roku 2015 do současnosti působí na tomto pracovišti jako výzkumný pracovník a zároveň pracuje mimo akademickou sféru jako Chief Data Scientist ve společnosti O2 Czech Republic a.s.."
    },
    "RomanNeruda": {
        "jmeno": "Roman Neruda",
        "cas": "Pátek 17.11. 13:00-15:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Vědecký pracovník Ústavu informatiky AV ČR, přednáší na Matematicko-fyzikální fakultě Univerzity Karlovy v Praze. Zabývá se umělou inteligencí, hlavně oblastmi umělých neuronových sítí, evolučních algoritmů a inteligentních agentů a aplikací těchto metod v robotice, strojovém učení a získávání znalostí z dat (data mining)."
    },
    "KaterinaKolarova": {
        "jmeno": "Kateřina Kolářová",
        "cas": "Pátek 17.11. 10-12 (když nebude zbytí tak i 13-15)",
        "nazev": "",
        "anotace": "",
        "medailon": "Mgr. Kateřina Kolářová, PhD. působí na katedře genderových studií při FHS UK v Praze. Zabývá se bádáním v oblasti genderu, feministických kulturních studií, queer teorie a disability studies. V současnosti pracuje na publikaci zabývající se HIV, AIDS a vnímání nemocných společností."
    },
    "JohannaNejedlova": {
        "jmeno": "Johanna Nejedlová",
        "cas": "Sobota 18.11. 17-19",
        "nazev": "Když to nechce, tak to nechce",
        "anotace": "\"Nechceme říkat dívkám a ženám, co mají dělat, aby je nikdo neznásilnil. Chceme se o znásilnění bavit s těmi, kteří ho skutečně můžou zastavit - s muži a kluky. Chceme svět, kde jako ženy budeme moct žít svobodně, bez strachu, bez nutnosti se vyhýbat určitým situacím nebo se jich bát. Nechceme, aby nás limitoval někdo jiný,” říkají členky sdružení Konsent. Jejich osvětová kampaň o znásilnění rozvířila nejen mediální a internetové vody. Jak málo stačí k tomu, abyste mohli změnit učebnice? Kolik sil ale stojí přesvědčit celou společnost?\n",
        "medailon": "Johanna Nejedlová je novinářka a aktivistka spolupracující mimo jiné s webovým portálem A2larm a deníkem Referendum. Je také členkou sdružení Konsent. Založila a momentálně vede osvětovou kampaň o znásilnění \"Když to nechce, tak to nechce\"."
    },
    "MartinSoukup": {
        "jmeno": "Martin Soukup",
        "jmenoTituly": "Doc. PhDr. Martin Soukup, Ph.D.",
        "cas": "17.11., 10:00 - 12:00",
        "nazev": "Antropologická analýza a interpretace lidského těla",
        "anotace": "",
        "medailon": "Doc. PhDr. Martin Soukup, Ph.D. vystudoval kulturologii na Filozofické fakultě Univerzity Karlovy v Praze. Po dokončení studia až do roku 2015 působil na Univerzitě Karlově jako odborný asistent. V dnešní době zde působí jako docent a zástupce vedoucího pro obor kulturní antropologie. Mezi jeho předměty odborného zájmu patří teorie, metodologie a dějiny sociální a kulturní antropologie. Zajímá se také o antropologii těla a vizuální antropologii. Zvýšenou pozornost věnuje oblasti Melanésie, kde provedl už několik terénních výzkumů, především pak v Papui-Nové Guineji. O svých poznatcích z této části Oceánie publikoval řadu studií. V roce 2017 se stal laureátem Ceny pro mladé vědce za společenské vědy právě díky svému výzkumu obyvatelstva na největším tropickém ostrově světa. Podílel se také na výstavě Lovci lebek v Náprstkově muzeu v Praze"
    },
    "RadkaMajerova": {
        "jmeno": "Mgr. Radka Majerová, Ph.D.",
        "jmenoTituly": "Mgr. Radka Majerová, Ph.D.",
        "cas": "17.11. 13:00-15:00",
        "nazev": "Řeč je světlo ve těle",
        "anotace": " „…ve těle“ není chyba v předložce. Jde o psanou výpověď 25 letého muže s vývojovou anartrií, který byl do 19 let negramotný. Vývojová anartrie (neschopnost mluvit), stejně jako orální dyspraxie (dyskoordinace artikulace), dysfázie (porucha dětského porozumění) a afázie (porucha porozumění či produkce, gramatiky), postihuje vnitřněřečové procesy, odehrávající se v mozku. Hlavní obtíž tkví nikoli v řečově-artikulačních mechanismech, ale v mechanismech jazykových (fonologické analýze, plánování gramatiky). Inteligentní lidé s jazykovými hendikepy mnohdy mají rozvinuté obsahy vědomí a nechtějí být komunikačně omezeni obrázkovými systémy. Rádi by verbalizovali své myšlení, o čemž svědčí výrok muže, jemuž se to podařilo: „Řeč je světlo ve těle.“ Díky lingvistickým přístupům jsou lidé s vývojovou anartrií schopni získat gramotnost. Lidé s orální dyspraxií rozvinout psaní. Lidé s dysfázií naučit se rozumět, mluvit, psát. Lidé s afázií rehabilitovat čtení, psaní. Někteří z nich mohou být tělesně postiženi, jiní mohou vypadat takzvaně tělesně zdrávi. Video mj. představí zdánlivě zdravého 10 letého chlapce s nesrozumitelnou řečí, kterak halí tělo do pláště animovaného hrdiny. Vzdor vysokému intelektu je odmítán školami, i školami pro lidi s tělesným postižením, z důvodu, že není tělesně postižen. Kde vlastně mozek je? Není náhodou… v těle?! ",
        "medailon": "Mgr. Radka Majerová, Ph.D. pracuje v Jedličkově ústavu a školách a v Evropském centru jazykové rehabilitace jako klinická lingvistka. Zabývá se rozvojem jazykových schopností u lidí s kognitivně jazykovými hendikepy – afázií, dysfázií, vývojovou anartrií a orální dyspraxií. Vyvinula rehabilitační metody jazykového hendikepu: audiovizuální čtení, červenomodré psaní, software VoCo a epizodické komunikační scénáře."
    },
    "IngPetrVyletalPhd": {
        "jmeno": "Ing. Petr Vyleťal, Ph.D.",
        "cas": "17.11. 10:00-12:00",
        "nazev": "Současné přístupy k hledání genetických příčin nemocí",
        "anotace": "Molekulární medicína je vědní obor zkoumající podstatu nemocí na molekulární úrovni a získaných poznatků využívá ke zlepšení prevence, diagnostiky a léčby. Velikost lidského dědičného materiálu v kombinaci s jeho proměnlivostí a počtem lidí na Zemi jsou na jedné straně zdrojem velké rozmanitosti, ale na druhé i velkého množství geneticky podmíněných onemocnění. Ta byla v minulosti, vzhledem k omezeným možnostem zkoumání, členěna do řady oddělených kategorií. Současné technologie a poznatky o struktuře a funkci lidského dědičného materiálu nám však umožňují ucelenější pohled a my jsme dnes svědky zásadní změny pohledu na podstatu těchto onemocnění. Hranice mezi tradičními kategoriemi se vytrácejí a zároveň se nám otevírá cesta k zodpovězení otázek, nad kterými si lámaly hlavu předchozí generace vědců.  ",
        "medailon": "Ing. Petr Vyleťal, Ph.D. pracuje jako vědecký pracovník a bioanalytik na Klinice dětského a dorostového lékařství 1. LF UK a VFN v Praze. Vystudoval biomedicínské inženýrství na VŠCHT v Praze. Získal doktorát v oboru Molekulární a buněčná biologie, genetika a virologie na 1. LF UK. Také získal atestaci v oboru klinické genetiky. Zabývá se výzkumem molekulární podstaty dědičných onemocnění ledvin a jejich diagnostikou."
    },
    "RadekSkarnitzl": {
        "jmeno": "Radek Skarnitzl",
        "jmeno": "doc. Mgr. Radek Skarnitzl, Ph.D.",
        "cas": "17.11., 17:00 - 19:00",
        "nazev": "Jak používáme náš hlas a co o nás prozrazuje",
        "anotace": "Hlas používáme jako bohatý nástroj, mnohdy aniž bychom si to uvědomovali. Přednáška představí plasticitu řeči, která nám umožňuje vyjadřovat širokou paletu komunikačních funkcí. Zaměří se na variabilitu melodického chování a na kvalitu hlasu v nejširším slova smyslu, od specifických nastavení hlasivkového kmitání po modifikace ústní a nosní dutiny. Hlas zároveň funguje jako naše „zvuková tvář“: stejně jako tvář prozrazuje mnohé o jejím nositeli, tak i z hlasu se o mluvčím dozvíme mnoho informací. Druhá část přednášky se proto věnuje perspektivě posluchače a tomu, co všechno o nás hlas může prozradit.        ",
        "medailon": "Radek Skarnitzl je ředitelem Fonetického ústavu na Filozofické fakultě Univerzity Karlovy. K jeho hlavním zájmům patří oblasti pohybující se na pomezí fonetiky a dalších věd - například možnost identifikace mluvčího z řečového signálu pro forenzní účely, vliv řeči a konkrétních řečových jevů na psychosociální stránku komunikac nebo hodnocení mluvčího v komunikaci (v rodném i cizím jazyce)."
    },
    "KarelThein": {
        "jmeno": "Karel Thein",
        "cas": "17.11. 13-15",
        "nazev": "Hlavou ke hvězdám: lidské tělo v antické filosofii",
        "anotace": "Vzpřímený postoj a jím uvolněné ruce jsou tím prvním, čím se na vnímatelné rovině liší lidské tělo od těla jiných živých bytostí:\nZatím co ostatní tvorstvo je schýleno, k zemi se dívá,\nčlověku vztyčenou tvář on [Prométheus] poskytl, k nebi mu kázal\nhledět a vzpřímený zrak vždy k hvězdám do výše zdvíhat. (Ovidius Proměny I, 84-86).\nZajímavost některých způsobů, jimiž jedinečný lidský postoj vysvětlují antičtí myslitelé včetně Platóna i Aristotela, spočívá v tom, že dokáže sloučit naturalistickou fyziologii na straně jedné (vliv srdce a krve) a silně intelektuální představu o smyslu lidské existence na straně druhé: vnitřní fyziologie a na ni vázaná anatomie vzpřímeného postoje umožňuje rozvoj, jehož konečným cílem je rozumová činnost. Podrobnější pohled na vysvětlení tohoto typu rovněž ukáže, proč jeho stopy nečekaně nacházíme i v moderních teoriích, a to včetně teorie evoluční.",
        "medailon": "Karel Thein (1961) studoval knihovnictví na FF UK a filosofii na École des Hautes Études en Sciences Sociales ve Francii. Přepracovaná disertační práce byla publikována pod názvem Le lien intraitable. Enquete sur le temps dans la République et le Timée de Platon. Věnuje se především dějinám antické a ranně moderní filosofie a filosofii umění. V dnešní době je profesorem v Ústavu filosofie a religionistiky FF UK. Píše jako externí spolupracovník například pro Respekt, časopis Aluze či Host."
    },
    "IvaBaslarova": {
        "jmeno": "Iva Baslarová",
        "cas": "",
        "nazev": "",
        "anotace": "",
        "medailon": "Iva Baslarová je socioložka a genderoložka vyučujucí na katedře genderových studií FHS. Zabývá se především otázkami feminismu a jeho vnímání a znázornění v popkultuře a médiích. Je externí spolupracovnicí portálu A2larm. cz a webového magazínu femag.cz"
    },
    "OndrejBeran": {
        "jmeno": "Ondřej Beran",
        "cas": "",
        "nazev": "My Body Is a Cage'",
        "anotace": "My lidé jsme víc než jen tělo. Máme také ducha. A právě v ní spočívá to, kým doopravdy jsme. Takhle celkem běžně mluvíme \"my lidé\" i \"my filosofové\". O řadě hraničních fenoménů, které se zdají být právě \"o\" vztahu mezi tělem a myslí/duší - (drogová) závislost, reinkarnace, mimotělní zkušenosti -, ale lze uvažovat i bez tohoto vstupního předpokladu. I když je otázka, jestli pak budeme moudřejší, nebo spíš zmatenější",
        "medailon": "Ondřej Beran je český filosof a fenomenolog. Po studiu latiny a filosofie na FF UK se stal badatelem ve Filosofickém ústavu AVČR, kde pracuje dodnes. Je také badatelem na částečný úvazek na FF ZČU v Plzni a profesorem filosofie na univerzitě v Pardubicích. Zaměřuje se především na analytickou filosofii, úlohy jazyka, paměti a času. Mezi jeho odborné publikace patří například knihy Když je řeč o barvách: Barvy jako předmět filosofického a empirického studia jazyka nebo Náš jazyk, můj svět: Wittgenstein, Husserl a Heidegger – vzájemná setkávání a míjení."
    },
    "AliceKlouzkova": {
        "jmeno": "Alice Klouzková",
        "cas": "17.11. 15-17",
        "nazev": "",
        "anotace": "Czech Craft Heritage je projekt, jehož cílem je dokázat, že tradiční řemeslné techniky nejsou odsouzeny k zániku, ale mohou existovat jako funkční součást soudobého módní produkce. Zaměřuje se hlavně na modrotisk, doplňkem pak mohou být i práce s paličkovanou krajkou, výšivkou ze skleněných perliček a tradičně tkanými látkami. Ve spolupráci s lokálními výrobci, kteří jsou mistry ve svém oboru, jsou tvořeny oděvy s výrazným řemeslným akcentem. Důležitým tématem se stalo nalezení vyváženého propojení tradice a inovace, tj. jak dosáhnout skloubení moderního výtvarného názoru s precizním rukodělným zpracováním čerpajícím z tradice při zachovaní samotné podstaty dané techniky. Inspiraci pro citlivý a fundovaný přístup designera k tomuto problému Alice Klouzková našla hlavně v produkci Ústředí lidové umělecké výroby (ÚLUV). Podstatnou částí tohoto doktorského projektu je i propagace zkoumaného tématu formou workshopů se studenty a aktivitami směřujícími k veřejnosti.",
        "medailon": "Alice Klouzková vystudovala Ateliér módní tvorby na Vysoké škole uměleckoprůmyslové v Praze a po studiích zde několik let působila jako asistentka. V roce 2005 založila společně s Janou Jetelovou módní značku SISTERSCONSPIRACY. Od roku 2014 vede Ateliér módního designu na škole současného umění Scholastika. V rámci doktorského studia na VŠUP zkoumá využití modrotisku a dalších tradičních textilních technik v současném oděvním designu a výsledky prezentuje v projektu Czech Craft Heritage. V roce 2016 vydala knihu Dědictví: Tradice, inovace, móda, kde se zabývá tradičními českými a moravskými textilními technikami. Aktuálně můžete navštívit její výstavu Modré inovace v Českém centru ve Vídni.\n"
    },
    "DanaDrabova": {
        "jmeno": "Dana Drábová",
        "jmenoTituly": "Ing. Dana Drábová, Ph.D., dr. h. c. mult.",
        "cas": "18.11. 13-15",
        "nazev": "Vliv ionizujícího záření na lidské tělo",
        "anotace": "Spousta lidí má strach z radioaktivity a z toho, co může způsobit. Málokdo si však uvědomuje, že radioaktivita je všudypřítomná a lidské tělo je jí vystavené od narození až do smrti. Jak tedy ovlivňuje naše těla a jaký vliv mola mít míra radiace, přijímané naším tělem, na chování obyvatelstva za posledních několik dekád? ",
        "medailon": "Ing. Dana Drábová, Ph.D., dr. h. c. mult. je česká jaderná fyzička a také lokální i regionální politička. Od roku 1999 je předsedkyní Státního úřadu pro jadernou bezpečnost. Od roku 2010 je také místostarostkou Pyšel a v letech 2016 až 2017 byla zastupitelkou Středočeského kraje. V říjnu 2013 převzala na liberecké Technické univerzitě v Liberci čestný doktorát za propagaci vědy. 28. října 2014 jí český prezident Miloš Zeman udělil medaili Za zásluhy I. stupně a v dubnu 2016 převzala na Vysoké škole báňské v Ostravě další čestný doktorát."
    },
    "PetrKulhanek": {
        "jmeno": "Petr Kulhánek",
        "jmenoTituly": "Prof. RNDr. Petr Kulhánek, CSc.",
        "cas": "17.11. 10:00-12:00",
        "nazev": "Příběh vody",
        "anotace": "Kde se vzala voda, co určuje její výjimečné vlastnosti a proč má tolik podob? Vydejme se společně na cestu začínající tvorbou prvních částic v zárodečné polévce Velkého třesku, pokračující jejich spojováním do atomových jader, tvorbou prvních atomů a končící vznikem prvních vodních molekul v propastných hlubinách vesmírných mlhovin. Tyto molekuly se poté za pomoci komet a planetek dostaly na naši Zem, kde se staly nejdůležitější součásti života, a tedy i našich těl. Voda tekoucí z vodovodního kohoutku má stejně zajímavý životní osud jako kdokoli z nás.",
        "medailon": "Prof. RNDr. Petr Kulhánek, CSc. je špičkový český astrofyzik a astronom. Vystudoval magisterský obor matematická fyzika na MFF UK, během svého doktorského studia se věnoval problematice urychlovačů plazmatu. V současné době se zabývá teorií plazmatu a numerickými simulacemi. Vyučuje teoretickou fyziku na ČVUT, zároveň spolupracuje na řadě výzkumných projektů světového významu. Proslavil se rovněž jako autor řady popularizačních knih o astronomii i astrofyzice. "
    },
    "JanRoyt": {
        "jmeno": "Jan Royt",
        "jmenoTituly": "Prof. PhDr. Ing. Jan Royt, Ph.D.",
        "cas": "10h-12 Pátek",
        "nazev": "Korpus ukřižovaného těla v průběhu staletí",
        "anotace": "První tematický celek přinese vhled do raně křesťanské společnosti. Kristova tělesnost této doby v sobě nese rozpor mezi Bohem a člověkem. V období středověku se zaměří na typický crucifixus dolorosus, ztvárnění tělesné podoby Krista trpícího a Krista vítězného. Zvláštní pozornost bude v přednášce věnována významovému rozměru krucifixu Člověk na kříži od Michelangela Buonarottiho. Jak velké zemětřesení, co se týče duchovních předpokladů doby, v daném ohledu způsobilTridentský koncil? Závěr přednášky přiblíží umění devatenáctého a dvacátého století, to, jakou změnu do něj vtiskla konfese, společné vyznání víry, a jak se změnilo pojetí ukřižovaného Krista. Po celý čas bude přednáška doprovázena bohatou obrazovou dokumentací.",
        "medailon": "Prof. PhDr. Ing. Jan Royt, Ph.D. vystudoval dějiny umění na FF UK. Do roku 1990 pracoval v pražském nakladatelství Odeon jako redaktor literatury o výtvarném umění Poté se stal odborným asistentem a tajemníkem Ústavu pro dějiny umění FF UK. Zde působí dodnes, od roku 2006 ve funkci ředitele. V roce 1997 se habilitoval na FF UK prací Obraz a kult v Čechách 17. a 18. století, kterou o dva roky později vydalo nakladatelství Karolinum. Roku 2004 byl jmenován profesorem UK. Působí či působil jako stálý i externí pedagog na řadě vysokých škol (např. AVU, Katolická teologická fakulta UK, Filosofická fakulta Univerzity J. E. Purkyně v Ústí nad Labem aj.). Je držitelem ceny Josefa Krásy, udělované Uměleckohistorickou společností v českých zemích, členem vědeckých rad řady institucí (mj. UK, Národní galerie, Uměleckoprůmyslového muzea, Ústavu humanitních studií UJEP aj.) a redakční rady časopisu Umění, vydávaného Ústavem dějin umění AV ČR. Od roku 1985 publikoval na dvě stovky monografií a studií v českých i zahraničních sbornících a periodikách. Pravidelně se účastní konferencí v ČR, Německu a Polsku. "
    },
    "JosefRidky": {
        "jmeno": "Josef Řídký",
        "cas": "",
        "nazev": "",
        "anotace": "„K vrcholné něžnosti je třeba jemné pleti, měkkosti pohybu, jemnosti skladby těla, obecné citovosti a vláčnosti. Tyto vlastnosti jsou biologickými vlastnostmi ženy, nikoliv muže. Je velikou chybou, že se ženy při emancipaci, ve snaze napodobovat muže, něžnosti zbavují nebo na ni zapomínají.“ Takové i jiné výroky zaznívaly během 20. století z úst vážených pánů v bílých pláštích a s tituly, mužů, kteří měli moc nad lidským (duševním) zdravím a kteří rozhodovali, co je ještě normální, a co už ne. Opravdu si dívky píšou deníky s milostnými básněmi, zatímco se chlapci otužují? Je skupinový sex v pořádku, pokud se ho pár dopouští pro záchranu manželství? A když se někomu líbí jedinec stejného pohlaví, má pro to nutně sklony k umění? To jsou jen některé z otázek, jaké si kladli českoslovenští a čeští sexuologové a sexuoložky. My se potom budeme ptát, co je k jejich tázání vlastně vedlo – opravdu naše těla a touhy tolik vypovídají o tom, kým jsme? Anebo jsou sexuologické pojmy naší tělesnosti přeci jen příliš těsné?",
        "medailon": "Josef Řídký po dokončení studia na Gymnáziu Jana Keplera vystudoval historii a komparatistiku na FF UK. Věnuje se vztahu genderu a ideologie, především za doby normalizace. V současné době také spolupracuje se serverem A2larm.cz a kulturním čtrnáctideníkem A2."
    },
    "PavelJosefMacku": {
        "jmeno": "Pavel Josef Macků",
        "jmenoTituly": "Mgr. Pavel Josef Macků, Ph.D.",
        "cas": "sobota",
        "nazev": "Vývoj hudebních nástrojů od pravěku po současnost",
        "anotace": "Přijďte si poslechnout hru na padesát různých nástrojů. Přednáška seznámí posluchače s historií vývoje hudebních nástrojů od prehistorických až po současné formy. Téměř kompletní vývojová řada všech druhů dechových a strunných nástrojů bude doplněna hranými ukázkami. Posluchači tak budou mít unikátní možnost na vlastní oči vidět a hlavně slyšet kromě jiných také některé středověké či renesanční nástroje jako např. zvířecí rohy, chrotu, cink, křivý roh, loutnu, fidulu, psalterium, středověkou harfu a další.        ",
        "medailon": "Mgr. Pavel Josef Macků, Ph.D. na Masarykově univerzitě v Brně nejdříve vystudoval matematiku, fyziku a psychologii, poté také teologii na Univerzitě Palackého v Olomouci. Kromě toho se intenzivně věnuje i hudbě. Také sbírá i staví historické hudební nástroje.Mezi jeho další záliby patří například olejomalba či řezbářství.V současnosti pořádá nejrůznější přednášky a kurzy pro školy i veřejnost."
    },
    "MartinSuk": {
        "jmeno": "Martin Šuk",
        "cas": "předběžně 18.11. od 13:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Martin Šuk, kytarář. Po studiu uměleckořemeslné stavby kytar v Lubech u Chebu a uměleckého zpracování dřeva v Hradci Králové zakládá v roce 2007 vlastní kytarářskou dílnu v Poděbradech, kde staví koncertní klasické kytary tradiční španělskou metodou."
    },
    "HelenaIllnerova": {
        "jmeno": "Helena Illnerová",
        "cas": "17.11. 15-17",
        "nazev": "Denní časový program organismů",
        "anotace": "",
        "medailon": "Prof. RNDr. Helena Illnerová, DrSc. je světově uznávaná fyzioložka a biochemička. Po studiu na Přírodovědecké fakultě UK se věnovala výzkumu v oblasti chronobiologie. Jako první na světě objevila závislost funkce biologických hodin v mozku savců na délce dne během ročních období. Prof. Illnerová byla v letech 2001 - 2005 předsedkyní Akademie věd České republiky, kde zavedla program podpory mladých nadějných vědců. Dále předsedala Učené společnosti České republiky a České komisi pro UNESCO. Dodnes se pohybuje v několika vědeckých radách a etických komisích. Za přínos pro vědu a její řízení jí byla udělena řada domácích i zahraničních ocenění."
    },
    "TerezaGafnaVanova": {
        "jmeno": "Tereza Gafna Váňová",
        "cas": " může jen 17.11. 14-16 nebo jen hodinu dopoledne10-11 nebo sobota až od 17:45 dál",
        "nazev": "",
        "anotace": "",
        "medailon": "Tereza Gafna Váňová je učitelkou v Lauderových školách a odbornou pracovnicí v Nadačním fondu obětem holokaustu. Vystudovala angličtinu a základy společenských věd na Pedf UK, hebraistiku na Oxford University a rok strávila na konzervativní ješivě v Jeruzalémě. Na Lauderových školách vyučuje židovskou výchovu a hebrejštinu."
    },
    "LoonoZijessrdcem": {
        "jmeno": "Loono, ŽIJESSRDCEM",
        "cas": "17.11. 12-13",
        "nazev": "#žiješsrdcem",
        "anotace": "",
        "medailon": "Loono (čti Lůno) je tým mladých lékařů, studentů lékařských fakult a jiných nadšenců. Jejich společným cílem je prevence společnosti skrze vzdělávací workshopy, přednášky, publikace a videa. O zdraví a těle mluví srozumitelně, nestraší statistikami a inspirují ostatní, aby se o sebe začali starat včas a rádi. Mezi největší ocenění patří Sozial Marie (2016) & Gratias Tibi (2016). K celorepublikovém úspěchu s workshopem #prsakoule se nyní přidává i workshop #žiješsrdcem, v kterém se dozvíte vše o fukncích srdce, jeho onemocnění a jaké to je, si srdce poslechnout."
    },
    "PetrPojman": {
        "jmeno": "Petr Pojman",
        "cas": "18.11. 17-19",
        "nazev": "Obchodování s lidmi v dnešní době",
        "anotace": "",
        "medailon": "Petr Pojman je absolventem Mezinárodních  teritoriálních studií a Ruských a východoevropských studií na IMS FSV UK. Absolvoval řadu studijních a výzkumných pobytů v Rusku, Bělorusku, Ukrajině a Velké Británii. V letech 2008-2009 působil v humanitárním projektu Charity ČR Magdala, který pomáhá obětem obchodování s lidmi v ČR. V oblasti boje proti obchodu s lidmi a volebního pozorování spolupracuje s Organizací pro bezpečnost a spolupráci v Evropě. \nDále působí v Ukrajině od r. 2014 v rámci projektu The Prague Security Studies Institute. Zaměřuje se na problematiku bezpečnosti, organizovaného zločinu a na studium nových metod hybridní války. Za účelem pomoci progresivním složkám ukrajinské společnosti i státu vytvořil v r. 2015 Team4Ukraine."
    },
    "FilipMatejka": {
        "jmeno": "Filip Matějka",
        "cas": "17.11. 15-17",
        "nazev": "Behaviorální ekonomie",
        "anotace": "",
        "medailon": "RNDr. Filip Matějka, Ph.D. vystudoval fyziku na Univerzitě Karlově a získal doktorát z aplikované matematiky na Princetonské univerzitě v USA. Od roku 2010 působí jako výzkumný pracovník Národohospodářského ústavu AV ČR. Od roku 2011 je členem akademického sboru CERGE-EI, společného pracoviště Univerzity Karlovy a Akademie věd ČR. K ekonomii přešel na začátku doktorských studiích na Princetonu. Studuje zejména makroekonomii, ekonomickou teorii, ekonomii informací a behaviorální ekonomii. V roce 2015 získal Starting grant Evropské výzkumné rady ve výši 30 milionů korun. Je zakladatelem iEkonomie, odborného diskuzního fóra o aktuálních ekonomických otázkách. Pomocí ekonomických teorií vysvětluje chování lidí i státu."
    },
    "BarbaraHerz": {
        "jmeno": "Barbara Herz",
        "cas": "",
        "nazev": "Přítomné tělo: tělesnost v postdramatickém divadle",
        "anotace": "Akcentovaná tělesnost je jedním z hlavních principů postdramatického divadla patřícího k podstatným divadelním proudům poslední dekády. Ať už se jedná o divadlo dokumentární, pohybové či různé formy performance, herec zde přestává být pouhým reprezentantem dramatické postavy, jak je tomu u divadla tradičního. Do dialogu s divákem vstupuje namísto hry na „Hamleta“ jeho vlastní tělo, bolest, únava, zdravotní stav či libovolná osobní anamnéza…  Jak rozdílné podoby může práce s tělesností nabývat si ukážeme na příkladech několika významných světových tvůrců postdramatického divadla, jimiž jsou Rimini Protokoll, Chritoph Schlingensief, She She Pop, Lola Arias, Romeo Castellucci a Sasha Walz. Po celý čas bude přednáška doprovázena bohatou obrazovou dokumentací.",
        "medailon": "Barbara Herz je divadelní režisérka. Vystudovala režii na brněnské JAMU a zároveň komparatistiku a divadelní vědu na FF UK v Praze. Spolupracovala s mnoha divadly jako Divadlo v Dlouhé, Husa na provázku nebo Národní divadlo Brno. Převážně se ale věnuje divadelní platformě DOK.TRIN, kterou sama založila. DOK.TRIN se v čele s Barbarou Herz věnuje autorskému, dokumentárnímu divadlu, scénickým esejům a experimentu s realitou. Zároveň také ale i vyučuje na JAMU v Brně."
    },
    "JiriFligl": {
        "jmeno": "Jiří Flígl",
        "cas": "18.11. 15-17",
        "nazev": "",
        "anotace": "",
        "medailon": "Jiří Flígl je český filmový kritik recenzent spolupracující mimo jiné s kritickým dvouměsíčníkem pro filmové cinefily Cinepur či kulturním čtrnáctideníkem A2, jeho starší texty si zase můžete přečíst na serveru aktuálně.cz. Jako dramaturg se podílí na Festivalu otrlého diváka, festivalu Filmasia, má na starosti sekci půlnočních lahůdek na Letní filmové škole v Uherském Hradišti. Specializuje se především na kinematografii Dálného východu, dále jej také zajímá braková, campová a exploatační estetika."
    },
    "AntoninTesar": {
        "jmeno": "Antonín Tesař",
        "cas": "18.11. 15-17",
        "nazev": "",
        "anotace": "Při pohledu na americké akční filmy posledního desetiletí by mohl leckterý fanoušek i znalec žánru lamentovat nad tím, že se z nich vytratila skutečná fyzická akce, která byla nahrazena počítačovými efekty a lehce napodobitelným frenetickým stylem v podobě zběsilého střihu nebo těkající kamery. Je pravda, že „kinematografie chaosu“ na jistou dobu ovládla hollywoodskou akční mainstreamovou produkci a někteří tvůrci ji dokonce přijali za svůj autorský trademark. Kde tedy můžeme stále i dnes najít poctivou akci a rvačky tzv. tělo na tělo? Odpovědi se zdají být v béčkové kinematografii, nebo ještě lépe na dálném východu.",
        "medailon": "\nAntonín Tesař je významný český filmový recenzent, jehož kritiky můžeme nalézt například v kulturně zaměřeném čtrnáctideníku A2, na webu Radia Wave či v ryze filmovém dvouměsíčníku Cinepur. Rovněž přispívá do nespecializovaných časopisů, jako například týdeník Respekt. Jako dramaturg se podílí na Festivalu otrlého diváka, který se letos konal již potřinácté. Mimo filmové odvětví se věnuje také japonské kultuře. Je spoluautorem souboru esejů o japonské popkultuře Made in Japan a byl jedním z autorů dnes již neaktivních webových stránek Rejže.cz, zabývajících se japonským filmem. Zajímá se také o tzv. manga komiksy, píše o nich na webu Kobuta.cz, napomáhá vydávání každoroční sbírky české mangy s názvem Vějíř a sám je také autorem několika exemplářů.\n"
    },
    "JanPaces": {
        "jmeno": "Jan Pačes",
        "cas": "18.11. 17-19",
        "nazev": "Člověk a šimpanz aneb lekce od bratranců",
        "anotace": "",
        "medailon": "Jan Pačes, Ph.D., (*1967) vystudoval PřF UK a v Ústavu molekulární genetiky AV ČR, v. v. i., studuje strukturu genomů. Zaměřuje se zejména na lidské endogenní retrovirové elementy, jejichž dosud nejúplnější databázi sestavil. Přednáší ve studijním programu bioinformatiky a je koordinátorem velké vědecké infrastruktury ELIXIR."
    },
    "TomasChytka": {
        "jmeno": "Tomáš Chytka ",
        "cas": "18.11.-15:00",
        "nazev": "Od Gymnázia Jana Keplera k Leksellovu gama noži",
        "anotace": " Jít si za tím, co nás baví a zajímá, nejčastěji  začíná již na střední škole, kdy pomalu zjišťujeme, čemu bychom se chtěli v budoucnu věnovat. Od studenta pražského gymnázia se dá dostat až k současné  práci na Leksellově gama noži. Jedná se o přístroj, který je využíván při radiochirurgii, excelentní léčebné modalitě, která dokáže neinvazivním způsobem likvidovat nitrolební patologická ložiska. Pojem radiochirurgie do mediciny zavedl průkopník stereotaxe, švédský neurochirurg Lars Leksell. Označil jím postup, kdy při křížovitém prozáření přesně definovaného místa v nitrolebním prostoru svazky slabého záření z mnoha směrů se kumuluje v místě křížení účinná dávka, zatímco tkáň v jednotlivých směrech záření je zatížena minimálně a bez biologického účinku. Svou koncepci publikoval v roce 1951 a Gama nůž č. 1 byl instalován v roce 1968 ve Švédsku.  Gama nůž v Praze má  číslo 37 a byl uveden do provozu v říjnu 1992 a letos tedy oslavil 25 .leté výročí .",
        "medailon": "\nMUDr. Tomáš Chytka odmaturoval na pražském Gymnáziu Jana Keplera v roce 1984. Po vystudování univerzity se stal neurochirugem a je jeden z mála lékařů v této zemi, který operuje pomocí Leksellova gama nože v nemocnici Na Homolce. Mimo to organizuje různé běhy pro zdraví a kondici a pořádá všemožné autorské výstavy. "
    },
    "LukasCerny": {
        "jmeno": "Lukáš Černý",
        "cas": "16.11. 18:45 - 19:30 ",
        "nazev": "Příliš pevné, příliš křehké\ntragické tělo",
        "anotace": "Tragédie jakožto dramatický žánr osciluje mezi jazykem a tělem. V tom prvním přetrvává, v tom druhém se rodí a umírá. Nebo naopak. V každém případě hraje tělesnost v tragédii zásadní roli. Podívame se tedy pod kůži tomu tragickému hrdinovi, který je svojí kůží i svojí rolí přímo posedlý: náhledneme pod černý plášť Hamleta, principála všech šmíráků. Právě ten totiž vlastní tělesnost neustále reflektuje, nahlíží ji jako bytostně divadelní, a možná tak i nepřímo pojmenovává funkci těla v tragédii vůbec - nebo se o to alespoň snaží. Otázka je, nakolik jeho slovům můžeme věřit...",
        "medailon": "Lukáš Černý studuje čtvrtým rokem Divadelní vědu na Filozofické fakultě Univerzity Karlovy. V rámci studia inklinuje k tragičnu, někdy až k absurdnu, tj. zabývá se především teorií a dějinami tragédie, od vzniku až po její rezidua v moderní dramatice. S tímto úsilím započal už na Gymnáziu Jana Keplera, kde absolvoval v roce 2014. Mimo to se od svého krátkého působení na Freie Universität v Berlíně zabývá také současným německým divadlem a teorií performance. Příležitostně působí v redakcích zpravodajů při festivalech amatérského divadla."
    },
    "JakubCibulaLukasAdam": {
        "jmeno": "Jakub Cibula & Lukáš Adam",
        "cas": "16.11. 19:30 - 20:15",
        "nazev": "O kráse těla",
        "anotace": "Přijďte se podívat na dvě krásná těla a jejich jedinečný a interaktivní seminář, naučte se vnímat krásu lidí okolo sebe (a také krásu sebe sama), seznamte se s lidským tělem všemi smysly.",
        "medailon": "Jakub Cibula & Lukáš Adam. Legendární duo (název ještě v procesu) poprvé po dvaceti letech vystoupí v České republice."
    },
    "JanVacha": {
        "jmeno": "Jan Vácha",
        "cas": "16.11. 21:00",
        "nazev": "PUBQUIZ: Lidské tělo",
        "anotace": "Lidské tělo je fascinující. Skrývá mnoho zajímavostí. Překvapuje nás svým potenciálem. Je v neustálém boji se svými nepřáteli. Ale na své straně má armádu velmi dobře vyzbrojených opravářů. Dejte hlavy dohromady, vytvořte tým a otestuje své znalosti o lidském těle a medicíně.",
        "medailon": "Jan Vácha, absolvent GJK, nyní student 2. LF UK v Praze. Studium lidského těla ho uchvacuje už mnoho let a své poznatky předává studentům v semináři Biologie člověka. V budoucnu se chce věnovat opravování těch nejmenších lidských těl, tedy dětí."
    },
    "JanCerny": {
        "jmeno": "Jan Černý ",
        "cas": "17.11. 15:00",
        "nazev": "Mikrochimerismus",
        "anotace": ".",
        "medailon": "Prof. RNDr. Jan Černý PhD. vystudoval na Přírodovědecké fakultě Univerzity Karlovy v Praze obor molekulární biologie a genetika, dále pak na PřF UK studoval obor imunologie v rámci doktorského studia. V dnešní době se věnuje studiu molekul a jejich spojení s membránami leukocytů (bílých krvinek), ale také studiu biologických aktiviti sekundárních metabolitů bakterií a hub. Získal mnoho ocenění, naposledy v roce 2005, kdy obdržel cenu Akademie věd České republiky právě za soubor publikací o adaptorových proteinech lidských leukocytů."
    },
    "MichalBurian": {
        "jmeno": "Michal Burian",
        "cas": "18.11. 15:00",
        "nazev": "",
        "anotace": "",
        "medailon": "Plk. Mgr. Michal Burian, PhD. je ředitel odboru muzeí VHÚ. Od roku 1995 je pracovníkem Vojenského historického ústavu Praha, kde působil ve vědeckém, expozičním a sbírkovém oddělení a v odboru muzejně správním. Od roku 2008 je ředitelem odboru muzeí. Je kurátorem sbírek automobilní a těžké bojové techniky a\nspojovacího materiálu. Dříve byl rovněž kurátorem sbírky chemického materiálu. Dlouhodobě se mimo jiné zabývá historií sudetoněmeckých paramilitárních organizací a České obce sokolské. Je členem Rady pro výstavní činnost Národního muzea, Výstavní a programové rady Národního technického muzea, Redakční rady časopisu Historie a Vojenství, Ediční rady Ústavu pro studium totalitních režimů a Předsednictva vzdělavatelského odboru České obce sokolské.\n\n"
    },
    "LukasPollert": {
        "jmeno": "Lukáš Pollert",
        "cas": "18.11. 13:00",
        "nazev": "",
        "anotace": "",
        "medailon": "MUDr. Lukáš Pollert je absolventem GJK z počátku 90. let, ve svém studiu pokračoval na 2. lékařské fakultě UK. Proslavil se jako vynikající vodní slalomář a kanoista, například v roce 1992 se stal olympijským vítězem na LOH v Barceloně. Po ukončení sportovní kariéry se začal naplno věnovat medicíně: nejprve pracoval na interně, poté na oddělení urgentního příjmu Ústřední vojenské nemocnice. V současnosti pracuje ve Fakultní nemocnici v Motole na klinice anesteziologie a resuscitace."
    },
    "MonikaSvecSybolova": {
        "jmeno": "Monika Švec Sybolová",
        "cas": "17.11. 17-19",
        "nazev": "Erotické signály ve výtvarném umění 19. století",
        "anotace": "Přednáška se zaměří na fenomén, jak do vysokého umění 19. století postupně proniká erotično jako osvěžující, moderní a samozřejmě lehce skandální motiv. Podíváme se na to, čím se ve vizuálním umění vysílají erotické signály. Je to jenom ženské tělo v různém odhalení a natočení? Nebo je to ještě něco dalšího? Porovnáme erotično v obraze a v textu, budeme sledovat souboj erotična s duchovnem a nakonec se uvidíme, co se s erotickou tělesností stane ve 20. století. Přednáška bude pracovat hlavně s díly Josefa Mánesa a Maxe Švabinského.",
        "medailon": "Monika Sybolová vystudovala estetiku a dějiny umění na FF UK. Od roku 1993 je externí lektorkou Sbírky umění 19. století Národní galerie v Praze a od roku 2000 kurátorkou pro edukační činnost tamtéž. V současnosti organizje doprovodné a vzdělávací programy k výstavám NG jako Tajemné dálky či Celník Rousseau. Dále se podílí na programech pro školy v Anežském klášteře či Salmovském paláci. Organizuje a připravuje s kolegy Kurzy dějin umění, Letní krajinářské dílny pro studenty a dospělé, Jednodenní dramaticko-výtvarné plenéry a soutěž pro studenty středních škol Máš umělecké střevo?. Je také spoluautorkou knih pro děti Deník Jakuba S. nebo Čapek a Čapek. Spolupracovala na tanečních představeních Sen všech žen pro festival Habrovka a Den a noc a noc a den skupiny NANOHACH a na performancích reagující na výtvarné umění v galeriích."
    },
    "DebataZurnalismus": {
        "jmeno": "Debata ŽURNALISMUS",
        "cas": "18.11. 13-15",
        "nazev": "Tělesnost žurnalistiky",
        "anotace": "Má novinařina bez osobního kontaktu redaktora a subjektu pro daný článek či reportáž hlavu a patu? Jak moc je zkreslený výsledný produkt nepřímé komunikace, například přes emailové dopisování? Jakou měrou se liší od akce a zapálené investigace? Je tato forma žurnalismu degenerovaná a nenaplněná? Různé aspekty soft news a hard news - jak jsou ovlivňovány a jak mohou samy ovlivňovat? Ubývá prostor pro tělenost dnešní žurnalistky? Na téma těchto otázek bude diskutovat trojice českých novinářek, s nimiž poté budete moci tělo na tělo  probrat své osobní názory, pocity a připomínky.",
        "medailon": "Apolena Rychlíková (* 1989, Brno) je česká dokumentaristka, levicová aktivistka a novinářka. Po absolvování Biskupského gymnázia v Brně získala titul bakaláře na Katedře dokumentární tvorby FAMU. Ohlas vzbudil její dokumentární film Hájek na zámku, Petr v podzámčí (2011) který obdržel Cenu Karla Vachka Anime, jež se uděluje jako součást Cen Nikolaje Stankoviče. V roce 2012 byla autorkou námětu k dokumentárnímu cyklu Expremiéři, v rámci něhož natočila snímek o Mirku Topolánkovi, uvedený roku 2014. Její snímek Hranice práce, který popisuje problematiku levné práce v České republice, získal na Mezinárodním festivalu dokumentárních filmů Ji.hlava 2017 cenu Česká radost za nejlepší český dokument a cenu diváků. V minulosti přispívala do Deníku Referendum, Romea a Nového prostoru.V současnosti působí v redakci zpravodajského webu A2larm."
    },
    "PavelKlusak": {
        "jmeno": "Pavel Klusák",
        "cas": "18.11. 10-12",
        "nazev": "Rituál se vrací: Tělo v současném umění & hudbě",
        "anotace": "Vystačit si jen s vlastním tělem. Dát ho v sázku. Otestovat ho. Navázat na dávnou zkušenost s přechodovými rituály. Použít pro svůj tvůrčí experiment sebe sama. To je cesta současných umělců, kteří odkládají všechno, aby jim nakonec zbyl zásadní materiál: vlastní tělo a hlas.\n",
        "medailon": ""
    },
    "JanKozak": {
        "jmeno": "Jan Kozák",
        "cas": "17.11-10-12",
        "nazev": "Na počátku byla vražda: Stvoření světa z lidského těla v mytologii",
        "anotace": "Motiv oběti prvotní bytosti a stvoření kosmu z jejího těla najdeme v celé řadě světových mytologií. V rámci přednášky toto transkulturní mytické téma prozkoumáme a vrhneme na něj světlo z řady různých stran: ukážeme si, že vyjadřuje starobylým jazykem symbolů myšlenku paralelismu mezi makrokosmem a mikrokosmem (\"holografický vesmír\") a předznamenává tak renesanční \"člověk je mírou všech věcí\"; že ilustruje názorně princip konceptuální metafory, který je jedním ze základních nástrojů lidského poznávacího aparátu; že objasňuje smysl a funkci oběti v náboženství a že je principem dodnes živoucím v podobě křesťanské eucharistie. Podíváme se blíže na symboliku jednotlivých částí těla a způsobů, jakými strukturace kosmického těla odpovídá rozdělení kosmických sfér či sociálních vrstev a jak funguje coby nástroj klasifikace a legitimizace.",
        "medailon": "Mgr. Jan Kozák, Ph.D.  Jan Kozák (1979) je absolventem Gymnázia Jana Keplera. Vystudoval religionistiku a latinu na FFUK, kde v současnosti přednáší. Zaměřuje se na náboženství předkřesťanské Skandinávie, ale také teorie mýtu a historie jeho interpretací. Zabývá se komparativní lingvistikou a překládá ze staroseverštiny i latiny, případně z angličtiny (Tolkienovy eposy). Ve volné čase se věnuje výuce šermu a kaligrafii."
    },
    "MartinSemerad": {
        "jmeno": "Martin Semerád",
        "cas": "",
        "nazev": "Kosmologické pojednání o vzniku tělesnosti člověka z pohledu Anthroposofie za přispění pohledů, který nám dává moudrost matematiky",
        "anotace": "Ve filosofii nejsou tolik důležité odpovědi, jako otázky, které klademe, neboť především způsob, jak se ptáme, dává světu možnost, aby nám podle toho také odpovídal. Člověk sám pak zůstává (a to i svým tělem) sám sobě především živou otázkou – Kdo jsem, odkud jdu a kam? Způsob hledání odpovědi přitom není podmíněna jen časem, ve kterém se ptáme, ale především celým naším myšlenkovým konceptem, tedy oním světem kultu - kultury, ve kterém je prožíván (chápán) také náš vlastní příběh, náš vlastní život. Přednáška, která bude pronesena, je zasazena v návaznost mythu pythagorejského – do světa, kdy Moudrost Hvězd ještě promlouvá k Člověku, ve kterém matematika sama sebe ještě chápe jako božskou vědu a kdy svět včel je viditelným tajemstvím možné lidské budoucnosti. V posledku však může být i tato anotace pouze poukazem na cestu, po které se vydáme společně – neboť přednáška je koncipována jako setkání a tedy možný rozhovor, ve kterém okruh otázek není vymezován jen přednášejícím, ale také posluchači. Těším se tedy na setkání.",
        "medailon": "Mgr. Martin Semerád, Ph.D. je lektorem Akademie sociálního umění TABOR v Praze. Vystudoval magisterský obor \"Matematická analýza\" na Matematicko fyzikální fakultě Univerzity Karlovy v Praze (1999), obor Léčebná pedagogika a sociálně umělecká terapie v Akademii sociálního umění Tabor v Praze (2009) a doktorské studium oboru Filosofie na Pedagogické fakultě Univerzity Karlovy v Praze (2011). Ve své doktorské práci Imaginace nekonečna rozvíjí koncept imaginativního přístupu v matematice, který dále uplatňuje ve výuce dětí i dospělých. Mezi oblasti jeho profesního zájmu patří filosofie matematiky, hermenautika, prostor a čas, hudba, včely."
    }
}

function isObject(o) {
    return o instanceof Object && o.constructor === Object;
}


var rozvrhToFull = function (rozvrh, data) {
    rozvrh.forEach(function (den) {
        if (den['program'])
            den['program'].forEach(function (blok) {
                if (blok['prednasky'])
                    blok['prednasky'].forEach(function (mluvci, index) {
                        console.log("mluvčí:", mluvci);
                        console.log("data:", data[mluvci]);
                        var ref = mluvci;
                        if (ref.indexOf(' ') > -1)
                            ref = fix(ref).toBactrianCamelCase();
                        console.log('ref:', ref);
                        if (data.hasOwnProperty(ref)) {

                            blok['prednasky'][index] = data[ref];
                        } else {
                            blok['prednasky'][index] = {
                                'jmeno': mluvci,
                                'nazev': '',
                                isEmpty: true,
                                'ref': ref
                            };
                            console.log(mluvci);
                        }
                    });
            });

    });

}


var dataToUsable = function (data) {
    var temp = {};
    data.forEach(function (e) {
        var identifier = fix(e["jmeno"]).toBactrianCamelCase();
        if (identifier) {
            temp[identifier] = e;
        }
    });
    return temp;
}
rozvrhToFull(rozvrh, data)
console.log(rozvrh);

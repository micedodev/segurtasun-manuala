# 2UD · Segurtasun logikoa

> Eskalan bakarrik funtzionatzen duten bost teknika

Ideia bat partekatzen duten bost teknika: irismena biderkatzea. Kredentzial bat kontu bihurtzen da, kontu bat mila ekipo eta mila ekipo zerbitzuaren erorketa.

Unitate honetako bost teknikek ideia bat partekatzen dute: biderkatzea. Iritsitako kontaktuak biderkatzea, kontrolatutako ekipoak, segundoko saiakerak, aldi bereko eskaerak edo ikusia izan gabe irauten duten hilabeteak.

Hori da gertakari bakartu bat kanpaina batetik bereizten duen eskala-jauzia. Hemen erasotzaileak ekipoz ekipo lan egiteari uzten dio eta azpiegiturarekin lan egiten hasten da: milaka nodoko sareak, ateratako milioika kredentzialen zerrendak eta orduka alokatutako konputazio-ahalmena.

**Ideia nagusia:** Segurtasun logikoan ia ezer ez dago indar teknikoaren mende, eskalaren mende baizik. Botnet batean arriskutsua dena ez da nodo bakoitzak egiten duena, milaka ari direla aldi berean eta blokeatu ezin diren helbideetatik baizik.

---

### Unitate honetan

1. [Social Worm](#1-sare-sozialetako-harra) — Kontaktuen arteko konfiantzatik hedatzen da, ez zerbitzariaren akats batetik.
2. [Botnet](#2-botneta) — Milaka ekipo arrotz agindu bakar bati obeditzen.
3. [Brute Force](#3-indar-gordineko-erasoa) — Asmakizunik gabe. Pazientziarekin eta zerrendekin.
4. [DDoS](#4-ddos-erasoa) — Ez da inor sartzen ez delako. Jada inor ez delako kabitzen baizik.
5. [Rootkit](#5-rootkita) — Ez du fitxategi bat ezkutatzen. Begiratzeko modua ezkutatzen du.

---

## 1. Social Worm

**Sare sozialetako harra** · Larritasuna: Ertaina

> Kontaktuen arteko konfiantzatik hedatzen da, ez zerbitzariaren akats batetik.

### Definizioa

Plataforma sozialen eta mezularitzaren bidez zabaltzen den kode maltzurra, dagoeneko arriskuan dauden kontuak erabiliz haien kontaktuetara iristeko. Bektorea ez da zerbitzuaren ahultasun bat, igorlearen eta hartzailearen arteko aurreko harremana baizik: mezua ezagun batengandik iristen da.

### Nola funtzionatzen duen

1. Lehen kontua arriskuan jartzea, normalean berrerabilitako pasahitz batengatik edo esteka iruzurti batengatik.
2. Kontaktuak zerrendatzea: kodeak hartutako kontuaren lagunen zerrenda, taldeak eta azken elkarrizketak irakurtzen ditu.
3. Zabalkunde pertsonalizatua: esteka bat duen mezu labur bat argitaratzen edo bidaltzen du, tonua aurreko elkarrizketara egokituz, nabarmendu ez dadin.
4. Hurrengo katebegia harrapatzea: estekak berriro saioa hasteko eskatzen duen orrialde batera darama, edo edukia ikusteko osagarri bat instalatzea eskatzen duen batera.
5. Errepikapena: kontu berri bakoitzak zikloa berrabiarazten du, beraz hazkundea biderkatzailea da iritsi gabeko kontaktuak dauden bitartean.

### Eraso-bektorea

- Plataformaren mezularitza pribatua, non mezua benetako kontaktu baten argazkiarekin eta izenarekin iristen den.
- Argitalpenetako iruzkinak eta aipamenak, kontaktuen zerrendatik askoz harago zabaltzen dutenak irismena.
- Kontuari baimen eskuordetuaren bidez lotutako hirugarrenen aplikazioak, pasahitza aldatuta ere baimena gordetzen dutenak.
- Biktima bera omen datorren bideo bat ikusteko eskatzen diren erreproduzitzaile edo osagarri faltsuak.

### Adibide argigarria — Bidegorri Mugikortasuna

*Hiri mugikortasun partekatua · 2024*

2024ko maiatzean, Bidegorri Mugikortasunaren kontu korporatiboa, sare profesional batean, mezu pribatuak bidaltzen hasten zaie bere kontaktuei. Testua laburra da, euskaraz eta gaztelaniaz idatzita dago, eta sektoreko txosten bat dirudien zerbaitera estekatzen du.

Estekak sarearenaren berdin-berdina den saio-hasierako orrialde batera darama. Kredentzialak sartzen dituen kontaktu bakoitzak bere kontua uzten du, eta minutu gutxiren buruan mezu bera bidaltzen hasten da bere zerrendara. Sei ordutan ehun eta laurogeita hamar bidalketa zenbatzen dira hogeita hamaika kontu desberdinetatik.

Hedapena gelditzen duena ez da defentsa tekniko bat, idazkera-xehetasun bat baizik: mezuak komunikazio arduradunak bere ohiko kontaktuekin inoiz erabiltzen ez duen tratamendu formala darabil. Haietako batek telefonoz deitzen du galdetzeko, eta abisua harra baino azkarrago zabaltzen da.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Hartutako kontuek elkarrizketa pribatuetara eta kontaktu profesionalen zerrenda osoetara ematen dute sarbidea. |
| Osotasuna | Bai | Erasotzaileak erakundearen izenean argitaratzen eta bidaltzen du edukia, haren komunikazio publikoa aldatuz. |
| Erabilgarritasuna | Ez | Zerbitzua ez da eteten; kontua eteten bada, ondorengo euspen-neurriagatik da, ez harragatik. |
| Autentikazioa | Bai | Zabalkunde bakoitza kontu legitimo batetik gertatzen da, zeinaren kontrola beste pertsona baten eskuetara igaro den. |
| Ez-arbuiatzea | Bai | Mezuak kontuaren titularrak bidalitako gisa geratzen dira, eta honek ezin du kontrakoa frogatu bere kontaktuen aurrean. |

### Defentsa

- Bigarren faktorea korporazioko kontu sozial guztietan, pertsonaka eskuordetutako sarbidearekin eta ez partekatutako pasahitz batekin.
- Baimendutako hirugarrenen aplikazioen hiruhileko berrikuspena, jada erabiltzen ez direnak baliogabetuz.
- Barne arau sinplea: mezularitzaz jasotako esteka batek ere ez darama saio-hasierako pantaila legitimo batera; helbidea idatziz sartzen da.
- Egiaztapen-kanal azkarra —dei bat, barne talde bat— ezagun baten ustekabeko edozein mezu berresteko.
- Dokumentatutako erantzun-prozedura: pasahitza aldatu, saio aktibo guztiak itxi, eskuordetutako baimenak baliogabetu eta abisu publikoa eman.

---

## 2. Botnet

**Urruneko kontrolpeko gailu-sarea** · Larritasuna: Altua

> Milaka ekipo arrotz agindu bakar bati obeditzen.

### Definizioa

Operadore beraren urruneko kontrolpean geratu eta aginduak modu koordinatuan exekutatzen dituzten ekipo kutsatuen multzoa. Ekipo bakoitzak bereizita ia ez du ezer ekartzen: sarearen balioa batuketan dago, eta haien jabe legitimoek normaltasunez erabiltzen jarraitzen dutelako.

### Nola funtzionatzen duen

1. Kutsatzea: ekipoak agentea jasotzen du edozein bidetatik —troiarra, exploita edo fabrikako kredentziala— eta nodo gisa operatibo geratzen da.
2. Erregistratzea: agenteak agindu eta kontrol azpiegiturarekin kontaktua egiten du, sarritan algoritmoak sortutako dominioen bidez edo desmuntatzen zaila den sare deszentralizatu baten bidez.
3. Itxarotea: nodoa geldirik eta kontsumo minimoarekin geratzen da, aginduen kanala tarte irregularretan galdekatuz.
4. Exekuzio koordinatua: agindua iristen denean, milaka nodok aldi berean jarduten dute posta bidaltzeko, kredentzialak probatzeko, trafikoa sortzeko edo malwarea banatzeko.
5. Mantentzea: operadoreak agentea eguneratzen du, blokeatutako dominioak ordezkatzen ditu eta ahalmena hirugarrenei alokatzen die orduka.

### Eraso-bektorea

- Gauzen internetaren gailuak, Internetetik eskuragarri dauden fabrikako kredentzialekin: kamerak, grabagailuak eta etxeko routerrak.
- Troiarrak kutsatutako erabiltzaile-ekipoak, errugabeei eragin gabe blokeatzen zailak diren egoitza-helbideak ekartzen dituztenak.
- Adabakirik gabeko ahultasunengatik arriskuan dauden zerbitzariak, beren banda-zabalera simetrikoagatik bereziki baloratuak.
- Sarea bera hirugarrenei alokatzea, azpiegitura beretik abiarazitako kanpaina desberdinen kopurua biderkatzen duena.

### Adibide argigarria — Mendizorrotz Telekomunikazioak

*Telekomunikazio operadorea · 2025*

2025eko otsailean, Mendizorrotz Telekomunikazioetako eragiketa taldeak eredu bitxi bat detektatzen du bere egoitza-sarbideko sarean: eredu bereko lau mila eta zortziehun routerrek, laurogeita hamar minuturo, egunero aldatzen den dominio bat galdekatzen dute.

Eragindako ereduak urruneko kudeaketa-interfazea agerian uzten du eta fabrikako kredentziala ez zen inoiz aldatu, hornikuntza-prozedurak berak ez zuelako aldatzen. Kutsatutako ekipo bakoitzak segundoko kilobit bat baino gutxiago kontsumitzen du geldirik: bezero batek ere ez zuen ezertxo ere nabaritu.

Sarea bost astez erabili zen hirugarrenen atarien aurka kredentzialak probatzeko, nodoko eta minutuko hiru saiakerako erritmoan. Eraso zuten atariaren ikuspegitik ez zegoen blokeatzeko iturririk: lau mila eta zortziehun egoitza-helbide legitimo zeuden, ia erabiltzaile errealak bezala jokatzen.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Operadoreak kutsatutako ekipoetarako eta haietatik igarotzen denerako sarbidea du, nahiz eta bere interes nagusia ahalmena izan. |
| Osotasuna | Bai | Agenteak ekipoaren konfigurazioa aldatzen du bere iraunkortasuna ziurtatzeko, eta zeharkatzen duen trafikoa alda dezake. |
| Erabilgarritasuna | Bai | Bai kanpainen azken biktimarentzat, bai ekipoaren jabearentzat, zeinaren baliabideak jakinaren gainean egon gabe kontsumitzen diren. |
| Autentikazioa | Bai | Hasierako sarbidea ia beti ekipoak baliozkotzat hartzen dituen fabrikako edo lapurtutako kredentzialekin gertatzen da. |
| Ez-arbuiatzea | Bai | Ekintzak bezero legitimoen helbideetatik abiatzen dira, eta hauek agertzen dira hirugarrenen aurrean erasoaren erantzule. |

### Defentsa

- Fabrikako kredentzialak nahitaez aldatzea hornikuntzan, jatorrizko balioa gordetzeko aukerarik gabe.
- Administrazio-interfazeak Interneterantz ixtea: kudeaketa operadorearen saretik iritsi behar da, inoiz ez sare publikotik.
- Kudeatutako gailuen firmwarearen eguneratze automatikoa, egutegiarekin eta aplikazioaren ondorengo egiaztapenarekin.
- Sarean bertan galdeketa-eredu anomaloak detektatzea: bizitza oso laburreko dominioak edo giza jarduerarik gabeko orduetako konexio erregularrak.
- Operadorearen irteerako iragazketa, bezero batek ere ezin dezan trafikorik bidali jatorriko helbidea faltsututa.

---

## 3. Brute Force

**Indar gordinezko saiakera** · Larritasuna: Ertaina

> Asmakizunik gabe. Pazientziarekin eta zerrendekin.

### Definizioa

Kredentzial bat asmatzeko saiakera sistematikoa, konbinazioak probatuz asmatu arte. Bere forma hutsean aukera-espazio osoa zeharkatzen du; praktikan, ateratako pasahitzen hiztegiekin laburtzen da, eta horiek milioika saiakera ondo aukeratutako ehun gutxi batzuetan bihurtzen dituzte.

### Nola funtzionatzen duen

1. Helburua lortzea: autentikazioa agerian duen zerbitzu bat eta, ahal bada, baliozko erabiltzaile-izenen zerrenda bat.
2. Estrategia aukeratzea: pasahitz ohikoenen hiztegia, erakundearen izenetik eratorritako konbinazioak edo beste urraketa batzuetan dagoeneko ateratako kredentzialak.
3. Saiakerak banatzea: jatorri-helbide askoren artean banatzen dira eta denboran tartekatzen dira, saiakera hutsengatiko blokeoa ez aktibatzeko.
4. Asmatzea detektatzea: zerbitzariaren erantzuna aldatu egiten da —kodea, erantzun-denbora edo mezuaren testua— eta prozesuak automatikoki erregistratzen du.
5. Balioztatzea eta erabiltzea: kredentziala erakundearen gainerako zerbitzuetan probatzen da, pasahitzen berrerabileraren alde eginez.

### Eraso-bektorea

- Urruneko sarbide zerbitzuak eta administrazio-panelak, inolako saiakera-mugarik gabe argitaratuak.
- Pasahitzen pulberizazioa: pasahitz oso ohiko bakar bat ehunka erabiltzaileren aurka probatzen da, kontu bat ere blokeatzera iritsi gabe.
- Kredentzialen betetzea: aurreko ihesetako erabiltzaile eta pasahitz bikoteak bere horretan probatzea, zerbitzuen arteko berrerabileraren alde eginez.
- Lineaz kanpoko erasoa lapurtutako laburpen-fitxategi baten aurka, non ez dagoen saiakera-mugarik ez prozesua salatuko duen erregistrorik.

### Adibide argigarria — Landabe Kooperatiba

*Nekazaritzako elikagaiak · 2024*

Landabe Kooperatibaren hornitzaile-atariak 2024ko irailean alarmarik pizten ez duen sarbide huts kopuruaren igoera erregistratzen du: jatorri-helbide bakoitzak saiakera bakar bat egiten du berrogei minuturo, eta blokeo-atalasea bost minututan bost saiakeratan dago finkatuta.

Estrategia ez da pasahitz asko probatzea erabiltzaile baten aurka, pasahitz sinesgarri bat baizik atariko hirurehun erabiltzaileen aurka. Aukeratutakoak kooperatibaren izena eta urte korrontea konbinatzen ditu. Lau kontuk horrelaxe zeukaten.

Lau horietako bat hornitzaileen banku-datuak aldatzeko baimena zuen pertsona batena zen. Erasoak bederatzi egun iraun zuen eta ez zuen inoiz konturik blokeatu, ez baitzen inoiz bi aldiz jarraian huts egitera iritsi kontu beraren aurka.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Asmatutako kredentzial bakar batek kontu horrek kontsulta dezakeen informazio osora ematen du sarbidea. |
| Osotasuna | Bai | Arriskuan dagoen kontuak idazteko baimenak baditu, erasotzaileak gaitasun hori osorik heredatzen du. |
| Erabilgarritasuna | Ez | Helburua arreta erakarri gabe sartzea da; eraso arduragabe batek bakarrik eragiten ditu kontuen blokeo masiboak. |
| Autentikazioa | Bai | Zuzenean erasotzen den kontrola da: nortasunaren egiaztapena gainditzea sekretua jakin gabe. |
| Ez-arbuiatzea | Bai | Behin barruan, jarduera guztia kontuaren titular legitimoarena bezala geratzen da erregistratuta. |

### Defentsa

- Bigarren autentikazio-faktorea: asmatutako pasahitz bat saiakera nahikoa ez bihurtzen du.
- Atzerapen progresiboa saiakera huts bakoitzaren ondoren, blokeo finkoaren ordez: erasotzailea moteltzen du, kontuak zerbitzuz kanpo uzteko aukerarik eman gabe.
- Pasahitz berriak ateratako kredentzialen zerrenden aurka egiaztatzea, ezartzen diren une berean.
- Zerbitzuko hutsen bolumen globala zaintzea, eta ez kontuka bakarrik: pulberizazioa multzokatuan bakarrik ikusten da.
- Pasahitzak eratorpen-funtzio geldoekin eta gatzarekin gordetzea, lapurtutako fitxategi bat kredentzial argi bihur ez dadin.

---

## 4. DDoS

**Zerbitzu-ukapen banatua (DDoS)** · Larritasuna: Altua

> Ez da inor sartzen ez delako. Jada inor ez delako kabitzen baizik.

### Definizioa

Helburuaren baliabide finitu bat agortu nahi duen erasoa —banda-zabalera, aldi bereko konexioak, prozesatzeko ahalmena edo memoria— erabiltzaile legitimoak artatzeari utz diezaion. Banatua deitzen zaio trafikoa aldi berean iturri askotatik datorrelako, eta horrek jatorri bakar bat blokeatuz konpontzea eragozten du.

### Nola funtzionatzen duen

1. Agortu beharreko baliabidea aukeratzea: sareko lotura, suebakiaren konexio-taula, aplikazio-zerbitzaria edo datu-basea.
2. Ahalmena biltzea: botnet propio edo alokatu bat, gehi trafikoa anplifikatzeko balio duten gaizki konfiguratutako zerbitzuak.
3. Anplifikazioa: eskaera txikiak bidaltzen dira jatorriko helbidea faltsututa, askoz pakete handiagoekin erantzuten duten zerbitzuetara, biktimarantz zuzenduta.
4. Asetzea: aukeratutako baliabidea bete egiten da eta zerbitzua eskaerak errefusatzen edo onartezina den geldotasunarekin erantzuten hasten da.
5. Iraunkortasun moldakorra: biktimak teknika bat arintzen badu, operadoreak bektorez, atakaz edo ereduz aldatzen du eta jarraitu egiten du.

### Eraso-bektorea

- Bolumetrikoa: loturaren banda-zabalera asetzen da, gaizki konfiguratutako DNS edo NTP zerbitzuen bidez anplifikatuz.
- Protokolokoa: suebakiaren edo orekatzailearen egoera-taulak agortzen dira erdi irekita utzitako konexioekin.
- Aplikazio-geruzakoa: eskaera gutxi, baina oso garestiak, datu-base osoa zeharkatzera behartzen duten bilaketak esaterako.
- Aurretiazko estortsioa: eraso-abisua ordainketa-eskaerarekin, ahalmenaren erakustaldi labur batez sostengatua.

### Adibide argigarria — Gorbeia Energia

*Energia merkaturatzailea · 2025*

2025eko azaroaren 14an, urteko tarifa-aldaketa bolumen handieneko egunarekin batera, Gorbeia Energiaren bezero-atariak erantzuteari uzten dio. Konpainiaren lotura ez dago asetuta: sarrerako trafikoak ez du ia gainditzen edozein astelehenetakoa.

Erasoa aplikazio-geruzakoa da. Mila eta berrehun helbide desberdinek, segundo gutxiro, kontsulta bat abiarazten dute tarifa-konparatzailean, kontratu baten historiko osoa berriro kalkulatzera behartzen duten parametroekin. Eskaera bakoitzak prozesu bat okupatzen du ia hiru segundoz.

Aplikazio-zerbitzarian ehun eta hirurogei prozesu eskuragarri egonik, segundoko hirurogei eskaera baino gutxiago nahikoa izan ziren ataria lau orduz erabilezin uzteko. Suebakiak ez zuen ezer anomalorik ikusi: eskaera guztiak sintaktikoki zuzenak ziren eta baliozko saioetatik zetozen.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Ez | Ez da informaziorik ateratzen, nahiz eta erasoa beste sarrera bat paraleloan exekutatzen den bitartean arreta desbideratzeko erabil daitekeen. |
| Osotasuna | Ez | Gordetako datuak ez dira aldatzen: erasoak artatzeko ahalmenaren gainean jarduten du, ez edukiaren gainean. |
| Erabilgarritasuna | Bai | Erasoaren helburu bakar eta aitortua da, eta jarduten duen propietate bakarra. |
| Autentikazioa | Ez | Ez da nortasun-kontrolik gainditzen; erasoak berdin funtzionatzen du erabat anonimoak diren eskaerekin. |
| Ez-arbuiatzea | Ez | Ez zaio ekintza faltsurik egozten inongo erabiltzaileri, nahiz eta arrastoak biktima ere badiren tarteko ekipoak seinalatu. |

### Defentsa

- Norberaren loturarena baino ahalmen askoz handiagoa duen arintze-zerbitzua, behar izan aurretik kontratatuta eta ez erasoan zehar.
- Eskaeren muga jatorriaren eta eragiketa garestiaren arabera, orrialde bat eskatzearen eta kalkulu astun bat abiaraztearen artean bereiziz.
- Erabiltzailearen mende ez dauden erantzun guztien cachea, trafikoaren zatirik handiena aplikaziora inoiz iritsi ez dadin.
- Hondatzeko moduko diseinua: asetzearen aurrean, funtzio garestiak desaktibatu eta funtsezkoak mantendu, erabat erori beharrean.
- Konektibitate-hornitzailearekin entseatutako erantzun-plana, idatziz eta sarerik gabe eskuragarri dauden kontaktu eta prozedurekin.

---

## 5. Rootkit

**Ezkutatze-tresneria** · Larritasuna: Kritikoa

> Ez du fitxategi bat ezkutatzen. Begiratzeko modua ezkutatzen du.

### Definizioa

Pribilegio handiekin instalatzen den tresna multzoa, sistema baterako sarbideari eusteko eta, batez ere, bere presentzia eta beste osagai maltzur batzuena ezkutatzeko. Ez dakar eraso-gaitasun berririk: zer exekutatzen ari den galdetzen zaionean sistemak erantzuten duena manipulatzen du.

### Nola funtzionatzen duen

1. Pribilegioak lortzea: rootkitak administrazio- edo nukleo-baimenak behar ditu, tokiko exploit baten bidez edo lapurtutako kredentzialen bidez lortzen dituenak.
2. Galdeketa-bidean txertatzea: aplikazioen eta sistemaren artean kokatzen da, deiak, funtzio-taulak edo nukleoko moduluak aldatuz.
3. Erantzunak iragaztea: programa batek prozesuen, fitxategien edo konexioen zerrenda eskatzen duenean, benetako zerrenda itzultzen du bere elementuak kenduta.
4. Iraunkortasuna babestea: bere fitxategiak eta abio-sarrerak zerrendatzea, aldatzea edo ezabatzea eragozten du.
5. Erasoaren gainerakoari zerbitzua: estaltze-geruza horren azpian atzeko ateak, teklakatu-erregistratzaileak edo botnet agenteak bizi dira, sistemaren beraren tresnentzat ikusezin.

### Eraso-bektorea

- Erabiltzaile-espazioan: partekatutako liburutegiak ordezkatzea, aldaerarik sinpleena eta detektatzen errazena ere bai.
- Nukleo-espazioan: modulu edo kontrolatzaile maltzur bat kargatzea, sistema eragileak ikusten duen guztia ikusi eta kontrolatzen duena.
- Abio-kudeatzailean: sistema eragilea baino lehenago exekutatzen da, beraz hau haren kontrolpean jaiotzen da.
- Ekipoaren edo txartel baten firmwarean, non diskoaren formateo osoari ere bizirik irauten dion.

### Adibide argigarria — Errekalde Kimika

*Industria kimikoa · 2023*

Errekalde Kimikaren produkzioa kontrolatzeko zerbitzariak, 2023ko martxotik, inork azaltzen ez duen portaera bat erakusten du: gaueko batez besteko sare-kontsumoa makina beraren duela urtebetekoa halako hiru da, baina tokiko tresna batek ere ez du hori justifikatzen duen prozesurik ez konexiorik erakusten.

Egiaztapenak zerbitzaritik beretik egiten dira, eta hortxe dago arazoa. Nukleoan kargatutako kontrolatzaile batek erantzunak iragazten ditu: konexioen zerrenda eskatzen zaionean, bereak izan ezik guztiak itzultzen ditu. Barrutik ikusita, makina koherentea da eta garbi dago.

Desadostasuna kanpotik begiratuta konpontzen da. Kommutadorearen trafiko-kontagailuak zerbitzariak aitortzen dituenak baino lau aldiz datu gehiago erregistratzen ditu irteeran. Ebidentzia horrekin diskoa kanpoko sistema batetik aztertzen da eta kontrolatzailea agertzen da, zazpi hilabetez aktibo zegoen exfiltrazio-agente batekin batera.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Bere estaltze-geruzaren azpian informazioa lapurtzeko tresnak modu egonkorrean eta luzez aritzen dira. |
| Osotasuna | Bai | Sistema eragilearen osagaiak aldatzen ditu eta, horrekin, sistema horrek jakinarazten duen guztiaren fidagarritasuna. |
| Erabilgarritasuna | Ez | Bere interesa sistemak normaltasunez funtzionatzea da: erorketa batek saihestu nahi duen azterketa bera eragingo luke. |
| Autentikazioa | Bai | Sarbide pribilegiatu iraunkorra gordetzen du, nortasun-kontrol batetik ere berriro igaro gabe. |
| Ez-arbuiatzea | Bai | Erregistroak manipulatu eta ezkutatzen ditu, beraz gertatutakoaren berreraikuntzak fidagarria izateari uzten dio. |

### Defentsa

- Abio segurua sinaduraren egiaztapenarekin eta konfiantzazko plataforma-moduluarekin, sinatu gabeko koderik karga ez dadin sistema baino lehen.
- Ekipotik kanpoko zaintza: kommutadorearen kontagailuak, suebakiaren erregistroak eta zerbitzari independente batera bidalitako telemetria.
- Erregistroak denbora errealean zentralizatzea, arriskuan dagoen ekipoak idatzi ere ezin duen eta ezabatu ezin duen sistema batera.
- Azterketa forentsea kanpoko eta konfiantzazko euskarri batetik, inoiz ez sistema susmagarriaren tresnekin.
- Berretsiz gero, birinstalazio osoa eta firmwarearen eguneratzea: nukleo-rootkit baten garbiketa selektiboak ez du inolako bermerik eskaintzen.

---

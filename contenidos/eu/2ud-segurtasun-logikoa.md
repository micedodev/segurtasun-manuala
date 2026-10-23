# 2UD · Segurtasun logikoa

> Eskalan bakarrik funtzionatzen duten bost teknika

Ideia bat partekatzen duten bost teknika: irismena biderkatzea. Kredentzial bat kontu bihurtzen da, kontu bat mila ekipo eta mila ekipo zerbitzuaren erorketa.

Bakoitzak beste gauza bat biderkatzen du: kontaktuak, ekipoak, segundoko saiakerak, aldi bereko eskaerak edo ikusi gabe irauten duten hilabeteak. Erasotzaileak ez du ekipoz ekipo lan egiten: milaka nodoko sareekin, ateratako milioika kredentzialen zerrendekin eta orduka alokatutako konputazio-ahalmenarekin dihardu.

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

Plataforma sozialen eta mezularitzaren bidez zabaltzen den kode maltzurra, arriskuan dauden kontuetatik: bektorea ez da zerbitzuaren akatsa, igorlearen eta hartzailearen arteko konfiantza baizik. Erreferentziazko kasu historikoa Koobface da (2008): Facebook eta MySpace bidez hedatu zen arriskuan jarritako kontuetatik bidalitako mezu tranpatiekin, eta ehunka mila ekipo banku-kredentzialak lapurtzera zuzendutako botnet bihurtu zituen.

### Nola funtzionatzen duen

1. Lehen kontua: berrerabilitako pasahitza edo esteka iruzurtia.
2. Kodeak hartutako kontuaren lagunak, taldeak eta elkarrizketak irakurtzen ditu.
3. Esteka duen mezu labur bat bidaltzen du, aurreko tonuan.
4. Estekak saio-hasiera berri bat edo osagarri bat instalatzea eskatzen du.
5. Kontu berri bakoitzak zikloa berrabiarazten du: hazkundea biderkatzailea da.

### Eraso-bektorea

- Mezularitza pribatua: mezua benetako kontaktu baten argazki eta izenarekin iristen da.
- Iruzkinak eta aipamenak: irismena kontaktuen zerrendatik harago zabaltzen dute.
- Baimen eskuordetudun hirugarrenen aplikazioak: pasahitza aldatuta ere baimena gordetzen dute.
- Biktima omen datorren bideoa ikusteko eskatzen diren erreproduzitzaile edo osagarri faltsuak.

### Adibide argigarria — Bidegorri Mugikortasuna

*Hiri mugikortasun partekatua · 2024*

2024ko maiatzean, Bidegorri Mugikortasunaren kontu korporatiboak mezu pribatuak bidaltzen ditu sare profesional batean: testu laburra euskaraz eta gaztelaniaz, sektoreko txosten bat dirudien esteka batekin.

Estekak saio-hasieraren erreplika zehatza irekitzen du. Kredentzialak idazten dituenak kontua uzten du, eta minututan mezu bera birbidaltzen du. Sei ordutan: ehun eta laurogeita hamar bidalketa hogeita hamaika kontutatik.

Ez du defentsa tekniko batek gelditzen, idazkerak baizik: arduradunak inoiz erabiltzen ez duen tratamendu formala. Telefono-dei batek abisua harra baino azkarrago zabaltzen du.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Hartutako kontuek elkarrizketa pribatuak eta kontaktu-zerrenda osoak agerian uzten dituzte. |
| Osotasuna | Bai | Erasotzaileak erakundearen izenean argitaratzen du eta haren komunikazioa aldatzen du. |
| Erabilgarritasuna | Ez | Zerbitzuak martxan jarraitzen du; euspenak bakarrik eteten du kontua. |
| Autentikazioa | Bai | Bidalketa bakoitza kontrol galduko kontu legitimo batetik irteten da. |
| Ez-arbuiatzea | Bai | Mezuak titularrak bidalita geratzen dira, eta honek ezin du ukatu. |

### Defentsa

- Bigarren faktorea kontu korporatibo guztietan, pertsonakako sarbidearekin, partekatutako pasahitzik gabe.
- Hirugarrenen aplikazioen hiruhileko berrikuspena: erabiltzen ez direnak baliogabetu.
- Barne araua: mezularitzako esteka batek ere ez darama saio-hasierara; helbidea idatziz sartzen da.
- Egiaztapen-kanal azkarra —dei bat, barne talde bat— ustekabeko mezu bakoitzerako.
- Erantzun dokumentatua: pasahitza aldatu, saioak itxi, baimenak baliogabetu eta publikoki abisatu.

---

## 2. Botnet

**Urruneko kontrolpeko gailu-sarea** · Larritasuna: Altua

> Milaka ekipo arrotz agindu bakar bati obeditzen.

### Definizioa

Operadore beraren urruneko kontrolpean aginduak modu koordinatuan exekutatzen dituzten ekipo kutsatuen multzoa. Ekipo bakoitzak bereizita ia ezer ez du ekartzen: balioa batuketan dago, eta jabeek normaltasunez erabiltzen jarraitzen dute.

### Nola funtzionatzen duen

1. Ekipoak agentea jasotzen du edozein bidetatik —troiarra, exploita edo fabrikako kredentziala— eta nodo bihurtzen da.
2. Agenteak agindu eta kontrola kontaktatzen du, algoritmo-dominioez edo sare deszentralizatuaz.
3. Nodoa geldirik geratzen da kontsumo minimoarekin, eta kanala tarte irregularretan galdekatzen du.
4. Agindua iristean, milaka nodok aldi berean jarduten dute: posta, kredentzialak, trafikoa edo malwarea.
5. Operadoreak agentea eguneratzen du, dominio blokeatuak ordezkatzen ditu eta ahalmena orduka alokatzen du.

### Eraso-bektorea

- Gauzen internetaren gailuak, fabrikako kredentzial agerikoekin: kamerak, grabagailuak eta etxeko routerrak.
- Troiarrak kutsatutako ekipoak: blokeatzen zailak diren egoitza-helbideak ekartzen dituzte.
- Adabakirik gabeko zerbitzariak, banda-zabalera simetrikoagatik baloratuak.
- Sarea hirugarrenei alokatzea: hainbat kanpaina azpiegitura beretik.

### Adibide argigarria — Mendizorrotz Telekomunikazioak

*Telekomunikazio operadorea · 2025*

2025eko otsailean, Mendizorrotz Telekomunikazioak eredu bitxi bat detektatzen du egoitza-sarean: eredu bereko lau mila eta zortziehun routerrek laurogeita hamar minuturo galdekatzen dute eguneko dominioa.

Ereduak kudeaketa-interfazea eta fabrikako kredentziala agerian uzten ditu. Ekipo bakoitzak segundoko kilobit bat baino gutxiago kontsumitzen du; inork ez du ezer nabaritu.

Sareak bost astez probatu zituen kredentzialak hirugarrenen atarien aurka, nodoko eta minutuko hiru saiakeratan. Atariak ez du iturri blokeagarririk ikusi: lau mila eta zortziehun helbide legitimo, ia erabiltzaile errealak bezala.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Operadoreak ekipoak eta haien trafikoa eskuratzen ditu, ahalmena bakarrik bilatu arren. |
| Osotasuna | Bai | Agenteak konfigurazioa aldatzen du irauteko, eta trafikoa ere alda dezake. |
| Erabilgarritasuna | Bai | Baliabide arrotzak kontsumitzen ditu eta kanpainen azken biktima kaltetzen du. |
| Autentikazioa | Bai | Sarrera fabrikako edo lapurtutako kredentzialekin gertatzen da, ekipoak baliozkotzat hartzen dituenak. |
| Ez-arbuiatzea | Bai | Erasoak bezero legitimoetatik abiatzen dira, eta hauek agertzen dira erantzule. |

### Defentsa

- Fabrikako kredentzialak nahitaez aldatu hornikuntzan, jatorrizko balioa gordetzeke.
- Administrazio-interfazeak Internetera itxita: kudeaketa operadorearen saretik bakarrik.
- Gailuen firmwarea automatikoki eguneratuta, egutegiarekin eta ondorengo egiaztapenarekin.
- Galdeketa anomaloak sarean bertan detektatu: bizitza laburreko dominioak edo giza jarduerarik gabeko konexio erregularrak.
- Irteerako iragazketa: bezero batek ere ezin du trafikoa bidali jatorria faltsututa.

---

## 3. Brute Force

**Indar gordinezko saiakera** · Larritasuna: Ertaina

> Asmakizunik gabe. Pazientziarekin eta zerrendekin.

### Definizioa

Kredentzial bat asmatzeko saiakera sistematikoa, konbinazioak probatuz asmatu arte. Praktikan ateratako pasahitzen hiztegiekin laburtzen da: milioika saiakera ondo aukeratutako ehun gutxi batzuk bihurtzen dira.

### Nola funtzionatzen duen

1. Helburua: autentikazioa agerian duen zerbitzu bat eta, ahal bada, baliozko erabiltzaile-zerrenda bat.
2. Estrategia: pasahitz ohikoenen hiztegia, erakundearen izen-aldaerak edo beste urraketetako kredentzialak.
3. Saiakerak jatorri askoren artean banatzen dira eta tartekatzen, blokeoa ez aktibatzeko.
4. Asmatzea erantzunean detektatzen da: kode, denbora edo testu desberdina.
5. Kredentziala gainerako zerbitzuetan probatzen da: berrerabileraren alde.

### Eraso-bektorea

- Urruneko sarbidea eta administrazio-panelak, saiakera-mugarik gabe argitaratuak.
- Pulberizazioa: pasahitz ohiko bakar bat ehunka erabiltzaileren aurka, konturik blokeatu gabe.
- Betetzea: aurreko ihesetako bikoteak bere horretan probatzea, zerbitzuen arteko berrerabileragatik.
- Lineaz kanpoko erasoa laburpen lapurtuen aurka: saiakera-mugarik gabe eta arrastorik gabe.

### Adibide argigarria — Landabe Kooperatiba

*Nekazaritzako elikagaiak · 2024*

2024ko irailean, Landabe Kooperatibaren hornitzaile-atariak huts gehiago erregistratzen ditu alarmarik gabe: jatorri bakoitzak saiakera bat berrogei minuturo, eta blokeoa bost saiakerarekin bost minututan.

Pasahitz sinesgarri bat probatzen du hirurehun erabiltzaileen aurka, askoren ordez baten aurka: kooperatibaren izena gehi urte korrontea. Lau kontuk horrelaxe zeukaten.

Lauetako batek hornitzaileen banku-datuak aldatzen zituen. Bederatzi egun konturik blokeatu gabe: inoiz ez bi huts jarraian kontu berean.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Kredentzial asmatu batek kontuaren informazio osora ematen du sarbidea. |
| Osotasuna | Bai | Erasotzaileak kontuaren idazte-baimenak osorik heredatzen ditu. |
| Erabilgarritasuna | Ez | Isilean sartzea bilatzen du; eraso trakets batek bakarrik blokeatzen ditu kontuak. |
| Autentikazioa | Bai | Kontrol zuzena erasotzen du: nortasuna gainditzen du sekreturik gabe. |
| Ez-arbuiatzea | Bai | Barruan, jarduera guztia titularraren izenean geratzen da erregistratuta. |

### Defentsa

- Bigarren faktorea: pasahitz asmatu bat ez da nahikoa.
- Atzerapen progresiboa huts bakoitzaren ondoren, blokeo finkoaren ordez: moteltzen du kontuak kanpo utzi gabe.
- Pasahitz berri bakoitza ateratako zerrenden aurka egiaztatu sortzean.
- Huts globalak zaindu zerbitzuka, ez kontuka bakarrik: pulberizazioa multzokatuan bakarrik ikusten da.
- Pasahitzak funtzio geldoekin eta gatzarekin gorde: lapurtutako fitxategiak ez du testu argirik ematen.

---

## 4. DDoS

**Zerbitzu-ukapen banatua (DDoS)** · Larritasuna: Altua

> Ez da inor sartzen ez delako. Jada inor ez delako kabitzen baizik.

### Definizioa

Helburuaren baliabide finitu bat agortzen duen erasoa —banda-zabalera, konexioak, prozesamendua edo memoria— erabiltzaile legitimoak artatu gabe uzteko. Banatua da trafikoa iturri askotatik datorrelako aldi berean: jatorri bat blokeatzeak ez du balio.

### Nola funtzionatzen duen

1. Agortu beharreko baliabidea: sareko lotura, suebakiaren konexio-taula, aplikazio-zerbitzaria edo datu-basea.
2. Ahalmena: botnet propio edo alokatua, gehi anplifikatzen duten zerbitzu gaizki konfiguratuak.
3. Jatorri faltsutuko eskaera txikiek erantzun askoz handiagoak eragiten dituzte biktimaren aurka.
4. Baliabidea betetzen da: zerbitzuak eskaerak errefusatu edo geldotasun onartezinarekin erantzuten du.
5. Biktimak teknika bat arintzen badu, operadoreak bektorez, atakaz edo ereduz aldatu eta jarraitzen du.

### Eraso-bektorea

- Bolumetrikoa: lotura asetzen du gaizki konfiguratutako DNS edo NTP zerbitzuez anplifikatuta.
- Protokolokoa: suebaki edo orekatzailearen taulak agortzen ditu erdi irekitako konexioekin.
- Aplikazio-geruzakoa: eskaera gutxi oso garestiak, datu-base osoa zeharkatzen duten bilaketak.
- Aurretiazko estortsioa: eraso-abisua ordainketa-eskaerarekin eta ahalmen-erakustaldi labur batekin.

### Adibide argigarria — Gorbeia Energia

*Energia merkaturatzailea · 2025*

2025eko azaroaren 14an, tarifa-aldaketa egun handienean, Gorbeia Energiaren atariak erantzuteari uzten dio. Lotura ez dago asetuta: trafikoa astelehen batekoa da.

Aplikazio-geruzako erasoa da: mila eta berrehun helbidek segundo gutxiro kontsultatzen dute konparatzailea, historiko osoa birkalkulatuz. Eskaera bakoitzak ia hiru segundoz okupatzen du prozesu bat.

Ehun eta hirurogei prozesurekin, segundoko hirurogei eskaera baino gutxiago nahikoa izan ziren ataria lau orduz ixteko. Suebakiak ez zuen ezer anomalorik ikusi: eskaera zuzenak baliozko saioetatik.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Ez | Ez du informaziorik ateratzen; gehienez paraleloko beste sarrera bat estaltzen du. |
| Osotasuna | Ez | Ez du daturik aldatzen: artatzeko ahalmenaren aurka dihardu, ez edukiaren aurka. |
| Erabilgarritasuna | Bai | Erasoaren helburu bakar eta aitortua da. |
| Autentikazioa | Ez | Ez du nortasun-kontrolik gainditzen; eskaera anonimoekin funtzionatzen du. |
| Ez-arbuiatzea | Ez | Ez du ekintza faltsurik egozten; arrastoak tarteko ekipo biktimetara darama. |

### Defentsa

- Lotura propioarena baino askoz ahalmen handiagoko arintze-zerbitzua, erasoa baino lehen kontratatuta.
- Muga jatorrika eta eragiketa garestika: orrialde bat eskatzea ez da kalkulu astun bat.
- Erabiltzailearekiko independenteak diren erantzunen cachea: ia ezer ez da aplikaziora iristen.
- Hondagarri diseinatzea: asetzean, funtzio garestiak itzali eta funtsezkoei eutsi.
- Hornitzailearekin entseatutako erantzuna: kontaktuak eta prozedura idatziz, sarerik gabe eskuragarri.

---

## 5. Rootkit

**Ezkutatze-tresneria** · Larritasuna: Kritikoa

> Ez du fitxategi bat ezkutatzen. Begiratzeko modua ezkutatzen du.

### Definizioa

Pribilegio handiekin instalatutako tresna multzoa, sarbideari eusteko eta bere presentzia eta beste osagai maltzur batzuena ezkutatzeko. Ez dakar eraso-gaitasun berririk: sistemak zer exekutatzen duen galdetuta erantzuten duena manipulatzen du.

### Nola funtzionatzen duen

1. Administrazio- edo nukleo-baimenak lortzen ditu tokiko exploit batez edo lapurtutako kredentzialez.
2. Aplikazioen eta sistemaren artean kokatzen da: deiak, funtzio-taulak edo nukleoko moduluak aldatzen ditu.
3. Prozesu, fitxategi edo konexioak eskatuta, benetako zerrenda itzultzen du bere elementurik gabe.
4. Bere fitxategiak eta abio-sarrerak zerrendatzea, aldatzea edo ezabatzea eragozten du.
5. Geruza horren azpian atzeko ateak, teklakatu-erregistratzaileak edo botnet agenteak bizi dira, sistemaren tresnentzat ikusezin.

### Eraso-bektorea

- Erabiltzaile-espazioan: liburutegiak ordezkatzen ditu; aldaera sinpleena eta detektatzen errazena.
- Nukleo-espazioan: modulu maltzur batek sistema eragileak ikusten duen guztia ikusi eta kontrolatzen du.
- Abio-kudeatzailean: sistema eragilea baino lehen exekutatzen da, eta hau haren kontrolpean jaiotzen da.
- Ekipoaren edo txartel baten firmwarean: diskoaren formateo osoari bizirik irauten dio.

### Adibide argigarria — Errekalde Kimika

*Industria kimikoa · 2023*

2023ko martxotik, Errekalde Kimikaren produkzio-zerbitzariak gauez urtebete lehenagokoaren halako hiru kontsumitzen du sarean, baina tokiko tresnek ez dute prozesurik ez konexiorik erakusten.

Dena zerbitzaritik bertatik egiaztatzen da, eta hortxe dago arazoa: nukleoko kontrolatzaile batek bere konexioak ezkutatzen ditu. Barrutik, makina garbi dago.

Kanpotik konpontzen da: kommutadoreak zerbitzariak aitortzen duena halako lau erregistratzen du irteeran. Disko kanpoko sistema batez aztertuta, kontrolatzailea agertzen da zazpi hilabetez aktibo zegoen exfiltrazio-agentearekin.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Bere geruzaren azpian informazio-lapurretako tresnak egonkor aritzen dira. |
| Osotasuna | Bai | Sistemaren osagaiak aldatzen ditu, eta hark jakinarazten duen guztiaren fidagarritasuna. |
| Erabilgarritasuna | Ez | Normaltasuna behar du: erorketa batek saihestu nahi duen azterketa eragingo luke. |
| Autentikazioa | Bai | Sarbide pribilegiatuari eusten dio, nortasun-kontrolik berriro igaro gabe. |
| Ez-arbuiatzea | Bai | Erregistroak manipulatzen ditu, eta gertatutakoaren berreraikuntza ez da fidagarria. |

### Defentsa

- Abio segurua sinadura-egiaztapenarekin eta plataforma-moduluarekin: sinatu gabeko koderik ez sistema baino lehen.
- Kanpoko zaintza: kommutadorearen kontagailuak, suebakiaren erregistroak eta zerbitzari independenterako telemetria.
- Erregistroak denbora errealean zentralizatu, arriskuko ekipoak idatzi eta ezabatu ezin duen sistema batera.
- Forentsea kanpoko euskarri fidagarri batetik, inoiz ez sistema susmagarriaren tresnekin.
- Berretsiz gero, birinstalazio osoa eta firmware-eguneratzea: nukleo-rootkit baten garbiketa selektiboak ez du bermerik.

---

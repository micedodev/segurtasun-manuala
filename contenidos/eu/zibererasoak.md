# Zibererasoak

> Kasu azterketak

Txantiloi berarekin aztertutako bi gertakari erreal: zerk huts egin zuen, zein ordenatan, zenbat kostatu zen eta zer aldatu zen ondoren.

---

## WannaCry (2017)

**Har batek adabakirik ez jartzeak zer kostatzen duen gogorarazi zuen eguna**

*Hedapen automatikoa duen ransomwarea*

### Testuingurua

2017ko martxoan, Microsoftek segurtasun-eguneratze bat argitaratzen du SMB fitxategiak partekatzeko protokoloaren lehen bertsioaren inplementazioan zegoen ahultasun baterako, erabileran zeuden ia Windows bertsio guztietan zegoena. Zuzenketa bi hilabeteko aurrerapenez geratzen da eskuragarri, gero etorriko zenaren aldean.

Apirilean, estatubatuar inteligentzia-agentzia batek garatutako eraso-tresna multzo bat publikoki filtratzen da. Haien artean ahultasun horretarako berorretarako ustiapen-kode fidagarri bat dago, aurretiazko autentikaziorik gabe aginduak exekutatzeko gai dena zerbitzua sarean eskuragarri duen edozein ekiporen aurka.

Ondoriozko egoerak gutxitan batera gertatzen diren hiru baldintza biltzen ditu: kredentzialik gabe ustia daitekeen ahultasun bat, zirkulazio librean dagoen kalitate profesionaleko exploit bat eta eguneratu gabeko ekipo parke izugarri bat, askok zerbitzu hori Interneterantz ere agerian zutela.

### Kronologia

| Data | Mugarria | Xehetasuna |
| --- | --- | --- |
| 2017ko martxoaren 14a | **Adabakia argitaratzen da** | Microsoftek ahultasuna zuzentzen du bere hileroko eguneratze-zikloan. Hura aplikatzea nahikoa izango zatekeen gero etorri zen guztia erabat eragozteko. |
| 2017ko apirilaren 14a | **Exploita filtratzen da** | Ustiapen-kodea barne hartzen duen tresna multzoa publiko egiten da. Agerian egoteko tarteak egun horretan bertan uzten dio teorikoa izateari. |
| Maiatzaren 12a, goizean | **Lehen kutsatzeak** | Zifratze masiboak detektatzen hasten dira Europan eta Asian. Harritzen duena ez da ransomwarea bera, sare bereko ekipoen artean bere kabuz hedatzen dela baizik. |
| Maiatzaren 12a, arratsaldean | **Irismen globala** | Ordu gutxitan hamarnaka herrialdetan daude gertakariak. Osasun zerbitzuek, telekomunikazio operadoreek eta fabrikatzaileek sistemak prebentzioz gelditzen dituzte. |
| Maiatzaren 12a, gauean | **Ustekabeko balazta** | Ikertzaile bat ohartzen da kodeak existitzen ez den dominio bat galdekatzen duela jardun aurretik, eta erregistratu egiten du. Galdeketa ebazten hasten da eta lagin gehienek zifratzea gelditzen dute. |
| Maiatzaren 15etik aurrera | **Aldaerak eta zenbaketa** | Egiaztapen hori gabeko bertsioak agertzen dira. Hedapenak ez du lehen egunaren eskala berriro lortzen, baina garbiketa eta berreraikuntza asteak luzatzen dira. |

### Bektore teknikoa

#### Autentikaziorik gabe ustia daitekeen ahultasuna

Akatsa fitxategiak partekatzeko protokoloaren eskaera jakin batzuen tratamenduan zegoen. Zerbitzua entzuten besterik ez zuen ekipo baten aurka aprobetxa zitekeen, erabiltzailerik eta pasahitzik gabe, eta horrek normalean erasotzaile bati ahalegin gehien eskatzen dion urratsa kentzen du.

#### Hedapen automatikoa

Pieza erabakigarria ohiko ransomware bat har modulu batekin konbinatzea izan zen. Kodeak tokiko sarea eta helbide publikoen tarteak zeharkatzen zituen zerbitzu ahularen ataka bilatuz, eta bere burua kopiatzen zuen erantzuten zuen ekipo bakoitzean. Lehenaren ondorengo biktima batek ere ez zuen ezertxo ere ireki behar izan.

#### Zifratzea eta erreskate-eskaera

Behin ekipoan, erabilera arrunteko dokumentuak zifratzen zituen eta kriptomonetan ordaintzea eskatzen zuen ohar bat erakusten zuen. Kobrantza-sistema landugabea zen eta ez zuen ordainketa bat biktima jakin batekin modu fidagarrian lotzeko aukerarik ematen, beraz ordaindu zutenetako askok ez zuten gakorik jaso.

#### Dominioaren egiaztapena

Zifratu aurretik, laginak dominio jakin bat galdekatzen zuen eta gelditu egiten zen erantzuna jasotzen bazuen. Ziurrenik azterketa automatizatuko inguruneetan ez aktibatzeko mekanismo bat zen, han dominio oro ebazten baita. Dominio hori erregistratzeak balazta global gisa jardun zuen, bere egileek aurreikusi ez zuten efektu batekin.

### Inpaktua zenbakitan

| Zifra | Kontzeptua |
| ---: | --- |
| **~200.000** | ekipo eragindakoak lehen olatuan |
| **150+** | herrialde gertakariak erregistratuta |
| **59** | egun adabakia eskuragarri egon zenetik erasora |
| **<24 h** | mundu mailako eskala lortzeko |

### Benetako irismena

Britainia Handiko osasun sektorea izan zen kasurik ikusgarriena: osasun zerbitzu publikoko hamarnaka erakundek hitzorduak bertan behera utzi zituzten, larrialdiak desbideratu zituzten eta aldi baterako paperezko prozeduretara itzuli ziren. Kaltea ez zen datuen galera izan, etenik onartzen ez duen jarduera baten etendura baizik.

Industrian, hainbat lantegik produkzio-lerroak gelditu zituzten. Arrazoia behin eta berriz errepikatu zen: barne sare lauak, non bulego bateko ekipoak eta kontrol-sistema batek segmentu bera partekatzen zuten inolako bereizketarik gabe.

Kostu ekonomikoa milaka milioi eurotan kalkulatu zen mundu mailan, ia dena geldialdi-denboran, berreraikuntza-ordutan eta galdutako jardueran, eta ez ordaindutako erreskateetan. Erasotzaileen bilketa, alderatuta, hutsala izan zen.

### Erantzuna

- Microsoftek salbuespen gisa eguneratzeak argitaratu zituen jada euskarritik kanpo zeuden Windows bertsioetarako; ohikoa ez den erabaki horrek eragindako parkearen neurria ematen du.
- Erakunde askok sare osoak deskonektatzea aukeratu zuten adabakiak jartzen zituzten bitartean, geldialdi kontrolatu bat onartuz kontrolik gabeko bat saihesteko.
- Protokoloaren lehen bertsioa lehenetsita desgaitzera pasatu zen sistemaren hurrengo edizioetan, eta bateragarritasunagatik aktibo jarraitzen zuen lekuetan kentzea gomendatu zen.
- Zerbitzu horren ataka perimetroan blokeatzea oinarrizko neurri gisa orokortu zen, gertakaria baino askoz lehenago araua izan behar zuena.

### Hiru ikasgai

#### 1. Agerian egoteko tartea erakundeak finkatzen du

Adabakiak berrogeita hemeretzi egun zeramatzan eskuragarri. Inpaktu osoa zuzenketaren argitalpenaren eta haren benetako aplikazioaren arteko distantzian gertatu zen, eta hori da, hain zuzen, biktimak erabat kontrolatzen duen aldagai bakarra.

#### 2. Sare lau batek gertakari bat hondamendi bihurtzen du

Hedapen automatikoa suntsitzailea da nora hedatu badago bakarrik. Erakunde segmentatuetan, kode berberak sail batera mugatutako gertakariak eragin zituen.

#### 3. Leheneratzeko gaitasuna da azken benetako defentsa

Egiaztatutako eta deskonektatutako kopiak zituenak orduak galdu zituen. Ez zituenak asteak galdu zituen eta, kasu askotan, datuak behin betiko: ordaintzeak ere ez baitzuen berreskuratzea bermatzen.

---

## Sony Pictures (2014)

**Helburua dirua ez denean, kaltea baizik**

*Ezabatzea eta filtrazioa dituen sarrera zuzendua*

### Testuingurua

2014ko azaroaren amaieran, Sony Pictures Entertainmenteko ekipoak Guardians of Peace izena hartzen zuen talde batek sinatutako irudi eta mezu bat erakutsiz esnatzen dira. Ez da ohiko erreskate-ohar bat: sistemetarako sarbidea dagoeneko galdu da eta korporazioko informazioaren zati handi bat besteren esku dago.

Gertakariak ohiko eredu ekonomikoa hausten du. Ez dago kaltearekiko proportzionala den ordainketa-eskaerarik ez negozio-eredurik atzean: exfiltrazio masiboa dago, datuen suntsipena eta astez aste presioari eusteko diseinatutako mailakako argitalpen-kanpaina bat.

Kasua estatu batentzat iraingarria zen argumentua zuen film baten estreinaldi hurbilarekin lotu zen publikoki, eta horrek ordura arte gutxitan agertutako dimentsio bat sartu zuen eztabaidan: enpresa pribatu bat motibazio politikoa duen operazio baten helburu bihurtuta.

### Kronologia

| Data | Mugarria | Xehetasuna |
| --- | --- | --- |
| Aurreko hilabeteak | **Sarbidea eta iraunkortasuna** | Erasotzaileek asteak zeramatzaten sarearen barruan, haren mapa egiten, kredentzial pribilegiatuak lortzen eta informazioa kopiatzen inolako alertarik aktibatu gabe. |
| 2014ko azaroaren 24a | **Agerpena** | Osagai suntsitzailea modu koordinatuan aktibatzen da. Ekipoek taldearen mezua erakusten dute eta erabilezin geratzen dira; konpainiak bere sarea deskonektatzen du eta eskuzko metodoekin lan egitera pasatzen da. |
| Azaroaren amaiera | **Lehen filtrazioak** | Oraindik estreinatu gabeko filmak eta barne dokumentuak argitaratzen dira. Zabalkundea nahita mailakatua da, egun gutxiro entrega berriekin. |
| 2014ko abendua | **Datu pertsonalak eta barne posta** | Nominak, ebaluazioak, mediku-datuak eta milaka langileren barne korrespondentzia agertzen dira. Kaltea korporatibotik pertsonalera lekualdatzen da. |
| 2014ko abendua | **Presioa estreinaldiaren gainean** | Aretoen aurkako mehatxuek zinema-kate batzuk filma kentzera daramatzate. Estreinaldia banaketa digitalera eta areto kopuru txiki batera bideratzen da azkenean. |
| 2015 | **Ondorio luzeak** | Eragindako langileen talde-demandak, zuzendarien irteerak eta konpainiaren azpiegitura teknologikoaren berreraikuntza osoa. |

### Bektore teknikoa

#### Hasierako sarbidea eta iraunkortasun luzea

Sarrera ez zen bat-batekoa izan. Erasotzaileek barruan iraun zuten erakundea ulertzeko, baliotsua zena non zegoen aurkitzeko eta administrazio-kredentzialak eskuratzeko adina denbora. Fase isil hori da edozein gertakari larriren azken irismena zehazten duena.

#### Aurretiazko exfiltrazio masiboa

Hamarnaka terabyteren ordenakoa kopiatu zen kanpora inork ezer nabaritu aurretik. Halako bolumen bat ez da gau batean mugitzen: asteetako transferentzia jarraitua eskatzen du, eta inor ez zegoen irteerako noranzkoa zaintzen.

#### Ezabatze malwarea

Osagai suntsitzaileak ez zuen zifratzen erreskate bat eskatzeko: abio-sektorea eta datuak gainidazten zituen berreskurapena eragozteko. Funtsezko aldea da ransomwarearekiko, negoziatzeko aukera oro errotik kentzen baitu.

#### Filtrazioa arma gisa

Mailakako argitalpenak lapurtutako informazioa etengabeko presio-tresna bihurtu zuen. Entrega bakoitzak mediatiko estaldura eta ospearen kaltea berritzen zituen, ezabatze soil batek inoiz lortuko ez zuen zerbait.

### Inpaktua zenbakitan

| Zifra | Kontzeptua |
| ---: | --- |
| **~100 TB** | informazio arriskuan jarrita |
| **~47.000** | pertsonaren datu pertsonalak agerian |
| **asteak** | detektatu gabeko aurretiazko iraunkortasuna |
| **~15 M$** | hiruhilekoan aitortutako kostu zuzena |

### Benetako irismena

Eragiketa-geldialdia erabatekoa izan zen egunetan. Postarik gabe, IP gaineko telefoniarik gabe eta nomina-sistemarik gabe, konpainia paperera, faxera eta aurrez aurreko bileretara itzuli zen; administrazio-prozesu batzuek hilabeteak behar izan zituzten normalizatzeko.

Barne korrespondentziaren filtrazioak teknikoa ez bezalako izaerako kaltea eragin zuen: pertsonei eta proiektuei buruzko iruzkin pribatuak, kontratu-baldintzak eta soldata-desorekak agerian geratu ziren, ibilbide profesionaletan eta merkataritza-harremanetan zuzeneko ondorioekin.

Milaka langilek eta langile ohik datu pertsonalak, medikoak eta ekonomikoak argitaratuta ikusi zituzten. Ondoren etorri ziren talde-demandek aurrekari argi bat ezarri zuten: erakundeak bere plantillaren aurrean erantzuten du informazio hori ez babesteagatik.

Estreinaldiaren hasierako kentzeak informatika-segurtasuna askogatik gainditzen zuen eztabaida bat ireki zuen: mehatxu batek zenbateraino baldintza ditzakeen enpresa eta kultura erabakiak.

### Erantzuna

- Korporazioko sarearen berehalako eta erabateko deskonexioa, eta ondoren azpiegituraren berreraikuntza zerotik, garbiketa selektiboa egin beharrean.
- Estatu Batuetako agintari federalen esku-hartzea, erasoa estatu bati publikoki egotzi baitzioten, orduan ezohikoa zen zerbait.
- Nortasuna zaintzeko zerbitzuak eragindako pertsonentzat eta akordio ekonomikoak ondorengo talde-demandetan.
- Kredentzial pribilegiatuen kudeaketaren, barne segmentazioaren eta posta elektronikoa gordetzeko politikaren berrikuspen sakona.

### Hiru ikasgai

#### 1. Gordetzen dena da filtra daitekeena

Ospearen kaltearen zati handi bat gordeta jarraitzeko inolako arrazoi operatiborik ez zuen urte askotako postatik etorri zen. Borratze eraginkorra duen gordetze-politika batek urraketa baten inpaktua murrizten du urraketa bera existitu aurretik.

#### 2. Irteera sarrera bezainbeste zaindu behar da

Hamarnaka terabyte atera ziren asteetan zehar alerta bakar bat sortu gabe. Zaintza nor sartzen zen begira zegoen, eta ez zenbat informazio irteten zen, eta hortxe erabakitzen da exfiltrazio baten larritasuna.

#### 3. Erasotzaile guztiek ez dute kobratu nahi

Helburua kaltea eta ez irabazia duen aurkari baten aurrean, estortsiorako pentsatutako defentsek ez dute balio: ez dago negoziatzeko erreskaterik ez erosteko gakorik. Prebentzioa, segmentazioa eta berreraikitzeko gaitasuna besterik ez da geratzen.

---

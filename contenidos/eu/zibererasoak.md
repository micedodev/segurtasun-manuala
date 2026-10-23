# Zibererasoak

> Kasu azterketak

Txantiloi berarekin aztertutako bi gertakari erreal: zerk huts egin zuen, zein ordenatan, zenbat kostatu zen eta zer aldatu zen ondoren.

---

## WannaCry (2017)

**Har batek adabakirik ez jartzeak zer kostatzen duen gogorarazi zuen eguna**

*Hedapen automatikoa duen ransomwarea*

### Testuingurua

2017ko martxoan, Microsoftek eguneratze bat argitaratzen du SMBren lehen bertsiorako, ia Windows guztietan zegoena. Erasoa baino bi hilabete lehenago geratu zen eskuragarri.

Apirilean, estatubatuar inteligentzia-agentzia baten eraso-tresna multzo bat filtratzen da. Ahultasun horretarako exploit fidagarria dakar: kodea exekutatzen du autentikaziorik gabe, zerbitzua sarean duen edozein ekiporen aurka.

Hiru baldintza arraro batera gertatu ziren: kredentzialik gabe ustia daitekeen akatsa, zirkulazio libreko exploit profesionala eta eguneratu gabeko parke izugarria, zerbitzua Internetera ere agerian zuena.

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

Akatsak SMB eskaera jakin batzuk gaizki tratatzen zituen. Zerbitzua entzuten egotea nahikoa zen, erabiltzailerik eta pasahitzik gabe. Erasotzailearen urratsik garestiena desagertzen da.

#### Hedapen automatikoa

Ohiko ransomware bat har moduluarekin konbinatu zuen. Tokiko sarea eta tarte publikoak zeharkatzen zituen ataka ahula bilatuz, eta bere burua kopiatzen zuen erantzun bakoitzean. Lehen biktimaren ondoren, inork ez zuen ezer ireki behar.

#### Zifratzea eta erreskate-eskaera

Erabilera arrunteko dokumentuak zifratzen zituen eta kriptomonetan ordainketa eskatzen zuen. Kobrantzak ez zuen ordainketa eta biktima lotzen, eta ordaindu askok ez zuten gakorik jaso.

#### Dominioaren egiaztapena

Zifratu aurretik dominio bat galdekatzen zuen eta gelditzen zen ebazten bazuen. Azterketa automatizatuko ihesbide bat zen, han denak ebazten baitu. Erregistratzeak aurreikusi gabeko balazta globala eragin zuen.

### Inpaktua zenbakitan

| Zifra | Kontzeptua |
| ---: | --- |
| **~200.000** | ekipo eragindakoak lehen olatuan |
| **150+** | herrialde gertakariak erregistratuta |
| **59** | egun adabakia eskuragarri egon zenetik erasora |
| **<24 h** | mundu mailako eskala lortzeko |

### Benetako irismena

Britainia Handiko osasun sektorea izan zen ikusgarriena: hamarnaka erakundek hitzorduak bertan behera utzi, larrialdiak desbideratu eta paperezko prozeduretara itzuli ziren. Kaltea etendura izan zen, ez galera.

Industrian, lantegiek lerroak gelditu zituzten. Arrazoia errepikatu zen: sare lauak, bulegoko ekipoa eta kontrol-sistema bereizketarik gabe segmentu berean.

Kostua milaka milioi eurotan kalkulatu zen mundu mailan, ia dena geldialdi eta berreraikuntzan, ez erreskateetan. Erasotzaileen bilketa hutsala izan zen.

### Erantzuna

- Microsoftek euskarritik kanpoko bertsioak eguneratu zituen, salbuespeneko neurria parke eragindakoa erakusten duena.
- Erakunde askok sareak deskonektatu eta adabakiak jarri zituzten, geldialdi kontrolatuarekin.
- Protokoloaren lehen bertsioa lehenetsita desgaitzen da eta kentzea gomendatzen da.
- Ataka hori perimetroan blokeatzea oinarrizko arau bihurtu zen, beranduegi.

### Hiru ikasgai

#### 1. Agerian egoteko tartea erakundeak finkatzen du

Adabakiak berrogeita hemeretzi egun zeramatzan eskuragarri. Inpaktu osoa argitalpenaren eta aplikazioaren arteko distantzian gertatu zen, biktimak erabat kontrolatzen duen aldagai bakarrean.

#### 2. Sare lau batek gertakari bat hondamendi bihurtzen du

Hedapenak nora hedatu badu bakarrik suntsitzen du. Sare segmentatuetan, kode berak sail batean gelditu zen.

#### 3. Leheneratzeko gaitasuna da azken benetako defentsa

Egiaztatutako eta deskonektatutako kopiak zituenak orduak galdu zituen. Ez zituenak asteak eta, askotan, datuak: ordainketak ez zuen berreskuratzea bermatzen.

---

## Sony Pictures (2014)

**Helburua dirua ez denean, kaltea baizik**

*Ezabatzea eta filtrazioa dituen sarrera zuzendua*

### Testuingurua

2014ko azaroaren amaieran, Sony Pictures Entertainmenteko ekipoak Guardians of Peace taldearen irudi eta mezuarekin esnatzen dira. Ez da erreskate-oharra: sarbidea galdua da eta informazioaren zati handi bat besteren esku dago.

Ez dago ordainketa-eskaera proportzionalik ez negozio-eredurik: exfiltrazio masiboa dago, suntsipena eta astez presioari eusteko mailakako argitalpenak.

Kasua estatu batentzat iraingarria zen film baten estreinaldiarekin lotu zen. Enpresa pribatu bat motibazio politikodun operazio baten helburu bihurtu zen.

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

Erasotzaileek barruan iraun zuten erakundea ulertzeko, baliotsua non zegoen aurkitzeko eta administrazio-kredentzialak hartzeko. Fase isil horrek finkatzen du gertakari larriren azken irismena.

#### Aurretiazko exfiltrazio masiboa

Hamarnaka terabyte kopiatu ziren inork nabaritu aurretik. Bolumen horrek asteetako transferentzia eskatzen du, inork irteeran zaintzen ez zuena.

#### Ezabatze malwarea

Ez zuen zifratzen erreskatea eskatzeko: abio-sektorea eta datuak gainidazten zituen berreskurapena galarazteko. Horrek negoziatzeko aukera oro kentzen du.

#### Filtrazioa arma gisa

Mailakako argitalpenak lapurtutakoa etengabeko presio bihurtu zuen. Entrega bakoitzak estaldura eta ospe-kaltea berritzen zituen.

### Inpaktua zenbakitan

| Zifra | Kontzeptua |
| ---: | --- |
| **~100 TB** | informazio arriskuan jarrita |
| **~47.000** | pertsonaren datu pertsonalak agerian |
| **asteak** | detektatu gabeko aurretiazko iraunkortasuna |
| **~15 M$** | hiruhilekoan aitortutako kostu zuzena |

### Benetako irismena

Geldialdia erabatekoa izan zen egunetan. Postarik, IP telefoniarik eta nomina-sistemarik gabe, paperera, faxera eta aurrez aurreko bileretara itzuli zen; prozesu batzuek hilabeteak behar izan zituzten.

Barne postaren filtrazioak kalte ez-teknikoa eragin zuen: iruzkin pribatuak, kontratuak eta soldata-desorekak agerian, ibilbide eta harremanetan ondorio zuzenekin.

Milaka langilek datu pertsonalak, medikoak eta ekonomikoak argitaratuta ikusi zituzten. Talde-demandek aurrekaria ezarri zuten: erakundeak plantillaren aurrean erantzuten du.

Estreinaldia kentzeak segurtasuna gainditzen zuen eztabaida ireki zuen: zenbateraino baldintzatzen duen mehatxu batek enpresa eta kultura erabakiak.

### Erantzuna

- Sarearen deskonexio osoa eta berreraikuntza zerotik, garbiketa selektiboaren ordez.
- AEBko agintarien atribuzio publikoa estatu bati, orduan ezohikoa.
- Nortasun-zaintza eragindakoentzat eta akordioak talde-demandetan.
- Kredentzial pribilegiatuen, segmentazioaren eta posta-gordetzearen berrikuspen sakona.

### Hiru ikasgai

#### 1. Gordetzen dena da filtra daitekeena

Ospe-kaltearen zati handi bat gordetzeko arrazoirik gabeko urteetako postatik etorri zen. Borratze eraginkorrak urraketaren inpaktua murrizten du aldez aurretik.

#### 2. Irteera sarrera bezainbeste zaindu behar da

Hamarnaka terabyte atera ziren asteetan alerta bakar gabe. Zaintzak sarrera begiratzen zuen, ez irteerako bolumena: hortxe erabakitzen da larritasuna.

#### 3. Erasotzaile guztiek ez dute kobratu nahi

Kaltea eta ez irabazia bilatzen duen aurkariaren aurrean, estortsio-defentsek ez dute balio: ez dago erreskaterik ez gakorik. Prebentzioa, segmentazioa eta berreraikuntza besterik ez.

---

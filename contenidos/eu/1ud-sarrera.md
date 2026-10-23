# 1UD · Segurtasunaren sarrera

> Ia inoiz bakarka agertzen ez diren zortzi mehatxu

Ia gertakari erreal orotan konbinatuta agertzen diren zortzi mehatxu: defendatu aurretik jakin behar da bakoitzak zer bilatzen duen eta nondik sartzen den.

Unitate honek kate gisa jasotzen ditu: pieza bakoitzak hurrengoari prestatzen dio bidea. Lehen laurek sarbidea nola lortzen den azaltzen dute; azken laurek, behin barruan zer egiten den harekin. Posta batek kredentzial bat ematen du, eta kredentzial hori ransomwarean amaitzen da aste batzuk geroago.

**Ideia nagusia:** Batak ere ez du akats ikusgarririk behar: nahikoa da berrerabilitako kredentzial bat, jarri gabeko adabaki bat edo presaka hartutako erabaki bat.

---

### Unitate honetan

1. [Phishing](#1-phishinga) — Pertsona erasotzen da, ez sistema.
2. [Man-in-the-Middle (MITM)](#2-erdiko-gizonaren-erasoa) — Bi aldek elkarrekin hitz egiten dutela uste dute. Erasotzailearekin ari dira.
3. [Trojan](#3-troiarra) — Erabiltzaileak instalatu nahi duelako instalatzen da.
4. [Backdoor](#4-atzeko-atea) — Arazoa ez da nola sartu zen. Berriz itzul daitekeela da.
5. [Spyware](#5-spywarea) — Ez du ezer hausten. Begiratu besterik ez du egiten.
6. [Stealer](#6-stealerra) — Sartu, dena eraman eta segundotan desagertu.
7. [Ransomware](#7-ransomwarea) — Datuak hor daude oraindik. Baina jada ez dira zureak.
8. [Exploit](#8-exploita) — Sarraila zehatz baten giltza zehatza.

---

## 1. Phishing

**Beita bidezko nortasun-ordezkapena** · Larritasuna: Altua

> Pertsona erasotzen da, ez sistema.

### Definizioa

Konfiantzazko erakunde baten itxura hartzea, biktimak kredentzialak, datuak edo dirua eman ditzan, edo fitxategi bat exekuta dezan. Ez du softwarea ustiatzen: presa, hierarkia eta ohitura baizik.

### Nola funtzionatzen duen

1. Azterketa: izenak, karguak, hornitzaileak eta postaren formatua, iturri publikoetatik bilduta.
2. Beita: zerbitzu legitimoaren klona, antzeko dominio batean, letra bat aldatuta edo goi-mailako domeinu desberdinarekin.
3. Bidalketa: posta, SMS edo mezularitza, egiaztatzea eragozten duen presazko aitzakiarekin.
4. Harrapaketa: biktimak kredentzialak tekleatzen ditu formulario faltsuan; honek birbidali eta benetako gunera birbideratzen du.
5. Berehalako erabilera: kredentzialak minutu gutxitan ustiatzen dira, askotan automatikoki.

### Eraso-bektorea

- Esteka edo eranskina duen posta: alde handiz kanal nagusia.
- SMSa eta mezularitza, non helbidea laburtuta datorren eta ezin den sakatu aurretik aztertu.
- Laguntzazko deia, minutu batzuk lehenagoko mezuari sinesgarritasuna ematen diona.
- Papereko edo dokumentuetako QR kodeak, atariko esteken analisia saihesten dutenak.

### Adibide argigarria — Nerbioi Logistika, S. L.

*Garraioa eta banaketa · 2024*

2024ko martxoan, administrazio sailak telefonia-operadorearen posta bat jasotzen du: ordaindu gabeko faktura bat, benetakoaren berdina den atari baterako estekarekin, sei ordu lehenago erregistratutako nerbioi-facturacion.net dominioan.

Ordainketen arduradunak kredentzialak sartzen ditu. Formularioak formatua balioztatzen du, datuak erasotzaileari birbidaltzen dizkio eta benetako atarira birbideratzen du, saioa itxita; iraungi dela pentsatzen du eta ez du abisatzen.

Hogei minutu geroago, kredentzial horiek kanpotik sartzen dira postara. Erasotzaileak birbidalketa-arau bat sortzen du eta hamaika egunez irakurtzen du hornitzaileekiko korrespondentzia, benetako faktura baten kontua aldatu arte.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Kredentzialek posta eta nortasun horren zerbitzu guztiak irekitzen dituzte. |
| Osotasuna | Bai | Kontua hartuta, arauak, dokumentuak eta banku-datuak aldatzen ditu. |
| Erabilgarritasuna | Ez | Zerbitzuak martxan jarraitzen du: arreta ez erakartzea komeni zaio. |
| Autentikazioa | Bai | Sistemak baliozko kredentzialak dakartzana onartzen du, jabea ez bada ere. |
| Ez-arbuiatzea | Bai | Dena biktimaren izenean geratzen da erregistratuta, eta honek ez du kontrakoa frogatzeko modurik. |

### Defentsa

- Phishingaren aurkako bigarren faktorea (FIDO2 gakoak, passkeyak): domeinu legitimoari lotua, ez da birbideratzen.
- SPF, DKIM eta DMARC, ukatze-politikarekin, domeinu propioan.
- Abisu bisuala kanpoko mezu orotan, eta koarentena erregistratu berriko domeinuentzat.
- Banku-aldaketa oro bandaz kanpo egiaztatzea, dagoeneko ezaguna den zenbaki batean.
- Aldian behingo simulazioak prestatzeko, ez zigortzeko: garrantzitsuena azkar abisatzea da.

---

## 2. Man-in-the-Middle (MITM)

**Komunikazio-bitartekaritza** · Larritasuna: Altua

> Bi aldek elkarrekin hitz egiten dutela uste dute. Erasotzailearekin ari dira.

### Definizioa

Hirugarren bat komunikazio baten bidean sartu eta hura birbidaltzen du, irakurriz edo aldatuz, inork nabaritu gabe. Biktimak espero zuen zerbitzua jasotzen du, baina erasotzailearen bidez.

### Nola funtzionatzen duen

1. Kokatzea: izen bikia duen sarbide-puntua edo segmentuan ARP taula pozoitua.
2. Atzematea: trafiko guztia erasotzailearen ekipolitik igarotzen da benetako helmugara iritsi aurretik.
3. Ahultzea: HTTP argitan irakurtzen da; HTTPSn testu laua behartzen da edo ziurtagiri propioa aurkezten da.
4. Birbidaltzea: eskaera eta erantzuna birbidaltzen ditu, denak normala dirudien.
5. Ustiatzea: cookieak, kredentzialak edo kontuak lapurtzen ditu, eta edukia bidean alda dezake.

### Eraso-bektorea

- Sare irekiak edo pasahitz partekatukoak, non edonork argitaratzen duen sare biki bat.
- Tokiko sareko ARP pozoitzea, trafikoa erasotzailearengana desbideratzen duena.
- Ordezkatutako DNS edo DHCP, kontrolpeko atebidea ematen duena.
- Eguneratu gabeko routerrak, bitartekari iraunkor eta isil bihurtuak.

### Adibide argigarria — Itsasargi Aholkularitza

*Ingeniaritza aholkularitza · 2025*

2025eko iraileko kongresu batean, aholkulari batek eramangarria Kongresua_Wifi_Librea sare irekira konektatzen du, lehen ilarako seinale onenekora; legitimoa KongresuaWiFi zen.

Dokumentu-kudeatzailea irekitzean, agintaritza ezezagunaren ziurtagiria jasotzen du. Nabigatzaileak abisatzen du; proiektatzeko presaka, onartu egiten du.

Erasotzaileak saioko cookiea harrapatu eta, pasahitzik gabe, lehian zeuden hiru proiekturen planoak deskargatzen ditu arratsalde horretan.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Zifratu gabeko trafikoa —eta inposatutako ziurtagiriaz zifratutakoa— irakurgarri geratzen da. |
| Osotasuna | Bai | Erantzunak alda ditzake: kontu bat aldatu edo edukia txertatu. |
| Erabilgarritasuna | Ez | Konexioa eteteak salatuko luke erasoa; denak normala dirudi behar du. |
| Autentikazioa | Bai | Biktima erasotzailearen aurrean autentikatzen da, zerbitzaria dela uste duelarik. |
| Ez-arbuiatzea | Bai | Eskaerak biktimaren baliozko saioarekin iristen dira, suposatutako egilearekin. |

### Defentsa

- HTTPS HSTSrekin eta aurrekargarekin: nabigatzaileak zifratu gabeko bertsioa ukatzen du, hala adierazita ere.
- Korporazioko VPNa beti aktibo bulegotik kanpo.
- Ziurtagiri-abisuen aurrean jarraitzea politikaz blokeatzea kudeatutako ekipoetan.
- ARP ikuskapen dinamikoa eta DHCP snooping barne kommutadoreetan.
- Saio laburrak eta Secure, HttpOnly eta SameSite cookieak.

---

## 3. Trojan

**Zaldi troiarra** · Larritasuna: Altua

> Erabiltzaileak instalatu nahi duelako instalatzen da.

### Definizioa

Itxuraz baliagarria den programa, karga maltzur ezkutua daramana. Ez da bere kabuz hedatzen: norbaitek exekutatu behar du, eta bere ingeniaritza guztia erabaki horren bila dabil.

### Nola funtzionatzen duen

1. Paketatzea: kode maltzurra agintzen duena betetzen duen programa errealarekin bidaiatzen du.
2. Banaketa: deskargak, eranskinak edo web ofiziala imitatzen duten iragarkiak.
3. Exekuzioa: biktimak instalatu eta administratzaile-baimenak ematen ditu susmorik gabe.
4. Iraunkortasuna: Deskargetatik kanpo kopiatu eta abioan erregistratzen da izen sinesgarriarekin.
5. Aktibazioa: agindu eta kontrol zerbitzariarekin harremanetan jartzen da, edo espioitza, lapurreta edo urruneko sarbidea zabaltzen du.

### Eraso-bektorea

- Biltegi ez-ofizialetako instalatzaile doako edo eramangarriak.
- Benetako emaitzaren gaineko iragarkiak, fabrikatzailearen web klonatu batera daramatenak.
- Makrodun dokumentuak: fitxategia benetakoa da, makroa karga.
- Arriskuan dauden webetako nabigatzaile- edo irakurgailu-eguneratze faltsuak.

### Adibide argigarria — Goierri Elektronika

*Osagaien fabrikazioa · 2023*

2023ko azaroan, teknikari batek planoak formatuz aldatzeko tresna behar du eta lehen emaitza deskargatzen du: goierri-cadtools.com helbiderako iragarki bat, fabrikatzailearen webgunearen kopia.

Tresnak funtzionatzen du eta astez erabiltzen da gorabeherarik gabe. Harekin bigarren exekutagarri bat instalatu zen, eguneratze-zerbitzu izenarekin programatutako zeregin gisa.

Hemezortzi egun isilik eman ondoren, 443 atakako irteerako konexioa irekitzen du, web trafikotik bereizi ezina. Zeregin programatuak aztertzean bakarrik detektatzen da, produktu instalaturik gabeko sarrera bat agertzean.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Erabiltzailearen baimenekin dabil eta hark iristen duen guztira iristen da. |
| Osotasuna | Bai | Fitxategiak, konfigurazioa eta programak aldatzen ditu mugarik gabe. |
| Erabilgarritasuna | Ez | Ez du errendimendua hondatzen: arretak bere bizitza laburtuko luke. |
| Autentikazioa | Bai | Autentikatutako saioaren nortasuna heredatzen du, kredentzialik gabe. |
| Ez-arbuiatzea | Bai | Erregistroek erabiltzaileari egozten dizkiote agindu ez zituen ekintzak. |

### Defentsa

- Korporazioko biltegitik edo web ofizialetik bakarrik instalatzea, sinadura egiaztatuta.
- Eguneroko kontuetan tokiko administratzaile-baimenik ez.
- Baimendutako aplikazioen zerrenda ekipo kritikoetan.
- Interneteko makroak lehenetsita blokeatuta, klik bidez gaitzeko aukerarik gabe.
- Abioaren aldizkako azterketa: zereginak, zerbitzuak eta autoexekuzio-gakoak.

---

## 4. Backdoor

**Sarbide ezkutua** · Larritasuna: Kritikoa

> Arazoa ez da nola sartu zen. Berriz itzul daitekeela da.

### Definizioa

Aurreikusitako autentikazioa saihesten duen sarbidea: aurreko arrisku baten aztarna edo fabrikatzailearen bidea. Bere balioa ez da sartzea, itzultzea baizik.

### Nola funtzionatzen duen

1. Hasierako sarbidea edozein bidetatik: troiarra, lapurtutako kredentziala edo ahultasuna.
2. Itzulera-mekanismoa: gehitutako kontua, gako publikoa, ezkutuko zerbitzua edo irteerako konexiodun zeregina.
3. Kamuflajea: izen sinesgarria elementu legitimoen artean, inork bi aldiz begiratzen ez duen lekuan.
4. Egiaztatzea: erasotzaileak bidea frogatzen du, sarrera-tresnarik gabe jada.
5. Geroko erabilera: hilabetez lo egin dezake, itzultzea interesatu arte.

### Eraso-bektorea

- Zerbitzu-kontuetan gehitutako SSH gakoak.
- Legitimo baten ia izen bereko kontu berriak.
- Baimen gaizkiko web direktorio batera igotako webshella.
- Fabrikatzailearen lehenetsitako kredentzialak, inoiz aldatu gabeak.
- Aldizkako alderantzizko konexioa, sarrerako atakarik ireki gabe.

### Adibide argigarria — Harrigain Ingeniaritza

*Ingeniaritza zibila · 2024*

2024ko ekainean, sistemen taldeak troiar bat detektatzen du fitxategi-zerbitzari batean, ezabatu eta gertakaria ixten du. Ondorengo azterketak garbi ateratzen dira.

Bost hilabete geroago, auditoria batek bigarren gako publiko bat aurkitzen du babeskopien kontuan, garbiketa baino lau egun lehenago kanpotarren batek gehitua.

Bi daten artean hamaika sarrera izan ziren, alerta bakar bat gabe: kontu legitimoa, ohiko ataka eta kopien ordutegia.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Sarbideak sistemaren datuen gaineko benetako pribilegioak erabiltzen ditu. |
| Osotasuna | Bai | Nahi duenean itzultzen denak auditoria-erregistroak ere alda ditzake. |
| Erabilgarritasuna | Ez | Zutik behar du zerbitzua, baliagarria izaten jarraitzeko. |
| Autentikazioa | Bai | Definizioz sartzen da autentikazio-kontrola gainditu gabe. |
| Ez-arbuiatzea | Bai | Trazabilitateak parte hartu ez zuen erabiltzailea seinalatzen du. |

### Defentsa

- Arrisku baten ondoren, kontuak, gakoak, zereginak eta zerbitzuak aztertzea ekipoa itzuli aurretik.
- Irudi ezagunetik berreraikitzea, garbitu beharrean, bideragarria denean.
- Kontu eta gakoen inbentarioa, erregistratu gabeko alten alerta automatikoarekin.
- Irteerako trafikoa zaintzea: alderantzizko konexioa kanpora begiratuta bakarrik ikusten da.
- Alta orotan lehenetsitako kredentzial guztiak aldatzea.

---

## 5. Spyware

**Espioitza-programa** · Larritasuna: Ertaina

> Ez du ezer hausten. Begiratu besterik ez du egiten.

### Definizioa

Sistemaren edo erabiltzailearen jarduera bildu eta hirugarren bati baimenik gabe helarazten dion softwarea: nabigazio-ohituretatik teklakatuetara eta pantaila-kapturetara.

### Nola funtzionatzen duen

1. Instalazioa: beste programa baten gehigarria, nabigatzaile-luzapena edo troiarra.
2. Bilketa: behatutakoa erregistratzen du, bisitatutako webetatik teklakatuetara eta pantailetara.
3. Biltegiratzea: datuak zifratuta metatzen ditu, azaleko azterketa gainditzeko.
4. Exfiltrazioa: sortaka bidaltzen ditu, HTTPS edo DNS bidez, trafiko normalarekin nahastuta.
5. Iraunkortasuna: eguneratu eta abioan irauten du; helburua irautea da, ez jardutea.

### Eraso-bektorea

- Orrialde guztiak irakurri eta aldatzen dituzten luzapenak.
- Aukera aurre-markatuekin onartutako osagaiak dakartzaten doako programak.
- Funtziorako neurriz kanpoko baimenak eskatzen dituzten mugikor-aplikazioak.
- Sarbide fisikoarekin instalatzea, pertsona jakinaren zaintzan.

### Adibide argigarria — Ortzadar Hezkuntza

*Arautua den prestakuntza · 2025*

2025eko urtarrilean, koordinatzaile akademikoak matrikula-plataforman ortografia zuzentzen duen luzapen bat instalatzen du. Funtzionatzen du eta balorazio onak ditu.

Gune guztiak irakurri eta aldatzea eskatzen du, zuzentzaile batean normala, eta ezer ez da nabarmentzen. Hiru aste geroago, eguneratze batek formularioak bidali aurretik kopiatzen dituen modulua gehitzen du.

Bi hilabetez, matrikulatuen datuak eskaera legitimoekin batera ateratzen dira luzapenaren fabrikatzailearen domeinura, saio bakoitzeko kilobyte gutxitan, alerten atalasetik oso azpitik.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Hori da programaren helburua: ez dagokion informazioa ateratzea. |
| Osotasuna | Ez | Behatzaile tipikoak ez ditu datuak aldatzen: salatuko luke. |
| Erabilgarritasuna | Ez | Baliabide gutxi kontsumitzen du eta ez da nabaritzen. |
| Autentikazioa | Bai | Teklakatuen erregistroak kredentzialak harrapatzen ditu, eta haiekin nortasuna. |
| Ez-arbuiatzea | Ez | Ez du ekintza egozgarirrik sortzen; arriskua kredentzialak erabiltzean dator. |

### Defentsa

- Onartutako luzapenen katalogo itxia; gainerakoak politikaz blokeatuta.
- Baimenak eguneratze orotan berrikustea, ez instalazioan bakarrik.
- Irteerako trafiko txiki eta etengabea zaintzea, helburuaren eta erregulartasunaren arabera.
- Diskoaren zifratzea eta saio-blokeo automatikoa, sarbide fisiko laburraren aurka.
- Instalatutako softwarea onartutako inbentarioarekin alderatzea.

---

## 6. Stealer

**Kredentzial-lapurra** · Larritasuna: Altua

> Sartu, dena eraman eta segundotan desagertu.

### Definizioa

Ekipoaren sekretuak —pasahitzak, cookieak, tokenak eta konfigurazioak— aurkitu eta eragiketa bakarrean bidaltzen dituen malwarea. Ez du geratu nahi: exekuzio azkar bakarra.

### Nola funtzionatzen duen

1. Exekuzio bakarra: troiar gisa iritsi eta behin abiarazten da, erabiltzailearen baimenekin.
2. Inbentarioa: nabigatzaileen, postaren, FTPren eta mezularitzaren bide ezagunak zeharkatzen ditu.
3. Deszifratzea: saiotik eskuragarri dauden sistemaren gakoekin irekitzen ditu pasahitzak.
4. Paketatzea: harrapakina konprimitzen du, metadatuekin eta pantaila-kapturarekin.
5. Bidaltzea eta ezabatzea: paketea igorri eta sarritan diskotik ezabatzen da.

### Eraso-bektorea

- Ordainpeko programen bertsio aldatu gisa banatutako exekutagarriak.
- Pasahitz babestudun konprimituak, atariak aztertu ezin dituenak.
- Liburutegi legitimoen ia izen bereko paketeak kode-biltegietan.
- Doako tresna eskaintzen duten bideo eta tutorialetako deskarga-estekak.

### Adibide argigarria — Zubiarte Finantza

*Finantza aholkularitza · 2025*

2025eko apirilean, praktiketako pertsona batek pasahitz babestudun konprimitu bat deskargatzen du, balantze-txantiloia omen daramana; pasahitza mezuaren gorputzean dator, eta atariak ezin du ireki.

Exekutagarria lau segundo baino gutxiagotan amaitzen da: bi nabigatzaileak zeharkatu, gordetako ehun eta hamalau pasahitz deszifratu eta saio aktiboen cookieak kopiatu ditu, dokumentu-kudeatzailearena barne.

Paketea HTTPS bidez ateratzen da biltegiratze legitimo batera, blokeo-zerrendatik kanpo. Enpresak bederatzi egun geroago detektatzen du sarbide anomaloa; cookieak hiru helbidetatik erabili dira dagoeneko.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Gainerako sistemak irekitzen dituzten sekretuak blokean ateratzen ditu. |
| Osotasuna | Ez | Ez du ekipoa ukitzen; kaltea gero eta beste leku batean gertatzen da. |
| Erabilgarritasuna | Ez | Hain da laburra exekuzioa, non erabiltzaileak ez duen ezer nabaritzen. |
| Autentikazioa | Bai | Lapurtutako cookieek pasahitzik eta bigarren faktorerek gabe ematen dute sarbidea. |
| Ez-arbuiatzea | Bai | Saio horiekin egiten den guztia biktimaren izenean erregistratzen da. |

### Defentsa

- Nabigatzailea ez pasahitz-kudeatzaile: kudeatzaile dedikatua, kutxa zifratuarekin eta jarduerarik gabeko blokeoarekin.
- Saio laburrak gailuari lotuak, beste ekipo batetik baliogabeak.
- Kanpoko pasahitz babestudun konprimituak posta-atarian blokeatzea.
- Portaeraren detekzioa: segundotan hainbat nabigatzaile-profil irekitzen dituen prozesua.
- Kredentzial-txandakatze eta saio-baliogabetze prozedura entseatua, susmo txikienean.

---

## 7. Ransomware

**Bahiketa-programa** · Larritasuna: Kritikoa

> Datuak hor daude oraindik. Baina jada ez dira zureak.

### Definizioa

Biktimaren datuak —aurretik aterata— zifratzen dituen malwarea, giltzaren eta ez argitaratzearen truke ordaina eskatzeko. Biktimak erasoa jaso duela argi jakitearen mende dagoen eraso bakarra.

### Nola funtzionatzen duen

1. Hasierako sarbidea: erositako kredentzialak, ageriko urruneko mahaigaina edo adabakirik gabeko perimetroa.
2. Barne azterketa: egunak edo asteak sarea mapatzen, babeskopiak aurkitzen eta pribilegioak eskalatzen.
3. Aurretiazko exfiltrazioa: bolumen handia kanpora kopiatu, leheneratuta ere estortsionatzeko.
4. Babeskopien neutralizazioa: argazkiak ezabatu, biltegiak zifratu eta kopiak gelditu.
5. Zifratzea eta oharra: aldi bereko jaurtiketa goizaldean edo jaiegunetan, eta erreskate-oharra.

### Eraso-bektorea

- Bigarren faktorerek gabeko ageriko urruneko mahaigainak.
- Stealerrez edo phishingez lortutako VPN kredentzialak.
- Adabakia argitaratu eta asteetara eguneratu gabeko perimetro-ahultasunak.
- Sarbide legitimo eta iraunkorra duten hornitzaile arriskuan jarriak.

### Adibide argigarria — Klinika Uribe

*Osasun pribatua · 2026*

2026ko urtarrilaren 3ko goizaldean, sarea osorik zifratzen da: historia klinikoa, agenda, fakturazioa eta domeinuko bi babeskopia-zerbitzariak. Oharrak kriptomonetan ordaintzea eskatzen du hirurogeita hamabi ordutan.

Sarbidea hemezortzi egun lehenagokoa da, bigarren faktorerik gabeko mantentze-hornitzaile baten VPN kontutik. Erasotzailea domeinu-administratzaile bihurtu eta berrogei gigabyte dokumentazio kliniko atera zituen.

Klinikak ez du ordaintzen eta deskonektatutako asteko kopiatik leheneratzen du: sei eguneko jarduera galtzen du eta hamaika behar ditu normaltasunera. Ateratako informazioa berdin argitaratzen da: kopiak zifratzea konpondu zuen, ez estortsioa.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Estortsio bikoitzak datuak ateratzen ditu, ordaindu gabe ere irteten direnak. |
| Osotasuna | Bai | Zifratutakoa baliogabe geratzen da, osorik leheneratzeko bermerik gabe. |
| Erabilgarritasuna | Bai | Efektu nagusia: sistemarik gabe egun batetik bestera. |
| Autentikazioa | Bai | Azken hedapena hartutako administrazio-pribilegioekin exekutatzen da. |
| Ez-arbuiatzea | Bai | Erregistro eta argazkien ezabatzeak trazabilitatea suntsitzen du. |

### Defentsa

- 3-2-1-1-0 araua: hiru kopia, bi euskarri, bat kanpoan, bat deskonektatuta edo aldaezina, eta leheneratze probatua.
- Bigarren faktorea urruneko sarbide orotan, hornitzaileen kontu mugatuekin.
- Segmentazioa: arriskuan dagoen ekipoak ez ditu zerbitzari kritikoak ez kopiak atzitzen.
- Leheneratze-entsegu erreala, kronometratua, urtean bitan gutxienez.
- Alboko mugimenduaren eta argazki-ezabatze masiboaren detekzio goiztiarra, zifratzearen iragarleak.

---

## 8. Exploit

**Ustiapen-kodea** · Larritasuna: Kritikoa

> Sarraila zehatz baten giltza zehatza.

### Definizioa

Programa baten ahultasun jakin bat baliatzen duen kode edo datu sorta, aurreikusi gabeko jokabidea eragiteko: aginduak exekutatu, egiaztapenak saltatu edo memoria irakurri. Ez da karga; hura entregatzen duen bidea baizik.

### Nola funtzionatzen duen

1. Ahultasunaren identifikazioa: balidazio, memoria edo baimen akatsa, bertsio jakin batean.
2. Sarrera: aurreikusi gabeko egoera batera daraman datua prestatzen da.
3. Fluxuaren kontrola: akatsak erabakitzen du zer agindu exekutatzen den.
4. Karga: kontrol horrekin kode minimo bat abiarazten da, gainerakoa deskargatzen duena.
5. Egonkortzea: prozesua martxan uzten da, ustekabeko itxiera batek salatu ez dezan.

### Eraso-bektorea

- Adabakirik gabeko ageriko zerbitzuak, arakatze masiboaz aurkituak.
- Irekitzen dituen aplikazioaren analizatzailea ustiatzen duten dokumentu eta multimedia fitxategiak.
- Nabigatzailea eta osagarriak, hirugarrenen edukia diseinuz prozesatzen dutenak.
- Zero egunekoak, erabiltzean adabakirik gabeak.

### Adibide argigarria — Oiartzun Datuak

*Datuak prozesatzeko zentroa · 2024*

2024ko urrian, oso hedatuta dagoen suebaki baten sarbide-atarian ahultasun kritiko bat argitaratzen da. Fabrikatzailearen zuzenketa egun berean dator, baina enpresak hamaika egun geroagorako agendatzen du eguneratzea.

Berrogei ordura, atariaren atakaren aurkako arakatzeak hasten dira: autentikatu gabeko eskaera bakar bat nahikoa da barne sarea Internetetik bereizten duen gailuan pribilegiozko saioa uzteko.

Erasoa ez da osatzen, komunitatearen detekzio-arau batek eredua blokeatzen duelako. Ondorio deserosoa: ageriko tartea mantentze-egutegiak finkatu zuen, ez erasotzaileak.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Exploit askok prozesuak irakur dezakeen memoria edo fitxategiak irekitzen dituzte. |
| Osotasuna | Bai | Kode arbitrarioak sistema mugarik gabe aldatzeko bidea ematen du. |
| Erabilgarritasuna | Bai | Saiakera hutsak zerbitzua erorarazten du; batzuek hori bera bilatzen dute. |
| Autentikazioa | Bai | Autentikazio aurrekoak kredentzialik gabe sartzen dira: horregatik dira kritikoak. |
| Ez-arbuiatzea | Bai | Dena prozesu legitimo baten barruan dabil, erregistroek bereizi ezin dutena. |

### Defentsa

- Aktibo eta bertsioen inbentario eguneratua: ezezaguna ezin da adabakitu.
- Adabaki-tarte bereizia: orduak perimetro kritikorako, egunak gainerakorako.
- Azalera txikitzea: beharrezkoa ez dena itxi, agerikoa jatorriaz mugatu.
- Ustiapenaren aurkako neurriak sisteman eta nabigatzailean, fluxuaren kontrolerako jauzia garestitzen dutenak.
- Perimetroko detekzio-arauak adabakia bitartean, zubi gisa eta inoiz ez ordezko.

---

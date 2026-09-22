# Segurtasun perimetrala

> Perimetroa

Elkarrekin azaltzen diren lau kontrol, elkarrekin bakarrik funtzionatzen dutelako. Bakoitzak beste hirurek irekita uzten duten zuloa estaltzen du.

Multzo honetako lau kontrolak elkarrekin azaltzen dira elkarrekin bakarrik funtzionatzen dutelako. Firewallak erabakitzen du zein konexio ezar daitekeen; VPNak besteren sare batetik igarotzen dena babesten du; DMZak lehenago edo geroago arriskuan jarriko denaren kaltea mugatzen du; eta proxya da laurotatik edukia begiratzen duen bakarra.

Komeni da haien mugak ere hasieratik finkatzea. Perimetroak ez du babesten dagoeneko barruan dagoenaren aurrean, ez behar ez duenak erabilitako kredentzial legitimo baten aurrean, ez bulegotik kanpo hiru egun jarraian lan egiten duen eramangarri baten aurrean. Beharrezko geruza bat da; ez da geruza nahikoa.

**Ideia nagusia:** Lau kontrol hauetako bakoitzak beste batek estaltzen duen zulo bat uzten du, eta laurek elkarrekin batek ere estaltzen ez duen bat uzten dute: gaizki erabilitako sarbide legitimoa. Horregatik da perimetroa defentsaren abiapuntua eta inoiz ez haren ondorioa.

---

### Unitate honetan

1. [Firewall](#1-firewalla) — Zein elkarrizketak hasteko eskubidea duen erabakitzen du.
2. [VPN](#2-vpna) — Sare pribatu bat pribatua ez den azpiegitura baten gainean.
3. [DMZ](#3-dmza) — Publikoa izan behar duena ezin da izan behar ez duenarekin bizi.
4. [Proxy](#4-proxya) — Zer eskatzen den begiratzen du, ez nora bakarrik.

---

## 1. Firewall

**Firewall** · Kokapena: Sareen arteko muga. 3. eta 4. geruzak; belaunaldi berriko ereduetan, 7.a ere bai.

> Zein elkarrizketak hasteko eskubidea duen erabakitzen du.

### Definizioa

Bi sareren arteko trafikoa kontrolatzen duen sistema, arau multzo ordenatu bat aplikatuz: pakete edo konexio bakoitzeko, baimendu, abisuarekin errefusatu edo isilean baztertu behar den erabakitzen du. Bere eginkizuna ez da edukia aztertzea, zein komunikaziok duen ezartzeko eskubidea zehaztea baizik.

### Nola funtzionatzen duen

1. Politika definitzea: jatorria, helmuga, protokoloa, ataka eta ekintza dituzten arauen zerrenda ordenatu bat.
2. Ordenaren araberako ebaluazioa: konexio bakoitza goitik behera alderatzen da arauekin eta bat datorren lehena aplikatzen da; beraz, ordena politikaren beraren zati da.
3. Egoeraren jarraipena: egoera-ikuskapena duen firewall batek dagoeneko ezarritako konexioak gogoratzen ditu, beraz baimendutako eskaera baten erantzunak ez du arau propiorik behar.
4. Azken ekintza: baimendu, jakinarazpen esplizituarekin errefusatu edo erantzun gabe baztertu; azken horrek erasotzailearen azterketa zailtzen du.
5. Erregistroa: erabaki esanguratsu oro idazten da, eta erregistro hori sarritan erasoaren lehen froga eskuragarria izaten da.

### Nola saihesten den

- Trafiko legitimoa baimendutako atakatik: 443 atakaren gaineko agindu eta kontrol kanal batek arau guztiak betetzen ditu, salbuespenik gabe.
- Barrutik abiarazitako konexioak, egoera-ikuskapenak trafikoa itzultzeko baimena ematen dienak sarrerako araurik gabe.
- Baimendutako protokoloen gaineko tunelak, DNS edo HTTPS esaterako, ematen dutenaz bestelako zerbait garraiatzen dutenak.
- Firewalltik igarotzen ez diren bideak: baimendu gabeko haririk gabeko sarbide-puntu bat edo barne ekipo bateko mantentze-modem bat.

### Adibide argigarria — Txorierri Garraioak

*Salgaien garraioa · 2024*

Txorierri Garraioak 2024an bere perimetroko firewalla ordezkatzen du. Arauen migrazioa aurreko politika kopiatuz ebazten da, bederatzi urtez metatua, arauz arau berrikusi gabe.

Ondorengo auditoriak berrehun eta hogeita hamaika arau zenbatzen ditu, eta horietatik hirurogeita hemezortzik ez zuten bat etortze bakar bat ere erregistratu hamabi hilabetetan. Haien artean, Internet osorantz zabalik zegoen arau bat urruneko mahaigaineko atakan, 2017an sortua arratsalde bat iraun zuen mantentze-lan baterako.

Garbiketak politika berrogeita sei arautan uzten du. Datu garrantzitsua ez da murrizketa, baizik eta ezabatutako hirurogeita hemezortzietako batek ere ez zuela inolako gorabeherarik eragin: urteak zeramatzaten agerian egoteko azalera handitzen, eragiketari ezer ekarri gabe.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Barne zerbitzu bat kanpotik eskuragarri ere ez izatea eragozten du, eta hori da bere datuak ez irteteko lehen baldintza. |
| Osotasuna | Ez | Ez du igarotzen uzten duenaren edukia egiaztatzen: baimendutako pakete batek edozer garraia dezake. |
| Erabilgarritasuna | Bai | Nahi ez den trafikoa baztertzen du zerbitzariaren baliabideak kontsumitu aurretik, eta aldi bereko konexioen kopurua mugatzen du. |
| Autentikazioa | Ez | Helbidearen eta atakaren arabera erabakitzen du, ez nortasunaren arabera: ez daki nor dagoen beste aldean, nondik iristen den bakarrik. |
| Ez-arbuiatzea | Ez | Bere erregistroek konexioak dokumentatzen dituzte, ez aplikazio baten barruko ekintza zehatzen egiletza. |

### Gomendatutako ezarpena

- Lehenetsitako ukapena: azken arauak lehenago esplizituki baimendu ez den guztia baztertzen du.
- Jatorri eta helmuga zehatzak dituzten arauak; komodina saihestea benetan publikoa den sarbidean izan ezik.
- Irteerako trafikoaren kontrola ere bai, eta ez sarrerakoarena bakarrik: hori da alderantzizko konexio bat ikusteko modu bakarra.
- Politikaren berrikuspen dokumentatua urtean behin gutxienez, aldi baterako arauentzat iraungitze-datarekin.
- Erregistro zentralizatua gailutik kanpo, eta alerta planifikatu gabeko edozein konfigurazio-aldaketaren aurrean.

---

## 2. VPN

**VPN (sare pribatu birtuala)** · Kokapena: Sare publikoaren gaineko tunela. 3. geruza IPsec-ekin, edo aplikazio-geruza TLS gainean.

> Sare pribatu bat pribatua ez den azpiegitura baten gainean.

### Definizioa

Konfiantzazkoa ez den sare baten bidez bi muturren artean kanal zifratu eta autentikatu bat sortzen duen teknologia, hortik igarotzen den trafikoa atzematen duenarentzat irakurtezina eta aldaezina izan dadin. Internet komunikazio pribatuetarako erabilgarria den garraiobide bihurtzen du.

### Nola funtzionatzen duen

1. Muturren elkarrekiko autentikazioa, ziurtagirien, aurrez partekatutako gakoen edo bigarren faktorea duten kredentzialen bidez.
2. Saioko gakoen negoziazioa, trafiko guztia harrapatuta ere gero haiek ondorioztatzea eragozten duen truke batekin.
3. Kapsulatzea: jatorrizko pakete bakoitza zifratu eta urruneko tunel-muturrera zuzendutako beste pakete baten barruan biltzen da.
4. Garraioa: paketeak Internetetik bidaiatzen du bi muturren helbideak bakarrik erakutsiz, eta ez benetako jatorria eta helmuga.
5. Deskapsulatzea eta osotasunaren egiaztapena helmugan, bidean aldatutako edozein pakete baztertzen duena.

### Nola saihesten den

- Muturretako baten arriskua: tunelak igarobidea babesten du, inoiz ez muturrean dagoen ekipoa.
- Bigarren faktorerik gabe lapurtutako VPN kredentzialak, tunela sarrera-ate eroso eta gainera zifratu bihurtzen dutenak.
- Gaizki konfiguratutako tunel zatitua, trafikoaren zati bat konfiantzazkoa ez den tokiko saretik irteten uzten duena.
- VPN kontzentragailuaren beraren ahultasunak, beste edozein bezala Interneten argitaratutako zerbitzu bat baita.

### Adibide argigarria — Basalde Nekazaritza

*Nekazaritza kooperatiba · 2025*

Basalde Nekazaritzak 2025ean VPN sarbidea zabaltzen du landa-lanean diharduten hogei pertsonarentzat. Konfigurazioak tunel zatitua darabil: korporazioko sarera zuzendutako trafikoa bakarrik sartzen da tunelean eta gainerakoa zuzenean irteten da gailuaren tokiko konexiotik.

Erabakia errendimenduagatik hartu zen eta berez arrazoizkoa da. Arazoa landa-ostatu baten sare partekatura konektatutako eramangarri batek DHCP bidez beste bezero batek kontrolatzen duen izen-zerbitzari bat jasotzen duenean agertzen da. Korporazioko kontsultak tuneletik doaz; izenen ebazpena, ez.

Xehetasun horrek hornitzaile-atarirako sarbidea tuneletik kanpo dagoen kopia batera birbideratzea ahalbidetzen du. Gertakaria ez zen zifratzearen akats batengatik izan: VPNak konfiguratuta zegoen bezalaxe funtzionatu zuen. Huts egin zuena zein trafikok sartu behar zuen bertan erabakitzea izan zen.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Tunelaren zifratzeak edukia irakurtezin bihurtzen du igarobidea atzematen duen edonorentzat. |
| Osotasuna | Bai | Pakete bakoitzak bidean gertatutako edozein aldaketa detektatu eta baztertzeko aukera ematen duen egiaztapena darama. |
| Erabilgarritasuna | Ez | Ez du ahalmenik ez erresistentziarik ekartzen; aitzitik, sarbidea puntu bakar batean biltzen du, botila-lepo bihur daitekeena. |
| Autentikazioa | Bai | Bi muturren nortasuna ezartzen du datu-byte bakar bat garraiatu aurretik. |
| Ez-arbuiatzea | Ez | Tunelaren muturra egiaztatzen du saioan zehar, baina ez ditu barruan egiten diren ekintzak sinatzen ez egozten. |

### Gomendatutako ezarpena

- Bigarren faktorea derrigorrezkoa pertsonen urruneko sarbidean; ekipo-ziurtagiriak egoitzen arteko tunel iraunkorretarako.
- Tunel osoa korporazioko ekipoetan edo, gutxienez, izenen ebazpena tuneletik igarotzera behartuta.
- Ekipoaren egoeraren egiaztapena sarbidea eman aurretik: sistema eguneratua, diskoa zifratuta eta postuaren babesa martxan.
- Sarbidea profilka emanda eta ez sare osora: VPNetik sartzen denak ez du bere lanak eskatzen duena baino gehiago atzitu behar.
- VPN kontzentragailua perimetro-lehentasunarekin adabakitzen da, definizioz Interneten argitaratuta dagoelako.

---

## 3. DMZ

**DMZ (zona desmilitarizatua)** · Kokapena: Sare-segmentu propioa, kanpoko eta barneko sarearen artean kokatua.

> Publikoa izan behar duena ezin da izan behar ez duenarekin bizi.

### Definizioa

Kanpotik eskuragarri egon behar duten zerbitzuak kokatzen diren sare-segmentu isolatua, Internetetik eta barne saretik iragazketa-arauen bidez bereizia. Bere diseinu-premisa da zerbitzu horiek lehenago edo geroago arriskuan jarriko direla, eta hori gertatzen denean erasotzailea ez dela jada lan-sarearen barruan egon behar.

### Nola funtzionatzen duen

1. Benetan agerian egon behar duten zerbitzuak identifikatzea: web publikoa, sarrerako posta, hornitzaile-ataria edo kanpoko DNSa.
2. Segmentu propio batean kokatzea, iragazketa-politika espezifikoarekin bai kanporantz bai barrurantz.
3. Internetetik datozen sarrerako konexioak mugatzea: argitaratutako atakak bakarrik eta DMZko ekipoetaraino bakarrik.
4. DMZtik barne sarerako muga zorrotza: lehenetsita ezer ez, eta salbuespen gisa konexio zehatzak, noranzko bakarrekoak eta zerbitzu jakinetara.
5. Zaintza indartua: arriskuan jartzeko probabilitate handiena duen segmentua dela onartzen da eta horren arabera instrumentatzen da.

### Nola saihesten den

- DMZtik barne sarerako itzulerako arau zabalegiak, isolamendua izapide formal huts bihurtzen dutenak.
- DMZko zerbitzari baten eta barne sarearen artean partekatutako kredentzialak, sare-araurik behar izan gabe salto egiteko bidea ematen dutenak.
- Barne sarearen domeinu berean integratutako DMZko zerbitzaria, bereizketaren zati handi bat baliogabetzen duena.
- DMZtik Interneterako irteera mugarik gabe, exfiltrazioa eta agindu eta kontrol kanala erraztzen dituena.

### Adibide argigarria — Arbolantza Aseguruak

*Aseguru artekaritza · 2023*

Arbolantza Aseguruak 2023an bere bezero-ataria firewallz behar bezala bereizitako DMZ batean kokatzen du. Barne sarea ez da handik eskuragarria eta diseinua formalki berrikusi eta onartu zen.

Atariak polizen datu-basea kontsultatu behar du, barne sarean dagoena. Horretarako arau bat irekitzen da: web zerbitzaritik datu-basera, ataka bakar bat eta helmuga bakar bat. Honaino, dena zuzen.

Akatsa konexio horrek erabiltzen duen kontuan dago. Zerbitzu-kontu bera da, pasahitz berarekin, beste hiru barne aplikaziok erabiltzen dutena, eta eskema osoaren gaineko irakurtzeko baimena du. Ataria aplikazioaren ahultasun batengatik arriskuan jartzen denean, DMZak sare-mugimenduari eusten dio baina ez kredentzialenari: erasotzaileak ez du barne sarera iritsi beharrik, dagoeneko baimendutako bide bat baitu daturaino.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Arrisku baten irismena mugatzen du: zerbitzari publikoa hartzen duenak ez du horrekin barne informaziorako zuzeneko sarbiderik lortzen. |
| Osotasuna | Ez | Berez ez du edukia balioztatzen ez babesten; sartzen denak jardun dezakeen lurraldea mugatzen du soilik. |
| Erabilgarritasuna | Bai | Inpaktua isolatzen du: argitaratutako zerbitzuaren aurkako eraso batek ez du lan-sarea ez barne produkzioa berarekin eramaten. |
| Autentikazioa | Ez | Sare-arkitekturako neurri bat da; ez ditu nortasunak egiaztatzen, funtzio hori zerbitzu bakoitzari eskuordetzen dio. |
| Ez-arbuiatzea | Ez | Ez du egiletzaren trazabilitaterik ekartzen, nahiz eta bereizketak ikerketa batean irismena mugatzen lagundu. |

### Gomendatutako ezarpena

- DMZko zerbitzari batek ere ez luke barne domeinukoa izan behar, ezta harekin konturik partekatu ere.
- DMZtik barrurako arauak banan-banan definituta, jatorria, helmuga, ataka eta arrazoi dokumentatuarekin.
- DMZtik Interneterako irteera ezinbestekora mugatuta eta beti erregistratzen duen proxy baten bidez bideratuta.
- Segmentuaren zerbitzu-kontu propioak, gutxieneko baimenekin eta edozein barne konturen pasahitzaz bestelakoarekin.
- Eragiketa-suposizio esplizitua: DMZa dagoeneko arriskuan balego bezala monitorizatzen da, estatistikoki gainerakoa baino lehenago egongo delako.

---

## 4. Proxy

**Proxy (bitartekari-zerbitzaria)** · Kokapena: Aplikazio-geruza, bezeroaren eta helmugako zerbitzariaren artean tartekatua.

> Zer eskatzen den begiratzen du, ez nora bakarrik.

### Definizioa

Bezeroaren eta helmugaren artean kokatu eta eskaera haren izenean egiten duen zerbitzaria. Konexioa amaitu eta berrabiarazten duenez, edukia azter dezake, erabilera-politikak aplika ditzake, erantzunak cachean gorde ditzake eta zer eskatu den zehatz erregistra dezake; hori guztia ataken araberako iragazketa baten eskumenetik erabat kanpo dago. Bere aldaera alderantzikatuan, argitaratutako zerbitzuen aurrean kokatzen da eta zerbitzaria babesten du, erabiltzailea beharrean.

### Nola funtzionatzen duen

1. Bezeroak bere eskaera proxyari zuzentzen dio helmugari beharrean, konfigurazio esplizituz edo sarean modu gardenean.
2. Proxyak aplikagarria den politika egiaztatzen du: helmugaren kategoria, ospea, eduki mota, erabiltzailea eta ordu-tartea.
3. Politikak baimentzen badu, proxya bera da helmugarekin konexioa irekitzen duena eta erantzuna berreskuratzen duena.
4. Ikuskapena: itzulitako edukia aztertzen du, antimalware motor batera bidal dezake eta politika betetzen ez duena blokeatzen du.
5. Entregatzea eta erregistratzea: erantzuna bezeroari itzultzen dio eta eskaera osoa idazten du, identifikatutako erabiltzaile bati lotuta.

### Nola saihesten den

- Aztertzen ez den trafiko zifratua: TLS amaierarik gabe, proxyak helmugaren izena besterik ez du ikusten.
- Sistemaren proxy konfigurazioa alde batera uzten duten aplikazioak, firewallak uzten badie zuzenean irteten direnak.
- Ospe ona duten helmugak bitartekari gisa erabilita: karga maltzurra ostatatzen duen biltegiratze-zerbitzu legitimo bat.
- Proxyak kudeatzen ez dituen protokoloen gaineko tunelak, DNS esaterako, Interneterako irteera erabat bideratuta ez dagoenean.

### Adibide argigarria — Elorrio Ingurumen Zerbitzuak

*Ingurumen zerbitzuak · 2025*

Elorrio Ingurumen Zerbitzuek 2025ean kategorien araberako iragazketa duen proxy bat ezartzen dute beren bulego-sarerako. Hedapena nabigatzaileetako konfigurazio automatikoaren bidez egiten da, eta firewallak zuzeneko irteera baimentzen jarraitzen du 80 eta 443 ataketatik sare osorako.

Lau hilabetez, proxyaren txostenek erabilera bikaina erakusten dute. Txosten horiek erakusten ez dutena handik igarotzen ez den trafikoa da: bi ekipotan instalatutako sinkronizazio-aplikazio batek ez du sistemaren konfigurazioa irakurtzen eta bere kabuz irteten da.

Arazoa firewallak erregistratutako irteera-bolumena proxyak erregistratutakoarekin alderatzean aurkitzen da. Aldea, guztizkoaren ehuneko hamaika, inoiz aztertu ez ziren konexioei dagokie osorik. Zuzenketa ez zen proxya hobeto konfiguratzea izan, firewallan Interneterako zuzeneko irteera ixtea baizik proxya bera ez zen guztiarentzat.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Baimendu gabeko helmugetarako datuen irteera eragozten du eta zer informazio bidaltzen den eta nork bidaltzen duen jasota uzten du. |
| Osotasuna | Bai | Itzulitako edukia aztertzean, deskarga maltzurrak blokeatzen ditu erabiltzailearen ekipora iritsi aurretik. |
| Erabilgarritasuna | Bai | Cacheak kanporako trafikoa murrizten du eta, bere aldaera alderantzikatuan, eskaerak xurgatu eta iragazten ditu zerbitzarira iritsi aurretik. |
| Autentikazioa | Bai | Erabiltzailearen identifikazioa eska dezake irteera eman aurretik, eta horrek eskaera bakoitza pertsona zehatz bati lotzen dio. |
| Ez-arbuiatzea | Bai | Bere erregistroak eskaera indibidualak autentikatutako erabiltzaile bati lotzen dizkio, dataz eta edukiz: perimetro osoko trazabilitate-iturririk baliagarriena da. |

### Gomendatutako ezarpena

- Interneterako zuzeneko irteera itxita firewallan: proxytik igarotzen ez dena ez da ateratzen, besterik gabe.
- Erabiltzailearen autentikazioa proxyan, erregistroak trazabilitate-balioa izan dezan eta ez datu estatistiko hutsa.
- Trafiko zifratuaren ikuskapena irizpidez aplikatuta, kategoria sentikorrak —banka edo osasuna— politikaz kanpo utzita.
- Alderantzizko proxya argitaratutako zerbitzuen aurrean, eskaeren mugarekin eta aplikazio-mailako iragazketarekin.
- Erregistroak aplikagarria den araudiak eskatzen duen epean gordetzea, proxytik beretik bereizitako sistema batean.

---

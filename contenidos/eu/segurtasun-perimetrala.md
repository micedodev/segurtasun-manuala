# Segurtasun perimetrala

> Perimetroa

Elkarrekin bakarrik funtzionatzen duten lau kontrol. Bakoitzak beste hiruren zuloa estaltzen du.

Firewallak konexioa erabakitzen du. VPNak kanpoko trafikoa babesten du. DMZak etorkizuneko arriskua mugatzen du. Proxyak edukia begiratzen du.

Haien mugak hasieratik finkatu behar dira. Ez du babesten dagoeneko barruan dagoena, ez gaizki erabilitako kredentzial legitimoa, ez bulegotik kanpo hiru egun jarraian lan egiten duen eramangarria. Beharrezko geruza da, ez nahikoa.

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

Bi sareren arteko trafikoa arau ordenatuekin iragazten duen sistema: pakete edo konexio bakoitza baimendu, abisuarekin errefusatu edo isilean baztertzen du. Ez du edukia aztertzen, zein komunikazio ezartzen den erabakitzen du soilik.

### Nola funtzionatzen duen

1. Politika definitzea: jatorria, helmuga, protokoloa, ataka eta ekintza dituen arau ordenatuen zerrenda.
2. Goitik behera ebaluatzea eta lehen bateragarria aplikatzea: ordena politika da.
3. Ezarritako konexioak gogoratzea: baimendutako erantzunak ez du arau propiorik behar.
4. Azken ekintza: baimendu, jakinarazpenarekin errefusatu edo erantzun gabe baztertu. Bazterketa isilak azterketa zailtzen du.
5. Erabaki esanguratsu oro erregistratzea. Erregistro hori izan ohi da erasoaren lehen froga.

### Nola saihesten den

- 443 atakaren gaineko agindu eta kontrol kanala: arau guztiak betetzen ditu.
- Barrutik abiarazitako konexioak: egoera-ikuskapenak trafikoa itzultzen du sarrerako araurik gabe.
- DNS edo HTTPS gaineko tunelak: ematen dutenaz bestelakoa garraiatzen dute.
- Firewalltik igarotzen ez diren bideak: baimendu gabeko haririk gabeko puntua edo barne mantentze-modema.

### Adibide argigarria — Txorierri Garraioak

*Salgaien garraioa · 2024*

Txorierri Garraioak 2024an bere perimetroko firewalla ordezkatzen du. Politika zaharra kopiatuz migratzen du, bederatzi urtez metatua, arauz arau berrikusi gabe.

Auditoriak berrehun eta hogeita hamaika arau zenbatzen ditu; hirurogeita hemezortzik ez zuten bat etortze bakar bat ere erregistratu hamabi hilabetetan. Haien artean, Internet osorantz zabalik zegoen arau bat urruneko mahaigaineko atakan, 2017an sortua arratsalde bat iraun zuen mantentze-lan baterako.

Garbiketak berrogeita sei arau uzten ditu. Ezabatutako hirurogeita hemezortzietako batek ere ez zuen gorabeherarik eragin: urteak zeramatzaten azalera handitzen, eragiketari ezer ekarri gabe.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Barne zerbitzua kanpotik eskuragarri ez izatea eragozten du. |
| Osotasuna | Ez | Ez du igarotzen uzten duenaren edukia egiaztatzen. |
| Erabilgarritasuna | Bai | Nahi ez den trafikoa baztertzen du baliabideak kontsumitu aurretik. |
| Autentikazioa | Ez | Helbidearen eta atakaren arabera erabakitzen du, ez nortasunaren arabera. |
| Ez-arbuiatzea | Ez | Konexioak dokumentatzen ditu, ez aplikazioko ekintzen egiletza. |

### Gomendatutako ezarpena

- Lehenetsitako ukapena: azken arauak lehenago baimendu gabeko guztia baztertzen du.
- Jatorri eta helmuga zehatzak; komodina saihestea, benetan publikoan izan ezik.
- Irteerako trafikoa ere kontrolatzea: alderantzizko konexioa ikusteko modu bakarra da.
- Politika urtean behin berrikustea, aldi baterako arauentzat iraungitze-datarekin.
- Erregistroa gailutik kanpo zentralizatzea, eta alerta planifikatu gabeko aldaketen aurrean.

---

## 2. VPN

**VPN (sare pribatu birtuala)** · Kokapena: Sare publikoaren gaineko tunela. 3. geruza IPsec-ekin, edo aplikazio-geruza TLS gainean.

> Sare pribatu bat pribatua ez den azpiegitura baten gainean.

### Definizioa

Konfiantzazkoa ez den sare baten gainean bi muturren artean kanal zifratu eta autentikatu bat sortzen du. Hortik doana irakurtezina eta aldaezina da atzematen duenarentzat.

### Nola funtzionatzen duen

1. Muturren elkarrekiko autentikazioa, ziurtagiriz, aurrez partekatutako gakoz edo bigarren faktoredun kredentzialez.
2. Saioko gakoak negoziatzea: trafiko guztia harrapatuta ere ezin dira gero ondorioztatu.
3. Kapsulatzea: jatorrizko pakete bakoitza zifratu eta urruneko muturrera zuzendutako beste batean biltzea.
4. Bi muturren helbideak bakarrik erakutsiz bidaiatzea, benetako jatorria eta helmuga ezkutatuta.
5. Helmugan deskapsulatu eta osotasuna egiaztatzea. Bidean aldatutako pakete oro baztertzen du.

### Nola saihesten den

- Mutur arriskutsua: tunelak igarobidea babesten du, ez muturreko ekipoa.
- Bigarren faktorerik gabeko VPN kredentzial lapurtuak: tunela sarrera-ate zifratu bihurtzen dute.
- Tunel zatitu gaizki konfiguratua: trafikoaren zati bat tokiko sare ez fidagarritik irteten da.
- VPN kontzentragailu ahula: Interneten argitaratutako zerbitzu bat da, besteak bezala.

### Adibide argigarria — Basalde Nekazaritza

*Nekazaritza kooperatiba · 2025*

Basalde Nekazaritzak 2025ean VPN sarbidea zabaltzen du landa-lanean diharduten hogei pertsonarentzat. Tunel zatituarekin: korporaziokoa bakarrik doa tuneletik; gainerakoa tokiko konexiotik.

Erabakia errendimenduagatik hartu zen eta arrazoizkoa da. Arazoa landa-ostatu baten sare partekatura konektatutako eramangarri batek DHCP bidez beste bezero batek kontrolatzen duen izen-zerbitzari bat jasotzen duenean agertzen da. Korporazioko kontsultak tuneletik doaz; izenen ebazpena, ez.

Xehetasun horrek hornitzaile-ataria tuneletik kanpoko kopia batera birbideratzen du. Zifratzeak konfiguratuta zegoen bezala funtzionatu zuen. Huts egin zuena zein trafikok sartu behar zuen erabakitzea izan zen.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Zifratzeak edukia irakurtezin bihurtzen du igarobidea atzematen duenarentzat. |
| Osotasuna | Bai | Pakete bakoitzak bideko aldaketa oro detektatu eta baztertzen du. |
| Erabilgarritasuna | Ez | Ez du ahalmenik ekartzen; sarbidea puntu bakarrean biltzen du. |
| Autentikazioa | Bai | Bi muturren nortasuna ezartzen du datu-byte oro baino lehen. |
| Ez-arbuiatzea | Ez | Tunelaren muturra egiaztatzen du, ez barne ekintzak. |

### Gomendatutako ezarpena

- Bigarren faktorea derrigorrezkoa urruneko sarbidean; ekipo-ziurtagiriak egoitzen arteko tunel iraunkorretan.
- Tunel osoa ekipo korporatiboetan edo izenen ebazpena tuneletik behartuta.
- Ekipoa egiaztatzea sarbidea eman aurretik: eguneratua, zifratuta eta babestuta.
- Sarbidea profilka ematea, ez sare osora.
- Kontzentragailua perimetro-lehentasunarekin adabakitzea: Interneten argitaratuta dago.

---

## 3. DMZ

**DMZ (zona desmilitarizatua)** · Kokapena: Sare-segmentu propioa, kanpoko eta barneko sarearen artean kokatua.

> Publikoa izan behar duena ezin da izan behar ez duenarekin bizi.

### Definizioa

Kanpotik eskuragarri dauden zerbitzuetarako segmentu isolatua, Internetetik eta barne saretik iragazketa-arauz bereizia. Zerbitzu horiek arriskuan jarriko direla onartzen du, eta erasotzailea orduan ez egotea lan-sarearen barruan.

### Nola funtzionatzen duen

1. Benetan agerian egon beharrekoak identifikatzea: web publikoa, sarrerako posta, hornitzaile-ataria edo kanpoko DNSa.
2. Segmentu propioan kokatzea, kanporako eta barrurako iragazketa espezifikoarekin.
3. Sarrera mugatzea: argitaratutako atakak bakarrik eta DMZko ekipoetaraino bakarrik.
4. Barrurako irteera ixtea: lehenetsita ezer ez, salbu noranzko bakarreko konexio zehatzak zerbitzu jakinetara.
5. Arrisku handieneko segmentu gisa zaintzea.

### Nola saihesten den

- Barrurako itzulera-arau zabalegiak: isolamendua izapide huts bihurtzen dute.
- Barne sarearekin partekatutako kredentzialak: sare-araurik gabe salto egiteko bidea ematen dute.
- Barne domeinuan integratutako zerbitzaria: bereizketaren zati handi bat baliogabetzen du.
- Mugarik gabeko irteera: exfiltrazioa eta agindu eta kontrol kanala errazten ditu.

### Adibide argigarria — Arbolantza Aseguruak

*Aseguru artekaritza · 2023*

Arbolantza Aseguruak 2023an bere bezero-ataria firewallz bereizitako DMZ batean kokatzen du. Barne sarea ez da handik eskuragarria eta diseinua formalki berrikusi zen.

Atariak polizen datu-basea kontsultatzen du, barne sarean dagoena. Arau bat irekitzen da: web zerbitzaritik datu-basera, ataka bakar bat eta helmuga bakar bat. Honaino, dena zuzen.

Akatsa kontuan dago. Zerbitzu-kontu bera da, pasahitz berarekin, beste hiru barne aplikazioena, eskema osoa irakurtzeko baimenarekin. Ataria arriskuan jartzean, DMZak sareari eusten dio baina ez kredentzialei: bide baimendua du daturaino.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Irismena mugatzen du: zerbitzari publikoak ez du barne sarbiderik ematen. |
| Osotasuna | Ez | Ez du edukia balioztatzen; jardun-eremua mugatzen du soilik. |
| Erabilgarritasuna | Bai | Inpaktua isolatzen du: erasoak ez du lan-sarea eramaten. |
| Autentikazioa | Ez | Sare-arkitektura da; nortasunak zerbitzu bakoitzari uzten dizkio. |
| Ez-arbuiatzea | Ez | Ez du egiletzarik jasotzen, baina irismena mugatzen laguntzen du. |

### Gomendatutako ezarpena

- DMZko zerbitzariek ez dute barne domeinukoa izan behar, ezta konturik partekatu ere.
- Barrurako arauak banan-banan definitzea, jatorri, helmuga, ataka eta arrazoiarekin.
- Irteera ezinbestekora mugatzea eta erregistratzen duen proxy bidez bideratzea.
- Segmentuaren kontu propioak, gutxieneko baimenekin eta pasahitz bereziarekin.
- DMZa arriskuan dagoen bezala monitorizatzea.

---

## 4. Proxy

**Proxy (bitartekari-zerbitzaria)** · Kokapena: Aplikazio-geruza, bezeroaren eta helmugako zerbitzariaren artean tartekatua.

> Zer eskatzen den begiratzen du, ez nora bakarrik.

### Definizioa

Bezeroaren izenean eskatzen duen zerbitzaria. Konexioa amaitu eta berrabiarazten duenez, edukia aztertzen du, politikak aplikatzen ditu, cachea gordetzen du eta eskaera bakoitza erregistratzen du; alderantzizko aldaeran zerbitzaria babesten du, erabiltzailea beharrean.

### Nola funtzionatzen duen

1. Bezeroak proxyari eskatzea helmugari beharrean, konfigurazio esplizituz edo modu gardenean.
2. Politika egiaztatzea: helmugaren kategoria, ospea, eduki mota, erabiltzailea eta ordu-tartea.
3. Baimenduz gero, proxyak berak irekitzea konexioa eta erantzuna berreskuratzea.
4. Itzulitako edukia aztertzea, antimalware motorrera bidaltzea eta politika urratzen duena blokeatzea.
5. Erantzuna itzultzea eta eskaera osoa erregistratzea, erabiltzaile identifikatuei lotuta.

### Nola saihesten den

- Aztertu gabeko trafiko zifratua: TLS amaierarik gabe, helmugaren izena besterik ez du ikusten.
- Sistemaren proxy konfigurazioa saihesten duten aplikazioak, firewallak uzten badie zuzenean irteten direnak.
- Bitartekari gisa erabilitako helmuga fidagarriak: karga maltzurra duen biltegiratze legitimoa.
- Proxyak kudeatzen ez dituen protokoloen tunelak, DNS esaterako.

### Adibide argigarria — Elorrio Ingurumen Zerbitzuak

*Ingurumen zerbitzuak · 2025*

Elorrio Ingurumen Zerbitzuek 2025ean kategorien araberako iragazketa duen proxy bat ezartzen dute bulego-sarerako. Nabigatzaileetako konfigurazio automatikoaz hedatzen dute, eta firewallak zuzeneko irteera uzten du 80 eta 443 ataketatik.

Lau hilabetez, txostenek erabilera bikaina erakusten dute. Ez dute erakusten handik igarotzen ez den trafikoa: bi ekipotako sinkronizazio-aplikazio batek sistemaren konfigurazioa saihesten du eta bere kabuz irteten da.

Arazoa firewallaren bolumena proxyarenarekin alderatzean agertzen da. Aldea, guztizkoaren ehuneko hamaika, aztertu gabeko konexioak dira. Zuzenketa: zuzeneko irteera ixtea, proxya ez zen guztiarentzat.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Indartzen dituen propietateak

| Propietatea | Kontrol honek indartzen du? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Baimendu gabeko irteera eragozten du eta nork zer bidaltzen duen jasotzen du. |
| Osotasuna | Bai | Deskarga maltzurrak blokeatzen ditu ekipora iritsi aurretik. |
| Erabilgarritasuna | Bai | Cacheak kanpoko trafikoa murrizten du; alderantzizkoak zerbitzaria babesten du. |
| Autentikazioa | Bai | Erabiltzailea identifikatzen du irteera eman aurretik. |
| Ez-arbuiatzea | Bai | Eskaera bakoitza erabiltzaile autentikatuari lotzen dio, dataz eta edukiz. |

### Gomendatutako ezarpena

- Zuzeneko irteera firewallan itxita: proxytik igarotzen ez dena ez da ateratzen.
- Erabiltzailea proxyan autentikatzea, erregistroak trazabilitate-balioa izan dezan.
- Trafiko zifratua irizpidez ikuskatzea, banka edo osasuna kanpo utzita.
- Alderantzizko proxya argitaratutakoen aurrean, eskaera-mugarekin eta aplikazio-iragazketarekin.
- Erregistroak araudiak eskatzen duen epean gordetzea, proxytik bereizitako sisteman.

---

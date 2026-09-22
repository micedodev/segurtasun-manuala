# 1UD · Segurtasunaren sarrera

> Ia inoiz bakarka agertzen ez diren zortzi mehatxu

Ia gertakari erreal orotan agertzen diren zortzi mehatxu, konbinazio batean edo bestean. Defendatu aurretik jakin behar da bakoitzak zer bilatzen duen eta nondik sartzen den.

Segurtasuna gaizki atera daitekeenaren inbentario zintzo batekin hasten da. Unitate honek ia inoiz bakarka jarduten ez duten zortzi mehatxu biltzen ditu: gertakari erreal bat kate bat izan ohi da, non pieza bakoitzak hurrengoari bidea prestatzen dion.

Ordena ere ez da kasualitatea. Lehen laurek sarbidea nola lortzen den azaltzen dute; hurrengo laurek, behin barruan dagoenean zer egiten den harekin. Iruzurrezko posta batek kredentzial bat entregatzen du, kredentzial horrek troiar bat instalatzeko bidea ematen du, troiarrak atzeko ate bat uzten du eta handik sartzen da ransomwarea hiru aste geroago.

**Ideia nagusia:** Zortzi mehatxu hauetako bakar batek ere ez du akats tekniko ikusgarririk behar. Nahikoa du berrerabilitako kredentzial batekin, jarri gabeko adabaki batekin edo presaka hartutako erabaki batekin.

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

Ingeniaritza sozialeko teknika, non erasotzaileak konfiantzazko erakunde baten itxura hartzen duen biktimak kredentzialak, datu pertsonalak edo dirua eman ditzan, edo fitxategi bat exekuta dezan. Ez du softwarearen akatsik ustiatzen: presa, hierarkia eta ohitura ustiatzen ditu.

### Nola funtzionatzen duen

1. Azterketa: erasotzaileak izenak, karguak, ohiko hornitzaileak eta posta-helbideen formatua biltzen ditu iturri publikoetatik.
2. Beita prestatzea: zerbitzu legitimo baten itxura klonatzen da eta benetakoaren antzeko dominio bat erregistratzen da, letra bat aldatuta edo goi-mailako dominio desberdin batekin.
3. Bidalketa: mezua postaz, SMSz edo korporazioko mezularitzaz iristen da, egiaztatzea eragozten duen presazko aitzakia batekin.
4. Harrapaketa: biktimak bere kredentzialak sartzen ditu formulario faltsuan; honek erasotzaileari birbidaltzen dizkio eta gero benetako gunera birbideratzen du, susmorik piztu ez dadin.
5. Berehalako erabilera: kredentzialak minutu gutxitan erabiltzen dira, askotan modu automatizatuan, inork ezer nabaritu aurretik.

### Eraso-bektorea

- Posta elektronikoa esteka edo eranskinarekin: alde handiz, oraindik kanal nagusia.
- SMSa eta berehalako mezularitza, non helmugako helbidea laburtuta agertzen den eta ezin den sakatu aurretik aztertu.
- Laguntzazko telefono-deia, minutu batzuk lehenago bidalitako mezu idatziari sinesgarritasuna ematen diona.
- QR kodeak, paperean inprimatuta edo dokumentuetan txertatuta, posta-atariaren esteken analisia erabat saihesten dutenak.

### Adibide argigarria — Nerbioi Logistika, S. L.

*Garraioa eta banaketa · 2024*

2024ko martxoan, Nerbioi Logistikako administrazio sailak telefonia-operadoreak bidali omen duen posta bat jasotzen du. Mezuak faktura bat ordaindu gabe dagoela iragartzen du eta benetakoaren berdin-berdina den atari batera estekatzen du, sei ordu lehenago erregistratutako nerbioi-facturacion.net dominioan ostatatua.

Ordainketak kudeatzen dituen pertsonak korporazioko erabiltzailea eta pasahitza sartzen ditu. Formulario faltsuak datuen formatua balioztatzen du, erasotzailearen zerbitzarira birbidaltzen ditu eta benetako atarira birbideratzen du, non saioa itxita ageri den. Biktimak iraungi egin dela ulertzen du, normaltasunez sartzen da berriro eta ez du ezer jakinarazten.

Hogei minutu geroago, kredentzial horiek berak erabiltzen dira korporazioko postan kanpoko helbide batetik sartzeko. Erasotzaileak birbidalketa automatikoko arau bat sortzen du eta hamaika egunez jarraitzen du hornitzaileekiko korrespondentzia irakurtzen, benetako faktura baten kontu-zenbakia aldatzea prestatu arte.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Harrapatutako kredentzialek postara eta nortasun horri lotutako zerbitzu guztietara ematen dute sarbidea. |
| Osotasuna | Bai | Kontua hartuta, erasotzaileak postontziko arauak, dokumentuak eta fakturen banku-datuak aldatzen ditu. |
| Erabilgarritasuna | Ez | Zerbitzuak martxan jarraitzen du: erasotzaileari interesatzen zaio, hain zuzen, ezer ez etetea eta arretarik ez erakartzea. |
| Autentikazioa | Bai | Sistemak legitimotzat hartzen du ez dena, baliozko kredentzialak aurkezten dituelako. |
| Ez-arbuiatzea | Bai | Ekintzak biktimaren izenean geratzen dira erregistratuta, eta honek ez du bera izan ez zela frogatzeko modurik. |

### Defentsa

- Phishingaren aurrean erresistentea den bigarren faktorea, FIDO2 gakoak edo passkeyak kasu: ezin zaio dominio legitimoaz besteko bati birbidali, hari lotuta dagoelako.
- SPF, DKIM eta DMARC argitaratuta eta ukatze-politikarekin, inork ezin dezan postarik bidali dominio propioa ordezkatuz.
- Kanpotik datorren mezu orotan abisu bisual automatikoa, eta azken hogeita hamar egunetan erregistratutako dominioen koarentena.
- Banku-datuen edozein aldaketarako banda kanpoko prozedura derrigorrezkoa: dagoeneko ezagutzen den zenbakira deitu, inoiz ez mezuan ageri denera.
- Aldian behingo simulazioak, non emaitza prestakuntzarako erabiltzen den eta ez zigortzeko; helburua azkar jakinaraztea da, eta ez inor inoiz ez erortzea.

---

## 2. Man-in-the-Middle (MITM)

**Komunikazio-bitartekaritza** · Larritasuna: Altua

> Bi aldek elkarrekin hitz egiten dutela uste dute. Erasotzailearekin ari dira.

### Definizioa

Hirugarren bat komunikazio baten bidean kokatu eta hura birbidaltzen duen erasoa; bide horretan irakurri eta alda dezake, ez igorleak ez hartzaileak nabaritu gabe. Biktimak ez du konexioa galtzen: espero zuen zerbitzu bera jasotzen du, beste norbaiten bidez besterik ez.

### Nola funtzionatzen duen

1. Kokatzea: erasotzaileak trafikoaren bidean egotea lortzen du, legitimoaren izen bera duen haririk gabeko sarbide-puntu bat jarriz edo segmentuko ARP taula pozoituz.
2. Atzematea: biktimaren trafiko guztia bere ekipotik igarotzen da benetako helmugara iritsi aurretik.
3. Zifratzea ahultzea: konexioa HTTP bada, argitan irakurtzen da; HTTPS bada, zifratu gabeko bertsio bat behartzen saiatzen da edo ziurtagiri propio bat aurkezten du.
4. Birbidaltzea: erasotzaileak eskaera benetako zerbitzariari birbidaltzen dio eta erantzuna biktimari itzultzen dio, esperientzia normaletik bereizi ezina izan dadin.
5. Ustiatzea: saioko cookieak, kredentzialak edo kontu-zenbakiak ateratzen ditu, eta nahi izanez gero edukia bidean aldatzen du.

### Eraso-bektorea

- Haririk gabeko sare irekiak edo pasahitz partekatua dutenak, non edonork argitara dezakeen izen bikia duen sare bat.
- ARP pozoitzea kommutadore bidezko tokiko sare batean, segmentuko trafikoa erasotzailearen ekipora birbideratzen duena.
- DNS edo DHCP zerbitzariaren ordezkapena, biktimari kontrolpeko atebide edo ebazle bat ematen diona.
- Arriskuan dauden tarteko gailuak: eguneratu gabeko router bat bitartekari iraunkor eta isil bihur daiteke.

### Adibide argigarria — Itsasargi Aholkularitza

*Ingeniaritza aholkularitza · 2025*

2025eko irailean egindako kongresu batean, Itsasargi Aholkularitzako aholkulari batek bere eramangarria Kongresua_Wifi_Librea izeneko sare ireki batera konektatzen du. Eraikineko sare legitimoa KongresuaWiFi zen; lehen ilaratik seinale onena ematen duena erasotzailearena da.

Sartzaileak atebide gisa jokatzen du. Aholkulariak enpresako dokumentu-kudeatzailea irekitzen duenean, sistemaren konfiantzazko biltegian ez dagoen agintaritza batek emandako ziurtagiria jasotzen du. Nabigatzaileak abisu argia erakusten du; aholkulariak, proiektatzeko presaka, onartu egiten du.

Konexioa dagoeneko beraren bidez ezarrita, erasotzaileak dokumentu-kudeatzailearen saioko cookiea lortzen du. Ez du pasahitzik behar: cookiea bere ekipotik berrerabiltzen du eta arratsalde horretan bertan lehian dauden hiru proiekturen planoak deskargatzen ditu.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Zifratu gabeko trafiko guztia, eta indarrez onartutako ziurtagiri batekin zifratutakoa, irakurgarri geratzen zaio bitartekariari. |
| Osotasuna | Bai | Erasotzaileak erantzuna alda dezake entregatu aurretik: kontu-zenbaki bat aldatu edo edukia orrialdean txertatu. |
| Erabilgarritasuna | Ez | Konexioa etetea erasoa salatzea litzateke; bitartekariari komeni zaio dena normaltasunez ibiltzea. |
| Autentikazioa | Bai | Biktimak zerbitzari legitimoaren aurrean autentikatzen dela uste du, eta erasotzailearen ekipoaren aurrean egiten du. |
| Ez-arbuiatzea | Bai | Eskaerak biktimaren baliozko saioarekin iristen dira zerbitzarira, eta hura ageri da gertatzen den guztiaren egile. |

### Defentsa

- HTTPS derrigorrezkoa HSTSrekin eta aurrekargarekin, nabigatzaileak zifratu gabeko bertsioa erabiltzeari uko egin diezaion, hala adierazita ere.
- Korporazioko VPNa beti aktibo bulegotik ateratzen diren ekipoetan: tunel zifratuak tokiko sareko bitartekaria neutralizatzen du.
- Kudeatutako ekipoetan ziurtagiri-abisu baten aurrean jarraitzeko aukera politikaz kentzea.
- ARPren ikuskapen dinamikoa eta DHCP snooping barne sareko kommutadoreetan, baimendu gabeko erantzunak baztertzen dituztenak.
- Bizitza laburreko saioak eta Secure, HttpOnly eta SameSite markatutako cookieak, lapurreta baten berrerabilera-tartea murrizteko.

---

## 3. Trojan

**Zaldi troiarra** · Larritasuna: Altua

> Erabiltzaileak instalatu nahi duelako instalatzen da.

### Definizioa

Itxuraz erabilgarria den funtzionalitate bat eskaintzen duen programa, ezkutuan karga maltzur bat ere exekutatzen duena. Harrarekiko aldea erabakigarria da: troiarra ez da bere kabuz hedatzen, norbaitek exekutatzea erabaki behar du, eta bere ingeniaritza guztia erabaki hori lortzera dago bideratuta.

### Nola funtzionatzen duen

1. Paketatzea: kode maltzurra agintzen duena benetan egiten duen programa erreal bati eransten zaio, biktimak egiaztatzen badu ezerk huts egin ez dezan.
2. Banaketa: deskarga-gune batean argitaratzen da, eranskin gisa bidaltzen da edo fabrikatzailearen webgune ofiziala imitatzen duen bilatzaile-iragarki batean kokatzen da.
3. Exekuzioa: biktimak borondatez instalatzen du, sarritan administratzaile-baimenak emanez, instalatzaileak erabateko normaltasunez eskatzen dituelako.
4. Iraunkortasuna: karga deskargen karpetatik kanpo kopiatzen da eta sistemarekin batera abiarazteko erregistratzen da, izen sinesgarri batekin.
5. Aktibazioa: agindu eta kontrol zerbitzariarekin harremanetan jartzen da eta aginduen zain geratzen da, edo zuzenean bere funtzioa zabaltzen du: espioitza, lapurreta edo urruneko sarbidea.

### Eraso-bektorea

- Doako softwarearen instalatzaileak edo biltegi ez-ofizialetatik deskargatutako bertsio eramangarriak.
- Benetako emaitzaren gainean kokatutako bilatzaile-iragarkiak, fabrikatzailearen webgunearen kopia batera daramatenak.
- Makroak dituzten ofimatikako eranskinak, non dokumentua benetakoa den eta makroa karga.
- Nabigatzailearen edo dokumentu-irakurgailuaren eguneratze faltsuak, arriskuan dagoen web batetik erakutsiak.

### Adibide argigarria — Goierri Elektronika

*Osagaien fabrikazioa · 2023*

2023ko azaroan, Goierri Elektronikako teknikari batek planoak bi formaturen artean bihurtzeko tresna bat behar du. Programaren izena bilatu eta lehen emaitza deskargatzen du: goierri-cadtools.com helbidera daraman iragarki bat, fabrikatzailearen webgunearen kopia sinesgarria.

Instalatzaileak funtzionatu egiten du. Tresnak planoak behar bezala bihurtzen ditu eta teknikariak astez aste erabiltzen du inolako gorabeherarik gabe. Harekin batera bigarren exekutagarri bat instalatu da erabiltzailearen profilean, eguneratze-zerbitzu baten izenarekin programatutako zeregin gisa erregistratuta.

Bigarren osagai horrek ez du ezer ikusgarririk egiten hemezortzi egunez. Epe hori igarota, 443 atakatik irteerako konexio bat irekitzen du, ohiko web trafikotik bereizi ezina, eta zain geratzen da. Sistemen sailak zeregin programatuen azterketa batek instalatutako produkturik bati ere ez dagokion sarrera bat aurkitzen duenean bakarrik detektatzen du.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Karga erabiltzailearen baimenekin exekutatzen da eta hark iristen duen guztira iristen da, zehazki. |
| Osotasuna | Bai | Kutsatutako ekipoko fitxategiak, konfigurazioa eta beste programak alda ditzake, mugarik gabe. |
| Erabilgarritasuna | Ez | Ondo eraikitako troiar batek ez du errendimendua hondatzen: arreta erakartzeak bere bizitza baliagarria laburtuko luke. |
| Autentikazioa | Bai | Dagoeneko autentikatuta dagoen saio baten barruan jarduten du, beraz erabiltzailearen nortasuna heredatzen du haren kredentzialik behar izan gabe. |
| Ez-arbuiatzea | Bai | Erregistroek agindu ez zituen eta ezagutu ere ez zituen ekintzak egozten dizkiote erabiltzaile legitimoari. |

### Defentsa

- Softwarea korporazioko biltegitik edo fabrikatzailearen webgune ofizialetik bakarrik instalatzea, paketearen sinadura digitala egiaztatuta.
- Eguneroko erabilerako kontuei tokiko administratzaile-baimenak kentzea.
- Ekipo kritikoetan baimendutako aplikazioen zerrendak: onartuta ez dagoena ez da exekutatzen.
- Internetetik datozen dokumentuen makroak lehenetsita blokeatzea, klik bakar batez gaitzeko aukerarik gabe.
- Abiarazte-mekanismoen aldizkako azterketa: zeregin programatuak, zerbitzuak eta exekuzio automatikoko gakoak.

---

## 4. Backdoor

**Sarbide ezkutua** · Larritasuna: Kritikoa

> Arazoa ez da nola sartu zen. Berriz itzul daitekeela da.

### Definizioa

Aurreikusitako autentikazio-kontrolak saihestuz sistema batean sartzeko bidea ematen duen mekanismoa. Erasotzaile batek arrisku baten ondoren uzten duen aztarna izan daiteke, edo fabrikatzaileak berak utzitako sarbide-bide bat. Bere balioa ez dago hasierako sarreran, itzulera bermatzean baizik.

### Nola funtzionatzen duen

1. Hasierako sarbidea lortzea edozein bidetatik: troiar bat, lapurtutako kredentzial bat edo ustiatutako ahultasun bat.
2. Itzultzeko mekanismoa instalatzea: gehitutako kontu bat, txertatutako gako publiko bat, gutxi zaintzen den ataka batean entzuten duen zerbitzu bat edo kanporako konexioa abiarazten duen zeregin bat.
3. Kamuflatzea: izen sinesgarri bat ematen zaio eta sistemako elementu legitimoen artean kokatzen da, inork bi aldiz begiratzen ez duen lekuan.
4. Egiaztatzea: erasotzaileak bideak funtzionatzen duela konprobatzen du, ekipoa jatorrizko sarrera-tresnatik garbituta dagoenean.
5. Geroko erabilera: atea hilabetez egon daiteke geldirik, berriro sartzea interesatu arte.

### Eraso-bektorea

- Zerbitzu-kontu baten baimendutako gakoen fitxategian gehitutako SSH gako publikoak.
- Sistemako kontu legitimo baten izenaren oso antzeko izena duten erabiltzaile-kontu berriak.
- Idazteko baimenak gaizki doituta dituen web zerbitzari baten direktorio batera igotako webshell bat.
- Fabrikatzailearen administrazio-interfazeak, inoiz aldatu ez ziren lehenetsitako kredentzialekin.
- Kanporako aldizkako alderantzizko konexioa, sarrerako atakarik ireki beharra saihesten duena.

### Adibide argigarria — Harrigain Ingeniaritza

*Ingeniaritza zibila · 2024*

Harrigain Ingeniaritzako sistemen taldeak 2024ko ekainean troiar bat detektatzen du fitxategi-zerbitzari batean, ezabatu egiten du eta gertakaria itxitzat ematen du. Erasotzailearen tresna diskotik desagertzen da eta ondorengo azterketak garbi ateratzen dira.

Bost hilabete geroago, konfigurazio-auditoria batek zerbitzari horretan bertan bigarren gako publiko bat aurkitzen du, babeskopien zerbitzu-konturako baimenduta. Etxeko inork ez zuen sortu. Garbiketa baino lau egun lehenago gehitu zen.

Bi data horien artean, erasotzailea hamaika aldiz sartu zen. Bakar batek ere ez zuen alertarik sortu: sarbidea kontu legitimo batekin gertatzen zen, kontu horrek egunero erabiltzen duen atakatik eta babeskopien ordu-tartearen barruan.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Sarbidea sistemak kudeatzen dituen datuen gaineko benetako pribilegioekin lortzen da. |
| Osotasuna | Bai | Nahi duenean itzul daitekeenak edozer alda dezake, auditoria-erregistroak barne. |
| Erabilgarritasuna | Ez | Atzeko ateak ez du zerbitzua gelditu nahi; zutik jarraitzea behar du baliagarria izaten jarraitzeko. |
| Autentikazioa | Bai | Bere definizioa bera da diseinuak aurreikusitako autentikazio-kontrola gainditu gabe sartzea. |
| Ez-arbuiatzea | Bai | Kontu legitimoak erabiltzean, trazabilitateak ezertan parte hartu ez duen erabiltzaile bat seinalatzen du. |

### Defentsa

- Edozein arriskuren ondoren, iraunkortasuna badagoela suposatzea: kontuak, baimendutako gakoak, zeregin programatuak eta zerbitzuak aztertu ekipoa berriro sartu aurretik.
- Sistema irudi ezagun batetik berreraikitzea, garbiketa selektiboa egin beharrean, bideragarria den bakoitzean.
- Kontuen eta gako publikoen inbentario kontrolatua, erregistratu gabeko edozein altaren aurrean alerta automatikoa jotzen duena.
- Irteerako trafikoaren zaintza, eta ez sarrerakoarena bakarrik: alderantzizko konexio bat kanpora begiratuta bakarrik ikusten da.
- Edozein ekipo altan ematean lehenetsitako kredentzial guztiak derrigorrez aldatzea, sareko hardwarea barne.

---

## 5. Spyware

**Espioitza-programa** · Larritasuna: Ertaina

> Ez du ezer hausten. Begiratu besterik ez du egiten.

### Definizioa

Sistema baten edo bere erabiltzailearen jarduerari buruzko informazioa biltzen duen eta hirugarren bati baimen informaturik gabe helarazten dion softwarea. Nabigazio-ohiturak profilatzen dituzten moduluetatik hasi eta teklakatuak erregistratu eta pantaila kapturatzen duten zaintza-tresnetaraino iristen da.

### Nola funtzionatzen duen

1. Instalazioa: beste programa baten osagai gehigarri gisa, nabigatzaile-luzapen gisa edo troiar baten bidez iristen da.
2. Bilketa: behatzeko eskatu zaiona erregistratzen du, bisitatutako helbideetatik eta irekitako aplikazioetatik hasi eta teklakatuetaraino eta pantaila-kapturetaraino.
3. Tokiko biltegiratzea: datuak fitxategi zifratu edo kodetu batean metatzen ditu, azaleko azterketa batek ezer ager ez dezan.
4. Exfiltrazioa: sortaka bidaltzen ditu tarte zabaletan, HTTPS edo DNS bezalako ohiko protokoloak erabiliz trafiko normalarekin nahasteko.
5. Iraunkortasuna: eguneratu eta abioan berriro erregistratzen da. Bere helburua ez da jardutea, irautea baizik.

### Eraso-bektorea

- Bisitatutako orrialde guztien edukia irakurri eta aldatzeko baimena duten nabigatzaile-luzapenak.
- Aukerak dagoeneko markatuta dituen instalatzaile batean onartzen diren hirugarrenen osagaiak dakartzaten doako programak.
- Iragartzen duten funtziorako neurriz kanpoko baimenak eskatzen dituzten aplikazio mugikorrak.
- Ekiporako sarbide fisikoarekin egindako instalazioa, pertsona jakin bati zuzendutako zaintza-egoeretan.

### Adibide argigarria — Ortzadar Hezkuntza

*Arautua den prestakuntza · 2025*

2025eko urtarrilean, Ortzadar Hezkuntzako koordinatzaile akademikoak matrikula-plataformako formularioen barruan ortografia zuzentzea agintzen duen nabigatzaile-luzapen bat instalatzen du. Luzapenak iragartzen duena betetzen du eta balorazio onak ditu.

Eskatzen dituen baimenen artean bisitatutako gune guztien edukia irakurri eta aldatzea dago: hain zuzen ere edozein zuzentzailek behar dituenak, beraz ezer ez da nabarmentzen instalazioan. Hiru aste geroago, eguneratze automatiko batek formularioen edukia bidali aurretik kopiatzen duen modulu bat gehitzen du.

Bi hilabetez, matrikulatutako pertsonen datu pertsonalak ortografia egiaztatzeko eskaera legitimoekin batera atera ziren. Trafikoa luzapenaren fabrikatzailearen beraren dominio batera zuzentzen zen eta ez zuen inoiz saio bakoitzeko kilobyte gutxi batzuk gainditu, exfiltrazio-alerten atalasetik oso azpitik.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Hori da, hain zuzen, programaren helburua: ezagutzea ez dagokion informazioa ateratzea. |
| Osotasuna | Ez | Behatzaile tipikoak ez ditu datuak aldatzen; aldatzeak harrapatua izateko arriskua asko handituko luke. |
| Erabilgarritasuna | Ez | Baliabide gutxi kontsumitzeko eta inolako hondatze nabarmenik ez eragiteko diseinatzen da. |
| Autentikazioa | Bai | Teklakatuak erregistratzen dituzten moduluek kredentzialak harrapatzen dituzte, eta haiekin erabiltzailearen nortasuna hirugarren baten eskuetan geratzen da. |
| Ez-arbuiatzea | Ez | Berez ez du biktimari egozteko moduko ekintzarik sortzen; arrisku hori lapurtutako kredentzialak gero erabiltzean agertzen da. |

### Defentsa

- Onartutako luzapenen katalogo itxia eta beste edozein instalatzeko aukera politikaz blokeatzea.
- Eguneratze bakoitzean eskatzen diren baimenak berrikustea, eta ez hasierako instalazioan bakarrik.
- Irteerako trafikoa helmugaren eta erregulartasunaren arabera zaintzea, eskaera txiki eta etengabeei arreta jarrita.
- Diskoaren zifratzea eta saioaren blokeo automatikoa, sarbide fisiko laburrarekin instalatzea eragozten dutenak.
- Instalatutako softwarearen aldizkako azterketa, onartutako inbentarioarekin alderatuta.

---

## 6. Stealer

**Kredentzial-lapurra** · Larritasuna: Altua

> Sartu, dena eraman eta segundotan desagertu.

### Definizioa

Ekipo batean gordetako sekretuak —nabigatzailean gordetako pasahitzak, saioko cookieak, aplikazioen tokenak eta konfigurazio-fitxategiak— aurkitu eta ateratzen espezializatutako malwarea, guztia eragiketa bakar batean bidaltzen duena. Spywarearekiko aldea garbia da: honek ez du irauteko asmorik, exekuzio azkar bakar baterako dago optimizatuta.

### Nola funtzionatzen duen

1. Exekuzio bakarra: normalean troiar gisa iristen da eta behin bakarrik abiarazten da, ireki duen erabiltzailearen baimenekin.
2. Inbentarioa: nabigatzaileen, posta-bezeroen, FTP bezeroen eta mezularitza-aplikazioen bide ezagunak zeharkatzen ditu.
3. Tokiko deszifratzea: sistema eragilearen gako propioak erabiltzen ditu, erabiltzailearen saiotik eskuragarri daudenak, gordetako pasahitzak deszifratzeko.
4. Paketatzea: multzoa konprimitzen du eta ekipoaren metadatuak eta pantaila-kaptura bat gehitzen ditu, harrapakina baloratzen laguntzen dutenak.
5. Bidaltzea eta ezabatzea: paketea erasotzailearen kanal batera igortzen du eta, kasu askotan, diskotik ezabatzen da.

### Eraso-bektorea

- Ordainpeko programen bertsio aldatu gisa banatutako exekutagarriak.
- Pasahitzarekin babestutako eranskin konprimituak, posta-atarian azterketa automatikoa eragozten dutenak.
- Liburutegi legitimoen izenen oso antzeko izenekin kode-biltegietan argitaratutako paketeak.
- Doako tresna bat eskaintzen duten bideo eta tutorialen deskribapenean kokatutako deskarga-estekak.

### Adibide argigarria — Zubiarte Finantza

*Finantza aholkularitza · 2025*

Zubiarte Finantzako praktiketako pertsona batek 2025eko apirilean pasahitzarekin babestutako fitxategi konprimitu bat deskargatzen du; postaren arabera, balantze-txantiloi bat dauka barruan. Pasahitza mezuaren gorputzean idatzita dator, eta horrek atariak fitxategia ireki eta aztertzea eragozten du.

Exekutagarria abiarazi eta lau segundo baino gutxiagotan amaitzen da. Denbora horretan instalatutako bi nabigatzaileen profilak zeharkatu ditu, gordetako ehun eta hamalau pasahitz deszifratu ditu eta saio aktiboen cookieak kopiatu ditu, korporazioko dokumentu-kudeatzailearena barne.

Paketea HTTPS eskaera baten bidez ateratzen da biltegiratze-zerbitzu legitimo baterantz, beraz helmuga ez dago blokeo-zerrenda bakar batean ere. Enpresak sarbide anomaloa detektatzen duenerako, bederatzi egun geroago, cookieak hiru helbide desberdinetatik erabili dira dagoeneko.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Erakundeko gainerako sistema guztietarako sarbidea ematen duten sekretuak blokean ateratzen ditu. |
| Osotasuna | Ez | Ez du biktimaren ekipoa aldatzen; kaltea gero eta beste leku batean gauzatzen da. |
| Erabilgarritasuna | Ez | Bere exekuzioa hain da laburra, non erabiltzaileak ez duen sistemaren inolako hondatzerik nabaritzen. |
| Autentikazioa | Bai | Lapurtutako saioko cookieek pasahitzik gabe eta bigarren faktoretik igaro gabe sartzeko bidea ematen dute. |
| Ez-arbuiatzea | Bai | Saio horiekin gero egiten den guztia biktimaren izenean geratzen da erregistratuta. |

### Defentsa

- Nabigatzailea ez erabiltzea pasahitz-kudeatzaile gisa: horretarako kudeatzaile dedikatu bat, kutxa zifratuarekin eta jarduerarik ezagatiko blokeoarekin.
- Saio laburrak eta gailuaren ezaugarriei lotuak, lapurtutako cookie batek beste ekipo batetik balio ez dezan.
- Kanpotik datozen eta pasahitzarekin babestuta dauden fitxategi konprimituak posta-atarian blokeatzea.
- Portaeraren araberako detekzioa: segundo gutxitan hainbat nabigatzaileren profilak irekitzen dituen prozesu bat seinale oso fidagarria da.
- Kredentzialak txandakatzeko eta saioak baliogabetzeko prozedura entseatua, susmo txikienaren aurrean.

---

## 7. Ransomware

**Bahiketa-programa** · Larritasuna: Kritikoa

> Datuak hor daude oraindik. Baina jada ez dira zureak.

### Definizioa

Biktimaren datuak zifratzen dituen —eta normalean aurretik ateratzen dituen— malwarea, deszifratze-gakoaren eta datuak ez argitaratzeko konpromisoaren truke ordainketa bat eskatzeko. Bere negozio-eredua biktimak erasoa jaso duela erabateko argitasunez jakitearen mende dagoen eraso mota bakarra da.

### Nola funtzionatzen duen

1. Hasierako sarbidea: erositako kredentzialak, agerian dagoen urruneko mahaigaineko zerbitzu bat edo perimetroan adabakirik gabeko ahultasun bat.
2. Barne azterketa: erasotzaileak egunak edo asteak ematen ditu sarearen mapa egiten, babeskopiak non dauden aurkitzen eta pribilegioak eskalatzen.
3. Aurretiazko exfiltrazioa: informazio kopuru handi bat kanpora kopiatzen du, biktimak leheneratzea lortuta ere estortsioa egin ahal izateko.
4. Babeskopiak neutralizatzea: argazkiak ezabatzen ditu, eskuragarri dauden babes-biltegiak zifratzen ditu eta kopia-zerbitzuak gelditzen ditu.
5. Zifratzea eta oharra: zifratzea aldi berean abiarazten da sare osoan, ia beti goizaldean edo jaiegunetan, eta erreskate-oharra agertzen da.

### Eraso-bektorea

- Interneten argitaratutako urruneko mahaigaineko zerbitzuak, bigarren autentikazio-faktorerik gabe.
- Aurretik stealer baten bidez edo phishing kanpaina baten bidez lortutako VPN kredentzialak.
- Perimetroko gailuetan ezagunak diren ahultasunak, adabakia argitaratu eta asteak igarota eguneratu gabe jarraitzen dutenak.
- Bezeroaren sarerako sarbide legitimo eta iraunkorra duen hornitzaile baten arriskua.

### Adibide argigarria — Klinika Uribe

*Osasun pribatua · 2026*

2026ko urtarrilaren 3ko goizaldean, Klinika Uriberen sarea osorik zifratuta geratzen da: historia klinikoa, agenda, fakturazioa eta domeinutik eskuragarri zeuden bi babeskopia-zerbitzariak. Oharrak kriptomonetan ordaintzea eskatzen du hirurogeita hamabi orduko epean.

Ondorengo berreraikuntzak hasierako sarbidea hemezortzi egun lehenago kokatzen du, bigarren faktorerik ez zuen mantentze-hornitzaile baten VPN kontu baten bidez. Denbora horretan erasotzailea alboka mugitu zen, domeinuaren administrazio-pribilegioak lortu zituen eta berrogei gigabyte dokumentazio kliniko kopiatu zituen kanpora.

Klinikak ez du ordaintzen. Deskonektatutako euskarrian asteroko kopia bat du, beraz erregistratutako sei eguneko jarduera galtzen du eta hamaika behar ditu ohiko funtzionamendua berreskuratzeko. Ateratako informazioa berdin argitaratzen da: zifratzea kopiarekin konpondu zen, argitaratzeagatiko estortsioa ez.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Estortsio bikoitzak datuak aurretik ateratzea dakar, eta erakundetik irteten dira erreskatea inoiz ordaindu gabe ere. |
| Osotasuna | Bai | Zifratutako fitxategiak baliogabe geratzen dira eta ez dago bermerik gakoak, iristen bada, osorik leheneratuko dituenik. |
| Erabilgarritasuna | Bai | Erasoaren erdiko efektua da: erakundea bere sistemetarako sarbiderik gabe geratzen da egun batetik bestera. |
| Autentikazioa | Bai | Azken hedapena aurreko fasean hartutako administrazio-pribilegioak dituzten kontuetatik exekutatzen da. |
| Ez-arbuiatzea | Bai | Prestaketa-fasean erregistroak eta argazkiak ezabatzeak gertakariaren trazabilitatearen zati handi bat suntsitzen du. |

### Defentsa

- 3-2-1-1-0 araua: hiru kopia, bi euskarritan, bat egoitzatik kanpo, bat deskonektatuta edo aldaezina, eta zero akats probatutako leheneratzean.
- Bigarren faktorea derrigorrezkoa urruneko sarbide orotan, hornitzaileenak barne, indarraldi mugatua eta berrikusgarria duten kontuekin.
- Sarearen segmentazioa, arriskuan dagoen ekipo batek ez ditzan zerbitzari kritikoak ez babeskopien biltegia atzitu.
- Leheneratze-entsegu erreala urtean bitan gutxienez, kronometratuta: inoiz leheneratu ez den kopia bat ez da kopia bat.
- Alboko mugimenduaren eta argazkien ezabatze masiboaren detekzio goiztiarra, zifratzea egunetan aurreratzen dutenak.

---

## 8. Exploit

**Ustiapen-kodea** · Larritasuna: Kritikoa

> Sarraila zehatz baten giltza zehatza.

### Definizioa

Programa baten ahultasun jakin bat aprobetxatzeko eta hark aurreikusi gabeko moduan joka dezan lortzeko diseinatutako kode zati edo datu segida: erasotzailearen aginduak exekutatzea, egiaztapen bat saltatzea edo besteren memoria irakurtzea. Exploita ez da karga maltzurra, hura entregatzea ahalbidetzen duen bidea baizik.

### Nola funtzionatzen duen

1. Ahultasuna identifikatzea: balidazio-akats bat, memoria-kudeaketakoa edo baimen-logikakoa, softwarearen bertsio jakin batean.
2. Sarrera eraikitzea: idatzi zuenak aurreikusi ez zuen egoera batera programa daraman datu bat prestatzen da.
3. Fluxuaren kontrola: akatsa programak ondoren zer agindu exekutatzen duen kontrolatzeko gaitasun bihurtzen da.
4. Karga entregatzea: kontrol hori benetan nahi den kodea abiarazteko aprobetxatzen da, ia beti minimoa eta gainerakoa deskargatzeaz arduratzen dena.
5. Egonkortzea: exploita prozesua martxan uzten saiatzen da, akatsa erasoa salatuko lukeen ustekabeko itxiera gisa ager ez dadin.

### Eraso-bektorea

- Interneten argitaratutako zerbitzuak adabakirik gabeko bertsioekin, arakatze automatizatu masiboaren bidez aurki daitezkeenak.
- Irekitzen dituen aplikazioaren analizatzailea ustiatzen duten dokumentuak eta multimedia fitxategiak.
- Nabigatzailea eta bere osagarriak, hirugarrenen edukia etengabe eta diseinuz prozesatzen dutenak.
- Zero eguneko ahultasunak, erabiltzen diren unean adabakirik ez dutenak.

### Adibide argigarria — Oiartzun Datuak

*Datuak prozesatzeko zentroa · 2024*

2024ko urrian, oso hedatuta dagoen suebaki baten sarbide-atarian ahultasun kritiko bat argitaratzen da. Fabrikatzailearen zuzenketa egun berean agertzen da. Oiartzun Datuakek hurrengo mantentze-lanetarako planifikatzen du eguneratzea, hamaika egun geroagorako aurreikusita.

Argitaratu eta berrogei ordura, atariaren atakaren aurkako arakatze automatizatuak erregistratzen hasten dira. Exploitak autentikatu gabeko eskaera bakar bat behar du eta pribilegioak dituen saio bat uzten du gailuan, hain zuzen barne sarea Internetetik bereizten duen ekipoan.

Erasoa ez da osatzera iristen, komunitateak argitaratutako detekzio-arau batek eskaeraren eredua blokeatzen duelako. Gertakariak ondorio deserosoa uzten du: agerian egoteko tartea ez zuen erasotzaileak finkatu, mantentze-egutegiak baizik.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Exploit askok prozesu ahulak irakur ditzakeen memoria edo fitxategietara ematen dute zuzeneko sarbidea. |
| Osotasuna | Bai | Kode arbitrarioa exekutatzeak eragindako sistema mugarik gabe aldatzeko bidea ematen du. |
| Erabilgarritasuna | Bai | Saiakera huts batek ustiatutako zerbitzuaren erorketa eragin ohi du, eta exploit batzuek efektu hori bera bilatzen dute. |
| Autentikazioa | Bai | Autentikazioaren aurreko exploitak kredentzialik aurkeztu gabe sartzen dira, eta horrek bihurtzen ditu kritiko. |
| Ez-arbuiatzea | Bai | Jarduera sistemaren prozesu legitimo baten barruan exekutatzen da, beraz erregistroek ez dute erasotzailea bereizten. |

### Defentsa

- Aktiboen eta bertsioen inbentario eguneratua: ezin zaio adabakirik jarri argitaratuta dagoenik jakiten ez denari.
- Adabakiak jartzeko tarte bereizia, orduetan neurtua perimetralerako eta kritikorako, eta egunetan gainerakorako.
- Azalera murriztea: agerian egon behar ez duen zerbitzu oro ixtea eta egon behar dutenak jatorriaren arabera mugatzea.
- Ustiapenaren aurkako neurriak aktibatuta sistema eragilean eta nabigatzailean, ahultasunetik fluxuaren kontrolera igarotzea garestitzen dutenak.
- Perimetroan detekzio-arauak adabakia jarri arte, zubi-neurri gisa eta inoiz ez ordezko gisa.

---

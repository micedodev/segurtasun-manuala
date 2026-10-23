# 3UD · Segurtasun aktiboa

> Ikusiak ez izateko diseinatutako bost familia

Ez dute berehalako efekturik bilatzen, denbora baizik: bakoitzak detekzioa saihesten du bere erara.

Sinaduren zerrendak ez ditu ikusten. Segurtasun aktiboak portaerak zaintzen ditu eta ekipoaz mesfidatzen da.

**Ideia nagusia:** Arriskuan dagoen sistemak ez du bere berri ematen. Detekzio fidagarria kanpotik dator: saretik, erregistro zentralizatuetatik edo ekipoa itzalita.

---

### Unitate honetan

1. [Worm](#1-sareko-harra) — Ez du inork klik egitea behar.
2. [Ghostware](#2-ghostwarea) — Ikertzen denerako, ez dago jada ikertzeko ezer.
3. [RAT](#3-rata) — Beste norbait dago zure ekipoaren aurrean eserita.
4. [Polymorphic Malware](#4-malware-polimorfikoa) — Kopia bakoitza desberdina da. Portaera, ez.
5. [Drive-by Download](#5-drive-by-download) — Ez duzu ezer klikatu behar. Bisita nahikoa da.

---

## 1. Worm

**Sareko harra** · Larritasuna: Kritikoa

> Ez du inork klik egitea behar.

### Definizioa

Bere kabuz ugaltzen eta hedatzen da, giza esku-hartzerik gabe, sareko zerbitzuen ahultasunez edo baliozko kredentzialez baliatuz. Troiarrak erabaki bat itxaroten du; harrak ezer ez.

### Nola funtzionatzen duen

1. Lehen ekipoan sartzen da: eranskin, euskarri eramangarri edo exploit bidez.
2. Helbide eskuragarriak zerrendatzen ditu sare lokalean eta, irten ahal badu, Interneten.
3. Helmuga bakoitza probatzen du: zerbitzu ahula, berrerabilitako kredentziala edo idazteko baimeneko baliabidea.
4. Helmugara kopiatzen da eta han exekutatzen da, inork ezer ireki gabe.
5. Ekipo berri bakoitzak prozesua errepikatzen du: kutsatuak gero eta tarte laburragoetan bikoizten dira.

### Eraso-bektorea

- Barne sare osoko fitxategi-partekatzea, ia inoiz segmentatua.
- Lehenetsita entzuten duten zerbitzuak, autentikaziorik gabe ustia daitezkeen ahultasunekin.
- Parke osoan berdinak diren administratzaile-kredentzialak: sarbide batek guztiak irekitzen ditu.
- Exekuzio automatikoko euskarri eramangarriak, sare orokorretik isolatutako industriaguneetan indarrean.

### Adibide argigarria — Aiztondo Mekanika

*Industria mekanizatua · 2024*

2024ko uztailean, mantentze-lanetako eramangarri bat Aiztondo Mekanikaren lantegiko sarera itzultzen da, bi aste domeinutik kanpo eta eguneratu gabe. Fitxategi-partekatzeko ahultasuna ustiatzen duen harra dakar.

Lantegiko sarea laua da: kontroleko berrogeita bi ekipoek segmentu bera partekatzen dute, produkzio-lerroen arteko bereizketarik gabe. Harra guztietara iristen da hamalau minututan.

Karga suntsitzailerik gabe: ugalketa-trafikoak eragiten du kaltea. Automatak kontrol-zikloaren mezuak galtzen dituzte asetzeagatik eta hiru lerro gelditzen dira segurtasunagatik. Produkzioa hamaika ordutan dator; sare lauarekiko konfiantza, ez.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Ez | Ugaltzea du helburu; karga espezifikoarekin bakarrik jartzen ditu datuak arriskuan. |
| Osotasuna | Bai | Iristen den sistema bakoitza aldatzen du instalatzeko eta exekutatzeko. |
| Erabilgarritasuna | Bai | Sarea eta prozesadorea asetzen ditu; sare lauetan produkzioa gelditzen du. |
| Autentikazioa | Bai | Sarbide-kontrola gaindituz edo saihestuz hedatzen da, berrerabilitako kredentzialekin edo batere gabe. |
| Ez-arbuiatzea | Ez | Bere kabuz hedatzen da eta hala geratzen da erregistratuta: ezer ez zaio erabiltzaile bati egozten. |

### Defentsa

- Segmentatu sarea eremuka eta funtzioka: arriskuko ekipo batek gutxi batzuetara bakarrik irits dadin.
- Administratzaile-pasahitza bakarra ekipo bakoitzeko, automatikoki sortua eta txandakatua.
- Adabakitu lehentasunez sarean entzuten duen zerbitzu oro, barne ekipoetan ere.
- Nahitaezko koarentena eta egiaztapena eguneratu gabe itzultzen diren ekipoentzat.
- Segmentu bat minututan isolatzea, aurrez entseatua: har baten aurrean, eusteak aztertzeak baino gehiago balio du.

---

## 2. Ghostware

**Aztarnarik gabeko malwarea** · Larritasuna: Altua

> Ikertzen denerako, ez dago jada ikertzeko ezer.

### Definizioa

Helburua beteta, existitu izanaren frogarik uzten ez du. Ez da rootkit bat bezala ezkutatzen: zantzuak —erregistroak, aztarnak, markak— ezabatu eta gertakaria ukatzeko erretiratzen da.

### Nola funtzionatzen duen

1. Ahalik eta aztarna txikienarekin exekutatzen da, askotan memorian soilik eta diskoan idatzi gabe.
2. Sistemaren administrazio-tresnak erabiltzen ditu: jarduera lan normala dirudi.
3. Denboran mugatutako helburua betetzen du: datu jakinak atera edo sabotaje puntual bat egin.
4. Garbitu egiten du: erregistroak ezabatu, denbora-markak lehengoratu eta aldi baterako fitxategiak kendu.
5. Iraunkortasunik gabe erretiratzen da: berrabiarazte batek memoriako azken arrastoa ezabatzen du.

### Eraso-bektorea

- Script batetik memorian soilik exekutatzea: ez da aztertzeko fitxategirik geratzen.
- Sistemako administrazio-utilitate legitimoak gaizki erabiltzea, susmorik piztu gabe.
- Erregistroak hautatuz ezabatzea: erregistro hutsak salatu egiten du.
- Denbora-markak aldatzea, jatorrizko instalazioarenekin bat etor daitezen.

### Adibide argigarria — Urdaibai Bioteknologia

*Bioteknologia · 2025*

2025eko ekainean, Urdaibai Bioteknologiak lehiaketa publiko bat galtzen du tarte txikiagatik, teknikoki oso antzeko proposamena aurkeztu duen lehiakide baten aurrean. Ez dago alertarik, fitxategi susmagarririk ez sarbide anomalorik.

Ondorengo berrikuspenak inkoherentzia bakarra aurkitzen du: berrogei minutuko zuloa apirileko goizalde batean segurtasun-erregistroan. Ez dago hutsik —horrek salatu egingo luke—: tarte horretan ez dago sarrerarik, sistemarenak normal jarraitzen duen bitartean.

Zulo hori da froga bakarra: ez sarrera-metodo, ez tresna, ezer ez diskoan. Hurrengo egunean enpresak erregistroak denbora errealean bidaltzen ditu administratzaileak ezaba ez dezakeen zerbitzari batera.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Balio handiko informazio jakina modu zuzenduan ateratzea du helburu. |
| Osotasuna | Bai | Erregistroak aldatzen ditu: ikerketa oinarritzen den datuak. |
| Erabilgarritasuna | Ez | Zerbitzua eteteak garbi utzi nahi duen ekipoa salatuko luke. |
| Autentikazioa | Bai | Aurretik lortutako kredentzial pribilegiatuekin jarduten du, irekitako saio legitimoetan. |
| Ez-arbuiatzea | Bai | Trazabilitatea suntsitzen du: gertakaririk egon zela frogatzea eragozten du. |

### Defentsa

- Erregistroak denbora errealean bidaltzea gehitze hutsezko kanpo-sistema batera, jatorrizko ekipoaren eskumenez kanpo.
- Erregistroen jarraitutasuna zaintzea: denbora-zuloa sarrera susmagarria bezain esanguratsua da.
- Memoriako portaeraren detekzioa: diskoan fitxategirik gabeko script-ak ikusten ditu.
- Administrazio-utilitateen erabilera erregistratzea, inoiz erabiltzen ez dituzten ekipoetan alerta emanez.
- Sistemako fitxategien marka eta laburpenen oinarri-lerroa gordetzea, leheneratze artifizialak detektatzeko.

---

## 3. RAT

**Urruneko sarbide-troiarra** · Larritasuna: Kritikoa

> Beste norbait dago zure ekipoaren aurrean eserita.

### Definizioa

Kutsatutako ekipoaren kontrol interaktiboa eta denbora errealekoa ematen du: fitxategiak, kamera, mikrofonoa, teklatua, pantaila eta sarea. Beste aldean pertsona batek erabakitzen du ikusten duenaren arabera.

### Nola funtzionatzen duen

1. Troiar, exploit edo minutu gutxiko sarbide fisiko bidez instalatzen da.
2. Alderantzizko konexioa irekitzen du erasotzailearengana: ez du sarrerako atakarik behar biktimaren suebakian.
3. Trafikoa zifratu eta ohiko atakatik bidaltzen du, normalean 443tik: ohiko web trafikoa dirudi.
4. Operadoreak karpetak arakatzen ditu, pantaila kapturatzen du, kamera aktibatzen du edo aginduak abiarazten ditu, aurkitzen duenera egokituta.
5. Barrutik hedatzen da: tresnak zabaldu, kredentzialak lapurtu eta sareko gainerako ekipoetara salto egin.

### Eraso-bektorea

- Urruneko laguntzako tresna legitimo gisa mozorrotutako eranskinak eta deskargak.
- Lan-eskaintza faltsuak, ekipo pertsonalean exekutatzeko proba tekniko batekin.
- Minutu gutxiko sarbide fisikoa zaindu gabeko ekipo desblokeatu batera.
- Urruneko kontroleko aplikazio errealak, haien kontuaren kredentzialekin modu abusuzkoan erabiliak.

### Adibide argigarria — Lauaxeta Argitaletxea

*Argitalpena eta komunikabideak · 2024*

2024ko urrian, Lauaxeta Argitaletxeko kazetari batek lankidetza-eskaintza bat jasotzen du, proiektu baten ustezko gidoia eranskin. Fitxategiak urruneko sarbideko agente bat instalatzen du eta gero benetako dokumentu koherente bat erakusten du.

Hiru astez, operadorea lan-ordutegian bakarrik konektatzen da, beste konexio artean tartekatuta, inoiz ez hogei minutuz jarraian. Lan-karpetak berrikusi, iturrien zerrenda kopiatu eta kamera bi aldiz aktibatzen du barne bileretan.

Detekzioa zeharkako bidetik dator: ekipoa aktibo ageri da fitxategi-zerbitzarian, erabiltzailea lekukoak zituen ekitaldi publikoan zegoenean. Kointzidentzia hori gabe, 443 atakatik zifratutako kanalak ohiko web trafikoa zirudien.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Operadoreak pantaila eta fitxategiak ikusten ditu, eta ingurua kameraz eta mikrofonoaz. |
| Osotasuna | Bai | Kontrol interaktibo osoa du: edozer sortu, aldatu edo ezabatu ekipoan. |
| Erabilgarritasuna | Ez | Hondatze nabarmen oro saihesten du: biktimak normaltasunez lanean jarraitzea komeni zaio. |
| Autentikazioa | Bai | Biktimaren irekitako saioan jarduten du, haren nortasuna heredatuz kredentzialik gabe. |
| Ez-arbuiatzea | Bai | Dena erabiltzailearen izenean geratzen da erregistratuta, ireki gabeko dokumentuen sarbideak barne. |

### Defentsa

- Irteerako trafikoa helmugaka kontrolatzea: 443 atakatik helbide ezezagunera doan konexio iraunkorra anomaloa da, zifratuta ere.
- Urruneko mahaigainaren eta pantaila-kapturaren detekzioa portaeraren arabera, erabili behar ez luketen prozesuetan.
- Kamera aktiboaren seinale fisikoa, eta objektiboa estalita erabiltzen ez denean.
- Saioaren blokeo automatikoa jarduerarik gabe tarte laburrean: sarbide fisikoaren tartea ixten du.
- Baimendutako urruneko laguntzaren katalogo itxia eta gainerakoen blokeoa, onartu gabeko legitimoak barne.

---

## 4. Polymorphic Malware

**Kode aldakorreko malwarea** · Larritasuna: Altua

> Kopia bakoitza desberdina da. Portaera, ez.

### Definizioa

Kutsatze edo exekuzio bakoitzean kodea aldatzen du: fitxategia inoiz ez da berdina eta edukiko sinadurak ez du bi aldiz ezagutzen. Forma aldatzen da; funtzioa beti bera.

### Nola funtzionatzen duen

1. Motorra eta karga bereizten ditu: karga egonkorra da eta kopia bakoitzak estalki desberdina dakar.
2. Karga gako berri batekin zifratzen du aldi bakoitzean: edukia ez da inoiz errepikatzen.
3. Deszifratzaile desberdina sortzen du: aginduak berrantolatu, eragiketa alferrikakoak txertatu eta erregistroak aldatu.
4. Biktima bakoitzak laburpen bakarra duen fitxategia jasotzen du, mehatxu-zerrendetan inoiz agertu gabea.
5. Memorian, deszifratzaileak beti karga bera berreraikitzen du: hor portaera salatzen da.

### Eraso-bektorea

- Deskarga bakoitzeko kopia bakarra: laburpen ezagunen zerrendak baliogabetzen ditu.
- Paketatzaile eta lausotzaile komertzialak: geruza berria, logika ukitu gabe.
- Aldaera metamorfikoa: karga bera berridazten du deszifratzailerik gabe, memoriako azterketa zailduz.
- Aldaerak eskaeraren arabera sortzea entregan, biktimaren sistema eragilera egokituta.

### Adibide argigarria — Zaldibar Farmazia Banaketa

*Farmazia banaketa · 2026*

2026ko urtarrilaren eta martxoaren artean, Zaldibar Farmazia Banaketak ustezko bidalketa-agiria eranskin duten ehun eta berrogei posta jasotzen ditu. Perimetroko antibirusak ez du bat ere blokeatzen: fitxategi bakoitzak laburpen desberdina du, zerrenda ezagunetatik kanpo.

180 eta 210 kilobyte artean pisatzen dute, barne egitura desberdinarekin. Exekutatzean gauza bera egiten dute ordena berean: bizitza laburreko dominioa galdekatu, ausazko izeneko zeregin programatua sortu eta aldi baterako karpetatik prozesu semea abiatu.

Detekzioa portaerak alderatzean dator, ez fitxategiak. Sekuentzia horren arauak ehun eta berrogei kasuak identifikatzen ditu, baita oharkabean exekutatu ziren hemezortziak ere.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Karga stealer edo troiarra izan ohi da: informazio-lapurretan amaitzen da. |
| Osotasuna | Bai | Sisteman instalatzen da eta abioa aldatzen du geroko exekuzioa ziurtatzeko. |
| Erabilgarritasuna | Ez | Saihesteko teknika da, ez kalte egitekoa: berez ez du zerbitzurik eteten. |
| Autentikazioa | Ez | Ez du nortasuna erasotzen: defentsak ez ezagutzea bilatzen du, ez inor ordezkatzea. |
| Ez-arbuiatzea | Ez | Ez ditu erregistroak manipulatzen: detekzioa atzeratzen du, ez geroko arrastoa ezabatzen. |

### Defentsa

- Portaeraren detekzioa, ez sinadurarena: sekuentzia egonkorra da fitxategia aldatuta ere.
- Entregatu aurretik ingurune isolatuan aztertzea: zer egiten duen behatzea, ez itxura.
- Baimendutako aplikazioen zerrendak: ezaguna dena bakarrik baimentzea, txarra ezagutu beharrean.
- Sareko adierazleak osagarri: berriki erregistratutako edo bizitza laburreko dominioek familia osoak salatzen dituzte.
- Exekutagarriak blokeatzea aldi baterako eta deskargen karpetetan: software legitimoak ez luke hortik abiatu behar.

---

## 5. Drive-by Download

**Mamuak · Zure klikaren beharrik ez duen mamua** · Larritasuna: Altua

> Ez duzu ezer klikatu behar. Bisita nahikoa da.

### Definizioa

Eraso fantasma bat berez gauzatzen da arriskuan dagoen webgunea bisitatzean: orriak eduki legitimoarekin batera script maltzur bat dakar, bisitariaren sisteman zaurgarritasunak bilatu eta, bat aurkitzean, malwarea deskargatu eta exekutatzen duena. Ez du pertsona amu bidez jotzen, phishingak bezala, ezta erabakiaren zain geratzen ere, troiarrak bezala: nabigatzaileak orria prozesatzea nahikoa du.

### Nola funtzionatzen duen

1. Erasotzaileak webgune kaltebera infektatzen du ahultasun ezagunen bilatzaileekin, eta JavaScript maltzurra txertatzen du gunearen HTMLan, edo scripta sartzen du orriko iFrame, esteka edo iragarki batean.
2. Erabiltzaileak kutsatutako orria ohiko moduan bisitatzen du, ezer deskargatu gabe eta abisurik onartu gabe.
3. Webguneak orria itzultzen du script kaltegarria kodean sartuta: erabiltzailearen sistemara deskargatzen da gainerakoarekin batera.
4. Script-ak Hop Point zerbitzariari script berriak eskatzen dizkio, biktimaren ekipoan lehertu daitekeen kalteberatasuna miatzen dutenak, bata bestearen atzetik, batek arrakasta izan arte.
5. Zaurgarritasunen batek amore emanez gero, script batek pieza exekutagarria (malwarea) deskargatzen du beste zerbitzari batetik (edo lehengotik) eta ekipoan martxan jartzen du.

### Eraso-bektorea

- Arriskuan jarritako konfiantzazko orriak: arriskua ez dago gune susmagarrian, scripta injektatu dioten konfiantzazko webean baizik.
- Orri kalteberan txertatutako iFrame, esteka eta iragarki maltzurrak, ohiko nabigazioan ikusezin.
- Hop Point zerbitzaria: miaketa-scriptak eta bisitari bakoitzaren ahultasunera egokitutako ustiapena ematen ditu.
- Banaketa-zerbitzaria: azken karga gordetzen du eta ustiapenak arrakasta izan duen ekipoei bakarrik zerbitzatzen die.

### Adibide argigarria — Oarso Bidaiak

*Bidaia-agentzia · 2025*

2025eko otsailean, Oarso Bidaiak-eko langile batek tokiko hedabide baten kultura-agenda kontsultatzen du taldeen eskaintza prestatzeko. Agendak publizitate-sareko iragarkiak erakusten ditu; sareak egun batzuk lehenago iFrame maltzurra zeraman iragarkia onartu zuen berrikusi gabe.

Langilearen nabigatzaileak, bi eguneratze pendiente eta osagarri zaharkituarekin, injektatutako scripta exekutatu zuen ezer arrarorik erakutsi gabe. Script-ak Hop Point zerbitzariari eskatu zion: hirugarren miaketak osagarri eguneratu gabean lehertu zitekeen ahultasuna aurkitu zuen.

Minutu batzuetara banaketa-zerbitzariko stealer batek nabigatzaileko pasahitzak atera zituen, erreserba-kudeatzailearenak barne. Inork ez zuen ezer klikatu: ekintza bakarra konfiantzazko orria une okerrean bisitatzea izan zen.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Deskargatutako malwarea stealer edo troiarra izan ohi da: barrutik ateratzen ditu kredentzialak eta datuak. |
| Osotasuna | Bai | Exekutagarria instalatzen du eta konfigurazioa aldatzen du exekuzioa eta iraunkortasuna ziurtatzeko. |
| Erabilgarritasuna | Ez | Zerbitzua eteteak denbora behar duen infekzioa salatuko luke. |
| Autentikazioa | Bai | Kodea biktimaren pribilegioekin exekutatzen da eta haren nortasunarekin jarduten du, baimenik gabe. |
| Ez-arbuiatzea | Ez | Ez ditu erregistroak ezabatzen: bisitaren eta deskargaren arrastoa uzten du, ikerketak aurkitzen duena. |

### Defentsa

- Sistema eragilea, nabigatzailea, osagarriak eta antibirusa eguneratuta eduki azken partxeekin: egiteke dagoen partxe bakoitza miaketak probatzen duen ahultasuna da.
- Antibirus proaktiboa portaeraren analisiarekin: kode ezezaguna detektatu eta ustiapena blokeatzen du sinadurarik gabe ere.
- Nabigatzailearen antiphishing eta antimalware blokeatzaileak aktibatuta, leku maltzurrak aurrez blokeatuta.
- Ez sartzea jatorri zalantzazko esteketan ez spamez iristen direnetan, eta helmuga beti egiaztatzea: kurtsorea estekaren gainean pasatuz edo egoera-barrari begiratuz, sakatu aurretik.
- Pribilegiorik gabeko kontuarekin nabigatzea: ahultasunak amore emanda ere malwareak ez du ekipoaren kontrol osoa heredatzen.

---

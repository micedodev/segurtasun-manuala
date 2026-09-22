# 3UD · Segurtasun aktiboa

> Ikusiak ez izateko diseinatutako lau familia

Ikusiak ez izateko berariaz diseinatutako lau familia. Hemen defentsak sinaduren zerrenda izateari uzten dio eta portaeraren zaintza bihurtzen da.

Unitate honetako lau familiek eskuliburuko gainerakotik bereizten dituen ezaugarri bat partekatzen dute: berariaz daude diseinatuta ikusiak ez izateko. Ez dute berehalako efekturik bilatzen, denbora baizik.

Horrek metodoa aldatzera behartzen du. Fitxategiak mehatxu ezagunen zerrenda baten aurka alderatzen dituen defentsa batek huts egiten du kopia bakoitzean aldatzen den kode baten aurrean, bere arrastoa ezabatzen duen beste baten aurrean eta galdetzen zaionean sistemak erantzuten duena manipulatzen duen hirugarren baten aurrean. Segurtasun aktiboa portaerak zaintzea da, eta ekipo batek bere buruaz jakinarazten duenaz mesfidatzea.

**Ideia nagusia:** Arriskuan dagoen sistema bera bere egoerari buruzko informazioaren iturri denean, informazio horrek ez du jada balio. Detekzio fidagarria beti kanpotik iristen da: saretik, zentralizatutako erregistroetatik edo ekipoa itzalita eginiko azterketa batetik.

---

### Unitate honetan

1. [Worm](#1-sareko-harra) — Ez du inork klik egitea behar.
2. [Ghostware](#2-ghostwarea) — Ikertzen denerako, ez dago jada ikertzeko ezer.
3. [RAT](#3-rata) — Beste norbait dago zure ekipoaren aurrean eserita.
4. [Polymorphic Malware](#4-malware-polimorfikoa) — Kopia bakoitza desberdina da. Portaera, ez.

---

## 1. Worm

**Sareko harra** · Larritasuna: Kritikoa

> Ez du inork klik egitea behar.

### Definizioa

Bere kabuz ugaldu eta sistema batetik bestera hedatzeko gai den malwarea, giza esku-hartzerik gabe, sarean eskuragarri dauden zerbitzuen ahultasunak edo baliozko kredentzialak aprobetxatuz. Troiarrarekiko aldea erabakigarria da: troiarrak erabaki bat itxaroten du, harrak ez du ezer itxaroten.

### Nola funtzionatzen duen

1. Lehen ekipoan exekutatzea, edozein sarrera-bidetatik: eranskin bat, euskarri eramangarri bat edo exploit bat.
2. Aurkitzea: ekipo horretatik eskuragarri dauden helbideak zerrendatzen ditu, tokiko sarean eta, irten ahal badu, Interneterantz ere bai.
3. Hedatze-baldintza probatzea: helmuga bakoitzean zerbitzu ahula, berrerabilitako kredentziala edo idazteko baimena duen baliabide partekatua bilatzen du.
4. Kopiatzea eta urrunetik exekutatzea: bere burua helmugara transferitzen du eta han exekuta dadin lortzen du, inork ezer ireki gabe.
5. Hazkunde esponentziala: ekipo berri bakoitzak prozesua errepikatzen du, beraz kutsatuen kopurua gero eta tarte laburragoetan bikoizten da, eskuragarri dauden helburuak agortu arte.

### Eraso-bektorea

- Barne sare osotik eskuragarri dauden fitxategiak partekatzeko zerbitzuak, gutxitan segmentatuta daudenak.
- Ekipo guztietan lehenetsita entzuten duten zerbitzuetan aurretiazko autentikaziorik gabe ustia daitezkeen ahultasunak.
- Parke osoan berdinak diren tokiko administratzaile-kredentzialak, sarbide bat sarbide unibertsal bihurtzen dutenak.
- Exekuzio automatikoa duten euskarri eramangarriak, oraindik indarrean daudenak sare orokorretik isolatutako industria-inguruneetan.

### Adibide argigarria — Aiztondo Mekanika

*Industria mekanizatua · 2024*

2024ko uztailean, mantentze-lanetako eramangarri bat Aiztondo Mekanikaren lantegiko sarera konektatzen da, bi aste domeinutik kanpo eta eguneratzerik jaso gabe egon ondoren. Fitxategiak partekatzeko zerbitzu batean ahultasun bat aprobetxatzen duen har bat darama.

Lantegiko sarea laua da: kontroleko berrogeita bi ekipoek segmentu bera partekatzen dute, produkzio-lerroen artean inolako bereizketarik gabe. Harrak hamalau minutu behar ditu guztietara iristeko.

Kaltea ez du karga suntsitzaile batek eragiten, harrak ez baitzeraman bat ere. Ugalketa-trafikoak berak eragiten du: automatak kontrol-zikloaren mezuak galtzen hasten dira segmentuaren asetzeagatik eta hiru lerro gelditu egiten dira segurtasunagatik. Produkzioa hamaika ordutan berreskuratzen da; sare lauarekiko konfiantza, ez.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Ez | Bere helburua ugaltzea da, ez irakurtzea: horretarako karga espezifiko bat gehitzen badu bakarrik jartzen ditu datuak arriskuan. |
| Osotasuna | Bai | Iristen den sistema bakoitza aldatzen du bertan instalatzeko eta bere exekuzioa bermatzeko. |
| Erabilgarritasuna | Bai | Ugalketak sarea eta prozesadorea kontsumitzen ditu; sare lauetan asetzea bera nahikoa da produkzioa gelditzeko. |
| Autentikazioa | Bai | Ekipo bakoitzaren sarbide-kontrola gaindituz edo saihestuz hedatzen da, berrerabilitako kredentzialekin edo bat ere behar izan gabe. |
| Ez-arbuiatzea | Ez | Ez du erabiltzaile jakin bati egozteko moduko ekintzarik sortzen: hedapena automatikoa da eta halaxe geratzen da erregistratuta. |

### Defentsa

- Sarearen segmentazioa eremuka eta funtzioka, arriskuan dagoen ekipo batek gutxi batzuetara bakarrik irits dadin.
- Tokiko administratzailearen pasahitzak ekipoko bakarrak, automatikoki sortuak eta txandakatuak.
- Sarean lehenetsita entzuten duen zerbitzu oro lehentasunez adabakitzea, inoiz argitaratzen ez diren barne ekipoetan ere bai.
- Eguneratzeen kontroletik kanpo egon ondoren itzultzen diren ekipoentzako nahitaezko koarentena eta egoeraren egiaztapena.
- Segmentu oso bat minututan isolatzeko gaitasuna, aurrez entseatua: har baten aurrean, eusteko abiadurak azterketarenak baino gehiago balio du.

---

## 2. Ghostware

**Aztarnarik gabeko malwarea** · Larritasuna: Altua

> Ikertzen denerako, ez dago jada ikertzeko ezer.

### Definizioa

Bere helburua bete ondoren existitu izanaren frogarik gera ez dadin diseinatutako malwarea. Ez da rootkit batek bezala jardun bitartean ezkutatzera mugatzen: zantzuak aktiboki ezabatzen ditu —erregistro-sarrerak, diskoko aztarnak, denbora-markak— eta erretiratu egiten da. Bere helburua ez da iraunkortasuna, gertakaria bera ukatzea baizik.

### Nola funtzionatzen duen

1. Ahalik eta aztarna txikienarekin exekutatzea: kasu askotan memorian soilik, diskoan fitxategirik idatzi gabe.
2. Sistemaren beraren administrazio-tresnak erabiltzea bere zereginetarako, jarduera lan normalarekin nahas dadin.
3. Helburua betetzea: datu multzo jakin bat ateratzea edo sabotaje puntual bat, beti denboran mugatua.
4. Garbiketa: sortutako erregistro-sarrerak hautatuz ezabatzea, denbora-markak leheneratzea eta sortutako aldi baterako fitxategiak kentzea.
5. Erretiratzea: prozesua amaitu egiten da eta ez du iraunkortasun-mekanismorik uzten; berrabiarazte batek memoriako azken arrastoa ezabatzen du.

### Eraso-bektorea

- Script batetik abiatuta memorian soilik exekutatzea, gero aztertzeko fitxategirik gera ez dadin.
- Sisteman dagoeneko dauden administrazio-utilitate legitimoak gaizki erabiltzea, inolako susmorik pizten ez dutenak.
- Erregistroak hautatuz ezabatzea hustuketa osoa egin beharrean, erregistro huts batek seinale argia baitakar.
- Fitxategien denbora-markak aldatzea, sistemaren jatorrizko instalazioarenekin bat etor daitezen.

### Adibide argigarria — Urdaibai Bioteknologia

*Bioteknologia · 2025*

2025eko ekainean, Urdaibai Bioteknologiak lehiaketa publiko bat galtzen du tarte txiki batengatik, teknikoki oso antzeko proposamen bat aurkezten duen lehiakide baten aurrean. Ez dago segurtasun-alertarik, ez fitxategi susmagarririk, ez erregistratutako sarbide anomalorik.

Ondorengo berrikuspenak inkoherentzia bakar bat aurkitzen du: proiektuen zerbitzarian, segurtasun-gertaeren erregistroak berrogei minutuko zuloa du apirileko goizalde batean. Ez dago hutsik —horrek berehala erakarriko baitzuen arreta—, besterik gabe ez dago sarrerarik tarte horretan, sistemaren erregistroak normaltasunez jarraitzen duen bitartean.

Zulo hori da sarreraren froga bakarra. Ez zen sarrera-metodoa berreskuratu ez erabilitako tresna identifikatu, ez baitzen haren ezer geratu diskoan. Enpresak bere erregistro-politika aldatu zuen hurrengo egunean: harrezkero denbora errealean bidaltzen dira administratzaile batek ere ezaba ez ditzakeen zerbitzari batera.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Bere ohiko helburua informazio jakin eta balio handikoa modu zuzenduan ateratzea da. |
| Osotasuna | Bai | Sistemaren erregistroak aldatzen ditu, hain zuzen edozein ikerketa oinarritzen den datuak. |
| Erabilgarritasuna | Ez | Zerbitzua etetea bere diseinuaren kontrakoa litzateke: garbi utzi nahi duen ekipoaren gainera erakarriko luke arreta. |
| Autentikazioa | Bai | Aurretik lortutako kredentzial pribilegiatuekin jarduten du, dagoeneko ezarritako saio legitimoak aprobetxatuz. |
| Ez-arbuiatzea | Bai | Bere efektu bereizgarriena da: trazabilitatea suntsitzen du gertakaririk egon zela frogatzea eragozteraino. |

### Defentsa

- Erregistroak denbora errealean bidaltzea gehitze hutsezko kanpoko sistema batera, jatorrizko ekipoaren administratzailearen eskumenetik kanpo.
- Erregistroen jarraitutasuna zaintzea: denbora-zulo bat sarrera susmagarri bat bezain esanguratsua da.
- Memoriako portaeraren araberako detekzioa, diskoan lotutako fitxategirik gabe exekutatzen den script bat ikusteko gai dena.
- Sistemaren administrazio-utilitateen erabilera erregistratzea, inoiz erabiltzen ez dituzten ekipoetan agertzen direnean alerta emanez.
- Sistemaren fitxategien denbora-marken eta laburpenen oinarri-lerro bat gordetzea, leheneratze artifizialak detektatzeko.

---

## 3. RAT

**Urruneko sarbide-troiarra** · Larritasuna: Kritikoa

> Beste norbait dago zure ekipoaren aurrean eserita.

### Definizioa

Erasotzaileari kutsatutako ekipoaren gaineko kontrol interaktiboa eta denbora errealekoa ematen dion troiarra: fitxategi-sistema, kamera, mikrofonoa, teklatua, pantaila eta sarea. Malware automatizatuarekiko aldea nabarmena da: hemen pertsona bat dago beste aldean, ikusten duenaren arabera erabakiak hartzen.

### Nola funtzionatzen duen

1. Instalazioa troiar baten, exploit baten edo ekiporako minutu gutxiko sarbide fisiko baten bidez.
2. Alderantzizko konexioa: agenteak berak abiarazten du konexioa erasotzailearen zerbitzarirantz, beraz ez da beharrezkoa biktimaren suebakian sarrerako atakarik irekitzea.
3. Kanal estalia: trafikoa zifratu eta ohiko atakatik bidaltzen da, normalean 443tik, ohiko web trafikotzat igarotzeko.
4. Kontrol interaktiboa: operadoreak karpetak arakatzen ditu, pantaila kapturatzen du, kamera aktibatzen du edo aginduak abiarazten ditu, aurkitzen duenera egokituz.
5. Hedapena: beste tresna batzuk zabaltzen ditu, kredentzialak lapurtzen ditu eta sareko gainerako ekipoetara salto egiten du, dagoeneko barne posizio batetik.

### Eraso-bektorea

- Urruneko laguntzarako tresna legitimo gisa aurkeztutako eranskinak eta deskargak.
- Lan-eskaintza faltsuak, ekipo pertsonalean exekutatu behar den proba tekniko batekin.
- Zaindu gabe eta desblokeatuta dagoen ekipo baterako minutu gutxiko sarbide fisikoa.
- Urruneko kontrolerako aplikazio errealak, haiek kudeatzen dituen kontuaren kredentzialak lortu ondoren modu abusuzkoan erabiliak.

### Adibide argigarria — Lauaxeta Argitaletxea

*Argitalpena eta komunikabideak · 2024*

2024ko urrian, Lauaxeta Argitaletxeko kazetari batek lankidetza-eskaintza bat jasotzen du, mezuaren arabera proiektu baten gidoia daukan eranskin batekin. Fitxategiak urruneko sarbideko agente bat instalatzen du eta ondoren benetako dokumentu bat erakusten du, jasotako eskaintzarekin bat datorrena.

Hiru astez, operadorea lan-ordutegian bakarrik konektatzen da, beste konexio batzuen artean tartekatuta, eta inoiz ez hogei minutu jarraian baino gehiago. Lan-karpetak berrikusten ditu, iturrien zerrenda bat kopiatzen du eta kamera bi aldiz aktibatzen du barne bileretan.

Detekzioa zeharkako bide batetik iristen da: ekipoa aktibo gisa ageri da fitxategi-zerbitzariaren erregistroan, erabiltzailea lekukoak zituen ekitaldi publiko batean zegoen ordu batean. Kointzidentzia hori gabe, 443 atakatik zifratutako kanalak ohiko web trafikotik bereizi ezina izaten jarraituko zuen.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Operadoreak pantaila eta fitxategiak ikusten ditu eta, hala erabakiz gero, inguru fisikoa kameraren eta mikrofonoaren bidez. |
| Osotasuna | Bai | Kontrol interaktibo osoa du ekipoan edozer sortu, aldatu edo ezabatzeko. |
| Erabilgarritasuna | Ez | Giza operadore batek hondatze nabarmen oro saihesten du: biktimak erabateko normaltasunez lanean jarraitzea komeni zaio. |
| Autentikazioa | Bai | Biktimaren dagoeneko hasitako saioaren barruan jarduten du, haren nortasuna heredatuz kredentzialik behar izan gabe. |
| Ez-arbuiatzea | Bai | Ekintza oro erabiltzailearen izenean geratzen da erregistratuta, ireki ere egin ez zituen dokumentuetarako sarbideak barne. |

### Defentsa

- Irteerako trafikoaren kontrola helmuga aztertuta: 443 atakatik helbide ezezagun batera doan konexio iraunkor bat anomaloa da, zifratuta joanda ere.
- Urruneko mahaigainaren eta pantaila-kapturaren funtzioen portaeraren araberako detekzioa, erabili behar ez luketen prozesuetan.
- Kamera aktibo dagoela adierazten duen seinale fisikoa, eta erabiltzen ari ez denean objektiboa estaltzeko politika.
- Saioaren blokeo automatikoa jarduerarik ezagatik tarte laburrean, sarbide fisikoaren aukera-tartea ixten duena.
- Baimendutako urruneko laguntza-tresnen katalogo itxia eta gainerako guztien blokeoa, onartu gabeko legitimoak barne.

---

## 4. Polymorphic Malware

**Kode aldakorreko malwarea** · Larritasuna: Altua

> Kopia bakoitza desberdina da. Portaera, ez.

### Definizioa

Kutsatze edo exekuzio bakoitzean bere kodea aldatzen duen malwarea; ondorioz, fitxategia inoiz ez da berdina eta haren edukian oinarritutako sinadura batek ere ez du bi aldiz ezagutzen. Aldatzen dena forma da; azkenean exekutatzen duen funtzioa beti bera da.

### Nola funtzionatzen duen

1. Mutazio-motorraren eta karga erabilgarriaren arteko bereizketa: karga egonkor mantentzen da eta motorrak estalki desberdinak sortzen ditu kopia bakoitzerako.
2. Karga gako berri batekin zifratzea aldi bakoitzean, zifratutako edukia bi fitxategiren artean inoiz errepika ez dadin.
3. Deszifratzaile desberdin bat sortzea: aginduak berrantolatzen dira, eragiketa alferrikakoak txertatzen dira eta erabilitako erregistroak aldatzen dira.
4. Entregatzea: biktima bakoitzak laburpen kriptografiko bakarra duen fitxategi bat jasotzen du, mehatxu ezagunen zerrenda batean ere inoiz agertu ez dena.
5. Exekuzioa: memorian dagoeneko, deszifratzaileak beti karga bera berreraikitzen du, eta hor bertan da portaera berriro ezagungarri.

### Eraso-bektorea

- Banaketa masiboa deskarga bakoitzeko kopia bakar bat sortuz, laburpen ezagunen edozein zerrenda baliogabetzen duena.
- Paketatzaile eta lausotzaile komertzialak, dagoeneko existitzen den malware bati geruza berri bat gehitzen diotenak bere logika ukitu gabe.
- Aldaera metamorfikoa: karga erabilgarria bera ere berridazten du, deszifratzailerik behar izan gabe, eta horrek memoriako azterketa ere zailtzen du.
- Aldaerak eskaeraren arabera sortzea entregatzeko unean, biktiman detektatutako sistema eragilera egokituta.

### Adibide argigarria — Zaldibar Farmazia Banaketa

*Farmazia banaketa · 2026*

2026ko urtarrilaren eta martxoaren artean, Zaldibar Farmazia Banaketak bidalketa-agiri bat dirudien eranskina duten ehun eta berrogei posta jasotzen ditu. Perimetroko antibirusak ez du bat ere blokeatzen: fitxategi bakoitzak laburpen kriptografiko desberdina du eta bat ere ez dago mehatxu ezagunen zerrendetan.

Ehun eta berrogei fitxategiek 180 eta 210 kilobyte artean pisatzen dute eta haien barne egitura erabat desberdina da. Exekutatzean, ordea, gauza bera egiten dute zehazki, eta ordena berean: bizitza laburreko dominio bat galdekatzen dute, ausazko izena duen zeregin programatu bat sortzen dute eta aldi baterako karpetatik prozesu seme bat abiarazten dute.

Detekzioa fitxategiak alderatzeari utzi eta portaerak alderatzen hasten direnean iristen da. Galdeketa, zeregin programatua eta aldi baterako karpetatik abiatutako prozesu semearen sekuentziaren aurrean alerta ematen duen arau batek ehun eta berrogei kasuak identifikatzen ditu, eta baita inor ohartu gabe exekutatu ziren hemezortziak ere.

> Mekanismoa azaltzeko eraikitako fikziozko egoera. Ez erakundea ez gertaerak ez dira errealak.

### Segurtasunaren propietateen gaineko inpaktua

| Propietatea | Arriskuan geratzen da? | Justifikazioa |
| --- | :---: | --- |
| Konfidentzialtasuna | Bai | Daraman karga stealer bat edo troiar bat izan ohi da, beraz informazioaren lapurreta da ohiko amaiera. |
| Osotasuna | Bai | Sisteman instalatzen da eta bere abio-konfigurazioa aldatzen du geroko exekuzioa ziurtatzeko. |
| Erabilgarritasuna | Ez | Polimorfismoa saihesteko teknika bat da, ez kalte egitekoa: berez ez du zerbitzurik eteten. |
| Autentikazioa | Ez | Ez du nortasun-kontrola erasotzen; bilatzen duena defentsak ez ezagutzea da, ez inor ordezkatzea. |
| Ez-arbuiatzea | Ez | Ez ditu erregistroak manipulatzen: bere efektua detekzioa atzeratzea da, ez gero gertatzen denaren arrastoa ezabatzea. |

### Defentsa

- Portaeraren araberako detekzioa eta ez sinaduraren araberakoa: ekintzen sekuentziak egonkor irauten du fitxategia kopia bakoitzean aldatzen bada ere.
- Entregatu aurretiko azterketa ingurune isolatuan, fitxategiak zer egiten duen behatzen duena eta ez zer itxura duen.
- Baimendutako aplikazioen zerrendak, arazoa alderantzikatzen dutenak: txarra ezagutu beharrean, ezaguna dena bakarrik baimentzen da.
- Sareko adierazleak irizpide osagarri gisa: berriki erregistratutako edo bizitza oso laburreko dominioek familia osoak salatzen dituzte.
- Exekuzio-azalera murriztea: exekutagarriak blokeatzea aldi baterako eta deskargen karpetetan, non software legitimo batek ere ez bailuke abiarazi behar.

---

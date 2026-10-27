/**
 * Orri bakoitzaren eragina (bost segurtasun-propietateak) eta egilearen iritzia.
 *
 * Gakoa `atala/slug` da. Orri batek sarrerarik ez badu, `lortuEragina`k
 * errorea ematen du eta webgunea ez da eraikitzen: ezin da ahaztu.
 */

export const PROPIETATEAK = [
  { id: 'konfidentzialtasuna', izena: 'Konfidentzialtasuna' },
  { id: 'osotasuna', izena: 'Osotasuna' },
  { id: 'erabilgarritasuna', izena: 'Erabilgarritasuna' },
  { id: 'autentikazioa', izena: 'Autentikazioa' },
  { id: 'ezArbuiatzea', izena: 'Ez-arbuiatzea' },
] as const;

export type PropietateId = (typeof PROPIETATEAK)[number]['id'];

export interface Ardatza {
  arriskuan: boolean;
  zergatik: string;
}

export interface OrriarenEragina {
  eragina: Record<PropietateId, Ardatza>;
  /** Egilearen iritzia: laburra, lehen pertsonan. */
  iritzia: string[];
}

const B = (zergatik: string): Ardatza => ({ arriskuan: true, zergatik });
const E = (zergatik: string): Ardatza => ({ arriskuan: false, zergatik });

const DATUAK: Record<string, OrriarenEragina> = {
  /* ------------------------------ 1. unitatea ----------------------------- */
  '1ud/phishinga': {
    eragina: {
      konfidentzialtasuna: B('Lapurtutako pasahitzarekin, erasotzaileak zure posta eta kontu horri lotutako zerbitzu guztiak irakur ditzake.'),
      osotasuna: B('Kontuan sartuta, mezuak, arauak edo fakturen banku-datuak alda ditzake.'),
      erabilgarritasuna: E('Zerbitzuak normal jarraitzen du: erasotzaileari ez zaio komeni ezer gelditzea.'),
      autentikazioa: B('Sistemak erasotzailea onartzen du, pasahitz zuzena duelako.'),
      ezArbuiatzea: B('Erasotzaileak egiten duen guztia zure izenean geratzen da, eta zaila da zu ez zinela frogatzea.'),
    },
    iritzia: [
      'Lehen pentsatzen nuen phishingean inozoak bakarrik erortzen zirela. Gero, nire amak SMS bat jaso zuen «Correos»-en izenean, pakete bat bidaltzeko bi euro ordaintzeko eskatuz, eta ia ordaindu zuen.',
      'Orduan konturatu nintzen ez dela tontoa izatearen kontua: presaka zaudenean, edonork egiten du klik. Orain etxean arau bat dugu: mezu batek dirua eskatzen badu, lehenik deitu eta galdetu.',
    ],
  },
  '1ud/mitm': {
    eragina: {
      konfidentzialtasuna: B('Bi aldeen artean doan guztia irakurtzen du: pasahitzak, saio-cookieak eta mezuak.'),
      osotasuna: B('Mezuak bidean alda ditzake, eta jasotzaileak ez du jakingo jatorrizkoa ez dela.'),
      erabilgarritasuna: E('Komunikazioak normal funtzionatu behar du; bestela, biktimak zerbait arraroa dagoela susmatuko luke.'),
      autentikazioa: B('Ziurtagiri faltsuarekin, nabigatzaileak benetako webgunea dela uste du. DigiNotarren kasuan, Google zela.'),
      ezArbuiatzea: B('Aldatutako mezu batek bidaltzailearena dirudi, eta gero zaila da frogatzea nork idatzi zuen benetan.'),
    },
    iritzia: [
      'Gai honek beldur pixka bat eman dit, ez delako ezer ikusten. Lehen, edozein kafetegitako wifira konektatzen nintzen pentsatu gabe, eta Instagramen edo posta irekitzen nuen bertatik.',
      'DigiNotarren kasuak harritu ninduen gehien: giltzarrapoa ere gezurra izan daiteke, ziurtagiria ematen duena erasotzen badute. Orain, kanpoan nagoenean, mugikorreko datuak erabiltzen ditut garrantzitsua den guztirako.',
    ],
  },
  '1ud/birusak': {
    eragina: {
      konfidentzialtasuna: E('Birus klasiko baten helburua kaltea egitea da, ez datuak lapurtzea; batzuek, hala ere, karga gehigarria eraman dezakete.'),
      osotasuna: B('Fitxategiak aldatzen ditu bertan txertatzeko, eta batzuetan hondatu edo ezabatu egiten ditu.'),
      erabilgarritasuna: B('Sistema moteltzen du edo erabilezin uzten du. Melissak posta-zerbitzariak itzaltzera behartu zituen.'),
      autentikazioa: E('Ez du inoren nortasuna ordezkatzen: fitxategia irekitzen duzunean exekutatzen da, besterik gabe.'),
      ezArbuiatzea: B('Birus batzuek zure izenean bidaltzen dituzte mezuak. Melissaren kasuan, hartzaileek uste zuten zuk bidali zeniela.'),
    },
    iritzia: [
      'Melissaren istorioak harritu ninduen, ez zelako kode konplexua: Word makro bat besterik ez zen. Hala ere, enpresa handiak gelditzea lortu zuen.',
      'Iruditzen zait birusak zaharkituta daudela pentsatzen dugula, eta horregatik ez diegula kasurik egiten eranskinei. Nik, gaur egun ere, bi aldiz pentsatzen dut USB arrotz bat konektatu aurretik.',
    ],
  },
  '1ud/troiarrak': {
    eragina: {
      konfidentzialtasuna: B('Zure baimenekin exekutatzen da, eta zuk ikus dezakezun guztia ikus dezake.'),
      osotasuna: B('Fitxategiak, konfigurazioa eta beste programak alda ditzake.'),
      erabilgarritasuna: E('Ez du ordenagailua moteltzen: nabarituko bazenu, ezabatu egingo zenuke.'),
      autentikazioa: B('Zure saioaren barruan dabil, beraz zure nortasuna erabiltzen du pasahitzik behar gabe.'),
      ezArbuiatzea: B('Egiten duena zuri egozten zaizu, zuk agindu ez bazenuen ere.'),
    },
    iritzia: [
      'Klasean joko piratei buruz hitz egin genuenean, gelaren erdia isildu egin zen. Nik ere deskargatu izan ditut horrelako gauzak.',
      'Zeusen kasua irakurrita ulertu dut zergatik den hain arriskutsua: programak funtzionatu egiten du, eta horregatik ez duzu ezer susmatzen. Zerbait doakoa denean, askotan zu zara ordaintzen duena.',
    ],
  },
  '1ud/backdoorrak': {
    eragina: {
      konfidentzialtasuna: B('Atzeko atetik sartzen denak sistemako datu guztiak ikus ditzake.'),
      osotasuna: B('Nahi duenean itzul daitekeenak edozer alda dezake, erregistroak barne.'),
      erabilgarritasuna: E('Atzeko ateak sistema martxan behar du baliagarria izaten jarraitzeko.'),
      autentikazioa: B('Hori da bere definizioa: ohiko autentikazioa saltatzen du.'),
      ezArbuiatzea: B('Kontu legitimoak erabiltzen ditu, eta erregistroek ezertan parte hartu ez zuen norbait seinalatzen dute.'),
    },
    iritzia: [
      'XZ-ren kasua da gida osoan gehien harritu nauena. Norbaitek bi urte eman zituen proiektu batean laguntzen, konfiantza irabazteko bakarrik. Eta ingeniari batek aurkitu zuen, SSHa apur bat motelago zebilelako.',
      'Horrek pentsarazi dit segurtasuna ez dela tresnak bakarrik: zerbait arraroa ikusten duzunean «zergatik?» galdetzea ere bada.',
    ],
  },
  '1ud/spywarea': {
    eragina: {
      konfidentzialtasuna: B('Hori da bere helburua: ez dagokion informazioa ateratzea.'),
      osotasuna: E('Begiratu bai, baina ez du ezer aldatzen; aldatzeak salatuko luke.'),
      erabilgarritasuna: E('Baliabide gutxi erabiltzen ditu, inork nabari ez dezan.'),
      autentikazioa: B('Sakatutako teklak erregistratzen baditu, zure pasahitzak eta, beraz, zure nortasuna lapurtzen ditu.'),
      ezArbuiatzea: E('Berez ez du ezer egiten zure izenean; arriskua lapurtutako datuak gero erabiltzean dator.'),
    },
    iritzia: [
      'Pegasusi buruz irakurri ondoren, telefonoko aplikazioen baimenak berrikusi nituen, eta lotsatu egin nintzen: linterna-aplikazio batek kokapena eskatzen zuen.',
      'Ez naiz kazetaria ez politikaria, eta ez dut uste inork zaindu nahi nauenik. Baina horrek ez du esan nahi nire datuek baliorik ez dutenik. Orain «Ukatu» sakatzen dut lehenik, eta benetan behar badu, gero ematen diot baimena.',
    ],
  },
  '1ud/stealerrak': {
    eragina: {
      konfidentzialtasuna: B('Pasahitzak, cookieak eta kriptomoneta-zorroak blokean eramaten ditu.'),
      osotasuna: E('Ez du ekipoa aldatzen; kaltea geroago dator, zure kontuetan.'),
      erabilgarritasuna: E('Segundo gutxitan amaitzen da, eta ez duzu ezer nabaritzen.'),
      autentikazioa: B('Lapurtutako cookieekin zure kontuetan sar daitezke, pasahitzik eta bigarren urratsik gabe.'),
      ezArbuiatzea: B('Saio horiekin egiten den guztia zure izenean geratzen da.'),
    },
    iritzia: [
      'Hau irakurri arte, nabigatzailean gordetzen nituen pasahitz guztiak, erosoagoa delako. Lumma bezalako programa batek segundo gutxitan eraman ditzake denak.',
      'Pasahitz-kudeatzaile bat instalatu dut. Lehen astean alferkeria eman zidan, egia esan, baina orain ez nuke atzera egingo.',
    ],
  },

  /* ------------------------------ 2. unitatea ----------------------------- */
  '2ud/koobface': {
    eragina: {
      konfidentzialtasuna: B('Hartutako kontuek elkarrizketa pribatuetara eta kontaktu-zerrenda osoetara ematen dute sarbidea.'),
      osotasuna: B('Erasotzaileak zure izenean argitaratzen eta bidaltzen du edukia.'),
      erabilgarritasuna: E('Sare soziala ez da eteten; kontua blokeatzen bada, ondorengo euspen-neurriengatik da, ez harragatik.'),
      autentikazioa: B('Mezu bakoitza kontu legitimo batetik irteten da, baina kontrola beste norbaitek du.'),
      ezArbuiatzea: B('Mezuak zuk bidalitakoak dirudite, eta zaila da zure lagunei kontrakoa frogatzea.'),
    },
    iritzia: [
      'Koobfacek ondo erakusten du zergatik funtzionatzen duen: mezua ez dator ezezagun batengandik, lagun batengandik baizik. Egia esan, nik ere sakatuko nuke «begira zein barregarri ateratzen zaren» bezalako mezu bat.',
      'Orain, lagun batek esteka arraro bat bidaltzen didanean, WhatsAppez galdetzen diot berak bidali duen. Batzuek barre egiten dute, baina hobe horrela.',
    ],
  },
  '2ud/botnet': {
    eragina: {
      konfidentzialtasuna: B('Erasotzaileak kutsatutako gailuak eta haietatik pasatzen den trafikoa kontrola ditzake.'),
      osotasuna: B('Gailuaren konfigurazioa aldatzen du bertan irauteko.'),
      erabilgarritasuna: B('DDoS erasoekin zerbitzuak erortzen ditu, eta zure gailuaren baliabideak ere kontsumitzen ditu.'),
      autentikazioa: B('Fabrikako edo lapurtutako pasahitzekin sartzen da, gailuak baliozkotzat hartzen dituenak.'),
      ezArbuiatzea: B('Erasoak zure gailutik irteten dira, eta zu agertzen zara erantzule gisa.'),
    },
    iritzia: [
      'Mirairen kasuan gehien harritu ninduena: ez zuen ordenagailurik behar, kamera merkeak eta routerrak nahikoa ziren.',
      'Etxera iritsi eta routerraren pasahitza begiratu nuen: fabrikakoa zen oraindik, azpiko eranskailuan idatzita zegoena. Aldatu egin dut. Bost minutuko lana izan zen, eta urteak neramatzan egin gabe.',
    ],
  },
  '2ud/indar-gordineko-erasoa': {
    eragina: {
      konfidentzialtasuna: B('Pasahitza asmatuz gero, kontuko informazio guztia ikus dezakete.'),
      osotasuna: B('Kontuan sartuta, zuk egin dezakezun guztia egin dezakete: aldatu, ezabatu, argitaratu.'),
      erabilgarritasuna: E('Isilik sartzea bilatzen du; eraso trakets batek bakarrik blokeatzen ditu kontuak.'),
      autentikazioa: B('Zuzenean erasotzen du autentikazioa: pasahitza asmatzen du, jakin gabe.'),
      ezArbuiatzea: B('Barruan dagoenean, egiten duen guztia zure izenean geratzen da.'),
    },
    iritzia: [
      'Klasean kalkulatu genuen zenbat denbora behar den pasahitz labur bat asmatzeko, eta harrituta geratu nintzen. Nirea, txakurraren izena gehi jaiotze-urtea, minutu gutxitan eroriko zen.',
      'Orain esaldi luzeak erabiltzen ditut, nik bakarrik ulertzen ditudan hitz arraroekin, eta bi urratseko egiaztapena dut kontu garrantzitsuenetan.',
    ],
  },

  /* ------------------------------ 3. unitatea ----------------------------- */
  '3ud/atzeko-ateak': {
    eragina: {
      konfidentzialtasuna: B('Atzeko atetik sartzen denak sistemako datuak ikus ditzake; Juniperren kasuan, baita VPN trafikoa ere.'),
      osotasuna: B('Administratzaile gisa sartuta, konfigurazioa eta erregistroak alda ditzake.'),
      erabilgarritasuna: E('Gailuak normal jarraitu behar du, atea ezkutuan egon dadin.'),
      autentikazioa: B('Pasahitz sekretu batekin autentikazioa saltatzen du.'),
      ezArbuiatzea: B('Sarrera legitimo baten itxura du, eta ezin da jakin nork egin duen zer.'),
    },
    iritzia: [
      'Juniperren kasua beldurgarria iruditzen zait, babesteko gailua bera zelako atea. Pentsa: suebaki bat erosten duzu seguruago egoteko, eta hain zuzen hori da sarbidea.',
      'Hortik ikasi dut segurtasun aktiboa ez dela «instalatu eta ahaztu». Berrikusi, begiratu eta zalantzan jarri behar da, baita konfiantza handiena ematen dizuna ere.',
    ],
  },
  '3ud/botnetak': {
    eragina: {
      konfidentzialtasuna: B('Botak kontrolatzen dituenak gailuetako informazioa eta trafikoa eskura ditzake.'),
      osotasuna: B('Botak beste malware batzuk instalatzeko erabiltzen dira, Emotetek egiten zuen bezala.'),
      erabilgarritasuna: B('Botnetak eraso handiak eragiten ditu eta gailu kutsatuen baliabideak kontsumitzen ditu.'),
      autentikazioa: B('Emotetek kutsatutako kontuetatik bidaltzen zituen posta faltsuak, benetakoak zirudien izenekin.'),
      ezArbuiatzea: B('Erasoak biktimen gailuetatik irteten dira, eta haiek agertzen dira egile gisa.'),
    },
    iritzia: [
      'Emotetek irakatsi didana da segurtasuna ez dela norbanakoaren kontua bakarrik. Ordenagailuak banan-banan garbitzea ezinezkoa zen; zortzi herrialdetako poliziek elkarrekin lan egin behar izan zuten burua mozteko.',
      'Eta amaiera da zatirik politena: botnetaren arma bera erabili zuten, eguneratze bat, hura desinstalatzeko.',
    ],
  },
  '3ud/harrak': {
    eragina: {
      konfidentzialtasuna: E('Harraren helburua hedatzea da; datuak lapurtzeko, karga gehigarri bat behar du.'),
      osotasuna: B('Iristen den ekipo bakoitza aldatzen du bertan instalatzeko.'),
      erabilgarritasuna: B('Hedatzean sarea eta ekipoak asetzen ditu, eta zerbitzuak gelditu ditzake.'),
      autentikazioa: B('Pasahitz ahulak probatuz edo ahultasunak aprobetxatuz sartzen da, sarbide-kontrola saltatuz.'),
      ezArbuiatzea: E('Bere kabuz hedatzen da: ez du ezer egiten erabiltzaile jakin baten izenean.'),
    },
    iritzia: [
      'Conficker irakurtzean pentsatu nuen: adabakia hilabete lehenago zegoen, eta hala ere milioika ordenagailu kutsatu ziren. Nik ere «gero eguneratuko dut» esaten dut beti, ordenagailuak berrabiarazteko eskatzen didanean.',
      'Harrek ez dute zure zain itxaroten. Orain eguneratzeak gauerako programatuta ditut, ez ahazteko.',
    ],
  },
  '3ud/mamuak': {
    eragina: {
      konfidentzialtasuna: B('Informazio jakin eta baliotsua lapurtzea du helburu, Duqu 2.0k espioitzan egiten zuen bezala.'),
      osotasuna: B('Erregistroak ezabatu eta aldatu egiten ditu, ikerketak behar dituen datuak hain zuzen.'),
      erabilgarritasuna: E('Ez du ezer gelditzen: ikusezina izatea da bere helburua.'),
      autentikazioa: B('Aurretik lortutako kredentzial pribilegiatuekin jarduten du.'),
      ezArbuiatzea: B('Arrastoak ezabatzean, ezin da frogatu nork egin zuen zer, ezta erasorik egon zela ere.'),
    },
    iritzia: [
      'Gai honek paranoiko samar bihurtu nau. Segurtasun-enpresa batek, Kasperskyk, mamu bat izan zuen bere sare propioan denbora batez. Profesionalenei gertatzen bazaie, edonori gerta dakioke.',
      'Ikasi dudana: erregistroak beste leku batera bidaltzea ez da xehetasun tekniko bat. Gertatutakoa kontatu ahal izateko modu bakarra da.',
    ],
  },
  '3ud/troiarrak': {
    eragina: {
      konfidentzialtasuna: B('Kutsatutako ordenagailuetako informazioa bidaltzen zion erasotzaileari.'),
      osotasuna: B('Programa ofiziala aldatu zuten, eta helburu batzuetan bigarren malware bat instalatzen zuen.'),
      erabilgarritasuna: E('CCleanerrek normal funtzionatzen zuen; inork ez zuen ezer arraroa nabaritu.'),
      autentikazioa: B('Sinadura digital zuzena zuen, beraz sistemak benetako programa zela uste zuen.'),
      ezArbuiatzea: B('Enpresaren sinadurarekin zetorrenez, erasoa enpresaren beraren lana zirudien.'),
    },
    iritzia: [
      'CCleanerren kasuak nire arau nagusia apurtu zuen: «deskargatu beti webgune ofizialetik». Hori bera egin zuten 2,27 milioi pertsonek, eta hala ere kutsatu ziren.',
      'Ez dut esango arau hori alferrikakoa denik, oraindik garrantzitsua da. Baina ulertu dut ez dela nahikoa, eta horretarako dagoela segurtasun aktiboa: zerbait gaizki ateratzen denean, portaera arraroa garaiz antzemateko.',
    ],
  },

  /* ----------------------------- Zibererasoak ----------------------------- */
  'zibererasoak/stuxnet': {
    eragina: {
      konfidentzialtasuna: B('Kutsatutako sistemei buruzko informazioa bidaltzen zien kontrol-zerbitzariei, nahiz eta bere helburu nagusia ez zen datuak lapurtzea.'),
      osotasuna: B('Zentrifugagailuak kontrolatzen zituen programak aldatu zituen, eta operadoreei datu faltsuak erakusten zizkien.'),
      erabilgarritasuna: B('1.000 makina inguru suntsitu zituen eta aberastegiaren lana atzeratu zuen.'),
      autentikazioa: B('Benetako sinadura digital lapurtuak erabili zituen, Windowsek programa fidagarritzat har zezan.'),
      ezArbuiatzea: B('Pantailek ez zuten benetan gertatzen zena erakusten, eta egileek erasoa ukatu ahal izan dute: inork ez du ofizialki aitortu.'),
    },
    iritzia: [
      'Stuxnet da gidako erasorik «zinematografikoena», baina niri gehien inpresionatu didana xehetasun txiki bat da: teknikariek pantailetan dena ondo zegoela ikusten zuten bitartean, makinak hondatzen ari ziren.',
      'Bi gauza atera ditut hemendik. Ez fidatu itsu-itsuan sistemak berak esaten dizunaz. Eta Internetetik deskonektatuta egoteak ez zaitu salbatzen: USB batek nahikoa du.',
    ],
  },
  'zibererasoak/solarwinds': {
    eragina: {
      konfidentzialtasuna: B('Erasotzaileek AEBetako agentzien eta enpresen posta eta dokumentuak irakurri zituzten.'),
      osotasuna: B('Orion programaren eguneratze ofiziala aldatu zuten, atzeko atea txertatzeko.'),
      erabilgarritasuna: E('Orionek normal funtzionatzen zuen; ezkutuan egotea zen helburua.'),
      autentikazioa: B('Eguneratzea benetako sinadurarekin zetorren, eta sistemek fidagarritzat hartu zuten.'),
      ezArbuiatzea: B('Trafikoa Orionen trafiko arruntaren itxurarekin mozorrotzen zen, eta zaila izan zen zer egin zuten jakitea.'),
    },
    iritzia: [
      'SolarWinds aukeratu nuen ez delako ohiko erasoa. Ez zuten bezeroak engainatu, haien hornitzailea baizik: bezeroek ondo egin zuten dena, eguneratzea instalatu, eta hala ere erori ziren.',
      'Pentsatzen jarri nau zenbat programaz fidatzen garen egunero, nork egin dituen jakin gabe. Ez dut erantzunik, baina orain hobeto ulertzen dut zergatik den garrantzitsua kanpora doan trafikoa zaintzea.',
    ],
  },
};

export function lortuEragina(atala: string, slug: string): OrriarenEragina {
  const datuak = DATUAK[`${atala}/${slug}`];
  if (!datuak) throw new Error(`Eraginik eta iritzirik gabeko orria: ${atala}/${slug}`);
  return datuak;
}

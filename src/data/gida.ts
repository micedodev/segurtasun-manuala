/**
 * Gidaren eduki osoa: lau atal, gai bakoitza egitura berarekin.
 *
 * Gai guztiek bost bloke dituzte, beti ordena berean, ikasleak gaiak
 * erraz alderatu ahal izateko:
 *   Zer den · Nola funtzionatzen du · Adibidea · Nola babestu · Gogoratu
 *
 * Adibide guztiak benetako kasuak dira, eta bakoitzak bere iturria du.
 */

export interface Iturria {
  izena: string;
  url: string;
}

export interface Gaia {
  slug: string;
  izena: string;
  /** Kategoria laburra, izenaren azpian agertzen dena. */
  etiketa: string;
  /** Esaldi bakarra: hasierako zerrendan eta orriaren goiburuan. */
  laburpena: string;
  zerDen: string;
  urratsak: string[];
  adibidea: {
    izenburua: string;
    urtea: string;
    testua: string;
    iturria: Iturria;
  };
  babesa: string[];
  gogoratu: string;
}

export interface Ezaugarria {
  izena: string;
  balioa: string;
}

export interface Kasua {
  slug: string;
  izena: string;
  urtea: string;
  etiketa: string;
  laburpena: string;
  gertatua: string[];
  urratsak: string[];
  ezaugarriak: Ezaugarria[];
  ondorioak: string[];
  iturriak: Iturria[];
}

export type AtalId = '1ud' | '2ud' | '3ud' | 'zibererasoak';

interface AtalOinarria {
  id: AtalId;
  /** Nabigazioan eta ogi-apurretan agertzen den izen laburra. */
  laburra: string;
  izenburua: string;
  sarrera: string;
}

export interface GaiAtala extends AtalOinarria {
  mota: 'gaiak';
  gaiak: Gaia[];
}

export interface KasuAtala extends AtalOinarria {
  mota: 'kasuak';
  kasuak: Kasua[];
}

export type Atala = GaiAtala | KasuAtala;

/* -------------------------------------------------------------------------- */
/*  1. unitatea                                                               */
/* -------------------------------------------------------------------------- */

const ud1: GaiAtala = {
  id: '1ud',
  mota: 'gaiak',
  laburra: '1. unitatea',
  izenburua: 'Segurtasunaren sarrera',
  sarrera:
    'Erasotzaileek gehien erabiltzen dituzten tresnak: zu engainatzeko, zure ekipoan sartzeko eta zure datuak eramateko.',
  gaiak: [
    {
      slug: 'phishinga',
      izena: 'Phishinga',
      etiketa: 'Iruzur digitala',
      laburpena: 'Mezu faltsu batek zure pasahitza edo datuak ematera bultzatzen zaitu.',
      zerDen:
        'Phishinga iruzur-teknika bat da. Erasotzaileak konfiantzazko erakunde baten itxura hartzen du (banku bat, Google, zure ikastetxea…) zuk zure pasahitza, banku-datuak edo datu pertsonalak eman ditzazun.',
      urratsak: [
        'Erasotzaileak mezu bat bidaltzen du postaz, SMSz edo WhatsAppez, presa edo beldurra sortzeko moduan idatzia.',
        'Mezuak esteka bat dakar, benetako webgune baten kopia den orri faltsu batera.',
        'Zuk zure datuak idazten dituzu orri horretan, benetakoa dela uste duzulako.',
        'Erasotzaileak datu horiek jasotzen ditu eta zure kontuan sartzeko erabiltzen ditu.',
      ],
      adibidea: {
        izenburua: 'Google Docs-en itxurako phishinga',
        urtea: '2017',
        testua:
          '2017ko maiatzean, Gmail erabiltzaile askok mezu bat jaso zuten: kontaktu ezagun batek dokumentu bat partekatu zuela zioen. Botoia sakatzean, «Google Docs» izeneko aplikazio faltsu batek posta eta kontaktuak irakurtzeko baimena eskatzen zuen. Baimena ematen zuenak, pasahitzik idatzi gabe, bere kontaktu guztiei bidaltzen zien mezu bera. Gmail erabiltzaileen % 0,1 baino gutxiago harrapatu zituen, milioi bat lagun inguru, eta Googlek ordubete inguruan geldiarazi zuen.',
        iturria: {
          izena: 'Threatpost, «1 Million Gmail Users Impacted by Google Docs Phishing Attack»',
          url: 'https://threatpost.com/1-million-gmail-users-impacted-by-google-docs-phishing-attack/125436/',
        },
      },
      babesa: [
        'Ez sakatu mezuetako estekak: idatzi zuk zeuk webgunearen helbidea.',
        'Begiratu ondo domeinua: letra bakar batek alda dezake dena.',
        'Aktibatu bi urratseko egiaztapena: pasahitza lapurtuta ere, ezin izango dute sartu.',
      ],
      gogoratu:
        'Presa eta beldurra dira phishingaren armak. Mezu batek larrialdia badakar, gelditu eta egiaztatu.',
    },
    {
      slug: 'birusak',
      izena: 'Birusak',
      etiketa: 'Malware klasikoa',
      laburpena: 'Fitxategi baten barruan ezkutatzen da eta zuk irekitzean pizten da.',
      zerDen:
        'Birusa beste programa edo fitxategi batean txertatzen den kode maltzurra da. Ez da bakarrik mugitzen: «ostalari» bat behar du, eta norbaitek fitxategi hori irekitzen duenean exekutatu eta kopiatu egiten da.',
      urratsak: [
        'Birusa fitxategi batean ezkutatzen da: dokumentu bat, programa bat edo USB memoria bat.',
        'Erabiltzaileak fitxategia irekitzen du, eta birusa exekutatzen da.',
        'Birusa beste fitxategi batzuetara kopiatzen da, edo beste pertsona batzuei bidaltzen zaie.',
        'Kaltea egiten du: fitxategiak ezabatu edo hondatu, sistema moteldu edo mezu arraroak erakutsi.',
      ],
      adibidea: {
        izenburua: 'Melissa birusa',
        urtea: '1999',
        testua:
          '1999ko martxoan, Word dokumentu kutsatu batek Outlook erabiltzen zuen bere burua zabaltzeko. Dokumentua irekitzean, birusak mezu bat bidaltzen zien helbide-liburuko lehen 50 kontaktuei, dokumentua eranskin gisa. Hartzaile bakoitzak gauza bera egiten zuen. Mezu-olatua hain handia izan zen, ezen Microsoft eta beste enpresa handi batzuek posta-zerbitzariak itzali behar izan zituzten.',
        iturria: {
          izena: 'FBI, «The Melissa Virus»',
          url: 'https://www.fbi.gov/news/stories/melissa-virus-20th-anniversary-032519',
        },
      },
      babesa: [
        'Eduki antibirusa aktibatuta eta eguneratuta.',
        'Ez ireki espero ez zenituen eranskinak, ezagun batengandik badatoz ere.',
        'Ez gaitu dokumentuetako makroak, Internetetik iristen badira.',
      ],
      gogoratu: 'Birusak ostalari bat behar du: zuk fitxategia ireki arte, ez du ezer egiten.',
    },
    {
      slug: 'troiarrak',
      izena: 'Troiarrak',
      etiketa: 'Malware mozorrotua',
      laburpena: 'Programa erabilgarri baten itxura du, baina barruan erasoa dakar.',
      zerDen:
        'Troiarra programa legitimo eta erabilgarri baten itxura duen malwarea da. Zuk zeuk instalatzen duzu, zer den jakin gabe. Izena Troiako zaldiaren kondairatik dator: opari bat zirudien, baina barruan soldaduak zeuden.',
      urratsak: [
        'Programa bat deskargatzen duzu: joko pirata bat, doako tresna bat edo eguneratze faltsu bat.',
        'Programak agintzen duena egiten du, ezer arraroa ez nabaritzeko.',
        'Bitartean, ezkutuan, kode maltzurra exekutatzen da.',
        'Kode horrek datuak lapurtzen ditu, beste malware bat instalatzen du edo atzeko ate bat irekitzen du.',
      ],
      adibidea: {
        izenburua: 'Zeus banku-troiarra',
        urtea: '2007',
        testua:
          'Zeus 2007ko uztailean identifikatu zen lehen aldiz. Ordenagailuan sartu ondoren, isilik geratzen zen erabiltzaileak bere bankuaren webgunea ireki arte. Orduan, eremu faltsuak gehitzen zituen orrian eta idatzitako datuak lapurtzen zituen. 2009an, AEBetan bakarrik 3,6 milioi ordenagailu zeuden kutsatuta. 2010ean, ehun bat lagun atxilotu zituzten, Zeus erabiliz 70 milioi dolar lapurtzeagatik.',
        iturria: {
          izena: 'Wikipedia, «Zeus (malware)»',
          url: 'https://en.wikipedia.org/wiki/Zeus_(malware)',
        },
      },
      babesa: [
        'Deskargatu programak webgune ofizialetik edo denda ofizialetik bakarrik.',
        'Ez instalatu joko edo programa piratarik.',
        'Erabili administratzaile-baimenik gabeko kontu bat egunerokoan.',
      ],
      gogoratu: 'Troiarra ez da bakarrik sartzen: zuk zeuk irekitzen diozu atea.',
    },
    {
      slug: 'backdoorrak',
      izena: 'Backdoorrak',
      etiketa: 'Sarbide ezkutua',
      laburpena: 'Sistema batean sartzeko bide ezkutua, pasahitzik eskatzen ez duena.',
      zerDen:
        'Backdoorra (atzeko atea) sistema batean sartzeko bide sekretua da, ohiko segurtasun-kontrolak saltatzen dituena. Erasotzaile batek instala dezake, edo programa bat garatu duenak berak utz dezake, nahita edo akatsez.',
      urratsak: [
        'Erasotzaileak sistemara sartzea lortzen du lehen aldiz, troiar baten bidez adibidez.',
        'Bide ezkutu bat uzten du: kontu sekretu bat, programa bat edo konexio bat.',
        'Jabeak lehen sarrera aurkitu eta garbitzen badu ere, atzeko ateak irekita jarraitzen du.',
        'Erasotzailea nahi duenean itzul daiteke, inor ohartu gabe.',
      ],
      adibidea: {
        izenburua: 'XZ Utils liburutegiko atzeko atea',
        urtea: '2024',
        testua:
          '2024ko martxoan, Andres Freund ingeniariak ikusi zuen bere Linux ordenagailuko SSH saioek ohi baino denbora gehiago eta prozesadore gehiago behar zutela. Ikertzen hasi, eta xz konpresio-liburutegian ezkutatutako atzeko ate bat aurkitu zuen. «Jia Tan» izena erabiltzen zuen norbaitek bi urte eman zituen proiektuan laguntzen, konfiantza lortu eta kodea aldatu ahal izateko. Garaiz aurkitu zen, Linux banaketa egonkorretara iritsi aurretik.',
        iturria: {
          izena: 'Wikipedia, «XZ Utils backdoor»',
          url: 'https://en.wikipedia.org/wiki/XZ_Utils_backdoor',
        },
      },
      babesa: [
        'Instalatu softwarea iturri fidagarrietatik eta eguneratu maiz.',
        'Berrikusi sistemako kontuak eta martxan dauden zerbitzuak.',
        'Erasoren bat izan bada, berrinstalatu sistema: garbitzea ez da nahikoa.',
      ],
      gogoratu: 'Atzeko ate batek ez du sartzeko balio: itzultzeko balio du.',
    },
    {
      slug: 'spywarea',
      izena: 'Spywarea',
      etiketa: 'Zaintza-softwarea',
      laburpena: 'Isilik ikusten du zer egiten duzun eta beste norbaiti kontatzen dio.',
      zerDen:
        'Spywarea zure jarduera zaintzen duen softwarea da, zuk jakin gabe: zer idazten duzun, zer webgune bisitatzen dituzun, zure mezuak edo zure kokapena. Informazio hori hirugarren bati bidaltzen dio.',
      urratsak: [
        'Spywarea instalatzen da beste programa batekin batera, luzapen baten bidez edo ahultasun bat aprobetxatuz.',
        'Isilik geratzen da, ia baliabiderik erabili gabe, nabarmendu ez dadin.',
        'Informazioa biltzen du: sakatutako teklak, pantaila-argazkiak, mezuak edo kokapena.',
        'Bildutakoa erasotzaileari bidaltzen dio, Interneteko trafiko arruntaren artean ezkutatuta.',
      ],
      adibidea: {
        izenburua: 'Pegasus',
        urtea: '2016–2021',
        testua:
          'Pegasus NSO Group enpresa israeldarrak gobernuei saltzen zien spywarea da. Bertsio batzuek ez zuten klikik behar: mezu bat iristea nahikoa zen telefonoa kutsatzeko. Barruan zegoenean, mezuak irakurri, mikrofonoa piztu eta kamera erabil zezakeen. 2021ean, Pegasus Project izeneko ikerketak agerian utzi zuen kazetari, aktibista eta politikariak zaintzeko erabili zela hainbat herrialdetan.',
        iturria: {
          izena: 'Wikipedia, «Pegasus (spyware)»',
          url: 'https://en.wikipedia.org/wiki/Pegasus_(spyware)',
        },
      },
      babesa: [
        'Eguneratu telefonoa eta ordenagailua ahal bezain laster.',
        'Berrikusi zer baimen dituzten aplikazioek: mikrofonoa, kamera, kokapena.',
        'Instalatu nabigatzaile-luzapen gutxi, eta ezagunak bakarrik.',
      ],
      gogoratu: 'Spywareak ez du ezer hausten: begiratu eta kontatu egiten du.',
    },
    {
      slug: 'stealerrak',
      izena: 'Stealerrak',
      etiketa: 'Informazio-lapurrak',
      laburpena: 'Segundo gutxitan zure pasahitz gordeak eta saioak eramaten ditu.',
      zerDen:
        'Stealerra ekipo batean gordetako sekretuak lapurtzeko malwarea da: nabigatzailean gordetako pasahitzak, saio-cookieak, txartelen datuak edo kriptomoneta-zorroak. Spywareak ez bezala, ez da geratzen: dena hartu eta desagertu egiten da.',
      urratsak: [
        'Fitxategi kutsatu bat irekitzen duzu, programa pirata bat edo eranskin bat adibidez.',
        'Stealerrak nabigatzailea eta beste programa batzuk arakatzen ditu, gordetako datuen bila.',
        'Dena pakete batean biltzen du eta erasotzailearen zerbitzarira bidaltzen du.',
        'Erasotzailea zure kontuetan sartzen da, edo datuak beste batzuei saltzen dizkie.',
      ],
      adibidea: {
        izenburua: 'Lumma Stealer',
        urtea: '2025',
        testua:
          'Lumma Stealer harpidetza bidez alokatzen zen: edonork ordain zezakeen erabiltzeko. 2025eko martxoaren 16tik maiatzaren 16ra, Microsoftek 394.000 Windows ordenagailu kutsatu baino gehiago antzeman zituen mundu osoan. Maiatzean, Microsoftek eta hainbat herrialdetako poliziek bere azpiegitura bertan behera utzi zuten.',
        iturria: {
          izena: 'Microsoft, «global action against Lumma Stealer»',
          url: 'https://blogs.microsoft.com/on-the-issues/2025/05/21/microsoft-leads-global-action-against-favored-cybercrime-tool/',
        },
      },
      babesa: [
        'Ez gorde pasahitzak nabigatzailean: erabili pasahitz-kudeatzaile bat.',
        'Ez deskargatu programa piratarik edo «crack»-ik.',
        'Kutsadura susmatzen baduzu, aldatu pasahitzak eta itxi saio guztiak beste gailu batetik.',
      ],
      gogoratu:
        'Stealerrak segundo gutxi behar ditu. Garrantzitsuena da zure sekretuak leku seguruan gordetzea.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  2. unitatea                                                               */
/* -------------------------------------------------------------------------- */

const ud2: GaiAtala = {
  id: '2ud',
  mota: 'gaiak',
  laburra: '2. unitatea',
  izenburua: 'Segurtasun logikoa',
  sarrera:
    'Eraso batzuk ez dira ekipo bakarrean geratzen: milaka gailu eta kontutara zabaltzen dira, edo pasahitzak indarrez irekitzen dituzte.',
  gaiak: [
    {
      slug: 'koobface',
      izena: 'Koobface',
      etiketa: 'Sare sozialetako harra',
      laburpena: 'Lagunen mezuen bidez zabaltzen zen harra, sare sozialetan.',
      zerDen:
        'Koobface Facebooken, MySpacen eta beste sare sozial batzuetan zabaldu zen harra izan zen, 2008tik 2012ra. Kutsatutako kontu batek bere lagunei mezuak bidaltzen zizkien, eta lagun horiek ere kutsatu egiten ziren. Izena «Facebook» hitzaren anagrama da.',
      urratsak: [
        'Lagun baten kontutik mezu bat jasotzen duzu: «Begira zein barregarri ateratzen zaren bideo honetan».',
        'Estekak bideo-orri faltsu batera eramaten zaitu, eta bideoa ikusteko Flash eguneratzeko eskatzen dizu.',
        '«Eguneratzea» Koobface bera da: zure ordenagailua kutsatu eta zure sare sozialetako kontuak hartzen ditu.',
        'Zure kontutik mezu bera bidaltzen zaie zure lagunei, eta zikloa berriro hasten da.',
      ],
      adibidea: {
        izenburua: 'Koobfaceren negozioa',
        urtea: '2008–2012',
        testua:
          'Koobfacek ez zuen bakarrik zabaltzen: kutsatutako ordenagailuak botnet bihurtzen zituen. Egileek iragarki faltsuekin eta antibirus faltsuak salduz irabazten zuten dirua, eta urtebetean 2 milioi dolar baino gehiago irabazi zituztela kalkulatu zen. 2012an, Facebookek bost egileren izenak argitaratu zituen, eta harraren jarduera ia guztiz gelditu zen.',
        iturria: {
          izena: 'Wikipedia, «Koobface»',
          url: 'https://en.wikipedia.org/wiki/Koobface',
        },
      },
      babesa: [
        'Ez fidatu laguna dirudien mezu arraro batez: galdetu beste bide batetik.',
        'Ez instalatu bideo bat ikusteko eskatzen dizun ezer.',
        'Aktibatu bi urratseko egiaztapena zure sare sozialetan.',
      ],
      gogoratu: 'Koobfacek konfiantza erabiltzen zuen: mezua lagun batengandik zetorren.',
    },
    {
      slug: 'botnet',
      izena: 'Botnet',
      etiketa: 'Gailu zonbien sarea',
      laburpena: 'Milaka gailu kutsatu, erasotzaile bakar baten aginduetara.',
      zerDen:
        'Botneta kutsatutako gailuen sarea da (ordenagailuak, kamerak, routerrak…), erasotzaile batek urrunetik kontrolatzen dituenak. Gailu bakoitzari «bot» edo «zonbi» esaten zaio. Jabeak ez daki ezer: gailuak normaltasunez dabil.',
      urratsak: [
        'Erasotzaileak gailuak kutsatzen ditu, malwarearen bidez edo fabrikako pasahitzak probatuz.',
        'Gailu kutsatu bakoitza kontrol-zerbitzari batera konektatzen da eta aginduen zain geratzen da.',
        'Erasotzaileak agindu bat bidaltzen du, eta milaka gailuk batera betetzen dute.',
        'Botneta eraso handietarako erabiltzen da: DDoS erasoak, spama edo pasahitzak probatzea.',
      ],
      adibidea: {
        izenburua: 'Mirai',
        urtea: '2016',
        testua:
          'Miraik Internetera konektatutako kamerak eta routerrak bilatzen zituen, eta fabrikako pasahitzekin sartzen zen («admin/admin» bezalakoak). 2016ko urrian, Mirai botnetak Dyn DNS hornitzaileari eraso zion, gailu kutsatu ugari batera erabiliz. Ondorioz, Twitter, Netflix, Spotify eta Reddit ez zeuden eskuragarri ordu batzuetan Europan eta Ipar Amerikan.',
        iturria: {
          izena: 'Wikipedia, «Mirai (malware)»',
          url: 'https://en.wikipedia.org/wiki/Mirai_(malware)',
        },
      },
      babesa: [
        'Aldatu beti gailu berrien fabrikako pasahitza.',
        'Eguneratu routerra eta kamerak, eta itzali erabiltzen ez dituzun funtzioak.',
        'Ez utzi gailuen kudeaketa-orria Internetetik irekita.',
      ],
      gogoratu: 'Zure kamerak ere eraso dezake: fabrikako pasahitza da botnetaren atea.',
    },
    {
      slug: 'indar-gordineko-erasoa',
      izena: 'Indar gordineko erasoa',
      etiketa: 'Pasahitzak asmatzea',
      laburpena: 'Pasahitzak bata bestearen atzetik probatzea, asmatu arte.',
      zerDen:
        'Indar gordineko erasoan, erasotzaileak pasahitz bat asmatu nahi du konbinazio asko probatuz. Normalean ez ditu konbinazio guztiak probatzen: pasahitz ohikoenen zerrendak eta lehenago lapurtutako pasahitzak erabiltzen ditu.',
      urratsak: [
        'Erasotzaileak saioa hasteko orri bat aukeratzen du eta erabiltzaile-izenen zerrenda bat lortzen du.',
        'Programa batek pasahitzak automatikoki probatzen ditu: 123456, izena eta urtea, lehenago filtratutako pasahitzak…',
        'Blokeoa saihesteko, saiakerak IP helbide askoren artean eta denboran banatzen ditu.',
        'Pasahitz batek funtzionatzen duenean, kontuan sartzen da eta beste webgune batzuetan ere probatzen du.',
      ],
      adibidea: {
        izenburua: 'GitHuben aurkako erasoa',
        urtea: '2013',
        testua:
          '2013ko azaroan, GitHubek indar gordineko eraso handi bat jasan zuen: ia 40.000 IP helbide desberdinetatik pasahitzak probatu zituzten. Pasahitz ahulak edo beste webgune batzuetan berrerabilitakoak zituzten kontu batzuetan sartzea lortu zuten. GitHubek kontu horien pasahitzak berrezarri zituen eta bi urratseko egiaztapena erabiltzeko gomendatu zuen.',
        iturria: {
          izena: 'GitHub, «Weak passwords brute forced»',
          url: 'https://github.blog/news-insights/company-news/weak-passwords-brute-forced/',
        },
      },
      babesa: [
        'Erabili pasahitz luzeak: hainbat hitz elkartuta hobeak dira ikur gutxi batzuk baino.',
        'Ez erabili pasahitz bera bi webgunetan.',
        'Aktibatu bi urratseko egiaztapena: pasahitza asmatuta ere, ezin izango dute sartu.',
      ],
      gogoratu:
        'Pasahitz labur bat minututan asmatzen da. Luzea eta bakarra bada, ia ezinezkoa da.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  3. unitatea                                                               */
/*  Segurtasun aktiboa: mehatxu bakoitza nola detektatu eta geldiarazi.       */
/* -------------------------------------------------------------------------- */

const ud3: GaiAtala = {
  id: '3ud',
  mota: 'gaiak',
  laburra: '3. unitatea',
  izenburua: 'Segurtasun aktiboa',
  sarrera:
    'Mehatxu batzuk ezkutatzeko eta irauteko diseinatuta daude. Unitate honetan ikusiko duzu nola jokatzen duten eta, batez ere, nola detektatzen eta geldiarazten diren.',
  gaiak: [
    {
      slug: 'atzeko-ateak',
      izena: 'Atzeko ateak',
      etiketa: 'Sarbide iraunkorra',
      laburpena: 'Erasotzaileak itzultzeko uzten duen bide ezkutua, eta detektatzen zailena.',
      zerDen:
        'Atzeko atea sistema batean sartzeko bide sekretua da, ohiko autentikazioa saltatzen duena. Segurtasun aktiboaren ikuspegitik, arazo nagusia hau da: lehen erasoa garbitu ondoren ere, atzeko ateak irekita jarraitzen du, eta inork ez du ikusten.',
      urratsak: [
        'Atzeko atea instalatzen da: erasotzaile batek, troiar batek edo fabrikatzaileak berak.',
        'Sistemaren zati arrunt baten itxura hartzen du: zerbitzu bat, kontu bat edo kode zati bat.',
        'Konexio baten zain geratzen da, edo bera konektatzen da kanpora noizean behin.',
        'Erasotzaileak sarbide osoa du, pasahitzik behar gabe eta erregistro arraroak utzi gabe.',
      ],
      adibidea: {
        izenburua: 'Juniper suebakiak',
        urtea: '2015',
        testua:
          '2015eko abenduan, Juniper enpresak baimenik gabeko kodea aurkitu zuen bere suebakien ScreenOS sistema eragilean, barne-berrikuspen batean. Kode horrek bi gauza egiten zituen: pasahitz sekretu batekin edonor sartzen uzten zuen administratzaile gisa, eta VPN trafikoa deszifratzea ahalbidetzen zuen. Atzeko ate hori urte batzuk zeramatzan bezeroen sareak babesten zituzten gailuetan.',
        iturria: {
          izena: 'Wikipedia, «Juniper Networks, ScreenOS backdoor»',
          url: 'https://en.wikipedia.org/wiki/Juniper_Networks#ScreenOS_Backdoor',
        },
      },
      babesa: [
        'Berrikusi kodea eta konfigurazioa aldizka: Juniperrek horrela aurkitu zuen.',
        'Zaindu kanporako trafikoa: atzeko ate askok zerbitzari arrotz batera konektatzen dira.',
        'Ez garbitu kutsatutako sistema bat: berrinstalatu irudi garbi batetik.',
      ],
      gogoratu: 'Garbitu ondoren ere, atzeko atea irekita egon daiteke: bilatu aktiboki.',
    },
    {
      slug: 'botnetak',
      izena: 'Botnetak',
      etiketa: 'Sarea desegitea',
      laburpena: 'Botnet bat geldiarazteko, burua moztu behar zaio: kontrol-zerbitzaria.',
      zerDen:
        'Botneta urrunetik kontrolatutako gailu kutsatuen sarea da. Segurtasun aktiboak bi mailatan jokatzen du: gailu bakoitzean kutsadura detektatu eta kentzen du, eta sare osoan kontrol-zerbitzariak bertan behera uzten ditu, botak agindurik gabe gera daitezen.',
      urratsak: [
        'Bot bakoitza kontrol-zerbitzarira konektatzen da aldizka, aginduak jasotzeko.',
        'Ikertzaileek konexio horiek sareko trafikoan detektatzen dituzte, eredu errepikakorrak direlako.',
        'Poliziak eta enpresek kontrol-zerbitzariak hartzen edo itzaltzen dituzte.',
        'Botak agindurik gabe geratzen dira, eta gailu bakoitza garbitu egin daiteke.',
      ],
      adibidea: {
        izenburua: 'Emotet botnetaren amaiera',
        urtea: '2021',
        testua:
          'Emotet munduko botnet arriskutsuenetako bat zen: posta faltsuen bidez zabaltzen zen eta beste erasotzaile batzuei alokatzen zitzaien. 2021eko urtarrilean, zortzi herrialdetako poliziek, Europolen koordinazioarekin, bere azpiegitura hartu zuten. Ondoren, kutsatutako ordenagailuei eguneratze bat bidali zieten, eta 2021eko udaberrian Emotet automatikoki desinstalatu zen.',
        iturria: {
          izena: 'Europol, «World’s most dangerous malware EMOTET disrupted»',
          url: 'https://www.europol.europa.eu/media-press/newsroom/news/world%E2%80%99s-most-dangerous-malware-emotet-disrupted-through-global-action',
        },
      },
      babesa: [
        'Monitorizatu sareko trafikoa: gailu bat ordu jakinetan zerbitzari arrotz batera konektatzen bada, susmagarria da.',
        'Erabili antibirusa eta portaera aztertzen duten tresnak ekipo guztietan.',
        'Blokeatu suebakian botneten zerbitzari ezagunak.',
      ],
      gogoratu: 'Botnet bat burua gabe ez da ezer: kontrol-zerbitzaria da bere ahulgunea.',
    },
    {
      slug: 'harrak',
      izena: 'Harrak',
      etiketa: 'Bakarrik hedatzen den malwarea',
      laburpena: 'Inork ezer ireki gabe, ekipo batetik bestera salto egiten du.',
      zerDen:
        'Harra (ingelesez worm) bere kabuz kopiatu eta hedatzen den malwarea da. Birusak ez bezala, ez du ostalaririk behar, ezta norbaitek fitxategi bat irekitzea ere: sareko ahultasunak aprobetxatzen ditu ekipo batetik bestera pasatzeko.',
      urratsak: [
        'Harra ekipo batean sartzen da, ahultasun baten edo USB memoria baten bidez.',
        'Sarean beste ekipo ahul batzuk bilatzen ditu.',
        'Ekipo horietara kopiatzen da eta han exekutatzen da, inork ezer egin gabe.',
        'Ekipo berri bakoitzak gauza bera egiten du, eta hazkundea oso azkarra da.',
      ],
      adibidea: {
        izenburua: 'Conficker',
        urtea: '2008',
        testua:
          'Conficker 2008ko azaroan detektatu zen, Windowsen ahultasun bat (MS08-067) aprobetxatuz; Microsoftek adabakia hilabete lehenago argitaratua zuen. Sareko ekipoetatik, pasahitz ahuletatik eta USB memorietatik hedatzen zen. 9 eta 15 milioi ordenagailu artean kutsatu zituen 190 herrialde baino gehiagotan, gobernu, enpresa eta etxeetako ordenagailuak barne.',
        iturria: {
          izena: 'Wikipedia, «Conficker»',
          url: 'https://en.wikipedia.org/wiki/Conficker',
        },
      },
      babesa: [
        'Jarri adabakiak berehala: harrek ahultasun ezagunak aprobetxatzen dituzte.',
        'Zatitu sarea: ekipo batek ez ditu guztiak ikusi behar.',
        'Isolatu ekipo kutsatua saretik, ahalik eta azkarren.',
      ],
      gogoratu: 'Harra ez dago zure zain: bera etortzen da, adabakirik gabeko ekipoen bila.',
    },
    {
      slug: 'mamuak',
      izena: 'Mamuak',
      etiketa: 'Arrastorik uzten ez duen malwarea',
      laburpena: 'Bere lana egin eta arrastoak ezabatzen ditu, inork aurki ez dezan.',
      zerDen:
        'Mamua (ingelesez ghostware) ezkutatzeko eta arrastoak ezabatzeko diseinatutako malwarea da. Askotan memorian bakarrik exekutatzen da, diskoan fitxategirik utzi gabe, eta erregistroak ezabatzen ditu. Helburua ez da bakarrik ez ikustea: erasoa egon zela frogatzea ezinezko egitea da.',
      urratsak: [
        'Malwarea memorian kargatzen da, diskoan fitxategirik idatzi gabe.',
        'Sistemaren tresna legitimoak erabiltzen ditu bere lanerako, susmorik ez pizteko.',
        'Bere helburua betetzen du: datuak lapurtu edo sistema zaindu.',
        'Erregistroak eta arrastoak ezabatzen ditu; ordenagailua berrabiaraztean, desagertu egiten da.',
      ],
      adibidea: {
        izenburua: 'Duqu 2.0',
        urtea: '2015',
        testua:
          '2015ean, Kaspersky segurtasun-enpresak mamu-malware bat aurkitu zuen bere sare propioan. Duqu 2.0 ia osorik memorian bizi zen: ez zuen fitxategirik uzten diskoan, eta ordenagailua berrabiarazten bazen, desagertu egiten zen. Irango programa nuklearrari buruzko nazioarteko negoziazioen inguruko lekuetan ere aurkitu zen.',
        iturria: {
          izena: 'Kaspersky Securelist, «The Mystery of Duqu 2.0»',
          url: 'https://securelist.com/the-mystery-of-duqu-2-0-a-sophisticated-cyberespionage-actor-returns/70504/',
        },
      },
      babesa: [
        'Bidali erregistroak denbora errealean beste zerbitzari batera, erasotzaileak ezabatu ezin ditzan.',
        'Erabili memoria aztertzen duten detekzio-tresnak, ez fitxategiak bakarrik.',
        'Ikertu erregistroetako hutsuneak: ordu batean ezer ez badago, susmagarria da.',
      ],
      gogoratu: 'Mamuak arrastoak ezabatzen ditu: erregistroak beste leku batean gorde behar dira.',
    },
    {
      slug: 'troiarrak',
      izena: 'Troiarrak',
      etiketa: 'Software ofizialean ezkutatuta',
      laburpena: 'Batzuetan troiarra ez dago programa pirata batean, programa ofizialean baizik.',
      zerDen:
        'Troiarra programa erabilgarri baten itxura duen malwarea da. Segurtasun aktiboan kasurik arriskutsuena hau da: erasotzaileek benetako enpresa baten programa kutsatzen dutenean. Orduan, iturri ofizialetik deskargatzen duzu, sinadura zuzena du… eta hala ere troiarra da.',
      urratsak: [
        'Erasotzaileak programaren enpresan sartzen dira eta instalatzailea aldatzen dute.',
        'Instalatzaile kutsatua webgune ofizialean argitaratzen da, sinadura digital zuzenarekin.',
        'Erabiltzaileek normaltasunez deskargatu eta instalatzen dute.',
        'Troiarrak informazioa bidaltzen dio erasotzaileari, eta helburu interesgarrietan bigarren malware bat instalatzen du.',
      ],
      adibidea: {
        izenburua: 'CCleaner kutsatua',
        urtea: '2017',
        testua:
          '2017ko abuztuan eta irailean, CCleaner garbiketa-programaren 5.33 bertsio ofizialak troiar bat zekarren barruan. Erasotzaileek enpresaren sisteman sartu eta instalatzailea aldatu zuten, sinadura digitala mantenduz. 2,27 milioi lagunek instalatu zuten. Cisco Talos taldeak detektatu zuen, eta ikertzaileek ikusi zuten bigarren erasoak teknologia-enpresa handiak zituela helburu.',
        iturria: {
          izena: 'Wikipedia, «CCleaner»',
          url: 'https://en.wikipedia.org/wiki/CCleaner',
        },
      },
      babesa: [
        'Ez fidatu sinaduraz bakarrik: zaindu portaera ere (programa batek zerbitzari arrotzekin hitz egiten badu, susmagarria da).',
        'Erabili portaera arraroa antzematen duten tresnak, ez fitxategi ezagunak bakarrik.',
        'Jarraitu fabrikatzaileen segurtasun-oharrak eta eguneratu berehala.',
      ],
      gogoratu: 'Iturri ofiziala ez da beti segurua: portaerak salatzen du troiarra.',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Zibererasoak                                                              */
/* -------------------------------------------------------------------------- */

const zibererasoak: KasuAtala = {
  id: 'zibererasoak',
  mota: 'kasuak',
  laburra: 'Zibererasoak',
  izenburua: 'Zibererasoak',
  sarrera:
    'Mundua aldatu zuten bi eraso erreal: zer gertatu zen, nola egin zuten eta zer ezaugarri zituzten.',
  kasuak: [
    {
      slug: 'stuxnet',
      izena: 'Stuxnet',
      urtea: '2010',
      etiketa: 'Ziberarma industriala',
      laburpena:
        'Natanzeko (Iran) instalazio nuklearrean 1.000 makina inguru suntsitu zituen harra.',
      gertatua: [
        '2010eko ekainean, VirusBlokAda enpresa bielorrusiarrak malware arraro bat aurkitu zuen Irango ordenagailu batean. Stuxnet izena eman zioten. Ikertzaileak harritu egin ziren aztertu ahala: ez zuen dirurik edo daturik lapurtzen. Bere helburu bakarra Siemensen kontrol-sistema industrial jakin batzuk ziren.',
        'Helburua Natanzeko uranio-aberastegia zen, Iranen. Han, zentrifugagailuek abiadura handian biratzen dute uranioa aberasteko. Stuxnetek zentrifugagailu horien abiadura aldatzen zuen, apurka eta ezkutuan, hondatu arte. 1.000 makina inguru suntsitu zituen, eta Irango programa nuklearra atzeratu zuen.',
        'Inork ez du ofizialki aitortu, baina ikerketa gehienen arabera Estatu Batuek eta Israelek garatu zuten. Ziberarma baten lehen adibide ezaguna da: mundu fisikoan kalte egiteko sortutako kodea.',
      ],
      urratsak: [
        'Natanzeko sarea Internetetik isolatuta zegoen. Stuxnet USB memorien bidez sartu zen, ziurrenik kanpoko enpresetako langileen bidez.',
        'Barruan, harra bezala hedatu zen Windows ordenagailuetara, ezezagunak ziren lau ahultasun (zero eguneko ahultasunak) aprobetxatuz.',
        'Siemensen Step7 softwarea zuten ordenagailuak bilatzen zituen, horiek kontrolatzen baitzituzten zentrifugagailuak.',
        'Zentrifugagailuen abiadura aldatzen zuen noizean behin. Bitartean, operadoreei datu normalak erakusten zizkien pantailetan.',
        'Zentrifugagailuak apurka hondatzen ziren, eta teknikariek ez zuten ulertzen zergatik.',
      ],
      ezaugarriak: [
        { izena: 'Mota', balioa: 'Harra eta sabotajea (ziberarma)' },
        { izena: 'Noiz', balioa: '2009–2010; 2010eko ekainean aurkitua' },
        { izena: 'Helburua', balioa: 'Natanzeko uranio-aberastegia (Iran)' },
        { izena: 'Egileak (ustez)', balioa: 'Estatu Batuak eta Israel' },
        { izena: 'Sartzeko bidea', balioa: 'USB memoriak, Internetetik isolatutako sare batean' },
        { izena: 'Aprobetxatutako akatsak', balioa: 'Windowsen lau zero eguneko ahultasun' },
        {
          izena: 'Ezkutatzeko trikimailuak',
          balioa: 'Benetako sinadura digital lapurtuak eta operadoreei erakutsitako datu faltsuak',
        },
        {
          izena: 'Eragina',
          balioa: '1.000 makina inguru suntsituta; 200.000 ordenagailu baino gehiago kutsatuta mundu osoan',
        },
      ],
      ondorioak: [
        'Lehen aldiz, malware batek kalte fisikoa eragin zuen azpiegitura kritiko batean.',
        'Internetetik isolatutako sareak ere ez daude salbu: USB memoria batek nahikoa du.',
        'Stuxneten kodea publiko egin zenean, beste erasotzaile batzuek ikasteko erabili zuten.',
      ],
      iturriak: [
        { izena: 'Wikipedia (euskaraz), «Stuxnet»', url: 'https://eu.wikipedia.org/wiki/Stuxnet' },
        { izena: 'Wikipedia, «Stuxnet»', url: 'https://en.wikipedia.org/wiki/Stuxnet' },
        {
          izena: 'Symantec, «W32.Stuxnet Dossier»',
          url: 'https://docs.broadcom.com/doc/security-response-w32-stuxnet-dossier-11-en',
        },
      ],
    },
    {
      slug: 'solarwinds',
      izena: 'SolarWinds',
      urtea: '2020',
      etiketa: 'Hornikuntza-katearen erasoa',
      laburpena:
        'Programa-eguneratze kutsatu batek 18.000 erakunde ingurutan sartu zuen erasotzailea, AEBetako hainbat ministeritzatan barne.',
      gertatua: [
        'SolarWinds enpresak Orion izeneko programa saltzen du, enpresek eta gobernuek beren sareak zaintzeko erabiltzen dutena. 2019an, erasotzaile batzuk SolarWindsen sistemetan sartu ziren, eta Orion eraikitzeko prozesuan kode maltzurra txertatu zuten.',
        '2020ko martxotik ekainera, SolarWindsek bere bezeroei Orionen eguneratze ofizialak bidali zizkien, behar bezala sinatuta. Eguneratze horiek SUNBURST izeneko atzeko atea zeramaten, eta 18.000 bezero inguruk instalatu zuten. Ondoren, erasotzaileek interesatzen zitzaizkien erakundeetan bakarrik jarraitu zuten: AEBetako bederatzi agentzia federaletan (Ogasuna, Merkataritza eta Barne Segurtasuna, besteak beste) eta 100 bat enpresatan.',
        '2020ko abenduan, FireEye segurtasun-enpresak aurkitu zuen erasoa, bere sistemetan sartu zirela ohartu zenean. AEBetako gobernuak Errusiako atzerriko inteligentzia-zerbitzuari (SVR) egotzi zion erasoa.',
      ],
      urratsak: [
        'Erasotzaileak SolarWindsen sarean sartu ziren, eta Orion programa eraikitzen zuen sistema kutsatu zuten.',
        'Programa konpilatzen zen unean, SUNBURST atzeko atea txertatzen zuten kode ofizialean, iturburu-kodean arrastorik utzi gabe.',
        'SolarWindsek eguneratzea sinatu eta bezeroei bidali zien, beste edozein eguneratze bezala.',
        'Instalatu ondoren, SUNBURSTek bi aste inguru itxaroten zuen ezer egin gabe. Gero, zerbitzari arrotz batera konektatzen zen, Orionen trafiko arruntaren itxura emanez.',
        'Erasotzaileek helburu interesgarrienak aukeratu zituzten, eta haietan bakarrik sakondu zuten, posta eta dokumentuak irakurtzeko.',
      ],
      ezaugarriak: [
        { izena: 'Mota', balioa: 'Hornikuntza-katearen erasoa, atzeko atea eta espioitza' },
        { izena: 'Noiz', balioa: '2019ko iraila – 2020ko abendua' },
        { izena: 'Helburua', balioa: 'AEBetako gobernua eta enpresa handiak (espioitza)' },
        { izena: 'Egileak (ustez)', balioa: 'Errusiako atzerriko inteligentzia-zerbitzua (SVR)' },
        { izena: 'Sartzeko bidea', balioa: 'Orion programaren eguneratze ofizial kutsatua eta sinatua' },
        { izena: 'Malwarea', balioa: 'SUNBURST atzeko atea' },
        {
          izena: 'Ezkutatzeko trikimailuak',
          balioa: 'Sinadura legitimoa, bi asteko itxaronaldia eta Orionen trafikoaren itxura',
        },
        {
          izena: 'Eragina',
          balioa: '18.000 erakunde inguruk instalatu zuten; 9 agentzia federal eta 100 bat enpresa sakon arakatuta',
        },
      ],
      ondorioak: [
        'Hornitzaile fidagarri bat ere sartzeko bide bihur daiteke: sinadura zuzen batek ez du segurtasuna bermatzen.',
        'Erasotzaileek hilabeteak eman zituzten barruan antzeman gabe: kanporako trafikoa zaintzea ezinbestekoa da.',
        'AEBetako gobernuak softwarearen hornikuntza-katea babesteko arau berriak onartu zituen 2021eko maiatzean.',
      ],
      iturriak: [
        {
          izena: 'CISA, «Advanced Persistent Threat Compromise (AA20-352A)»',
          url: 'https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-352a',
        },
        {
          izena: 'Mandiant, «SUNBURST backdoor»',
          url: 'https://cloud.google.com/blog/topics/threat-intelligence/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor',
        },
        {
          izena: 'Wikipedia, «2020 United States federal government data breach»',
          url: 'https://en.wikipedia.org/wiki/2020_United_States_federal_government_data_breach',
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Esportazioak eta laguntzaileak                                            */
/* -------------------------------------------------------------------------- */

export const ATALAK: Atala[] = [ud1, ud2, ud3, zibererasoak];

/** Gida osoaren orri bat, aurrekoa/hurrengoa kalkulatzeko. */
export interface Orria {
  atala: Atala;
  slug: string;
  izena: string;
  href: string;
}

export const ORRIAK: Orria[] = ATALAK.flatMap((atala) =>
  (atala.mota === 'gaiak' ? atala.gaiak : atala.kasuak).map((g) => ({
    atala,
    slug: g.slug,
    izena: g.izena,
    href: `/${atala.id}/${g.slug}/`,
  })),
);

export function aldamenak(href: string): { aurrekoa?: Orria; hurrengoa?: Orria } {
  const i = ORRIAK.findIndex((o) => o.href === href);
  return { aurrekoa: ORRIAK[i - 1], hurrengoa: ORRIAK[i + 1] };
}

export function atalaHref(id: AtalId): string {
  return `/${id}/`;
}

export const GAI_KOPURUA = ATALAK.reduce(
  (n, a) => n + (a.mota === 'gaiak' ? a.gaiak.length : 0),
  0,
);

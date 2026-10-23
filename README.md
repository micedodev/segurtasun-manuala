# Mehatxu informatikoen gida

Segurtasun informatikoko mehatxuak euskaraz, modu argian azalduta.
**Segurtasuna eta Erabilgarritasun Handia** modulurako lana. Egilea: Markel Icedo.

## Edukia

| Atala | Gaiak |
| --- | --- |
| 1. unitatea: Segurtasunaren sarrera | Phishinga, Birusak, Troiarrak, Backdoorrak, Spywarea, Stealerrak |
| 2. unitatea: Segurtasun logikoa | Koobface, Botnet, Indar gordineko erasoa |
| 3. unitatea: Segurtasun aktiboa | Atzeko ateak, Botnetak, Harrak, Mamuak, Troiarrak |
| Zibererasoak | Stuxnet (2010), SolarWinds (2020) |

Gai bakoitzak bloke hauek ditu, beti ordena berean:
**Zer den**, **Nola funtzionatzen du** (urrats zenbakituak), **Adibidea** (benetako kasua, iturriarekin), **Eragina**, **Nola babestu**, **Gogoratu** eta **Nire iritzia**.

Zibererasoek beste egitura bat dute: **Zer gertatu zen**, **Nola egin zuten**, **Erasoaren ezaugarriak**, **Eragina**, **Zergatik da garrantzitsua**, **Nire iritzia** eta **Iturriak**.

**Eragina** taulak bost propietate erakusten ditu (konfidentzialtasuna, osotasuna, erabilgarritasuna, autentikazioa eta ez-arbuiatzea), zein geratzen diren arriskuan eta zergatik. Datuak `src/data/eragina.ts` fitxategian daude, iritziekin batera.

Adibide guztien iturriak `/iturriak/` orrian daude.

## Teknologia

- [Astro](https://astro.build) (web estatikoa) eta Tailwind CSS.
- Letra-tipoa: [Atkinson Hyperlegible Next](https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next), Braille Institutek irakurgarritasunerako diseinatua.
- JavaScript gabe: orri guztiak HTML hutsa dira.

## Egitura

```
src/
├── data/gida.ts            ← eduki guztia (testuak, urratsak, adibideak, iturriak)
├── data/eragina.ts         ← eragin-taula eta iritzia, orri bakoitzeko
├── layouts/Base.astro      ← goiburua, oina eta metadatuak
├── components/             ← gaien zerrenda, alboko menua, aurrekoa/hurrengoa
└── pages/
    ├── index.astro         ← hasiera
    ├── [atala]/index.astro ← atal bakoitzaren aurkibidea
    ├── [atala]/[slug].astro← gai edo eraso bakoitzaren orria
    ├── iturriak.astro
    └── 404.astro
```

Gai berri bat gehitzeko, nahikoa da `src/data/gida.ts` fitxategian dagokion atalaren `gaiak` zerrendan objektu bat gehitzea. Orria, aurkibidea, alboko menua eta aurrekoa/hurrengoa nabigazioa automatikoki sortzen dira.

## Erabili

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ karpetan
```

Vercelen argitaratzen da (`vercel.json`). Lehengo webguneko helbideak (`/eu/ud1`, `/es/ciberataques`…) atal berrietara birbideratzen dira.

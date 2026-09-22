import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export type Lang = 'es' | 'eu';

export interface Ficha {
  id: string;
  titulo: string;
  subtitulo: string;
  severidad: string;
  cita: string;
  definicion: string;
  como: string[];
  vector: string[];
  casoTitulo: string;
  casoMeta: string;
  casoTexto: string[];
  impacto: { prop: string; si: boolean; por: string }[];
  defensa: string[];
  koka: string;
  raw: string;
}

export interface Capitulo {
  slug: string;
  titulo: string;
  lema: string;
  intro: string[];
  idea: string;
  fichas: Ficha[];
}

const ROOT = join(process.cwd(), 'contenidos');

function clean(s: string): string {
  return s.replace(/\r/g, '').trim();
}

function list(md: string, after: string): string[] {
  const low = md.toLowerCase();
  const idx = low.indexOf(after.toLowerCase());
  if (idx < 0) return [];
  const slice = md.slice(idx);
  const out: string[] = [];
  for (const line of slice.split('\n')) {
    const t = line.trim();
    if (/^[-*]\s+/.test(t) || /^\d+\.\s+/.test(t)) {
      out.push(t.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '').trim());
      if (out.length >= 8) break;
    } else if (/^###?\s/.test(t) && out.length > 0) break;
  }
  return out;
}

function table(md: string, head: string): { prop: string; si: boolean; por: string }[] {
  const i = md.toLowerCase().indexOf(head.toLowerCase());
  if (i < 0) return [];
  const slice = md.slice(i, i + 2500).split('\n');
  const rows: { prop: string; si: boolean; por: string }[] = [];
  for (const line of slice) {
    const m = line.match(/^\|\s*([^|]+)\|\s*(S[ií]|No|Bai|Ez)\s*\|\s*([^|]+)\|/i);
    if (m && !/propiet|propiedad/i.test(m[1])) rows.push({ prop: m[1].trim(), si: /^(s[ií]|bai)/i.test(m[2].trim()), por: m[3].trim() });
  }
  return rows.slice(0, 6);
}

// Términos técnicos: en euskera se muestran siempre en su forma original inglesa
// para evitar traducciones inventadas (Suebakia, Proxya...).
const EU_TITLES: Record<string, string> = {
  'phishinga': 'Phishing',
  'erdiko gizonaren erasoa': 'Man-in-the-Middle (MITM)',
  'troiarra': 'Trojan',
  'atzeko atea': 'Backdoor',
  'spywarea': 'Spyware',
  'stealerra': 'Stealer',
  'ransomwarea': 'Ransomware',
  'exploita': 'Exploit',
  'sare sozialetako harra': 'Social Worm',
  'botneta': 'Botnet',
  'indar gordineko erasoa': 'Brute Force',
  'ddos erasoa': 'DDoS',
  'rootkita': 'Rootkit',
  'sareko harra': 'Worm',
  'ghostwarea': 'Ghostware',
  'rata': 'RAT',
  'malware polimorfikoa': 'Polymorphic Malware',
  'suebakia': 'Firewall',
  'vpna': 'VPN',
  'dmza': 'DMZ',
  'proxya': 'Proxy',
};

function normTitulo(lang: Lang, titulo: string): string {
  if (lang !== 'eu') return titulo;
  const key = titulo.toLowerCase().trim();
  return EU_TITLES[key] ?? titulo;
}

function section(md: string, h: string): string {
  if (!md) return '';
  const re = new RegExp(`###\\s+(?:${h})\\s*\\n([\\s\\S]*?)(?=\\n###\\s|\\n##\\s|\\n---\\n|$)`, 'i');
  const m = md.match(re);
  if (!m || !m[1]) return '';
  return clean(m[1].split('\n').filter((l) => l.trim() && !l.trim().startsWith('|') && !l.trim().startsWith('>')).slice(0, 4).join(' '));
}

export function loadCapitulo(lang: Lang, file: string, meta: { slug: string; titulo: string; lema: string }): Capitulo {
  const md = readFileSync(join(ROOT, lang, file), 'utf-8');
  const parts = md.split(/^##\s+\d+\.\s+/m);
  const head = parts[0] ?? '';
  const introParas = head.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#') && !l.startsWith('>') && !l.startsWith('---') && !l.startsWith('**La idea') && !l.startsWith('**Ideia') && !/^\d+\./.test(l) && !l.startsWith('###') && !l.startsWith('Los ') && !l.startsWith('Las ') && !l.startsWith('Conviene') && !l.startsWith('Para ') === false);
  const ideaMatch = head.match(/\*\*(?:La idea que hay que llevarse|Eraman beharreko ideia|Ideia nagusia):\*\*\s*([^\n*]+)/);
  const fichas: Ficha[] = [];

  const blocks = md.split(/^##\s+(?=\d+\.)/m).slice(1);
  const isEu = lang === 'eu';
  for (const b of blocks) {
    const rawTitle = b.split('\n')[0]?.replace(/^\d+\.\s*/, '').trim() ?? 'Ficha';
    const titleLine = normTitulo(lang, rawTitle);
    let subt = (b.match(/^\*\*([^*]+)\*\*/m) ?? [])[1] ?? '';
    if (isEu) {
      subt = subt.replace(/Cortafuegos/i, '').replace(/·\s*·/g, '·').replace(/^\s*·\s*|\s*·\s*$/g, '').trim();
      if (/suebaki/i.test(rawTitle)) subt = subt || 'Firewall';
    }
    const sev = (b.match(/(?:[Ss]everidad|Larritasuna):\s*([A-Za-záéíóúñ]+)/) ?? [])[1] ?? '—';
    const kokaMatch = b.match(/(?:Kokapena|Ubicaci.n):\s*([^\n]+)/);
    const koka = (((kokaMatch ?? [])[1] ?? '').trim().split('.')[0] ?? '').slice(0, 70);
    if (subt.trim().toLowerCase() === titleLine.trim().toLowerCase()) subt = '';
    const cita = (b.match(/^>\s*(.+)$/m) ?? [])[1] ?? '';
    const id = titleLine.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const def = section(b, 'Definici.n|Definizioa');
    const como = (isEu ? list(b, 'funtzionatzen du') : list(b, 'C.mo funciona')).slice(0, 5);
    const vector = (isEu
      ? (list(b, 'bektore').length ? list(b, 'bektore') : list(b, 'saihesten'))
      : (list(b, 'Vector').length ? list(b, 'Vector') : list(b, 'C.mo se elude'))
    ).slice(0, 4);
    const casoHead = isEu ? 'Adibide' : 'Caso ilustrativo';
    const casoTitulo = (b.match(new RegExp(`### ${casoHead}[^\\n]*—\\s*([^\\n]+)`)) ?? b.match(new RegExp(`### ${casoHead}[^\\n]*`)))?.[1]?.trim() ?? (b.match(new RegExp(`### ${casoHead}[^\\n]*`))?.[0] ?? '');
    const casoMeta = (b.match(/\*(.+·\s*\d{4})\*/) ?? [])[1] ?? '';
    const casoIdx = b.indexOf(`### ${casoHead}`);
    let casoTexto: string[] = [];
    if (casoIdx >= 0) {
      casoTexto = b.slice(casoIdx, casoIdx + 3000).split('\n\n').map(clean).filter((p) => p && !p.startsWith('###') && !p.startsWith('|') && !p.startsWith('>')).slice(0, 3);
    }
    const impacto = isEu
      ? (table(b, 'inpaktua').length ? table(b, 'inpaktua') : table(b, 'indartzen'))
      : (table(b, 'Impacto').length ? table(b, 'Impacto') : table(b, 'Propiedades'));
    const defensa = isEu
      ? (list(b, 'defentsa').length ? list(b, 'defentsa') : list(b, 'ezarpena'))
      : (list(b, '### Defensa').length ? list(b, '### Defensa') : list(b, '### Despliegue'));
    fichas.push({ id, titulo: titleLine, subtitulo: subt, severidad: sev, koka, cita, definicion: def || b.slice(0, 400), como, vector: vector.slice(0, 4), casoTitulo, casoMeta, casoTexto, impacto, defensa: defensa.slice(0, 5), raw: b.slice(0, 6000) });
  }

  return {
    slug: meta.slug,
    titulo: meta.titulo,
    lema: meta.lema || (head.match(/^>\s*(.+)$/m)?.[1] ?? ''),
    intro: introParas.filter((p) => p.length > 60).slice(0, 2),
    idea: ideaMatch?.[1]?.trim() ?? '',
    fichas,
  };
}

export interface CasoEstudio {
  id: string;
  titulo: string;
  subtitulo: string;
  tipo: string;
  contexto: string[];
  cronologia: { fecha: string; hito: string; detalle: string }[];
  vectores: { t: string; d: string }[];
  cifras: { cifra: string; concepto: string }[];
  alcance: string[];
  respuesta: string[];
  lecciones: { t: string; d: string }[];
}

export function loadCasos(lang: Lang, file: string): CasoEstudio[] {
  const md = readFileSync(join(ROOT, lang, file), 'utf-8');
  const blocks = md.split(/^##\s+/m).slice(1);
  return blocks.map((b) => {
    const titulo = (b.split('\n')[0] ?? '').trim();
    const id = titulo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const subtitulo = (b.match(/^\*\*([^*]+)\*\*/m)?.[1] ?? '').trim();
    const tipo = (b.match(/^\*([^*\n]+)\*$/m)?.[1] ?? '').trim();
    const ctxIdx = b.indexOf('### Contexto');
    const contexto = ctxIdx >= 0 ? b.slice(ctxIdx, ctxIdx + 2500).split('\n\n').map(clean).filter((p) => p && !p.startsWith('#') && !p.startsWith('|')).slice(0, 3) : [];
    const cronologia: CasoEstudio['cronologia'] = [];
    for (const line of b.split('\n')) {
      const m = line.match(/^\|\s*([^|]+)\|\s*\*\*([^*]+)\*\*\s*\|\s*([^|]+)\|/);
      if (m && !/fecha/i.test(m[1])) cronologia.push({ fecha: m[1].trim(), hito: m[2].trim(), detalle: m[3].trim() });
    }
    const vectores: CasoEstudio['vectores'] = [];
    const vecRe = /####\s+([^\n]+)\n([\s\S]*?)(?=####\s|###\s|##\s|$)/g;
    let vm: RegExpExecArray | null;
    let guard = 0;
    while ((vm = vecRe.exec(b)) && guard++ < 12) {
      const t = vm[1].trim();
      if (/crono|impacto en cifras|alcance real|respuesta|lecci|tres lecciones/i.test(t)) continue;
      if (t.length < 3 || t.length > 80) continue;
      vectores.push({ t, d: clean(vm[2].split('\n').filter((l) => l.trim() && !l.startsWith('|')).join(' ').slice(0, 420)) });
      if (vectores.length >= 4) break;
    }
    const cifras: CasoEstudio['cifras'] = [];
    const cifIdx = b.toLowerCase().indexOf('impacto en cifras');
    if (cifIdx >= 0) {
      for (const line of b.slice(cifIdx, cifIdx + 1200).split('\n')) {
        const m = line.match(/^\|\s*\*\*([^*]+)\*\*\s*\|\s*([^|]+)\|/);
        if (m) cifras.push({ cifra: m[1].trim(), concepto: m[2].trim() });
      }
    }
    const alcanceIdx = b.toLowerCase().indexOf('### alcance');
    const alcance = alcanceIdx >= 0 ? b.slice(alcanceIdx, alcanceIdx + 2000).split('\n\n').map(clean).filter((p) => p && !p.startsWith('#') && p.length > 40).slice(0, 3) : [];
    const respIdx = b.toLowerCase().indexOf('### respuesta');
    const respuesta = respIdx >= 0 ? b.slice(respIdx, respIdx + 1500).split('\n').map((l) => l.trim()).filter((l) => /^[-*]\s+/.test(l)).map((l) => l.replace(/^[-*]\s+/, '')).slice(0, 4) : [];
    const lecciones: CasoEstudio['lecciones'] = [];
    const lecRe = /####\s+\d+\.\s+([^\n]+)\n([\s\S]*?)(?=####\s|###\s|##\s|---|$)/g;
    let lm: RegExpExecArray | null;
    while ((lm = lecRe.exec(b)) && lecciones.length < 3) {
      lecciones.push({ t: lm[1].trim(), d: clean(lm[2].split('\n').filter((l) => l.trim()).join(' ').slice(0, 380)) });
    }
    return { id, titulo, subtitulo, tipo, contexto, cronologia: cronologia.slice(0, 6), vectores, cifras: cifras.slice(0, 4), alcance, respuesta, lecciones };
  });
}

export const CAPITULOS: Record<Lang, { file: string; slug: string; titulo: string; lema: string }[]> = {
  es: [
    { file: 'ud1-introduccion.md', slug: 'ud1', titulo: 'Introducción a la seguridad', lema: 'Ocho amenazas que rara vez aparecen solas' },
    { file: 'ud2-seguridad-logica.md', slug: 'ud2', titulo: 'Seguridad lógica', lema: 'Cinco técnicas que solo funcionan a escala' },
    { file: 'ud3-seguridad-activa.md', slug: 'ud3', titulo: 'Seguridad activa', lema: 'El malware que persiste y se adapta' },
    { file: 'ciberataques.md', slug: 'ciberataques', titulo: 'Ciberataques', lema: 'Dos incidentes reales, diseccionados' },
    { file: 'seguridad-perimetral.md', slug: 'perimetral', titulo: 'Seguridad perimetral', lema: 'Cuatro controles que solo funcionan juntos' },
  ],
  eu: [
    { file: '1ud-sarrera.md', slug: 'ud1', titulo: 'Segurtasunaren sarrera', lema: 'Bakarka agertzen ez diren zortzi mehatxu' },
    { file: '2ud-segurtasun-logikoa.md', slug: 'ud2', titulo: 'Segurtasun logikoa', lema: 'Eskalan bakarrik funtzionatzen duten teknikak' },
    { file: '3ud-segurtasun-aktiboa.md', slug: 'ud3', titulo: 'Segurtasun aktiboa', lema: 'Irauten eta egokitzen den malwarea' },
    { file: 'zibererasoak.md', slug: 'ciberataques', titulo: 'Zibererasoak', lema: 'Benetako bi gertakari, aztergai' },
    { file: 'segurtasun-perimetrala.md', slug: 'perimetral', titulo: 'Segurtasun perimetrala', lema: 'Elkarrekin bakarrik funtzionatzen duten lau kontrol' },
  ],
};

export function slugToFile(lang: Lang, slug: string): string {
  return CAPITULOS[lang].find((c) => c.slug === slug)?.file ?? CAPITULOS[lang][0].file;
}
export function slugMeta(lang: Lang, slug: string) {
  return CAPITULOS[lang].find((c) => c.slug === slug) ?? CAPITULOS[lang][0];
}

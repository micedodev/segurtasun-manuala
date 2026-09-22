// Efecto descifrado para titulares: los caracteres ciclan glifos y se fijan
// de izquierda a derecha. Monospace de ancho fijo => sin saltos de layout.
// Respeta prefers-reduced-motion (no hace nada).
const GLYPHS = '█▓▒░<>/\\|+=#%&@$§01';

function collect(root: HTMLElement): Text[] {
  const out: Text[] = [];
  const walk = (n: Node): void => {
    n.childNodes.forEach((c) => {
      if (c.nodeType === 3) {
        if (c.textContent && c.textContent.trim().length > 0) out.push(c as Text);
      } else if (c.nodeType === 1) {
        walk(c);
      }
    });
  };
  walk(root);
  return out;
}

export function scrambleIn(root: HTMLElement, duration = 1100): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const nodes = collect(root);
  if (!nodes.length) return;
  const orig = nodes.map((n) => n.textContent as string);
  const counts = orig.map((s) => s.length);
  const total = counts.reduce((a, b) => a + b, 0);
  const pick = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
  const t0 = performance.now();
  function frame(now: number): void {
    const p = Math.min(1, (now - t0) / duration);
    const done = Math.floor(p * (total + 12));
    let acc = 0;
    nodes.forEach((n, i) => {
      const s = orig[i];
      const keep = Math.max(0, Math.min(s.length, done - acc));
      let out = s.slice(0, keep);
      if (keep < s.length) {
        let rest = '';
        for (let k = keep; k < s.length; k++) {
          rest += s[k] === ' ' ? ' ' : pick();
        }
        out += rest;
      }
      n.textContent = out;
      acc += counts[i];
    });
    if (p < 1) {
      requestAnimationFrame(frame);
    } else {
      nodes.forEach((n, i) => {
        n.textContent = orig[i];
      });
    }
  }
  requestAnimationFrame(frame);
}

export function scrambleHover(el: HTMLElement, duration = 500): void {
  el.addEventListener('mouseenter', () => scrambleIn(el, duration), { passive: true });
}

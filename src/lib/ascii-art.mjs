// Candado ASCII (38 columnas × 19 filas, solo ASCII básico para que
// cualquier monoespaciada lo pinte idéntico). Las filas del arco (0-6)
// van en rojo; el ojo de la cerradura (:: en filas 12-13, cols 18-19)
// también. Todo lo demás, en piedra.
export const PADLOCK = {
  width: 38,
  redRows: [0, 1, 2, 3, 4, 5, 6],
  redSpans: { 12: [[18, 20]], 13: [[18, 20]] },
  lines: [
    '          .----------------.          ',
    '        /                    \\        ',
    '       |                      |       ',
    '       |                      |       ',
    '       |                      |       ',
    '       |                      |       ',
    '  .----+                      +----.  ',
    '  |                                |  ',
    '  |   .------------------------.   |  ',
    '  |   |                        |   |  ',
    '  |   |                        |   |  ',
    '  |   |         .----.         |   |  ',
    '  |   |         | :: |         |   |  ',
    '  |   |         | :: |         |   |  ',
    "  |   |         '----'         |   |  ",
    '  |   |                        |   |  ',
    "  |   '------------------------'   |  ",
    '  |                                |  ',
    "  '--------------------------------'  ",
  ],
};

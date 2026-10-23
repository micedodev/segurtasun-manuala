# UD3 · Seguridad activa

> Cinco familias diseñadas para no ser vistas

No buscan efecto inmediato, sino tiempo: cada una evita la detección a su manera.

La lista de firmas no las ve. La seguridad activa vigila comportamientos y desconfía del propio equipo.

**La idea que hay que llevarse:** Un equipo comprometido no informa de su estado. La detección fiable llega desde fuera: red, registros centralizados o equipo apagado.

---

### En esta unidad

1. [Gusano de red](#1-gusano-de-red) — No necesita que nadie haga clic.
2. [Ghostware](#2-ghostware) — Cuando se investiga, ya no hay nada que investigar.
3. [RAT](#3-rat) — Hay alguien más sentado delante de tu equipo.
4. [Malware polimórfico](#4-malware-polimorfico) — Cada copia es distinta. El comportamiento, no.
5. [Descarga al paso (drive-by download)](#5-descarga-al-paso-drive-by-download) — No haces clic en nada. La visita basta.

---

## 1. Gusano de red

**Sareko harra** · Severidad: Crítica

> No necesita que nadie haga clic.

### Definición

Se replica y se propaga solo, sin intervención humana, por servicios en red o credenciales válidas. El troyano espera una decisión; el gusano, ninguna.

### Cómo funciona

1. Entra en el primer equipo: adjunto, soporte extraíble o exploit.
2. Enumera direcciones alcanzables en la red local y, si sale, en Internet.
3. Prueba cada destino: servicio vulnerable, credencial reutilizada o recurso compartido con escritura.
4. Se copia al destino y se ejecuta allí sin que nadie abra nada.
5. Cada equipo nuevo repite el proceso: los infectados se doblan en intervalos cada vez más cortos.

### Vector de ataque

- Compartición de ficheros accesible desde toda la red interna, casi nunca segmentada.
- Servicios que escuchan por defecto, con vulnerabilidades explotables sin autenticación.
- Credenciales de administrador local idénticas en todo el parque: un acceso abre todos.
- Soportes extraíbles con ejecución automática, aún vigentes en entornos industriales aislados.

### Caso ilustrativo — Aiztondo Mekanika

*Mecanizado industrial · 2024*

En julio de 2024, un portátil de mantenimiento vuelve a la red de planta de Aiztondo Mekanika tras dos semanas fuera del dominio, sin actualizar. Trae un gusano que explota una vulnerabilidad en un servicio de compartición de ficheros.

La red de planta es plana: los cuarenta y dos equipos de control comparten un segmento sin separación entre líneas de producción. El gusano los alcanza todos en catorce minutos.

Sin carga destructiva: el tráfico de replicación causa el daño. Los autómatas pierden mensajes del ciclo de control por saturación y tres líneas se detienen por seguridad. La producción vuelve en once horas; la confianza en la red plana, no.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | No | Su objetivo es reproducirse; solo lee datos con carga específica. |
| Integridad | Sí | Modifica cada sistema que alcanza para instalarse y ejecutarse. |
| Disponibilidad | Sí | Satura red y procesador; en redes planas detiene la producción. |
| Autenticación | Sí | Supera o elude el control de acceso con credenciales reutilizadas o sin ninguna. |
| No repudio | No | Se propaga solo y queda registrado: nada se atribuye a un usuario. |

### Defensa

- Segmenta la red por zonas y funciones: un equipo comprometido solo alcanza a unos pocos.
- Contraseña de administrador local única por equipo, generada y rotada automáticamente.
- Parchea primero todo servicio a la escucha por defecto, también en equipos internos.
- Cuarentena y verificación obligatorias para equipos que vuelven tras estar sin actualizar.
- Aísla un segmento en minutos, ensayado de antemano: ante un gusano, contener importa más que analizar.

---

## 2. Ghostware

**Malware que borra su rastro · Arrastoa ezabatzen duen malwarea** · Severidad: Alta

> Cuando se investiga, ya no hay nada que investigar.

### Definición

Cumplido su objetivo, no deja evidencia de haber existido. No se oculta como un rootkit: borra indicios —registros, artefactos, marcas— y se retira para negar el incidente.

### Cómo funciona

1. Se ejecuta con la mínima huella, a menudo solo en memoria y sin escribir en disco.
2. Usa las herramientas de administración del sistema: su actividad parece trabajo normal.
3. Cumple su objetivo acotado en el tiempo: extrae unos datos o ejecuta un sabotaje puntual.
4. Limpia: borra registros generados, restaura marcas temporales y elimina ficheros temporales.
5. Se retira sin persistencia: un reinicio elimina el último rastro en memoria.

### Vector de ataque

- Ejecución en memoria desde un script: no queda fichero que analizar.
- Abuso de utilidades legítimas del sistema, que no levantan sospechas.
- Borrado selectivo de registros: un registro vacío delata.
- Marcas temporales alteradas para encajar con la instalación original.

### Caso ilustrativo — Urdaibai Bioteknologia

*Biotecnología · 2025*

En junio de 2025, Urdaibai Bioteknologia pierde un concurso público por un margen mínimo ante un competidor con una propuesta técnicamente muy similar. No hay alertas, ficheros sospechosos ni accesos anómalos.

La revisión posterior halla una sola inconsistencia: un hueco de cuarenta minutos en una madrugada de abril en el registro de seguridad. No está vacío —eso delataría—: faltan entradas mientras el registro del sistema sigue normal.

Ese hueco es la única prueba: ni método de entrada ni herramienta, nada quedó en disco. Al día siguiente la empresa envía sus registros en tiempo real a un servidor donde nadie puede borrarlos.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Extrae de forma dirigida información concreta de alto valor. |
| Integridad | Sí | Altera los registros: los datos sobre los que se apoya la investigación. |
| Disponibilidad | No | Interrumpir el servicio delataría al equipo que quiere dejar limpio. |
| Autenticación | Sí | Opera con credenciales privilegiadas previas, en sesiones legítimas ya abiertas. |
| No repudio | Sí | Destruye la trazabilidad: impide demostrar que hubo un incidente. |

### Defensa

- Envía registros en tiempo real a un sistema externo de solo añadido, fuera del alcance del origen.
- Vigila la continuidad de los registros: un hueco temporal vale tanto como una entrada sospechosa.
- Detecta por comportamiento en memoria: ve scripts sin fichero en disco.
- Registra el uso de utilidades de administración y alerta cuando aparecen donde nunca se usan.
- Conserva una línea base de marcas y resúmenes de ficheros de sistema: delata restauraciones.

---

## 3. RAT

**Troyano de acceso remoto · Urruneko sarbideko troiarra** · Severidad: Crítica

> Hay alguien más sentado delante de tu equipo.

### Definición

Da al atacante control interactivo y en tiempo real del equipo: ficheros, cámara, micrófono, teclado, pantalla y red. Al otro lado decide una persona según lo que ve.

### Cómo funciona

1. Se instala con un troyano, un exploit o minutos de acceso físico al equipo.
2. Abre una conexión inversa hacia el servidor del atacante: no necesita puertos entrantes en el cortafuegos.
3. Cifra el tráfico por puertos habituales, normalmente el 443: parece web corriente.
4. El operador explora carpetas, captura pantalla, activa la cámara o lanza órdenes según lo que encuentra.
5. Se extiende: despliega herramientas, roba credenciales y salta a otros equipos desde dentro.

### Vector de ataque

- Adjuntos y descargas disfrazados de herramientas legítimas de soporte remoto.
- Falsas ofertas de empleo con una prueba técnica para ejecutar en el equipo personal.
- Minutos de acceso físico a un equipo desbloqueado y sin vigilancia.
- Herramientas reales de control remoto con credenciales robadas de su cuenta.

### Caso ilustrativo — Lauaxeta Argitaletxea

*Edición y medios de comunicación · 2024*

En octubre de 2024, una periodista de Lauaxeta Argitaletxea recibe una oferta de colaboración con el supuesto guion de un proyecto como adjunto. El fichero instala un agente de acceso remoto y luego muestra un documento real y coherente.

Durante tres semanas, el operador se conecta solo en horario laboral, mezclado con otras conexiones y nunca más de veinte minutos. Revisa carpetas, copia una lista de fuentes y activa la cámara dos veces en reuniones internas.

La detección llega por vía indirecta: el equipo figura activo en el servidor de ficheros con su usuaria en un acto público con testigos. Sin esa coincidencia, el canal cifrado del 443 seguiría pasando por tráfico web normal.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El operador ve pantalla y ficheros, y el entorno físico por cámara y micrófono. |
| Integridad | Sí | Su control interactivo crea, modifica o elimina cualquier cosa del equipo. |
| Disponibilidad | No | Evita cualquier degradación perceptible: quiere a la víctima trabajando con normalidad. |
| Autenticación | Sí | Actúa en la sesión abierta de la víctima y hereda su identidad sin credenciales. |
| No repudio | Sí | Todo queda a nombre de la usuaria, incluidos documentos que nunca abrió. |

### Defensa

- Controla el tráfico saliente por destino: una conexión persistente a lo desconocido por el 443 es anómala, cifrada o no.
- Detecta por comportamiento el escritorio remoto y la captura de pantalla en procesos que no los usan.
- Indicador físico de cámara activa y objetivo tapado cuando no se usa.
- Bloqueo automático tras inactividad corta: cierra la ventana del acceso físico.
- Catálogo cerrado de soporte remoto autorizado y bloqueo del resto, legítimo o no.

---

## 4. Malware polimórfico

**Malware polimorfikoa** · Severidad: Alta

> Cada copia es distinta. El comportamiento, no.

### Definición

Cambia su código en cada infección o ejecución: ningún fichero es idéntico y ninguna firma lo reconoce dos veces. Cambia la forma; la función, siempre la misma.

### Cómo funciona

1. Separa motor de mutación y carga: la carga es estable y cada copia lleva una envoltura distinta.
2. Cifra la carga con una clave nueva cada vez: el contenido nunca se repite.
3. Genera un descifrador distinto: reordena instrucciones, inserta operaciones inútiles y cambia registros.
4. Cada víctima recibe un fichero con resumen único, ausente en toda lista de amenazas.
5. En memoria, el descifrador reconstruye siempre la misma carga: ahí el comportamiento delata.

### Vector de ataque

- Copia única por descarga: anula las listas de resúmenes conocidos.
- Empaquetadores y ofuscadores comerciales: nueva capa sin tocar la lógica.
- Variante metamórfica: reescribe la propia carga sin descifrador y dificulta el análisis en memoria.
- Variantes bajo demanda en la entrega, ajustadas al sistema operativo de la víctima.

### Caso ilustrativo — Zaldibar Farmazia Banaketa

*Distribución farmacéutica · 2026*

Entre enero y marzo de 2026, Zaldibar Farmazia Banaketa recibe ciento cuarenta correos con un supuesto albarán. El antivirus perimetral no bloquea ninguno: cada fichero trae un resumen distinto, ausente en las listas conocidas.

Pesan entre 180 y 210 kilobytes, con estructura por completo distinta. Al ejecutarse hacen lo mismo en el mismo orden: consultan un dominio de vida corta, crean una tarea programada con nombre aleatorio y lanzan un proceso hijo desde temporales.

La detección llega al comparar comportamientos en vez de ficheros. Una regla sobre esa secuencia identifica los ciento cuarenta casos, más dieciocho ya ejecutados sin que nadie lo advirtiera.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Suele transportar un stealer o un troyano: el robo de información es el desenlace habitual. |
| Integridad | Sí | Se instala y modifica el arranque para asegurarse la ejecución posterior. |
| Disponibilidad | No | Es evasión, no daño: por sí mismo no interrumpe ningún servicio. |
| Autenticación | No | No ataca la identidad: busca que no lo reconozcan, no suplantar a nadie. |
| No repudio | No | No manipula registros: retrasa la detección, no borra el rastro posterior. |

### Defensa

- Detecta por comportamiento, no por firma: la secuencia es estable aunque el fichero cambie.
- Analiza en entorno aislado antes de entregar: observa lo que hace, no su aspecto.
- Lista aplicaciones permitidas: autoriza solo lo conocido en vez de reconocer lo malo.
- Usa indicadores de red: los dominios recién registrados o de vida corta delatan familias enteras.
- Bloquea ejecutables en temporales y descargas: ningún software legítimo se lanza desde ahí.

---

## 5. Descarga al paso (drive-by download)

**Mamuak · El fantasma que no necesita tu clic** · Severidad: Alta

> No haces clic en nada. La visita basta.

### Definición

Ataque fantasma que se ejecuta solo al visitar una web comprometida: la página entrega con su contenido un script que busca vulnerabilidades y, si halla alguna, descarga y ejecuta un malware. No usa señuelos como el phishing ni espera decisiones como el troyano: basta con que el navegador procese la página.

### Cómo funciona

1. El atacante localiza una web vulnerable con rastreadores de fallos conocidos y le inyecta un JavaScript en su HTML, o cuela el script en un iframe, enlace o anuncio.
2. El usuario visita la página con normalidad, sin descargar nada ni aceptar avisos.
3. La web devuelve la página con el script incluido: se descarga con el resto del contenido.
4. El script contacta con un servidor Hop Point y le pide nuevos scripts, que prueban vulnerabilidades del equipo una tras otra hasta que alguna cede.
5. Si alguna cede, un último script descarga el ejecutable —el malware— desde ese servidor u otro, y lo pone en marcha.

### Vector de ataque

- Webs legítimas comprometidas: el peligro está en una web de confianza, no en un sitio sospechoso.
- Iframes, enlaces y anuncios maliciosos insertados en la página, invisibles al navegar.
- Servidor Hop Point: entrega sondeos y el exploit ajustado a cada vulnerabilidad detectada.
- Servidor de distribución: aloja la carga final y solo la sirve donde el exploit triunfa.

### Caso ilustrativo — Oarso Bidaiak

*Agencia de viajes · 2025*

En febrero de 2025, una empleada de Oarso Bidaiak consulta la agenda cultural de un medio local para una oferta de grupos. La agenda muestra anuncios de una red que días antes aceptó sin revisar uno con un iframe malicioso.

Su navegador, con dos actualizaciones pendientes y un complemento obsoleto, ejecuta el script sin mostrar nada extraño. El script contacta con un Hop Point: su tercer sondeo halla una vulnerabilidad explotable en el complemento.

Minutos después, un stealer del servidor de distribución extrae las contraseñas del navegador, incluidas las del gestor de reservas. Nadie hizo clic en nada: la única acción fue visitar una página de confianza en el momento equivocado.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Suele descargar un stealer o un troyano, que extrae credenciales y datos desde dentro. |
| Integridad | Sí | Instala un ejecutable y modifica la configuración para asegurarse ejecución y persistencia. |
| Disponibilidad | No | Busca silencio: interrumpir el servicio delataría una infección que necesita tiempo. |
| Autenticación | Sí | Se ejecuta con los privilegios de la víctima y actúa con su identidad, sin su autorización. |
| No repudio | No | No borra registros: deja rastro de visita y descarga, donde lo halla la investigación. |

### Defensa

- Actualiza sistema, navegador, complementos y antivirus: cada parche pendiente es una vulnerabilidad del sondeo.
- Antivirus proactivo con análisis de comportamiento: bloquea el exploit aunque no exista su firma.
- Activa los bloqueadores antiphishing y antimalware del navegador, con los sitios maliciosos bloqueados.
- No abras enlaces dudosos ni llegados por spam, y comprueba su destino con el cursor o la barra de estado antes de pulsar.
- Navega sin privilegios de administrador: el malware no hereda el control total aunque la vulnerabilidad ceda.

---

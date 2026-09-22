# UD3 · Seguridad activa

> Cuatro familias diseñadas para no ser vistas

Cuatro familias diseñadas específicamente para no ser vistas. Aquí la defensa deja de ser una lista de firmas y pasa a ser vigilancia del comportamiento.

Las cuatro familias de esta unidad comparten un rasgo que las separa del resto del manual: están diseñadas específicamente para no ser vistas. No persiguen un efecto inmediato, persiguen tiempo.

Eso obliga a cambiar de método. Una defensa que compara ficheros contra una lista de amenazas conocidas falla ante un código que cambia en cada copia, ante otro que borra su propio rastro y ante un tercero que manipula lo que el sistema responde cuando se le pregunta. La seguridad activa consiste en vigilar comportamientos y en desconfiar de lo que un equipo informa sobre sí mismo.

**La idea que hay que llevarse:** Cuando el sistema comprometido es la fuente de la información sobre su propio estado, esa información ya no vale. La detección fiable llega siempre desde fuera: de la red, de los registros centralizados o de un análisis hecho con el equipo apagado.

---

### En esta unidad

1. [Gusano de red](#1-gusano-de-red) — No necesita que nadie haga clic.
2. [Ghostware](#2-ghostware) — Cuando se investiga, ya no hay nada que investigar.
3. [RAT](#3-rat) — Hay alguien más sentado delante de tu equipo.
4. [Malware polimórfico](#4-malware-polimorfico) — Cada copia es distinta. El comportamiento, no.

---

## 1. Gusano de red

**Sareko harra** · Severidad: Crítica

> No necesita que nadie haga clic.

### Definición

Malware capaz de replicarse y propagarse por sí mismo de un sistema a otro sin intervención humana, aprovechando vulnerabilidades de servicios accesibles en red o credenciales válidas. La diferencia con el troyano es decisiva: el troyano espera una decisión, el gusano no espera nada.

### Cómo funciona

1. Ejecución en el primer equipo, por cualquier vía de entrada: un adjunto, un soporte extraíble o un exploit.
2. Descubrimiento: enumera las direcciones alcanzables desde ese equipo, dentro de la red local y, si puede salir, también hacia Internet.
3. Prueba de la condición de propagación: busca en cada destino el servicio vulnerable, la credencial reutilizada o el recurso compartido con permiso de escritura.
4. Copia y ejecución remota: se transfiere a sí mismo al destino y consigue que se ejecute allí, sin que nadie abra nada.
5. Crecimiento exponencial: cada equipo nuevo repite el proceso, de modo que el número de infectados se dobla en intervalos cada vez más cortos hasta agotar los objetivos alcanzables.

### Vector de ataque

- Servicios de compartición de ficheros accesibles desde toda la red interna, que rara vez están segmentados.
- Vulnerabilidades explotables sin autenticación previa en servicios que escuchan por defecto en todos los equipos.
- Credenciales de administrador local idénticas en todo el parque, que convierten un acceso en acceso universal.
- Soportes extraíbles con ejecución automática, todavía vigentes en entornos industriales aislados de la red general.

### Caso ilustrativo — Aiztondo Mekanika

*Mecanizado industrial · 2024*

En julio de 2024, un portátil de mantenimiento se conecta a la red de planta de Aiztondo Mekanika tras dos semanas fuera del dominio y sin recibir actualizaciones. Lleva un gusano que aprovecha una vulnerabilidad en un servicio de compartición de ficheros.

La red de planta es plana: los cuarenta y dos equipos de control comparten el mismo segmento, sin separación alguna entre líneas de producción. El gusano tarda catorce minutos en alcanzarlos todos.

El daño no lo causa una carga destructiva, porque el gusano no llevaba ninguna. Lo causa el propio tráfico de replicación: los autómatas empiezan a perder los mensajes del ciclo de control por saturación del segmento y tres líneas se detienen por seguridad. La producción se recupera en once horas; la confianza en la red plana, no.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | No | Su objetivo es reproducirse, no leer: sólo compromete datos si incorpora además una carga específica para ello. |
| Integridad | Sí | Modifica cada sistema que alcanza para instalarse en él y garantizar su propia ejecución. |
| Disponibilidad | Sí | La replicación consume red y procesador; en redes planas la saturación basta por sí sola para detener la producción. |
| Autenticación | Sí | Se propaga superando o eludiendo el control de acceso de cada equipo, con credenciales reutilizadas o sin necesitar ninguna. |
| No repudio | No | No genera acciones atribuibles a un usuario concreto: la propagación es automática y queda registrada como tal. |

### Defensa

- Segmentación de la red por zonas y por función, de modo que un equipo comprometido sólo pueda alcanzar a unos pocos.
- Contraseñas de administrador local únicas por equipo, generadas y rotadas de forma automática.
- Parcheo prioritario de todo servicio que escuche en red por defecto, también en los equipos internos que nunca se publican.
- Cuarentena obligatoria y verificación de estado para los equipos que se reincorporan tras estar fuera del control de actualizaciones.
- Capacidad de aislar un segmento completo en minutos, ensayada de antemano: ante un gusano, la velocidad de contención importa más que la de análisis.

---

## 2. Ghostware

**Malware que borra su rastro · Arrastoa ezabatzen duen malwarea** · Severidad: Alta

> Cuando se investiga, ya no hay nada que investigar.

### Definición

Malware diseñado para que, una vez cumplido su objetivo, no quede evidencia de que llegó a existir. No se limita a ocultarse mientras opera, como hace un rootkit: elimina activamente los indicios —entradas de registro, artefactos en disco, marcas temporales— y se retira. Su meta no es la permanencia, sino la negación del incidente.

### Cómo funciona

1. Ejecución con la menor huella posible: en muchos casos únicamente en memoria, sin escribir ningún fichero en disco.
2. Uso de las herramientas de administración del propio sistema para sus tareas, de modo que la actividad se confunda con el trabajo normal.
3. Cumplimiento del objetivo: extracción de un conjunto concreto de datos o sabotaje puntual, siempre acotado en el tiempo.
4. Limpieza: borrado selectivo de las entradas de registro generadas, restauración de marcas temporales y eliminación de los ficheros temporales creados.
5. Retirada: el proceso termina y no deja mecanismo de persistencia alguno; un reinicio elimina el último rastro en memoria.

### Vector de ataque

- Ejecución exclusivamente en memoria a partir de un script, de modo que no quede fichero que analizar después.
- Abuso de utilidades legítimas de administración ya presentes en el sistema, que no levantan ninguna sospecha.
- Borrado selectivo de registros en lugar de vaciado completo, porque un registro vacío sí constituye una señal evidente.
- Alteración de las marcas temporales de los ficheros para que encajen con las de la instalación original del sistema.

### Caso ilustrativo — Urdaibai Bioteknologia

*Biotecnología · 2025*

En junio de 2025, Urdaibai Bioteknologia pierde un concurso público por un margen mínimo frente a un competidor que presenta una propuesta técnicamente muy similar. No hay ninguna alerta de seguridad, ningún fichero sospechoso y ningún acceso anómalo registrado.

La revisión posterior encuentra una sola inconsistencia: en el servidor de proyectos, el registro de eventos de seguridad tiene un hueco de cuarenta minutos en una madrugada de abril. No está vacío —eso habría llamado la atención de inmediato—, simplemente no existen entradas en ese intervalo, mientras que el registro del sistema sí continúa con normalidad.

Ese hueco es la única prueba de la intrusión. No se recuperó el método de entrada ni se identificó la herramienta empleada, porque no quedó nada de ella en el disco. La empresa cambió su política de registros al día siguiente: desde entonces se envían en tiempo real a un servidor donde ningún administrador puede borrarlos.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Su propósito habitual es la extracción dirigida de información concreta y de alto valor. |
| Integridad | Sí | Altera los registros del sistema, que son precisamente los datos sobre los que se apoya cualquier investigación posterior. |
| Disponibilidad | No | Interrumpir el servicio sería contradictorio con su diseño: llamaría la atención justo sobre el equipo que quiere dejar limpio. |
| Autenticación | Sí | Opera con credenciales privilegiadas obtenidas previamente, aprovechando sesiones legítimas ya establecidas. |
| No repudio | Sí | Es su efecto más característico: destruye la trazabilidad hasta el punto de impedir demostrar que llegó a haber un incidente. |

### Defensa

- Envío de registros en tiempo real a un sistema externo de sólo añadido, fuera del alcance del administrador del equipo de origen.
- Vigilancia de la continuidad de los registros: un hueco temporal es tan significativo como una entrada sospechosa.
- Detección por comportamiento en memoria, capaz de ver un script que se ejecuta sin fichero asociado en disco.
- Registro del uso de las utilidades de administración del sistema, con alerta cuando aparecen en equipos que no las emplean nunca.
- Conservación de una línea base de marcas temporales y de resúmenes de los ficheros de sistema, para detectar restauraciones artificiales.

---

## 3. RAT

**Troyano de acceso remoto · Urruneko sarbideko troiarra** · Severidad: Crítica

> Hay alguien más sentado delante de tu equipo.

### Definición

Troyano que otorga al atacante control interactivo y en tiempo real sobre el equipo infectado: sistema de ficheros, cámara, micrófono, teclado, pantalla y red. A diferencia del malware automatizado, aquí hay una persona al otro lado tomando decisiones en función de lo que va viendo.

### Cómo funciona

1. Instalación mediante un troyano, un exploit o un acceso físico de pocos minutos al equipo.
2. Conexión inversa: el agente inicia él la conexión hacia el servidor del atacante, de modo que no hace falta abrir ningún puerto entrante en el cortafuegos de la víctima.
3. Canal encubierto: el tráfico se cifra y se envía por puertos habituales, normalmente el 443, para pasar por tráfico web corriente.
4. Control interactivo: el operador explora carpetas, captura la pantalla, activa la cámara o lanza órdenes, adaptándose a lo que encuentra.
5. Extensión: despliega otras herramientas, roba credenciales y salta a los demás equipos de la red desde una posición ya interna.

### Vector de ataque

- Adjuntos y descargas presentadas como herramientas legítimas de soporte remoto.
- Falsas ofertas de empleo con una prueba técnica que debe ejecutarse en el equipo personal.
- Acceso físico de pocos minutos a un equipo desbloqueado y sin vigilancia.
- Aplicaciones de control remoto reales, empleadas de forma abusiva tras obtener las credenciales de la cuenta que las gestiona.

### Caso ilustrativo — Lauaxeta Argitaletxea

*Edición y medios de comunicación · 2024*

En octubre de 2024, una periodista de Lauaxeta Argitaletxea recibe una oferta de colaboración con un documento adjunto que, según el mensaje, contiene el guion de un proyecto. El fichero instala un agente de acceso remoto y muestra a continuación un documento real, coherente con la oferta recibida.

Durante tres semanas, el operador se conecta sólo en horario laboral, entremezclado con otras conexiones, y nunca más de veinte minutos seguidos. Revisa las carpetas de trabajo, copia una lista de fuentes y activa la cámara en dos ocasiones durante reuniones internas.

La detección llega por una vía indirecta: el equipo figura como activo en el registro del servidor de ficheros a una hora en la que su usuaria estaba en un acto público con testigos. Sin esa coincidencia, el canal cifrado por el puerto 443 habría seguido siendo indistinguible del tráfico web normal.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El operador ve la pantalla y los ficheros y, si lo decide, el entorno físico a través de la cámara y el micrófono. |
| Integridad | Sí | Dispone de control interactivo completo para crear, modificar o eliminar cualquier cosa en el equipo. |
| Disponibilidad | No | Un operador humano evita cualquier degradación perceptible: le interesa que la víctima siga trabajando con total normalidad. |
| Autenticación | Sí | Actúa dentro de la sesión ya iniciada de la víctima, heredando su identidad sin necesitar credenciales. |
| No repudio | Sí | Toda acción queda registrada a nombre de la persona usuaria, incluidos accesos a documentos que nunca llegó a abrir. |

### Defensa

- Control del tráfico saliente con inspección del destino: una conexión persistente a una dirección desconocida por el puerto 443 es anómala aunque vaya cifrada.
- Detección por comportamiento de las funciones de escritorio remoto y de captura de pantalla en procesos que no deberían utilizarlas.
- Indicador físico de cámara activa y política de cubrir el objetivo cuando no se está usando.
- Bloqueo automático de sesión por inactividad corta, que cierra la ventana de oportunidad del acceso físico.
- Catálogo cerrado de herramientas de soporte remoto autorizadas y bloqueo de todas las demás, incluidas las legítimas no aprobadas.

---

## 4. Malware polimórfico

**Malware polimorfikoa** · Severidad: Alta

> Cada copia es distinta. El comportamiento, no.

### Definición

Malware que modifica su propio código en cada infección o en cada ejecución, de modo que el fichero resultante nunca es idéntico y ninguna firma basada en su contenido lo reconoce dos veces. Lo que cambia es la forma; la función que acaba ejecutando es siempre la misma.

### Cómo funciona

1. Separación entre motor de mutación y carga útil: la carga permanece estable y el motor produce envolturas distintas para cada copia.
2. Cifrado de la carga con una clave nueva cada vez, de modo que el contenido cifrado no se repita jamás entre dos ficheros.
3. Generación de un descifrador diferente: se reordenan instrucciones, se insertan operaciones inútiles y se cambian los registros empleados.
4. Entrega: cada víctima recibe un fichero con un resumen criptográfico único, que no ha aparecido nunca en ninguna lista de amenazas conocidas.
5. Ejecución: ya en memoria, el descifrador reconstruye siempre la misma carga, y es justo ahí donde el comportamiento vuelve a ser reconocible.

### Vector de ataque

- Distribución masiva con generación de una copia única por descarga, que anula cualquier lista de resúmenes conocidos.
- Empaquetadores y ofuscadores comerciales, que añaden una capa nueva a un malware ya existente sin tocar su lógica.
- Variante metamórfica: reescribe también la propia carga útil, sin necesidad de descifrador, lo que dificulta incluso el análisis en memoria.
- Generación de variantes bajo demanda en el momento de la entrega, ajustadas al sistema operativo detectado en la víctima.

### Caso ilustrativo — Zaldibar Farmazia Banaketa

*Distribución farmacéutica · 2026*

Entre enero y marzo de 2026, Zaldibar Farmazia Banaketa recibe ciento cuarenta correos con un adjunto que aparenta ser un albarán. El antivirus perimetral no bloquea ninguno: cada fichero tiene un resumen criptográfico distinto y ninguno figura en las listas de amenazas conocidas.

Los ciento cuarenta ficheros pesan entre 180 y 210 kilobytes y su estructura interna difiere por completo. Al ejecutarse, sin embargo, hacen exactamente lo mismo y en el mismo orden: consultan un dominio de vida corta, crean una tarea programada con nombre aleatorio y lanzan un proceso hijo desde la carpeta de temporales.

La detección llega cuando se deja de comparar ficheros y se empieza a comparar comportamientos. Una regla que alerta ante la secuencia consulta, tarea programada y proceso hijo desde temporales identifica los ciento cuarenta casos, y también los dieciocho que ya se habían ejecutado sin que nadie lo advirtiera.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | La carga que transporta suele ser un stealer o un troyano, de modo que el robo de información es el desenlace habitual. |
| Integridad | Sí | Se instala en el sistema y modifica su configuración de arranque para asegurarse la ejecución posterior. |
| Disponibilidad | No | El polimorfismo es una técnica de evasión, no de daño: por sí mismo no interrumpe ningún servicio. |
| Autenticación | No | No ataca el control de identidad; lo que busca es no ser reconocido por la defensa, no suplantar a nadie. |
| No repudio | No | No manipula los registros: su efecto es retrasar la detección, no borrar el rastro de lo que ocurra después. |

### Defensa

- Detección por comportamiento y no por firma: la secuencia de acciones se mantiene estable aunque el fichero cambie en cada copia.
- Análisis en entorno aislado antes de la entrega, que observa lo que el fichero hace en lugar del aspecto que tiene.
- Listas de aplicaciones permitidas, que invierten el problema: en vez de reconocer lo malo, se autoriza únicamente lo conocido.
- Indicadores de red como criterio complementario: los dominios recién registrados o de vida muy corta delatan a familias enteras.
- Reducción de la superficie de ejecución: bloqueo de ejecutables en las carpetas de temporales y de descargas, donde ningún software legítimo debería lanzarse.

---

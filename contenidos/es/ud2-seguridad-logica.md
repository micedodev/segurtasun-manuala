# UD2 · Seguridad lógica

> Cinco técnicas que sólo funcionan a escala

Cinco técnicas que comparten una idea: multiplicar el alcance. Una credencial se convierte en una cuenta, una cuenta en mil equipos y mil equipos en una caída de servicio.

Las cinco técnicas de esta unidad comparten una idea: multiplicar. Multiplicar contactos alcanzados, equipos controlados, intentos por segundo, peticiones simultáneas o meses de permanencia sin ser visto.

Es el salto de escala que separa un incidente aislado de una campaña. Aquí el atacante deja de trabajar equipo por equipo y empieza a trabajar con infraestructura: redes de miles de nodos, listas de millones de credenciales filtradas y capacidad de cómputo alquilada por horas.

**La idea que hay que llevarse:** En seguridad lógica casi nada depende de la potencia técnica, sino de la escala. Lo peligroso de una botnet no es lo que hace cada nodo, sino que hay miles haciéndolo a la vez desde direcciones que no se pueden bloquear.

---

### En esta unidad

1. [Gusano de redes sociales](#1-gusano-de-redes-sociales) — Se propaga por la confianza entre contactos, no por un fallo del servidor.
2. [Botnet](#2-botnet) — Miles de equipos ajenos obedeciendo a una sola orden.
3. [Ataque de fuerza bruta](#3-ataque-de-fuerza-bruta) — Sin ingenio. Con paciencia y con listas.
4. [Ataque DDoS](#4-ataque-ddos) — No es que no entre nadie. Es que ya no cabe nadie.
5. [Rootkit](#5-rootkit) — No oculta un fichero. Oculta la forma de mirar.

---

## 1. Gusano de redes sociales

**Sare sozialetako harra** · Severidad: Media

> Se propaga por la confianza entre contactos, no por un fallo del servidor.

### Definición

Código malicioso que se difunde a través de plataformas sociales y de mensajería utilizando las cuentas ya comprometidas para alcanzar a sus contactos. El vector no es una vulnerabilidad del servicio, sino la relación previa entre emisor y receptor: el mensaje llega de alguien conocido.

### Cómo funciona

1. Compromiso de la primera cuenta, normalmente por una contraseña reutilizada o por un enlace fraudulento.
2. Enumeración de contactos: el código lee la lista de amistades, los grupos y las conversaciones recientes de la cuenta tomada.
3. Difusión personalizada: publica o envía un mensaje breve con un enlace, adaptando el tono al de la conversación previa para que no desentone.
4. Captura del siguiente eslabón: el enlace lleva a una página que pide iniciar sesión otra vez, o que exige instalar un complemento para ver el contenido.
5. Repetición: cada cuenta nueva reinicia el ciclo, de modo que el crecimiento es multiplicativo mientras queden contactos sin alcanzar.

### Vector de ataque

- Mensajería privada de la plataforma, donde el mensaje llega con la foto y el nombre de un contacto real.
- Comentarios y menciones en publicaciones, que amplían el alcance mucho más allá de la lista de contactos.
- Aplicaciones de terceros conectadas a la cuenta mediante autorización delegada, que conservan el permiso aunque se cambie la contraseña.
- Falsos reproductores o complementos exigidos para ver un vídeo en el que supuestamente aparece la víctima.

### Caso ilustrativo — Bidegorri Mugikortasuna

*Movilidad urbana compartida · 2024*

En mayo de 2024, la cuenta corporativa de Bidegorri Mugikortasuna en una red profesional empieza a enviar mensajes privados a sus contactos. El texto es breve, está redactado en euskera y castellano, y enlaza a lo que parece un informe sectorial.

El enlace lleva a una página de inicio de sesión visualmente idéntica a la de la red. Cada contacto que introduce sus credenciales cede su cuenta, que a los pocos minutos empieza a enviar el mismo mensaje a su propia lista. En seis horas se contabilizan ciento noventa envíos desde treinta y una cuentas distintas.

Lo que frena la propagación no es una defensa técnica, sino un detalle de redacción: el mensaje emplea un tratamiento formal que la responsable de comunicación nunca usa con sus contactos habituales. Una de ellas llama por teléfono para preguntar, y el aviso se difunde más rápido que el gusano.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Las cuentas tomadas dan acceso a conversaciones privadas y a listas de contactos profesionales completas. |
| Integridad | Sí | El atacante publica y envía contenido en nombre de la organización, alterando su comunicación pública. |
| Disponibilidad | No | El servicio no se interrumpe; si la cuenta queda suspendida es por la contención posterior, no por el gusano. |
| Autenticación | Sí | Cada difusión se produce desde una cuenta legítima cuyo control ha pasado a otra persona. |
| No repudio | Sí | Los mensajes constan como enviados por el titular de la cuenta, que no puede demostrar lo contrario ante sus contactos. |

### Defensa

- Segundo factor en todas las cuentas sociales corporativas, con acceso delegado por persona en lugar de una contraseña compartida.
- Revisión trimestral de las aplicaciones de terceros autorizadas, revocando las que ya no se utilizan.
- Norma interna sencilla: ningún enlace recibido por mensajería lleva a una pantalla de inicio de sesión legítima; se accede escribiendo la dirección.
- Canal de verificación rápido —una llamada, un grupo interno— para confirmar cualquier mensaje inesperado de un contacto conocido.
- Procedimiento de respuesta documentado: cambio de contraseña, cierre de todas las sesiones activas, revocación de permisos delegados y aviso público.

---

## 2. Botnet

**Red de equipos zombi · Ordenagailu zonbien sarea** · Severidad: Alta

> Miles de equipos ajenos obedeciendo a una sola orden.

### Definición

Conjunto de equipos infectados que quedan bajo el control remoto de un mismo operador y ejecutan órdenes de forma coordinada. Cada equipo por separado apenas aporta nada: el valor de la red está en la suma, y en que sus propietarios legítimos siguen usándolos con normalidad.

### Cómo funciona

1. Infección: el equipo recibe el agente por cualquier vía —troyano, exploit o credencial de fábrica— y queda operativo como nodo.
2. Registro: el agente contacta con la infraestructura de mando y control, a menudo mediante dominios generados por algoritmo o una red descentralizada difícil de desmantelar.
3. Espera: el nodo permanece inactivo y con consumo mínimo, sondeando el canal de órdenes a intervalos irregulares.
4. Ejecución coordinada: cuando llega la orden, miles de nodos actúan a la vez para enviar correo, probar credenciales, generar tráfico o distribuir malware.
5. Mantenimiento: el operador actualiza el agente, sustituye los dominios bloqueados y alquila capacidad a terceros por horas.

### Vector de ataque

- Dispositivos del internet de las cosas con credenciales de fábrica accesibles desde Internet: cámaras, grabadores y routers domésticos.
- Equipos de usuario infectados por troyano, que aportan direcciones residenciales difíciles de bloquear sin afectar a inocentes.
- Servidores comprometidos por vulnerabilidades sin parchear, especialmente valorados por su ancho de banda simétrico.
- Alquiler de la propia red a terceros, que multiplica el número de campañas distintas lanzadas desde la misma infraestructura.

### Caso ilustrativo — Mendizorrotz Telekomunikazioak

*Operador de telecomunicaciones · 2025*

En febrero de 2025, el equipo de operaciones de Mendizorrotz Telekomunikazioak detecta un patrón extraño en su red de acceso residencial: cuatro mil ochocientos routers de un mismo modelo consultan, cada noventa minutos, un dominio que cambia a diario.

El modelo afectado expone su interfaz de gestión remota y la credencial de fábrica nunca se modificó, porque el propio procedimiento de aprovisionamiento no la cambiaba. Cada equipo infectado consume menos de un kilobit por segundo en reposo: ningún cliente notó absolutamente nada.

La red se utilizó durante cinco semanas para probar credenciales contra portales de terceros, a razón de tres intentos por minuto y por nodo. Desde el punto de vista del portal atacado no había una fuente que bloquear: había cuatro mil ochocientas direcciones residenciales legítimas comportándose casi como usuarios reales.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El operador tiene acceso a los equipos infectados y a lo que circula por ellos, aunque su interés principal sea la capacidad. |
| Integridad | Sí | El agente modifica la configuración del equipo para asegurar su permanencia y puede alterar el tráfico que lo atraviesa. |
| Disponibilidad | Sí | Tanto para la víctima final de las campañas como para el propietario del equipo, cuyos recursos se consumen sin su conocimiento. |
| Autenticación | Sí | El acceso inicial se produce casi siempre con credenciales de fábrica o robadas que el equipo acepta como válidas. |
| No repudio | Sí | Las acciones parten de direcciones de clientes legítimos, que aparecen ante terceros como responsables del ataque. |

### Defensa

- Cambio forzoso de las credenciales de fábrica durante el aprovisionamiento, sin posibilidad de conservar el valor original.
- Cierre de las interfaces de administración hacia Internet: la gestión debe llegar por la red del operador, nunca por la pública.
- Actualización automática del firmware de los dispositivos gestionados, con calendario y verificación posterior de aplicación.
- Detección en la propia red de patrones de consulta anómalos: dominios de vida muy corta o conexiones regulares a horas sin actividad humana.
- Filtrado de salida por parte del operador, para que ningún cliente pueda enviar tráfico con la dirección de origen falsificada.

---

## 3. Ataque de fuerza bruta

**Indar gordineko erasoa** · Severidad: Media

> Sin ingenio. Con paciencia y con listas.

### Definición

Intento sistemático de adivinar una credencial probando combinaciones hasta acertar. En su forma pura recorre todo el espacio de posibilidades; en la práctica se ataja con diccionarios de contraseñas filtradas, que reducen millones de intentos a unos pocos cientos bien elegidos.

### Cómo funciona

1. Obtención del objetivo: un servicio con autenticación expuesta y, a ser posible, una lista de nombres de usuario válidos.
2. Elección de la estrategia: diccionario de contraseñas frecuentes, combinaciones derivadas del nombre de la organización o credenciales ya filtradas en otras brechas.
3. Distribución de los intentos: se reparten entre muchas direcciones de origen y se espacian en el tiempo para no activar el bloqueo por intentos fallidos.
4. Detección del acierto: la respuesta del servidor cambia —código, tiempo de respuesta o texto del mensaje— y el proceso lo registra automáticamente.
5. Validación y uso: la credencial se prueba en los demás servicios de la organización, apostando por la reutilización de contraseñas.

### Vector de ataque

- Servicios de acceso remoto y paneles de administración publicados sin límite alguno de intentos.
- Pulverización de contraseñas: una sola contraseña muy común probada contra cientos de usuarios, de modo que ninguna cuenta llega a bloquearse.
- Relleno de credenciales: pares de usuario y contraseña de filtraciones anteriores probados tal cual, apostando por la reutilización entre servicios.
- Ataque fuera de línea contra un fichero de resúmenes robado, donde no existe límite de intentos ni registro que delate el proceso.

### Caso ilustrativo — Landabe Kooperatiba

*Agroalimentario · 2024*

El portal de proveedores de Landabe Kooperatiba registra en septiembre de 2024 un aumento de accesos fallidos que no dispara ninguna alarma: cada dirección de origen realiza un único intento cada cuarenta minutos, y el umbral de bloqueo está fijado en cinco intentos en cinco minutos.

La estrategia no consiste en probar muchas contraseñas contra un usuario, sino una contraseña plausible contra los trescientos usuarios del portal. La elegida combina el nombre de la cooperativa con el año en curso. Cuatro cuentas la tenían exactamente así.

Una de esas cuatro pertenecía a una persona con permiso para modificar los datos bancarios de los proveedores. El ataque duró nueve días y en ningún momento bloqueó una cuenta, porque nunca llegó a fallar dos veces seguidas contra la misma.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Una sola credencial acertada da acceso a toda la información que esa cuenta puede consultar. |
| Integridad | Sí | Si la cuenta comprometida tiene permisos de escritura, el atacante hereda esa capacidad íntegramente. |
| Disponibilidad | No | El objetivo es entrar sin llamar la atención; sólo un ataque descuidado provoca bloqueos masivos de cuentas. |
| Autenticación | Sí | Es el control atacado de forma directa: superar la comprobación de identidad sin conocer el secreto. |
| No repudio | Sí | Una vez dentro, toda la actividad queda registrada como propia del titular legítimo de la cuenta. |

### Defensa

- Segundo factor de autenticación: convierte una contraseña acertada en un intento insuficiente.
- Retardo progresivo tras cada intento fallido en lugar de bloqueo fijo, que frena al atacante sin permitirle dejar cuentas fuera de servicio.
- Comprobación de las contraseñas nuevas contra listas de credenciales filtradas, en el momento mismo de establecerlas.
- Vigilancia del volumen global de fallos por servicio y no sólo por cuenta: la pulverización únicamente se ve en el agregado.
- Almacenamiento de contraseñas con funciones de derivación lentas y con sal, para que un fichero robado no se convierta en credenciales en claro.

---

## 4. Ataque DDoS

**Denegación de servicio distribuida · Banatutako zerbitzu ukapena** · Severidad: Alta

> No es que no entre nadie. Es que ya no cabe nadie.

### Definición

Ataque que busca agotar un recurso finito del objetivo —ancho de banda, conexiones simultáneas, capacidad de proceso o memoria— para que deje de atender a los usuarios legítimos. Se llama distribuido porque el tráfico procede de muchas fuentes a la vez, lo que impide resolverlo bloqueando un origen.

### Cómo funciona

1. Elección del recurso a agotar: el enlace de red, la tabla de conexiones del cortafuegos, el servidor de aplicación o la base de datos.
2. Reunión de la capacidad: una botnet propia o alquilada, más servicios mal configurados que sirvan para amplificar el tráfico.
3. Amplificación: se envían peticiones pequeñas con la dirección de origen falsificada a servicios que responden con paquetes mucho mayores, dirigidos a la víctima.
4. Saturación: el recurso elegido se llena y el servicio empieza a rechazar peticiones o a responder con una lentitud inaceptable.
5. Persistencia adaptativa: si la víctima mitiga una técnica, el operador cambia de vector, de puerto o de patrón y continúa.

### Vector de ataque

- Volumétrico: se satura el ancho de banda del enlace, amplificando mediante servicios DNS o NTP mal configurados.
- De protocolo: se agotan las tablas de estado del cortafuegos o del balanceador con conexiones dejadas a medio abrir.
- De capa de aplicación: pocas peticiones, pero muy costosas, como búsquedas que obligan a recorrer la base de datos completa.
- Extorsión previa: aviso de ataque con demanda de pago, respaldado por una demostración breve de capacidad.

### Caso ilustrativo — Gorbeia Energia

*Comercializadora de energía · 2025*

El 14 de noviembre de 2025, coincidiendo con el día de mayor volumen de cambios de tarifa del año, el portal de clientes de Gorbeia Energia deja de responder. El enlace de la compañía no está saturado: el tráfico entrante apenas supera el de un lunes cualquiera.

El ataque es de capa de aplicación. Unas mil doscientas direcciones distintas lanzan, cada pocos segundos, una consulta al comparador de tarifas con parámetros que obligan a recalcular el histórico completo de un contrato. Cada petición ocupa un proceso durante casi tres segundos.

Con ciento sesenta procesos disponibles en el servidor de aplicación, bastaron menos de sesenta peticiones por segundo para dejar el portal inservible durante cuatro horas. El cortafuegos no vio nada anómalo: todas las peticiones eran sintácticamente correctas y procedían de sesiones válidas.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | No | No se extrae información, aunque el ataque puede usarse como distracción mientras se ejecuta otra intrusión en paralelo. |
| Integridad | No | Los datos almacenados no se alteran: el ataque actúa sobre la capacidad de atender, no sobre el contenido. |
| Disponibilidad | Sí | Es el objetivo único y declarado del ataque, y la única propiedad sobre la que actúa. |
| Autenticación | No | No se supera ningún control de identidad; el ataque funciona igual con peticiones completamente anónimas. |
| No repudio | No | No se atribuyen acciones falsas a ningún usuario, aunque el rastro señale a equipos intermediarios que también son víctimas. |

### Defensa

- Servicio de mitigación con capacidad muy superior a la del enlace propio, contratado antes de necesitarlo y no durante el ataque.
- Limitación de peticiones por origen y por operación costosa, distinguiendo entre pedir una página y lanzar un cálculo pesado.
- Caché de todas las respuestas que no dependen del usuario, para que la mayor parte del tráfico no llegue nunca a la aplicación.
- Diseño degradable: ante saturación, desactivar las funciones costosas y mantener las esenciales en lugar de caer por completo.
- Plan de respuesta ensayado con el proveedor de conectividad, con contactos y procedimiento por escrito y accesibles sin red.

---

## 5. Rootkit

**Kit de encubrimiento · Errotkita** · Severidad: Crítica

> No oculta un fichero. Oculta la forma de mirar.

### Definición

Conjunto de herramientas que se instala con privilegios elevados para mantener el acceso a un sistema y, sobre todo, para ocultar su propia presencia y la de otros componentes maliciosos. No aporta capacidades ofensivas nuevas: manipula lo que el sistema responde cuando se le pregunta qué está ejecutando.

### Cómo funciona

1. Obtención de privilegios: el rootkit necesita permisos de administración o de núcleo, que consigue mediante un exploit local o credenciales robadas.
2. Inserción en la ruta de consulta: se interpone entre las aplicaciones y el sistema, modificando llamadas, tablas de funciones o módulos del núcleo.
3. Filtrado de respuestas: cuando un programa pide la lista de procesos, ficheros o conexiones, devuelve la lista real menos sus propios elementos.
4. Protección de la persistencia: impide que sus ficheros y sus entradas de arranque se listen, se modifiquen o se borren.
5. Servicio al resto del ataque: bajo esa capa de ocultación conviven puertas traseras, registradores de teclado o agentes de botnet, invisibles para las herramientas del propio sistema.

### Vector de ataque

- En espacio de usuario: sustitución de librerías compartidas, la variante más sencilla y también la más fácil de detectar.
- En espacio de núcleo: carga de un módulo o controlador malicioso, que ve y controla todo lo que ve el sistema operativo.
- En el gestor de arranque: se ejecuta antes que el sistema operativo, de modo que éste ya nace bajo su control.
- En el firmware del equipo o de una tarjeta, donde sobrevive incluso al formateo completo del disco.

### Caso ilustrativo — Errekalde Kimika

*Industria química · 2023*

El servidor de control de producción de Errekalde Kimika presenta desde marzo de 2023 un comportamiento que nadie consigue explicar: el consumo medio de red nocturno triplica el de la misma máquina un año antes, pero ninguna herramienta local muestra proceso ni conexión que lo justifique.

Las comprobaciones se hacen desde el propio servidor, y ahí está el problema. Un controlador cargado en el núcleo filtra las respuestas: cuando se solicita la lista de conexiones, devuelve todas menos las suyas. Vista desde dentro, la máquina es coherente y está limpia.

La discrepancia se resuelve mirando desde fuera. El contador de tráfico del conmutador registra cuatro veces más datos salientes de los que el servidor declara. Con esa evidencia se analiza el disco desde un sistema externo y aparece el controlador, junto a un agente de exfiltración activo desde hacía siete meses.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Bajo su capa de ocultación operan de forma estable y prolongada herramientas de robo de información. |
| Integridad | Sí | Altera componentes del sistema operativo y, con ello, la fiabilidad de todo lo que ese sistema informa. |
| Disponibilidad | No | Su interés es que el sistema funcione con normalidad: una caída provocaría exactamente el análisis que quiere evitar. |
| Autenticación | Sí | Conserva acceso privilegiado permanente sin volver a pasar por ningún control de identidad. |
| No repudio | Sí | Manipula y oculta los registros, de modo que la reconstrucción de lo ocurrido deja de ser fiable. |

### Defensa

- Arranque seguro con verificación de firma y módulo de plataforma confiable, para que no se cargue código no firmado antes del sistema.
- Supervisión desde fuera del equipo: contadores del conmutador, registros del cortafuegos y telemetría enviada a un servidor independiente.
- Centralización de registros en tiempo real hacia un sistema en el que el equipo comprometido no pueda escribir ni borrar.
- Análisis forense desde un medio externo y de confianza, nunca con las herramientas del sistema sospechoso.
- Ante confirmación, reinstalación completa y actualización de firmware: la limpieza selectiva de un rootkit de núcleo no ofrece ninguna garantía.

---

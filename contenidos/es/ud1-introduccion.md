# UD1 · Introducción a la seguridad

> Ocho amenazas que rara vez aparecen solas

Ocho amenazas que aparecen, en alguna combinación, en casi todo incidente real. Antes de defender hay que saber qué busca cada una y por dónde entra.

La seguridad empieza por un inventario honesto de lo que puede salir mal. Esta unidad recoge ocho amenazas que casi nunca actúan por separado: un incidente real suele ser una cadena en la que cada pieza prepara el terreno a la siguiente.

El orden tampoco es casual. Las cuatro primeras explican cómo se consigue el acceso; las cuatro siguientes, qué se hace con él una vez dentro. Un correo fraudulento entrega una credencial, esa credencial permite instalar un troyano, el troyano deja una puerta trasera y por ella entra el ransomware tres semanas más tarde.

**La idea que hay que llevarse:** Ninguna de estas ocho amenazas necesita un fallo técnico espectacular. Le basta con una credencial reutilizada, un parche pendiente o una decisión tomada con prisa.

---

### En esta unidad

1. [Phishing](#1-phishing) — Se ataca a la persona, no al sistema.
2. [Ataque de intermediario](#2-ataque-de-intermediario) — Dos partes creen hablar entre sí. Hablan con el atacante.
3. [Troyano](#3-troyano) — Se instala porque el usuario quiere instalarlo.
4. [Puerta trasera](#4-puerta-trasera) — El problema no es cómo entró. Es que puede volver.
5. [Spyware](#5-spyware) — No rompe nada. Sólo mira.
6. [Stealer](#6-stealer) — Entra, se lo lleva todo y desaparece en segundos.
7. [Ransomware](#7-ransomware) — Los datos siguen ahí. Sólo que ya no son tuyos.
8. [Exploit](#8-exploit) — La llave exacta de una cerradura concreta.

---

## 1. Phishing

**Suplantación mediante señuelo** · Severidad: Alta

> Se ataca a la persona, no al sistema.

### Definición

Técnica de ingeniería social en la que el atacante se hace pasar por una entidad de confianza para inducir a la víctima a entregar credenciales, datos personales o dinero, o a ejecutar un fichero. No explota un fallo del software: explota la prisa, la jerarquía y la costumbre.

### Cómo funciona

1. Reconocimiento: el atacante reúne nombres, cargos, proveedores habituales y formato de las direcciones de correo a partir de fuentes públicas.
2. Preparación del señuelo: se clona el aspecto de un servicio legítimo y se registra un dominio parecido al real, con una letra cambiada o un dominio de primer nivel distinto.
3. Entrega: el mensaje llega por correo, SMS o mensajería corporativa con un pretexto que impone urgencia y desalienta la comprobación.
4. Captura: la víctima introduce sus credenciales en el formulario falso, que las reenvía al atacante y después redirige al sitio auténtico para no levantar sospechas.
5. Uso inmediato: las credenciales se emplean en minutos, a menudo de forma automatizada, antes de que nadie perciba nada.

### Vector de ataque

- Correo electrónico con enlace o adjunto: sigue siendo el canal mayoritario con diferencia.
- SMS y mensajería instantánea, donde la dirección de destino aparece acortada y no se puede inspeccionar antes de pulsar.
- Llamada telefónica de apoyo que da credibilidad al mensaje escrito enviado minutos antes.
- Códigos QR impresos o insertados en documentos, que eluden por completo el análisis de enlaces de la pasarela de correo.

### Caso ilustrativo — Nerbioi Logistika, S. L.

*Transporte y distribución · 2024*

En marzo de 2024, el departamento de administración de Nerbioi Logistika recibe un correo aparentemente enviado por su operador de telefonía. El mensaje anuncia una factura pendiente y enlaza a un portal idéntico al real, alojado en el dominio nerbioi-facturacion.net, registrado seis horas antes.

La persona que gestiona los pagos introduce el usuario y la contraseña corporativos. El formulario falso valida el formato de los datos, los reenvía al servidor del atacante y redirige al portal auténtico, donde la sesión aparece cerrada. La víctima interpreta que ha caducado, vuelve a entrar con normalidad y no informa de nada.

Veinte minutos después, esas mismas credenciales se usan para acceder al correo corporativo desde una dirección exterior. El atacante crea una regla de reenvío automático y permanece leyendo la correspondencia con proveedores durante once días, hasta que prepara un cambio de número de cuenta sobre una factura real.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Las credenciales capturadas abren el correo y todos los servicios asociados a esa identidad. |
| Integridad | Sí | Con la cuenta tomada, el atacante modifica reglas de buzón, documentos y datos bancarios de las facturas. |
| Disponibilidad | No | El servicio sigue operativo: al atacante le interesa precisamente que nada se interrumpa ni llame la atención. |
| Autenticación | Sí | El sistema acepta como legítimo a quien no lo es, porque presenta credenciales válidas. |
| No repudio | Sí | Las acciones quedan registradas a nombre de la víctima, que no dispone de forma de demostrar que no fue ella. |

### Defensa

- Segundo factor resistente al phishing, como claves FIDO2 o passkeys: no puede reenviarse a un dominio distinto del legítimo porque está vinculado a él.
- SPF, DKIM y DMARC publicados y con política de rechazo, para que nadie pueda enviar correo suplantando el dominio propio.
- Aviso visual automático en todo mensaje procedente del exterior y cuarentena de los dominios registrados en los últimos treinta días.
- Procedimiento fuera de banda obligatorio para cualquier cambio de datos bancarios: llamada a un número ya conocido, nunca al que figura en el mensaje.
- Simulacros periódicos cuyo resultado sirva para formar y no para sancionar; el objetivo es que se notifique rápido, no que nadie caiga jamás.

---

## 2. Ataque de intermediario

**Man-in-the-Middle · Erdiko gizonaren erasoa** · Severidad: Alta

> Dos partes creen hablar entre sí. Hablan con el atacante.

### Definición

Ataque en el que un tercero se sitúa en el camino de una comunicación y la retransmite, pudiendo leerla y modificarla sin que emisor ni receptor lo perciban. La víctima no pierde la conexión: recibe exactamente el servicio que esperaba, sólo que a través de alguien más.

### Cómo funciona

1. Posicionamiento: el atacante consigue estar en la ruta del tráfico, levantando un punto de acceso inalámbrico con el mismo nombre que el legítimo o envenenando la tabla ARP del segmento.
2. Interceptación: todo el tráfico de la víctima pasa por su equipo antes de llegar al destino real.
3. Degradación del cifrado: si la conexión es HTTP se lee en claro; si es HTTPS, se intenta forzar una versión sin cifrar o presentar un certificado propio.
4. Retransmisión: el atacante reenvía la petición al servidor auténtico y devuelve la respuesta a la víctima, de modo que la experiencia es indistinguible de la normal.
5. Explotación: se extraen cookies de sesión, credenciales o números de cuenta, y opcionalmente se altera el contenido en tránsito.

### Vector de ataque

- Redes inalámbricas abiertas o con clave compartida, donde cualquiera puede publicar un nombre de red gemelo.
- Envenenamiento ARP dentro de una red local conmutada, que redirige el tráfico del segmento al equipo del atacante.
- Suplantación de DNS o de servidor DHCP, que entrega a la víctima una puerta de enlace o un resolutor controlados.
- Equipos intermedios comprometidos: un router sin actualizar puede convertirse en un intermediario permanente y silencioso.

### Caso ilustrativo — Itsasargi Aholkularitza

*Consultoría de ingeniería · 2025*

Durante un congreso celebrado en septiembre de 2025, un consultor de Itsasargi Aholkularitza conecta su portátil a una red abierta llamada Congreso_Wifi_Libre. La red legítima del recinto se llamaba CongresoWiFi; la que ofrece mejor señal desde la primera fila es la del atacante.

El intruso actúa como puerta de enlace. Cuando el consultor abre el gestor documental de la empresa, recibe un certificado emitido por una autoridad que no está en el almacén de confianza del sistema. El navegador muestra una advertencia clara; el consultor, con prisa por proyectar, la acepta.

Con la conexión ya establecida a través suyo, el atacante obtiene la cookie de sesión del gestor documental. No necesita la contraseña: reutiliza la cookie desde su propio equipo y descarga esa misma tarde los planos de tres proyectos en concurso.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Todo el tráfico sin cifrar, y el cifrado con un certificado aceptado a la fuerza, queda legible para el intermediario. |
| Integridad | Sí | El atacante puede alterar la respuesta antes de entregarla: cambiar un número de cuenta o inyectar contenido en la página. |
| Disponibilidad | No | Interrumpir la conexión delataría el ataque; al intermediario le conviene que todo funcione con normalidad. |
| Autenticación | Sí | La víctima cree autenticarse contra el servidor legítimo y lo hace contra el equipo del atacante. |
| No repudio | Sí | Las peticiones llegan al servidor con la sesión válida de la víctima, que figura como autora de todo lo que ocurre. |

### Defensa

- HTTPS obligatorio con HSTS y precarga, de modo que el navegador se niegue a usar la versión sin cifrar aunque se le indique.
- VPN corporativa siempre activa en los equipos que salen de la oficina: el túnel cifrado neutraliza al intermediario de la red local.
- Eliminación por política de la opción de continuar ante una advertencia de certificado en los equipos gestionados.
- Inspección dinámica de ARP y DHCP snooping en los conmutadores de la red interna, que descartan las respuestas no autorizadas.
- Sesiones de vida corta y cookies marcadas Secure, HttpOnly y SameSite, para reducir la ventana de reutilización de un robo.

---

## 3. Troyano

**Caballo de Troya · Troiarra** · Severidad: Alta

> Se instala porque el usuario quiere instalarlo.

### Definición

Programa que ofrece una funcionalidad aparentemente útil y ejecuta además, de forma oculta, una carga maliciosa. A diferencia del gusano, no se propaga solo: necesita que alguien decida ejecutarlo, y toda su ingeniería está puesta en conseguir esa decisión.

### Cómo funciona

1. Empaquetado: el código malicioso se adjunta a un programa real que sí hace lo que promete, para que nada falle si la víctima lo comprueba.
2. Distribución: se publica en un sitio de descargas, se envía como adjunto o se coloca en un anuncio de buscador que imita la web oficial del fabricante.
3. Ejecución: la víctima lo instala voluntariamente, con frecuencia concediendo permisos de administrador porque el instalador los pide con total normalidad.
4. Persistencia: la carga se copia fuera de la carpeta de descargas y se registra para arrancar con el sistema, con un nombre plausible.
5. Activación: contacta con el servidor de mando y control y espera instrucciones, o despliega directamente su función: espionaje, robo o acceso remoto.

### Vector de ataque

- Instaladores de software gratuito o versiones portables descargadas de repositorios no oficiales.
- Anuncios de buscador situados por encima del resultado auténtico, que llevan a una copia de la web del fabricante.
- Adjuntos ofimáticos con macros, donde el documento es real y la macro es la carga.
- Falsas actualizaciones de navegador o de lector de documentos, mostradas desde una web comprometida.

### Caso ilustrativo — Goierri Elektronika

*Fabricación de componentes · 2023*

En noviembre de 2023, un técnico de Goierri Elektronika necesita una herramienta para convertir planos entre dos formatos. Busca el nombre del programa y descarga el primer resultado: un anuncio que apunta a goierri-cadtools.com, una copia razonable de la web del fabricante.

El instalador funciona. La herramienta convierte los planos correctamente y el técnico la usa durante semanas sin incidencias. Junto con ella se ha instalado un segundo ejecutable en el perfil del usuario, registrado como tarea programada con el nombre de un servicio de actualización.

Ese segundo componente no hace nada visible durante dieciocho días. Pasado ese plazo abre una conexión saliente por el puerto 443, indistinguible del tráfico web ordinario, y queda a la espera. Sistemas sólo lo detecta cuando una revisión de tareas programadas encuentra una entrada que no corresponde a ningún producto instalado.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | La carga se ejecuta con los permisos del usuario y alcanza exactamente todo lo que él alcanza. |
| Integridad | Sí | Puede modificar ficheros, configuración y otros programas del equipo infectado sin restricción. |
| Disponibilidad | No | Un troyano bien construido no degrada el rendimiento: llamar la atención acortaría su vida útil. |
| Autenticación | Sí | Actúa dentro de una sesión ya autenticada, de modo que hereda la identidad del usuario sin necesitar sus credenciales. |
| No repudio | Sí | Los registros atribuyen al usuario legítimo acciones que no ordenó ni conoció. |

### Defensa

- Instalación de software únicamente desde el repositorio corporativo o la web oficial del fabricante, verificando la firma digital del paquete.
- Retirada de los permisos de administrador local en las cuentas de uso diario.
- Listas de aplicaciones permitidas en los equipos críticos: lo que no está aprobado, no se ejecuta.
- Bloqueo por defecto de las macros en documentos procedentes de Internet, sin opción de habilitarlas con un clic.
- Revisión periódica de los mecanismos de arranque: tareas programadas, servicios y claves de ejecución automática.

---

## 4. Puerta trasera

**Backdoor · Atzeko atea** · Severidad: Crítica

> El problema no es cómo entró. Es que puede volver.

### Definición

Mecanismo que permite acceder a un sistema saltándose los controles de autenticación previstos. Puede ser el rastro que deja un atacante tras un compromiso o una vía de acceso dejada por el propio fabricante. Su valor no está en la intrusión inicial, sino en garantizar el regreso.

### Cómo funciona

1. Obtención del acceso inicial por cualquier vía: un troyano, una credencial robada o una vulnerabilidad explotada.
2. Instalación del mecanismo de retorno: una cuenta añadida, una clave pública insertada, un servicio que escucha en un puerto poco vigilado o una tarea que inicia la conexión hacia fuera.
3. Camuflaje: se le asigna un nombre plausible y se sitúa entre elementos legítimos del sistema, donde nadie mira dos veces.
4. Verificación: el atacante comprueba que la vía funciona con el equipo ya limpio de la herramienta de intrusión original.
5. Uso diferido: la puerta puede permanecer inactiva durante meses, hasta que vuelva a interesar entrar.

### Vector de ataque

- Claves públicas SSH añadidas al fichero de claves autorizadas de una cuenta de servicio.
- Cuentas de usuario nuevas con un nombre muy parecido al de una cuenta legítima del sistema.
- Webshell subida a un directorio de un servidor web con permisos de escritura mal ajustados.
- Interfaces de administración del fabricante con credenciales por defecto que nunca se cambiaron.
- Conexión inversa periódica hacia el exterior, que evita tener que abrir ningún puerto entrante.

### Caso ilustrativo — Harrigain Ingeniaritza

*Ingeniería civil · 2024*

El equipo de sistemas de Harrigain Ingeniaritza detecta en junio de 2024 un troyano en un servidor de ficheros, lo elimina y da el incidente por cerrado. La herramienta del atacante desaparece del disco y los análisis posteriores salen limpios.

Cinco meses después, una auditoría de configuración encuentra en ese mismo servidor una segunda clave pública autorizada para la cuenta de servicio de copias de seguridad. Nadie de la casa la generó. Se había añadido cuatro días antes de la limpieza.

Entre ambas fechas, el atacante entró en once ocasiones. Ninguna generó una alerta: el acceso se producía con una cuenta legítima, por el puerto que esa cuenta usa a diario y dentro de la ventana horaria de las copias.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El acceso se obtiene con privilegios reales sobre los datos que gestiona el sistema. |
| Integridad | Sí | Quien puede volver cuando quiera puede modificar cualquier cosa, incluidos los propios registros de auditoría. |
| Disponibilidad | No | La puerta trasera no busca detener el servicio; necesita que siga en pie para seguir siendo útil. |
| Autenticación | Sí | Su definición misma es el acceso sin superar el control de autenticación previsto por el diseño. |
| No repudio | Sí | Al utilizar cuentas legítimas, la trazabilidad apunta a un usuario que no participó en nada. |

### Defensa

- Tras cualquier compromiso, asumir que existe persistencia: revisar cuentas, claves autorizadas, tareas programadas y servicios antes de reincorporar el equipo.
- Reconstrucción del sistema desde una imagen conocida en lugar de limpieza selectiva, siempre que sea viable.
- Inventario controlado de cuentas y de claves públicas, con alerta automática ante cualquier alta no registrada.
- Supervisión del tráfico saliente, no sólo del entrante: una conexión inversa únicamente se ve mirando hacia fuera.
- Cambio obligatorio de todas las credenciales por defecto en el alta de cualquier equipo, incluido el hardware de red.

---

## 5. Spyware

**Programa espía · Programa espioia** · Severidad: Media

> No rompe nada. Sólo mira.

### Definición

Software que recopila información sobre la actividad de un sistema o de su usuario y la transmite a un tercero sin consentimiento informado. Abarca desde módulos que perfilan hábitos de navegación hasta herramientas de vigilancia que registran pulsaciones de teclado y capturan la pantalla.

### Cómo funciona

1. Instalación: llega como componente adicional de otro programa, como extensión de navegador o a través de un troyano.
2. Recolección: registra aquello que se le ha pedido observar, desde direcciones visitadas y aplicaciones abiertas hasta pulsaciones de teclado y capturas de pantalla.
3. Almacenamiento local: acumula los datos en un fichero cifrado o codificado para que una inspección superficial no revele nada.
4. Exfiltración: los envía por lotes a intervalos amplios, usando protocolos habituales como HTTPS o DNS para confundirse con el tráfico normal.
5. Permanencia: se actualiza y vuelve a registrarse en el arranque. Su objetivo no es actuar, es durar.

### Vector de ataque

- Extensiones de navegador con permiso para leer y modificar el contenido de todas las páginas visitadas.
- Programas gratuitos que incluyen componentes de terceros aceptados en un instalador con las opciones ya marcadas.
- Aplicaciones móviles que solicitan permisos desproporcionados para la función que anuncian.
- Instalación con acceso físico al equipo, en escenarios de vigilancia dirigida a una persona concreta.

### Caso ilustrativo — Ortzadar Hezkuntza

*Formación reglada · 2025*

En enero de 2025, la coordinadora académica de Ortzadar Hezkuntza instala una extensión de navegador que promete corregir la ortografía dentro de los formularios de la plataforma de matrícula. La extensión cumple lo que anuncia y tiene valoraciones positivas.

Los permisos que solicita incluyen leer y modificar el contenido de todos los sitios visitados: exactamente los que necesita cualquier corrector, de modo que nada destaca en la instalación. Tres semanas después, una actualización automática añade un módulo que copia el contenido de los formularios antes de enviarlos.

Durante dos meses, los datos personales de las personas matriculadas salieron acompañando a peticiones legítimas de comprobación ortográfica. El tráfico se dirigía a un dominio del propio fabricante de la extensión y nunca superó unos pocos kilobytes por sesión, muy por debajo del umbral configurado en las alertas de exfiltración.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Es exactamente el propósito del programa: extraer información que no le corresponde conocer. |
| Integridad | No | El observador típico no altera los datos; modificarlos aumentaría mucho el riesgo de ser descubierto. |
| Disponibilidad | No | Se diseña para consumir pocos recursos y no provocar ninguna degradación perceptible. |
| Autenticación | Sí | Los módulos que registran pulsaciones capturan credenciales, y con ellas la identidad del usuario queda en manos de un tercero. |
| No repudio | No | Por sí mismo no genera acciones atribuibles a la víctima; ese riesgo aparece cuando las credenciales robadas se utilizan después. |

### Defensa

- Catálogo cerrado de extensiones aprobadas y bloqueo por política de la instalación de cualquier otra.
- Revisión de los permisos solicitados en cada actualización, y no sólo en el momento de la instalación inicial.
- Supervisión del tráfico saliente por destino y por regularidad, prestando atención a las peticiones pequeñas y constantes.
- Cifrado de disco y bloqueo automático de sesión, que impiden la instalación con acceso físico breve.
- Revisión periódica del software instalado, contrastándolo con el inventario aprobado.

---

## 6. Stealer

**Ladrón de credenciales · Kredentzial lapurra** · Severidad: Alta

> Entra, se lo lleva todo y desaparece en segundos.

### Definición

Malware especializado en localizar y extraer los secretos almacenados en un equipo —contraseñas guardadas en el navegador, cookies de sesión, tokens de aplicaciones y ficheros de configuración— y enviarlos en una única operación. A diferencia del spyware, no busca permanecer: está optimizado para una sola ejecución rápida.

### Cómo funciona

1. Ejecución única: llega normalmente como troyano y se lanza una sola vez, con los permisos del usuario que lo abrió.
2. Inventario: recorre las rutas conocidas de navegadores, clientes de correo, clientes FTP y aplicaciones de mensajería.
3. Descifrado local: emplea las propias claves del sistema operativo, accesibles desde la sesión del usuario, para descifrar las contraseñas guardadas.
4. Empaquetado: comprime el conjunto y añade metadatos del equipo y una captura de pantalla que ayudan a valorar el botín.
5. Envío y borrado: transmite el paquete a un canal controlado por el atacante y, en muchos casos, se elimina del disco.

### Vector de ataque

- Ejecutables distribuidos como versiones modificadas de programas de pago.
- Adjuntos comprimidos protegidos con contraseña, que impiden el análisis automático en la pasarela de correo.
- Paquetes publicados en repositorios de código con nombres muy parecidos a los de librerías legítimas.
- Enlaces de descarga situados en la descripción de vídeos y tutoriales que ofrecen una herramienta gratuita.

### Caso ilustrativo — Zubiarte Finantza

*Asesoría financiera · 2025*

Una persona en prácticas de Zubiarte Finantza descarga en abril de 2025 un archivo comprimido protegido con contraseña que, según el correo, contiene una plantilla de balance. La contraseña viene escrita en el cuerpo del mensaje, lo que impide que la pasarela abra el fichero y lo analice.

El ejecutable se lanza y termina en menos de cuatro segundos. En ese tiempo ha recorrido los perfiles de los dos navegadores instalados, ha descifrado ciento catorce contraseñas guardadas y ha copiado las cookies de sesión activas, incluida la del gestor documental corporativo.

El paquete sale mediante una petición HTTPS hacia un servicio de almacenamiento legítimo, por lo que el destino no figura en ninguna lista de bloqueo. Cuando la empresa detecta el acceso anómalo, nueve días más tarde, las cookies ya se han utilizado desde tres direcciones distintas.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Extrae en bloque los secretos que dan acceso a todos los demás sistemas de la organización. |
| Integridad | No | No modifica el equipo de la víctima; el daño se materializa después y en otro sitio. |
| Disponibilidad | No | Su ejecución es tan breve que el usuario no percibe ninguna degradación del sistema. |
| Autenticación | Sí | Las cookies de sesión robadas permiten entrar sin contraseña y sin pasar por el segundo factor. |
| No repudio | Sí | Todo lo que se haga después con esas sesiones queda registrado a nombre de la víctima. |

### Defensa

- No utilizar el navegador como gestor de contraseñas: un gestor dedicado, con bóveda cifrada y bloqueo por inactividad.
- Sesiones cortas y vinculadas a características del dispositivo, de modo que una cookie robada no sirva desde otro equipo.
- Bloqueo en la pasarela de correo de los ficheros comprimidos protegidos con contraseña que llegan del exterior.
- Detección por comportamiento: un proceso que abre en pocos segundos los perfiles de varios navegadores es una señal muy fiable.
- Procedimiento ensayado de rotación de credenciales e invalidación de sesiones ante la menor sospecha.

---

## 7. Ransomware

**Programa de secuestro · Bahiketa programa** · Severidad: Crítica

> Los datos siguen ahí. Sólo que ya no son tuyos.

### Definición

Malware que cifra los datos de la víctima —y habitualmente los extrae antes— para exigir un pago a cambio de la clave de descifrado y del compromiso de no publicarlos. Es el único tipo de ataque cuyo modelo de negocio depende de que la víctima sepa con total claridad que ha sido atacada.

### Cómo funciona

1. Acceso inicial: credenciales compradas, un servicio de escritorio remoto expuesto o una vulnerabilidad sin parchear en el perímetro.
2. Reconocimiento interno: el atacante permanece días o semanas cartografiando la red, localizando las copias de seguridad y escalando privilegios.
3. Exfiltración previa: copia fuera un volumen significativo de información, para poder extorsionar aunque la víctima consiga restaurar.
4. Neutralización de las copias: borra instantáneas, cifra los repositorios de respaldo accesibles y detiene los servicios de copia.
5. Cifrado y nota: el cifrado se lanza de forma simultánea en toda la red, casi siempre de madrugada o en festivo, y aparece la nota de rescate.

### Vector de ataque

- Servicios de escritorio remoto publicados en Internet sin segundo factor de autenticación.
- Credenciales de VPN obtenidas previamente mediante un stealer o una campaña de phishing.
- Vulnerabilidades conocidas en dispositivos perimetrales que siguen sin actualizar semanas después del parche.
- Compromiso de un proveedor que tiene acceso legítimo y permanente a la red del cliente.

### Caso ilustrativo — Klinika Uribe

*Sanidad privada · 2026*

En la madrugada del 3 de enero de 2026, la red de Klinika Uribe queda cifrada por completo: historia clínica, agenda, facturación y los dos servidores de copias accesibles desde el dominio. La nota exige el pago en criptomoneda en un plazo de setenta y dos horas.

La reconstrucción posterior sitúa el acceso inicial dieciocho días antes, a través de una cuenta de VPN de un proveedor de mantenimiento que no tenía segundo factor. Durante ese tiempo el atacante se movió lateralmente, obtuvo privilegios de administración del dominio y copió fuera cuarenta gigabytes de documentación clínica.

La clínica no paga. Dispone de una copia semanal en soporte desconectado, de modo que pierde seis días de actividad registrada y tarda once en recuperar la operación normal. La información exfiltrada se publica igualmente: el cifrado se resolvió con la copia, pero la extorsión por divulgación no.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | La doble extorsión implica extracción previa de datos, que salen de la organización aunque nunca se pague el rescate. |
| Integridad | Sí | Los ficheros cifrados quedan inservibles y no hay garantía de que la clave, si llega, los restaure íntegros. |
| Disponibilidad | Sí | Es el efecto central del ataque: la organización se queda sin acceso a sus propios sistemas de un día para otro. |
| Autenticación | Sí | El despliegue final se ejecuta desde cuentas con privilegios de administración tomadas durante la fase previa. |
| No repudio | Sí | El borrado de registros y de instantáneas durante la preparación destruye buena parte de la trazabilidad del incidente. |

### Defensa

- Regla 3-2-1-1-0: tres copias, en dos soportes, una fuera de la sede, una desconectada o inmutable y cero errores en la restauración probada.
- Segundo factor obligatorio en todo acceso remoto, incluidos los de proveedores, con cuentas de vigencia limitada y revisable.
- Segmentación de la red para que un equipo comprometido no alcance ni los servidores críticos ni el repositorio de copias.
- Ensayo real de restauración al menos dos veces al año, cronometrado: una copia que nunca se ha restaurado no es una copia.
- Detección temprana del movimiento lateral y del borrado masivo de instantáneas, que preceden al cifrado en días.

---

## 8. Exploit

**Código de explotación · Ustiapen kodea** · Severidad: Crítica

> La llave exacta de una cerradura concreta.

### Definición

Fragmento de código o secuencia de datos diseñado para aprovechar una vulnerabilidad concreta de un programa y hacer que se comporte de forma no prevista: ejecutar instrucciones del atacante, saltarse una comprobación o leer memoria ajena. El exploit no es la carga maliciosa, es el medio que permite entregarla.

### Cómo funciona

1. Identificación de la vulnerabilidad: un fallo de validación, de gestión de memoria o de lógica de permisos en una versión concreta del software.
2. Construcción de la entrada: se prepara un dato que lleva al programa a un estado que quien lo escribió no contempló.
3. Control del flujo: el error se convierte en control sobre qué instrucciones ejecuta el programa a continuación.
4. Entrega de la carga: ese control se aprovecha para lanzar el código realmente pretendido, casi siempre mínimo y encargado de descargar el resto.
5. Estabilización: el exploit procura dejar el proceso en marcha, para que el fallo no se manifieste como un cierre inesperado que delate el ataque.

### Vector de ataque

- Servicios publicados en Internet con versiones sin parchear, localizables mediante rastreo automatizado masivo.
- Documentos y ficheros multimedia que explotan el analizador de la aplicación que los abre.
- Navegador y sus complementos, que procesan contenido de terceros de forma continua y por diseño.
- Vulnerabilidades de día cero, para las que no existe parche en el momento en que se utilizan.

### Caso ilustrativo — Oiartzun Datuak

*Centro de proceso de datos · 2024*

En octubre de 2024 se publica una vulnerabilidad crítica en el portal de acceso de un cortafuegos muy extendido. La corrección del fabricante aparece el mismo día. Oiartzun Datuak planifica la actualización para la siguiente ventana de mantenimiento, prevista once días después.

Cuarenta horas después de la publicación empiezan a registrarse rastreos automatizados contra el puerto del portal. El exploit necesita una única petición sin autenticar y deja una sesión con privilegios en el dispositivo, que es precisamente el equipo que separa la red interna de Internet.

El ataque no llega a completarse porque una regla de detección publicada por la comunidad bloquea el patrón de la petición. El incidente deja una conclusión incómoda: la ventana de exposición no la fijó el atacante, la fijó el calendario de mantenimiento.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Muchos exploits dan acceso directo a memoria o a ficheros que el proceso vulnerable puede leer. |
| Integridad | Sí | La ejecución de código arbitrario permite alterar el sistema afectado sin ninguna restricción. |
| Disponibilidad | Sí | Un intento fallido suele provocar la caída del servicio explotado, y algunos exploits persiguen justamente ese efecto. |
| Autenticación | Sí | Los exploits previos a la autenticación entran sin presentar credencial alguna, que es lo que los convierte en críticos. |
| No repudio | Sí | La actividad se ejecuta dentro de un proceso legítimo del sistema, de modo que los registros no distinguen al atacante. |

### Defensa

- Inventario actualizado de activos y versiones: no se puede parchear lo que no se sabe que está publicado.
- Ventana de parcheo diferenciada, medida en horas para lo perimetral y crítico y en días para el resto.
- Reducción de superficie: cerrar todo servicio que no tenga que estar expuesto y limitar por origen los que sí.
- Mitigaciones de explotación activadas en sistema operativo y navegador, que encarecen el paso de la vulnerabilidad al control del flujo.
- Reglas de detección en el perímetro mientras el parche no esté aplicado, como medida puente y nunca como sustituto.

---

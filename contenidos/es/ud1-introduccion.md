# UD1 · Introducción a la seguridad

> Ocho amenazas que rara vez aparecen solas

Ocho amenazas que se combinan en casi todo incidente real: antes de defender hay que saber qué busca cada una y por dónde entra.

Esta unidad las recoge como lo que son: una cadena donde cada pieza prepara la siguiente. Las cuatro primeras explican cómo se consigue el acceso; las cuatro últimas, qué se hace con él una vez dentro. Un correo entrega una credencial, y esa credencial acaba en ransomware semanas después.

**La idea que hay que llevarse:** Ninguna necesita un fallo espectacular: basta una credencial reutilizada, un parche pendiente o una prisa.

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

Suplantación de una entidad de confianza para que la víctima entregue credenciales, datos o dinero, o ejecute un fichero. No explota el software: explota la prisa, la jerarquía y la costumbre.

### Cómo funciona

1. Reconocimiento: nombres, cargos, proveedores y formato del correo, reunidos de fuentes públicas.
2. Señuelo: clon del servicio legítimo en un dominio parecido, con una letra cambiada o distinto TLD.
3. Entrega: correo, SMS o mensajería con un pretexto urgente que desalienta comprobar.
4. Captura: la víctima teclea sus credenciales en el formulario falso, que las reenvía y redirige al sitio real.
5. Uso inmediato: las credenciales se explotan en minutos, a menudo de forma automatizada.

### Vector de ataque

- Correo con enlace o adjunto: el canal mayoritario con diferencia.
- SMS y mensajería, donde el destino llega acortado y no se puede inspeccionar antes de pulsar.
- Llamada de apoyo que da credibilidad al mensaje enviado minutos antes.
- Códigos QR en papel o documentos, que eluden el análisis de enlaces de la pasarela.

### Caso ilustrativo — Nerbioi Logistika, S. L.

*Transporte y distribución · 2024*

En marzo de 2024, administración recibe un correo de su operador de telefonía: una factura pendiente con enlace a un portal idéntico al real, en nerbioi-facturacion.net, registrado seis horas antes.

La responsable de pagos introduce sus credenciales. El formulario valida el formato, reenvía los datos al atacante y redirige al portal auténtico con la sesión cerrada; ella supone que ha caducado y no avisa.

Veinte minutos después, esas credenciales acceden al correo desde el exterior. El atacante crea una regla de reenvío y lee la correspondencia con proveedores durante once días, hasta preparar un cambio de cuenta sobre una factura real.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Las credenciales abren el correo y todos los servicios de esa identidad. |
| Integridad | Sí | Con la cuenta tomada, modifica reglas, documentos y datos bancarios. |
| Disponibilidad | No | El servicio sigue activo: al atacante le conviene no llamar la atención. |
| Autenticación | Sí | El sistema acepta a quien presenta credenciales válidas, aunque no sea su dueño. |
| No repudio | Sí | Todo queda registrado a nombre de la víctima, que no puede demostrar que no fue ella. |

### Defensa

- Segundo factor resistente al phishing (FIDO2, passkeys): ligado al dominio legítimo, no se reenvía.
- SPF, DKIM y DMARC con política de rechazo para el dominio propio.
- Aviso visual en todo mensaje exterior y cuarentena de dominios recién registrados.
- Verificación fuera de banda de cada cambio bancario, en un número ya conocido.
- Simulacros periódicos para formar, no para sancionar: lo crucial es avisar rápido.

---

## 2. Ataque de intermediario

**Man-in-the-Middle · Erdiko gizonaren erasoa** · Severidad: Alta

> Dos partes creen hablar entre sí. Hablan con el atacante.

### Definición

Un tercero se interpone en una comunicación y la retransmite, leyéndola o modificándola sin que nadie lo note. La víctima recibe el servicio esperado, pero a través del atacante.

### Cómo funciona

1. Posicionamiento: punto de acceso gemelo o tabla ARP envenenada en el segmento.
2. Interceptación: todo el tráfico pasa por el equipo del atacante antes del destino real.
3. Degradación: el HTTP se lee en claro; en HTTPS se fuerza texto plano o se presenta un certificado propio.
4. Retransmisión: reenvía petición y respuesta para que todo parezca normal.
5. Explotación: roba cookies, credenciales o cuentas, y puede alterar el contenido en tránsito.

### Vector de ataque

- Wi-Fi abierta o de clave compartida, donde cualquiera publica una red gemela.
- Envenenamiento ARP en la red local, que desvía el tráfico del segmento al atacante.
- DNS o DHCP suplantados, que entregan una puerta de enlace controlada.
- Routers sin actualizar, convertidos en intermediarios permanentes y silenciosos.

### Caso ilustrativo — Itsasargi Aholkularitza

*Consultoría de ingeniería · 2025*

En un congreso de septiembre de 2025, un consultor conecta su portátil a Congreso_Wifi_Libre, la red abierta con mejor señal de la primera fila; la legítima se llamaba CongresoWiFi.

Al abrir el gestor documental recibe un certificado de una autoridad desconocida. El navegador avisa; con prisa por proyectar, acepta.

El atacante captura la cookie de sesión y, sin necesitar la contraseña, descarga esa tarde los planos de tres proyectos en concurso.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El tráfico en claro —y el cifrado con certificado impuesto— queda legible. |
| Integridad | Sí | Puede alterar respuestas: cambiar una cuenta o inyectar contenido. |
| Disponibilidad | No | Cortar la conexión delataría el ataque; todo debe parecer normal. |
| Autenticación | Sí | La víctima se autentica contra el atacante creyendo que es el servidor. |
| No repudio | Sí | Las peticiones llegan con la sesión válida de la víctima, su supuesta autora. |

### Defensa

- HTTPS con HSTS y precarga: el navegador rechaza la versión sin cifrar aunque se le indique.
- VPN corporativa siempre activa fuera de la oficina.
- Bloqueo por política de continuar ante avisos de certificado en equipos gestionados.
- Inspección dinámica de ARP y DHCP snooping en los conmutadores internos.
- Sesiones cortas y cookies Secure, HttpOnly y SameSite.

---

## 3. Troyano

**Caballo de Troya · Troiarra** · Severidad: Alta

> Se instala porque el usuario quiere instalarlo.

### Definición

Programa útil en apariencia que oculta una carga maliciosa. No se propaga solo: necesita que alguien lo ejecute, y toda su ingeniería busca esa decisión.

### Cómo funciona

1. Empaquetado: el código malicioso viaja con un programa real que cumple lo prometido.
2. Distribución: descargas, adjuntos o anuncios que imitan la web oficial del fabricante.
3. Ejecución: la víctima lo instala y concede permisos de administrador sin sospechar.
4. Persistencia: se copia fuera de Descargas y se registra en el arranque con nombre plausible.
5. Activación: contacta con el mando y control, o despliega espionaje, robo o acceso remoto.

### Vector de ataque

- Instaladores gratuitos o portables de repositorios no oficiales.
- Anuncios sobre el resultado auténtico que llevan a una web clonada del fabricante.
- Documentos con macros: el archivo es real, la macro es la carga.
- Falsas actualizaciones de navegador o lector desde webs comprometidas.

### Caso ilustrativo — Goierri Elektronika

*Fabricación de componentes · 2023*

En noviembre de 2023, un técnico necesita convertir planos entre formatos y descarga el primer resultado: un anuncio hacia goierri-cadtools.com, copia de la web del fabricante.

La herramienta funciona y se usa semanas sin incidencias. Con ella se instaló un segundo ejecutable, registrado como tarea programada con nombre de servicio de actualización.

Tras dieciocho días silencioso, abre una conexión saliente por el 443, indistinguible del tráfico web. Solo se detecta al revisar tareas programadas y hallar una entrada sin producto instalado.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Corre con los permisos del usuario y alcanza todo lo que él alcanza. |
| Integridad | Sí | Modifica ficheros, configuración y programas del equipo sin restricción. |
| Disponibilidad | No | No degrada el rendimiento: llamar la atención acortaría su vida. |
| Autenticación | Sí | Hereda la identidad de una sesión ya autenticada, sin credenciales. |
| No repudio | Sí | Los registros atribuyen al usuario acciones que no ordenó ni conoció. |

### Defensa

- Instalar solo desde el repositorio corporativo o la web oficial, verificando la firma del paquete.
- Sin permisos de administrador local en las cuentas de uso diario.
- Lista de aplicaciones permitidas en los equipos críticos.
- Macros de Internet bloqueadas por defecto, sin habilitación con un clic.
- Revisión periódica del arranque: tareas, servicios y claves de autoejecución.

---

## 4. Puerta trasera

**Backdoor · Atzeko atea** · Severidad: Crítica

> El problema no es cómo entró. Es que puede volver.

### Definición

Acceso que salta la autenticación prevista: rastro de un compromiso anterior o vía del propio fabricante. Su valor no es entrar, sino volver.

### Cómo funciona

1. Acceso inicial por cualquier vía: troyano, credencial robada o vulnerabilidad.
2. Mecanismo de retorno: cuenta añadida, clave pública, servicio oculto o tarea con conexión saliente.
3. Camuflaje: nombre plausible entre elementos legítimos, donde nadie mira dos veces.
4. Verificación: el atacante comprueba la vía ya sin la herramienta de intrusión.
5. Uso diferido: puede dormir meses, hasta que interese volver a entrar.

### Vector de ataque

- Claves SSH añadidas al fichero de claves autorizadas de una cuenta de servicio.
- Cuentas nuevas con nombre casi idéntico a una cuenta legítima.
- Webshell en un directorio web con permisos de escritura mal ajustados.
- Credenciales por defecto del fabricante, nunca cambiadas.
- Conexión inversa periódica que evita abrir puertos entrantes.

### Caso ilustrativo — Harrigain Ingeniaritza

*Ingeniería civil · 2024*

En junio de 2024, sistemas detecta un troyano en un servidor de ficheros, lo elimina y cierra el incidente. Los análisis posteriores salen limpios.

Cinco meses después, una auditoría halla una segunda clave pública en la cuenta de copias, añadida cuatro días antes de la limpieza por alguien de fuera.

Entre ambas fechas hubo once accesos sin una sola alerta: cuenta legítima, puerto habitual y horario de copias.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El acceso usa privilegios reales sobre los datos del sistema. |
| Integridad | Sí | Quien vuelve a voluntad puede alterar hasta los registros de auditoría. |
| Disponibilidad | No | Necesita el servicio en pie para seguir siendo útil. |
| Autenticación | Sí | Por definición, entra sin superar el control de autenticación. |
| No repudio | Sí | La trazabilidad apunta a un usuario que no participó en nada. |

### Defensa

- Tras un compromiso, revisar cuentas, claves, tareas y servicios antes de reincorporar el equipo.
- Reconstruir desde imagen conocida en vez de limpiar, siempre que sea viable.
- Inventario de cuentas y claves con alerta ante altas no registradas.
- Vigilar el tráfico saliente: la conexión inversa solo se ve mirando hacia fuera.
- Cambiar todas las credenciales por defecto al dar de alta cualquier equipo.

---

## 5. Spyware

**Programa espía · Programa espioia** · Severidad: Media

> No rompe nada. Sólo mira.

### Definición

Software que recoge la actividad del sistema o del usuario y la envía a un tercero sin consentimiento: desde hábitos de navegación hasta pulsaciones y capturas de pantalla.

### Cómo funciona

1. Instalación: añadido de otro programa, extensión de navegador o troyano.
2. Recolección: registra lo observado, de webs visitadas a pulsaciones y pantallas.
3. Almacenamiento: acumula los datos cifrados para resistir una inspección superficial.
4. Exfiltración: envía por lotes, en HTTPS o DNS, mezclado con el tráfico normal.
5. Permanencia: se actualiza y persiste en el arranque; su meta es durar, no actuar.

### Vector de ataque

- Extensiones que leen y modifican todas las páginas visitadas.
- Programas gratuitos con componentes aceptados en un instalador premarcado.
- Apps móviles con permisos desproporcionados para su función.
- Instalación con acceso físico, en vigilancia dirigida a una persona.

### Caso ilustrativo — Ortzadar Hezkuntza

*Formación reglada · 2025*

En enero de 2025, la coordinadora académica instala una extensión que corrige la ortografía en la plataforma de matrícula. Funciona y tiene buenas valoraciones.

Pide leer y modificar todos los sitios, lo normal en un corrector, y nada destaca. Tres semanas después, una actualización añade un módulo que copia los formularios antes de enviarlos.

Durante dos meses, los datos de matriculados salen junto a peticiones legítimas hacia el dominio del fabricante, en pocos kilobytes por sesión, bajo el umbral de las alertas.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Extraer información ajena es su propósito exacto. |
| Integridad | No | El observador típico no altera datos: le delataría. |
| Disponibilidad | No | Consume pocos recursos y no provoca degradación perceptible. |
| Autenticación | Sí | El registro de pulsaciones captura credenciales, y con ellas la identidad. |
| No repudio | No | No genera acciones atribuibles; el riesgo llega al usar las credenciales. |

### Defensa

- Catálogo cerrado de extensiones; bloqueo por política de cualquier otra.
- Revisar permisos en cada actualización, no solo al instalar.
- Vigilar el tráfico saliente pequeño y constante, por destino y regularidad.
- Cifrado de disco y bloqueo automático contra el acceso físico breve.
- Contraste periódico del software instalado con el inventario aprobado.

---

## 6. Stealer

**Ladrón de credenciales · Kredentzial lapurra** · Severidad: Alta

> Entra, se lo lleva todo y desaparece en segundos.

### Definición

Malware que localiza los secretos del equipo —contraseñas, cookies, tokens y configuraciones— y los envía de una vez. No busca quedarse: una sola ejecución rápida.

### Cómo funciona

1. Ejecución única: llega como troyano y corre una vez, con los permisos del usuario.
2. Inventario: recorre rutas conocidas de navegadores, correo, FTP y mensajería.
3. Descifrado: usa las claves del sistema, accesibles desde la sesión, para abrir las contraseñas.
4. Empaquetado: comprime el botín con metadatos del equipo y una captura de pantalla.
5. Envío y borrado: transmite el paquete y a menudo se autoelimina del disco.

### Vector de ataque

- Ejecutables vendidos como versiones modificadas de programas de pago.
- Comprimidos con contraseña, que la pasarela no puede analizar.
- Paquetes con nombres casi idénticos a librerías legítimas en repositorios de código.
- Enlaces en vídeos y tutoriales que regalan una herramienta gratuita.

### Caso ilustrativo — Zubiarte Finantza

*Asesoría financiera · 2025*

En abril de 2025, una persona en prácticas descarga un comprimido con contraseña que promete una plantilla de balance; la contraseña viene en el cuerpo del mensaje y la pasarela no puede abrirlo.

El ejecutable termina en menos de cuatro segundos: recorre los dos navegadores, descifra ciento catorce contraseñas y copia las cookies activas, incluida la del gestor documental.

El paquete sale por HTTPS hacia un almacenamiento legítimo, fuera de toda lista de bloqueo. Nueve días después, al detectar el acceso anómalo, las cookies ya se usaron desde tres direcciones.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Extrae en bloque los secretos que abren todos los sistemas. |
| Integridad | No | No toca el equipo; el daño ocurre después y en otro sitio. |
| Disponibilidad | No | Su ejecución es tan breve que nadie la percibe. |
| Autenticación | Sí | Las cookies robadas entran sin contraseña ni segundo factor. |
| No repudio | Sí | Lo hecho con esas sesiones queda registrado a nombre de la víctima. |

### Defensa

- Gestor de contraseñas dedicado, no el navegador: bóveda cifrada y bloqueo por inactividad.
- Sesiones cortas ligadas al dispositivo, inservibles desde otro equipo.
- Bloqueo en pasarela de comprimidos con contraseña llegados del exterior.
- Detección por comportamiento: un proceso barriendo perfiles de navegadores en segundos.
- Rotación de credenciales e invalidación de sesiones ensayada ante la menor sospecha.

---

## 7. Ransomware

**Programa de secuestro · Bahiketa programa** · Severidad: Crítica

> Los datos siguen ahí. Sólo que ya no son tuyos.

### Definición

Malware que cifra los datos —tras extraerlos— y exige un pago por la clave y por no publicarlos. El único ataque que necesita que la víctima sepa que lo ha sufrido.

### Cómo funciona

1. Acceso inicial: credenciales compradas, escritorio remoto expuesto o perímetro sin parchear.
2. Reconocimiento: días o semanas mapeando la red, buscando copias y escalando privilegios.
3. Exfiltración previa: copia fuera un gran volumen para extorsionar aunque se restaure.
4. Neutralización: borra instantáneas, cifra repositorios y detiene los servicios de copia.
5. Cifrado y nota: lanzamiento simultáneo de madrugada o en festivo, y nota de rescate.

### Vector de ataque

- Escritorio remoto publicado sin segundo factor de autenticación.
- Credenciales de VPN robadas con stealer o phishing previo.
- Vulnerabilidades perimetrales sin parchear semanas después del parche.
- Proveedores comprometidos con acceso legítimo y permanente a la red.

### Caso ilustrativo — Klinika Uribe

*Sanidad privada · 2026*

La madrugada del 3 de enero de 2026, la red queda cifrada: historia clínica, agenda, facturación y los dos servidores de copias del dominio. La nota exige criptomoneda en setenta y dos horas.

El acceso se produjo dieciocho días antes, por la VPN de un proveedor sin segundo factor. El atacante escaló a administrador del dominio y extrajo cuarenta gigabytes de documentación clínica.

La clínica no paga y restaura desde una copia semanal desconectada: pierde seis días de actividad y tarda once en operar con normalidad. La información sale publicada igual: la copia resolvió el cifrado, no la extorsión.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | La doble extorsión extrae datos que salen aunque no se pague. |
| Integridad | Sí | Lo cifrado queda inservible, sin garantía de restauración íntegra. |
| Disponibilidad | Sí | El efecto central: sin acceso a los propios sistemas de un día para otro. |
| Autenticación | Sí | El despliegue final corre desde cuentas de administración tomadas. |
| No repudio | Sí | El borrado de registros e instantáneas destruye la trazabilidad. |

### Defensa

- Regla 3-2-1-1-0: tres copias, dos soportes, una externa, una offline o inmutable y restauración probada.
- Segundo factor en todo acceso remoto, incluidos proveedores con cuentas temporales.
- Segmentación: un equipo tomado no alcanza servidores críticos ni copias.
- Ensayo real de restauración, cronometrado, dos veces al año.
- Detección del movimiento lateral y del borrado de instantáneas, previos al cifrado.

---

## 8. Exploit

**Código de explotación · Ustiapen kodea** · Severidad: Crítica

> La llave exacta de una cerradura concreta.

### Definición

Código o datos que aprovechan una vulnerabilidad concreta para torcer un programa: ejecutar instrucciones, saltar comprobaciones o leer memoria ajena. No es la carga; es el medio que la entrega.

### Cómo funciona

1. Identificación: un fallo de validación, memoria o permisos en una versión concreta.
2. Entrada: un dato que lleva al programa a un estado no previsto.
3. Control del flujo: el error decide qué instrucciones se ejecutan a continuación.
4. Carga: ese control lanza un código mínimo que descarga el resto.
5. Estabilización: deja el proceso vivo para no delatarse con un cierre inesperado.

### Vector de ataque

- Servicios publicados sin parchear, hallados por rastreo masivo automatizado.
- Documentos y multimedia que explotan el analizador que los abre.
- Navegador y complementos, que procesan contenido de terceros por diseño.
- Días cero, sin parche disponible cuando se usan.

### Caso ilustrativo — Oiartzun Datuak

*Centro de proceso de datos · 2024*

En octubre de 2024 se publica una vulnerabilidad crítica en el portal de un cortafuegos extendido, con parche el mismo día. La empresa lo agenda para dentro de once días.

Cuarenta horas después llegan rastreos al puerto del portal: basta una petición sin autenticar para dejar una sesión privilegiada en el equipo que separa la red de Internet.

El ataque no culmina porque una regla de la comunidad bloquea el patrón. La conclusión incomoda: la ventana de exposición la fijó el calendario, no el atacante.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Muchos exploits abren memoria o ficheros al alcance del proceso vulnerable. |
| Integridad | Sí | El código arbitrario altera el sistema afectado sin restricción. |
| Disponibilidad | Sí | Un intento fallido tumba el servicio; algunos lo buscan a propósito. |
| Autenticación | Sí | Los previos a la autenticación entran sin credencial: por eso son críticos. |
| No repudio | Sí | Todo corre en un proceso legítimo que los registros no distinguen. |

### Defensa

- Inventario de activos y versiones: lo desconocido no se parchea.
- Parcheo en horas para lo perimetral crítico y en días para el resto.
- Menos superficie: cerrar lo innecesario y limitar por origen lo expuesto.
- Mitigaciones de sistema y navegador que encarecen el salto al control del flujo.
- Reglas perimetrales puente hasta aplicar el parche, nunca como sustituto.

---

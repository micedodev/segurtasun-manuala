# UD2 · Seguridad lógica

> Cinco técnicas que sólo funcionan a escala

Cinco técnicas comparten una idea: multiplicar el alcance. Una credencial se convierte en una cuenta, una cuenta en mil equipos y mil equipos en una caída de servicio.

Cada técnica multiplica algo distinto: contactos, equipos, intentos por segundo, peticiones simultáneas o meses sin ser visto. El atacante ya no trabaja equipo por equipo: opera con redes de miles de nodos, listas de millones de credenciales filtradas y cómputo alquilado por horas.

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

Código malicioso que se propaga por plataformas sociales y de mensajería desde cuentas comprometidas: el vector no es un fallo del servicio, sino la confianza previa entre emisor y receptor. El caso histórico de referencia es Koobface (2008), que se propagó por Facebook y MySpace con mensajes trampa enviados desde cuentas comprometidas y convirtió cientos de miles de equipos en una botnet dedicada al robo de credenciales bancarias.

### Cómo funciona

1. Primera cuenta: contraseña reutilizada o enlace fraudulento.
2. El código lee amistades, grupos y conversaciones de la cuenta.
3. Envía un mensaje breve con un enlace, en el tono previo.
4. El enlace pide otro inicio de sesión o un complemento para ver el contenido.
5. Cada cuenta nueva reinicia el ciclo: el crecimiento es multiplicativo.

### Vector de ataque

- Mensajería privada: el mensaje llega con la foto y el nombre de un contacto real.
- Comentarios y menciones, que amplían el alcance más allá de la lista de contactos.
- Aplicaciones de terceros con autorización delegada: conservan el permiso aunque se cambie la contraseña.
- Falsos reproductores o complementos para ver un vídeo donde supuestamente aparece la víctima.

### Caso ilustrativo — Bidegorri Mugikortasuna

*Movilidad urbana compartida · 2024*

En mayo de 2024, la cuenta corporativa de Bidegorri Mugikortasuna envía mensajes privados en una red profesional: texto breve en euskera y castellano con un enlace a un supuesto informe sectorial.

El enlace abre una réplica exacta del inicio de sesión. Quien escribe sus credenciales cede su cuenta, que en minutos reenvía el mensaje. En seis horas: ciento noventa envíos desde treinta y una cuentas.

No lo frena una defensa técnica, sino la redacción: un tratamiento formal que la responsable nunca emplea. Una llamada por teléfono y el aviso corre más rápido que el gusano.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Las cuentas tomadas exponen conversaciones privadas y listas de contactos completas. |
| Integridad | Sí | El atacante publica en nombre de la organización y altera su comunicación. |
| Disponibilidad | No | El servicio sigue activo; solo la contención suspende la cuenta. |
| Autenticación | Sí | Cada envío sale de una cuenta legítima bajo control ajeno. |
| No repudio | Sí | Los mensajes constan como enviados por el titular, que no puede negarlos. |

### Defensa

- Segundo factor en todas las cuentas corporativas, con acceso delegado por persona y sin contraseñas compartidas.
- Revisión trimestral de aplicaciones de terceros: revocar las que ya no se usan.
- Norma interna: ningún enlace de mensajería lleva a un inicio de sesión; la dirección se escribe a mano.
- Canal de verificación rápido —una llamada, un grupo interno— para cada mensaje inesperado.
- Respuesta documentada: cambiar la contraseña, cerrar sesiones, revocar permisos y avisar en público.

---

## 2. Botnet

**Red de equipos zombi · Ordenagailu zonbien sarea** · Severidad: Alta

> Miles de equipos ajenos obedeciendo a una sola orden.

### Definición

Conjunto de equipos infectados bajo el control remoto de un mismo operador, que ejecutan órdenes de forma coordinada. Cada equipo aporta poco por separado: el valor está en la suma, y sus dueños los siguen usando con normalidad.

### Cómo funciona

1. El equipo recibe el agente —troyano, exploit o credencial de fábrica— y se vuelve nodo.
2. El agente contacta con el mando y control, por dominios generados por algoritmo o red descentralizada.
3. El nodo espera inactivo con consumo mínimo y sondea el canal a intervalos irregulares.
4. Al llegar la orden, miles de nodos actúan a la vez: correo, credenciales, tráfico o malware.
5. El operador actualiza el agente, sustituye dominios bloqueados y alquila capacidad por horas.

### Vector de ataque

- Internet de las cosas con credenciales de fábrica expuestas: cámaras, grabadores y routers domésticos.
- Equipos infectados por troyano: direcciones residenciales difíciles de bloquear.
- Servidores sin parchear, valiosos por su ancho de banda simétrico.
- Alquiler de la red a terceros: varias campañas corren sobre la misma infraestructura.

### Caso ilustrativo — Mendizorrotz Telekomunikazioak

*Operador de telecomunicaciones · 2025*

En febrero de 2025, Mendizorrotz Telekomunikazioak detecta un patrón extraño en su red residencial: cuatro mil ochocientos routers del mismo modelo consultan cada noventa minutos un dominio diario.

El modelo expone la gestión remota con la credencial de fábrica intacta. Cada equipo consume menos de un kilobit por segundo; ningún cliente nota nada.

Durante cinco semanas prueba credenciales contra portales de terceros, a tres intentos por minuto y nodo. El portal no ve una fuente que bloquear: ve cuatro mil ochocientas direcciones legítimas como usuarios reales.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El operador accede a los equipos y a su tráfico, aunque solo busque capacidad. |
| Integridad | Sí | El agente cambia la configuración para persistir y puede alterar el tráfico. |
| Disponibilidad | Sí | Consume recursos ajenos y degrada a la víctima final de cada campaña. |
| Autenticación | Sí | La entrada usa credenciales de fábrica o robadas que el equipo acepta. |
| No repudio | Sí | Los ataques parten de clientes legítimos, que figuran como responsables. |

### Defensa

- Cambio forzoso de credenciales de fábrica en el aprovisionamiento, sin conservar el valor original.
- Gestión remota cerrada a Internet: solo accesible desde la red del operador.
- Firmware con actualización automática, calendario y verificación posterior.
- Detección de consultas anómalas: dominios de vida corta o conexiones regulares sin actividad humana.
- Filtrado de salida: ningún cliente envía tráfico con origen falsificado.

---

## 3. Ataque de fuerza bruta

**Indar gordineko erasoa** · Severidad: Media

> Sin ingenio. Con paciencia y con listas.

### Definición

Intento sistemático de adivinar una credencial probando combinaciones hasta acertar. En la práctica se ataja con diccionarios de contraseñas filtradas: millones de intentos se reducen a unos cientos bien elegidos.

### Cómo funciona

1. Objetivo: autenticación expuesta y, si es posible, usuarios válidos conocidos.
2. Estrategia: diccionario de frecuentes, variantes del nombre de la organización o credenciales de otras brechas.
3. Los intentos se reparten entre muchas direcciones y se espacian para no activar bloqueos.
4. El acierto se detecta en la respuesta: código, tiempo o texto distintos.
5. La credencial se prueba en los demás servicios: apuesta por la reutilización.

### Vector de ataque

- Acceso remoto y paneles publicados sin límite de intentos.
- Pulverización: una contraseña común contra cientos de usuarios, sin bloquear ninguna cuenta.
- Relleno con pares de filtraciones anteriores, tal cual, por la reutilización entre servicios.
- Ataque fuera de línea contra resúmenes robados: sin límite de intentos ni rastro.

### Caso ilustrativo — Landabe Kooperatiba

*Agroalimentario · 2024*

En septiembre de 2024, el portal de proveedores de Landabe Kooperatiba suma fallos sin disparar alarmas: cada origen intenta una vez cada cuarenta minutos y el bloqueo exige cinco intentos en cinco minutos.

Prueba una contraseña plausible contra los trescientos usuarios, no muchas contra uno: el nombre de la cooperativa más el año en curso. Cuatro cuentas la usan tal cual.

Una de las cuatro edita datos bancarios de proveedores. Nueve días sin bloquear nada: nunca dos fallos seguidos contra la misma cuenta.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Una credencial acertada abre toda la información de esa cuenta. |
| Integridad | Sí | El atacante hereda íntegros los permisos de escritura de la cuenta. |
| Disponibilidad | No | Busca entrar en silencio; solo un ataque torpe bloquea cuentas. |
| Autenticación | Sí | Ataca el control directo: supera la identidad sin conocer el secreto. |
| No repudio | Sí | Dentro, toda actividad queda registrada a nombre del titular. |

### Defensa

- Segundo factor: una contraseña acertada ya no basta.
- Retardo progresivo tras cada fallo, en vez de bloqueo fijo: frena sin dejar cuentas fuera de servicio.
- Cada contraseña nueva se comprueba contra listas de filtradas al crearla.
- Vigilar fallos globales por servicio, no solo por cuenta: la pulverización solo se ve en el agregado.
- Guardar contraseñas con derivación lenta y sal: un fichero robado no entrega texto en claro.

---

## 4. Ataque DDoS

**Denegación de servicio distribuida · Banatutako zerbitzu ukapena** · Severidad: Alta

> No es que no entre nadie. Es que ya no cabe nadie.

### Definición

Ataque que agota un recurso finito —ancho de banda, conexiones, proceso o memoria— para dejar fuera a los usuarios legítimos. Es distribuido porque el tráfico llega de muchas fuentes a la vez: bloquear un origen no sirve.

### Cómo funciona

1. Recurso a agotar: enlace, tabla de conexiones, servidor de aplicación o base de datos.
2. Capacidad: botnet propia o alquilada, más servicios mal configurados que amplifican.
3. Peticiones pequeñas con origen falsificado provocan respuestas mucho mayores contra la víctima.
4. El recurso se llena: el servicio rechaza peticiones o responde con lentitud inaceptable.
5. Si la víctima mitiga una técnica, el operador cambia de vector, puerto o patrón.

### Vector de ataque

- Volumétrico: satura el enlace amplificando con DNS o NTP mal configurados.
- De protocolo: agota tablas del cortafuegos o balanceador con conexiones a medio abrir.
- De aplicación: pocas peticiones muy costosas, como búsquedas sobre la base completa.
- Extorsión previa: aviso con demanda de pago y breve demostración de capacidad.

### Caso ilustrativo — Gorbeia Energia

*Comercializadora de energía · 2025*

El 14 de noviembre de 2025, día de más cambios de tarifa, el portal de Gorbeia Energia deja de responder. El enlace no se satura: el tráfico es el de un lunes cualquiera.

Ataque de capa de aplicación: unas mil doscientas direcciones consultan el comparador cada pocos segundos y recalculan el histórico completo. Cada petición ocupa un proceso casi tres segundos.

Con ciento sesenta procesos, menos de sesenta peticiones por segundo tumban el portal cuatro horas. El cortafuegos no ve nada raro: peticiones correctas desde sesiones válidas.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | No | No extrae información; a lo sumo distrae mientras corre otra intrusión. |
| Integridad | No | No altera datos: ataca la capacidad de atender, no el contenido. |
| Disponibilidad | Sí | Es el objetivo único y declarado del ataque. |
| Autenticación | No | No supera identidad alguna; funciona con peticiones anónimas. |
| No repudio | No | No atribuye acciones falsas; apunta a intermediarios que también son víctimas. |

### Defensa

- Mitigación con capacidad muy superior al enlace propio, contratada antes del ataque.
- Límite por origen y por operación costosa: no es igual pedir una página que lanzar un cálculo.
- Caché de respuestas independientes del usuario: casi nada llega a la aplicación.
- Diseño degradable: ante la saturación, apaga lo costoso y mantiene lo esencial.
- Respuesta ensayada con el proveedor: contactos y procedimiento por escrito, accesibles sin red.

---

## 5. Rootkit

**Kit de encubrimiento · Errotkita** · Severidad: Crítica

> No oculta un fichero. Oculta la forma de mirar.

### Definición

Conjunto de herramientas con privilegios elevados que mantiene el acceso y oculta su presencia y la de otros componentes maliciosos. No añade capacidades ofensivas: manipula lo que el sistema responde al preguntarle qué ejecuta.

### Cómo funciona

1. Consigue permisos de administración o núcleo con un exploit local o credenciales robadas.
2. Se interpone entre aplicaciones y sistema: modifica llamadas, tablas o módulos del núcleo.
3. Al pedir procesos, ficheros o conexiones, devuelve la lista real menos sus elementos.
4. Impide listar, modificar o borrar sus ficheros y entradas de arranque.
5. Bajo esa capa conviven puertas traseras, registradores de teclado o agentes de botnet, invisibles para el propio sistema.

### Vector de ataque

- En espacio de usuario: sustituye librerías; la variante más simple y más fácil de detectar.
- En el núcleo: un módulo malicioso ve y controla todo lo del sistema.
- En el arranque: se ejecuta antes que el sistema y este ya nace bajo su control.
- En el firmware del equipo o de una tarjeta: sobrevive al formateo del disco.

### Caso ilustrativo — Errekalde Kimika

*Industria química · 2023*

Desde marzo de 2023, el servidor de producción de Errekalde Kimika triplica de noche su red de un año antes, sin proceso ni conexión visibles.

Todo se comprueba desde el propio servidor, y ahí está el problema: un controlador en el núcleo omite sus conexiones. Desde dentro, la máquina parece limpia.

Desde fuera se resuelve: el conmutador registra cuatro veces más salida de la declarada. El disco, analizado en un sistema externo, muestra el controlador y su agente de exfiltración, activo desde hacía siete meses.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Impacto sobre las propiedades de la seguridad

| Propiedad | ¿Queda comprometida? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Bajo su capa operan de forma estable herramientas de robo de información. |
| Integridad | Sí | Altera el sistema y la fiabilidad de todo lo que informa. |
| Disponibilidad | No | Necesita normalidad: una caída provocaría el análisis que evita. |
| Autenticación | Sí | Conserva acceso privilegiado sin volver a pasar ningún control. |
| No repudio | Sí | Manipula los registros y la reconstrucción deja de ser fiable. |

### Defensa

- Arranque seguro con firma y plataforma confiable: nada sin firmar antes del sistema.
- Supervisión externa: contadores del conmutador, registros del cortafuegos y telemetría en servidor aparte.
- Registros centralizados en tiempo real donde el equipo no pueda escribir ni borrar.
- Forense desde un medio externo de confianza, nunca con las herramientas del sospechoso.
- Si se confirma: reinstalación completa y firmware actualizado; la limpieza selectiva no garantiza nada.

---

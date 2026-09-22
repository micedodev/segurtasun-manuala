# Seguridad perimetral

> El perímetro

Cuatro controles que se explican juntos porque sólo funcionan juntos. Cada uno cubre un hueco que los otros tres dejan abierto.

Los cuatro controles de este bloque se explican juntos porque sólo funcionan juntos. El cortafuegos decide qué conexión puede llegar a establecerse; la VPN protege lo que circula por una red ajena; la DMZ limita el daño de lo que tarde o temprano se comprometerá; y el proxy es el único de los cuatro que mira el contenido.

Conviene fijar también sus límites desde el principio. El perímetro no protege frente a lo que ya está dentro, ni frente a una credencial legítima usada por quien no debe, ni frente a un portátil que trabaja tres días seguidos fuera de la oficina. Es una capa necesaria; no es una capa suficiente.

**La idea que hay que llevarse:** Cada uno de estos cuatro controles deja un hueco que otro cubre, y los cuatro juntos dejan uno que ninguno cubre: el acceso legítimo mal utilizado. Por eso el perímetro es el punto de partida de la defensa y nunca su conclusión.

---

### En esta unidad

1. [Cortafuegos](#1-cortafuegos) — Decide qué conversación tiene derecho a empezar.
2. [VPN](#2-vpn) — Una red privada sobre una infraestructura que no lo es.
3. [DMZ](#3-dmz) — Lo que debe ser público no puede vivir con lo que no.
4. [Proxy](#4-proxy) — Mira qué se pide, no sólo adónde se pide.

---

## 1. Cortafuegos

**Firewall · Suebakia** · Ubicación: Frontera entre redes. Capas 3 y 4; en los modelos de nueva generación, también la 7.

> Decide qué conversación tiene derecho a empezar.

### Definición

Sistema que controla el tráfico entre dos redes aplicando un conjunto ordenado de reglas: por cada paquete o conexión decide si se permite, se rechaza con aviso o se descarta en silencio. Su función no es analizar el contenido, sino determinar qué comunicaciones tienen derecho a establecerse.

### Cómo funciona

1. Definición de la política: una lista ordenada de reglas con origen, destino, protocolo, puerto y acción.
2. Evaluación en orden: cada conexión se compara con las reglas de arriba abajo y se aplica la primera que coincide, de modo que el orden es parte de la política.
3. Seguimiento del estado: un cortafuegos con inspección de estado recuerda las conexiones ya establecidas, así que la respuesta a una petición permitida no necesita una regla propia.
4. Acción final: permitir, rechazar con notificación explícita o descartar sin responder, lo que dificulta el reconocimiento por parte del atacante.
5. Registro: toda decisión significativa se anota, y ese registro es con frecuencia la primera evidencia disponible de un ataque.

### Cómo se elude

- Tráfico legítimo por puertos permitidos: un canal de mando y control sobre el puerto 443 cumple todas las reglas sin excepción.
- Conexiones iniciadas desde dentro, que la inspección de estado autoriza a devolver tráfico sin necesidad de regla entrante.
- Túneles sobre protocolos permitidos, como DNS o HTTPS, que transportan algo distinto de lo que aparentan.
- Rutas que sencillamente no atraviesan el cortafuegos: un punto de acceso inalámbrico no autorizado o un módem de mantenimiento en un equipo interno.

### Caso ilustrativo — Txorierri Garraioak

*Transporte de mercancías · 2024*

Txorierri Garraioak sustituye en 2024 su cortafuegos perimetral. La migración de reglas se resuelve copiando la política anterior, acumulada a lo largo de nueve años, sin revisarla regla por regla.

La auditoría posterior cuenta doscientas treinta y una reglas, de las cuales setenta y ocho no habían registrado una sola coincidencia en doce meses. Entre ellas, una regla abierta hacia todo Internet en el puerto de escritorio remoto, creada en 2017 para un mantenimiento que duró una tarde.

La limpieza deja la política en cuarenta y seis reglas. El dato relevante no es la reducción, sino que ninguna de las setenta y ocho eliminadas causó incidencia alguna: llevaban años ampliando la superficie de exposición sin aportar nada a la operación.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Impide que un servicio interno sea siquiera alcanzable desde fuera, que es la primera condición para que sus datos no salgan. |
| Integridad | No | No verifica el contenido de lo que deja pasar: un paquete permitido puede transportar cualquier cosa. |
| Disponibilidad | Sí | Descarta el tráfico no deseado antes de que consuma recursos del servidor y limita el número de conexiones simultáneas. |
| Autenticación | No | Decide por dirección y puerto, no por identidad: no sabe quién está al otro lado, sólo desde dónde llega. |
| No repudio | No | Sus registros documentan conexiones, no la autoría de acciones concretas dentro de una aplicación. |

### Despliegue recomendado

- Denegación por defecto: la última regla descarta todo lo que no haya sido permitido explícitamente antes que ella.
- Reglas con origen y destino concretos; evitar el comodín salvo en el acceso realmente público.
- Control también del tráfico saliente y no sólo del entrante: es la única forma de ver una conexión inversa.
- Revisión documentada de la política al menos una vez al año, con fecha de caducidad para las reglas temporales.
- Registro centralizado fuera del propio dispositivo y alerta ante cualquier cambio de configuración no planificado.

---

## 2. VPN

**Red privada virtual · Sare pribatu birtuala** · Ubicación: Túnel sobre la red pública. Capa 3 con IPsec, o capa de aplicación sobre TLS.

> Una red privada sobre una infraestructura que no lo es.

### Definición

Tecnología que crea un canal cifrado y autenticado entre dos extremos a través de una red no confiable, de modo que el tráfico que circula por él resulta ilegible e inalterable para quien lo intercepte. Convierte Internet en un medio de transporte utilizable para comunicaciones privadas.

### Cómo funciona

1. Autenticación mutua de los extremos, mediante certificados, claves precompartidas o credenciales con segundo factor.
2. Negociación de las claves de sesión con un intercambio que impide deducirlas después, aunque se haya capturado todo el tráfico.
3. Encapsulado: cada paquete original se cifra y se envuelve dentro de otro paquete dirigido al extremo remoto del túnel.
4. Transporte: el paquete viaja por Internet mostrando únicamente las direcciones de los dos extremos, no las de origen y destino reales.
5. Desencapsulado y comprobación de integridad en el destino, que descarta cualquier paquete alterado durante el camino.

### Cómo se elude

- Compromiso de uno de los extremos: el túnel protege el tránsito, nunca el equipo que está en la punta.
- Credenciales de VPN robadas sin segundo factor, que convierten el túnel en una puerta de entrada cómoda y además cifrada.
- Túnel dividido mal configurado, que deja parte del tráfico saliendo por la red local no confiable.
- Vulnerabilidades en el propio concentrador VPN, que es un servicio publicado en Internet como cualquier otro.

### Caso ilustrativo — Basalde Nekazaritza

*Cooperativa agraria · 2025*

Basalde Nekazaritza despliega en 2025 acceso VPN para veinte personas que trabajan sobre el terreno. La configuración emplea túnel dividido: sólo el tráfico dirigido a la red corporativa entra en el túnel y el resto sale directamente por la conexión local del dispositivo.

La decisión se tomó por rendimiento y es razonable en sí misma. El problema aparece cuando un portátil, conectado a la red compartida de un alojamiento rural, recibe por DHCP un servidor de nombres controlado por otro huésped. Las consultas corporativas van por el túnel; la resolución de nombres, no.

Ese detalle permite redirigir el acceso al portal de proveedores hacia una copia situada fuera del túnel. El incidente no se debió a un fallo del cifrado: la VPN funcionó exactamente como estaba configurada. Lo que falló fue la decisión sobre qué tráfico debía entrar en ella.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El cifrado del túnel hace ilegible el contenido para cualquiera que intercepte el tránsito. |
| Integridad | Sí | Cada paquete incorpora una comprobación que permite detectar y descartar cualquier alteración producida en el camino. |
| Disponibilidad | No | No aporta capacidad ni resistencia; al contrario, concentra el acceso en un punto único que puede convertirse en cuello de botella. |
| Autenticación | Sí | Establece la identidad de ambos extremos antes de transportar un solo byte de datos. |
| No repudio | No | Acredita al extremo del túnel durante la sesión, pero no firma ni atribuye las acciones que se realizan dentro de ella. |

### Despliegue recomendado

- Segundo factor obligatorio en el acceso remoto de personas; certificados de equipo para los túneles permanentes entre sedes.
- Túnel completo en los equipos corporativos o, como mínimo, resolución de nombres forzada a través del túnel.
- Comprobación del estado del equipo antes de conceder acceso: sistema actualizado, disco cifrado y protección de puesto operativa.
- Acceso concedido por perfil y no a la red entera: quien entra por VPN no debe alcanzar más de lo que su trabajo requiere.
- El concentrador VPN se parchea con prioridad de perímetro, porque por definición está publicado en Internet.

---

## 3. DMZ

**Zona desmilitarizada · Zona desmilitarizatua** · Ubicación: Segmento de red propio, situado entre la red externa y la interna.

> Lo que debe ser público no puede vivir con lo que no.

### Definición

Segmento de red aislado donde se ubican los servicios que deben ser accesibles desde el exterior, separado tanto de Internet como de la red interna mediante reglas de filtrado. Su premisa de diseño es que esos servicios acabarán comprometiéndose, y que cuando ocurra el atacante no debe encontrarse ya dentro de la red de trabajo.

### Cómo funciona

1. Identificación de los servicios que necesitan exposición real: web pública, correo entrante, portal de proveedores o DNS externo.
2. Ubicación en un segmento propio, con política de filtrado específica tanto hacia fuera como hacia dentro.
3. Restricción de las conexiones entrantes desde Internet: sólo los puertos publicados y sólo hasta los equipos de la DMZ.
4. Restricción estricta desde la DMZ hacia la red interna: por defecto nada, y como excepción conexiones concretas, de un solo sentido y hacia servicios determinados.
5. Vigilancia reforzada: se asume que es el segmento con mayor probabilidad de compromiso y se instrumenta en consecuencia.

### Cómo se elude

- Reglas de retorno demasiado amplias desde la DMZ hacia la red interna, que convierten el aislamiento en un trámite formal.
- Credenciales compartidas entre un servidor de la DMZ y la red interna, que permiten saltar sin necesitar ninguna regla de red.
- Servidor de la DMZ integrado en el mismo dominio que la red interna, lo que anula buena parte de la separación.
- Salida a Internet sin restricción desde la DMZ, que facilita tanto la exfiltración como el canal de mando y control.

### Caso ilustrativo — Arbolantza Aseguruak

*Correduría de seguros · 2023*

Arbolantza Aseguruak sitúa en 2023 su portal de clientes en una DMZ correctamente separada por cortafuegos. La red interna no es accesible desde ella y el diseño se revisó y aprobó formalmente.

El portal necesita consultar la base de datos de pólizas, que está en la red interna. Para ello se abre una regla: del servidor web a la base de datos, un único puerto y un único destino. Hasta aquí, todo correcto.

El fallo está en la cuenta que usa esa conexión. Es la misma cuenta de servicio, con la misma contraseña, que emplean tres aplicaciones internas más, y tiene permiso de lectura sobre todo el esquema. Cuando el portal se compromete por una vulnerabilidad de la aplicación, la DMZ contiene el movimiento de red pero no el de credenciales: el atacante no necesita alcanzar la red interna, porque ya dispone de una vía autorizada hasta el dato.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Limita el alcance de un compromiso: quien toma el servidor público no obtiene con ello acceso directo a la información interna. |
| Integridad | No | Por sí misma no valida ni protege el contenido; únicamente acota el terreno en el que puede actuar quien entre. |
| Disponibilidad | Sí | Aísla el impacto: un ataque contra el servicio publicado no arrastra a la red de trabajo ni a la producción interna. |
| Autenticación | No | Es una medida de arquitectura de red; no verifica identidades, sino que delega esa función en cada servicio. |
| No repudio | No | No aporta trazabilidad de autoría, aunque la separación sí facilita acotar el alcance durante una investigación. |

### Despliegue recomendado

- Ningún servidor de la DMZ debe pertenecer al dominio interno ni compartir cuentas con él.
- Reglas desde la DMZ hacia dentro definidas una a una, con origen, destino, puerto y motivo documentado.
- Salida a Internet desde la DMZ restringida a lo imprescindible y canalizada siempre a través de un proxy que registre.
- Cuentas de servicio propias del segmento, con permisos mínimos y contraseña distinta de la de cualquier cuenta interna.
- Suposición operativa explícita: la DMZ se monitoriza como si ya estuviera comprometida, porque estadísticamente lo estará antes que el resto.

---

## 4. Proxy

**Servidor intermediario · Bitartekari zerbitzaria** · Ubicación: Capa de aplicación, intercalado entre el cliente y el servidor de destino.

> Mira qué se pide, no sólo adónde se pide.

### Definición

Servidor que se sitúa entre el cliente y el destino y realiza la petición en su nombre. Al terminar y reiniciar la conexión puede inspeccionar el contenido, aplicar políticas de uso, almacenar respuestas en caché y registrar con detalle qué se ha solicitado, algo que queda por completo fuera del alcance de un filtrado por puertos. En su variante inversa se coloca delante de los servicios publicados y protege al servidor en lugar de al usuario.

### Cómo funciona

1. El cliente dirige su petición al proxy en lugar de al destino, por configuración explícita o de forma transparente en la red.
2. El proxy comprueba la política aplicable: categoría del destino, reputación, tipo de contenido, usuario y franja horaria.
3. Si la política lo permite, es el propio proxy quien abre la conexión con el destino y recupera la respuesta.
4. Inspección: analiza el contenido devuelto, puede remitirlo a un motor antimalware y bloquear lo que no cumpla la política.
5. Entrega y registro: devuelve la respuesta al cliente y anota la petición completa, asociada a un usuario identificado.

### Cómo se elude

- Tráfico cifrado que no se inspecciona: sin terminación TLS, el proxy sólo llega a ver el nombre del destino.
- Aplicaciones que ignoran la configuración de proxy del sistema y salen directas si el cortafuegos se lo permite.
- Destinos con buena reputación usados como intermediarios: un servicio de almacenamiento legítimo que aloja la carga maliciosa.
- Túneles sobre protocolos que el proxy no gestiona, como DNS, cuando la salida a Internet no está completamente canalizada.

### Caso ilustrativo — Elorrio Ingurumen Zerbitzuak

*Servicios medioambientales · 2025*

Elorrio Ingurumen Zerbitzuak implanta en 2025 un proxy con filtrado por categorías para su red de oficinas. El despliegue se hace mediante configuración automática en los navegadores, y el cortafuegos sigue permitiendo la salida directa por los puertos 80 y 443 desde toda la red.

Durante cuatro meses, los informes del proxy muestran un uso impecable. Lo que esos informes no muestran es el tráfico que no pasa por él: una aplicación de sincronización instalada en dos equipos no lee la configuración del sistema y sale por su cuenta.

El problema se descubre al comparar el volumen de salida registrado por el cortafuegos con el registrado por el proxy. La diferencia, un once por ciento del total, corresponde íntegramente a conexiones que nunca fueron inspeccionadas. La corrección no consistió en configurar mejor el proxy, sino en cerrar en el cortafuegos la salida directa a Internet para todo lo que no fuera el propio proxy.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Impide la salida de datos hacia destinos no autorizados y deja constancia de qué información se envía y por parte de quién. |
| Integridad | Sí | Al inspeccionar el contenido devuelto, bloquea las descargas maliciosas antes de que lleguen al equipo del usuario. |
| Disponibilidad | Sí | La caché reduce el tráfico hacia el exterior y, en su variante inversa, absorbe y filtra peticiones antes de que alcancen al servidor. |
| Autenticación | Sí | Puede exigir identificación del usuario antes de conceder salida, lo que vincula cada petición a una persona concreta. |
| No repudio | Sí | Su registro asocia peticiones individuales a un usuario autenticado, con fecha y contenido: es la fuente de trazabilidad más útil de todo el perímetro. |

### Despliegue recomendado

- Salida directa a Internet cerrada en el cortafuegos: lo que no pasa por el proxy, sencillamente no sale.
- Autenticación de usuario en el proxy, para que el registro tenga valor de trazabilidad y no sea sólo un dato estadístico.
- Inspección del tráfico cifrado aplicada con criterio, excluyendo por política las categorías sensibles como banca o salud.
- Proxy inverso delante de los servicios publicados, con limitación de peticiones y filtrado a nivel de aplicación.
- Conservación de los registros durante el plazo que exija la normativa aplicable, en un sistema separado del propio proxy.

---

# Seguridad perimetral

> El perímetro

Cuatro controles que sólo funcionan juntos. Cada uno cubre el hueco que dejan los otros tres.

El cortafuegos decide la conexión. La VPN protege el tránsito ajeno. La DMZ acota el compromiso futuro. El proxy mira el contenido.

Sus límites importan desde el principio. No protege lo que ya está dentro, ni la credencial legítima mal usada, ni el portátil que trabaja tres días seguidos fuera de la oficina. Es una capa necesaria, no suficiente.

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

Sistema que filtra el tráfico entre dos redes con reglas ordenadas: permite, rechaza con aviso o descarta en silencio cada paquete o conexión. No analiza el contenido, sólo decide qué comunicaciones se establecen.

### Cómo funciona

1. Define la política: lista ordenada de reglas con origen, destino, protocolo, puerto y acción.
2. Evalúa de arriba abajo y aplica la primera coincidencia: el orden es política.
3. Recuerda las conexiones establecidas: la respuesta a una petición permitida no necesita regla propia.
4. Aplica la acción final: permite, rechaza con aviso o descarta en silencio. El descarte silencioso dificulta el reconocimiento.
5. Registra cada decisión significativa. Ese registro suele ser la primera evidencia del ataque.

### Cómo se elude

- Mando y control sobre el puerto 443: cumple todas las reglas sin excepción.
- Conexiones iniciadas desde dentro: la inspección de estado devuelve tráfico sin regla entrante.
- Túneles sobre DNS o HTTPS: transportan algo distinto de lo que aparentan.
- Rutas que evitan el cortafuegos: punto inalámbrico no autorizado o módem de mantenimiento interno.

### Caso ilustrativo — Txorierri Garraioak

*Transporte de mercancías · 2024*

Txorierri Garraioak sustituye en 2024 su cortafuegos perimetral. Migra copiando la política anterior, acumulada a lo largo de nueve años, sin revisarla regla por regla.

La auditoría cuenta doscientas treinta y una reglas; setenta y ocho sin coincidencia en doce meses. Una abría todo Internet al puerto de escritorio remoto, creada en 2017 para un mantenimiento que duró una tarde.

La limpieza deja cuarenta y seis reglas. Ninguna de las setenta y ocho eliminadas causó incidencia: llevaban años ampliando la exposición sin aportar nada.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Impide que el servicio interno sea alcanzable desde fuera. |
| Integridad | No | No verifica el contenido: un paquete permitido transporta cualquier cosa. |
| Disponibilidad | Sí | Descarta lo no deseado antes de consumir recursos y limita conexiones simultáneas. |
| Autenticación | No | Decide por dirección y puerto, no por identidad. |
| No repudio | No | Registra conexiones, no autoría de acciones en la aplicación. |

### Despliegue recomendado

- Deniega por defecto: la última regla descarta todo lo no permitido antes.
- Usa origen y destino concretos; evita el comodín salvo en lo público.
- Controla también el tráfico saliente: sólo así ves la conexión inversa.
- Revisa la política cada año, con caducidad para reglas temporales.
- Centraliza el registro fuera del dispositivo y alerta ante cambios no planificados.

---

## 2. VPN

**Red privada virtual · Sare pribatu birtuala** · Ubicación: Túnel sobre la red pública. Capa 3 con IPsec, o capa de aplicación sobre TLS.

> Una red privada sobre una infraestructura que no lo es.

### Definición

Crea un canal cifrado y autenticado entre dos extremos sobre una red no confiable. Lo que circula por él resulta ilegible e inalterable para quien lo intercepta.

### Cómo funciona

1. Autentica ambos extremos con certificados, claves precompartidas o credenciales con segundo factor.
2. Negocia claves de sesión que nadie deduce después, aunque capture todo el tráfico.
3. Encapsula: cifra cada paquete original y lo envuelve en otro dirigido al extremo remoto.
4. Transporta mostrando sólo las direcciones de los extremos, no el origen y destino reales.
5. Desencapsula en destino y comprueba la integridad. Descarta todo paquete alterado.

### Cómo se elude

- Extremo comprometido: el túnel protege el tránsito, nunca el equipo de la punta.
- Credenciales robadas sin segundo factor: convierten el túnel en puerta de entrada cifrada.
- Túnel dividido mal configurado: deja parte del tráfico en la red local no confiable.
- Concentrador VPN vulnerable: es un servicio publicado en Internet como otro cualquiera.

### Caso ilustrativo — Basalde Nekazaritza

*Cooperativa agraria · 2025*

Basalde Nekazaritza despliega en 2025 acceso VPN para veinte personas sobre el terreno. Usa túnel dividido: sólo el tráfico corporativo entra al túnel; el resto sale por la conexión local.

La decisión busca rendimiento y es razonable. El fallo aparece cuando un portátil, en la red compartida de un alojamiento rural, recibe por DHCP un servidor de nombres de otro huésped. Las consultas corporativas van por el túnel; la resolución de nombres, no.

Ese detalle redirige el portal de proveedores a una copia fuera del túnel. El cifrado funcionó como estaba configurado. Falló la decisión sobre qué tráfico debía entrar en ella.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | El cifrado hace ilegible el contenido ante quien intercepta el tránsito. |
| Integridad | Sí | Cada paquete detecta y descarta cualquier alteración en el camino. |
| Disponibilidad | No | No aporta capacidad; concentra el acceso en un posible cuello de botella. |
| Autenticación | Sí | Identifica ambos extremos antes de transportar un solo byte. |
| No repudio | No | Acredita el extremo durante la sesión, sin firmar las acciones internas. |

### Despliegue recomendado

- Exige segundo factor en acceso remoto; certificados en túneles entre sedes.
- Usa túnel completo o fuerza la resolución de nombres por el túnel.
- Comprueba el equipo antes del acceso: actualizado, cifrado y protegido.
- Concede acceso por perfil, nunca a la red entera.
- Parchea el concentrador con prioridad de perímetro: está en Internet.

---

## 3. DMZ

**Zona desmilitarizada · Zona desmilitarizatua** · Ubicación: Segmento de red propio, situado entre la red externa y la interna.

> Lo que debe ser público no puede vivir con lo que no.

### Definición

Segmento aislado para los servicios accesibles desde el exterior, separado de Internet y de la red interna con reglas de filtrado. Asume que esos servicios se comprometerán y que el atacante no debe quedar entonces dentro de la red de trabajo.

### Cómo funciona

1. Identifica los servicios con exposición real: web pública, correo entrante, portal de proveedores o DNS externo.
2. Ubícalos en un segmento propio, con filtrado específico hacia fuera y hacia dentro.
3. Limita la entrada desde Internet: sólo puertos publicados y sólo hasta la DMZ.
4. Cierra la salida hacia la red interna: nada por defecto, salvo conexiones concretas de un solo sentido a servicios determinados.
5. Vigílala como el segmento con mayor probabilidad de compromiso.

### Cómo se elude

- Retornos amplios hacia la red interna: convierten el aislamiento en trámite formal.
- Credenciales compartidas con la red interna: permiten saltar sin regla de red.
- Servidor integrado en el dominio interno: anula buena parte de la separación.
- Salida a Internet sin restricción: facilita exfiltración y mando y control.

### Caso ilustrativo — Arbolantza Aseguruak

*Correduría de seguros · 2023*

Arbolantza Aseguruak sitúa en 2023 su portal de clientes en una DMZ separada por cortafuegos. La red interna no es accesible desde ella y el diseño se revisó formalmente.

El portal consulta la base de datos de pólizas, en la red interna. Se abre una regla: del servidor web a la base de datos, un único puerto y un único destino. Hasta aquí, todo correcto.

El fallo está en la cuenta. Es la misma cuenta de servicio, con la misma contraseña, de tres aplicaciones internas más, con lectura sobre todo el esquema. Al comprometerse el portal, la DMZ contiene la red pero no las credenciales: el atacante ya dispone de vía autorizada al dato.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Acota el compromiso: tomar el servidor público no abre la información interna. |
| Integridad | No | No valida contenido; sólo acota el terreno de quien entra. |
| Disponibilidad | Sí | Aísla el impacto: el ataque al servicio publicado no arrastra la red interna. |
| Autenticación | No | No verifica identidades; delega esa función en cada servicio. |
| No repudio | No | No traza autoría, aunque acota el alcance en la investigación. |

### Despliegue recomendado

- Excluye la DMZ del dominio interno y de sus cuentas.
- Define cada regla hacia dentro con origen, destino, puerto y motivo.
- Restringe la salida a Internet y canalízala por un proxy con registro.
- Crea cuentas propias del segmento, mínimas y con contraseña distinta.
- Monitoriza la DMZ como si ya estuviera comprometida.

---

## 4. Proxy

**Servidor intermediario · Bitartekari zerbitzaria** · Ubicación: Capa de aplicación, intercalado entre el cliente y el servidor de destino.

> Mira qué se pide, no sólo adónde se pide.

### Definición

Servidor que pide en nombre del cliente. Al terminar y reiniciar la conexión inspecciona el contenido, aplica políticas, guarda caché y registra cada solicitud; en variante inversa protege al servidor en lugar del usuario.

### Cómo funciona

1. El cliente pide al proxy en lugar de al destino, por configuración explícita o transparente.
2. El proxy comprueba la política: categoría, reputación, tipo de contenido, usuario y horario.
3. Si la permite, el propio proxy abre la conexión y recupera la respuesta.
4. Inspecciona el contenido devuelto, lo remite a antimalware y bloquea lo que incumple la política.
5. Entrega la respuesta al cliente y anota la petición completa asociada a un usuario.

### Cómo se elude

- Cifrado sin inspección TLS: el proxy sólo ve el nombre del destino.
- Aplicaciones que ignoran el proxy del sistema y salen directas si el cortafuegos lo permite.
- Servicios legítimos como intermediarios: un almacenamiento reputado que aloja la carga.
- Túneles sobre DNS u otros protocolos que el proxy no gestiona.

### Caso ilustrativo — Elorrio Ingurumen Zerbitzuak

*Servicios medioambientales · 2025*

Elorrio Ingurumen Zerbitzuak implanta en 2025 un proxy con filtrado por categorías. Lo despliega por configuración automática en navegadores, y el cortafuegos sigue permitiendo salida directa por 80 y 443.

Durante cuatro meses, los informes muestran un uso impecable. Omiten el tráfico que no pasa por él: una sincronización en dos equipos ignora la configuración del sistema y sale directa.

El desfase aparece al comparar ambas salidas. Un once por ciento del total nunca se inspeccionó. La corrección: cerrar la salida directa salvo el proxy.

> Escenario ficticio construido para ilustrar el mecanismo. Ni la organización ni los hechos son reales.

### Propiedades que refuerza

| Propiedad | ¿La refuerza este control? | Justificación |
| --- | :---: | --- |
| Confidencialidad | Sí | Bloquea la salida a destinos no autorizados y registra quién envía qué. |
| Integridad | Sí | Bloquea descargas maliciosas antes de llegar al equipo. |
| Disponibilidad | Sí | La caché reduce tráfico externo; el inverso filtra antes del servidor. |
| Autenticación | Sí | Identifica al usuario antes de conceder salida. |
| No repudio | Sí | Asocia cada petición a un usuario con fecha y contenido. |

### Despliegue recomendado

- Cierra la salida directa en el cortafuegos: lo que no pasa por el proxy no sale.
- Autentica al usuario en el proxy para dar valor de trazabilidad al registro.
- Inspecciona el cifrado con criterio, excluyendo banca o salud.
- Coloca proxy inverso ante lo publicado, con límite y filtrado de aplicación.
- Conserva registros el plazo normativo, en sistema separado del proxy.

---

# Ciberataques

> Casos de estudio

Dos incidentes reales analizados con la misma plantilla: qué falló, en qué orden, cuánto costó y qué se cambió después.

---

## WannaCry (2017)

**El día que un gusano recordó lo que cuesta no parchear**

*Ransomware con propagación automática*

### Contexto

En marzo de 2017, Microsoft publica una actualización de seguridad para una vulnerabilidad en su implementación del protocolo de compartición de ficheros SMB en su primera versión, presente en prácticamente todas las versiones de Windows en uso. La corrección queda disponible con dos meses de antelación sobre lo que vendrá después.

En abril se filtra públicamente un conjunto de herramientas ofensivas desarrolladas por una agencia de inteligencia estadounidense. Entre ellas figura un código de explotación fiable para esa misma vulnerabilidad, capaz de ejecutar instrucciones sin autenticación previa contra cualquier equipo que tenga el servicio accesible en red.

El escenario resultante reúne tres condiciones que rara vez coinciden: una vulnerabilidad explotable sin credenciales, un exploit de calidad profesional en circulación libre y un parque enorme de equipos sin actualizar, muchos de ellos con ese servicio expuesto incluso hacia Internet.

### Cronología

| Fecha | Hito | Detalle |
| --- | --- | --- |
| 14 de marzo de 2017 | **Se publica el parche** | Microsoft corrige la vulnerabilidad en su ciclo mensual de actualizaciones. Aplicarla habría bastado para impedir por completo todo lo que vino después. |
| 14 de abril de 2017 | **Se filtra el exploit** | Se hace público el conjunto de herramientas que incluye el código de explotación. La ventana de exposición deja de ser teórica ese mismo día. |
| 12 de mayo, por la mañana | **Primeras infecciones** | Empiezan a detectarse cifrados masivos en Europa y Asia. Lo que sorprende no es el ransomware en sí, sino que se propaga solo entre equipos de la misma red. |
| 12 de mayo, por la tarde | **Alcance global** | En pocas horas hay incidentes en decenas de países. Servicios sanitarios, operadores de telecomunicaciones y fabricantes detienen sistemas de forma preventiva. |
| 12 de mayo, por la noche | **El freno accidental** | Un investigador observa que el código consulta un dominio inexistente antes de actuar, y lo registra. La consulta empieza a resolver y la mayoría de las muestras detiene el cifrado. |
| A partir del 15 de mayo | **Variantes y recuento** | Aparecen versiones sin esa comprobación. La propagación ya no alcanza la escala del primer día, pero la limpieza y la reconstrucción se prolongan durante semanas. |

### Vector técnico

#### Vulnerabilidad explotable sin autenticación

El fallo residía en el tratamiento de determinadas peticiones del protocolo de compartición de ficheros. Podía aprovecharse contra un equipo que simplemente tuviera el servicio escuchando, sin usuario ni contraseña, lo que elimina el paso que más esfuerzo exige normalmente a un atacante.

#### Propagación automática

La pieza decisiva fue combinar un ransomware convencional con un módulo de gusano. El código recorría la red local y rangos de direcciones públicas buscando el puerto del servicio vulnerable, y se copiaba a sí mismo en cada equipo que respondía. Ninguna víctima posterior a la primera tuvo que abrir absolutamente nada.

#### Cifrado y petición de rescate

Una vez en el equipo, cifraba documentos de uso común y mostraba una nota exigiendo el pago en criptomoneda. El sistema de cobro era rudimentario y no permitía asociar de forma fiable un pago con una víctima concreta, de modo que buena parte de quienes pagaron no recibieron clave alguna.

#### La comprobación de dominio

Antes de cifrar, la muestra consultaba un dominio concreto y se detenía si obtenía respuesta. Probablemente era un mecanismo para no activarse dentro de entornos de análisis automatizado, donde todo dominio resuelve. Registrar ese dominio actuó como freno global, un efecto que sus autores no habían previsto.

### Impacto en cifras

| Cifra | Concepto |
| ---: | --- |
| **~200.000** | equipos afectados en la primera oleada |
| **150+** | países con incidentes registrados |
| **59** | días entre el parche disponible y el ataque |
| **<24 h** | para alcanzar escala mundial |

### Alcance real

El sector sanitario británico fue el caso más visible: decenas de organizaciones del servicio público de salud cancelaron citas, derivaron urgencias y volvieron temporalmente a procedimientos en papel. El daño no fue la pérdida de datos, sino la interrupción de una actividad que no admite pausa.

En la industria, varias plantas detuvieron líneas de producción. El motivo se repitió una y otra vez: redes internas planas donde el equipo de un despacho y un sistema de control compartían el mismo segmento sin ninguna separación.

El coste económico se estimó en miles de millones de euros a escala global, casi todo en tiempo de parada, horas de reconstrucción y actividad perdida, y no en rescates pagados. La recaudación de los atacantes fue, en comparación, insignificante.

### Respuesta

- Microsoft publicó de forma excepcional actualizaciones para versiones de Windows ya fuera de soporte, una decisión poco habitual que da la medida del parque afectado.
- Muchas organizaciones optaron por desconectar redes completas mientras parcheaban, asumiendo una parada controlada para evitar una descontrolada.
- La primera versión del protocolo pasó a deshabilitarse por defecto en las ediciones siguientes del sistema, y se recomendó su retirada allí donde seguía activa por compatibilidad.
- El bloqueo del puerto de ese servicio en el perímetro se generalizó como medida básica, algo que ya debería haber sido la norma mucho antes del incidente.

### Tres lecciones

#### 1. La ventana de exposición la fija la organización

El parche llevaba cincuenta y nueve días disponible. Todo el impacto se produjo dentro de la distancia entre la publicación de la corrección y su aplicación real, que es precisamente la única variable que la víctima controla por completo.

#### 2. Una red plana convierte un incidente en una catástrofe

La propagación automática sólo resulta devastadora si hay a dónde propagarse. En las organizaciones segmentadas, exactamente el mismo código produjo incidentes acotados a un departamento.

#### 3. La capacidad de restaurar es la última defensa real

Quien tenía copias verificadas y desconectadas perdió horas. Quien no las tenía perdió semanas y, en muchos casos, los datos de forma definitiva: pagar tampoco garantizaba recuperarlos.

---

## Sony Pictures (2014)

**Cuando el objetivo no es el dinero, sino el daño**

*Intrusión dirigida con borrado y filtración*

### Contexto

A finales de noviembre de 2014, los equipos de Sony Pictures Entertainment amanecen mostrando una imagen y un mensaje firmado por un grupo autodenominado Guardians of Peace. No es una nota de rescate al uso: el acceso a los sistemas ya se ha perdido y buena parte de la información corporativa está en manos ajenas.

El incidente rompe el patrón económico habitual. No hay una petición de pago proporcionada al daño ni un modelo de negocio detrás: hay exfiltración masiva, destrucción de datos y una campaña de publicación escalonada diseñada para sostener la presión durante semanas.

El caso se asoció públicamente al estreno inminente de una película cuyo argumento resultaba ofensivo para un Estado, lo que introdujo en el debate una dimensión poco frecuente hasta entonces: una empresa privada convertida en objetivo de una operación con motivación política.

### Cronología

| Fecha | Hito | Detalle |
| --- | --- | --- |
| Meses previos | **Acceso y permanencia** | Los atacantes llevaban semanas dentro de la red, cartografiándola, obteniendo credenciales privilegiadas y copiando información sin activar ninguna alerta. |
| 24 de noviembre de 2014 | **Revelación** | El componente destructivo se activa de forma coordinada. Los equipos muestran el mensaje del grupo y quedan inservibles; la compañía desconecta su red y pasa a trabajar con métodos manuales. |
| Finales de noviembre | **Primeras filtraciones** | Se publican películas aún sin estrenar y documentos internos. La difusión es deliberadamente gradual, con entregas nuevas cada pocos días. |
| Diciembre de 2014 | **Datos personales y correo interno** | Aparecen nóminas, evaluaciones, datos médicos y correspondencia interna de miles de personas empleadas. El daño se desplaza de lo corporativo a lo personal. |
| Diciembre de 2014 | **Presión sobre el estreno** | Las amenazas contra las salas llevan a varias cadenas de cines a retirar la película. El estreno acaba reconduciéndose a distribución digital y a un número reducido de salas. |
| 2015 | **Consecuencias prolongadas** | Demandas colectivas del personal afectado, salidas de directivos y una reconstrucción completa de la infraestructura tecnológica de la compañía. |

### Vector técnico

#### Acceso inicial y permanencia prolongada

La intrusión no fue instantánea. Los atacantes permanecieron dentro el tiempo suficiente para entender la organización, localizar dónde estaba lo valioso y hacerse con credenciales de administración. Esa fase silenciosa es la que determina el alcance final de cualquier incidente grave.

#### Exfiltración masiva previa

Se copiaron fuera del orden de decenas de terabytes antes de que nadie advirtiera nada. Un volumen así no se mueve en una noche: exige semanas de transferencia sostenida que nadie estaba vigilando en el sentido de salida.

#### Malware de borrado

El componente destructivo no cifraba para pedir un rescate: sobrescribía el sector de arranque y los datos para impedir la recuperación. Es una diferencia fundamental respecto al ransomware, porque elimina de raíz cualquier posibilidad de negociación.

#### La filtración como arma

La publicación escalonada convirtió la información robada en un instrumento de presión sostenida. Cada entrega renovaba la cobertura mediática y el daño reputacional, algo que un borrado por sí solo nunca habría conseguido.

### Impacto en cifras

| Cifra | Concepto |
| ---: | --- |
| **~100 TB** | de información comprometida |
| **~47.000** | personas con datos personales expuestos |
| **semanas** | de permanencia previa sin detección |
| **~15 M$** | de coste directo reconocido en el trimestre |

### Alcance real

La parada operativa fue total durante días. Sin correo, sin telefonía sobre IP y sin sistema de nóminas, la compañía volvió al papel, al fax y a las reuniones presenciales; algunos procesos administrativos tardaron meses en normalizarse.

La filtración de correspondencia interna produjo un daño de naturaleza distinta a la técnica: comentarios privados sobre personas y proyectos, condiciones contractuales y desequilibrios salariales quedaron expuestos, con consecuencias directas sobre carreras profesionales y relaciones comerciales.

Miles de trabajadores y extrabajadores vieron publicados datos personales, médicos y económicos. Las demandas colectivas que siguieron establecieron un precedente claro: la organización responde ante su propia plantilla por no haber protegido esa información.

La retirada inicial del estreno abrió un debate que trascendió con mucho la seguridad informática, sobre hasta qué punto una amenaza puede llegar a condicionar decisiones empresariales y culturales.

### Respuesta

- Desconexión inmediata y completa de la red corporativa, seguida de una reconstrucción de la infraestructura desde cero en lugar de una limpieza selectiva.
- Intervención de las autoridades federales estadounidenses, que atribuyeron públicamente el ataque a un Estado, algo entonces inusual.
- Servicios de vigilancia de identidad para las personas afectadas y acuerdos económicos en las demandas colectivas posteriores.
- Revisión profunda de la gestión de credenciales privilegiadas, de la segmentación interna y de la política de conservación del correo electrónico.

### Tres lecciones

#### 1. Lo que se guarda es lo que se puede filtrar

Buena parte del daño reputacional procedió de correo de años atrás que no tenía ninguna razón operativa para seguir almacenado. Una política de conservación con borrado efectivo reduce el impacto de una brecha antes incluso de que la brecha exista.

#### 2. La salida hay que vigilarla igual que la entrada

Decenas de terabytes salieron a lo largo de semanas sin generar una sola alerta. La supervisión se concentraba en quién entraba, no en qué volumen de información se iba, que es exactamente donde se decide la gravedad de una exfiltración.

#### 3. No todo atacante busca cobrar

Frente a un adversario cuyo objetivo es el daño y no el beneficio, las defensas pensadas para la extorsión no sirven: no hay rescate que negociar ni clave que comprar. Sólo quedan la prevención, la segmentación y la capacidad de reconstruir.

---

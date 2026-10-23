# Ciberataques

> Casos de estudio

Dos incidentes reales analizados con la misma plantilla: qué falló, en qué orden, cuánto costó y qué se cambió después.

---

## WannaCry (2017)

**El día que un gusano recordó lo que cuesta no parchear**

*Ransomware con propagación automática*

### Contexto

En marzo de 2017, Microsoft publica una actualización para SMB en su primera versión, presente en casi todo Windows en uso. Queda disponible dos meses antes del ataque.

En abril se filtra un arsenal ofensivo de una agencia de inteligencia estadounidense. Incluye un exploit fiable para esa vulnerabilidad: ejecuta código sin autenticación contra cualquier equipo con el servicio en red.

Coinciden tres condiciones raras: fallo explotable sin credenciales, exploit profesional en circulación libre y un parque enorme sin actualizar, con el servicio expuesto incluso a Internet.

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

El fallo trataba mal ciertas peticiones SMB. Bastaba el servicio escuchando, sin usuario ni contraseña. Desaparece el paso más costoso del atacante.

#### Propagación automática

Combinó ransomware común con gusano. Recorría la red local y rangos públicos buscando el puerto vulnerable y se copiaba en cada respuesta. Tras la primera víctima, nadie tuvo que abrir nada.

#### Cifrado y petición de rescate

Cifraba documentos comunes y pedía pago en criptomoneda. El cobro no asociaba pago y víctima, así que muchos pagos nunca recibieron clave.

#### La comprobación de dominio

Antes de cifrar consultaba un dominio y se detenía si resolvía. Era un evasor de análisis automatizado, donde todo dominio resuelve. Registrarlo actuó como freno global imprevisto.

### Impacto en cifras

| Cifra | Concepto |
| ---: | --- |
| **~200.000** | equipos afectados en la primera oleada |
| **150+** | países con incidentes registrados |
| **59** | días entre el parche disponible y el ataque |
| **<24 h** | para alcanzar escala mundial |

### Alcance real

El sector sanitario británico fue lo más visible: decenas de organizaciones cancelaron citas, derivaron urgencias y volvieron al papel. El daño fue interrumpir, no perder datos.

En la industria, varias plantas detuvieron líneas. La causa se repitió: redes planas donde despacho y control compartían segmento sin separación.

El coste global se estimó en miles de millones de euros, casi todo en paradas y reconstrucción, no en rescates. La recaudación atacante fue insignificante.

### Respuesta

- Microsoft actualizó versiones fuera de soporte, medida excepcional que muestra el parque afectado.
- Muchas organizaciones desconectaron redes y parchearon, con parada controlada ante la descontrolada.
- La primera versión del protocolo se deshabilitó por defecto y se pidió retirarla por compatibilidad.
- Bloquear ese puerto en perímetro se volvió norma básica, con años de retraso.

### Tres lecciones

#### 1. La ventana de exposición la fija la organización

El parche llevaba cincuenta y nueve días disponible. Todo el impacto cabe en la distancia entre publicar y aplicar, la única variable que la víctima controla.

#### 2. Una red plana convierte un incidente en una catástrofe

La propagación sólo arrasa si hay a dónde propagarse. En redes segmentadas, el mismo código quedó acotado a un departamento.

#### 3. La capacidad de restaurar es la última defensa real

Quien tenía copias verificadas y desconectadas perdió horas. Quien no, perdió semanas o los datos: pagar tampoco recuperaba.

---

## Sony Pictures (2014)

**Cuando el objetivo no es el dinero, sino el daño**

*Intrusión dirigida con borrado y filtración*

### Contexto

A finales de noviembre de 2014, los equipos de Sony Pictures Entertainment muestran una imagen firmada por Guardians of Peace. No es un rescate al uso: el acceso se ha perdido y gran parte de la información está en manos ajenas.

No hay pago proporcional ni negocio detrás: hay exfiltración masiva, destrucción y publicación escalonada para sostener la presión durante semanas.

El caso se asoció al estreno de una película ofensiva para un Estado. Una empresa privada se volvió objetivo de una operación con motivación política.

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

Los atacantes permanecieron dentro para entender la organización, localizar lo valioso y tomar credenciales de administración. Esa fase silenciosa fija el alcance final de todo incidente grave.

#### Exfiltración masiva previa

Decenas de terabytes salieron antes de cualquier alerta. Ese volumen exige semanas de transferencia que nadie vigilaba en salida.

#### Malware de borrado

No cifraba para pedir rescate: sobrescribía arranque y datos para impedir la recuperación. Esa diferencia elimina cualquier negociación.

#### La filtración como arma

La publicación escalonada sostuvo la presión: cada entrega renovaba cobertura y daño reputacional. Un borrado solo nunca lo logra.

### Impacto en cifras

| Cifra | Concepto |
| ---: | --- |
| **~100 TB** | de información comprometida |
| **~47.000** | personas con datos personales expuestos |
| **semanas** | de permanencia previa sin detección |
| **~15 M$** | de coste directo reconocido en el trimestre |

### Alcance real

La parada fue total durante días. Sin correo, telefonía IP ni nóminas, la compañía volvió a papel, fax y reuniones; algunos procesos tardaron meses en normalizarse.

La correspondencia filtrada dañó más allá de lo técnico: comentarios privados, contratos y salarios expuestos, con impacto en carreras y relaciones comerciales.

Miles de trabajadores vieron publicados datos personales, médicos y económicos. Las demandas colectivas fijaron el precedente: la organización responde ante su plantilla.

La retirada inicial del estreno abrió un debate mayor: hasta qué punto una amenaza condiciona decisiones empresariales y culturales.

### Respuesta

- Desconexión total y reconstrucción desde cero, en lugar de limpieza selectiva.
- Atribución pública a un Estado por autoridades federales, entonces inusual.
- Vigilancia de identidad y acuerdos económicos en las demandas colectivas.
- Revisión de credenciales privilegiadas, segmentación y conservación del correo.

### Tres lecciones

#### 1. Lo que se guarda es lo que se puede filtrar

Gran parte del daño vino de correo antiguo sin razón operativa para conservarse. Borrar a tiempo reduce la brecha antes de que exista.

#### 2. La salida hay que vigilarla igual que la entrada

Decenas de terabytes salieron durante semanas sin una alerta. Se vigilaba quién entraba, no qué volumen salía: ahí se decide la gravedad.

#### 3. No todo atacante busca cobrar

Ante quien busca daño y no beneficio, la extorsión no aplica: no hay rescate ni clave. Quedan prevención, segmentación y reconstrucción.

---

# PLAN DE DESARROLLO — APP "LOGOS ACOMPANYA"
### Plataforma digital de acompañamiento ciudadano (CA/ES)
**Gestionada por:** Associació Logos - Projectes Socials (Tarragona)

---

## 1. Objetivo del plan

Convertir la idea del documento de proposta en un **plan operativo**, con la estructura funcional exacta que pides:

1. **Identificación y expediente de la persona** (datos + historial de trámites)
2. **Catálogo de servicios y necesidades** (sociales, administrativos, asesoramiento)
3. **Requisitos por servicio + enlace directo al organismo público correspondiente**

Todo en catalán y castellano, apoyado por un módulo de orientación con IA, y gestionado desde Logos.

---

## 2. Arquitectura funcional de la app

### Módulo 1 — "El meu espai" / "Mi espacio" (identificación + historial)

Es el expediente digital de cada usuario. Debe incluir:

- **Datos de identificación**: nombre, DNI/NIE, fecha de nacimiento, dirección, teléfono, email, situación familiar/convivencia.
- **Datos de situación personal** (opcionales, ampliables progresivamente): situación laboral, ingresos aproximados (rangos, no cifras exactas), discapacidad/dependencia reconocida, composición del hogar, etc. Esto es lo que luego alimenta el motor de orientación (Módulo 2).
- **Historial de trámites**: cada trámite iniciado, en curso o finalizado, con estado, fecha, organismo, documentos adjuntos y próximos pasos.
- **Documentos guardados**: subida y almacenamiento de documentación reutilizable (padrón, DNI escaneado, certificados) para no tener que volver a pedirla en cada trámite.
- **Calendario/avisos**: fechas límite, renovaciones, citas.

Esto corresponde a los pilares "CONOCER" y "ACOMPAÑAR" del documento original.

### Módulo 2 — Catálogo de servicios y necesidades

Es el corazón de la plataforma. Dos formas de acceso, que deben convivir:

- **Por situación de vida** (lenguaje natural, ej. "vivo solo y tengo 72 años") → la persona no necesita saber el nombre del trámite.
- **Por catálogo navegable** (ej. Personas mayores, Dependencia, Discapacidad, Familia, Vivienda, Trabajo, Desempleo, Migración, Salud, Soledad, Emergencia social...).

La fuente base para estructurar este catálogo es la **Cartera de Serveis Socials de la Generalitat** (dretssocials.gencat.cat), que ya clasifica prestaciones, destinatarios y criterios de acceso. El trabajo aquí no es inventar contenido, sino **traducir esa estructura administrativa a lenguaje ciudadano** y organizarla por necesidad, no por organismo.

Cada ficha de servicio debe tener siempre la misma estructura (esto es clave para que el catálogo sea mantenible):

| Campo | Contenido |
|---|---|
| Nombre ciudadano del servicio | En lenguaje llano, no el nombre administrativo |
| ¿Para quién es? | Perfil de destinatario |
| ¿Para qué sirve? | Explicación en 2-3 líneas |
| Requisitos | Lista clara, punto por punto |
| Documentación necesaria | Lista clara |
| Organismo responsable | Generalitat / Ayuntamiento / Estado / otro |
| **Enlace oficial** | Link directo a la web/trámite del organismo |
| Cómo se solicita | Presencial / online / ambos |
| Relacionado con Logos | Si Logos puede acompañar este trámite en concreto |

### Módulo 3 — Orientación con IA

- La persona escribe su situación en lenguaje natural (o la completa desde su perfil del Módulo 1).
- El sistema hace preguntas de acotación sencillas (no un formulario largo).
- Cruza la situación descrita con las fichas del catálogo (Módulo 2) y devuelve una lista priorizada de servicios posiblemente relevantes, **cada uno con su fuente oficial visible**.
- La IA no decide ni certifica derechos — solo orienta y explica. Esto hay que dejarlo explícito en la propia interfaz, por responsabilidad legal.
- Cuando la persona no puede continuar sola (brecha digital, caso complejo), botón directo de "Contactar con Logos" que traspasa el caso con contexto ya recogido, para no repetir la historia desde cero.

### Módulo 4 — Panel de gestión para Logos (backoffice)

No aparece en tu mensaje pero es imprescindible para que esto sea gestionable:

- Ver casos derivados por la IA a Logos.
- Mantener y actualizar el catálogo de servicios (altas, bajas, cambios de requisitos/enlaces).
- Estadísticas anónimas: qué necesidades se buscan más, qué zonas, qué perfiles — útil también para memorias/subvenciones de Logos.

---

## 3. Flujo de usuario (resumen)

1. Persona entra a la app → crea su perfil básico (Módulo 1).
2. Describe su situación o navega el catálogo (Módulo 2).
3. La IA orienta y muestra servicios relevantes con requisitos y enlace oficial (Módulo 3).
4. La persona guarda el trámite en "Mis trámites", con recordatorios.
5. Si no puede avanzar sola → deriva a Logos con un clic (Módulo 3 → Módulo 4).
6. Logos hace seguimiento humano cuando hace falta.

---

## 4. Fases de desarrollo (roadmap)

### Fase 0 — Preparación (antes de programar nada)
- Definir con Logos qué 5-8 "situaciones de vida" cubrir primero (no los 17 ámbitos de golpe).
- Construir manualmente las primeras 20-30 fichas de servicio con la plantilla del Módulo 2, usando dretssocials.gencat.cat como fuente. Esto es trabajo de contenido, no de programación, y puede empezar ya, en paralelo al desarrollo técnico.
- Decidir el nombre definitivo y la identidad visual (ligado a Logos).

### Fase 1 — MVP
- Módulo 1 básico (registro, perfil, datos mínimos).
- Módulo 2 con el catálogo inicial (las 20-30 fichas de la Fase 0), navegable por categoría.
- Buscador simple por palabras/necesidad (aún sin IA conversacional compleja).
- "Mis trámites" con estado y recordatorios manuales.
- Botón de contacto con Logos.
- Bilingüe CA/ES desde el primer día.

### Fase 2 — Orientación inteligente
- Motor de IA conversacional sobre el catálogo ya construido.
- Cruce automático entre perfil (Módulo 1) y catálogo (Módulo 2).
- Backoffice para Logos (Módulo 4).

### Fase 3 — Escalado
- Ampliar catálogo a todos los ámbitos.
- Integrar organismos municipales además de la Generalitat.
- Itinerarios personalizados y detección proactiva de necesidades no identificadas.
- Estadísticas y memoria de impacto para Logos.

---

## 5. Aspectos técnicos a decidir

- **Tipo de app**: lo más razonable para este caso es una **PWA** (web app instalable, funciona en móvil y ordenador sin pasar por tiendas de apps, más fácil de mantener bilingüe y accesible para perfiles con brecha digital).
- **Gestión de contenido del catálogo**: debe vivir en una base de datos/CMS separada del código, para que alguien de Logos (no programador) pueda actualizar fichas, requisitos y enlaces sin depender de un desarrollador cada vez.
- **Protección de datos**: al guardar DNI, situación familiar, ingresos, discapacidad, etc., esto es un tratamiento de **datos sensibles bajo RGPD** — necesita: minimización de datos, cifrado, consentimiento explícito por campo, y probablemente una Evaluación de Impacto (EIPD) antes de lanzar, dado que Logos gestionará datos de colectivos vulnerables.
- **Idiomas**: catalán y castellano desde el modelo de datos (no solo la interfaz) — cada ficha de servicio necesita sus dos versiones.

---

## 6. Próximos pasos concretos

1. Validar contigo y con Logos las 5-8 situaciones de vida prioritarias para el MVP.
2. Empezar la plantilla de fichas de servicio (Módulo 2) con 3-5 ejemplos reales, para testar el formato antes de escalar.
3. Decidir tipo de app (PWA) y quién construye el backoffice de contenidos.
4. Boceto de pantallas (perfil, catálogo, ficha de servicio, mis trámites) para validar el flujo antes de programar.

---

*Documento de trabajo — punto de partida para desarrollar "Logos Acompanya" junto con Associació Logos - Projectes Socials, Tarragona.*

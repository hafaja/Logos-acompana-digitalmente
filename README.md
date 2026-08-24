# Logos Acompanya

Plataforma digital de acompañamiento ciudadano (CA/ES) — Associació Logos - Projectes Socials, Tarragona.

## Estructura del repo

```
docs/       → Plan de la plataforma y fichas de servicio (fuente de verdad, en Markdown)
design/     → Prototipo visual interactivo (referencia de diseño, no es código de producción)
app/        → Código real de la PWA — se va completando en paralelo a docs/
  index.html
  manifest.json
  content/servicios.json   → catálogo de servicios en datos estructurados
  icons/                   → pendiente: iconos de la PWA (192px y 512px)
```

## Estado actual (Fase 0 del plan)

- [x] Plan de la plataforma (`docs/plan.md`)
- [x] Primer lote de 4 fichas de servicio, con datos verificados (`docs/fichas-servicio.md` y `app/content/servicios.json`)
- [x] Prototipo navegable de interfaz — Inicio, Catálogo, Ficha de servicio, Mi espacio (`design/prototype.html`)
- [x] Primera versión de código real: catálogo dinámico leyendo desde `servicios.json` (`app/index.html`)
- [x] Confirmar con el Ajuntament de Tarragona los enlaces oficiales de SAD y Teleassistència (IMSS, cis.tarragona.cat)
- [x] Traducir cada ficha al catalán completo (el JSON ya tiene el campo `ca`, vacío)
- [x] Taxonomía de 8 áreas (en primera persona: "Mi vivienda", "Mi economía"...) recibida de Logos, con navegación en dos niveles área → necesidad → servicio, cross-tagging entre áreas y opción "No sé exactamente qué necesito" (`app/content/taxonomia.json`)
- [ ] Validar con Logos las 5-8 situaciones de vida prioritarias del MVP
- [ ] Decidir stack técnico definitivo (`app/index.html` es HTML/CSS/JS plano a propósito, para no comprometer esa decisión todavía)
- [ ] Módulo 1 (perfil, historial, documentos) — diseño ya existe en el prototipo, falta programarlo
- [ ] Módulo 3 (orientación con IA) y Módulo 4 (backoffice de Logos)

## Cómo ver la app en local

`app/index.html` carga `content/servicios.json` con `fetch()`, así que no se puede abrir con doble clic (los navegadores bloquean fetch sobre `file://`). Desde la carpeta `app/`:

```
python3 -m http.server 8000
```

y abrir `http://localhost:8000` en el navegador.

## Cómo se actualiza el catálogo

No se toca `index.html` para añadir o corregir un servicio — solo `app/content/servicios.json`, siguiendo la misma estructura de campos que los cuatro servicios ya cargados. Esto es a propósito: es el mismo principio de "contenido separado del código" del plan, para que Logos pueda mantener el catálogo sin depender de un programador en cada cambio.

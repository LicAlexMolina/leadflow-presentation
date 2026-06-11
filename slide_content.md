# Slide Content — LeadFlow Intelligence (Demo Day, 11 Jun 2026)

This is the **editable source of truth for the deck's text**. All content below
already exists in `leadflow_final.html` (12 slides inside `<deck-stage>`) and was
sourced from `Fuentes/Documento Final.docx`, `Fuentes/Contexto general de Tribu
Emprendedores.docx`, `Fuentes/Contexto General del Proyecto Integrador.docx` and
`Fuentes/HOW TO PITCH.pdf`. Nothing here was invented — this file documents and
maps what's already in the HTML so you can edit copy without touching markup.

To edit a slide: find its **HTML class/ID** below, open `leadflow_final.html`,
search for that selector, and change the text between the tags. Keep `<span
class="accent">…</span>` wrappers — they apply the brand-green highlight.

## Rubric reference (Presentación final · Demo Day · 20% of total grade)
From `Fuentes/Rubricas de evaluacion.pdf`:

| Criterio | Peso | Excelente = |
|---|---|---|
| **Dominio del tema y respuesta a preguntas** | 8% | Conocimiento profundo, responde con seguridad y datos, maneja objeciones |
| **Estructura y storytelling de la presentación** | 6% | Narrativa clara y "enganchante", flujo lógico problema→solución, buen uso del tiempo |
| **Calidad visual y recursos de apoyo** | 6% | Slides profesionales, limpias, buen uso de datos visuales, demo o prototipo funcional |

Pitch structure reference (`HOW TO PITCH.pdf`, 11-moment template): **Título →
Problema → Usuario → Insight → Solución → Cómo funciona (x2) → Validación →
Implementación → KPIs y ROI (opcional) → Próximos pasos + cierre**.

The deck's 12 slides map onto this template as shown per-slide below.

---

## Slide 01 — Hook / Título
**Section:** `<section class="slide dark cover" data-screen-label="01 Hook">`
**Pitch moment:** Título / Hook
**Rubric focus:** Estructura y storytelling (hook), Calidad visual (cover)

| Field | HTML selector | Text |
|---|---|---|
| Wordmark | `.wordmark .nm` | "LeadFlow `<span class="lo accent">Intelligence</span>`" |
| Top-right meta tag | `.topline .tag-mono` | "Demo Day · CETYS Posgrado · 11 Jun 2026" |
| Eyebrow | `.eyebrow.anim-2` | "El problema real" |
| Hero headline | `h1.display` (`.cover .hook .display`) | "El problema nunca fue conseguir leads.<br>Fue perderles el rastro." (last sentence in `<span class="accent">`) |
| Presenter name | `.meta .who .nm` | "Alejandro Molina Togno" |
| Presenter role | `.meta .who .ro` | "Maestría en Inteligencia de Negocios y Transformación Digital · CETYS Tijuana" |
| "Para" label | `.meta .for .lbl` | "Para" |
| Partner logo 1 | `.meta .for img[alt="Tribu Emprendedores"]` | Tribu Emprendedores wordmark, 30px tall |
| Partner logo 2 | `.meta .for img[alt="Insight-r"]` | Insight-r wordmark, 30px tall |

---

## Slide 02 — Contexto (Usuario)
**Section:** `<section class="slide light" data-screen-label="02 Contexto">`
**Pitch moment:** Usuario / Contexto
**Rubric focus:** Dominio del tema (situar al presentador y a Tribu), Estructura y storytelling

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow` | "01 · El contexto" |
| Headline | `h2.t-lg` | "Soy Alejandro. Diseño sistemas donde la `<span class="accent">IA y los datos</span>` resuelven problemas de negocio reales." |
| Lead paragraph | `p.lead.wide` | "Lo desarrollé como una **solución interna** para **Tribu Emprendedores** — no un producto para vender, sino una mejora en cómo la propia empresa capta y da seguimiento a **sus** leads." |
| Card label | `.card .tag-mono` | "Caso de validación" |
| Card body | `.card p` | "Plataforma de ventas y lealtad para **restaurantes y cafeterías**. Sus prospectos llegan de Meta Ads hacia WhatsApp — el contexto perfecto para probar la trazabilidad." |

---

## Slide 03 — El problema
**Section:** `<section class="slide dark" data-screen-label="03 Problema">`
**Pitch moment:** Problema
**Rubric focus:** Estructura y storytelling (planteamiento del problema), Calidad visual (diagrama de dispersión)

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow.anim-1` | "02 · El problema" |
| Headline | `h2.t-lg.anim-2` | "Los leads llegan por todos lados. `<span class="accent">El rastro se pierde</span>` en el camino." |
| Dispersion node 1 | `.disperse .node` (top-left) | "WhatsApp" / sub: "fuera de horario" |
| Dispersion node 2 | `.disperse .node` | "Meta Ads" / sub: "campañas digitales" |
| Dispersion node 3 | `.disperse .node` | "Formularios" / sub: "web" |
| Dispersion node 4 | `.disperse .node` | "Correo" / sub: "subcarpetas" |
| Dispersion node 5 | `.disperse .node` | "Excel" / sub: "hojas manuales" |
| Dispersion node 6 | `.disperse .node` | "Referencias" / sub: "boca a boca" |
| Dispersion node 7 (red, "bad") | `.disperse .node` (right, `--bad` styling) | "¿Quién le da<br>seguimiento?" |
| Problem card 1 | `.card.soft` (1st of 3) | "Respuestas tardías — el lead se enfría antes de recibir atención." |
| Problem card 2 | `.card.soft` (2nd of 3) | "Oportunidades olvidadas, sin responsable ni próxima acción." |
| Problem card 3 | `.card.soft` (3rd of 3) | "Cero visibilidad de qué campaña genera oportunidades reales." |

---

## Slide 04 — Evidencia (voces de campo)
**Section:** `<section class="slide light" data-screen-label="04 Evidencia">`
**Pitch moment:** Problema (refuerzo con evidencia de campo) — corresponde a la fase de **Empatía** de Design Thinking
**Rubric focus:** Dominio del tema (citar evidencia real refuerza credibilidad), Estructura y storytelling

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow.anim-1` | "03 · Voces de campo" |
| Intro paragraph | `p.anim.anim-2` | "Para entender el problema, **observé cómo lo enfrentan otras empresas** — marketing, ventas, dirección, inmobiliaria, educación y tecnología. El mismo patrón que vivimos puertas adentro en Tribu." |
| Pull-quote | `.quote .q` | "“Si al cliente no lo contactas en las primeras **4 horas**, ya valiste, ya no te va a pelar.”" |
| Pull-quote citation | `.quote .cite` | "— Entrevista · Responsable comercial B2B" |
| Card 1 quote | `.card p` (1st of 2) | "“Si los formularios se desconectan del CRM, descargamos los leads manualmente y ya no cumplimos con responder en menos de 10 minutos.”" |
| Card 1 citation | `.card .cite` (1st) | "Integraciones que fallan" |
| Card 2 quote | `.card p` (2nd of 2) | "“El CRM nos ayuda mucho a filtrar y dar seguimiento porque sí nos llega mucho volumen.”" |
| Card 2 citation | `.card .cite` (2nd) | "Pero tenerlo no basta" |

---

## Slide 05 — El insight
**Section:** `<section class="slide dark" data-screen-label="05 Insight">`
**Pitch moment:** Insight
**Rubric focus:** Estructura y storytelling (giro del problema al insight — el "enganche" central), Dominio del tema (POV statement)

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow.anim-1` | "04 · El insight" |
| Headline | `h2.t-hero.anim-2` | "El problema no era conseguir `<span style="color:var(--faint)">más leads</span>`.<br>Era `<span class="accent">no perderles el rastro</span>`." |
| POV label | `.card.soft .tag-mono` | "POV Statement" |
| POV statement | `.card.soft p` | "El **equipo comercial de Tribu** necesita centralizar y dar seguimiento a los prospectos que llegan por distintos canales — porque la trazabilidad se pierde cuando el proceso sigue dividido entre sistemas, personas y revisiones manuales." |
| Need chip 1 | `.chip` (1st of 4) | "Reducir la latencia del primer contacto" |
| Need chip 2 | `.chip` (2nd of 4) | "Registrar el origen de cada lead" |
| Need chip 3 | `.chip` (3rd of 4) | "Conectar el seguimiento con un CRM" |
| Need chip 4 | `.chip` (4th of 4) | "Equilibrio entre IA y atención humana" |

---

## Slide 06 — Solución + Cómo funciona (parte 1/2)
**Section:** `<section class="slide light" data-screen-label="06 Solución">`
**Pitch moment:** Solución + Cómo funciona (1/2)
**Rubric focus:** Calidad visual (diagrama de flujo de 5 pasos), Dominio del tema (explicar el sistema)

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow.plain` | "05 · La solución" |
| Product name | `.t-md` | "LeadFlow `<span class="accent">Intelligence</span>`" |
| Headline | `h2.anim.anim-2` | "Un sistema que conecta `<span class="accent">campaña, WhatsApp, chatbot, CRM y dashboard</span>` en un mismo flujo — para que ningún lead se pierda." |
| Flow step 1 | `.flow-card` 1 — `.fno`/`.fh`/`.fp` | "PASO 01" / "Campaña Meta Ads" / "El prospecto ve el anuncio y da clic hacia WhatsApp." |
| Flow step 2 | `.flow-card` 2 | "PASO 02" / "WhatsApp + Chatbot IA" / "Atiende al instante, califica y captura los datos clave." |
| Flow step 3 | `.flow-card` 3 | "PASO 03" / "CRM" / "Origen, etapa, responsable y próxima acción — en un lugar." |
| Flow step 4 | `.flow-card` 4 | "PASO 04" / "Seguimiento" / "Alertas y recordatorios; handoff humano cuando se necesita." |
| Flow step 5 | `.flow-card` 5 | "PASO 05" / "Dashboard" / "Pipeline en vivo y ROI real por campaña." |
| Closing line | `p.anim.anim-4` | "`<span class="accent">`La IA atiende el primer contacto. El vendedor cierra.`</span>`" |

---

## Slide 07 — Demo: recorrido del prospecto (Cómo funciona, parte 2/2)
**Section:** `<section class="slide dark" data-screen-label="07 Demo recorrido">`
**Pitch moment:** Cómo funciona (2/2) — demo grabada del flujo
**Rubric focus:** Calidad visual y recursos de apoyo (video del flujo real)

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow.anim-1` | "06 · El recorrido del prospecto" |
| Headline | `h2.t-xl.anim-2` | "Del anuncio en Facebook al primer `<span class="accent">"hola"</span>` en WhatsApp." |
| Lead | `p.lead.wide.anim-3` | "Así vive el prospecto el primer contacto — sin formularios, sin esperas, atendido al instante." |
| Step chip 1 | `.chip` (1st of 3) | "Ve el anuncio de Meta Ads" |
| Step chip 2 | `.chip` (2nd of 3) | "Escribe por WhatsApp" |
| Step chip 3 | `.chip` (3rd of 3) | "El chatbot responde y califica" |
| Video (vertical) | `<video-slot id="video-celular">` | `src="Assets/Flujo_Facebook_Final.mp4"` ✅ wired — autoplays muted/looped, shows the FB-ad → WhatsApp journey |

---

## Slide 08 — Demo en vivo (transición)
**Section:** `<section class="slide dark" data-screen-label="08 Demo en vivo">`
**Pitch moment:** Cómo funciona — transición a demo en vivo
**Rubric focus:** Estructura y storytelling (pacing/transición), Calidad visual y recursos de apoyo (demo funcional)

| Field | HTML selector | Text |
|---|---|---|
| Background numeral | `.bgnum` | "LIVE" |
| Live badge | `.live-badge` | "En vivo" (con punto pulsante) |
| Headline | `h2.t-hero.anim-2` | "Ahora entro directo<br>a la `<span class="accent">plataforma</span>`." |
| Lead | `p.lead.wide.anim-3` | "Les muestro LeadFlow funcionando — y Telegram como centro de control para alertas y seguimiento." |
| CTA button | `a.cta-btn` | "Ir a la plataforma" → `href="https://crm-tribu.lovable.app"` ✅ wired (was `#`) |
| Demo target 1 | `.demo-targets .dt` | "CRM / Pipeline" |
| Demo target 2 | `.demo-targets .dt` | "Dashboard" |
| Demo target 3 | `.demo-targets .dt` | "Alertas en Telegram" |
| Demo target 4 | `.demo-targets .dt` | "Vista individual del lead" |

> **Live demo tip:** open `https://crm-tribu.lovable.app` and Telegram in
> separate browser tabs/windows *before* starting the presentation, so
> alt-tabbing during this slide is instant.

---

## Slide 09 — Respaldo visual (dashboard en video)
**Section:** `<section class="slide dark" data-screen-label="09 Respaldo">`
**Pitch moment:** Cómo funciona — respaldo grabado por si la demo en vivo falla
**Rubric focus:** Calidad visual y recursos de apoyo (plan de contingencia visual)

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow` | "Respaldo visual" |
| Top-right tag | `.topline .tag-mono` | "El dashboard en video · por si la demo en vivo falla" |
| Video (horizontal) | `<video-slot id="video-laptop">` | `src="Assets/Flujo_Dashboard_Final.mp4"` ✅ wired — autoplays muted/looped, shows the live CRM dashboard |
| CTA button | `a.cta-btn` | "Ir a la plataforma" → `href="https://crm-tribu.lovable.app"` ✅ wired (was `#`) |
| Helper tag | `.tag-mono` (small) | "Edita el enlace con la URL de tu plataforma" |

---

## Slide 10 — Validación (KPIs y ROI)
**Section:** `<section class="slide dark" data-screen-label="10 Validación">`
**Pitch moment:** Validación + KPIs y ROI
**Rubric focus:** Dominio del tema (defender los números), Calidad visual (funnel y métricas grandes)

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow` | "07 · Validación" |
| Top-right tag | `.topline .tag-mono` | "Campaña real · 8 días · Insight-r" |
| Metric 1 | `.metric .num` / `.label` (1st) | "100%" / "de los leads conservaron su **origen de campaña**." |
| Metric 2 | `.metric .num` / `.label` (2nd) | "18%" / "conversión inicial **a cita** sobre el total de leads." |
| Funnel label | `.card .tag-mono` | "Embudo de conversión" |
| Funnel row 1 | `.fbar` (Total Leads) | 22 — 100.0% width |
| Funnel row 2 | `.fbar` (Calificados) | 9 — 40.9% width |
| Funnel row 3 | `.fbar` (Contactados) | 9 — 40.9% width |
| Funnel row 4 | `.fbar` (Citas agendadas) | 4 — 18.2% width |
| Funnel row 5 | `.fbar` (Demos realizadas) | 1 — 4.5% width |
| Funnel row 6 | `.fbar` (Propuestas enviadas) | 1 — 4.5% width |
| Funnel row 7 | `.fbar` (Cerrados ganados) | 0 — 0.0% width (rendered as a small stub via `min-width`/`padding-left` overrides so the "0" stays legible) |
| Verdict 1 | `.verdict.persevere` + caption (1st of 4) | "Perseverar" — "Flujo conversacional de captura" |
| Verdict 2 | `.verdict.persevere` + caption (2nd) | "Perseverar" — "Trazabilidad campaña–lead–CRM" |
| Verdict 3 | `.verdict.persevere` + caption (3rd) | "Perseverar" — "Conversión a demo / propuesta" |
| Verdict 4 | `.verdict.persevere` + caption (4th) | "Perseverar" — "Dashboard comercial accionable" |

> Funnel updated to the CRM pipeline funnel (Total Leads → Cerrados ganados:
> 22 / 9 / 9 / 4 / 1 / 1 / 0). Each `.track` width is set to the exact
> percentage of Total Leads (e.g. 9/22 = 40.9%) so bar length matches real
> proportional hierarchy. Metric 2 ("conversión inicial a cita") was updated
> from 20% to 18% (4/22 ≈ 18.2%, rounded) to stay consistent with the new
> funnel's "Citas agendadas" stage.

---

## Slide 11 — Aprendizajes, próximos 90 días y Ask (Implementación)
**Section:** `<section class="slide light" data-screen-label="11 Próximos pasos">`
**Pitch moment:** Implementación + Próximos pasos / Ask
**Rubric focus:** Estructura y storytelling (cierre del arco con plan accionable), Dominio del tema (responder "y ahora qué")

| Field | HTML selector | Text |
|---|---|---|
| Eyebrow | `.eyebrow.anim-1` | "08 · Aprendizajes y próximos pasos" |
| "Lo que me llevo" label | `.tag-mono` (left col) | "Lo que me llevo" |
| Insight 01 | `.ins-item` (1st) — `.n` / `.x` | "01" / "Un **MVP rápido** con no-code validó la idea en días, no en meses." |
| Insight 02 | `.ins-item` (2nd) | "02" / "El BI solo genera valor cuando responde a un **problema de negocio** concreto." |
| Insight 03 | `.ins-item` (3rd) | "03" / "Definir el **flujo central campaña–CRM** primero acelera todo." |
| "Próximos 90 días" label | `.tag-mono` (right col) | "Los próximos 90 días" |
| Timeline col 1 | `.tl-col` (1st) — `.tl-h`/`.tl-big`/`<li>` | "1 — 30" / "Estabilizar" (barra 60%) / "Ajustar prompt y calificación", "Validar origen y dashboard" |
| Timeline col 2 | `.tl-col` (2nd) | "31 — 60" / "Adoptar" (barra 80%) / "Rutina de seguimiento diaria", "Métricas semanales" |
| Timeline col 3 | `.tl-col` (3rd) | "61 — 90" / "Escalar" (barra 100%) / "Nuevos canales y formularios", "Otros productos de Tribu" |
| Ask label | `.card .tag-mono` | "El ask" |
| Ask statement | `.card span` | "Continuar el piloto con Insight-r y un `<span class="accent">dueño que lo adopte</span>` en la operación diaria." |

---

## Slide 12 — Cierre
**Section:** `<section class="slide dark" data-screen-label="12 Cierre">`
**Pitch moment:** Cierre
**Rubric focus:** Estructura y storytelling (cierre del arco — vuelve a la frase del Hook)

| Field | HTML selector | Text |
|---|---|---|
| Closing headline | `h2.t-hero.anim-2` | "De un seguimiento disperso<br>a un flujo que `<span class="accent">nadie pierde de vista.</span>`" |
| "Gracias" | `.t-md` | "Gracias." |
| Presenter name | `div` (font-weight 600) | "Alejandro Molina Togno" |
| Subtitle | `.muted` | "LeadFlow Intelligence · CETYS Tijuana" |
| Footer label | `.footbar span` (right) | "Demo Day · 2026" |

---

## Coverage summary vs. pitch template

| Pitch moment | Slide(s) |
|---|---|
| Título | 01 |
| Usuario / Contexto | 02 |
| Problema | 03, 04 (evidencia) |
| Insight | 05 |
| Solución | 06 |
| Cómo funciona | 06 (diagrama), 07 (demo grabada celular), 08 (demo en vivo), 09 (respaldo dashboard) |
| Validación | 10 |
| KPIs y ROI (opcional) | 10 (incluido en la misma slide) |
| Implementación / Próximos pasos | 11 |
| Cierre | 11 (ask) + 12 (gracias) |

All 11 template moments are covered across the 12 slides — no missing
sections. The one open item is confirming `https://crm-tribu.lovable.app`
is reachable from the Demo Day venue's network before relying on the live
links on slides 8/9.

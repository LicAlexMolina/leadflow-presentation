# Design Tokens — LeadFlow Intelligence (Demo Day deck)

Reference only. **Do not use this file to edit `leadflow_final.html` directly** —
it documents the tokens that already exist in the working file so future edits
(slide content, new sections, exported assets, etc.) stay visually consistent.

Source: `leadflow_final.html`, `:root` block (lines ~35–51) and shared component
classes (lines ~58–293).

---

## 1. Color palette

### Brand / accent
| Token | Value | Use |
|---|---|---|
| `--accent` | `#5FDC76` | Primary brand green (LeadFlow / Insight-r) — accents, bullets, active states, CTA background |
| `--accent-deep` | `#16A34A` | Darker green used as `--accent-text` on **light** slides (readable on white) |
| `--accent-ink` | `#07320f` | Reserved dark-green ink tone |
| `--accent-soft` | `rgba(95,220,118,.14)` | Soft accent fill for highlight backgrounds (e.g. POV card, bgnum glow) |

### Channel / semantic colors
| Token | Value | Use |
|---|---|---|
| `--wa` | `#25D366` | WhatsApp green (channel icons/badges) |
| `--meta` | `#1877F2` | Meta Ads blue (channel icons/badges) |
| `--tg` | `#229ED9` | Telegram blue |
| `--ok` | `#19C37D` | Positive / "Perseverar" verdict |
| `--warn` | `#F5A623` | Warning state |
| `--bad` | `#FF5C5C` | Negative / alert state (e.g. "¿Quién le da seguimiento?") |

### Theme surfaces — `.slide.dark`
| Token | Value |
|---|---|
| `--surface` | `#070912` |
| `--surface-2` | `#0C0F1A` |
| `--ink` | `#F4F6FC` |
| `--muted` | `#9AA3B8` |
| `--faint` | `#646E86` |
| `--border` | `rgba(255,255,255,.10)` |
| `--panel` | `#10141F` |
| `--panel-2` | `#161B29` |
| `--accent-text` | `var(--accent)` → `#5FDC76` |

Background: layered radial gradients of `--accent-soft` over `#070912`.

### Theme surfaces — `.slide.light`
| Token | Value |
|---|---|
| `--surface` | `#F6F7FB` |
| `--surface-2` | `#EEF0F6` |
| `--ink` | `#0A0E1A` |
| `--muted` | `#5A6378` |
| `--faint` | `#8A91A3` |
| `--border` | `rgba(10,14,26,.10)` |
| `--panel` | `#FFFFFF` |
| `--panel-2` | `#F4F6FB` |
| `--accent-text` | `var(--accent-deep)` → `#16A34A` |

Background: radial gradient of accent tint (8% mix) over `#F6F7FB`.

> A `:root[data-force-dark]` variant exists ("Modo oscuro total") that forces
> `.slide.light` sections to render with the dark palette — a presenter toggle,
> not used by default.

### Product-mockup ("app chrome") palette — `.app`
Independent dark palette used inside CRM/dashboard mockup cards (slides 6/9):
| Token | Value |
|---|---|
| `--app-bg` | `#0B0E17` |
| `--app-panel` | `#12161F` |
| `--app-panel-2` | `#171C28` |
| `--app-border` | `rgba(255,255,255,.08)` |
| `--app-ink` | `#EAEDF5` |
| `--app-mut` | `#8A93A8` |

---

## 2. Typography

### Font families (CSS vars)
| Token | Stack | Embedded weights (base64 `@font-face`) |
|---|---|---|
| `--font-display` | `'Space Grotesk','General Sans',system-ui,sans-serif` | Space Grotesk 400/500/600/700 |
| `--font-body` | `'General Sans',system-ui,-apple-system,sans-serif` | General Sans 400/500/600/700 |
| `--font-mono` | `'Space Mono','SFMono-Regular',monospace` | Space Mono 400/700 |

All fonts are embedded as `data:font/woff2;base64,...` `@font-face` rules at the
top of the `<style>` block — the deck renders correctly fully offline (no
Google Fonts / Fontshare CDN dependency).

> Note: the brief originally specified Syne / DM Sans / DM Mono / `#0A0A0A` /
> `#5EE87A`. The deck already had a complete, polished, offline-safe type +
> color system (Space Grotesk / General Sans / Space Mono, `#070912` /
> `#5FDC76`) applied consistently across all 12 slides and mockups. Two days
> before Demo Day, re-skinning every slide risked breaking layouts with no time
> to re-test. **We kept the existing system** (documented here) rather than
> rebrand. If a rebrand is wanted after Demo Day, swap the `--accent`,
> `--surface`/`--ink` values and the three `--font-*` stacks + their
> `@font-face` blocks — the rest of the CSS reads from these tokens.

### Type scale
| Class | Font | Size | Weight | Line-height | Letter-spacing | Typical use |
|---|---|---|---|---|---|---|
| `.cover .hook .display` | display | `150px` | 600 | `.94` | `-.035em` | Cover slide hero headline |
| `.t-hero` | display | `128px` | 600 | `.96` | `-.03em` | Big statement headlines (Insight, Demo en vivo, Cierre) |
| `.t-xl` | display | `92px` | 600 | `1.0` | `-.025em` | Slide-7 demo headline |
| `.t-lg` | (body) | `64px` | 600 | `1.04` | `-.02em` | Section headlines (Contexto, Problema) |
| `.t-md` | display | `44px` | 600 | `1.08` | `-.015em` | Sub-headlines / wordmark size |
| `.lead` | body | `30px` | 400 | `1.45` | — | Lead paragraphs, `max-width:24ch` |
| `.lead.wide` | body | `30px` | 400 | `1.45` | — | Lead paragraphs, `max-width:34ch` |
| `.eyebrow` | mono | `19px` | 700 | — | `.22em`, uppercase | Section kicker labels (with leading dash) |
| `.tag-mono` | mono | `14px` | 400 | — | `.08em`, uppercase | Small mono tags/captions |
| `.metric .num` | display | `128px` | 600 | `.9` | `-.03em` | Big KPI numbers (slide 10) |
| `.quote .q` | (body) | `50px` | 500 | `1.28` | `-.01em` | Pull-quote text, `max-width:24ch` |
| `.flow-card .fh` | (body) | `24px` | 600 | — | — | "Cómo funciona" step title |
| `.flow-card .fp` | (body) | `16.5px` | 400 | `1.4` | — | "Cómo funciona" step description |
| `.ins-item .x` | (body) | `27px` | 400 | `1.4` | — | "Lo que me llevo" insight items |
| `.tl-col .tl-big` | display | `54px` | 600 | — | — | 30/60/90 timeline column titles |
| `.footbar` | mono | `17px` | 400 | — | `.08em`, uppercase | Footer brand bar / slide counter |

Body default: `font-family:var(--font-body)`, antialiased, `text-rendering:optimizeLegibility`.
Headings (`h1,h2,h3`): `font-weight:600; letter-spacing:-.02em; line-height:1.02` by default.

---

## 3. Layout / spacing / deck geometry

- **Canvas size**: fixed `--W: 1920px` × `--H: 1080px` per slide (`<deck-stage width="1920" height="1080">`), scaled to fit the viewport — each slide is always full-bleed 16:9, no internal scrolling.
- **Slide padding**: `.pad{ position:absolute; inset:0; padding:84px 116px; display:flex; flex-direction:column; }`
- **Centered layout variant**: `.pad.center{ justify-content:center; }`
- **Two-column split**: `.split{ display:grid; grid-template-columns:1fr 1fr; gap:80px; }`; `.split.narrow{ grid-template-columns:1.05fr .95fr; }`
- **Footer bar**: `position:absolute; left:116px; right:116px; bottom:44px;` — brand wordmark + dot on the left, `NN / 12 · Section` label on the right.
- **Background numeral** (`.bgnum`): `font-size:380px; opacity:.07; color:var(--accent);` decorative giant digit, top-right.
- No responsive `@media` breakpoints beyond `prefers-reduced-motion` — the deck targets a single fixed presentation resolution (projector/laptop), scaled by `<deck-stage>`.

---

## 4. Key components

| Component | Class | Notes |
|---|---|---|
| **Card** | `.card` | `background:var(--panel); border:1px solid var(--border); border-radius:20px; padding:34px;` |
| **Soft card** | `.card.soft` | Same as `.card` but `background:var(--panel-2)` (subtler) |
| **Chip / pill** | `.chip` | `border-radius:999px; border:1px solid var(--border); background:var(--panel); font-size:18px;` + small accent dot `.chip .ic` |
| **Mono tag** | `.tag-mono` | Small uppercase mono label, `color:var(--faint)` |
| **Eyebrow label** | `.eyebrow` | Mono, uppercase, `letter-spacing:.22em`, with a 34px accent dash before it (`::before`) |
| **CTA button** | `.cta-btn` | `display:inline-flex; padding:21px 40px; border-radius:15px; background:var(--accent); color:#07140c; font-size:26px; font-weight:600;` + accent-tinted glow shadow |
| **Verdict badge** | `.verdict.persevere` | Pill badge, `background:rgba(25,195,125,.14); color:var(--ok)`, used for "Perseverar" calls in Validación slide |
| **Metric** | `.metric .num` / `.metric .label` | Big KPI number (128px display) + `max-width:18ch` muted label |
| **Funnel bar** | `.fbar` / `.track` | Horizontal bar chart row; `.track` width set inline as `%`, gradient fill `linear-gradient(90deg,var(--accent), …)` |
| **Flow step card** | `.flow-card` | "Cómo funciona" step: `.fno` (mono step number), `.fh` (title), `.fp` (description) |
| **Timeline column** | `.tl-col` | 30/60/90 roadmap column: `.tl-h` (mono range), `.tl-big` (phase name), `.tl-bar` (accent progress bar), `<ul>` of bullet items |
| **Insight list item** | `.ins-item` | Numbered insight row: `.n` (mono number) + `.x` (text) |
| **Dispersion node** | `.node` | Floating pill on Problema slide's scatter diagram |
| **Quote block** | `.quote` | `.mark` (giant accent quote glyph), `.q` (50px quote text), `.cite` (mono attribution) |
| **Phone mockup** | `.phone` | Vertical device frame wrapping a `<video-slot>` (slide 7) |
| **Laptop mockup** | `.laptop` | Horizontal device frame (`.lid > .lscreen` + `.base`) wrapping a `<video-slot>` (slide 9) |
| **App chrome card** | `.app` | Dark "SaaS UI" mockup container (CRM/dashboard recreations), with `.topbar`, `.kpis`, `.kpi`, `.kcard`, etc. using the separate `--app-*` palette |
| **Live badge** | `.live-badge` | Mono uppercase with pulsing dot, used on "Demo en vivo" slide |
| **Demo target chip** | `.demo-targets .dt` | Pill listing what will be shown live (CRM, Dashboard, Telegram, Lead view) |

---

## 5. Theming mechanism

- Each `<section class="slide dark">` or `<section class="slide light">` re-declares the surface/ink/border/panel/accent-text variables — all shared component classes (`.card`, `.chip`, `.eyebrow`, etc.) read from these variables, so the **same component automatically adapts** to dark or light slides.
- `--accent` (`#5FDC76`) stays constant across themes; only `--accent-text` switches between `--accent` (dark slides) and `--accent-deep` (light slides) for contrast.
- Entrance animations (`.anim`, `.grow`, `.draw`) are additive fade/slide-ins gated by `[data-deck-active]` and `prefers-reduced-motion` — base (no-JS / reduced-motion) state is already the fully visible end state, so nothing is hidden if animations don't run.

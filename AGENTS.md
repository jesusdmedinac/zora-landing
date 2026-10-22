# Guidelines for AI Agents: Zora Landing Page (`zora-landing`)

This document defines core guidelines, engineering standards, and workflows for AI agents working within `zora-landing`.

## 1. Project Mission & Identity
`zora-landing` is the official, high-converting commercial and product landing page for **Zora** (`zora.jesusdmedinac.com`).
Zora is an AI-powered automotive marketplace and copilot connecting vehicle drivers with certified salvage yards (yonkes) across the US-Mexico border corridor (Tijuana - San Diego).

- **Target Audience:** Drivers with mechanical breakdowns looking for guaranteed-fit used auto parts, and licensed auto recyclers / yonkes seeking to monetize inventory via real-time reverse bidding.
- **Bilingual Nature:** Bilingual English / Spanish (ES/EN) to serve the binational automotive market and international audiences.
- **Tone & Style:** Pure engineering craft & human authority. Zero AI marketing fluff, zero text gradients on headings, high contrast dark titanium and laser-white text, grounded in real automotive pain points and verified software architecture.

## 2. Style Strategy & Human Craft (Anti-AI Slop Guidelines)
Adheres strictly to the design principles derived from `sf-active-serendipity`:
1. **Headlines:** Laser-white (`#f3f5f8` / `#ffffff`) in bold geometric sans (`Inter`, `Geist`, `-apple-system`) with tight tracking (`-0.04em`). No multicolored gradient text on headlines.
2. **Material Chassis:** Dark titanium and void metals (`#090a0d`, `#0f1115`, `#16181d`, `#1d2127`) with 1px precision chamfers (`rgba(255, 255, 255, 0.08)` border, `rgba(255, 255, 255, 0.16)` top highlight).
3. **Zora Core Spectrum:** `#8A4DFF` -> `#A732FD` -> `#CD00EC` -> `#E200C1` -> `#ED158A` applied exclusively to hardware accents, buttons, glowing diodes, and interactive states.
4. **No Empty Fluff:** Concrete metrics, clear workflows, real automotive parts, and actual UI mockups.

## 3. Methodology: 5-Step AI Planning Process & BDD
- Specifications reside in `docs/features/*.feature`.
- Living checklist maintained in `PROGRESS.md`.
- Develop incrementally scenario-by-scenario, validating builds with `npm run build`.

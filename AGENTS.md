# AGENTS.md

## Project type
Static HTML/CSS/JS course practice (no package.json/build/test tooling). Files are in repo root with shared assets (`css/`, `img/`, `cdn/`, `font/`, `font xianyu/`).

## Conventions (must follow)
- **Naming**: For new CSS classes/ids/JS variables, use prefix `jx530_` (do **not** use `530jx_` - numeric prefix is invalid in CSS/JS; confirmed in jx530_prompt.md 2026-10-22 14:01:49).
- **New pages**: Any newly created HTML file must include a link back to `index.html`.
- **Comments**: Include student info comment as used in existing files (学号/姓名) where appropriate; follow existing style.
- **Existing pages**: Pages created before the naming rule (e.g. `xianyu/`, `xianyu2/`, `xianyu3/`) keep their original `jx-` prefixes - do not retroactively rename.
- **Prompt log**: All prompts must be appended to `jx530_prompt.md` (renamed from `530jx_prompt.md`) with timestamp, model, prompt, and execution details. Never overwrite history.

## Assets
- Local CDN assets in `cdn/` (e.g. Font Awesome, Lucide) - prefer local files over external CDNs.
- Icon fonts/SVG symbols in `font/` and `font xianyu/` (iconfont packages). Two approaches appear: font icon (`@font-face` + classes/content) and SVG Symbol (`<use>`).
- Shared styles: `html_basic.css`, `layout004.css`, `stack004.css`, `css3004.css`, `svg004.css`, `picture_above_text.css`, `tongcheng.css`, `xianyu*.css`, `xiaoxi.css`, `zuoye.css`.

## Entry points / structure
- Homepage: `index.html` (catalog of all works). Update its catalog/links when adding significant pages.
- Icon exercises: `iconfont-1.html`/`iconfont-2.html` (font vs SVG), `iconfont-3.html`/`iconfont-4.html` (bottom nav with badges).
- Xianyu project (per guidance): `xianyu.html` (publish popup), `xianyu2.html`/`xianyu3.html` (font-icon tabbars), `tongcheng.html` (同城), `xiaoxi.html` (消息, SVG symbol tabbar). Assets from `font xianyu/`.
- Design guidance for icon pages: follow `skills/frontend-design/SKILL.md` when optimizing their design.

## Gotchas
- When adding bottom navs, follow exact requirements from prompts (fixed bottom, flex-equal, active state styling, center "sell" button styling, badges/dots as specified).
- Don't add "technical note" blocks unless requested (e.g. removed from `xiaoxi.html` per 2026-10-25 feedback).
- `jx530_prompt.md` is the canonical history - append only.
- If skills referenced are project-local (`skills/`), read them directly (they may not be in platform skills list).

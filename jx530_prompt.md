# 530jx 提示词记录

> 本文件按时间顺序追加记录每一次提示词，不覆盖历史内容。

## 2026-10-22 13:54:53

- **模型**：DeepSeek-V4.1-Flash
- **提示词**：

```text
设定规则：从现在开始，所有CSS类名，id名、js变量都以530jx_开始，所有的提示词都在执行之前写入文件530jx_prompt.md，以附加的方式写入，不覆盖之前的内容，写入的内容包括时间、使用的模型、提示词内容。
```

- **执行内容**：创建本记录文件；从本次起新增的 CSS 类名、id 名、JS 变量统一使用 `530jx_` 前缀。
- **适用范围确认**：仅对新代码生效；已完成的 xianyu / xianyu2 / xianyu3 页面保留原有 `jx-` 前缀，不做回溯重命名。

---

## 2026-10-22 13:57:53

- **模型**：GLM-5.3-Flash
- **提示词**：

```text
设置规则：新建的html文件加入超链接到首页index.html
```

- **执行内容**：确认 530jx 目录下已存在 index.html；从本次起新建的 HTML 文件须包含指向首页 index.html 的超链接（超链接相关类名/id 遵从 `530jx_` 前缀规则）。

---

## 2026-10-22 14:01:49

- **模型**：GLM-5.3-Flash
- **提示词**：

```text
做两个html网页iconfont-1.html,inconfont-2.html，分别显示font awesome图标和lucide图标，前者使用字体图标的方式，后者使用svg的方式，相关的cdn文件下载到本目录下的cdn目录。
```

- **执行内容**：
  1. 用户输入的 `inconfont-2.html` 判断为 `iconfont-2.html` 的笔误，按 `iconfont-2.html` 创建（如有需要可随时改名）。
  2. 下载 Font Awesome 6（CSS + webfonts 字体文件）与 Lucide（UMD JS）到 `cdn/` 目录，页面引用本地文件，不依赖外网。
  3. iconfont-1.html 用字体图标方式（`<i class="fa-solid ...">`）；iconfont-2.html 用 SVG 方式（`data-lucide` + `lucide.createIcons()` 生成内联 SVG）。
  4. 遵守既有规则：学号姓名注释、`530jx_` 前缀命名、返回首页超链接。
  5. **命名规则冲突确认**：`530jx_` 以数字开头，CSS 选择器与 JS 变量名语法不允许，经用户确认改为 **`jx530_` 前缀（字母在前）**，自此 CSS 类名、id、JS 变量统一使用 `jx530_` 前缀（用户输入中的 `530jx_` 一律按 `jx530_` 理解执行）。

---

## 2026-10-22 14:12:34

- **模型**：GLM-5.3-Flash
- **提示词**：

```text
把530jx_prompt.md改成jx530_prompt.md
```

- **执行内容**：将本记录文件重命名为 `jx530_prompt.md`，与 `jx530_` 命名规则保持一致；此后提示词一律追加写入 `jx530_prompt.md`。

---

## 2026-10-22 14:26:59

- **模型**：GLM-5.3-Flash
- **提示词**：

```text
请根据skills下面的frontend-design里面的skill去优化iconfont-1.html和iconfont-2.html两个页面的设计等个，使其更有艺术美感，更优雅。
```

- **执行内容**：读取用户本地的 `skills/frontend-design/SKILL.md` 作为设计指导（该 skill 不在平台技能列表中，为项目内文件），按其流程（主题取材 → Token 系统 → 默认味自查 → 构建 → 截图自评）重构两个 iconfont 页面的视觉设计；保留全部既有功能、图标清单、学号姓名注释、`jx530_` 命名、返回首页链接。

---

## 2026-10-22 14:43:16

- **模型**：GLM-5.3-Flash
- **提示词**：

```text
根据font目录中的iconfont图标完成移动端的固定的自适应宽度的下导航，导航项目包括4个，完成html网页的设计，网页名称iconfont-3.html和iconfont-4.html分别使用字体图标和svg，包括右上角的数字徽章和红点。
```

- **执行内容**：
  1. 素材为 `font/` 目录的 iconfont.cn 下载包（iconfont.css/ttf/woff/woff2 为字体方式，iconfont.js 为 SVG Symbol 方式）。
  2. 选 4 个语义合适的图标做底部导航：逛逛（Bigpromotion）、喜欢（xihuan）、消息（xiaoxi-zhihui，带数字徽章）、我的（buyers-club-fill，带红点）。
  3. iconfont-3.html 用字体图标方式（@font-face + content 编码）；iconfont-4.html 用 SVG Symbol 方式（`<use>` 引用）。
  4. 导航要求：`position: fixed` 固定底部、flex 均分自适应宽度、含数字徽章与红点两种角标。
  5. 视觉延续系列：页3 接续页1 的纸墨+朱红语言，页4 接续页2 的图纸+制图蓝语言；学号姓名注释、`jx530_` 命名、返回首页链接照旧。

---

## 2026-10-22 14:52:20

- **模型**：GLM-5.3-Flash
- **提示词**：

```text
创建skill:提交项目：使用git commit并push到gitee仓库，
gitee私人令牌 [已脱敏，12位以db84开头，完整令牌保存在 SKILL.md] ;
仓库地址: https://gitee.com/jin-jinjinjin/gaojiwangye.git
```

- **执行内容**：
  1. 用 skill-creator 创建项目级 skill：`d:\qianduan\.trae\skills\gitee-submit\SKILL.md`（位于 git 仓库之外，令牌不会进入仓库）。
  2. skill 功能：将 530jx 项目 git commit 并 push 到 gitee 仓库 gaojiwangye；推送使用一次性带令牌 URL，不把令牌写入 .git/config。
  3. 创建后按该 skill 执行一次首次提交推送作为验证。

---

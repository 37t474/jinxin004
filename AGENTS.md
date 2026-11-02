# AGENTS.md

## 项目类型
静态 HTML/CSS/JS 课程练习项目（无 package.json、无构建/测试工具）。文件位于仓库根目录，共享资源目录：`css/`、`img/`、`cdn/`、`font/`、`font xianyu/`。

## 语言约定（2026-11-02 新增，长期有效）
- 本文件及项目内所有说明文档、检查清单统一使用简体中文。
- 文件路径、HTML/CSS/JS 标识符（类名、id、变量名、函数名）、代码块保留英文原样，不做翻译。
- 生成交付文档（报告、说明、清单）时同样遵守本约定。

## 约定（必须遵守）
- **命名**：新建 CSS 类名、id、JS 变量统一使用 `jx530_` 前缀（**不要**用 `530jx_`——数字开头在 CSS/JS 中非法；已确认，见 jx530_prompt.md 2026-10-22 14:01:49）。
- **新页面**：任何新建 HTML 文件必须包含返回 `index.html` 的超链接。
- **注释（新建 HTML 文件，2026-11-02 更新）**：每个新建 HTML 文件必须包含"金鑫、建立时间、使用模型、功能名称及简介"的注释：
  - 文件头注释模板（置于 `<head>` 顶部或 `<html>` 之上）：
    ```html
    <!--
      功能名称：<页面/功能名称>
      功能简介：<一句话说明页面做什么>
      作者：金鑫
      建立时间：<YYYY-MM-DD>
      使用模型：<当前对话模型名>
    -->
    ```
  - **JS 注释（重点）**：任何 JavaScript（内联 `<script>` 或外链 `.js`）必须：
    - 脚本级头部注释，含同样的作者信息（金鑫 / 建立时间 / 使用模型）；
    - **每个函数**上方标注"功能名称及简介"，示例：
      ```js
      // 功能名称：jx530_submitForm —— 校验表单必填项，通过后本地暂存并提示成功
      function jx530_submitForm() { ... }
      ```
- **存量页面**：命名规则确立前创建的页面（如 `xianyu.html`、`xianyu2.html`、`xianyu3.html`）保留原 `jx-` 前缀，不回溯改名。
- **提示词留痕**：所有提示词一律追加写入 `jx530_prompt.md`（由 `530jx_prompt.md` 更名而来），记录时间、模型、提示词原文和执行内容；只追加，绝不覆盖历史。

## 资源
- 本地 CDN 资源在 `cdn/`（如 Font Awesome、Lucide）——优先使用本地文件而非外部 CDN。
- 图标字体/SVG Symbol 在 `font/` 和 `font xianyu/`（iconfont 包）。两种用法：字体图标（`@font-face` + 类名/content 编码）和 SVG Symbol（`<use>` 引用）。
- 共享样式：`html_basic.css`、`layout004.css`、`stack004.css`、`css3004.css`、`svg004.css`、`picture_above_text.css`、`tongcheng.css`、`xianyu*.css`、`xiaoxi.css`、`zuoye.css`。

## 入口与结构
- 首页：`index.html`（全部作品目录）。新增重要页面时同步更新其目录链接。
- 图标练习：`iconfont-1.html`/`iconfont-2.html`（字体图标 vs SVG），`iconfont-3.html`/`iconfont-4.html`（带徽章红点的底部导航）。
- 闲鱼项目：`xianyu.html`（发布闲置弹层）、`xianyu2.html`/`xianyu3.html`（字体图标底部导航）、`tongcheng.html`（同城）、`xiaoxi.html`（消息，SVG Symbol 底部导航）。图标素材来自 `font xianyu/`。
- 图标页面设计优化：参考 `skills/frontend-design/SKILL.md`。

## 注意事项（坑）
- 添加底部导航时严格按提示词要求实现（fixed 固定、flex 均分、选中态样式、中间"卖闲置"按钮样式、徽章/红点规格）。
- 未经要求不要添加"技术说明"块（2026-10-25 已按反馈从 `xiaoxi.html` 移除）。
- `jx530_prompt.md` 是唯一权威历史记录——只追加。
- 引用的项目内 skill（`skills/`、`.trae/skills/`）直接读文件（可能不在平台技能列表里）。

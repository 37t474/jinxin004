# Swiper 课堂任务 · AI 协作记录（任务一 / 任务二）

> 作者：金鑫　学号：24001010530
> 使用模型：GLM-5.3-Flash　整理时间：2026-11-05
> 页面：`swiper-task.html`（大国重器光影展 · 学生版）

---

## 任务一 · 提示词工程师：让 AI 听懂需求 ⭐⭐

**需求原文**：生成 `new Swiper('#wySw4', {...})` 配置——① 无缝循环 ② 3.2 秒自动翻页且手动操作后不停止 ③ 圆点分页器可点击 ④ 初始效果为 cube。

### 第 1 轮提示词（初版，故意按最直觉的方式问）

```text
帮我写一个 Swiper 轮播配置：无缝循环，3.2 秒自动翻页，底部圆点分页器可以点击跳转。
```

### 第 1 轮 AI 回答（GLM-5.3-Flash）

```js
new Swiper('#wySw4', {
  loop: true,
  autoplay: { delay: 3200 },
  pagination: { el: '#wyPag4', clickable: true },
});
```

### 第 1 轮验证结论（一句话）

把代码粘进页面后能循环、能自动翻、圆点能点——**但用手拖动之后自动播放就停了**，
而且效果还是默认 slide，不是题目要的 cube：**第 1 轮漏掉了「手动操作后不停止」和「初始效果 cube」两个需求**。

### 第 2 轮提示词（补全后，把模糊说法改成 Swiper 的参数语言）

```text
上一版有两个问题：1) 拖动后自动播放要继续，请加上 disableOnInteraction: false；
2) 初始切换效果要求是 3D 立方体，把 effect 设为 cube。重新给完整配置，
动画时长 800 毫秒。
```

### 第 2 轮 AI 回答（最终采纳版）

```js
new Swiper('#wySw4', {
  loop: true,                                  // ① 无缝循环
  effect: 'cube',                              // ④ 初始效果为 cube
  speed: 800,
  autoplay: { delay: 3200, disableOnInteraction: false },  // ② 3.2s 且拖动后不停止
  pagination: { el: '#wyPag4', clickable: true },          // ③ 圆点可点击
});
```

### 第 2 轮验证结论（一句话）

粘进页面刷新后四项全部通过：最后一张继续翻回到第一张、什么都不做每 3.2 秒自动翻、
拖一下松手后继续自动翻、初始即为 3D 立方体效果，控制台无报错。

### 答辩抽问自答

- **第一版提示词漏掉了哪个需求？**「手动操作后不停止」和「初始效果为 cube」——因为
  我只说了"自动翻页"，没说拖动之后的行为；只顾写配置忘了第 4 条效果要求。
- **第二轮怎么"说清楚"的？** 不再笼统描述，而是用 Swiper 的参数名精确表达：
  `disableOnInteraction: false`、`effect: 'cube'`，并指出上一版错在哪，让 AI 定向修改。
- **AI 第一次的代码错在哪？** 不算"错"，是"不全"：`autoplay: { delay: 3200 }` 缺
  `disableOnInteraction: false`（默认 true，拖一次就停），且没有 effect 配置。

---

## 任务二 · creative 仿写：课堂没讲，AI 教你 ⭐⭐⭐

参考：官方示例 `swiper/demo/257-effect-creative.html` + AI 解释 `creativeEffect`。

### 实现方式

在演示四的按钮组新增第 7 个按钮 `data-fx="creative"`（「creative 电影墙」），
`#wySw4` 重建时当 `fx === 'creative'` 时附加以下配置：

```js
creativeEffect: {
  prev: { shadow: true, translate: ["-40%", "-20%", -250], rotate: [0, 0, -10], scale: 0.7, opacity: 0 },
  next: { shadow: true, translate: ["110%", "20%", 0],    rotate: [0, 0, 6],  scale: 1.2, opacity: 0 },
}
```

### 追问回答（用自己的话）：prev / next 的 transform 各控制什么？

- **prev 控制的是"当前这张被翻走之后去哪"**：本效果里它往左上退到 "-40%, -20%"、
  Z 轴后退 250px、带 -10° 倾斜、缩到 0.7 倍再淡出——像把一张旧海报**贴回墙上去**。
- **next 控制的是"下一张从哪来"**：从画面右侧 110% 处、放大到 1.2 倍带着 6° 角
  **像一张新海报递到眼前**，落位时恢复正常大小。
- **transform 百分号是相对谁的？** 相对 **slide 自身的宽高**（不是容器）：
  X 轴的 100% = 一张卡片的宽度，所以 "110%" 刚好是从右边一张卡片外进场。

### 答辩抽问自答：改一个数值让卡片转 20 度

把 `prev.rotate` 的 Z 轴分量从 `-10` 改成 `-20`（或 next 的 `6` 改成 `20`）即可，
单位是度，正负控制倾斜方向。

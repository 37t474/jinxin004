# Swiper 三关任务 · AI 提示词记录

> 作者：金鑫　学号：24001010530　使用模型：GLM-5.3-Flash
> 说明：本文件为纯提示词留痕（配合 index.html「Swiper 轮播任务」条目的「AI 提示词」入口访问），
> 完整执行留痕见 jx530_prompt.md，任务一可运行演示见 swiper-task1.html。

---

## 任务一 · 提示词工程师（⭐⭐）

需求：生成 `new Swiper('#wySw4', {...})` 配置——① 无缝循环 ② 3.2s 自动翻页且手动操作后不停止 ③ 圆点分页器可点击 ④ 初始效果为 cube。

### 第 1 轮提示词

```text
帮我写一个 Swiper 轮播配置：无缝循环，3.2 秒自动翻页，底部圆点分页器可以点击跳转。
```

AI 回答：

```js
new Swiper('#wySw4', {
  loop: true,
  autoplay: { delay: 3200 },
  pagination: { el: '#wyPag4', clickable: true },
});
```

验证结论：拖动后自动播放停止、效果仍是 slide——**漏了「手动操作后不停止」和「初始 cube」**。

### 第 2 轮提示词（最终采纳）

```text
上一版有两个问题：1) 拖动后自动播放要继续，请加上 disableOnInteraction: false；
2) 初始切换效果要求是 3D 立方体，把 effect 设为 cube。重新给完整配置，动画时长 800 毫秒。
```

AI 回答：

```js
new Swiper('#wySw4', {
  loop: true,                                  // ① 无缝循环
  effect: 'cube',                              // ④ 初始效果为 cube
  speed: 800,
  autoplay: { delay: 3200, disableOnInteraction: false },  // ② 拖动后不停止
  pagination: { el: '#wyPag4', clickable: true },          // ③ 圆点可点击
});
```

验证结论：四项全部通过（swiper-task1.html 底部有真实运行演示），控制台无报错。

答辩自答：第一版漏了「拖动不停止」和「cube」；第二轮用参数名精确表达并指出上版错处让 AI 定向修改；AI 第一次的代码是"不全"——autoplay 缺 disableOnInteraction: false（默认 true 拖一次就停），且没写 effect。

---

## 任务二 · creative 仿写（⭐⭐⭐）

需求：为演示四新增第 7 个按钮「creative 电影墙」，上一张缩小左移带角度、下一张放大右移进场。

### 提示词

```text
Swiper 的 creativeEffect 里 prev 和 next 分别怎么写？我要"旧片缩小左移带角度、
新片放大右移进场"，translate 用像素还是百分比？
```

AI 回答（要点 + 最终采纳）：prev/next 各支持 translate / rotate / scale / opacity / shadow；translate 建议用百分比字符串（相对 slide 自身宽高，不同屏宽观感一致）。

```js
creativeEffect: {
  prev: { shadow: true, translate: ["-40%", "-20%", -250],
          rotate: [0, 0, -10], scale: 0.7, opacity: 0 },
  next: { shadow: true, translate: ["110%", "20%", 0],
          rotate: [0, 0, 6], scale: 1.2, opacity: 0 },
}
```

验证结论：点击按钮高亮切换、效果重建成功，slides 呈现 rotate/scale 3D 变换，无报错。

答辩自答：prev 控制当前张翻走后去哪（左上退、后退、带角度缩小淡出，像旧海报贴回墙上）；next 控制下一张从哪来（右侧 110% 放大带角进场）；transform 百分号相对 slide 自身宽高（X 轴 100% = 一张卡片宽）。改 20 度：把 rotate 的 Z 轴分量 -10 改成 -20。

---

## 任务三 · 综合创作（⭐⭐⭐）

需求：① AI 生成爱达·魔都号 16:9 图，四个轮播各加第 6 张 slide；② 挑课堂未讲的 Swiper 能力（选 keyboard）。

### 提示词

```text
想给 #wySw4 加键盘方向键控制，但页面很长，希望只有轮播在可视区时按键才生效，怎么配？
```

AI 第一次回答：`keyboard: true`

追问 + AI 修正：测试发现页面在别处按方向键也会切轮播，改为：

```js
keyboard: { enabled: true, onlyInViewport: true }
```

验证结论：滚到第 4 个轮播按 ArrowRight 翻页生效；不在视口时不误触发；爱达·魔都号第 6 张四轮播正常显示，图片 200，无报错。

答辩四问：
1. **这段代码什么意思？** keyboard 模块监听方向键；enabled 开启；onlyInViewport 限定轮播在可视区内才响应。
2. **AI 第一次给的哪里不对、你改了什么？** keyboard: true 是全局生效，改成对象写法补 onlyInViewport: true。
3. **新参数的作用？** 让键盘监听"看位置"：轮播滚出视口就忽略按键。
4. **现场把 delay 改成指定值？** delay 3200 → 1600：翻页间隔减半，speed 800 不变，观感更急促；配置抽成共用函数 jx530_sw4Config(fx)，改一处初始与所有效果重建都生效。

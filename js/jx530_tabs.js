/*
  功能名称：jx530_tabs —— 可复用选项卡组件
  功能简介：把任意页面中"一组按钮 + 一组面板"变成点击切换的选项卡；
            通过选择器参数化，可在多个页面、多组选项卡上重复使用
  作者：金鑫
  建立时间：2026-11-02
  使用模型：GLM-5.3-Flash
*/

// 功能名称：jx530_initTabs —— 初始化一组选项卡（可复用入口）
// 简介：按选择器找到选项卡按钮和内容面板，为每个按钮绑定点击事件监听；
//       切换逻辑为：先清除所有选项卡与面板的选中状态，再设置当前元素选中
// 参数：
//   tabSel      选项卡按钮选择器，如 ".jx530_tab-btn"
//   panelSel    内容面板选择器，如 ".jx530_tab-panel"
//   activeClass 选中状态类名，如 "jx530_active"
//   showClass   面板显示类名，如 "jx530_show"
// 对应关系：按钮与面板按页面中出现顺序一一对应
function jx530_initTabs(tabSel, panelSel, activeClass, showClass) {
  var tabs = document.querySelectorAll(tabSel);
  var panels = document.querySelectorAll(panelSel);

  // 容错：按钮与面板数量必须相等，否则给出警告并中止
  if (tabs.length === 0 || tabs.length !== panels.length) {
    console.warn("jx530_initTabs：选项卡按钮与面板数量不匹配", tabSel, panelSel);
    return;
  }

  // 功能名称：jx530_clearActive —— 清除所有选项卡和面板的选中状态
  // 简介：遍历移除所有按钮上的选中类和所有面板上的显示类，
  //       保证每次切换前状态归零（事件处理函数的第一步）
  function jx530_clearActive() {
    tabs.forEach(function (t) {
      t.classList.remove(activeClass);
    });
    panels.forEach(function (p) {
      p.classList.remove(showClass);
    });
  }

  // 功能名称：jx530_bindTabClick —— 为每个选项卡按钮绑定点击事件监听
  // 简介：点击时先调用 jx530_clearActive 清除全部选中，
  //       再给当前按钮加选中类、给对应面板加显示类（闭包中的 index 定位面板）
  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      jx530_clearActive();                 // 第一步：清除所有选项卡的选中状态
      tab.classList.add(activeClass);      // 第二步：设置当前元素选中
      panels[index].classList.add(showClass);
    });
  });
}

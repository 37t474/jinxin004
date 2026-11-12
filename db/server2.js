// ============================================================
// 功能名称：jx530 诗词数据服务器 2（db/server2.js）
// 功能简介：端口 3005。
//   1) 数据接口 GET /poems —— 读取本目录 db.json，返回 poems 数组
//   2) 静态文件服务 —— 托管上级目录（530jx 根），浏览器访问
//      http://localhost:3005/poems2.html 即可打开"上图下文"页面
// 作者：金鑫　学号：24001010530
// 建立时间：2026-11-12　使用模型：GLM-5.3-Flash
// 启动方式：在 db 目录下执行  node server2.js
// ============================================================
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3005;
const ROOT = path.join(__dirname, "..");        // 530jx 根目录（静态文件从这里取）
const DB_FILE = path.join(__dirname, "db.json"); // 数据文件

// 常见后缀 → MIME 类型
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
};

// 功能名称：jx530_send —— 统一响应工具：写状态码、类型和 CORS 头，返回内容
// 简介：加 Access-Control-Allow-Origin: * 后，页面即使以 file:// 方式打开也能跨域取数
function jx530_send(res, code, type, data) {
  res.writeHead(code, {
    "Content-Type": type,
    "Access-Control-Allow-Origin": "*",
  });
  res.end(data);
}

// 功能名称：jx530_getPoems —— 数据接口：读取 db.json 并返回 poems 数组
// 简介：/poems 或 /api/poems 都能访问；读文件失败或 JSON 解析失败返回 500 错误信息
function jx530_getPoems(res) {
  fs.readFile(DB_FILE, "utf-8", (err, text) => {
    if (err) {
      return jx530_send(res, 500, "application/json; charset=utf-8",
        JSON.stringify({ error: "读取 db.json 失败" }));
    }
    try {
      const poems = JSON.parse(text).poems || [];
      jx530_send(res, 200, "application/json; charset=utf-8", JSON.stringify(poems));
    } catch (e) {
      jx530_send(res, 500, "application/json; charset=utf-8",
        JSON.stringify({ error: "db.json 解析失败" }));
    }
  });
}

// 功能名称：jx530_static —— 静态文件服务：把 URL 映射到 530jx 根目录下的真实文件
// 简介：/ → index.html；带防目录穿越检查（拼出的路径必须还在 ROOT 之内）
function jx530_static(req, res) {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const file = urlPath === "/" ? "index.html" : urlPath.replace(/^\//, "");
  const full = path.join(ROOT, file);
  if (!full.startsWith(ROOT)) {
    return jx530_send(res, 403, "text/plain; charset=utf-8", "403 禁止访问");
  }
  fs.readFile(full, (err, buf) => {
    if (err) {
      return jx530_send(res, 404, "text/plain; charset=utf-8", "404 Not Found: " + file);
    }
    const ext = path.extname(full).toLowerCase();
    jx530_send(res, 200, MIME[ext] || "application/octet-stream", buf);
  });
}

// 路由：数据接口走 /poems，其余一律当静态文件处理
const server = http.createServer((req, res) => {
  if (req.url === "/poems" || req.url === "/api/poems") {
    return jx530_getPoems(res);
  }
  jx530_static(req, res);
});

server.listen(PORT, () => {
  console.log(`jx530 诗词服务器 2 已启动: http://localhost:${PORT}/poems2.html`);
  console.log(`数据接口示例:          http://localhost:${PORT}/poems`);
});

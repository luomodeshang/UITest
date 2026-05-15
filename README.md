# UITest 🖥️

> 一个基于 Python Flask 构建的现代静态前端界面项目

## 📋 项目概述

UITest 是一个干净、现代、响应式的静态前端界面演示项目，采用移动优先的设计策略，严格遵循 **WCAG 2.1 AA** 无障碍标准。

### 技术栈

| 项目     | 说明                              |
| -------- | --------------------------------- |
| 🖥️ 前端 | 纯 HTML5 + CSS3 + JavaScript      |
| 🎨 设计  | 移动优先响应式 · 极简主义风格     |
| ♿ 无障碍 | 语义化 HTML · ARIA 标签 · 键盘导航 |
| ⚡ 性能  | 零外部依赖 · 秒级加载              |

## 📁 项目结构

```
UITest/
├── index.html          # 首页
├── about.html          # 关于页面
├── features.html       # 功能页面
├── README.md           # 项目说明（本文档）
├── CHANGELOG.md        # 更新日志
├── .gitignore
├── css/
│   ├── reset.css       # CSS Reset（统一浏览器默认样式）
│   └── style.css       # 主样式文件
├── js/
│   └── main.js         # 主脚本文件
└── assets/
    ├── images/         # 图片资源目录
    ├── icons/          # 图标资源目录
    │   └── favicon.svg # 网站图标
    └── fonts/          # 字体资源目录
```

## 🚀 快速开始

### 方式一：直接打开

用浏览器直接打开 `index.html` 即可预览。

### 方式二：通过 Flask 运行

```bash
cd UITest
python3 -m http.server 8000
```

然后访问 http://localhost:8000

## 🔄 更新迭代说明

**每次更新时请在 `CHANGELOG.md` 中记录：**
1. 版本号（遵循语义化版本）
2. 更新日期
3. 变更类型（新增 / 修改 / 修复）
4. 具体变更内容描述

## 📄 License

MIT

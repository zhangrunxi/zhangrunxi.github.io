# 个人主页项目

一个现代化的响应式个人主页，包含博客功能、项目展示和联系表单，专为GitHub Pages部署优化。

## ✨ 特性

- 🎨 **现代设计** - 简洁美观的用户界面，支持亮色/暗色主题
- 📱 **响应式布局** - 完美适配桌面、平板和手机
- ⚡ **快速加载** - 纯静态网站，无需服务器
- 📝 **博客系统** - 支持分类、标签、搜索的博客功能
- 🗂️ **项目管理** - 展示个人项目和作品集
- 📧 **联系表单** - 访客可以通过表单联系你
- 🔍 **SEO优化** - 良好的搜索引擎优化
- 🚀 **GitHub Pages** - 一键部署到GitHub Pages

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### 2. 个性化配置

编辑以下文件来自定义你的网站：

#### 基本信息配置

**index.html** - 修改以下内容：
- 个人姓名和介绍
- 社交媒体链接
- 联系邮箱
- 项目信息

**styles.css** - 自定义主题颜色和样式：
```css
:root {
  --primary-color: #2563eb;    /* 主色调 */
  --secondary-color: #64748b;  /* 次要色调 */
  --accent-color: #f59e0b;     /* 强调色 */
  /* 更多颜色变量... */
}
```

#### 博客配置

**blog.html** - 修改博客分类和标签
**rss.xml** - 更新RSS订阅内容

#### GitHub配置

**_config.yml** - 更新网站元数据：
```yaml
title: Your Name - 个人主页
description: 你的个人简介
url: "https://yourusername.github.io"
```

### 3. 部署到GitHub Pages

#### 方法一：使用GitHub Actions（推荐）

1. 将代码推送到GitHub仓库：
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. 在GitHub仓库中：
- 转到 `Settings` > `Pages`
- 在 `Build and deployment` 中选择 `GitHub Actions`

3. 推送代码后，GitHub Actions会自动部署网站

#### 方法二：手动部署

1. 转到GitHub仓库的 `Settings` > `Pages`
2. 选择 `Deploy from a branch`
3. 选择 `main` 分支和 `/ (root)` 文件夹
4. 点击 `Save`

## 📁 项目结构

```
yourusername.github.io/
├── index.html              # 主页
├── blog.html               # 博客列表页
├── styles.css              # 样式文件
├── script.js               # 主要JavaScript功能
├── blog.js                 # 博客相关功能
├── rss.xml                 # RSS订阅
├── _config.yml             # GitHub Pages配置
├── .nojekyll               # 禁用Jekyll处理
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions部署配置
├── blog/                   # 博客文章目录
│   └── 2023/
│       └── modern-web-development-trends.html
└── README.md               # 项目文档
```

## ✏️ 自定义指南

### 添加新的博客文章

1. 在 `blog/` 目录下创建年份文件夹（如 `2024/`）
2. 创建HTML文件，参考现有博客文章格式
3. 更新 `blog.html` 中的文章列表
4. 更新 `rss.xml` 添加新文章条目

### 添加新项目

在 `index.html` 的 `projects-grid` 部分添加新的项目卡片：

```html
<article class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">你的项目名称</h3>
        <p class="project-description">项目描述...</p>
        <div class="project-tech">
            <span class="tech-tag">技术栈</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" class="project-link">
                <i class="fab fa-github"></i> 源码
            </a>
        </div>
    </div>
</article>
```

### 自定义颜色主题

编辑 `styles.css` 中的CSS变量：

```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  --text-color: #1e293b;
  --text-light: #64748b;
  --bg-color: #ffffff;
  --bg-alt: #f8fafc;
  --border-color: #e2e8f0;
}
```

### 添加社交媒体链接

在HTML中找到社交媒体链接部分：

```html
<div class="hero-social">
    <a href="https://github.com/yourusername" class="social-link" aria-label="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <!-- 添加更多社交媒体链接 -->
</div>
```

支持的图标：`fab fa-twitter`, `fab fa-linkedin`, `fab fa-weibo`, `fab fa-instagram`, `fab fa-youtube` 等

### 配置联系表单

当前联系表单是前端演示版本。要实现真正的邮件发送功能，你有几个选择：

1. **使用第三方服务**：
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [Getform](https://getform.io/)

2. **使用GitHub Pages + Netlify Functions**：

   在表单中添加 `data-netlify="true"` 属性：
   ```html
   <form class="contact-form" name="contact" method="POST" data-netlify="true">
   ```

3. **使用后端服务**：
   - 部署一个简单的API端点处理表单提交

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代CSS特性，CSS变量，Flexbox，Grid
- **JavaScript (ES6+)** - 原生JavaScript，无框架依赖
- **Font Awesome** - 图标库
- **Google Fonts** - Inter字体
- **Prism.js** - 代码语法高亮（博客）

## 📱 响应式设计

网站完全响应式，支持：
- 🖥️ 桌面电脑 (1200px+)
- 💻 笔记本电脑 (768px - 1199px)
- 📱 平板电脑 (481px - 767px)
- 📱 手机 (480px以下)

## ⚡ 性能优化

- 🗜️ **代码压缩** - 生产环境自动压缩CSS和JavaScript
- 🖼️ **图片优化** - 建议使用WebP格式
- 🚀 **延迟加载** - 图片和内容延迟加载
- 📦 **资源打包** - 最小化HTTP请求
- 🗂️ **缓存策略** - 适当的缓存头设置

## 🔍 SEO优化

- 结构化数据标记
- Meta标签优化
- 语义化HTML结构
- URL结构友好
- 站点地图 (可添加sitemap.xml)

## 📊 分析和监控

要添加网站分析，可以：

1. **Google Analytics**：
   ```html
   <!-- 在</head>前添加 -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

2. **其他分析服务**：
   - [Plausible Analytics](https://plausible.io/) - 注重隐私的分析
   - [Umami](https://umami.is/) - 开源分析
   - [Fathom](https://usefathom.com/) - 简单易用

## 🔄 维护和更新

### 定期维护任务

1. **内容更新**：
   - 添加新博客文章
   - 更新项目信息
   - 更新个人简介

2. **技术维护**：
   - 检查依赖更新
   - 测试新浏览器兼容性
   - 性能优化

3. **SEO维护**：
   - 监控搜索排名
   - 更新关键词
   - 检查死链接

### 备份策略

- 所有代码都在Git仓库中，自动有历史版本
- 定期备份内容（图片、文档等）

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 开发环境设置

1. Fork仓库
2. 克隆你的fork：
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   ```

3. 创建功能分支：
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. 提交更改：
   ```bash
   git commit -m 'Add some amazing feature'
   ```

5. 推送到分支：
   ```bash
   git push origin feature/amazing-feature
   ```

6. 创建Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🆘 故障排除

### 常见问题

1. **网站没有显示**：
   - 确保推送到了正确的分支（main/master）
   - 检查GitHub Pages设置是否正确
   - 等待几分钟让部署完成

2. **样式不正确**：
   - 检查CSS文件路径
   - 清除浏览器缓存
   - 检查控制台错误

3. **博客文章不显示**：
   - 检查HTML格式是否正确
   - 确保路径链接正确
   - 检查JavaScript错误

4. **联系表单不工作**：
   - 这是正常的，前端表单需要后端服务
   - 参考上面的"配置联系表单"部分

### 获取帮助

如果遇到问题：
1. 查看 [GitHub Pages文档](https://docs.github.com/en/pages)
2. 搜索相关Issue
3. 创建新的Issue描述问题

## 📚 相关资源

- [GitHub Pages官方文档](https://docs.github.com/en/pages)
- [HTML5教程](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3参考](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript指南](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [响应式Web设计](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

🎉 **感谢使用这个模板！如果觉得有用，请给个⭐️**
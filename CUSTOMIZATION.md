# 个性化定制指南

这个指南将帮助你完全定制你的个人主页，让它体现你的个人风格和专业特色。

## 🎨 视觉设计定制

### 1. 配色方案

编辑 `styles.css` 中的CSS变量来快速更改整个网站的配色：

```css
:root {
  /* 主色调 - 用于链接、按钮、强调元素 */
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;

  /* 次要色调 - 用于辅助文本 */
  --secondary-color: #64748b;

  /* 强调色 - 用于标签、重要提示 */
  --accent-color: #f59e0b;

  /* 文本颜色 */
  --text-color: #1e293b;
  --text-light: #64748b;

  /* 背景颜色 */
  --bg-color: #ffffff;
  --bg-alt: #f8fafc;

  /* 边框颜色 */
  --border-color: #e2e8f0;

  /* 阴影效果 */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

#### 推荐配色方案

**专业蓝色**：
```css
--primary-color: #1e40af;
--accent-color: #0891b2;
```

**自然绿色**：
```css
--primary-color: #059669;
--accent-color: #84cc16;
```

**创意紫色**：
```css
--primary-color: #7c3aed;
--accent-color: #db2777;
```

### 2. 字体定制

在 `index.html` 的 `<head>` 部分更改Google Fonts：

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet">
```

然后在 `styles.css` 中更新字体族：

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 代码字体 */
code, pre {
  font-family: 'Source Code Pro', 'Courier New', monospace;
}
```

#### 推荐字体组合

- **现代简洁**：Inter + Source Code Pro
- **经典专业**：Merriweather + Open Sans
- **创意友好**：Poppins + Roboto
- **技术风格**：JetBrains Mono + Inter

### 3. 布局调整

#### 调整容器宽度

```css
.container {
  max-width: 1200px; /* 增大或减小 */
  margin: 0 auto;
  padding: 0 1rem;
}
```

#### 调整间距

```css
.section {
  padding: 5rem 0; /* 增大垂直间距 */
}

/* 或者为不同部分设置不同间距 */
.hero {
  padding: 8rem 0 4rem;
}

.section {
  padding: 6rem 0;
}
```

## 📝 内容定制

### 1. 个人信息

在 `index.html` 中找到Hero部分并更新：

```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Hi, I'm <span class="highlight">你的姓名</span></h1>
      <p class="hero-subtitle">你的职业标题 | 专业领域 | 个人特色</p>
      <p class="hero-description">
        你的个人介绍，保持简洁专业，突出你的核心优势和热情。
        建议控制在2-3句话，约50-80个字。
      </p>
```

### 2. 技能展示

更新关于部分的技能：

```html
<div class="skills-grid">
  <div class="skill-category">
    <h4>前端</h4>
    <div class="skills-tags">
      <span class="skill-tag">JavaScript</span>
      <span class="skill-tag">React</span>
      <span class="skill-tag">Vue.js</span>
      <span class="skill-tag">TypeScript</span>
      <!-- 添加或移除技能标签 -->
    </div>
  </div>
</div>
```

### 3. 项目展示

添加新项目的完整模板：

```html
<article class="project-card">
  <div class="project-image">
    <!-- 可以替换为实际项目截图 -->
    <div class="project-placeholder">
      <i class="fas fa-code"></i>
    </div>
  </div>
  <div class="project-content">
    <h3 class="project-title">项目名称</h3>
    <p class="project-description">
      项目描述，说明项目解决的问题、使用的技术和取得的成果。
      保持简洁，重点突出。
    </p>
    <div class="project-tech">
      <span class="tech-tag">技术栈1</span>
      <span class="tech-tag">技术栈2</span>
      <span class="tech-tag">技术栈3</span>
    </div>
    <div class="project-links">
      <a href="项目GitHub链接" class="project-link">
        <i class="fab fa-github"></i> 源码
      </a>
      <a href="项目演示链接" class="project-link">
        <i class="fas fa-external-link-alt"></i> 演示
      </a>
    </div>
  </div>
</article>
```

## 📱 响应式定制

### 1. 断点调整

如果需要调整响应式断点，修改 `styles.css` 中的媒体查询：

```css
/* 平板设备 */
@media (max-width: 1024px) {
  /* 平板样式 */
}

/* 手机设备 */
@media (max-width: 768px) {
  /* 手机样式 */
}

/* 小屏手机 */
@media (max-width: 480px) {
  /* 小屏样式 */
}
```

### 2. 移动端优化

```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem; /* 移动端标题大小 */
  }

  .hero-actions {
    flex-direction: column; /* 垂直排列按钮 */
  }

  .projects-grid {
    grid-template-columns: 1fr; /* 单列布局 */
  }
}
```

## 🎯 功能增强

### 1. 添加动画效果

在 `script.js` 中添加自定义动画：

```javascript
// 添加到DOMContentLoaded事件中
function addCustomAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');

  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });

    observer.observe(element);
  });
}
```

然后在HTML中为要添加动画的元素添加类：

```html
<div class="project-card animate-on-scroll">
  <!-- 项目内容 -->
</div>
```

### 2. 添加新页面

创建新页面，比如详细的简历页面：

1. 创建 `resume.html`
2. 复制 `index.html` 的基本结构
3. 自定义内容
4. 更新导航菜单

```html
<!-- 在导航中添加新链接 -->
<ul class="nav-menu">
  <li><a href="index.html#about">关于我</a></li>
  <li><a href="resume.html">简历</a></li>
  <li><a href="index.html#projects">项目</a></li>
  <li><a href="blog.html">博客</a></li>
  <li><a href="index.html#contact">联系</a></li>
</ul>
```

### 3. 添加技能进度条

```html
<div class="skill-progress">
  <div class="skill-info">
    <span class="skill-name">JavaScript</span>
    <span class="skill-percentage">90%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress-fill" style="width: 90%"></div>
  </div>
</div>
```

```css
.skill-progress {
  margin-bottom: 1rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-bar {
  height: 8px;
  background-color: var(--bg-alt);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 4px;
  transition: width 1s ease;
}
```

## 🔌 集成第三方服务

### 1. 添加评论系统

**使用Disqus**：

```html
<!-- 在博客文章底部添加 -->
<div id="disqus_thread"></div>
<script>
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://你的shortname.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
</script>
```

**使用Giscus（基于GitHub Discussions）**：

```html
<script src="https://giscus.app/client.js"
        data-repo="你的username/你的仓库"
        data-repo-id="你的仓库ID"
        data-category="Announcements"
        data-category-id="你的分类ID"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```

### 2. 添加分析工具

**Google Analytics 4**：

```html
<!-- 在</head>之前添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible Analytics**：

```html
<script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script>
```

### 3. 添加邮件订阅

使用Mailchimp或其他邮件服务：

```html
<div class="newsletter-form">
  <h3>订阅我的更新</h3>
  <form action="你的mailchimp表单URL" method="post">
    <input type="email" name="EMAIL" placeholder="your@email.com" required>
    <button type="submit" class="btn btn-primary">订阅</button>
  </form>
</div>
```

## 🚀 性能优化

### 1. 图片优化

使用现代图片格式和懒加载：

```html
<!-- 响应式图片 -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="描述" loading="lazy">
</picture>
```

### 2. 代码分割

为不同页面分离JavaScript：

```html
<!-- 只在博客页面加载博客相关脚本 -->
<script src="blog.js" defer></script>

<!-- 只在有代码高亮的页面加载Prism -->
<script src="prism.js" defer></script>
```

### 3. 关键CSS内联

将关键CSS内联到HTML头部：

```html
<style>
  /* 关键路径CSS - 首屏渲染所需样式 */
  body { font-family: 'Inter', sans-serif; margin: 0; }
  .header { background: white; padding: 1rem 0; }
  /* 更多关键样式... */
</style>

<!-- 非关键CSS异步加载 -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>
```

## 📊 SEO优化

### 1. 结构化数据

添加JSON-LD结构化数据：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "你的姓名",
  "jobTitle": "你的职位",
  "url": "https://yourusername.github.io",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourprofile",
    "https://twitter.com/yourusername"
  ],
  "knowsAbout": ["前端开发", "后端开发", "你的其他技能"]
}
</script>
```

### 2. 社交媒体元标签

```html
<meta property="og:title" content="Your Name - 个人主页">
<meta property="og:description" content="全栈开发者的个人网站，分享技术见解和项目经验">
<meta property="og:image" content="https://yourusername.github.io/og-image.jpg">
<meta property="og:url" content="https://yourusername.github.io">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@yourusername">
```

## 🔒 安全性考虑

### 1. 内容安全策略（CSP）

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">
```

### 2. 联系表单安全

如果你使用第三方表单服务，确保：
- 验证用户输入
- 使用HTTPS
- 实施速率限制
- 添加CSRF保护

## 📋 部署前检查清单

在部署之前，确保：

- [ ] 所有链接都正确工作
- [ ] 图片优化完成
- [ ] SEO元标签正确设置
- [ ] 移动端响应式正常
- [ ] 不同的浏览器兼容性
- [ ] 无控制台错误
- [ ] 联系表单功能正常
- [ ] 分析脚本正确配置
- [ ] 内容拼写和语法检查

## 🆘 常见问题解决

### 问题：字体不显示
- 检查Google Fonts链接是否正确
- 确保网络可以访问fonts.googleapis.com
- 添加备用字体族

### 问题：图标不显示
- 确保Font Awesome链接正确
- 检查类名是否正确
- 添加Unicode字符作为备用

### 问题：响应式布局异常
- 检查媒体查询断点
- 确保flexbox和grid属性正确
- 测试不同屏幕尺寸

---

这个定制指南涵盖了个性化的各个方面。选择你想要定制的内容，逐步实施，不断测试，最终创建一个完全符合你风格的个人主页！
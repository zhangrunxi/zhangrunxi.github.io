// Blog functionality
document.addEventListener('DOMContentLoaded', () => {
    initializeBlog();
});

function initializeBlog() {
    // Search functionality
    initializeSearch();

    // Category filtering
    initializeCategoryFilter();

    // Tag filtering
    initializeTagFilter();

    // RSS feed generation (if needed)
    generateRSSFeed();
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const blogPosts = document.querySelectorAll('.blog-post');

    if (!searchInput) return;

    const performSearch = debounce(() => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        blogPosts.forEach(post => {
            const title = post.querySelector('.post-title a, .post-title').textContent.toLowerCase();
            const excerpt = post.querySelector('.post-excerpt p, .post-excerpt').textContent.toLowerCase();
            const tags = Array.from(post.querySelectorAll('.blog-tag')).map(tag => tag.textContent.toLowerCase());

            const matchesSearch = searchTerm === '' ||
                title.includes(searchTerm) ||
                excerpt.includes(searchTerm) ||
                tags.some(tag => tag.includes(searchTerm));

            post.style.display = matchesSearch ? 'block' : 'none';
        });

        // Update search results info
        updateSearchResultsCount();
    }, 300);

    searchInput.addEventListener('input', performSearch);

    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    // Enter key support
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function initializeCategoryFilter() {
    const categoryLinks = document.querySelectorAll('.category-list a');
    const blogPosts = document.querySelectorAll('.blog-post');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const selectedCategory = link.dataset.category;

            // Update active state
            categoryLinks.forEach(catLink => catLink.classList.remove('active'));
            link.classList.add('active');

            // Filter posts
            blogPosts.forEach(post => {
                const postCategory = post.dataset.category;
                const shouldShow = selectedCategory === 'all' || postCategory === selectedCategory;
                post.style.display = shouldShow ? 'block' : 'none';
            });

            // Update URL
            const url = new URL(window.location);
            if (selectedCategory === 'all') {
                url.searchParams.delete('category');
            } else {
                url.searchParams.set('category', selectedCategory);
            }
            window.history.pushState({}, '', url);
        });
    });

    // Load category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('category');
    if (categoryFromUrl) {
        const categoryLink = document.querySelector(`[data-category="${categoryFromUrl}"]`);
        if (categoryLink) {
            categoryLink.click();
        }
    }
}

function initializeTagFilter() {
    const tagLinks = document.querySelectorAll('.tag-cloud a');
    const blogPosts = document.querySelectorAll('.blog-post');

    tagLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const selectedTag = link.dataset.tag;

            // Update active state
            tagLinks.forEach(tagLink => tagLink.classList.remove('active'));
            link.classList.add('active');

            // Filter posts
            blogPosts.forEach(post => {
                const postTags = post.dataset.tags ? post.dataset.tags.split(',') : [];
                const shouldShow = postTags.some(tag => tag.trim().toLowerCase().includes(selectedTag.toLowerCase()));
                post.style.display = shouldShow ? 'block' : 'none';
            });

            // Update URL
            const url = new URL(window.location);
            url.searchParams.set('tag', selectedTag);
            window.history.pushState({}, '', url);
        });
    });
}

function updateSearchResultsCount() {
    const visiblePosts = document.querySelectorAll('.blog-post:not([style*="display: none"])');
    const totalPosts = document.querySelectorAll('.blog-post');

    // Update results count if element exists
    const resultsInfo = document.querySelector('.search-results-info');
    if (resultsInfo) {
        if (visiblePosts.length === 0) {
            resultsInfo.textContent = '没有找到匹配的文章';
        } else {
            resultsInfo.textContent = `找到 ${visiblePosts.length} 篇文章，共 ${totalPosts.length} 篇`;
        }
    }
}

// Generate RSS feed
function generateRSSFeed() {
    // This would normally be done server-side, but for static sites
    // we can create a simple RSS feed using JavaScript
    const posts = document.querySelectorAll('.blog-post');

    if (posts.length === 0) return;

    let rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Your Name - 技术博客</title>
    <description>分享编程经验、技术见解和开发心得</description>
    <link>${window.location.origin}/blog.html</link>
    <atom:link href="${window.location.origin}/rss.xml" rel="self" type="application/rss+xml" />
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
`;

    posts.forEach(post => {
        const title = post.querySelector('.post-title a, .post-title').textContent;
        const link = post.querySelector('.post-title a')?.href || '';
        const excerpt = post.querySelector('.post-excerpt p, .post-excerpt').textContent;
        const pubDate = post.querySelector('time')?.getAttribute('datetime') || new Date().toISOString();
        const category = post.dataset.category || '';

        rssContent += `
    <item>
      <title><![CDATA[${title}]]></title>
      <link>${link}</link>
      <description><![CDATA[${excerpt}]]></description>
      <category><![CDATA[${category}]]></category>
      <pubDate>${new Date(pubDate).toUTCString()}</pubDate>
      <guid>${link}</guid>
    </item>`;
    });

    rssContent += `
  </channel>
</rss>`;

    // Create RSS file (this would need to be done server-side in practice)
    // For demonstration, we could display it in the console
    console.log('Generated RSS Feed:', rssContent);
}

// Enhanced post interaction
function initializePostInteractions() {
    // Reading time estimation
    estimateReadingTimes();

    // Scroll progress for individual posts
    initializeScrollProgress();

    // Comment system (basic structure)
    initializeCommentSystem();

    // Social sharing
    initializeSocialSharing();
}

function estimateReadingTimes() {
    const posts = document.querySelectorAll('.blog-post');

    posts.forEach(post => {
        const content = post.querySelector('.post-excerpt p, .post-content');
        if (!content) return;

        const text = content.textContent;
        const wordsPerMinute = 200;
        const words = text.split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);

        // Update or create reading time element
        let timeElement = post.querySelector('.post-read-time, .estimated-read-time');
        if (!timeElement) {
            timeElement = document.createElement('span');
            timeElement.className = 'post-read-time';
            const metaElement = post.querySelector('.post-meta');
            if (metaElement) {
                metaElement.appendChild(timeElement);
            }
        }

        timeElement.textContent = `${minutes}分钟阅读`;
    });
}

function initializeScrollProgress() {
    // Only on single post pages
    if (!document.querySelector('.blog-post-container')) return;

    function updateProgressBar() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        let progressBar = document.querySelector('.reading-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'reading-progress';
            document.body.appendChild(progressBar);
        }

        progressBar.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', throttle(updateProgressBar, 16));
}

function initializeCommentSystem() {
    const commentForm = document.querySelector('.comment-form');
    if (!commentForm) return;

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(commentForm);
        const comment = {
            name: formData.get('name'),
            email: formData.get('email'),
            content: formData.get('content'),
            timestamp: new Date().toISOString()
        };

        // In a real application, this would be sent to a server
        // For static sites, we could use a service like Disqus, or store in localStorage
        addCommentToDOM(comment);
        commentForm.reset();

        showNotification('评论已提交！', 'success');
    });
}

function addCommentToDOM(comment) {
    const commentsContainer = document.querySelector('.comments-list');
    if (!commentsContainer) return;

    const commentElement = document.createElement('article');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
        <div class="comment-header">
            <strong>${comment.name}</strong>
            <time>${formatDate(comment.timestamp)}</time>
        </div>
        <div class="comment-content">
            <p>${comment.content}</p>
        </div>
    `;

    commentsContainer.appendChild(commentElement);
}

function initializeSocialSharing() {
    const shareButtons = document.querySelectorAll('[data-share]');

    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const platform = button.dataset.share;
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl;
            switch (platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'weibo':
                    shareUrl = `https://service.weibo.com/share/share.php?url=${url}&title=${title}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'copy':
                    navigator.clipboard.writeText(window.location.href)
                        .then(() => showNotification('链接已复制到剪贴板', 'success'))
                        .catch(() => showNotification('复制失败', 'error'));
                    return;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add blog-specific styles
const blogStyles = `
<style>
/* Blog Specific Styles */
.blog-hero {
    padding: 8rem 0 4rem;
    text-align: center;
    background: linear-gradient(135deg, var(--primary-color), #7c3aed);
    color: white;
    min-height: 60vh;
    display: flex;
    align-items: center;
}

.blog-dino-avatar {
    width: 80px;
    height: 80px;
    margin: 0 auto 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border: 3px solid rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
    animation: blogFloat 4s ease-in-out infinite;
}

.blog-dino-avatar::before {
    content: '🦕';
    position: absolute;
    top: 5px;
    right: 8px;
    font-size: 1.2rem;
    opacity: 0.8;
    transform: rotate(15deg);
}

.blog-dino-svg {
    width: 50px;
    height: 50px;
    filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.2));
}

@keyframes blogFloat {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-8px);
    }
}

.blog-hero .hero-title {
    margin-bottom: 1rem;
}

.blog-hero .hero-subtitle {
    margin-bottom: 2rem;
    opacity: 0.9;
}

.blog-search {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
}

.blog-search input {
    width: 100%;
    padding: 1rem 3rem 1rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow-lg);
}

.blog-search button {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: var(--primary-color);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.blog-search button:hover {
    background: var(--primary-dark);
}

.blog-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 3rem;
    margin-top: 3rem;
}

.blog-sidebar {
    position: sticky;
    top: 100px;
    height: fit-content;
}

.sidebar-section {
    background: var(--bg-color);
    padding: 1.5rem;
    border-radius: var(--radius);
    margin-bottom: 2rem;
    box-shadow: var(--shadow-sm);
}

.sidebar-section h3 {
    margin-bottom: 1rem;
    color: var(--text-color);
}

.category-list {
    list-style: none;
}

.category-list li {
    margin-bottom: 0.5rem;
}

.category-list a {
    color: var(--text-color);
    display: block;
    padding: 0.5rem 0;
    border-radius: 0.25rem;
    transition: var(--transition);
}

.category-list a:hover,
.category-list a.active {
    background-color: var(--bg-alt);
    color: var(--primary-color);
}

.tag-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    background-color: var(--bg-alt);
    color: var(--text-color);
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    transition: var(--transition);
}

.tag:hover,
.tag.active {
    background-color: var(--primary-color);
    color: white;
}

.recent-posts li {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border-color);
}

.recent-posts li:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.recent-posts a {
    color: var(--text-color);
    display: block;
    margin-bottom: 0.25rem;
}

.recent-posts time {
    color: var(--text-light);
    font-size: 0.875rem;
}

.rss-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    padding: 0.5rem 0;
}

.blog-main {
    min-height: 100vh;
}

.blog-posts {
    margin-bottom: 3rem;
}

.blog-post {
    background: var(--bg-color);
    padding: 2rem;
    border-radius: var(--radius);
    margin-bottom: 2rem;
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
}

.blog-post:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.post-header {
    margin-bottom: 1.5rem;
}

.post-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
}

.post-title a {
    color: var(--text-color);
    text-decoration: none;
}

.post-title a:hover {
    color: var(--primary-color);
}

.post-meta {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: var(--text-light);
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.post-category {
    background-color: var(--accent-color);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
}

.post-excerpt {
    margin-bottom: 1rem;
    color: var(--text-light);
    line-height: 1.6;
}

.post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.read-more {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.read-more:hover {
    color: var(--primary-dark);
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
}

.pagination-link {
    padding: 0.75rem 1.5rem;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    text-decoration: none;
    border-radius: var(--radius);
    transition: var(--transition);
}

.pagination-link:hover:not(.disabled) {
    background-color: var(--primary-color);
    color: white;
}

.pagination-link.disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-info {
    color: var(--text-light);
}

@media (max-width: 1024px) {
    .blog-layout {
        grid-template-columns: 1fr;
    }

    .blog-sidebar {
        position: static;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .sidebar-section {
        margin-bottom: 1rem;
    }
}

@media (max-width: 768px) {
    .blog-hero {
        padding: 6rem 0 3rem;
    }

    .blog-search {
        margin-bottom: 2rem;
    }

    .blog-post {
        padding: 1.5rem;
    }

    .post-meta {
        flex-direction: column;
        gap: 0.5rem;
    }

    .pagination {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>`;

document.head.insertAdjacentHTML('beforeend', blogStyles);
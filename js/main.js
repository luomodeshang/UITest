/** UITest - 主脚本文件 */
document.addEventListener('DOMContentLoaded', () => {
  // 当前页面高亮导航
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

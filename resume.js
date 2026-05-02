// 1. 项目/实习经历 展开/收起功能（核心交互）
function toggleExp(element) {
    // 获取当前点击的头部对应的内容区域
    const content = element.nextElementSibling;
    // 获取图标元素
    const icon = element.querySelector('.exp-icon');

    // 判断内容是否显示，切换显示/隐藏
    if (content.style.display === 'none') {
        content.style.display = 'block';
        element.classList.add('active'); // 给头部添加active类，让图标旋转
    } else {
        content.style.display = 'none';
        element.classList.remove('active'); // 移除active类，图标恢复
    }
}

// 2. 主题切换功能（浅色/深色切换，巩固DOM操作）
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// 给按钮绑定点击事件
themeBtn.addEventListener('click', function () {
    // 切换body的dark类，实现主题切换（CSS中已写好深色主题样式）
    body.classList.toggle('dark');

    // 切换按钮文字（优化用户体验）
    if (body.classList.contains('dark')) {
        themeBtn.textContent = '切换浅色';
    } else {
        themeBtn.textContent = '切换主题';
    }
});

// 3. 可选：页面加载完成后，自动展开第一个项目经历（巩固DOM查询）
window.addEventListener('load', function () {
    // 获取第一个项目经历的头部
    const firstExp = document.querySelector('.exp-item .exp-header');
    if (firstExp) {
        toggleExp(firstExp); // 调用展开函数，自动展开
    }
});

// 4. 可选：添加页面滚动效果（巩固window事件）
window.addEventListener('scroll', function () {
    const header = document.querySelector('.resume-header');
    // 当页面滚动超过50px，给头部添加阴影，提升视觉效果
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
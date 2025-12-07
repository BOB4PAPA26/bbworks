document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav ul li a');

    // オプション設定: 画面の50%に入ったら検知
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // すべてのリンクからアクティブクラスを削除
                navLinks.forEach(link => {
                    link.classList.remove('nav-active');
                });

                // 対応するリンクにアクティブクラスを追加
                const activeLink = document.querySelector(`.nav ul li a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('nav-active');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

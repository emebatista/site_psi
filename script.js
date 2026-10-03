document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const toggle = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav');

    // Menu mobile
    function closeMenu() {
        nav.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
    }

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            const open = nav.classList.toggle('active');
            toggle.classList.toggle('active', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        });

        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    // Sombra no header ao rolar
    function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});

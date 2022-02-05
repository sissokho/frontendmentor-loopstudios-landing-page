document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuOpenBtn = document.getElementById('mobile-menu-open');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('menu');

    // Toggle menu
    [mobileMenuOpenBtn, mobileMenuCloseBtn].forEach(trigger => {
        trigger.addEventListener('click', () => {
            menu.classList.toggle('-translate-x-full');
            menu.classList.toggle('opacity-0');

            if (document.body.style.overflow === '') {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    });
});

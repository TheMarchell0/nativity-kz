document.addEventListener('DOMContentLoaded', () => {
    const clientsSlider = new Swiper(".js-clients-swiper", {
        loop: true,
        spaceBetween: 13,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3000, // Задержка между сменой слайдов в миллисекундах
            disableOnInteraction: false, // Отключение автопрокрутки при взаимодействии пользователя с слайдером
        },
        allowTouchMove: false,
    });
})
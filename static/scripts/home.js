// Intersection Observer для анимации при скролле
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.dataset.visible = true;
        }
    });
}, { threshold: 0.3 });

featureCards.forEach(card => observer.observe(card));

// Ripple-эффект для кнопки
document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', e => {
        const circle = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = `${size}px`;
        circle.style.left = `${e.clientX - rect.left - size / 2}px`;
        circle.style.top = `${e.clientY - rect.top - size / 2}px`;
        circle.classList.add('ripple-effect');
        button.appendChild(circle);
        setTimeout(() => circle.remove(), 500);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const createPetal = () => {
        const petal = document.createElement('div');
        petal.classList.add('sakura');
        petal.style.setProperty('--offset', `${Math.random() * 80}vw`);
        document.body.appendChild(petal);

        //setTimeout(() => petal.remove(), 10000); // Удаляем лепесток через 10 сек.
    };

    //setInterval(createPetal, 300); // Создаем лепестки каждые 300 мс.
});

// Анимация появления карточек
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.setAttribute('data-visible', 'true');
        }, 300 * index);
    });
});

// Эффект взаимодействия с курсором
document.addEventListener('mousemove', (e) => {
    const root = document.documentElement;
    root.style.setProperty('--mouse-x', `${e.clientX}px`);
    root.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// Параллакс
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach((layer) => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});


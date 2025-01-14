document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        const input = e.target.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            e.target.textContent = 'Скрыть';
        } else {
            input.type = 'password';
            e.target.textContent = 'Показать';
        }
    });
});
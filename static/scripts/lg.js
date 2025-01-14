document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    let gradientPos = 0;
    const updateBackground = () => {
        gradientPos = (gradientPos + 1) % 100;
        body.style.backgroundPosition = `${gradientPos}% 50%`;
        requestAnimationFrame(updateBackground);
    };

    updateBackground();
});

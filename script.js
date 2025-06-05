document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorBtn');
    const title = document.querySelector('.title');
    const colors = ['#2d3748', '#4299e1', '#48bb78', '#ed8936', '#9f7aea'];
    let currentColorIndex = 0;

    button.addEventListener('click', () => {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        title.style.color = colors[currentColorIndex];
    });
}); 
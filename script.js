// script.js

// Función para cambiar entre modo claro y oscuro
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Función de cambio de tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeIcon.classList.toggle('fa-sun', isDarkMode);
    themeIcon.classList.toggle('fa-moon', !isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

// Verificar el estado del modo nocturno al cargar la página
window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.add('fa-sun');
        themeIcon.classList.remove('fa-moon');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.add('fa-moon');
        themeIcon.classList.remove('fa-sun');
    }
});

// Añadir evento de clic al botón de cambio de tema
themeToggle.addEventListener('click', toggleTheme);


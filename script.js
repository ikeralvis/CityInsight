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

// Configuración de los gráficos con Chart.js
const greenZonesData = {
    labels: ['Barrio 1', 'Barrio 2', 'Barrio 3', 'Barrio 4', 'Barrio 5'],
    datasets: [{
        label: 'Zonas Verdes (m² por habitante)',
        data: [16.5, 18.2, 14.8, 15.6, 17.0],
        backgroundColor: 'rgba(39, 174, 96, 0.6)',
        borderColor: 'rgba(39, 174, 96, 1)',
        borderWidth: 1
    }]
};

const trafficDensityData = {
    labels: ['Barrio 1', 'Barrio 2', 'Barrio 3', 'Barrio 4', 'Barrio 5'],
    datasets: [{
        label: 'Densidad de Tráfico (vehículos/km²)',
        data: [1200, 1500, 1100, 1300, 1400],
        backgroundColor: 'rgba(241, 196, 15, 0.6)',
        borderColor: 'rgba(241, 196, 15, 1)',
        borderWidth: 1
    }]
};

// Crear gráfico de Zonas Verdes
const greenZonesCtx = document.getElementById('greenZonesChart').getContext('2d');
const greenZonesChart = new Chart(greenZonesCtx, {
    type: 'bar',
    data: greenZonesData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'm² por habitante'
                }
            }
        }
    }
});

// Crear gráfico de Densidad de Tráfico
const trafficDensityCtx = document.getElementById('trafficDensityChart').getContext('2d');
const trafficDensityChart = new Chart(trafficDensityCtx, {
    type: 'bar',
    data: trafficDensityData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'vehículos/km²'
                }
            }
        }
    }
});

// Función para mostrar el modal de información
function showInfoModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'block';
}

// Función para cerrar el modal de información

function closeInfoModal() 
{
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
}

// Añadir evento de clic al botón de información
const infoButton = document.getElementById('info-button');
infoButton.addEventListener('click', showInfoModal);




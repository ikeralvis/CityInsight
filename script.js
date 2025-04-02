// script.js

// Datos para los gráficos de gestión urbana
const greenZonesData = {
    labels: ['Zona A', 'Zona B', 'Zona C', 'Zona D', 'Zona E'],
    datasets: [{
        label: 'Zonas Verdes (%)',
        data: [40, 25, 10, 15, 30], // Datos de ejemplo
        backgroundColor: 'rgba(76, 175, 80, 0.6)',
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 1
    }]
};

const populationDensityData = {
    labels: ['Barrio 1', 'Barrio 2', 'Barrio 3', 'Barrio 4', 'Barrio 5'],
    datasets: [{
        label: 'Densidad Poblacional (personas/km²)',
        data: [1200, 1800, 800, 1500, 2000],
        backgroundColor: 'rgba(41, 128, 185, 0.6)',
        borderColor: 'rgba(41, 128, 185, 1)',
        borderWidth: 1
    }]
};

const infrastructureData = {
    labels: ['Barrio 1', 'Barrio 2', 'Barrio 3', 'Barrio 4', 'Barrio 5'],
    datasets: [{
        label: 'Infraestructura Urbana (m² por habitante)',
        data: [50, 80, 60, 70, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Crear los gráficos
const greenZonesChart = new Chart(document.getElementById('greenZonesChart'), {
    type: 'bar',
    data: greenZonesData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const populationDensityChart = new Chart(document.getElementById('populationDensityChart'), {
    type: 'bar',
    data: populationDensityData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const infrastructureChart = new Chart(document.getElementById('infrastructureChart'), {
    type: 'bar',
    data: infrastructureData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// ========================================
// Chart.js Global Configuration
// ========================================
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.padding = 15;
Chart.defaults.animation.duration = 1000;
Chart.defaults.animation.easing = 'easeInOutQuart';

// ========================================
// Renewable Energy Charts
// ========================================

// Installed Capacity Chart
const installedCapacityCtx = document.getElementById('installedCapacityChart');
const installedCapacityChart = new Chart(installedCapacityCtx, {
    type: 'bar',
    data: {
        labels: ['Solar', 'Wind', 'Hydro', 'Biomass', 'Small Hydro', 'Nuclear'],
        datasets: [{
            label: 'Installed Capacity (GW)',
            data: [73.31, 44.73, 46.92, 10.17, 4.99, 7.48],
            backgroundColor: [
                window.chartColors.getRGBA('#00BCD4', 0.8),
                window.chartColors.getRGBA('#4CAF50', 0.8),
                window.chartColors.getRGBA('#9C27B0', 0.8),
                window.chartColors.getRGBA('#FF6F00', 0.8),
                window.chartColors.getRGBA('#E91E63', 0.8),
                window.chartColors.getRGBA('#3F51B5', 0.8)
            ],
            borderColor: [
                '#00BCD4', '#4CAF50', '#9C27B0', '#FF6F00', '#E91E63', '#3F51B5'
            ],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                titleFont: { size: 14, weight: 'bold' },
                bodyFont: { size: 13 },
                borderColor: '#00BCD4',
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        return `Capacity: ${context.parsed.y} GW`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + ' GW';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Capacity Growth Trend Chart
const capacityTrendCtx = document.getElementById('capacityTrendChart');
const capacityTrendChart = new Chart(capacityTrendCtx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
            {
                label: 'Solar',
                data: [5.05, 9.01, 18.31, 25.09, 34.62, 38.79, 49.34, 62.76, 70.10, 73.31],
                borderColor: '#00BCD4',
                backgroundColor: window.chartColors.getRGBA('#00BCD4', 0.1),
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: 'Wind',
                data: [25.09, 28.70, 32.28, 35.13, 37.51, 38.68, 40.08, 41.93, 43.68, 44.73],
                borderColor: '#4CAF50',
                backgroundColor: window.chartColors.getRGBA('#4CAF50', 0.1),
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6
            },
            {
                label: 'Hydro',
                data: [41.30, 42.78, 44.41, 45.29, 45.70, 46.00, 46.37, 46.51, 46.85, 46.92],
                borderColor: '#9C27B0',
                backgroundColor: window.chartColors.getRGBA('#9C27B0', 0.1),
                tension: 0.4,
                fill: true,
                pointRadius: 4,
                pointHoverRadius: 6
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + ' GW';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Pipeline Capacity Chart
const pipelineCapacityCtx = document.getElementById('pipelineCapacityChart');
const pipelineCapacityChart = new Chart(pipelineCapacityCtx, {
    type: 'doughnut',
    data: {
        labels: ['Solar Pipeline', 'Wind Pipeline', 'Hydro Pipeline', 'Others Pipeline'],
        datasets: [{
            data: [68.3, 35.2, 15.8, 8.5],
            backgroundColor: [
                window.chartColors.getRGBA('#00BCD4', 0.8),
                window.chartColors.getRGBA('#4CAF50', 0.8),
                window.chartColors.getRGBA('#9C27B0', 0.8),
                window.chartColors.getRGBA('#FF6F00', 0.8)
            ],
            borderColor: '#ffffff',
            borderWidth: 3,
            hoverOffset: 15
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.parsed} GW (${Math.round(context.parsed / 127.8 * 100)}%)`;
                    }
                }
            }
        }
    }
});

// ========================================
// Energy Flows Chart (Sankey-style using Stacked Bar)
// ========================================
const energyFlowsCtx = document.getElementById('energyFlowsChart');
const energyFlowsChart = new Chart(energyFlowsCtx, {
    type: 'bar',
    data: {
        labels: ['Generation', 'Transmission', 'Distribution', 'Consumption'],
        datasets: [
            {
                label: 'Renewable Energy',
                data: [700, 680, 650, 620],
                backgroundColor: window.chartColors.getRGBA('#4CAF50', 0.8),
                borderRadius: 8
            },
            {
                label: 'Thermal Energy',
                data: [1034, 1010, 972, 923],
                backgroundColor: window.chartColors.getRGBA('#FF6F00', 0.8),
                borderRadius: 8
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.parsed.x} BUs`;
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + ' BUs';
                    }
                }
            },
            y: {
                stacked: true,
                grid: {
                    display: false
                }
            }
        }
    }
});

// ========================================
// GHG Emissions Charts
// ========================================
let currentEmissionType = 'gross';

const emissionsCtx = document.getElementById('emissionsChart');
const emissionsChart = new Chart(emissionsCtx, {
    type: 'pie',
    data: {
        labels: ['Energy', 'Agriculture', 'Industry', 'Transport', 'Buildings', 'Others'],
        datasets: [{
            data: [1820, 680, 520, 310, 150, 120],
            backgroundColor: [
                window.chartColors.getRGBA('#FF6F00', 0.8),
                window.chartColors.getRGBA('#4CAF50', 0.8),
                window.chartColors.getRGBA('#9C27B0', 0.8),
                window.chartColors.getRGBA('#00BCD4', 0.8),
                window.chartColors.getRGBA('#E91E63', 0.8),
                window.chartColors.getRGBA('#3F51B5', 0.8)
            ],
            borderColor: '#ffffff',
            borderWidth: 3,
            hoverOffset: 15
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((context.parsed / total) * 100);
                        return `${context.label}: ${context.parsed} Mt CO2e (${percentage}%)`;
                    }
                }
            }
        }
    }
});

// Emissions Trend Chart
const emissionsTrendCtx = document.getElementById('emissionsTrendChart');
const emissionsTrendChart = new Chart(emissionsTrendCtx, {
    type: 'line',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
        datasets: [{
            label: 'Total Emissions',
            data: [2100, 2350, 2580, 2820, 3100, 3200, 3450, 3600],
            borderColor: '#FF6F00',
            backgroundColor: window.chartColors.getRGBA('#FF6F00', 0.1),
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `Emissions: ${context.parsed.y} Mt CO2e`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + ' Mt';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Update Emissions Chart Function
window.updateEmissionsChart = function(type) {
    currentEmissionType = type;
    
    const grossData = [1820, 680, 520, 310, 150, 120];
    const netData = [1650, 580, 470, 280, 130, 100];
    
    emissionsChart.data.datasets[0].data = type === 'gross' ? grossData : netData;
    emissionsChart.update('active');
};

// ========================================
// Climate Temperature Chart
// ========================================
const temperatureCtx = document.getElementById('temperatureChart');
const temperatureChart = new Chart(temperatureCtx, {
    type: 'line',
    data: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2024'],
        datasets: [
            {
                label: 'Average Temperature Anomaly (°C)',
                data: [0.15, 0.25, 0.38, 0.52, 0.68, 0.85, 1.05, 1.20],
                borderColor: '#FF6F00',
                backgroundColor: window.chartColors.getRGBA('#FF6F00', 0.1),
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 8,
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy'
                },
                pan: {
                    enabled: true,
                    mode: 'xy'
                }
            }
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value.toFixed(2) + '°C';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Update Temperature Chart Function
window.updateTemperatureChart = function(region) {
    const dataByRegion = {
        all: [0.15, 0.25, 0.38, 0.52, 0.68, 0.85, 1.05, 1.20],
        north: [0.18, 0.30, 0.45, 0.60, 0.78, 0.95, 1.15, 1.30],
        south: [0.12, 0.20, 0.32, 0.45, 0.60, 0.75, 0.92, 1.05],
        east: [0.14, 0.23, 0.36, 0.50, 0.65, 0.82, 1.00, 1.15],
        west: [0.16, 0.27, 0.40, 0.55, 0.72, 0.88, 1.08, 1.22]
    };
    
    temperatureChart.data.datasets[0].data = dataByRegion[region] || dataByRegion.all;
    temperatureChart.update('active');
};

// ========================================
// Water Resources Charts
// ========================================
const groundWaterCtx = document.getElementById('groundWaterChart');
const groundWaterChart = new Chart(groundWaterCtx, {
    type: 'bar',
    data: {
        labels: ['Annual Recharge', 'Net Availability', 'Annual Extraction', 'Allocation Domestic', 'Allocation Irrigation'],
        datasets: [{
            label: 'Billion Cubic Meters',
            data: [436, 398, 245, 36, 362],
            backgroundColor: [
                window.chartColors.getRGBA('#00BCD4', 0.8),
                window.chartColors.getRGBA('#4CAF50', 0.8),
                window.chartColors.getRGBA('#FF6F00', 0.8),
                window.chartColors.getRGBA('#9C27B0', 0.8),
                window.chartColors.getRGBA('#E91E63', 0.8)
            ],
            borderColor: [
                '#00BCD4', '#4CAF50', '#FF6F00', '#9C27B0', '#E91E63'
            ],
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `${context.parsed.y} BCM`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + ' BCM';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Water Availability Chart
const waterAvailabilityCtx = document.getElementById('waterAvailabilityChart');
const waterAvailabilityChart = new Chart(waterAvailabilityCtx, {
    type: 'line',
    data: {
        labels: ['1991', '2001', '2011', '2021', '2025 (Proj)', '2050 (Proj)'],
        datasets: [{
            label: 'Per Capita Water Availability (m³)',
            data: [2309, 1902, 1588, 1486, 1367, 1140],
            borderColor: '#00BCD4',
            backgroundColor: window.chartColors.getRGBA('#00BCD4', 0.1),
            tension: 0.4,
            fill: true,
            pointRadius: 6,
            pointHoverRadius: 8,
            borderWidth: 3,
            pointStyle: 'circle',
            pointBackgroundColor: '#00BCD4'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + ' m³';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// ========================================
// Land Cover Chart
// ========================================
const landCoverCtx = document.getElementById('landCoverChart');
const landCoverChart = new Chart(landCoverCtx, {
    type: 'polarArea',
    data: {
        labels: ['Forest Land', 'Agricultural Land', 'Barren Land', 'Built-up Land', 'Water Bodies', 'Wetlands'],
        datasets: [{
            data: [712249, 1610000, 158000, 96000, 120000, 45000],
            backgroundColor: [
                window.chartColors.getRGBA('#4CAF50', 0.7),
                window.chartColors.getRGBA('#FF6F00', 0.7),
                window.chartColors.getRGBA('#9C27B0', 0.7),
                window.chartColors.getRGBA('#E91E63', 0.7),
                window.chartColors.getRGBA('#00BCD4', 0.7),
                window.chartColors.getRGBA('#3F51B5', 0.7)
            ],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.parsed.toLocaleString()} sq km`;
                    }
                }
            }
        },
        scales: {
            r: {
                ticks: {
                    display: false
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
    }
});

// ========================================
// Economy GDP Chart
// ========================================
const gdpCtx = document.getElementById('gdpChart');
const gdpChart = new Chart(gdpCtx, {
    type: 'line',
    data: {
        labels: ['2015-16', '2016-17', '2017-18', '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
        datasets: [
            {
                label: 'Constant Price (2011-12)',
                data: [113.58, 121.96, 130.10, 139.81, 145.68, 147.05, 156.50, 164.72, 173.82],
                borderColor: '#00BCD4',
                backgroundColor: window.chartColors.getRGBA('#00BCD4', 0.1),
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                borderWidth: 3,
                yAxisID: 'y'
            },
            {
                label: 'Current Price',
                data: [137.72, 153.62, 170.98, 190.10, 203.51, 198.01, 236.65, 272.41, 295.36],
                borderColor: '#4CAF50',
                backgroundColor: window.chartColors.getRGBA('#4CAF50', 0.1),
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
                borderWidth: 3,
                yAxisID: 'y'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ₹${context.parsed.y} Lakh Crore`;
                    }
                }
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return '₹' + value + ' LC';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

// Update GDP Chart Function
window.updateGDPChart = function(year) {
    // This function can be used to filter data by year
    console.log('GDP chart updated for year:', year);
};

// ========================================
// Demographics Charts
// ========================================

// Population Pyramid Chart
const populationPyramidCtx = document.getElementById('populationPyramidChart');
const populationPyramidChart = new Chart(populationPyramidCtx, {
    type: 'bar',
    data: {
        labels: ['0-14', '15-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        datasets: [
            {
                label: 'Male',
                data: [-180, -125, -110, -95, -75, -50, -35],
                backgroundColor: window.chartColors.getRGBA('#00BCD4', 0.8),
                borderColor: '#00BCD4',
                borderWidth: 1
            },
            {
                label: 'Female',
                data: [170, 118, 105, 90, 72, 48, 38],
                backgroundColor: window.chartColors.getRGBA('#E91E63', 0.8),
                borderColor: '#E91E63',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${Math.abs(context.parsed.x)} Million`;
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: false,
                ticks: {
                    callback: function(value) {
                        return Math.abs(value) + 'M';
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            y: {
                stacked: false,
                grid: {
                    display: false
                }
            }
        }
    }
});

// State Demographics Chart
const stateDemographicsCtx = document.getElementById('stateDemographicsChart');
const stateDemographicsChart = new Chart(stateDemographicsCtx, {
    type: 'bar',
    data: {
        labels: ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal', 'Madhya Pradesh', 'Tamil Nadu', 'Rajasthan', 'Karnataka'],
        datasets: [{
            label: 'Population (Crores)',
            data: [23.80, 12.48, 12.40, 10.02, 8.52, 7.79, 7.72, 6.79],
            backgroundColor: window.chartColors.getColors(8).map(c => window.chartColors.getRGBA(c, 0.8)),
            borderColor: window.chartColors.getColors(8),
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                padding: 12,
                callbacks: {
                    label: function(context) {
                        return `Population: ${context.parsed.y} Crore`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    callback: function(value) {
                        return value + ' Cr';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
});

console.log('Charts JavaScript loaded successfully');

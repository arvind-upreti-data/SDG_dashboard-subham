// ========================================
// Dark Mode Toggle
// ========================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', null);
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ========================================
// Smooth Scroll Navigation
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Header Scroll Effect
// ========================================
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Animated Counter for Hero Stats
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for Hero Stats
const heroStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.stat-value');
            const targetValue = parseInt(statValue.getAttribute('data-count'));
            animateCounter(statValue, targetValue);
            heroStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stat').forEach(stat => {
    heroStatsObserver.observe(stat);
});

// ========================================
// Tabs Functionality
// ========================================
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// ========================================
// Toggle Group Functionality (Emissions)
// ========================================
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const emissionType = button.getAttribute('data-emission');
        
        // Remove active class from all toggle buttons
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Update emissions chart based on selection
        if (window.updateEmissionsChart) {
            window.updateEmissionsChart(emissionType);
        }
    });
});

// ========================================
// Temperature Region Filter
// ========================================
const tempRegionFilter = document.getElementById('tempRegionFilter');
if (tempRegionFilter) {
    tempRegionFilter.addEventListener('change', (e) => {
        const region = e.target.value;
        if (window.updateTemperatureChart) {
            window.updateTemperatureChart(region);
        }
    });
}

// ========================================
// Year Slider for GDP Chart
// ========================================
const yearSlider = document.getElementById('yearSlider');
const yearDisplay = document.getElementById('yearDisplay');

if (yearSlider && yearDisplay) {
    yearSlider.addEventListener('input', (e) => {
        const year = e.target.value;
        yearDisplay.textContent = year;
        
        if (window.updateGDPChart) {
            window.updateGDPChart(year);
        }
    });
}

// ========================================
// Export Data Functionality
// ========================================
function exportToCSV(data, filename) {
    const csv = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.querySelectorAll('.btn-export').forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        
        // Sample export data - can be customized per section
        const exportData = [
            ['Category', 'Value', 'Year'],
            ['Sample Data 1', '100', '2024'],
            ['Sample Data 2', '200', '2024'],
            ['Sample Data 3', '300', '2024']
        ];
        
        exportToCSV(exportData, `${section}-data.csv`);
        
        // Show success message
        showNotification('Data exported successfully!');
    });
});

// ========================================
// Notification System
// ========================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease both';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe chart cards and stat cards
document.querySelectorAll('.chart-card, .stat-card').forEach(card => {
    observer.observe(card);
});

// ========================================
// Responsive Navigation Toggle
// ========================================
function createMobileNav() {
    if (window.innerWidth <= 1024) {
        const nav = document.querySelector('.main-nav');
        if (nav && !document.querySelector('.mobile-nav-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-nav-toggle';
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
            toggle.style.cssText = `
                display: block;
                background: var(--gradient-primary);
                border: none;
                color: white;
                padding: 0.75rem 1rem;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1.2rem;
            `;
            
            toggle.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'var(--bg-card)';
                nav.style.padding = '1rem';
                nav.style.boxShadow = 'var(--shadow-lg)';
            });
            
            document.querySelector('.header-content').appendChild(toggle);
        }
    }
}

window.addEventListener('resize', createMobileNav);
createMobileNav();

// ========================================
// Chart Color Utilities
// ========================================
window.chartColors = {
    primary: ['#00BCD4', '#0097A7', '#4CAF50', '#66BB6A', '#9C27B0', '#FF6F00', '#E91E63', '#3F51B5'],
    gradients: [
        'linear-gradient(135deg, #00BCD4 0%, #0097A7 100%)',
        'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
        'linear-gradient(135deg, #9C27B0 0%, #FF6F00 100%)',
        'linear-gradient(135deg, #E91E63 0%, #F06292 100%)',
        'linear-gradient(135deg, #3F51B5 0%, #5C6BC0 100%)'
    ],
    getColors: function(count) {
        const colors = [];
        for (let i = 0; i < count; i++) {
            colors.push(this.primary[i % this.primary.length]);
        }
        return colors;
    },
    getRGBA: function(hex, alpha = 1) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
};

// ========================================
// Initialize on Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('India Climate & Energy Dashboard initialized');
    
    // Add smooth animations to elements
    const elements = document.querySelectorAll('.section-header, .chart-grid, .stats-grid');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

console.log('Main JavaScript loaded successfully');

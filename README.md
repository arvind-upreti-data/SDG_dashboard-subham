# 🌍 India Climate & Energy Dashboard

An interactive, modern dashboard for visualizing India's climate action, renewable energy progress, and sustainable development indicators based on the Updated Nationally Determined Contribution (NDC) data.

## 🎯 Project Overview

This dashboard provides comprehensive visualizations of India's environmental and energy data, including:
- Renewable energy capacity and growth trends
- Power sector overview (Generation, Transmission, Distribution, Consumption)
- Energy flow networks
- Sectoral GHG emissions
- Climate variability and temperature trends
- Water resources management
- Land cover distribution
- Economic indicators (GDP)
- Demographic analysis

## ✨ Key Features

### 🎨 Enhanced Design
- **Modern Color Palette**: Vibrant teal, green, purple, and orange gradients
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Glassmorphism Effects**: Modern translucent design elements
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover transitions, and scroll animations

### 📊 Interactive Visualizations

#### 1. **Renewable Energy Section**
- Bar chart showing installed capacity by source (Solar, Wind, Hydro, etc.)
- Multi-line trend chart tracking growth from 2015-2024
- Doughnut chart for pipeline capacity distribution
- Export data functionality

#### 2. **Power Sector Overview**
- Tabbed interface for Generation, Transmission, Distribution, and Consumption
- Animated stat cards with real-time counters
- Icon-based visual indicators
- Key metrics with contextual details

#### 3. **Energy Flows**
- Stacked horizontal bar chart showing energy distribution
- Visualization of renewable vs thermal energy flow
- Interactive tooltips with detailed breakdowns

#### 4. **GHG Emissions**
- Toggle between Gross and Net emissions
- Pie chart showing sectoral distribution
- Line chart tracking emissions trends (2010-2024)
- Percentage breakdowns with color-coded categories

#### 5. **Climate Trends**
- Interactive line chart with temperature anomalies
- Regional filter (All India, North, South, East, West)
- Zoom and pan capabilities for detailed analysis
- Decade-by-decade comparison

#### 6. **Water Resources**
- Bar chart for groundwater resources assessment
- Line chart showing per capita water availability
- Historical data and future projections (2025, 2050)

#### 7. **Land Cover**
- Polar area chart for land use distribution
- Biodiversity hotspots showcase
- Statistics on India's global biodiversity share

#### 8. **Economy**
- Dual-axis GDP comparison (Constant vs Current Price)
- Year slider for time-series navigation
- Growth indicators and trends

#### 9. **Demographics**
- Population pyramid with age-gender distribution
- State-wise comparison charts
- Key demographic highlights (most populous state, urbanization, etc.)

### 🔧 Advanced Functionality

- **Data Export**: CSV download for all chart sections
- **Real-time Filters**: Dynamic chart updates based on user selections
- **Smooth Scrolling**: Easy navigation between sections
- **Sticky Header**: Always-accessible navigation bar
- **Notification System**: User feedback for actions
- **Intersection Observer**: Animations triggered on scroll
- **Responsive Charts**: All charts adapt to screen size

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side requirements - pure static website

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Explore** the interactive dashboard

### File Structure
```
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Comprehensive styling with dark mode
├── js/
│   ├── main.js            # Core functionality and interactions
│   └── charts.js          # Chart.js visualizations
└── README.md              # Documentation
```

## 🎨 Color Scheme

### Light Mode
- **Primary**: Teal (#00BCD4, #0097A7)
- **Secondary**: Green (#4CAF50, #66BB6A)
- **Accent**: Purple (#9C27B0), Orange (#FF6F00)
- **Background**: White (#ffffff), Light Gray (#f5f7fa)

### Dark Mode
- **Background**: Navy (#0f172a, #1e293b)
- **Text**: Light Gray (#f1f5f9, #cbd5e1)
- **Preserved accent colors with enhanced contrast

## 📊 Data Visualization Technologies

- **Chart.js 4.4.0**: Primary charting library
- **Chart Types Used**:
  - Bar Charts (vertical & horizontal)
  - Line Charts (single & multi-line)
  - Pie & Doughnut Charts
  - Polar Area Charts
  - Stacked Bar Charts
  - Population Pyramids

## 🎯 Interactive Features

### Navigation
- Sticky header with section links
- Smooth scroll to sections
- Mobile-responsive navigation toggle

### Charts
- **Hover tooltips** with detailed information
- **Click interactions** for data exploration
- **Filter controls** for regional/temporal data
- **Toggle buttons** for data comparison (Gross/Net)
- **Year slider** for time-series analysis

### User Experience
- **Dark mode toggle** with localStorage persistence
- **Export functionality** for data download
- **Animated counters** in hero section
- **Loading animations** for visual appeal
- **Responsive design** for all devices

## 📈 Current Data Highlights

### Renewable Energy (Dec 2024)
- Total Installed Capacity: **462 GW**
- RE Capacity + Hydro: **209.44 GW** (45.3%)
- Solar Capacity: **73.31 GW**
- Wind Capacity: **44.73 GW**

### Power Sector
- Overall Generation (Apr-Dec 2024): **1,371.03 BUs**
- Transmission Lines: **4,91,504 ckm**
- Peak Demand: **250 GW**

### Demographics
- Total Population (2024): **1.443 Billion**
- Urbanization Rate: **35.4%**
- Most Populous State: **Uttar Pradesh** (23.80 crore)

## 🔄 Future Enhancements

### Planned Features
1. **Real-time Data Integration**: Connect to live APIs for dynamic updates
2. **Advanced Filtering**: Multi-parameter filters across all charts
3. **Comparison Mode**: Side-by-side year/state/sector comparisons
4. **Animation Controls**: Play/pause buttons for time-series data
5. **3D Visualizations**: Enhanced depth for complex datasets
6. **Data Stories**: Guided tours through key insights
7. **Custom Dashboard**: User-configurable chart layouts
8. **Print/PDF Export**: Generate reports from dashboard data

### Technical Improvements
- **Progressive Web App (PWA)**: Offline functionality
- **Performance Optimization**: Lazy loading for charts
- **Accessibility**: WCAG 2.1 AA compliance
- **Multi-language Support**: Hindi, English, and regional languages
- **Advanced Analytics**: Predictive modeling integration

## 🛠️ Customization

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-teal: #00BCD4;
    --secondary-green: #4CAF50;
    --accent-purple: #9C27B0;
    /* ... more colors ... */
}
```

### Adding New Charts
1. Add HTML canvas element in `index.html`
2. Create chart configuration in `js/charts.js`
3. Use Chart.js documentation for chart types

### Modifying Data
Update data arrays in `js/charts.js`:
```javascript
const myChart = new Chart(ctx, {
    data: {
        labels: ['Label 1', 'Label 2'],
        datasets: [{
            data: [value1, value2]
        }]
    }
});
```

## 📚 Dependencies

- **Chart.js** (v4.4.0): https://www.chartjs.org/
- **Font Awesome** (v6.4.0): Icon library
- **Google Fonts - Inter**: Typography
- All dependencies loaded via CDN - no installation required

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎓 Learning Resources

- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 📄 License

This project is open source and available for educational and non-commercial use.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📧 Contact

For questions or feedback about this dashboard, please reach out through the project repository.

## 🙏 Acknowledgments

- Data sourced from India's Updated NDC and various government portals
- Inspired by [NITI Aayog's ICED Dashboard](https://iced.niti.gov.in/)
- Built with modern web technologies and best practices

---

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Status**: ✅ Fully Functional

## 🚀 Quick Start Guide

1. Open `index.html` in your browser
2. Use the navigation bar to jump to sections
3. Toggle dark mode with the button (top-right)
4. Hover over charts for detailed tooltips
5. Click toggle buttons to switch between data views
6. Use export buttons to download data
7. Try filters and sliders for dynamic updates

**Enjoy exploring India's climate and energy data!** 🌱⚡

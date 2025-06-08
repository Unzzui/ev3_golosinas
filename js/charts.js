// This file is responsible for rendering charts and visual data representations using a charting library.

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('financialChart').getContext('2d');
    const financialData = []; // This will hold the processed financial data

    // Function to fetch and process financial data
    async function fetchFinancialData() {
        const response = await fetch('../data/financial-data.json');
        const data = await response.json();
        processFinancialData(data);
    }

    // Function to process financial data
    function processFinancialData(data) {
        // Assuming data has properties for labels and values
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);

        renderChart(labels, values);
    }

    // Function to render the chart
    function renderChart(labels, values) {
        const financialChart = new Chart(ctx, {
            type: 'line', // Change to 'bar', 'pie', etc. as needed
            data: {
                labels: labels,
                datasets: [{
                    label: 'Financial Data',
                    data: values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Fetch financial data on page load
    fetchFinancialData();
});
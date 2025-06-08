const fetchFinancialData = async () => {
    try {
        const response = await fetch('../data/financial-data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching financial data:', error);
    }
};

const processFinancialData = (data) => {
    // Process the financial data as needed for the presentation
    // This could include calculations, formatting, etc.
    return data; // Return processed data
};

const init = async () => {
    const financialData = await fetchFinancialData();
    const processedData = processFinancialData(financialData);
    // Further actions with processed data, such as updating the UI
};

document.addEventListener('DOMContentLoaded', init);
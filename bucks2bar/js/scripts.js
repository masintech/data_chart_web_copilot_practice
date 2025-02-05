document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function updateChart() {
        const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        const incomeData = [];
        const expensesData = [];

        months.forEach(month => {
            const income = document.getElementById(`${month}-income`).value || 0;
            const expenses = document.getElementById(`${month}-expenses`).value || 0;
            incomeData.push(parseFloat(income));
            expensesData.push(parseFloat(expenses));
        });

        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;
        myChart.update();
    }

    // Update chart when the input fields change
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateChart);
    });

    // Initial chart update
    updateChart();
});
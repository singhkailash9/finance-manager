import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import "../style/visual.css"

const Visual = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                const data = [
                    {
                        id: 344,
                        transaction: "Electricity Bill",
                        amount: 900,
                        type: "debit",
                        date: "1 march 2024"
                    },
                    {
                        id: 345,
                        transaction: "Scholarship refund",
                        amount: 5000,
                        type: "credit",
                        date: "4 march 2024"
                    },
                    {
                        id: 346,
                        transaction: "Stocks Investment",
                        amount: 2000,
                        type: "debit",
                        date: "3 march 2024"
                    },
                    {
                        id: 347,
                        transaction: "Internship",
                        amount: 3000,
                        type: "credit",
                        date: "8 march 2024"
                    },
                    {
                        id: 348,
                        transaction: "Gym Subscription",
                        amount: 600,
                        type: "debit",
                        date: "1 march 2024"
                    },
                    {
                        id: 349,
                        transaction: "Online Course",
                        amount: 1000,
                        type: "debit",
                        date: "1 February 2024"
                    },
                ];

                const labels = data.map(item => item.transaction);
                const amounts = data.map(item => item.amount);
                const colors = data.map(item => item.type === 'credit' ? 'green' : 'red');

                chartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels,
                        datasets: [{
                            label: 'Transaction Amount',
                            data: amounts,
                            backgroundColor: colors,
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
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="visual-container">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default Visual;

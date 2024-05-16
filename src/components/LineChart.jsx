import { CategoryScale, Chart, LineElement, LinearScale, PointElement } from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = () => {

    // 초기 데이터 설정
    const initialData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }
        ]
    };

    // 차트 데이터 상태 설정
    const [ chartData, setChartData ] = useState(initialData);

    // 10초마다 데이터 갱신
    useEffect(() => {
        const intervalId = setInterval(() => {
            const newData = {
                ...chartData,
                datasets: [
                    {
                        ...chartData.datasets[0],
                        data: chartData.datasets[0].data.map(() => Math.floor(Math.random() * 100))
                    }
                ]
            };
            setChartData(newData);
        }, 10000);
        return () => clearInterval(intervalId);
    }, [chartData])


      // 차트 옵션 설정
    const options = {
        scales: {
            x: {
                type: 'category'
            }
        }
    };

    return (
        <div>
            <h2>Line Chart Example</h2>
            <div style={{height: '800px', width: '1200px'}}>
                <Line data={chartData} options={options}/>
            </div>
        </div>
    )


}

export default LineChart;
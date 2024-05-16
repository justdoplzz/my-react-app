import { CategoryScale, Chart, LineElement, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

const LineChart = () => {

    // 차트 데이터 설정
    const data = {
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
            <div style={{height: '400px', width: '600px'}}>
                <Line data={data} options={options}/>
            </div>
        </div>
    )


}

export default LineChart;
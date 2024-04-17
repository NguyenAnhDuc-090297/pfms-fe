import '../css/component/chart.css'

import { LineChart, Line, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function InvestmentChart({ title, data}) {
    return (
        <div className="chart investment-chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart 
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false}/>
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={false}/>
                    <Legend />
                    <Line 
                        name="Investment"
                        type="monotone"
                        dataKey="data"
                        barSize={20}
                        fill="#57d478"
                        stroke="#82ca9d"
                    />
                </LineChart >
            </ResponsiveContainer>
        </div>
    );
}

export default InvestmentChart;
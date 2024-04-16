import '../css/component/chart.css'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({ title, data}) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart
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
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={false}/>
                    <Legend />
                    <Bar
                        name="Expense"
                        dataKey="data"
                        barSize={30}
                        fill="#2caffe"
                        activeBar={<Rectangle fill="#45c8ff" stroke="blue" />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
import { Bar, BarChart, XAxis, YAxis, Pie, PieChart, Sector, Tooltip,Cell, Legend, ResponsiveContainer,Label } from 'recharts';

const pieData = [
    { name: 'Category A', value: 500 },
    { name: 'Category B', value: 800 },
    { name: 'Category C', value: 200 },
    { name: 'Category D', value: 400 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// #region Sample data
const ChartData = [
    {
        name: 'Monday',
        text:"#fff",
        uv: 400,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Tuesday',
        uv: 300,
        pv: 4567,
        amt: 2400,
    },
    {
        name: 'Wednesday',
        uv: 300,
        pv: 1398,
        amt: 2400,
    },
    {
        name: 'Thursday',
        uv: 200,
        pv: 9800,
        amt: 2400,
    },
    {
        name: 'Friday',
        uv: 278,
        pv: 3908,
        amt: 2400,
    },
    {
        name: 'Saturday',
        uv: 189,
        pv: 4800,
        amt: 2400,
    },
    {
        name: 'Sunday',
        uv: 300,
        pv: 4800,
        amt: 2400,
    }
];

const margin = {
    top: 20,
    right: 0,
    left: 0,
    bottom: 5,
};
// #endregion

const formatAxisTick = (value) => {
    return `${value}`;
};

const renderCustomBarLabel = ({ x, y, width, value }) => {
    return <text x={x + width / 2} y={y} fill="#fff" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};

export function CustomizeLabels() {
    return (
        <div className=" flex justify-center items-center w-[750px] py-5 border rounded-4xl border-gray-200 bg-gray-500/50 ">
            <BarChart fill="#fff" width={700} height={400} data={ChartData} margin={margin}>
                <XAxis
                    stroke="#fff"
                    dataKey="name"
                    tickFormatter={formatAxisTick}
                    label={{fill:"#fff", position: 'insideBottomRight', value: '', offset: -10 }}
                />
                <YAxis stroke="#fff" label={{fill:"#fff", position: 'insideTopLeft', value: '', angle: -90, dy: 60 }} />
                <Bar dataKey="uv" fill="#E1D9BC" /> {/*label={renderCustomBarLabel}*/}
            </BarChart>
        </div>
    );
}


const PieGradient = (props) => {
    return (
        <>
            <defs>
                <radialGradient
                    id={`fillGradient${props.index}`}
                    cx={props.cx}
                    cy={props.cy}
                    r={props.outerRadius}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0} />
                    <stop offset="100%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0.8} />
                </radialGradient>
                <radialGradient
                    id={`borderGradient${props.index}`}
                    cx={(typeof props.width === 'number' ? props.width : 0) / 2}
                    cy={(typeof props.height === 'number' ? props.height : 0) / 2}
                >
                    <stop offset="0%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0} />
                    <stop offset="100%" stopColor={COLORS[props.index % COLORS.length]} stopOpacity={0.8} />
                </radialGradient>
                <clipPath id={`clipPath${props.index}`}>
                    <Sector {...props} />
                </clipPath>
            </defs>
            <Sector
                {...props}
                clipPath={`url(#clipPath${props.index})`}
                fill={`url(#fillGradient${props.index})`}
                stroke={`url(#borderGradient${props.index})`}
                strokeWidth={props.isActive ? '100%' : 10}
            />
        </>
    );
};
export function PieWithGradient({
        isAnimationActive = true,
        defaultIndex,
        }) {
    return (
        <PieChart style={{backgroundColor:'rgba(106,114,130,0.5)',border: '2px solid #e5e7eb',borderRadius:'10%',width: '100%', maxWidth: '400px', maxHeight: '38vh', aspectRatio: 1 }} responsive>
            <Pie cx="41%" cy="41%" data={pieData} dataKey="value" isAnimationActive={isAnimationActive} shape={PieGradient} innerRadius="15%" />
            <Tooltip defaultIndex={defaultIndex} />
        </PieChart>
    );
}


//new set off chart components for the statistics page

const moneyData = [
    { name: 'RealEstate', value: 400 },
    { name: 'Liabilities', value: 300 },
    { name: 'Other Assets', value: 300 },
    { name: 'Overall Profit', value: 200 },
];
export default function SimplePie() {
    return (
        <div className="w-fit h-fit flex items-center justify-center flex-wrap">
            <div className="">
                <ResponsiveContainer width={500} height={435} >
                    <PieChart>
                        <Pie
                            data={moneyData}
                            cx="40%"
                            cy="40%"
                            labelLine={false}
                            outerRadius={160}
                            innerRadius={50}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {moneyData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-col">
                <div className=" w-full">
                    <ResponsiveContainer width={210} height={210} >
                        <PieChart>
                            <Pie
                                data={moneyData}
                                cx="42%"
                                cy="42%"
                                labelLine={false}
                                outerRadius={60}
                                innerRadius={10}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {moneyData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="w-full">
                    <ResponsiveContainer width={210} height={210} >
                        <PieChart>
                            <Pie
                                data={moneyData}
                                cx="42%"
                                cy="42%"
                                labelLine={false}
                                outerRadius={60}
                                innerRadius={10}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {moneyData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
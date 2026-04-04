import { Bar, BarChart, XAxis, YAxis, Pie, PieChart, Sector, Tooltip } from 'recharts';


const pieData = [
    { name: 'Category A', value: 500 },
    { name: 'Category B', value: 1000 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// #region Sample data
const data = [
    {
        name: 'Page A',
        uv: 400,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 300,
        pv: 4567,
        amt: 2400,
    },
    {
        name: 'Page C',
        uv: 300,
        pv: 1398,
        amt: 2400,
    },
    {
        name: 'Page D',
        uv: 200,
        pv: 9800,
        amt: 2400,
    },
    {
        name: 'Page E',
        uv: 278,
        pv: 3908,
        amt: 2400,
    },
    {
        name: 'Page F',
        uv: 189,
        pv: 4800,
        amt: 2400,
    },
];

const margin = {
    top: 20,
    right: 30,
    left: 20,
    bottom: 25,
};
// #endregion

const formatAxisTick = (value) => {
    return `${value}`;
};

const renderCustomBarLabel = ({ x, y, width, value }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
};

export function CustomizeLabels() {
    return (
        <BarChart width={600} height={300} data={data} margin={margin}>
            <XAxis
                dataKey="name"
                tickFormatter={formatAxisTick}
                label={{ position: 'insideBottomRight', value: 'XAxis title', offset: -10 }}
            />
            <YAxis label={{ position: 'insideTopLeft', value: 'YAxis title', angle: -90, dy: 60 }} />
            <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
        </BarChart>
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
                strokeWidth={props.isActive ? '100%' : 0}
            />
        </>
    );
};
export function PieWithGradient({
        isAnimationActive = true,
        defaultIndex,
        }) {
    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie data={pieData} dataKey="value" isAnimationActive={isAnimationActive} shape={PieGradient} innerRadius="20%" />
            <Tooltip defaultIndex={defaultIndex} />
        </PieChart>
    );
}

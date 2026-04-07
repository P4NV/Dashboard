import { Bar, BarChart, XAxis, YAxis, Pie, PieChart, Sector, Tooltip } from 'recharts';


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
    right: 10,
    left: 10,
    bottom:10,
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
                <Bar dataKey="uv" fill="#E1D9BC" label={renderCustomBarLabel} />
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
        <PieChart style={{backgroundColor:'rgba(106,114,130,0.5)',border: '2px solid #e5e7eb',borderRadius:'20%',width: '100%', maxWidth: '400px', maxHeight: '38vh', aspectRatio: 1 }} responsive>
            <Pie data={pieData} dataKey="value" isAnimationActive={isAnimationActive} shape={PieGradient} innerRadius="20%" />
            <Tooltip defaultIndex={defaultIndex} />
        </PieChart>
    );
}

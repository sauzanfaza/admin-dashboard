import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { topSales } from "../data/data";

export default function TopSales() {
    const sortedData = [...topSales]
    .sort((a, b) => b.unitsSold - a.unitsSold)
    .slice(0, 10);

    return (
    <div className="bg-white lg:py-8 xl:py-11 my-4 mx-3 rounded-md shadow-md p-4 focus:outline-none">
        <h1 className="font-semibold md:text-lg xl:text-4xl mb-4  xl:mx-4 xl:mb-14 xl:mt-2">Top 10 Sales</h1>
        <div className="">
            <ResponsiveContainer width="100%" height={600}>
            <BarChart
                data={sortedData}
                layout="vertical"
                margin={{ top: 10, right:40, left:0,  bottom: 10 }}
            >
            <XAxis type="number" />
            <YAxis dataKey="product" type="category" width={80} tick={{ fontSize: 10 }} />
            <Tooltip cursor={{ fill: "transparent" }}/>
            <Bar
                dataKey="unitsSold"
                fill="#4ade80"
                radius={[0, 8, 8, 0]}
                activeBar={<></>} //coba matiin outline tpi blom bisa
            >
                <LabelList dataKey="unitsSold" position="right" style={{ fontSize: 10, fill: "black" }} />
            </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
    );
}

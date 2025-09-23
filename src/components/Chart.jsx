import { revenueData } from "../data/data";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function Chart() {
    return (
        <div className="py-2">
            <div className="grid grid-cols-2 gap-6">
            <div className="py-2 bg-white rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4 px-4">Revenue Over Time</h2>
            <div className="px-2 focus:outline-none">
            <ResponsiveContainer width="100%" height={150}>
                <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 10}} />
                <YAxis 
                    tick={{ fontSize: 10}}
                    tickFormatter={(value) => value.toLocaleString()}
                />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#6D94C5" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
                <h1>Another components soon</h1>
                <p>Soon i promise, i wont be lazy and said "tomorrow" haha</p>
            </div>
            </div>
        </div>
    );
}
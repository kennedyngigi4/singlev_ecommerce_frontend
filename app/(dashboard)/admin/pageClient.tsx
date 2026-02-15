"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import {
    ComposedChart,
    Bar,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

interface PageClientProps {
    stats: any;
}

const chartConfig = {
    orders: { label: "Orders", color: "#3b82f6" },
    payments: { label: "Payments (KSh)", color: "#22c55e" },
} satisfies ChartConfig;

const PageClient = ({ stats }: PageClientProps) => {
    // Prepare chart data
    const data = stats.labels.map((label: any, i: any) => ({
        date: label,
        orders: stats.latest_orders_data[i],
        payments: stats.latest_payments_data[i],
    }));

    return (
        <div className="flex flex-col space-y-5">
            {/* Top stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <Card>
                    <CardContent>
                        <CardTitle>{stats.users_count}</CardTitle>
                        <CardDescription>Users</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>{stats.products_count}</CardTitle>
                        <CardDescription>Products</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>{stats.orders_count}</CardTitle>
                        <CardDescription>Orders</CardDescription>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <CardTitle>{stats.total_sales.toLocaleString()}</CardTitle>
                        <CardDescription>Total Amount (KSh)</CardDescription>
                    </CardContent>
                </Card>
            </div>

            {/* Chart */}
            <ChartContainer config={chartConfig} className="min-h-[350px] w-full bg-white pt-8">
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={data} margin={{ top: 60, right: 30, left: 20, bottom: 80 }}>
                        {/* Chart title */}
                        <text
                            x="50%"
                            y={0}
                            textAnchor="middle"
                            dominantBaseline="hanging"
                            style={{ fontSize: 18, fontWeight: 600 }}
                        >
                            Orders & Payments (Last 30 Days)
                        </text>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="date"
                            angle={-45} 
                            textAnchor="end"
                            height={80} 
                        />
                        <YAxis
                            yAxisId="left"
                            label={{ value: "Orders", angle: -90, position: "insideLeft" }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            label={{ value: "Payments (KSh)", angle: -90, position: "insideRight" }}
                        />
                        <Tooltip
                            formatter={(value, name) => {
                                if (name === "payments") return [`KSh ${Number(value).toLocaleString()}`, name];
                                return [value, name];
                            }}
                        />
                        <Legend />
                        <Bar yAxisId="left" dataKey="orders" fill="#3b82f6" radius={4} />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="payments"
                            stroke="#22c55e"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </ChartContainer>
        </div>
    );
};

export default PageClient;

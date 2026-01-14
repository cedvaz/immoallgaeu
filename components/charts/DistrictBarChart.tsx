"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";

interface District {
  name: string;
  avgPrice: string;
  trend: string;
}

interface DistrictBarChartProps {
  data: District[];
  title?: string;
}

export default function DistrictBarChart({
  data,
  title,
}: DistrictBarChartProps) {
  // Transform data for chart
  const chartData = data.map((district) => ({
    name: district.name,
    price: parseInt(district.avgPrice.replace(".", "")),
    trend: district.trend,
  }));

  // Calculate average price
  const avgPrice =
    chartData.reduce((sum, d) => sum + d.price, 0) / chartData.length;

  // Sort by price (descending)
  chartData.sort((a, b) => b.price - a.price);

  // Color scale - highest price = darkest green
  const getBarColor = (price: number) => {
    const maxPrice = Math.max(...chartData.map((d) => d.price));
    const minPrice = Math.min(...chartData.map((d) => d.price));
    const range = maxPrice - minPrice;
    const position = (price - minPrice) / range;

    // Gradient from light to dark green
    if (position > 0.66) return "#16a34a"; // primary-600
    if (position > 0.33) return "#22c55e"; // primary-500
    return "#4ade80"; // primary-400
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-medium border border-gray-200">
          <p className="font-bold text-gray-900">{data.name}</p>
          <p className="text-primary-600 font-semibold">
            {data.price.toLocaleString("de-DE")} €/m²
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Trend: {data.trend === "↑" ? "Steigend" : "Stabil"}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      )}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            type="number"
            domain={[3500, 5000]}
            stroke="#6b7280"
            style={{ fontSize: "12px" }}
            tickFormatter={(value) => `${value.toLocaleString("de-DE")} €`}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={100}
            stroke="#6b7280"
            style={{ fontSize: "12px" }}
          />
          <Tooltip content={<CustomTooltip />} />

          {/* Average line */}
          <ReferenceLine
            x={avgPrice}
            stroke="#f97316"
            strokeDasharray="5 5"
            strokeWidth={2}
            label={{
              value: "Ø Kempten",
              position: "top",
              fill: "#f97316",
              fontSize: 12,
              fontWeight: "bold",
            }}
          />

          <Bar dataKey="price" radius={[0, 8, 8, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry.price)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Info text */}
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>
          Durchschnittspreis Kempten:{" "}
          <span className="font-semibold text-primary-600">
            {Math.round(avgPrice).toLocaleString("de-DE")} €/m²
          </span>
        </p>
      </div>
    </div>
  );
}

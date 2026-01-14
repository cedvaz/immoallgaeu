"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";

interface DataPoint {
  year?: string;
  period?: string;
  price: number;
  isForecast: boolean;
  lowerBound?: number;
  upperBound?: number;
  confidence?: string;
}

interface PriceLineChartProps {
  data: DataPoint[];
  showConfidenceBand?: boolean;
  title?: string;
}

export default function PriceLineChart({
  data,
  showConfidenceBand = false,
  title,
}: PriceLineChartProps) {
  // Format data for display
  const formattedData = data.map((point) => ({
    ...point,
    label: point.year || point.period || "",
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-medium border border-gray-200">
          <p className="font-bold text-gray-900">{data.label}</p>
          <p className="text-primary-600 font-semibold">
            {data.price.toLocaleString("de-DE")} €/m²
          </p>
          {data.isForecast && (
            <p className="text-xs text-gray-500 mt-1">
              {data.confidence && `Konfidenz: ${data.confidence}`}
            </p>
          )}
          {showConfidenceBand && data.lowerBound && data.upperBound && (
            <p className="text-xs text-gray-500">
              Spanne: {data.lowerBound.toLocaleString("de-DE")} -{" "}
              {data.upperBound.toLocaleString("de-DE")} €/m²
            </p>
          )}
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
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="label"
            stroke="#6b7280"
            style={{ fontSize: "12px" }}
          />
          <YAxis
            domain={[3000, 5500]}
            stroke="#6b7280"
            style={{ fontSize: "12px" }}
            tickFormatter={(value) => `${value.toLocaleString("de-DE")} €`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />

          {/* Confidence band (if enabled) */}
          {showConfidenceBand && (
            <>
              <Area
                type="monotone"
                dataKey="upperBound"
                stroke="none"
                fill="#e0f2fe"
                fillOpacity={0.3}
                name="Konfidenzbereich"
              />
              <Area
                type="monotone"
                dataKey="lowerBound"
                stroke="none"
                fill="#e0f2fe"
                fillOpacity={0.3}
              />
            </>
          )}

          {/* Price line - solid for historical, dashed for forecast */}
          <Line
            type="monotone"
            dataKey="price"
            stroke="#0284c7"
            strokeWidth={3}
            dot={(props: any) => {
              const { cx, cy, payload } = props;
              return (
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill={payload.isForecast ? "#38bdf8" : "#0284c7"}
                  stroke="white"
                  strokeWidth={2}
                />
              );
            }}
            name="Preis/m²"
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-secondary-600"></div>
          <span className="text-gray-600">Historisch</span>
        </div>
        {showConfidenceBand && (
          <>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-0.5 bg-secondary-400"
                style={{ borderTop: "2px dashed #38bdf8" }}
              ></div>
              <span className="text-gray-600">Prognose</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-3 bg-secondary-100 opacity-50"></div>
              <span className="text-gray-600">Konfidenzbereich</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

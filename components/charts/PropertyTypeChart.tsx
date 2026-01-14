"use client";

interface PropertyType {
  type: string;
  price: string;
}

interface PropertyTypeChartProps {
  data: PropertyType[];
  title?: string;
}

export default function PropertyTypeChart({
  data,
  title,
}: PropertyTypeChartProps) {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      )}

      <div className="space-y-4">
        {data.map((item, idx) => {
          // Parse price range
          const priceStr = item.price.replace(/\s/g, "");
          const [minStr, maxStr] = priceStr.split("-");
          const min = parseInt(minStr.replace(".", ""));
          const max = parseInt(maxStr.replace(".", ""));
          const avg = (min + max) / 2;

          // Calculate percentage for visual bar (scale: 3000-6000 €/m²)
          const minPercent = ((min - 3000) / (6000 - 3000)) * 100;
          const maxPercent = ((max - 3000) / (6000 - 3000)) * 100;
          const avgPercent = ((avg - 3000) / (6000 - 3000)) * 100;

          // Icon based on property type
          const getIcon = (type: string) => {
            if (type.includes("Einfamilienhaus")) {
              return (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              );
            } else if (type.includes("Reihenhaus") || type.includes("Doppel")) {
              return (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              );
            } else {
              return (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              );
            }
          };

          return (
            <div
              key={idx}
              className="card p-5 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">
                      {item.type}
                    </span>
                    <span className="font-bold text-primary-600">
                      {item.price} €/m²
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual price range bar */}
              <div className="relative w-full bg-gray-200 rounded-full h-3">
                {/* Range bar */}
                <div
                  className="absolute bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500 h-3 rounded-full"
                  style={{
                    left: `${minPercent}%`,
                    width: `${maxPercent - minPercent}%`,
                  }}
                />
                {/* Average marker */}
                <div
                  className="absolute w-1 h-5 bg-accent-600 rounded-full -top-1"
                  style={{ left: `${avgPercent}%` }}
                  title={`Durchschnitt: ${Math.round(avg).toLocaleString("de-DE")} €/m²`}
                />
              </div>

              {/* Scale labels */}
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>3.000 €</span>
                <span className="text-accent-600 font-semibold">
                  Ø {Math.round(avg).toLocaleString("de-DE")} €
                </span>
                <span>6.000 €</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-12 h-3 bg-gradient-to-r from-primary-400 to-secondary-500 rounded"></div>
            <span>Preisspanne</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-accent-600 rounded"></div>
            <span>Durchschnitt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

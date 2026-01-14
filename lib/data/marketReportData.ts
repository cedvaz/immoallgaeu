// Kempten Market Report Data
// Historical data 2020-2025 + Forecasts Q1-Q4 2026 + 2027

export const kemptenHistoricalData = [
  { year: "2020", price: 3570, isForecast: false },
  { year: "2021", price: 3822, isForecast: false },
  { year: "2022", price: 3990, isForecast: false },
  { year: "2023", price: 4116, isForecast: false },
  { year: "2024", price: 4200, isForecast: false },
  { year: "2025", price: 4376, isForecast: true },
];

export const kemptenForecastData = [
  {
    period: "Q1 2026",
    price: 4155,
    confidence: "high" as const,
    lowerBound: 3947,
    upperBound: 4363,
    isForecast: true
  },
  {
    period: "Q2 2026",
    price: 4279,
    confidence: "high" as const,
    lowerBound: 4065,
    upperBound: 4493,
    isForecast: true
  },
  {
    period: "Q3 2026",
    price: 4364,
    confidence: "medium" as const,
    lowerBound: 3928,
    upperBound: 4800,
    isForecast: true
  },
  {
    period: "Q4 2026",
    price: 4357,
    confidence: "medium" as const,
    lowerBound: 3921,
    upperBound: 4793,
    isForecast: true
  },
  {
    period: "2027",
    price: 4439,
    confidence: "low" as const,
    lowerBound: 3773,
    upperBound: 5105,
    isForecast: true
  },
];

// Combined data for charts that show both historical and forecast
export const kemptenCombinedData = [
  ...kemptenHistoricalData,
  ...kemptenForecastData,
];

// Investment example calculation
export const kemptenInvestmentExample = {
  purchasePrice: 340000,
  additionalCosts: 27200, // ~8% (Grunderwerbsteuer, Notar, Makler)
  totalInvestment: 367200,
  monthlyRent: 1000,
  annualRent: 12000,
  grossReturn: 3.5, // (12000 / 340000) * 100
  netReturn: 2.5,   // After costs (maintenance, vacancy, management)
};

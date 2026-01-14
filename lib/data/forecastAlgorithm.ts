// Forecast calculation utilities for market reports

/**
 * Seasonal multipliers for quarterly forecasts
 * Based on typical German real estate market patterns
 */
export const seasonalMultipliers = {
  Q1: 0.98,  // Winter slowdown - fewer buyers, lower activity
  Q2: 1.02,  // Spring buying season - highest activity
  Q3: 1.01,  // Summer stability - moderate activity
  Q4: 0.99,  // Year-end cooldown - pre-holiday slowdown
};

/**
 * Confidence margins for forecast accuracy
 * Increases as time horizon extends
 */
export const confidenceMargins = {
  high: 0.05,   // ±5% for near-term (0-6 months)
  medium: 0.10, // ±10% for mid-term (6-12 months)
  low: 0.15,    // ±15% for long-term (12+ months)
};

/**
 * Calculate confidence bounds for a forecast price
 * @param forecastPrice The predicted price
 * @param confidence Confidence level (high, medium, low)
 * @returns Object with lower and upper bounds
 */
export function calculateConfidenceBounds(
  forecastPrice: number,
  confidence: "high" | "medium" | "low"
): { lower: number; upper: number } {
  const margin = confidenceMargins[confidence];
  return {
    lower: Math.round(forecastPrice * (1 - margin)),
    upper: Math.round(forecastPrice * (1 + margin)),
  };
}

/**
 * Generate quarterly forecast from annual growth rate
 * @param basePrice Current price
 * @param annualGrowthRate Expected annual growth (e.g., 0.042 for 4.2%)
 * @param quarter Quarter number (1-4)
 * @returns Forecasted price for that quarter
 */
export function generateQuarterlyForecast(
  basePrice: number,
  annualGrowthRate: number,
  quarter: 1 | 2 | 3 | 4
): number {
  const quarterlyGrowth = annualGrowthRate / 4; // Distribute annual growth across quarters
  const quarterKey = `Q${quarter}` as keyof typeof seasonalMultipliers;
  const seasonalFactor = seasonalMultipliers[quarterKey];

  const forecastPrice = basePrice * (1 + quarterlyGrowth) * seasonalFactor;
  return Math.round(forecastPrice);
}

/**
 * Format confidence level for display
 */
export function formatConfidenceLevel(confidence: "high" | "medium" | "low"): string {
  const labels = {
    high: "Hoch (±5%)",
    medium: "Mittel (±10%)",
    low: "Niedrig (±15%)",
  };
  return labels[confidence];
}

export default function TrustBar() {
  const stats = [
    { value: "500+", label: "Bewertungen durchgeführt" },
    { value: "15+", label: "Jahre Erfahrung" },
    { value: "100%", label: "Kostenlos & unverbindlich" },
  ];

  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

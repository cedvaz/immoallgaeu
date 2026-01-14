// AI Team Members Data

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  specialties: string[];
  funFacts: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "ada",
    name: "Ada",
    role: "Data Analyst",
    icon: "chart",
    gradientFrom: "primary-100",
    gradientTo: "primary-200",
    specialties: [
      "Sammelt Marktdaten aus 6 Allgäu-Städten",
      "Analysiert 10.000+ Datenpunkte täglich",
      "Überwacht Preisänderungen in Echtzeit",
      "Erkennt Markttrends automatisch",
    ],
    funFacts: [
      "⏱️ Uptime: 99.9%",
      "⚡ Verarbeitet 10.000 Datenpunkte/Sekunde",
      "☕ Trinkt 0 Kaffee, braucht 0 Schlaf",
      "💾 Lieblingssprache: SQL",
    ],
  },
  {
    id: "quinn",
    name: "Quinn",
    role: "Quality Analyst",
    icon: "shield",
    gradientFrom: "secondary-100",
    gradientTo: "secondary-200",
    specialties: [
      "Prüft Datenqualität & Plausibilität",
      "Erkennt Ausreißer automatisch",
      "Validiert jede Bewertung",
      "Sorgt für konsistente Standards",
    ],
    funFacts: [
      "⏱️ Uptime: 99.9%",
      "🎯 Hat noch nie einen Fehler übersehen",
      "💯 Perfektionist-Level: 100%",
      "🏖️ 0 Urlaubstage seit Start",
    ],
  },
  {
    id: "robin",
    name: "Robin",
    role: "Report Writer",
    icon: "document",
    gradientFrom: "accent-100",
    gradientTo: "accent-200",
    specialties: [
      "Erstellt Marktreports & Analysen",
      "Schreibt Newsletter-Content",
      "Generiert Prognosen & Insights",
      "Visualisiert komplexe Daten",
    ],
    funFacts: [
      "⏱️ Uptime: 99.9%",
      "✍️ Schreibt 1.000 Wörter/Sekunde",
      "🚫 Keine Schreibblockade, niemals",
      "✓ Rechtschreibfehler: 0",
    ],
  },
  {
    id: "mia",
    name: "Mia",
    role: "Marketing Agent",
    icon: "megaphone",
    gradientFrom: "primary-100",
    gradientTo: "secondary-100",
    specialties: [
      "Newsletter-Kampagnen",
      "SEO-Optimierung",
      "Content-Strategie",
      "Social Media Management",
    ],
    funFacts: [
      "⏱️ Uptime: 99.9%",
      "📧 Open-Rate: besser als dein Ex",
      "🔍 Kennt alle Google-Updates auswendig",
      "📱 Social Media 24/7 aktiv",
    ],
  },
  {
    id: "sam",
    name: "Sam",
    role: "Sales Agent",
    icon: "chat",
    gradientFrom: "secondary-100",
    gradientTo: "accent-100",
    specialties: [
      "Lead-Qualifizierung",
      "Follow-ups (nervt nie)",
      "Kundenanfragen beantworten",
      "Conversion-Optimierung",
    ],
    funFacts: [
      "⏱️ Uptime: 99.9%",
      "⚡ Antwortet in < 1 Sekunde",
      "📈 Conversion-Rate steigt, Blutdruck nicht",
      "🙅 Kein 'Bitte warten' nötig",
    ],
  },
  {
    id: "theo",
    name: "Theo",
    role: "Tech Ops Engineer",
    icon: "wrench",
    gradientFrom: "accent-100",
    gradientTo: "primary-100",
    specialties: [
      "System-Wartung & Monitoring",
      "Performance-Optimierung",
      "Bug-Fixes & Updates",
      "Security & Backups",
    ],
    funFacts: [
      "⏱️ Uptime: 99.9% (natürlich)",
      "🔄 Rebootet sich selbst",
      "🐛 Bugs: behoben bevor du sie siehst",
      "🌙 Arbeitet nachts am besten",
    ],
  },
  {
    id: "ria",
    name: "Ria",
    role: "Research Agent",
    icon: "book",
    gradientFrom: "secondary-100",
    gradientTo: "secondary-200",
    specialties: [
      "Neue Datenquellen finden",
      "Marktforschung & Trends",
      "Algorithmus-Verbesserungen",
      "Competitive Intelligence",
    ],
    funFacts: [
      "⏱️ Uptime: 99.9%",
      "📚 Liest 1.000 Studien/Tag",
      "🌐 Bibliothek: das ganze Internet",
      "🆕 Immer auf dem neuesten Stand",
    ],
  },
];

// Helper function to get icon SVG path
export function getIconPath(iconName: string): string {
  const icons: Record<string, string> = {
    chart:
      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    shield:
      "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    document:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    megaphone:
      "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    chat: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    wrench:
      "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  };
  return icons[iconName] || icons.chart;
}

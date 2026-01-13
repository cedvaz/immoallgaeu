import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – ImmoAllgäu",
  description: "Impressum und Kontaktdaten von ImmoAllgäu",
};

export default function ImpressumPage() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="prose prose-lg max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>WEH Immobilien</strong><br />
            [Ihr Name / Firmenname]<br />
            Musterstraße 123<br />
            87435 Kempten (Allgäu)
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 831 / 123 456-78<br />
            E-Mail: info@immoallgaeu.com
          </p>

          <h2>Vertreten durch</h2>
          <p>
            [Ihr Name]<br />
            [Geschäftsführer / Inhaber]
          </p>

          <h2>Registereintrag</h2>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: [Amtsgericht]<br />
            Registernummer: [HRB-Nummer]
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            DE [Ihre USt-IdNr.]
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Immobilienmakler<br />
            Zuständige Kammer: [IHK für München und Oberbayern]<br />
            Verliehen in: Deutschland
          </p>

          <h2>Aufsichtsbehörde</h2>
          <p>
            [Zuständige Behörde]<br />
            [Adresse der Behörde]
          </p>

          <h2>Angaben zur Berufs­haftpflicht­versicherung</h2>
          <p>
            Name und Sitz des Versicherers:<br />
            [Name der Versicherung]<br />
            [Adresse]
          </p>
          <p>
            Geltungsraum der Versicherung: Deutschland
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>
            [Ihr Name]<br />
            [Adresse]
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucher­streit­beilegung / Universal­schlichtungs­stelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
            zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">e-recht24.de</a>
          </p>
        </div>
      </div>
    </main>
  );
}

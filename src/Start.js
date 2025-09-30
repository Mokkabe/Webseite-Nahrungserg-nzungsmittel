import React from "react";

const features = [
  { title: "Verdauung", icon: "🍽️" },
  { title: "Gelenke", icon: "🦴" },
  { title: "Immunsystem", icon: "🛡️" },
  { title: "Haut & Fell", icon: "✨" },
  { title: "Vitalität", icon: "⚡" },
  { title: "Hautstoffwechsel", icon: "🔥" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 mt-10">
      {/* HERO */}
      <section className="relative h-[300px] flex items-center justify-center text-center text-white">
        <img
          src="/gallery/dog1.jpg"
          alt="Hund"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Nahrungsergänzungsmittel für Hunde
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-base text-white/90">
            Klar erklärt – für Gesundheit, Vitalität und Wohlbefinden.
          </p>
        </div>
      </section>

      {/* Zweites Bild */}
      <section className="max-w-2xl mx-auto px-20 py-20">
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img
            src="/gallery/Whoopy.png"
            alt="Hund 2"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* Features-Sektion */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-20">
          Wie möchtest du deine Fellnase unterstützen?
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center w-28"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-blue-100 text-3xl shadow">
                {f.icon}
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700">
                {f.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">
          Futter im Vergleich
        </h2>

        <div className="overflow-x-auto shadow rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-700 bg-white">
            <thead className="bg-blue-100 text-gray-900">
              <tr>
                <th className="px-4 py-3">Merkmal</th>
                <th className="px-4 py-3">Standard Futter</th>
                <th className="px-4 py-3">PfotenPlus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Proteinquelle</td>
                <td className="px-4 py-3">Unklar, oft Nebenprodukte</td>
                <td className="px-4 py-3">100% deklariertes Fleisch</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-3 font-medium">Zusatzstoffe</td>
                <td className="px-4 py-3">Künstliche Aromen & Farbstoffe</td>
                <td className="px-4 py-3">Natürlich, ohne Zusätze</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">Vitamine</td>
                <td className="px-4 py-3">Nur Basisversorgung</td>
                <td className="px-4 py-3">Optimiert für Immunsystem</td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="px-4 py-3 font-medium">Verdaulichkeit</td>
                <td className="px-4 py-3">Mittel</td>
                <td className="px-4 py-3">Sehr hoch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Text links – Bild rechts */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Textblock links */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Gesunde Ernährung für ein langes Hundeleben
          </h2>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
            Mit ausgewählten Zutaten, natürlichen Vitaminen und ohne künstliche
            Zusätze unterstützen wir die Vitalität deiner Fellnase. So bleibt
            sie aktiv, gesund und glücklich – jeden Tag.
          </p>
          <a
            href="#produkte"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Jetzt entdecken
          </a>
        </div>

        {/* Bildblock rechts */}
        <div className="flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img
            src="/gallery/dog3.jpg"
            alt="Hund 3"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    </main>
  );
}

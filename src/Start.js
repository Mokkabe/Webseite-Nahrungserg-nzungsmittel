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

      {/* Features-Sektion: NEU */}
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
    </main>
  );
}

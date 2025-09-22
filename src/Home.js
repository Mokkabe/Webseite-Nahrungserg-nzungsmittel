import React from "react";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <section>
        <h2 className="mb-4 text-center text-xl font-semibold">
          Nahrungsergänzungsmittel für Hunde: Was braucht ein Hund wirklich?
        </h2>

        <p className="mb-4 text-center text-xl">
          Als verantwortungsbewusster Hundebesitzer möchtest du natürlich nur das Beste für deinen Liebling
          und stehst womöglich irgendwann vor der Entscheidung: Nahrungsergänzungsmittel für meinen Hund – ja
          oder nein? Bei diesem Thema scheiden sich die Geister. Während der eine Hundebesitzer auf verschiedene
          Zusätze im Futter seines Vierbeiners schwört, hält der nächste die Zugabe von Vitaminen, Mineralien
          und Co. für unnötig. Der Versuch, sich selbst ein Bild zu machen, scheitert oftmals an schierer
          Überforderung, denn die Informationsflut ist riesig und das Thema ziemlich kompliziert.
        </p>

        <h2 className="mb-8 text-xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl lg:text-3xl text-center">
          Hochwertige Vitamine, Mineralstoffe &amp; Co für Hunde
        </h2>
      </section>

      <section>
        <h2 className="mb-4 text-center text-xl font-semibold">Bilder</h2>

        <div className="flex flex-col gap-6">
         
          <figure className="w-full rounded-lg overflow-hidden bg-white shadow">
            <div className="w-full h-40 bg-teal-100">
              <img
                src="/gallery/dog1.jpg"
                alt="Hund 1"
                className="w-full h-full object-contain"
              />
            </div>
            <figcaption className="p-3 text-center">
              <h3 className="text-lg font-semibold">Nie wieder Übergewicht</h3>
              <p className="text-sm text-gray-600">
                Unsere Mokka neigt dazu, schnell zuzunehmen, was uns Sorgen gemacht hat – vor allem,
                weil Übergewicht die Gelenke belastet. Mit **** haben wir endlich eine Lösung gefunden.
              </p>
            </figcaption>
          </figure>

         
          <figure className="w-full rounded-lg overflow-hidden bg-white shadow">
            <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
              Bilder 2
            </div>
            <figcaption className="p-3 text-center text-sm text-gray-600">
              Beschreibung zu Bild 2
            </figcaption>
          </figure>

          <figure className="w-full rounded-lg overflow-hidden bg-white shadow">
            <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
              Bilder 3
            </div>
            <figcaption className="p-3 text-center text-sm text-gray-600">
              Beschreibung zu Bild 3
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

// Importujemy React, bibliotekę do tworzenia interfejsów użytkownika
import React from "react";

// Definiujemy komponent funkcyjny Section, który przyjmuje jako props obiekt z danymi
function Section({ data }) {
  // Renderujemy sekcję
  return (
    <section>
      {/* Mapujemy przez każdy element w tablicy danych */}
      {data.map((item, index) => (
        // Dla każdego elementu tworzymy nowy div z unikalnym kluczem
        <div key={index}>
          {/* Wyświetlamy nazwę elementu jako nagłówek */}
          <h3>{item.name}</h3>
          {/* Wyświetlamy logo elementu jako obrazek */}
          <img
            src={item.logo}
            alt={item.name}
            style={{ width: "200px", height: "200px" }}
          />
          {/* Wyświetlamy tekst elementu jako paragraf */}
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

// Eksportujemy komponent Section, aby mógł być używany w innych plikach
export default Section;

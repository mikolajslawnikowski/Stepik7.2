import React from "react";

function Section({ data }) {
  return (
    <section>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <img
            src={item.logo}
            alt={item.name}
            style={{ width: "200px", height: "200px" }}
          />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Section;

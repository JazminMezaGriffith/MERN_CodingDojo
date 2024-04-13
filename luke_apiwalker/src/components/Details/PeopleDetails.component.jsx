import React from "react";

function PeopleDetails({ data, homeworld }) {
  return (
    <div className="col">
      <h1>{data.name}</h1>
      <p>Height: {data.height}</p>
      <p>Hair color: {data.hair_color}</p>
      <p>Birth year: {data.birth_year}</p>
      {homeworld && <p>Homeworld: {homeworld}</p>}
    </div>
  );
}

export default PeopleDetails;

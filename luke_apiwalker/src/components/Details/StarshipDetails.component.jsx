import React from "react";

const StarshipDetails = ({ data }) => (
    <div className="col">
        <h1>{data.name}</h1>
        <p>Model: {data.model}</p>
        <p>Manufacturer: {data.manufacturer}</p>
        <p>Cost in credits: {data.cost_in_credits}</p>
        <p>Length: {data.length}</p>
    </div>
);

export default StarshipDetails;
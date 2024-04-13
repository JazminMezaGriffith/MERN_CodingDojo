import React from "react";

const FilmDetails = ({ data }) => (
    <div className="col">
        <h1>{data.title}</h1>
        <p>Episode: {data.episode_id}</p>
        <p>Director: {data.director}</p>
        <p>Producer: {data.producer}</p>
        <p>Release date: {data.release_date}</p>
    </div>
);

export default FilmDetails;
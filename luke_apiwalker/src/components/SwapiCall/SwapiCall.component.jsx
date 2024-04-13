import React, { useState, useEffect } from "react";
import axios from 'axios';
import PeopleDetails from '../Details/PeopleDetails.component';
import FilmDetails from '../Details/FilmDetails.component';
import StarshipDetails from '../Details/StarshipDetails.component';
import ErrorMessage from "../ErrorMessage/ErrorMessage.component";

function SwapiCall({ requestData }) {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(`https://swapi.dev/api/${requestData.resource}/${requestData.id}`);
        setDetail(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setDetail(null);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [requestData]);

  if (loading) {
    return <div className="col">Loading...</div>;
  }

  const renderDetails = () => {
    if (error) {
      return <ErrorMessage />;
    }

    if (!detail) return null;

    switch (requestData.resource) {
      case 'people':
        return <PeopleDetails data={detail} />;
      case 'films':
        return <FilmDetails data={detail} />;
      case 'starships':
        return <StarshipDetails data={detail} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderDetails()}
    </div>
  );
}

export default SwapiCall;

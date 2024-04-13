// ForIdSearch.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PeopleDetails from '../Details/PeopleDetails.component';
import ErrorMessage from '../ErrorMessage/ErrorMessage.component';

const UrlSearch = () => {
    const { id } = useParams();
    const [person, setPerson] = useState(null);
    const [homeworld, setHomeworld] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await axios.get(`https://swapi.dev/api/people/${id}`);
                setPerson(response.data);
                const homeworldResponse = await axios.get(response.data.homeworld);
                setHomeworld(homeworldResponse.data.name);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {error ? (
                <ErrorMessage />
            ) : (
                <div>
                    <PeopleDetails data={person} homeworld={homeworld} />
                </div>
            )}
        </div>
    );
};

export default UrlSearch;

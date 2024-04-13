import React, { useState } from "react";
import SwapiCall from "../SwapiCall/SwapiCall.component";

function SearchForm() {
    const [resource, setResource] = useState('people');
    const [id, setId] = useState('');
    const [requestData, setRequestData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleResourceChange = (e) => {
      setResource(e.target.value);
    };

    const handleIdChange = (e) => {
      setId(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (id !== '') {
        setRequestData({ resource, id });
        setErrorMessage('');
      } else {
        setErrorMessage("Id can't be empty");
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit} className="row">
          <div>
            <label htmlFor="resourceSelect">Search for: </label>
            <select id="resourceSelect" value={resource} onChange={handleResourceChange}>
              <option value="people">People</option>
              <option value="films">Films</option>
              <option value="starships">Starships</option>
            </select>
          </div>
          <div>
            <label htmlFor="idInput">Id: </label>
            <input
              id="idInput"
              type="number"
              value={id}
              onChange={handleIdChange}
            />
          </div>
          <button type="submit">Search</button>
        </form>
        {errorMessage && <p className='row'>{errorMessage}</p>}
        {requestData && <SwapiCall requestData={requestData} />}
      </div>
    );
}

export default SearchForm;

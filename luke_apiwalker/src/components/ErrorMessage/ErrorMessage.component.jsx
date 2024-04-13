import React from 'react';
import obiWanImage from '../ErrorMessage/obi-wan.jpg';

const ErrorMessage = () => (
  <div className='col'>
    <h1>These aren't the droids you're looking for</h1>
    <img src={obiWanImage} alt="Obi-Wan Kenobi" id='obi-wan'/>
  </div>
);

export default ErrorMessage;

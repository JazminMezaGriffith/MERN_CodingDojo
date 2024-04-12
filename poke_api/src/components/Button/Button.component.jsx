import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>Fetch Pokemon</button>
  );
};

export default Button;

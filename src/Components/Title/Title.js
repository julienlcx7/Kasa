import React from 'react';

const Title = ({ name, location }) => {
  return (
    <div className='title'>
      <h2>{name}</h2>
      <p>{location}</p>
    </div>
  );
};

export default Title;

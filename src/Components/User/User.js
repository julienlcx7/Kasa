import React from 'react';

const User = ({ name, imageSrc, alt }) => {
  return (
    <div className='id_user'>
      <p>{name}</p>
      <img className='pp' src={imageSrc} alt={alt} />
    </div>
  );
};

export default User;

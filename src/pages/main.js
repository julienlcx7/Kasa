import React from 'react';
import Banner from '../Components/Banner/banner';
import Card from '../Components/Card/Card';
import bg from '../img/bg.jpg'; // Import the image

function Main() {
  const bannerImage = {
    src: bg,
    alt: 'background'
  };

  return (
    <div>
      <Banner image={bannerImage} paragraph="Chez vous, partout et ailleurs" /> 
      <Card />
    </div>
  );
};

export default Main;

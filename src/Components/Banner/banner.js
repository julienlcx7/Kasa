import React from 'react';
import '../Banner/banner.scss'
const Banner = ({ image, paragraph }) => { // Receive both image and paragraph props
  return (
    <div className='banner'>
      <header>
        <img src={image.src} alt={image.alt} /> {/* Use the image prop */}
        <p>{paragraph}</p> {/* Use the paragraph prop */}
      </header>
    </div>
  );
};

export default Banner;

import React, { useState, useEffect }from 'react';
import './Slider.scss';
import { useParams } from 'react-router-dom';
import data from '../../backend/back.json'
import arrow_left from '../../img/arrow_left.png'
import arrow_right from '../../img/arrow_right.png'


function Slider({name_apartment,pictures_apartment}) {
    const { id_url } = useParams();
    let num_logement = 0;

  for (let i = 0; i < data.length; i++) {
    const id_apartment = data[i].id;
    if (id_apartment === id_url) {
      num_logement = i;
      break;
    }
  }
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      // Update the displayed image whenever currentIndex changes
      const img_slider = pictures_apartment[currentIndex];
      document.querySelector('.img_slider').src = img_slider;
    }, [currentIndex]);
  
    const handlePrev = () => {
      // Move to the previous image
      setCurrentIndex((currentIndex) => (currentIndex === 0 ? max_compteur - 1 : currentIndex - 1));
    };
  
    const handleNext = () => {
      // Move to the next image
      setCurrentIndex((currentIndex) => (currentIndex === max_compteur - 1 ? 0 : currentIndex + 1));
    };

    const img_slider = pictures_apartment[currentIndex];
    const max_compteur = pictures_apartment.length;
  
    return (
      <div id="banner">
        <div className='arrow'>
          <img className='arrow_left' src={arrow_left} alt='arrow_left' onClick={handlePrev} />
          <img className='arrow_right' src={arrow_right} alt='arrow_right' onClick={handleNext} />
        </div>
        <img className='img_slider' src={img_slider} alt={name_apartment}/>
        <div className='compteur'>
          <p>{currentIndex + 1}/{max_compteur}</p>
        </div>
      </div>
    );
  }
  
  export default Slider;

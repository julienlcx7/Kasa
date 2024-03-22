import React from 'react';
import './Card.scss';
import data from '../../backend/back.json';
import { Link } from 'react-router-dom';

function getApartmentTitles(data) {
  const titles = [];
  const id = [];
  const aimg = [];
  
  data.forEach(apartment => {
    titles.push(apartment.title);
    id.push(apartment.id);
    aimg.push(apartment.cover);
  });

  return { titles, aimg, id };
}

function Card_apartement(titles, aimg, id) {
  const apartmentElements = [];
  
  for (let i = 0; i < titles.length; i++) {
    const name_apartment = titles[i];
    const img_apartment = aimg[i];
    const id_apartment = id[i];
  
    if (name_apartment && img_apartment) {
      const location = (
        <div key={id_apartment} className="location">
          <Link to={`logement/${id_apartment}`}>
            <img id="img_apartment" src={img_apartment} alt={`Apartment ${i + 1}`} />
            <p>{name_apartment}</p>
          </Link>
        </div>
      );
  
      apartmentElements.push(location);
  
      console.log(name_apartment);
    }
  }
  
  return apartmentElements;
}

function Card() {
  const { titles, aimg, id } = getApartmentTitles(data);
  const apartmentElements = Card_apartement(titles, aimg, id);
  
  return (
    <div className="card">
      <main>
        {apartmentElements}
      </main>
    </div>
  );
}

export default Card;

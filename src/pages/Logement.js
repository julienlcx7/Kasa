import React, { useEffect, useState } from 'react';
import './Logement.scss';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import data from '../backend/back.json';
import Error from '../_utils/Error';
import Dropdown from '../Components/Dropdown/Dropdown';
import Slider from '../Components/Slider/Slider';
import Rating from '../Components/Rating/Rating';
import User from '../Components/User/User';
import Tag from '../Components/Tag/Tag';
import Title from '../Components/Title/Title';

export const Logement = () => {
  const { id_url } = useParams();
  const [logement, setLogement] = useState({});
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          let index = data.findIndex(apartment => apartment.id === id_url);
          if (index === -1) {
            navigate('/error'); 
          } else {
            setLogement(data[index]); 
            setLoading(false); 
          }
        }, 1000); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData(); 
  }, [id_url, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while data is being fetched
  }

  return (
    <div className='logement'>
      <Slider name_apartment={logement.title} pictures_apartment={logement.pictures}/>
      <div className='description'>
        <div className='info_loc'>
          <Title name={logement.title} location={logement.location} /> 
          <Tag tags={logement.tags} />
        </div>
        <div className='info_user'>
          <User name={logement.host.name} imageSrc={logement.host.picture} alt={logement.host.name} /> 
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className='drop_item'>
        <Dropdown title="Description" content={logement.description} />
        {logement.equipments && (
          <Dropdown
            title="Équipements"
            content={logement.equipments.map((equipment, index) => (
              <li className="list" key={index}>{equipment}</li>
            ))}
          />
        )}
      </div>
    </div>
  );
};

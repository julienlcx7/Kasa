import React from 'react';
import './About.scss';
import bg from '../img/bg_about.png';
import Banner from '../Components/Banner/banner';
import Dropdown from '../Components/Dropdown/Dropdown'; 

function About() {
    const bannerImage = {
        src: bg,
        alt: 'background'
    };

    return (
        <div className="about">
            <div className='text_about'>
                <Banner image={bannerImage} paragraph="" /> 
                <Dropdown title="Fiabilité" content="Bienvenue sur Kasa, votre partenaire de confiance pour toutes vos recherches de location immobilière. Nous comprenons que la fiabilité est une priorité absolue lorsqu'il s'agit de trouver le lieu idéal pour appeler chez soi. C'est pourquoi nous nous engageons à vous offrir une expérience de location transparente, sûre et fiable à chaque étape de votre parcours." />
                <Dropdown title="Respect" content="Le respect, valeur fondamentale qui transcende les barrières de l'âge, de la culture et des différences, est le pilier sur lequel s'édifie une société harmonieuse. À Kasa, nous croyons en la puissance transformative du respect et nous nous engageons à cultiver un environnement où chacun est honoré et valorisé." />
                <Dropdown title="Service" content="Découvrez la différence avec Kasa! Des annonces immobilières fiables, un processus transparent, un support réactif. Explorez notre gamme de biens diversifiée. Avec des photos réalistes et des avis authentiques, louez en toute confiance. Simplifiez votre recherche et trouvez la maison parfaite avec nos services exceptionnels." />
                <Dropdown title="Sécurité" content="Notre site garantit une sécurité robuste à chaque clic. Des protocoles avancés de cryptage des données à une surveillance constante, votre confidentialité est notre priorité. Explorez, louez et naviguez en toute tranquillité, sachant que nous sommes engagés à assurer la protection inébranlable de vos informations." />
            </div>
        </div>
    );
}

export default About;

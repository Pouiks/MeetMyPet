import React from 'react';
//Import Components

// Import Css
import './cardLastDog.scss';

const CardLastDog = ({image, name, description, breed,  }) => {
    return(
        <div className="dogCard">
            <div className="card">
                <div className="card-img">
                    <img className="card-img-content" src={(image === null) ? `image/dog3.jpg` : `http://ec2-52-86-71-5.compute-1.amazonaws.com:3001/${image}`} alt="image de profil" />
                </div>
                <div className="card-description">
                    <h3 className="card-name">{name}</h3>
                    <h3 className="card-breed">{breed} </h3>
                    <p className="card-description-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardLastDog;


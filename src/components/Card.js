import React from 'react';
import './Card.css'


const Card = ({ name, email, id }) => {
  return (
    <div className='dib tc w5 h-100 grow bg-light-green br3 pa3 ma2 bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
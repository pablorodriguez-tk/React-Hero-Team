import React from 'react';
import './heroCard.css';

export const HeroCard = ({ id, name, image }) => {
  const handleAddHero = () => {
    console.log('add to team');
  };
  return (
    <div className="my-card" onClick={handleAddHero}>
      <img src={image.url} alt={name} />
      <div className="profile-name">{name}</div>
      <div className="add">Click to add to team</div>
    </div>
  );
};

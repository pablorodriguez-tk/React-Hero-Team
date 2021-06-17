import React from 'react';
import './heroCard.css';
import { useHeroCard } from '../../hooks/useHeroCard';

export const HeroCard = ({
  hasPowerstats,
  cta,
  id,
  name,
  powerstats,
  biography,
  appearance,
  work,
  connections,
  image,
}) => {
  const sendToHeroAdd = {
    id,
    name,
    powerstats,
    biography,
    appearance,
    work,
    connections,
    image,
  };

  const { handleSeeMore, handleDelete, preHandleAddHero } =
    useHeroCard(sendToHeroAdd);

  //Hero Screen
  if (hasPowerstats) {
    return (
      <div
        className="my-card animate__animated animate__fadeIn"
        onClick={() =>
          handleSeeMore({ id, biography, appearance, work, image })
        }
      >
        <img src={image.url} alt={name} />
        <div className="profile-name">{name}</div>
        <div className="profile-orientation">{biography.alignment}</div>
        <div className="profile-overview">
          <div className="row">
            <div className="col-ms-4">
              <h3>Powerstats</h3>
              <p>combat: {powerstats.combat}</p>
              <p>durability: {powerstats.durability}</p>
              <p>intelligence: {powerstats.intelligence}</p>
              <p>power: {powerstats.power}</p>
              <p>speed: {powerstats.speed}</p>
              <p>strength: {powerstats.strength}</p>
            </div>
          </div>
        </div>
        {cta && <div className="add">{cta}</div>}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
          }}
          className="btn btn-outline-danger profile-delete-button"
        >
          Delete
        </button>
      </div>
    );
  }

  //Hero Search Screen
  return (
    <div className="my-card" onClick={preHandleAddHero}>
      <img src={image.url} alt={name} />
      <div className="profile-name">{name}</div>
      <div className="profile-orientation">{biography.alignment}</div>
      {cta && <div className="add">{cta}</div>}
    </div>
  );
};

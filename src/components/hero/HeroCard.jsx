import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './heroCard.css';
import {
  AddedBadHero,
  AddedGoodHero,
  AddedNeutralHero,
} from '../../actions/validation';
import { HeroAdd, HeroId } from '../../actions/heroes';
import { Alert } from '../Alert/Alert';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const { badHero, goodHero, neutralHero } = useSelector(
    (state) => state.validation
  );

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

  const handleAddHero = ({ id, biography }) => {
    const totalHeroes = badHero + goodHero + neutralHero;
    const orientation = biography.alignment;

    // 6 Heroes max
    if (totalHeroes <= 5) {
      if (orientation === 'bad') {
        // 3 Bad Heroes max
        if (badHero <= 2) {
          dispatch(HeroAdd(sendToHeroAdd));
          dispatch(AddedBadHero());
          dispatch(HeroId(id));
        } else {
          Alert(
            'BAD orientation heroes Max',
            'You have reached the maximum number of BAD orientation hero allowed on your team - (MAX: 3 BAD ORIENTATION HEROES)',
            'warning'
          );
        }
      }

      if (orientation === 'good') {
        // 3 Good Heroes max
        if (goodHero <= 2) {
          dispatch(HeroAdd(sendToHeroAdd));
          dispatch(AddedGoodHero());
          dispatch(HeroId(id));
        } else {
          Alert(
            'GOOD orientation heroes Max',
            'You have reached the maximum number of GOOD orientation hero allowed on your team - (MAX: 3 GOOD ORIENTATION HEROES)',
            'warning'
          );
        }
      }

      if (orientation === 'neutral') {
        dispatch(HeroAdd(sendToHeroAdd));
        dispatch(AddedNeutralHero());
        dispatch(HeroId(id));
      }
    } else {
      Alert(
        'Team complete',
        'You have reached the maximum number of heroes allowed on your team. If you want to add another hero you have to delete one first - (MAX: 6 HEROES)',
        'warning'
      );
    }
  };

  const preHandleAddHero = () => handleAddHero(sendToHeroAdd);

  const handleSeeMore = (id) => {
    history.push(`/hero/${id}`);
  };

  return (
    <Link
      to={{
        pathname: `/hero/${id}`,
        state: { biography, appearance, id, work, image },
      }}
    >
      <div
        className="my-card"
        onClick={
          hasPowerstats
            ? () => handleSeeMore(id, biography, appearance, work, image)
            : preHandleAddHero
        }
      >
        <img src={image.url} alt={name} />
        <div className="profile-name">{name}</div>
        <div className="profile-orientation">{biography.alignment}</div>
        {hasPowerstats && (
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
        )}

        {cta && <div className="add">{cta}</div>}
        {/* {hasPowerstats && <button className="btn btn-primary">Delete</button>} */}
      </div>
    </Link>
  );
};

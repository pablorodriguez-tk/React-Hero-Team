import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './heroCard.css';
import {
  AddedBadHero,
  AddedGoodHero,
  AddedNeutralHero,
} from '../../actions/validation';
import { HeroAdd } from '../../actions/heroes';
import { Alert } from '../Alert/Alert';

export const HeroCard = ({ id, name, image, biography }) => {
  const dispatch = useDispatch();
  const { badHero, goodHero, neutralHero } = useSelector(
    (state) => state.validation
  );

  const handleAddHero = (id, biography) => {
    const totalHeroes = badHero + goodHero + neutralHero;
    console.log(totalHeroes);
    const orientation = biography.alignment;
    console.log(orientation);

    // 6 Heroes max
    if (totalHeroes <= 5) {
      if (orientation === 'bad') {
        // 3 Bad Heroes max
        if (badHero <= 2) {
          dispatch(HeroAdd(id, biography.alignment));
          dispatch(AddedBadHero());
        } else {
          Alert(
            'BAD orientation heroes Max',
            'You have reached the maximum number of BAD orientation hero allowed on your team - (MAX: 3 BAD ORIENTATION HEROES)',
            'warning'
          );
        }
      }

      if (orientation === 'good') {
        console.log(goodHero);
        // 3 Good Heroes max
        if (goodHero <= 2) {
          dispatch(HeroAdd(id, biography.alignment));
          dispatch(AddedGoodHero());
        } else {
          Alert(
            'GOOD orientation heroes Max',
            'You have reached the maximum number of GOOD orientation hero allowed on your team - (MAX: 3 GOOD ORIENTATION HEROES)',
            'warning'
          );
        }
      }

      if (orientation === 'neutral') {
        dispatch(HeroAdd(id, biography.alignment));
        dispatch(AddedNeutralHero());
      }
    } else {
      Alert(
        'Team complete',
        'You have reached the maximum number of heroes allowed on your team. If you want to add another hero you have to delete one first - (MAX: 6 HEROES)',
        'warning'
      );
    }
  };

  return (
    <div className="my-card" onClick={() => handleAddHero(id, biography)}>
      <img src={image.url} alt={name} />
      <div className="profile-name">{name}</div>
      <div className="add">Click to add to team</div>
    </div>
  );
};

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
import Swal from 'sweetalert2';

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
  const { heroIds } = useSelector((state) => state.heroes);

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
    const left = 5 - totalHeroes;
    if (!heroIds.includes(id)) {
      if (totalHeroes <= 5) {
        // 6 Heroes max
        if (orientation === 'bad') {
          // 3 Bad Heroes max
          if (badHero <= 2) {
            dispatch(HeroAdd(sendToHeroAdd));
            dispatch(AddedBadHero());
            dispatch(HeroId(id));

            if (left === 0) {
              Alert(
                `${name} added to your team`,
                `Your team is complete`,
                'success'
              );
            } else {
              Alert(
                `${name} added to your team`,
                `You left to add ${left} hero to complete your team`,
                'success'
              );
            }
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
            if (left === 0) {
              Alert(
                `${name} added to your team`,
                `Your team is complete`,
                'success'
              );
            } else {
              Alert(
                `${name} added to your team`,
                `You left to add ${left} hero to complete your team`,
                'success'
              );
            }
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
          if (left === 0) {
            Alert(
              `${name} added to your team`,
              `Your team is complete`,
              'success'
            );
          } else {
            Alert(
              `${name} added to your team`,
              `You left to add ${left} hero to complete your team`,
              'success'
            );
          }
        }
      } else {
        Alert(
          'Team complete',
          'You have reached the maximum number of heroes allowed on your team. If you want to add another hero you have to delete one first - (MAX: 6 HEROES)',
          'warning'
        );
      }
    } else {
      Alert(
        `${name} is already on your team`,
        'Please select another hero',
        'warning'
      );
    }
  };

  const preHandleAddHero = () => handleAddHero(sendToHeroAdd);

  const handleSeeMore = (id) => {
    history.push(`/hero/${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Hero with id:${id} was deleted from your team`);

    Swal.fire({
      title: 'Are you sure?',
      text: `This will delete ${name} from your team!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',

      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your hero has been deleted from your team.',
          'success'
        );
      }
    });
  };

  if (hasPowerstats) {
    return (
      <div
        className="my-card"
        onClick={() => handleSeeMore(id, biography, appearance, work, image)}
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
        <button
          onClick={(e) => {
            e.preventDefault();
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

  if (!hasPowerstats) {
    return (
      <div className="my-card" onClick={preHandleAddHero}>
        <img src={image.url} alt={name} />
        <div className="profile-name">{name}</div>
        <div className="profile-orientation">{biography.alignment}</div>
        {cta && <div className="add">{cta}</div>}
      </div>
    );
  }
};

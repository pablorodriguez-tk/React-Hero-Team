import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { startGetHeroesById } from '../../actions/heroes';

import { HeroCard } from './HeroCard';

export const HeroList = () => {
  const dispatch = useDispatch();

  const { heroIds, heroTeam } = useSelector((state) => state.heroes);

  useEffect(() => {
    const get = () => {
      heroIds.map(async (id) => {
        await dispatch(startGetHeroesById(id));
      });
    };
    get();
  }, [dispatch, heroIds]);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroTeam.map((props) => (
        <HeroCard
          key={props.id}
          hasPowerstats={true}
          cta={'Click to see more'}
          {...props}
        />
      ))}
    </div>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { HeroCard } from './HeroCard';

export const HeroList = () => {
  const { heroTeam } = useSelector((state) => state.heroes);

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

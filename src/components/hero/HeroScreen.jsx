import React from 'react';
import { useSelector } from 'react-redux';
import { HeroList } from './HeroList';

export const HeroScreen = () => {
  const heroTeamIds = useSelector((state) => state.heroes);
  console.log(heroTeamIds);

  return (
    <div>
      <HeroList />
      <hr />
    </div>
  );
};

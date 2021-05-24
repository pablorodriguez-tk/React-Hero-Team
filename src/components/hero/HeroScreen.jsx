import React from 'react';
import { HeroList } from './HeroList';
import { HeroStats } from './HeroStats';

export const HeroScreen = () => {
  return (
    <>
      <h1 className="d-flex justify-content-center" data-testid="heroScreen">
        My hero team
      </h1>
      <HeroStats />
      <HeroList />
    </>
  );
};

import React from 'react';
import { HeroList } from './HeroList';
import { HeroStats } from './HeroStats';

export const HeroScreen = () => {
  return (
    <>
      <HeroStats />
      <HeroList />
    </>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';
import { HeroList } from '../../components/hero/HeroList';
import { HeroStats } from '../../components/hero/HeroStats';

export const HeroScreen = () => {
  const { heroTeam } = useSelector((state) => state.heroes);
  return (
    <>
      <h1
        className="d-flex justify-content-center animate__animated animate__fadeIn"
        data-testid="heroScreen"
      >
        My hero team
      </h1>

      {heroTeam.length > 0 ? (
        <HeroStats />
      ) : (
        <div>
          <hr />
          <h3>instructions</h3>
          <ul>
            <li>
              Go to search page -- You can select up to 6 heroes to build your
              team
            </li>
            <li>
              Maximum 3 heroes of bad orientation and 3 of good orientation
            </li>
          </ul>
        </div>
      )}
      <HeroList />
    </>
  );
};

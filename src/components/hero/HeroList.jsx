import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { heroFetch, startGetHeroesById } from '../../actions/heroes';
import { HeroCard } from './HeroCard';

export const HeroList = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const { heroIds, heroTeam, HeroFetch } = useSelector((state) => state.heroes);

  useEffect(() => {
    const get = () => {
      heroIds.map(async (id) => {
        const data = await dispatch(startGetHeroesById(id));
        let prevState = state;
        let newArray = prevState.push(data);
        setState(newArray);
        dispatch(heroFetch(state));
      });
    };

    //dispatch todos los datos en store

    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {HeroFetch.map((props) => (
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

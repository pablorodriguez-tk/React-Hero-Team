import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { heroFetch, startGetHeroesById } from '../../actions/heroes';
import { HeroCard } from './HeroCard';

export const HeroList = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const { heroIds, heroTeamIds } = useSelector((state) => state.heroes);

  useEffect(() => {
    let mounted = true;

    const get = () => {
      heroIds.map(async (id) => {
        const data = await dispatch(startGetHeroesById(id));

        if (mounted) {
          let prevState = [];
          prevState = state;
          let newArray = prevState.push(data);
          setState(newArray);
          dispatch(heroFetch(state));
        }
      });
      setLoading(false);
    };
    get();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroTeamIds.map((props) => (
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

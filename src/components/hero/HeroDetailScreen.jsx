import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getHeroById } from '../../helpers/fetch';

export const HeroDetailScreen = () => {
  const { pathname } = useLocation();
  const [hero, setHero] = useState();
  const [mounted, setMounted] = useState(true);
  const [loading, setLoading] = useState(true);

  const idFromUrl = pathname.split('/')[2];
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack('/');
  };

  useEffect(() => {
    const get = async () => {
      const data = await getHeroById(idFromUrl);

      if (data.response === 'error') {
        history.push('/');
      }
      if (mounted) {
        setHero(data);
      }
      setLoading(false);
    };

    get();

    return () => {
      setMounted(false);
    };
  }, [idFromUrl, history, mounted]);

  if (loading) return <h1 data-testid="HeroDetailScreen-loading">Loading</h1>;

  const fullName = hero.biography['full-name'];
  const image = hero.image.url;
  const weight = hero.appearance.weight[1];
  const height = hero.appearance.height[1];
  const aliases = hero.biography.aliases.join(' - ');
  const work = hero.work.occupation;
  const eyeColor = hero.appearance['eye-color'];

  return (
    <div
      className="d-flex justify-content-center"
      data-testid="HeroDetailScreen"
    >
      <div className="card mb-3" style={{ maxWidth: '70%' }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img src={image} className="card-img-top" alt={fullName} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2>{fullName}</h2>
              <hr />
              <h6 className="card-title">Alias: {aliases}</h6>
              <hr />
              <p className="card-text">Weight: {weight}</p>
              <hr />
              <p className="card-text">Height: {height}</p>
              <hr />
              <p className="card-text">Work: {work}</p>
              <hr />
              <p className="card-text">Eye color: {eyeColor}</p>
              <hr />
              <p className="d-flex justify-content-end">
                <button onClick={handleGoBack} className="btn btn-primary">
                  Go Back
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

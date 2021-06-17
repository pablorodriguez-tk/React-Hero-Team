import React from 'react';
import { useHeroDetail } from '../../hook/useHeroDetail';

export const HeroDetailScreen = () => {
  const {
    image,
    fullName,
    aliases,
    weight,
    height,
    work,
    eyeColor,
    handleGoBack,
    loading,
  } = useHeroDetail();

  if (loading !== false)
    return <h1 data-testid="HeroDetailScreen-loading">Loading</h1>;

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

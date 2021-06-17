import React from 'react';
import { useHeroDetail } from '../../hooks/useHeroDetail';

export const HeroDetailScreen = (props) => {
  // Props send on click
  const HeroProp = props.location.state;

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
  } = useHeroDetail(HeroProp);

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
            <img
              src={HeroProp ? HeroProp.image.url : image}
              className="card-img-top"
              alt={HeroProp ? HeroProp.biography['full-name'] : fullName}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2>{HeroProp ? HeroProp.biography['full-name'] : fullName}</h2>
              <hr />
              <h6 className="card-title">
                Alias:{' '}
                {HeroProp ? HeroProp.biography.aliases.join(' - ') : aliases}
              </h6>
              <hr />
              <p className="card-text">
                Weight: {HeroProp ? HeroProp.appearance.weight[1] : weight}
              </p>
              <hr />
              <p className="card-text">
                Height: {HeroProp ? HeroProp.appearance.height[1] : height}
              </p>
              <hr />
              <p className="card-text">
                Work: {HeroProp ? HeroProp.work.occupation : work}
              </p>
              <hr />
              <p className="card-text">
                Eye color:{' '}
                {HeroProp ? HeroProp.appearance['eye-color'] : eyeColor}
              </p>
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

import React from 'react';
import { useHistory, useLocation } from 'react-router';

export const HeroDetailScreen = (props) => {
  const { state } = useLocation();

  const id = props.match.params.heroeId;
  const image = state.image.url;
  const fullName = state.biography['full-name'];
  const weight = state.appearance.weight[1];
  const height = state.appearance.height[1];
  const aliases = state.biography.aliases.join(' - ');
  const work = state.work.occupation;
  const eyeColor = state.appearance['eye-color'];

  const history = useHistory();
  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <div className="d-flex justify-content-center">
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
                  GoBack
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

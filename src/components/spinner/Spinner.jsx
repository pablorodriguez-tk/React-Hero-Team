import React from 'react';
import './spinner.css';

export const Spinner = () => {
  return (
    <div className="centerSpinner" data-testid="HeroDetailScreen-loading">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

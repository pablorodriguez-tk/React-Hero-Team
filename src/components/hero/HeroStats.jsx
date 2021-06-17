import React from 'react';
import { useHeroStats } from '../../hook/useHeroStats';

export const HeroStats = () => {
  const {
    maxPowerStat,
    AverageCombat,
    AverageDurability,
    AverageIntelligence,
    AveragePower,
    AverageSpeed,
    AverageStrength,
    AverageHeight,
    AverageWeight,
  } = useHeroStats();

  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className="d-flex justify-content-center ">
        Type: <b>{maxPowerStat}</b>
      </h2>
      <hr />
      <div className="row">
        <div className="col-6 text-center">
          <h2>Average powerstats</h2>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Combat: <b>{AverageCombat}</b>
            </li>
            <li className="list-group-item">
              Durability: <b>{AverageDurability}</b>
            </li>
            <li className="list-group-item">
              Intelligence: <b>{AverageIntelligence}</b>
            </li>
            <li className="list-group-item">
              Power: <b>{AveragePower}</b>
            </li>
            <li className="list-group-item">
              Speed: <b>{AverageSpeed}</b>
            </li>
            <li className="list-group-item">
              Strength: <b>{AverageStrength}</b>
            </li>
          </ul>
        </div>
        <div className="col-6 text-center">
          <h2>Average height and weight</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Height: <b>{AverageHeight} cm</b>
            </li>
            <li className="list-group-item">
              Weight: <b>{AverageWeight} Kg</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

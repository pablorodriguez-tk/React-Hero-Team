import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const HeroStats = () => {
  const { HeroFetch } = useSelector((state) => state.heroes);

  // States for powerstats
  const [AverageIntelligence, setAverageIntelligence] = useState(0);
  const [AverageCombat, setAverageCombat] = useState(0);
  const [AverageSpeed, setAverageSpeed] = useState(0);
  const [AverageDurability, setAverageDurability] = useState(0);
  const [AveragePower, setAveragePower] = useState(0);
  const [AverageStrength, setAverageStrength] = useState(0);

  // States for appearance
  const [AverageHeight, setAverageHeight] = useState(0);
  const [AverageWeight, setAverageWeight] = useState(0);

  // Max Powerstats
  const [maxPowerStat, setMaxPowerStat] = useState('');

  // Arrays of each powerstats
  const intelligenceArray = HeroFetch.map((el) => el.powerstats.intelligence);
  const combatArray = HeroFetch.map((el) => el.powerstats.combat);
  const speedArray = HeroFetch.map((el) => el.powerstats.speed);
  const durabilityArray = HeroFetch.map((el) => el.powerstats.durability);
  const PowerArray = HeroFetch.map((el) => el.powerstats.power);
  const StrengthArray = HeroFetch.map((el) => el.powerstats.strength);

  // Arrays of each appearance
  const heightArray = HeroFetch.map((el) => el.appearance.height[1]);
  const weightArray = HeroFetch.map((el) => el.appearance.weight[1]);

  useEffect(() => {
    if (HeroFetch.length > 0) {
      // Function to calculate average
      const average = (array) =>
        array.reduce((a, b) => a + (parseInt(b) || 0), 0) / array.length;

      // Function to calculate the max powerstat
      const maxPowerStats = (powerStatsObject) => {
        var max = -Infinity;
        var maxVar = null;
        for (var key in powerStatsObject) {
          var num = powerStatsObject[key];
          if (num > max) {
            max = num;
            maxVar = key;
          }
          max = (num > max && num) || max;
        }
        return maxVar;
      };

      // Set on state the average powerstats
      setAverageIntelligence(average(intelligenceArray).toFixed(1));
      setAverageCombat(average(combatArray).toFixed(1));
      setAverageSpeed(average(speedArray).toFixed(1));
      setAverageDurability(average(durabilityArray).toFixed(1));
      setAveragePower(average(PowerArray).toFixed(1));
      setAverageStrength(average(StrengthArray).toFixed(1));

      // Set on state the average appearance
      setAverageHeight(average(heightArray).toFixed(1));
      setAverageWeight(average(weightArray).toFixed(1));

      // Obj for all the powerstats
      var powerStatsObject = {
        Intelligence: AverageIntelligence,
        Combat: AverageCombat,
        Speed: AverageSpeed,
        Durability: AverageDurability,
        Power: AveragePower,
        Strength: AverageStrength,
      };

      // Set on state max powerstats
      setMaxPowerStat(maxPowerStats(powerStatsObject));
    }
  }, [
    AverageCombat,
    AverageDurability,
    AverageIntelligence,
    AveragePower,
    AverageSpeed,
    AverageStrength,
    PowerArray,
    StrengthArray,
    combatArray,
    durabilityArray,
    heightArray,
    HeroFetch.length,
    intelligenceArray,
    speedArray,
    weightArray,
  ]);

  return (
    <div>
      <h1 className="d-flex justify-content-center">My hero team</h1>
      <h2 className="d-flex justify-content-center">
        Type: <b>{maxPowerStat}</b>
      </h2>
      <hr />
      <div className="row">
        <div className="col-6 text-left">
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
        <div className="col-6 text-left">
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

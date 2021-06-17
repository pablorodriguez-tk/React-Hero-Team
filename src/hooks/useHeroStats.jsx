import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useHeroStats = () => {
  const { heroTeam } = useSelector((state) => state.heroes);

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
  let intelligenceArray = heroTeam.map((el) => el.powerstats.intelligence);
  const combatArray = heroTeam.map((el) => el.powerstats.combat);
  const speedArray = heroTeam.map((el) => el.powerstats.speed);
  const durabilityArray = heroTeam.map((el) => el.powerstats.durability);
  const PowerArray = heroTeam.map((el) => el.powerstats.power);
  const StrengthArray = heroTeam.map((el) => el.powerstats.strength);

  // Arrays of each appearance
  const heightArray = heroTeam.map((el) => el.appearance.height[1]);
  const weightArray = heroTeam.map((el) => el.appearance.weight[1]);

  useEffect(() => {
    // Function to calculate average
    const average = (array) => {
      const av =
        array.reduce((a, b) => a + (parseInt(b) || 0), 0) / array.length;

      if (isNaN(av)) {
        return 0;
      }
      return av;
    };

    // Function to calculate the max powerstat
    const maxPowerStats = (powerStatsObject) => {
      var max = 0;
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
    heroTeam.length,
    intelligenceArray,
    speedArray,
    weightArray,
  ]);

  return {
    maxPowerStat,
    AverageCombat,
    AverageDurability,
    AverageIntelligence,
    AveragePower,
    AverageSpeed,
    AverageStrength,
    AverageHeight,
    AverageWeight,
  };
};

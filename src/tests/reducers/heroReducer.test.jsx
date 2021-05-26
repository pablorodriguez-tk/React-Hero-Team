import { heroReducer } from '../../reducers/heroReducer';
import { types } from '../../types/types';

const initialStateDemo = {
  heroTeam: [
    {
      id: 1,
      name: 'Hero1',
      powerstats: {},
      biography: {},
      appearance: {},
      work: {},
      connections: {},
      image: {},
    },
    {
      id: 2,
      name: 'Hero2',
      powerstats: {},
      biography: {},
      appearance: {},
      work: {},
      connections: {},
      image: {},
    },
  ],
};

describe('Test on authReducer', () => {
  test('Should return initial state', () => {
    const state = heroReducer(initialStateDemo, {});
    expect(state).toEqual(initialStateDemo);
  });

  test('Should Add Hero', () => {
    const newHero = {
      id: 2,
      name: 'Hero2',
      powerstats: {},
      biography: {},
      appearance: {},
      work: {},
      connections: {},
      image: {},
    };

    const action = {
      type: types.heroAdd,
      payload: newHero,
    };
    const state = heroReducer(initialStateDemo, action);
    expect(state.heroTeam.length).toBe(3);
  });

  test('Should to Delete Hero', () => {
    const action = {
      type: types.HeroDelete,
      payload: 1,
    };
    const state = heroReducer(initialStateDemo, action);
    expect(state.heroTeam.length).toBe(1);
  });

  test('Should to set initial state', () => {
    const action = {
      type: types.HeroLogout,
    };
    const state = heroReducer(initialStateDemo, action);
    expect(state).toEqual({ heroTeam: [] });
  });
});

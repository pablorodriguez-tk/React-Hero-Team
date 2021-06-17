import {
  HeroAdd,
  heroDelete,
  HeroLogout,
} from '../../../state/action-creators/heroes';
import { types } from '../../../state/action-types/types';

describe('Test on Auth actions', () => {
  test('Should work all actions', () => {
    const props = {
      id: 1,
      name: 'Test',
      powerstats: 'powerstats',
      biography: 'biography',
      appearance: 'appearance',
      work: 'work',
      connections: 'connections',
      image: 'url',
    };

    const HeroAddAction = HeroAdd(props);
    const HeroLogoutAction = HeroLogout();
    const heroDeleteAction = heroDelete(1);

    expect(HeroAddAction).toEqual({
      type: types.heroAdd,
      payload: props,
    });

    expect(HeroLogoutAction).toEqual({
      type: types.HeroLogout,
    });

    expect(heroDeleteAction).toEqual({
      type: types.HeroDelete,
      payload: 1,
    });
  });
});

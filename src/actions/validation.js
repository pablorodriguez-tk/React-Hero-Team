import { types } from '../types/types';

export const AddedBadHero = () => ({
  type: types.validationBadHero,
});

export const AddedGoodHero = () => ({
  type: types.validationGoodHero,
});

export const AddedNeutralHero = () => ({
  type: types.validationNeutralHero,
});

export const validationLogout = () => ({
  type: types.validationLogout,
});

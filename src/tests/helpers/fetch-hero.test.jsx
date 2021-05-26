/**
 * @jest-environment node
 */

import '@testing-library/jest-dom/extend-expect';
import { getHeroById, searchHero } from '../../helpers/fetch';

describe('Test on Fetch Helper', () => {
  test('searchHero function should work', async () => {
    const { response } = await searchHero('ironman');
    expect(response).toBe('success');
  });

  test('searchHero function should show error', async () => {
    const { response } = await searchHero('aaaaa');
    expect(response).toBe('error');
  });

  test('getHeroById function should work', async () => {
    const { response } = await getHeroById(333);
    expect(response).toBe('success');
  });

  test('getHeroById function should show error', async () => {
    const { response } = await getHeroById('333sfd');
    expect(response).toBe('error');
  });
});

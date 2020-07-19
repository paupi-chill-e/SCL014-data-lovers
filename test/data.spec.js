import { filterTag, filterSearch, orderInfo } from '../src/data.js';
import lol from '../src/data/lol/lol.js';

const champions = Object.values(lol.data);

describe('filterTag', () => {
  it('is a function', () => {
    expect(typeof filterTag).toBe('function');
  });
  it('returns numbers of Tank champions', () => {
    expect(filterTag(champions, 'Tank')).toHaveLength(40);
  });
});

describe('orderInfo', () => {
  it('is a function', () => {
    expect(typeof orderInfo).toBe('function');
  });

  it('return the highest attack according to the order of the champions ', () => {
    expect(orderInfo(champions, 'attack')[0].info['attack']).toBe(10);
  });
});

describe('filterSearch', () => {
  it('is a function', () => {
    expect(typeof filterSearch).toBe('function');
  });
  it('returns `array`', () => {
    expect(filterSearch(champions, 'NAMI')[0].name).toBe('Nami');
  });
});

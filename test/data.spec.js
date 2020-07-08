import { filterTag, filterSearch, orderInfo } from '../src/data.js';

describe('filterTag', () => {
  it('is a function', () => {
    expect(typeof filterTag).toBe('function');
  });

  it('returns `filterTag`', () => {
    expect(filterTag()).toBe('array');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


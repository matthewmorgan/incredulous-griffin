const intersection = require('./intersection');

describe('Intersection', ()=> {
  "use strict";

  it('returns an empty array for an empty input', ()=> {
    expect(intersection()).toEqual([]);
  });

  it('returns an empty array for a null input', ()=> {
    expect(intersection(null, null)).toEqual([]);
  });

  it('returns an empty array for a non-array input', ()=> {
    expect(intersection([], '123')).toEqual([]);
  });

});
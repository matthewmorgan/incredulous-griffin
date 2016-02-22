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

describe('Intersection', ()=>{
  "use strict";

  it('knows when two line segments intersect', ()=>{
    const line1 = [[0,0],[3,3]];
    const line2 = [[1,1],[5,1]];
    expect(intersection(line1,line2)).toBe(true);
  });

  it('knows when they do not intersect', ()=>{
    const line1 = [[0,0],[3,3]];
    const line2 = [[0,4],[5,4]];
    expect(intersection(line1,line2)).toBe(false);
  });
});
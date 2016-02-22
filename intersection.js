'use strict';

module.exports = function (line1, line2) {
  if (emptyNullOrUndefined(line1, line2)) {
    return [];
  }

  let [left, right, bottom, top] = getBoundingBox(line1);
  let [[x0,y0],[x1,y1]] = line2;

  if (((left <= x0 && right >= x0) || (left <= x1 && right >= x1))
      && ((bottom <= y0 && top >= y0) || (bottom <= y1 && top >= y1))) {
    return true;
  }
  return false;
};


function getBoundingBox([point1, point2]) {
  const left = Math.min(point1[0], point2[0]);
  const right = Math.max(point1[0], point2[0]);
  const bottom = Math.min(point1[1], point2[1]);
  const top = Math.max(point1[1], point2[1]);
  console.log([left, right, top, bottom]);
  return [left, right, bottom, top];
}

function boxContainsPoint(box, point) {

}

function emptyNullOrUndefined(line1, line2) {
  if (!line1 || !line2) return true;
  if (!Array.isArray(line1) || !Array.isArray(line2)) return true;
  if (line1.length !== 2 || line2.length !== 2) return true;

  //TODO add test to check contents of array are valid integers
  return false;
}
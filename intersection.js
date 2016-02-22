'use strict';

module.exports = function(line1, line2){
  if(emptyNullOrUndefined(line1, line2)){
    return [];
  }



};

function emptyNullOrUndefined(line1, line2){
  if (!line1 || !line2) return true;
  if (!Array.isArray(line1) || !Array.isArray(line2)) return true;
  if (line1.length !== 2 || line2.length !== 2) return true;

  //TODO add test to check contents of array are valid integers
  return false;
}
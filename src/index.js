/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let arr = [0];
  preferences = arr.concat(preferences);
  
  let i;
  for (i = 1; i <= preferences.length; i++) {
    let first = preferences[i];
    let second = preferences[first];
    let third = preferences[second];

    if
    ((third == i) && (preferences[first] != first
        && preferences[second] != second
        && preferences[third] != third)) 
        {
          count++;
        }
  }
  return count / 3;
};


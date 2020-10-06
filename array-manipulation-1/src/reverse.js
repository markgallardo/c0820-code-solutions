/* eslint-disable no-unused-vars */
function reverse(array) {
  const results = [];
  for (let i = array.length - 1; i >= 0; i--) {
    results.push(array[i]);
  }

  return results;
}

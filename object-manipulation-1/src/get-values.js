/* eslint-disable no-unused-vars */
const getValues = object => {
  const result = [];
  for (const value in object) {
    result.push(object[value]);
  }
  return result;
};

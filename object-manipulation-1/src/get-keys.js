/* eslint-disable no-unused-vars */

// const getKeys = object => Object.getOwnPropertyNames(object);

const getKeys = object => {
  const result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
};

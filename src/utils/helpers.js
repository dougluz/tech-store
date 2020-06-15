/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable guard-for-in */
export function serialize(obj) {
  let queryString = '';
  for (const key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}

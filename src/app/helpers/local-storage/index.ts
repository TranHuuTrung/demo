import { JWT_LOCALSTORAGE } from 'app/constants';
import { isEmpty } from 'ramda';

/**
 * [setLocalStorage description]
 */
const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * [setLocalStorage description]
 */
const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}');
};

/**
 * [removeLocalStorage description]
 */
const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

/**
 * [getJwtLocalStorage description]
 */
const getJwtLocalStorage = () => {
  const jwt = getLocalStorage(JWT_LOCALSTORAGE);
  return !isEmpty(jwt) ? jwt : null;
};

export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  getJwtLocalStorage,
};

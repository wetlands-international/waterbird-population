import { setup } from 'axios-cache-adapter';
import localforage from 'localforage';

const store = localforage.createInstance({
  driver: [
    localforage.INDEXEDDB,
    localforage.LOCALSTORAGE
  ],
  name: 'wpe-families'
});

export const API = setup({
  baseURL: process.env.REACT_APP_CARTO_ACCOUNT,
  headers: { 'Content-Type': 'application/json' },
  cache: {
    // ignoreCache: process.env.NODE_ENV === 'development',
    maxAge: 15 * 60 * 1000,
    exclude: { query: false },
    store
  }
});

export const fetchFamilies = (params = {}) => {
    return API.get('sql', { params })
  .then(response => console.log(response))
  .catch((e) => {
    // const { status, statusText } = response;
    console.log(e)
  });
};


import { connectRoutes } from 'redux-first-router';

import { NOT_FOUND } from 'redux-first-router';

export const routes = {
  HOME: {
    page: 'home',
    path: '/'
  },
  [NOT_FOUND]: {
    page: 'not-found',
    path: '/404'
  },
  EXPLORE: {
    page: 'explore',
    path: '/explore'
  },
  BACKGROUND: {
    page: 'background',
    path: '/background/:id'
  },
  DATA: {
    page: 'data',
    path: '/data/:id'
  },
  CREDITS: {
    page: 'credits',
    path: '/credits'
  },
  FAQ: {
    page: 'faq',
    path: '/faq'
  },
  MAP: {
    page: 'map',
    path: '/map'
  },
  OTHER: {
    page: 'otra',
    path: '/otra'
  }
};

const options = {
  location: 'router',
};

export default connectRoutes(routes, options);

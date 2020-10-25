import {host} from '../../app.json';

const api = {
  REPORTS: '/contame/incident',
  CATEGORIES: '/contame/incident/categories',
  LOGIN: '/contame/login/google',
};

export function getReports() {
  return `${host}${api.REPORTS}`;
}

export function getCategories() {
  return `${host}${api.CATEGORIES}`;
}

export function getUsers() {
  return `${host}${api.LOGIN}`;
}

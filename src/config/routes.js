import {host} from '../../app.json';

const api = {
  REPORTS: '/contame/report',
  CATEGORIES: '/contame/incident/categories',
};

export function getReports() {
  return `${host}${api.REPORTS}`;
}

export function getCategories() {
  return `${host}${api.CATEGORIES}`;
}

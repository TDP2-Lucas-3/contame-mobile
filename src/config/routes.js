import {host} from '../../app.json';

const api = {
  REPORTS: '/contame/incident',
  CATEGORIES: '/contame/incident/categories',
};

export function getReports() {
  return `${host}${api.REPORTS}`;
}

export function getCategories() {
  return `${host}${api.CATEGORIES}`;
}

export function getReport(reportId) {
  return `${host}${api.REPORT}/${reportId}`;
};

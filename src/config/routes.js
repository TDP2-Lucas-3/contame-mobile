import {host} from '../../app.json';

const api = {
  REPORTS: '/contame/incident',
  CATEGORIES: '/contame/incident/categories',
  LOGIN: '/contame/login/google',
  USERS: '/contame/user',
  USER: '/contame/user/me',
};

export function getReports() {
  return `${host}${api.REPORTS}`;
}

export function getCategories() {
  return `${host}${api.CATEGORIES}`;
}

export function getReport(reportId) {
  return `${host}${api.REPORT}/${reportId}`;
}

export function getLogin() {
  return `${host}${api.LOGIN}`;
}

export function getUsers() {
  return `${host}${api.USERS}`;
}

export function getUser() {
  return `${host}${api.USER}`;
}

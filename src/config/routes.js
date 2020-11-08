import {host} from '../../app.json';

const api = {
  MY_REPORTS: '/contame/incident/self',
  REPORTS: '/contame/incident',
  REPORT: '/contame/incident',
  CATEGORIES: '/contame/incident/categories',
  LOGIN: '/contame/login/google',
  USERS: '/contame/user',
  USER: '/contame/user/me',
};

export function getMyReports() {
  return `${host}${api.MY_REPORTS}`;
}

export function getCategories() {
  return `${host}${api.CATEGORIES}`;
}

export function getReport(reportId) {
  return `${host}${api.REPORT}/${reportId}`;
}

export function getReports() {
  return `${host}${api.REPORTS}`;
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

export function addVote(reportId) {
  return `${getReport(reportId)}/vote`;
}

export function removeVote(reportId) {
  return `${getReport(reportId)}/unvote`;
}

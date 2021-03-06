import {host} from '../../app.json';

const api = {
  MY_REPORTS: '/contame/incident/self',
  REPORTS: '/contame/incident',
  REPORT: '/contame/incident',
  CATEGORIES: '/contame/incident/category',
  SUBCATEGORIES: '/contame/incident/subcategory',
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

export function getSubCategories(categoryKey) {
  return `${host}${api.SUBCATEGORIES}/${categoryKey}`;
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

export function addComment(reportId) {
  return `${getReport(reportId)}/comment/user`;
}

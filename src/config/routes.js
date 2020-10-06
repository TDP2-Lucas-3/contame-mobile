import {host} from '../../app.json';

const api = {
  REPORTS: '/contame/report',
};

export function getReports() {
  return `${host}${api.REPORTS}`;
}

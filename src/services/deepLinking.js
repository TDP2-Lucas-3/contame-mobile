import {host} from '../../app.json';

export const generateReportLink = (reportId) =>
  `${host}/contame/mobile/report?reportId=${reportId}`;

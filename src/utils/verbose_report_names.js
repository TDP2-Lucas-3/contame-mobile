export const verboseReportState = (state) => {
  const VERBOSE_STATES = {
    REPORTADO: 'Reportado',
    EN_PROGRESO: 'En progreso',
    RESUELTO: 'Resuelto',
    ARCHIVADO: 'Archivado',
  };
  return VERBOSE_STATES[state];
};

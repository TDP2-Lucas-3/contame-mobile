export const SAVE_CONFIG = 'SAVE_CONFIG';

export const saveConfig = (data) => ({
  type: SAVE_CONFIG,
  payload: data,
});

import type { State } from './types';

export const defaultState: State = {
  open: false,
  message: '',
  severity: 'info',
  vertical: 'top',
};

export const ActionType = {
  SHOW_SNACK: 'SHOW_SNACK',
  HIDE_SNACK: 'HIDE_SNACK',
} as const;

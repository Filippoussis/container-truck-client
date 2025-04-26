import type { State } from './types';

export const defaultState: State = {
  isAuthenticated: false,
};

export const ActionType = {
  SET_AUTH_STATUS: 'SET_AUTH_STATUS',
} as const;

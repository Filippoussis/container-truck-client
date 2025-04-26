/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ACTION_TYPE, State } from './types';
import { ActionType } from './constants';

export const reducer = (
  state: State,
  { type, payload }: { type: ACTION_TYPE; payload: any },
): State => {
  switch (type) {
    case ActionType.SET_AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: payload,
      };
    default:
      return state;
  }
};

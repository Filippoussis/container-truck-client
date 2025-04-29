import type { ACTION_TYPE, State } from './types';
import { ActionType, defaultState } from './constants';

export const reducer = (
  state: State,
  { type, payload }: { type: ACTION_TYPE; payload?: State },
): State => {
  switch (type) {
    case ActionType.SHOW_SNACK:
      return {
        ...state,
        ...payload,
      };
    case ActionType.HIDE_SNACK:
      return defaultState;
    default:
      return state;
  }
};

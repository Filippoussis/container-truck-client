import {
  createContext,
  ReactNode,
  useMemo,
  useContext,
  useReducer,
} from 'react';

import { reducer } from './reducer';
import type { API, State } from './types';
import { defaultState, ActionType } from './constants';

const SnackApiContext = createContext<API>({} as API);
const SnackStateContext = createContext<State>({} as State);

export const SnackProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState as State);

  const api = useMemo(() => {
    const showSnack = (payload: State) => {
      dispatch({
        type: ActionType.SHOW_SNACK,
        payload: payload,
      });
    };

    const hideSnack = () => {
      dispatch({
        type: ActionType.HIDE_SNACK,
      });
    };

    return {
      showSnack,
      hideSnack,
    };
  }, []);

  return (
    <SnackApiContext.Provider value={api}>
      <SnackStateContext.Provider value={state}>
        {children}
      </SnackStateContext.Provider>
    </SnackApiContext.Provider>
  );
};

export const useSnackAPI = () => useContext(SnackApiContext);
export const useSnackState = () => useContext(SnackStateContext);

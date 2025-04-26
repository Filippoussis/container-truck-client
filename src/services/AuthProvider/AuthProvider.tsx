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

const AuthApiContext = createContext<API>({} as API);
const AuthStateContext = createContext<State>({} as State);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultState as State);

  const api = useMemo(() => {
    const onAuthenticate = (payload: boolean) => {
      dispatch({
        type: ActionType.SET_AUTH_STATUS,
        payload: payload,
      });
    };

    return {
      onAuthenticate,
    };
  }, []);

  return (
    <AuthApiContext.Provider value={api}>
      <AuthStateContext.Provider value={state}>
        {children}
      </AuthStateContext.Provider>
    </AuthApiContext.Provider>
  );
};

export const useAuthAPI = () => useContext(AuthApiContext);
export const useAuthState = () => useContext(AuthStateContext);

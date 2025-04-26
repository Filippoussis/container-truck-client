import { ActionType } from './constants';

export type State = {
  isAuthenticated: boolean;
};

export type API = {
  onAuthenticate: (status: boolean) => void;
};

export type ACTION_TYPE = (typeof ActionType)[keyof typeof ActionType];

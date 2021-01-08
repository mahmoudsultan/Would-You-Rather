export const SET_AUTH_USER = 'SET_AUTH_USER';
export const UNSET_AUTH_USER = 'UNSET_AUTH_USER';

export const setAuthUser = (authUser) => ({
  type: SET_AUTH_USER,
  authUser,
});

export const unsetAuthUser = () => ({
  type: UNSET_AUTH_USER,
});

import { combineReducers } from '@reduxjs/toolkit';

import { authApi } from './api';
import toastReducer from './slice/toast';
import modalReducer from './slice/modal';
import authUser from './slice/authUser';
import { UserInfo } from './slice/authUser';

export const combinedStore = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  toast: toastReducer,
  modal: modalReducer,
  authUser: authUser,
  userInfo: UserInfo.reducer,
});

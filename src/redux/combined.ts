import { combineReducers } from '@reduxjs/toolkit';

import { authApi, categoryApi } from './api';
import toastReducer from './slice/toast';
import modalReducer from './slice/modal';
import authUser from './slice/authUser';
import { UserInfo } from './slice/authUser';
import categorySlice from './slice/categorySlice';

export const combinedStore = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  toast: toastReducer,
  modal: modalReducer,
  authUser: authUser,
  userInfo: UserInfo.reducer,
  categories: categorySlice,
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AuthLoginPayload,
  AuthRegisterPayload,
  AuthResponse,
  UserInfoReturnType,
} from '@types';
import { baseUrl, getToken, removeToken } from '@utils';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/api/auth`,
    prepareHeaders: async (headers, { getState }) => {
      try {
        const token = await new Promise((resolve, reject) => {
          getToken((value) => {
            if (value) {
              resolve(value);
            } else {
              reject(new Error('Token not found'));
            }
          });
        });
    
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      } catch (error) {
        return headers;
      }
    },
  }),
  tagTypes: ['user'],
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, AuthLoginPayload>({
      query: (paylod) => ({
        url: '/login',
        method: 'POST',
        body: paylod,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),

    register: build.mutation<AuthResponse, AuthRegisterPayload>({
      query: (paylod) => ({
        url: '/register',
        method: 'POST',
        body: paylod,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),

    userInfo: build.query<UserInfoReturnType, null>({
      query: () => ({
        url: '/user-info',
        method: 'GET',
      }),
      extraOptions: { maxRetries: 5 },
      providesTags: ['user'],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUserInfoQuery } =
  authApi;

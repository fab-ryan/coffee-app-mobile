import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse, UserInfoReturnType } from '@types';
import { setToken } from '@utils';
import { authApi } from '@redux/api';

type InitialStateType = {
  token: {
    access_token: string | undefined | null;
  };
};

type UserInfoReturnTypes = {
  data: UserInfoReturnType | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  loading: boolean;
};

const initialStateUser: UserInfoReturnTypes = {
  data: null,
  error: null,
  loading: false,
};
const initialState: InitialStateType = {
  token: {
    access_token: undefined,
  },
};

export const setAuthUser = createAsyncThunk(
  'authUser/setAuthUser',
  async (payload: AuthResponse) => {
    const accessToken: string = payload.data && payload.data.access_token;
    await setToken(accessToken);
    return payload.data.access_token;
  },
);

const authUser = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    removeAuthUser: (state) => {
      state.token = initialState.token;
    },
  },

  extraReducers: (build) => {
    build.addCase(setAuthUser.fulfilled, (state, action) => {
      state.token.access_token = action.payload;
    });
  },
});

const UserInfo = createSlice({
  name: 'userInfo',
  initialState: initialStateUser,
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(authApi.endpoints.userInfo.matchPending, (state) => {
      state.loading = true;
      state.error = null;
    });
    build.addMatcher(
      authApi.endpoints.userInfo.matchFulfilled,
      (state, action) => {
        state.loading = false;
        state.data = action.payload;
      },
    );
    build.addMatcher(
      authApi.endpoints.userInfo.matchRejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error;
      },
    );
  },
});

export { UserInfo };
export default authUser.reducer;
export const { removeAuthUser } = authUser.actions;

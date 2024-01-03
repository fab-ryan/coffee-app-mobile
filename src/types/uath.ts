import { Response } from './response';

export interface AuthResponse extends Response {
  data: {
    access_token: string;
  };
}
export interface AuthLoginPayload {
  email: string;
  password: string;
}

export interface AuthRegisterPayload {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface UserInfoReturnType extends Response {
  data: UserInfo;
}

export interface UserInfo {
  id:           string;
  name:         string;
  username:     string;
  email:        string;
  phone:        string;
  role:         string;
  status:       boolean;
  refreshToken: null;
  created_at:   Date;
  deleted_at:   null;
}

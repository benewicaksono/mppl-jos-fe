export type User = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type UserDetailApi = {
  data: User;
  message: string;
  status: boolean;
};

export type UserApi = {
  data: User;
  message: string;
  status: boolean;
};

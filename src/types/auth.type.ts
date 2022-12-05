export type User = {
  id: string;
  role: Array<string>;
  username: string;
  access_token: string;
  data: string;
};

export type ProtectedRoute = {
  path: string;
  type: 'auth' | 'all' | 'admin';
};

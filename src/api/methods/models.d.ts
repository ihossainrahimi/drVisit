export interface LoginApiData {
  username: string;
  password: string;
}

export interface LoginApiResponse {
  token: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  total_storage_gb: number;
  used_storage_gb: number;
  folder_id: number;
}

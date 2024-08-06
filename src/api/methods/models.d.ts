export interface RegisterApiData {
  username: string;
  password: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: boolean;
}

export interface RegisterApiResponse {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: boolean;
  nationalId: string | null;
  isDoctor: boolean | null;
  address: string | null;
  params: null;
  roles: [];
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  enabled: boolean;
  authorities: [];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export interface LoginApiData {
  username: string;
  password: string;
}

export interface LoginApiResponse {
  token: string;
  expiresIn: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  total_storage_gb: number;
  used_storage_gb: number;
  folder_id: number;
}

export interface Error {
  code: string;
  message: string;
  subErrors: null;
}

export interface GetDoctorsByProfessionIdApiResponse {
  doctors: Doctor[];
  professional: Professional;
}

export interface Doctor {
  id: number;
  userId: number;
  professionalId: number;
  title: string;
  visitFee: number;
  companyPercent: number;
  city: string;
  isSettled: boolean;
  visitRules: string;
  officePhoneNumber: string;
  officeAddress: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Professional {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetProfessionApiResponse {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SetDoctorRateApiBody {
  doctorId: number;
  userId: number;
  comment: string;
  score: number;
}

export type SetDoctorRateApiResponse = Rate;

export interface getDoctorRatesApiResponse {
  rates: Rate[];
  averageScore: number;
}

export interface Rate {
  id: number;
  doctorId: number;
  userId: number;
  comment: string;
  score: number;
  createdAt: null;
}

export type GetDoctorSchedulesQuery = Partial<{
  from: Date;
}>;

export interface GetDoctorSchedulesResponse {}

export type DeleteDoctorScheduleApiBody = number[];

export interface DeleteDoctorScheduleApiResponse {}

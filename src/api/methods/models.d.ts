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
  sub: string;
  iat: number;
  exp: number;
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

export type GetDoctorSchedulesResponse = Schedule[];

export type DeleteDoctorScheduleApiBody = number[];

export interface Schedule {
  id: number;
  doctorId: number;
  customerId: null;
  startedAt: Date;
  endAt: Date;
  duration: number;
  isFree: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

export type GetScheduleApiResponse = Schedule;

export type AssignScheduleToCustomerApiResponse = Schedule[];

export interface UserCompleteInfo {
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
  roles: any[];
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  enabled: boolean;
  authorities: any[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export type GetUserInfoApiResponse = UserCompleteInfo;

export interface CreateVisitApiBody {
  doctorId: number;
  startedAt: Date;
  endAt: Date;
  duration: number;
}

export interface CreateVisitApiResponse {}

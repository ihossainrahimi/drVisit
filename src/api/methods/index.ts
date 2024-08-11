import { AxiosResponse } from 'axios';

import { formatStringByKey } from '@/utils/formatStringByKey';

import { api } from '..';
import { apiUrls } from '../urls';
import {
  AssignScheduleToCustomerApiResponse,
  CreateVisitApiBody,
  CreateVisitApiResponse,
  DeleteDoctorScheduleApiBody,
  GetDoctorsByProfessionIdApiResponse,
  GetDoctorSchedulesQuery,
  GetDoctorSchedulesResponse,
  GetProfessionApiResponse,
  GetScheduleApiResponse,
  GetUserInfoApiResponse,
  LoginApiData,
  LoginApiResponse,
  RegisterApiData,
  RegisterApiResponse,
  SetDoctorRateApiBody,
  SetDoctorRateApiResponse
} from './models';

export const registerApi = ({
  data
}: {
  data: RegisterApiData;
}): Promise<AxiosResponse<RegisterApiResponse>> => {
  const { method, url } = apiUrls.signup;
  return api({ data, method, url }, false);
};

export const loginApi = ({
  data
}: {
  data: LoginApiData;
}): Promise<AxiosResponse<LoginApiResponse>> => {
  const { method, url } = apiUrls.login;
  return api({ data, method, url }, false);
};

export const getDoctorsByProfessionIdApi = ({
  professionId
}: {
  professionId: number;
}): Promise<AxiosResponse<GetDoctorsByProfessionIdApiResponse>> => {
  const { method, url } = apiUrls.getDoctorsByProfessionIdApi;
  return api({ method, url: formatStringByKey(url, { professionId }) });
};

export const getProfessionApi = (): Promise<AxiosResponse<GetProfessionApiResponse>> => {
  const { method, url } = apiUrls.getProfessionApi;
  return api({ method, url });
};

export const setDoctorRateApi = ({
  data
}: {
  data: SetDoctorRateApiBody;
}): Promise<AxiosResponse<SetDoctorRateApiResponse>> => {
  const { method, url } = apiUrls.setDoctorRateApi;
  return api({ data, method, url });
};

export const getDoctorRatesApi = ({
  professionId
}: {
  professionId: number;
}): Promise<AxiosResponse<GetDoctorsByProfessionIdApiResponse>> => {
  const { method, url } = apiUrls.getDoctorRatesApi;
  return api({ method, url: formatStringByKey(url, { professionId }) });
};

export const getDoctorSchedules = ({
  params,
  doctorId
}: {
  params: GetDoctorSchedulesQuery;
  doctorId: number;
}): Promise<AxiosResponse<GetDoctorSchedulesResponse>> => {
  const { method, url } = apiUrls.getDoctorSchedules;
  return api({ params, method, url: formatStringByKey(url, { doctorId }) });
};

export const deleteDoctorScheduleApi = ({
  data
}: {
  data: DeleteDoctorScheduleApiBody;
}): Promise<AxiosResponse<undefined>> => {
  const { method, url } = apiUrls.deleteDoctorScheduleApi;
  return api({ data, method, url });
};

export const getScheduleApi = ({
  doctorId
}: {
  doctorId: number;
}): Promise<AxiosResponse<GetScheduleApiResponse>> => {
  const { method, url } = apiUrls.getSchedule;
  return api({ method, url: formatStringByKey(url, { doctorId }) });
};

export const assignScheduleToCustomerApi = ({
  scheduleId,
  customerId
}: {
  scheduleId: number;
  customerId: number;
}): Promise<AxiosResponse<AssignScheduleToCustomerApiResponse>> => {
  const { method, url } = apiUrls.assignScheduleToCustomer;
  return api({ method, url: formatStringByKey(url, { scheduleId, customerId }) });
};

export const getUserInfoApi = ({
  userId
}: {
  userId: number;
}): Promise<AxiosResponse<GetUserInfoApiResponse>> => {
  const { method, url } = apiUrls.getUserInfo;
  return api({ method, url: formatStringByKey(url, { userId }) });
};

export const createVisitApi = ({
  data
}: {
  data: CreateVisitApiBody;
}): Promise<AxiosResponse<CreateVisitApiResponse>> => {
  const { method, url } = apiUrls.createVisit;
  return api({ data, method, url });
};

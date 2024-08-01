import { AxiosResponse } from 'axios';

import { api } from '..';
import { apiUrls } from '../urls';
import { LoginApiData, LoginApiResponse } from './models';

export const loginApi = ({
  data
}: {
  data: LoginApiData;
}): Promise<AxiosResponse<LoginApiResponse>> => {
  const { method, url } = apiUrls.login;
  return api({ data, method, url }, false);
};

export const apiUrls = {
  login: {
    method: 'POST',
    url: 'auth/login'
  },
  signup: {
    method: 'POST',
    url: 'auth/signup'
  },
  getDoctorsByProfessionIdApi: {
    method: 'GET',
    url: 'api/doctors/professional/{{professionId}}'
  },
  getProfessionApi: {
    method: 'GET',
    url: 'api/professionals'
  },
  setDoctorRateApi: {
    method: 'POST',
    url: 'api/rates'
  },
  getDoctorRatesApi: {
    method: 'GET',
    url: 'api/rates/doctors/{{doctorId}}'
  },
  getDoctorSchedules: {
    method: 'GET',
    url: 'api/schedules/{{doctorId}}'
  },
  deleteDoctorScheduleApi: {
    method: 'DELETE',
    url: 'api/schedules'
  }
} as const;

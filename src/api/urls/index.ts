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
    url: 'api/doctors/professionals/{{professionId}}'
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
    url: 'api/schedules/doctors/{{doctorId}}'
  },
  deleteDoctorScheduleApi: {
    method: 'DELETE',
    url: 'api/schedules'
  },
  getSchedule: {
    method: 'GET',
    url: 'api/schedules/{{scheduleId}}'
  },
  assignScheduleToCustomer: {
    method: 'POST',
    url: 'api/schedules/{{scheduleId}}/customers/{{customerId}}'
  },
  getUserInfo: {
    method: 'GET',
    url: 'api/users/{{userId}}'
  },
  createVisit: {
    method: 'POST',
    url: 'api/visits'
  }
} as const;

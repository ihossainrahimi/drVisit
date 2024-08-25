'use client';

import { Grid } from '@mui/material';
import jMoment from 'moment-jalaali';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getDoctorSchedulesApi } from '@/api/methods';
import { ScheduleType } from '@/api/methods/models';
import FullPageLoading from '@/components/FullPageLoading';
import { Schedule } from '@/components/Schedule';
import { DATE_FORMAT_MILADI_DASH } from '@/constants/dateFormats';

const SchedulePage = () => {
  const searchParams = useSearchParams();
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const doctorId = Number(searchParams.get('doctorId'));

  useEffect(() => {
    const now = jMoment().format(DATE_FORMAT_MILADI_DASH);

    getDoctorSchedulesApi({ doctorId, params: { from: now } })
      .then((response) => {
        setSchedules(response.data || []);
      })
      .catch(() => undefined)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FullPageLoading />;
  }

  return (
    <Grid container spacing={2}>
      {schedules.map((schedule) => (
        <Grid item key={schedule.id}>
          <Schedule schedule={schedule} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SchedulePage;

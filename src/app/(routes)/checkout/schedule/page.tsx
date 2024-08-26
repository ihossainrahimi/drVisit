'use client';

import { Divider, Grid, Typography } from '@mui/material';
import jMoment from 'moment-jalaali';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getDoctorRatesApi, getDoctorSchedulesApi } from '@/api/methods';
import { Rate, ScheduleType } from '@/api/methods/models';
import { Comment } from '@/components/Comment';
import FullPageLoading from '@/components/FullPageLoading';
import { Schedule } from '@/components/Schedule';
import { DATE_FORMAT_MILADI_DASH } from '@/constants/dateFormats';

import classes from './index.module.scss';

const SchedulePage = () => {
  const searchParams = useSearchParams();
  const [schedules, setSchedules] = useState<ScheduleType[]>([]);
  const [comments, setComments] = useState<Rate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const doctorId = Number(searchParams.get('doctorId'));

  useEffect(() => {
    const now = jMoment().format(DATE_FORMAT_MILADI_DASH);

    Promise.all([
      getDoctorSchedulesApi({ doctorId, params: { from: now } }),
      getDoctorRatesApi({ doctorId })
    ])
      .then((responses) => {
        setSchedules(responses[0].data || []);
        setComments(responses[1].data.rates);
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
    <>
      <Grid container spacing={2}>
        {schedules.map((schedule) => (
          <Grid item key={schedule.id}>
            <Schedule schedule={schedule} />
          </Grid>
        ))}
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant='h4'>نظرات کاربران</Typography>
      <Grid container spacing={2} marginTop={2}>
        {comments.map((comment) => (
          <Grid item key={comment.id}>
            <Comment comment={comment} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SchedulePage;

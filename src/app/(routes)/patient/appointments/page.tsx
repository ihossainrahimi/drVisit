'use client';

import { Button, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import { Profile } from '@/components/Profile';

import classes from './index.module.scss';

const PatientAppointmentsPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Profile />
      </Grid>
      <Grid item xs={9}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label='نوبت های پیش رو'></Tab>
          <Tab label='نوبت های گذشته'></Tab>
          <Tab label='نوبت های لغو شده'></Tab>
        </Tabs>
        <Divider />
        <Grid container flexDirection='column' alignItems='center' className={classes.main}>
          <Grid item>
            <Image
              src='/images/appointmentNotFound.webp'
              alt='نوبت یافت نشد'
              width={225}
              height={144}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.body_text} variant='body1'>
              هنوز نوبتی ثبت نشده است
            </Typography>
          </Grid>
          <Grid item>
            <Button className={classes.body_text} variant='contained'>
              <Typography variant='button' color='white'>
                یافتن پزشک
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientAppointmentsPage;

import { Person } from '@mui/icons-material';
import { Divider, Grid, Typography } from '@mui/material';

import { Profile } from '@/components/Profile';

import classes from './index.module.scss';

const PatientInformationPage = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Profile />
      </Grid>
      <Grid item xs={9}>
        <Grid container alignItems='center' spacing={1}>
          <Grid item>
            <Person />
          </Grid>
          <Grid item>
            <Typography variant='h6'>اطلاعات کاربری</Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
      </Grid>
    </Grid>
  );
};

export default PatientInformationPage;

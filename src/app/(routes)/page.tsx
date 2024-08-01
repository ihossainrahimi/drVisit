'use client';

import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import FullPageLoading from '@/components/FullPageLoading';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

import classes from './index.module.scss';

const HomePage = () => {
  const router = useRouter();
  const userData = useAppSelector((state) => state.userData);

  // useEffect(() => {
  //   if (userData.data.id) {
  //     router.replace(`${websiteUrls.files}/${userData.data.folder_id}`);
  //   }
  // }, [userData.data]);

  if (userData.isLoading) {
    return <FullPageLoading />;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container justifyContent='center' spacing={4}></Grid>
      </CardContent>
    </Card>
  );
};

export default HomePage;

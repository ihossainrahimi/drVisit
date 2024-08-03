import { Favorite, PersonOutlined } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import { colorPalette } from '@/constants/colorPalette';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

import { LoginModal } from '../LoginModal';
import { SearchInput } from '../SearchInput';
import classes from './index.module.scss';

export const Header = () => {
  const userData = useAppSelector((state) => state.userData);

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
  };

  if (window.location.pathname.includes('sign-in')) {
    return null;
  }

  return (
    <div className={classes.root}>
      <LoginModal isOpen={isOpenLoginModal} onClose={handleCloseLoginModal} />
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Button startIcon={<Favorite color='error' />}>
            <Link href={websiteUrls.home}>
              <Typography color={colorPalette.main} variant='h4'>
                دکتردکتر
              </Typography>
            </Link>
          </Button>
        </Grid>

        {window.location.pathname !== websiteUrls.home && (
          <Grid item xs={5}>
            <SearchInput />
          </Grid>
        )}

        {userData.data.id ? (
          <Grid item>
            <Link href={websiteUrls.patientProfile}>
              <Button startIcon={<PersonOutlined />} variant='outlined'>
                <Typography color={colorPalette.main} variant='button'>
                  {userData.data.username}
                </Typography>
              </Button>
            </Link>
          </Grid>
        ) : (
          <Grid item sx={{ display: { md: 'block', xs: 'none' } }}>
            <Button
              onClick={handleOpenLoginModal}
              startIcon={<PersonOutlined />}
              variant='outlined'
            >
              <Typography color={colorPalette.main} variant='button'>
                ورود
              </Typography>
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid container justifyContent='space-between' alignItems='center' className={classes.navbar}>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Link href={websiteUrls.expertiseSearch}>
                <Typography variant='body2'>نوبت دهی</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography variant='body2'>تخصص ها</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Link href={websiteUrls.drLogin}>
            <Typography variant='body2' color={colorPalette.secondary}>
              برای پزشکان
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

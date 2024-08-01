import { Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { websiteUrls } from '@/constants/urls';
import { useAppDispatch, useAppSelector } from '@/store';
import { resetUserData } from '@/store/slices/userDataSlice';

export const Header = () => {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const pathname = usePathname();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(resetUserData());
    router.push(websiteUrls.login);
  };

  if (['/sign-in', '/register'].includes(pathname) || userData.isLoading) {
    return <></>;
  }

  return (
    <Grid container justifyContent='space-between' alignItems='center' role='main'>
      <Grid item xl={4} lg={4} md={2} sm={6}>
        <Link href={`${websiteUrls.files}/${userData.data.folder_id}`}></Link>
      </Grid>
      <Grid item xl={5} lg={5} md={5} sm={2}></Grid>
      {userData.data.id ? (
        <Grid item>
          <Button variant='text' onClick={handleClick}>
            <Typography variant='button'>{userData.data.username}</Typography>
          </Button>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            anchorOrigin={{
              horizontal: 'center',
              vertical: 'bottom'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Grid>
      ) : (
        <>
          <Grid item sx={{ display: { md: 'block', xs: 'none' } }}>
            <Grid container spacing={2}>
              <Grid item>
                <Link href={websiteUrls.register}>
                  <Button variant='outlined'>
                    <Typography color='white' variant='button'>
                      Register
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href={websiteUrls.login}>
                  <Button variant='contained'>
                    <Typography color='white' variant='button'>
                      Sign in
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

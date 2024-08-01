'use client';

import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { loginApi } from '@/api/methods';
import { LoginApiData } from '@/api/methods/models';
import FullPageLoading from '@/components/FullPageLoading';
import { websiteUrls } from '@/constants/urls';
import { useAppDispatch, useAppSelector } from '@/store';
import { setUserData } from '@/store/slices/userDataSlice';

import classes from './index.module.scss';

const SignIn = () => {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const [loginData, setLoginData] = useState<LoginApiData>({
    password: '',
    username: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userData.data.id) {
      router.replace(`${websiteUrls.files}/${userData.data.folder_id}`);
    }
  }, [userData.data.id]);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    loginApi({
      data: { username: loginData.username.toLocaleLowerCase(), password: loginData.password }
    })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch(setUserData(response.data.user));
        router.push(`${websiteUrls.files}/${response.data.user.folder_id}`);
      })
      .catch(() => undefined)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  if (userData.isLoading) {
    return <FullPageLoading />;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleLogin}>
          <Grid container justifyContent='center' spacing={4}>
            <Grid item xs={12}>
              <TextField
                
                label='username'
                fullWidth
                name='username'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                
                label='password'
                fullWidth
                name='password'
                type='password'
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <LoadingButton
                
                loading={isLoading}
                variant='contained'
                type='submit'
              >
                <Typography color='white' variant='button'>
                  Sign in
                </Typography>
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignIn;

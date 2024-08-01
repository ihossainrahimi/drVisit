'use client';

import { LoadingButton } from '@mui/lab';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { registerApi } from '@/api/methods';
import { RegisterApiData } from '@/api/methods/models';
import { websiteUrls } from '@/constants/urls';
import { useAppSelector } from '@/store';

import classes from './index.module.scss';

const Register = () => {
  const userData = useAppSelector((state) => state.userData);

  const router = useRouter();
  const [registerData, setRegisterData] = useState<RegisterApiData>({
    email: '',
    password: '',
    password2: '',
    username: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (userData.data.id) {
      router.replace(`${websiteUrls.files}/${userData.data.folder_id}`);
    }
  }, [userData.data.id]);

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    registerApi({ data: { ...registerData, username: registerData.username.toLocaleLowerCase() } })
      .then(() => {
        toast.success('registered successfully');
        router.push(websiteUrls.login);
      })
      .catch(() => undefined)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleRegister}>
          <Grid container justifyContent='center' spacing={4}>
            <Grid item xs={12}>
              <TextField
                label='email'
                fullWidth
                onChange={handleChange}
                type='email'
                name='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label='username' fullWidth onChange={handleChange} name='username' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='password'
                fullWidth
                onChange={handleChange}
                type='password'
                name='password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='repeat password'
                fullWidth
                onChange={handleChange}
                type='password'
                name='password2'
              />
            </Grid>
            <Grid item>
              <LoadingButton loading={isLoading} variant='contained' type='submit'>
                <Typography color='white' variant='button'>
                  Register
                </Typography>
              </LoadingButton>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;

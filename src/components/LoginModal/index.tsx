import { Favorite } from '@mui/icons-material';
import { Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { colorPalette } from '@/constants/colorPalette';

import { Modal } from '../Modal';
import { LoginModalProps } from './models';

export const LoginModal = ({ onClose, isOpen }: LoginModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {};

  const handleChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <Modal
      onClose={onClose}
      maxWidth='sm'
      fullWidth
      submitButtonText='دریافت کد تایید'
      onSubmit={handleSubmit}
      submitButtonProps={{
        disabled: phoneNumber.slice(0, 2).toString() !== '09' || phoneNumber.length !== 11
      }}
      open={isOpen}
    >
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item>
          <Favorite color='error' />
        </Grid>
        <Grid item>
          <Typography color={colorPalette.main} variant='h4'>
            دکتردکتر
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h6'>ورود به حساب کاربری</Typography>
      <br />
      <Typography variant='caption'>
        برای استفاده از خدمات دکتردکتر، شماره موبایل خود را وارد کنید.
      </Typography>
      <br />
      <br />
      <TextField
        required
        label='شماره موبایل'
        placeholder='09*********'
        onChange={handleChangePhoneNumber}
      />
    </Modal>
  );
};

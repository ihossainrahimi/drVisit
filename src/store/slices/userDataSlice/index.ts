'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '@/api/methods/models';

const initialData: User = {
  id: 0,
  username: '',
  email: '',
  total_storage_gb: 0,
  used_storage_gb: 0,
  folder_id: 0
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    data: initialData,
    isLoading: false
  },
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetUserData: (state) => {
      state.data = initialData;
    }
  }
});

export const { setUserData, setLoading, resetUserData } = userDataSlice.actions;

'use client';

import { Theme, useMediaQuery } from '@mui/material';
import { useState } from 'react';

import { LoginModal } from '../LoginModal';
import { DesktopHeader } from './components/DesktopHeader';
import { MobileHeader } from './components/MobileHeader';
import classes from './index.module.scss';

export const Header = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setIsOpenLoginModal(false);
  };

  if (typeof window !== 'undefined' && location.pathname.includes('sign-in')) {
    return null;
  }

  return (
    <div className={`${classes.root} ${isSmallScreen ? classes.rootMobile : ''}`}>
      <LoginModal isOpen={isOpenLoginModal} onClose={handleCloseLoginModal} />
      {isSmallScreen ? (
        <MobileHeader onOpenLoginModal={handleOpenLoginModal} />
      ) : (
        <DesktopHeader onOpenLoginModal={handleOpenLoginModal} />
      )}
    </div>
  );
};

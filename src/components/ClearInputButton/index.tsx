import React from 'react';
import { colorsPalette, IconButton, InputAdornment } from 'lighthouse';
import { CrossCircleOutlineMdSVG } from 'lighthouse-icons';

import { ClearInputButtonProps } from './models';

export const ClearInputButton = ({ onClick }: ClearInputButtonProps) => {
  return (
    <InputAdornment position='end'>
      <IconButton onClick={onClick} edge='end'>
        {<CrossCircleOutlineMdSVG color={colorsPalette.N600} />}
      </IconButton>
    </InputAdornment>
  );
};

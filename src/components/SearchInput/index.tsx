import { Search } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';

import classes from './index.module.scss';

export const SearchInput = () => {
  return (
    <>
      <TextField
        label='جستجوی نام دکتر، کلینیک یا تخصص...'
        color='secondary'
        InputProps={{
          endAdornment: (
            <IconButton color='secondary'>
              <Search />
            </IconButton>
          )
        }}
        fullWidth
        className={classes.root}
      />
    </>
  );
};

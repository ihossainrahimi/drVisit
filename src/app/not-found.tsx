import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import classes from './not-found.module.scss';

const NotFound = () => {
  return (
    <main>
      <div className={classes.container}>
        <Image src='/images/404.svg' alt='404' width={350} height={350} />
        <Typography variant='h4'>The page you are looking for is not found!</Typography>
        <Link href='/'>
          <Button className={classes.home_page_button} variant='contained'>
            <Typography color='white' variant='button'>
              Home page
            </Typography>
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

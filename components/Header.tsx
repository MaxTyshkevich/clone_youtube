import { logo } from '@/utils/contants';
import { AppBar, Stack, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SearchBar } from './SearchBar';

export const Header = () => {
  return (
    <AppBar
      position="static" /* color={pal} */
      sx={{ background: `#000`, p: 1 }}
      color="primary"
    >
      <Toolbar>
        <Stack direction="row" justifyContent="space-between" flex={1} gap={2}>
          <Link href="/">
            <Image src={logo} alt="logo" width={45} height={45} />
          </Link>
          <SearchBar />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

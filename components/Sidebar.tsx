'use client';
import { categories } from '@/utils/contants';
import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};
export const Sidebar = ({ selectedCategory, setSelectedCategory }: Props) => {
  return (
    <Stack
      sx={{
        overflowX: 'auto',
        flexDirection: { xs: 'row', sm: 'column' },
        height: { xs: 'auto', sm: '95%' },
      }}
    >
      {categories.map((category) => {
        const isSelected =
          category.name === selectedCategory ? { variant: 'selected' } : {};
        return (
          <IconButton
            {...isSelected}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            /* style={{
              color: category.name === selectedCategory ? 'white' : 'red',
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }} */

            /* variant={category.name === selectedCategory && 'selected'} */
          >
            <Typography
              sx={{
                marginRight: '15px',
              }}
            >
              {category.icon}
            </Typography>
            <Typography>{category.name}</Typography>
          </IconButton>
        );
      })}
    </Stack>
  );
};

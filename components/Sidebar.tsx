'use client';
import { categories } from '@/utils/contants';
import { IconButton, Stack, Typography, styled } from '@mui/material';
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
        flex: 'max-content',
        alignItems: 'start',
        px: 2,
        py: 1,
      }}
    >
      {categories.map((category) => {
        const isSelected =
          category.name.toLocaleLowerCase() ===
          selectedCategory.toLocaleLowerCase()
            ? { variant: 'selected' }
            : {};
        return (
          <IconButton
            sx={{
              width: { xs: 'auto', sm: '100%' },
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
            }}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            {...isSelected}
          >
            <Typography
              sx={{
                marginRight: '15px',
              }}
            >
              {category.icon}
            </Typography>
            <Typography
              sx={{
                flexGrow: 1,
              }}
            >
              {category.name}
            </Typography>
          </IconButton>
        );
      })}
    </Stack>
  );
};

/* style={{
              color: category.name === selectedCategory ? 'white' : 'red',
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }} */

/* variant={category.name === selectedCategory && 'selected'} */

/**
 * @file Contains components that is the base structure.
 */
import Box from '@mui/material/Box';
import React from 'react';

/**
 * Component that contains all graphs
 *
 * @returns MUI box component
 */
export function GraphComponent(): JSX.Element {
  return (
    <Box
      data-testid="graph-component"
      sx={{
        flexDirection: 'column',
        display: 'flex',
        paddingTop: '7vh',
        paddingBottom: '3vh',
        backgroundColor: 'primary.light2',
        '&:hover': {
          backgroundColor: 'primary.light1',
        },
      }}
    >
      <Box> Put graphs here first! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
      <Box> Put graphs here! </Box>
    </Box>
  );
}

/**
 * Component that contains all infoboxes
 *
 * @returns MUI box component
 */
export function InfoboxComponent(): JSX.Element {
  return (
    <Box
      data-testid="infobox-component"
      sx={{
        flexDirection: 'row',
        display: 'flex',
        backgroundColor: 'primary.main',
        flexWrap: 'wrap',
        color: 'secondary.main',
        justifyContent: 'space-evenly',
        '&:hover': {
          backgroundColor: 'primary.light1',
          color: 'primary.dark',
        },
      }}
    >
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
      <Box>Put infoboxes here! </Box>
    </Box>
  );
}

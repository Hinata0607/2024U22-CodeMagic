import React from 'react';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingBtn = () => {
  return (
    <IconButton
      aria-label="settings"
      sx={{
        position: 'fixed',
        top: '15px',
        right: '15px',
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      <SettingsIcon sx={{ fontSize: '2.5rem' }}  />
    </IconButton>
  );
};

export default SettingBtn;

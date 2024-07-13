import { Box } from '@mui/material';
import React from 'react';
import StartBtn from './_components/block/StartBtn';
import SettingBtn from './_components/block/SettingBtn';

const Page = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
    
      <Box
        position="absolute"
        top="10px"
        right="10px"
      >
        {/* 右上設定ボタン */}
        <SettingBtn />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        flexDirection="column"
      >
        <Box textAlign="center">
          <img src="/CodeMagic01_Black.svg" alt="Code Magic" style={{ width: '700px' }} />
        </Box>
        
        <Box
          display="flex"
          justifyContent="center"
        >
          {/* Click to Start ボタン */}
          <StartBtn />
        </Box>
      </Box>

      {/* 右下のコピーライト */}
      <Box
        position="fixed"
        bottom="10px"
        right="10px"
        color="gray"
      >
        © 2024 Code Magic
      </Box>
    </Box>
  );
};

export default Page;

import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Paper, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PageSelectPage = () => {
  type Stagetype = {
    id: number;
    stage_name: string;
    stage_details: string;
  };

  const stageList: Stagetype[] = [
    {
      id: 1,
      stage_name: 'ステージ1',
      stage_details: 'ここにステージ1の説明が入ります',
    },
    {
      id: 2,
      stage_name: 'ステージ2',
      stage_details: 'ここにステージ2の説明が入ります',
    },
    {
      id: 3,
      stage_name: 'ステージ3',
      stage_details: 'ここにステージ3の説明が入ります',
    },
    {
      id: 4,
      stage_name: 'ステージ4',
      stage_details: 'ここにステージ4の説明が入ります',
    },
    {
      id: 5,
      stage_name: 'ステージ5',
      stage_details: 'ここにステージ5の説明が入ります',
    },
    {
      id: 6,
      stage_name: 'ステージ6',
      stage_details: 'ここにステージ6の説明が入ります',
    },
    {
      id: 7,
      stage_name: 'ステージ7',
      stage_details: 'ここにステージ7の説明が入ります',
    },
    {
      id: 8,
      stage_name: 'ステージ8',
      stage_details: 'ここにステージ8の説明が入ります',
    },
  ];

  const contentWidth = '100%'; // コンテンツの幅を親要素に合わせる

  return (
    <Box display="flex" flexDirection="column" height="100vh" bgcolor="#E0E0E0" p={2}>
      <Box position="absolute" top={126} left={86} sx={{ zIndex: 1300 }} bgcolor="black">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box display="flex" width="100%" justifyContent="center" alignItems="center" flexGrow={1}>
        <Paper elevation={3} style={{ flex: 1, padding: 16, marginRight: 16, maxWidth: '45%', margin: "0 auto" }}>
          <Box width={contentWidth} display="flex" justifyContent="center">
            <Image src="/thumbnail.webp" alt="ステージ画像" width={600} height={300} />
          </Box>
          <Box
            width={contentWidth}
            height={150}
            my={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            p={2}
            sx={{ border: '2px solid grey' }}
          >
            <Typography variant="h6" textAlign="left" width="100%">ステージ名</Typography>
            <Typography variant="body1" textAlign="left" width="100%">
              ステージ説明が入りますステージ説明が入りますステージ説明が入りますステージ説明が入ります
              ステージ説明が入りますステージ説明が入ります
            </Typography>
          </Box>
        </Paper>
        <Paper elevation={3} style={{ flex: 1, padding: 16, maxWidth: '45%', height: '500px', overflowY: 'scroll' }}>
          <List>
            {stageList.map((stage) => (
              <ListItem key={stage.id} button>
                <ListItemText primary={stage.stage_name} secondary={stage.stage_details} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default PageSelectPage;

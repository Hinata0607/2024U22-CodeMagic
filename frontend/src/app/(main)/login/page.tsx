"use client"

import React from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography, Button, Tabs, Tab, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
          },
        },
        input: {
          color: 'black',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
  },
});

const PageLogin = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" alignItems="center" height="100vh" bgcolor={'#FFFFFF'}>
        <Typography variant="h2" textAlign="center" width="100%" color={'black'} marginBottom={4} marginTop={8}>
          CODE MAGIC
        </Typography>
        <Tabs value={value} onChange={handleChange} aria-label="login tabs" textColor="primary" indicatorColor="primary">
          <Tab label="ログイン" />
          <Tab label="新規登録" />
        </Tabs>
        <Box display="flex" flexDirection="column" alignItems="center" width="550px" marginTop={2}>
          <TextField fullWidth margin="normal" label="メールアドレス" variant="outlined" />
          <TextField fullWidth margin="normal" label="パスワード" type="password" variant="outlined" />
          <Typography marginTop={1} alignSelf="flex-start" style={{ color: 'black' }}>
            パスワードを忘れた方は 
            <Link href="#" color="textSecondary" underline="hover" style={{ color: 'black', fontWeight: 'bold' }}>
              こちら
            </Link>
          </Typography>
          <Button fullWidth variant="contained" color="primary" size="large" style={{ marginTop: '16px' }}>
            ログイン
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PageLogin;



















// import React from 'react';
// import Box from '@mui/material/Box';
// import { TextField, Typography } from '@mui/material';

// const PageLogin = () => {
  
//   return (
//     <Box display="flex" flexDirection="column" height="100vh" p={2} bgcolor={'white'}>
//         <Typography variant="h1" textAlign="center" width="100%" color={'black'}>
//             CODE MAGIC
//         </Typography>
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{backgroundColor: 'black'}} />
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{backgroundColor: 'black'}} />
//     </Box>
//   );
// };

// export default PageLogin;

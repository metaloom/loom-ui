import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DashboardDrawerLeft from './DashboardDrawerLeft';
import DashboardContentBox from './DashboardContentBox';
import TopBar from './TopBar';

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
       <CssBaseline />
       <TopBar open={open} setOpen={setOpen}/>
       <DashboardDrawerLeft open={open} setOpen={setOpen}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <DashboardContentBox/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

import * as React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import DashboardDrawerLeft from './DashboardDrawerLeft';
import DashboardContentBox from '../Content/ContentArea';
import TopBar from './TopBar';
import ContentArea from '../Content/ContentArea';
import AssetArea from '../Asset/AssetArea';

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
          <Routes>
            <Route path="dash" element={<DashboardContentBox/> }/>
            <Route path="/" element={<DashboardContentBox/>}/>
            <Route path="/assets" element={<AssetArea/>}/>       
            <Route path="/contents" element={<ContentArea/>}/>       
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

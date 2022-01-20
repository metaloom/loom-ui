import * as React from "react";
import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DashboardDrawer from "./DashboardDrawer";
import DashboardContentBox from "../Content/ContentArea";
import TopBar from "./TopBar";
import ContentArea from "../Content/ContentArea";
import AssetArea from "../Asset/AssetArea";

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar open={open} setOpen={setOpen} />
      <DashboardDrawer open={open} setOpen={setOpen} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="contents" element={<ContentArea />} />
          <Route path="content2" element={<DashboardContentBox />} />
          <Route path="content3" element={<DashboardContentBox />} />
          <Route path="assets" element={<AssetArea />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

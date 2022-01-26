import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DashboardDrawer from "./DashboardDrawer";
import DashboardContentBox from "../Content/ContentArea";
import TopBar from "./TopBar";
import ContentArea from "../Content/ContentArea";
import AssetArea from "../Asset/AssetArea";
import PipelineArea from "../Pipeline/PipelineArea";
import { styled } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://metaloom.io/">
        Loom
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  return (
    <Grid container sx={{ display: "flex" }}>
        <CssBaseline />
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
            marginTop: "100px",
            overflow: "auto",
          }}
        >
          <TopBar open={open} setOpen={setOpen} />

          <Container maxWidth="lg" sx={{ mt: 20, mb: 4 }}>
            <Grid item xs={12}>
              <Routes>
                <Route path="contents" element={<ContentArea />} />
                <Route path="content2" element={<DashboardContentBox />} />
                <Route path="content3" element={<DashboardContentBox />} />
                <Route path="assets" element={<AssetArea />} />
                <Route path="pipelines" element={<PipelineArea />} />
              </Routes>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
    </Grid>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}

import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AssetList from "../Asset/AssetList";
import Container from "@mui/material/Container";
import AssetMetadataDrawer from "./AssetMetadataDrawer";

export default function AssetArea() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb:4 }}>
      <Grid container spacing={1}>
        {/* Assets */}
        <Grid item xs={12} md={8} lg={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 440,
            }}
          >
            <AssetList />
          </Paper>
        </Grid>
      </Grid>
      <AssetMetadataDrawer/>
    </Container>
  );
}

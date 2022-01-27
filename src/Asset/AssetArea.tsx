import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AssetList from "../Asset/AssetList";
import Container from "@mui/material/Container";
import AssetMetadataDrawer from "./AssetMetadataDrawer";

export default function AssetArea() {
  return (
    <Grid container spacing={3}>
      {[...Array(36)].map((x, i) => (
        <Grid item xs={3}>
          <Paper
            sx={{
              p: 2,
              height: 200,
            }}
          >
            <AssetList />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  //  <AssetMetadataDrawer/>
}

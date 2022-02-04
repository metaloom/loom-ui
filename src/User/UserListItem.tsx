import * as React from "react";
import Title from "../Demo/Title";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";

export default function UserListItem() {
  return (
    <Grid item xs={12}>
      <Paper
        sx={{
          p: 2,
          height: 100,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={2}>
            <Title>Gravatar</Title>
          </Grid>
          <Grid item xs={2}>
            <Title>User Joe Doe</Title>
          </Grid>
          <Grid item xs={2}>
            <Title>Mail</Title>
          </Grid>
          <Grid item xs={3}>
            <Title>Status (Maybe visible via image alpha + alt)</Title>
          </Grid>
          <Grid item xs={3}>
            <MaterialLink component={RouterLink} to="/dash/users">
              <Title>ACL</Title>
            </MaterialLink>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

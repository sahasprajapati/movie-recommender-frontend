import React from "react";

import ComplexGrid from "../Section/Grid";
import TestGrid from "../Section/Test";
import TopNavBar from "../../components/AppBar/TopNavBar";
import { Container, Typography, Grid, Paper } from "@material-ui/core";

export default function Layout() {
  return (
    <Container maxWidth={"lg"}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <TopNavBar />
        </Grid>
        <Grid item>
          <ComplexGrid />
        </Grid>
        <Grid item>
          <TestGrid />
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Paper>
              <Typography>Sah</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Typography>Sah</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import "./professia.css";

const Professia = () => {
  return (
    <div className="professia">
      <Container maxWidth="lg">
        <p className="professiaTitle">okuw hunarleri</p>
        <span
          style={{
            marginTop: "20px",
            fontWeight: "600",
            marginBottom: "30px",
          }}
        >
          Orta mekdep ucurymlary we ululary hunarler boyunca okuwa cagyryar:
        </span>
        <Grid container>
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Stack direction="row" spacing={5} className="professiaTypeButton">
              <button>10 ay</button>
              <button>1.5 yyl</button>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}></Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Professia;

import { Grid, Stack } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid item lg={4} md={6} xs={12} sm={12}>
          <Stack>
            <img src="./image/Gerb.svg" style={{ width: "130px" }} alt="#" />
            <label>
              Aşgabat şäher häkimliginiň <br /> 8-nji hünär okuw mekdebi
            </label>
          </Stack>
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={12}>
          <Stack>
            <img src="./image/Gerb.svg" style={{ width: "130px" }} alt="#" />
            <label>
              Aşgabat şäher häkimliginiň <br /> 8-nji hünär okuw mekdebi
            </label>
          </Stack>
        </Grid>
        <Grid item lg={4} md={6} xs={12} sm={12}>
          <Stack>
            <img src="./image/Gerb.svg" style={{ width: "130px" }} alt="#" />
            <label>
              Aşgabat şäher häkimliginiň <br /> 8-nji hünär okuw mekdebi
            </label>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

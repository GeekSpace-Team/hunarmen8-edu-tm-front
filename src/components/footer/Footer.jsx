import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container maxWidth="lg">
        <Grid container mt={5}>
          {/* First column start here */}

          <Grid item lg={4} md={4} sm={6} xs={12} textAlign="center">
            <Stack direction="column" alignItems={"center"} spacing={3}>
              <img src="./image/Gerb.svg" width="130px" alt="#" />
              <span className="footerText">
                asgabat saher hakimliginin 8-nji hunar-tehniki okuw mekdebi
              </span>
            </Stack>
          </Grid>

          {/* First column ends here */}

          {/* Second column start here */}

          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack direction="column" spacing={2} alignItems="center">
              <p>Bas sahypa</p>
              <p>Biz Barada</p>
              <p>Okuw meyilnamalar</p>
              <p>Habarlasmak ucin</p>
            </Stack>
          </Grid>

          {/* Second column ends here */}

          {/* Third column start here */}
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>Salgysy: </b>
                </p>
                <p>Ashgabat saheri, Gorogly kochesi, 91 (20)</p>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>Elektron pocta:</b>
                </p>
                <a href="bhom8@mail.ru" className="phoneNumbersFooter">
                  bhom8@mail.ru
                </a>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>Telefon belgisi:</b>
                </p>
                <a href="tel:+99312 92 73 08" className="phoneNumbersFooter">
                  +(993) 12 92 73 08
                </a>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Stack direction="column" ml={"36%"}>
                <a href="tel:+99312 92 47 83" className="phoneNumbersFooter">
                  +(993) 12 92 47 83
                </a>
                <a href="tel:+99312 92 47 89" className="phoneNumbersFooter">
                  +(993) 12 92 47 89
                </a>
              </Stack>
            </Grid>
          </Grid>

          {/* Third column ends here */}
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} pt={7} textAlign="center">
          <p>Asgabat saher hakimliginin 8-nji hunar-tehniki okuw mekdebi</p>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

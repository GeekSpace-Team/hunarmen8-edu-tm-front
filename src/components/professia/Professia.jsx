import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import "./professia.css";
import img1 from "../../img/img1.JPG";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <Grid container className="professiaDepartment">
          <Grid item lg={12} md={12} xs={12} sm={12}></Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Stack direction="column" spacing={5} mt={3}>
              <p>
                <b>Sanly maglumaty islap tayyarlamak boyunca ussa</b>
              </p>
              <p>
                <b>Is yorediji</b>
              </p>
              <p>
                <b>Tikinci-bicimci</b>
              </p>
              <p>
                <b>Ceper bezeg islerini yerine yetiriji</b>
              </p>
              <p>
                <b>
                  Kesbirleyji (elektro kebsirleme we gaz bilen kebsirleme
                  isleri)
                </b>
              </p>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Carousel
              className="main-slide"
              showThumbs={false}
              autoPlay={true}
              showArrows={false}
              emulateTouch={true}
              showStatus={false}
              infiniteLoop={true}
            >
              <div className="professiaImg">
                <img src={img1} alt="#" />
              </div>
              <div className="professiaImg">
                <img src={img2} alt="#" />
              </div>
              <div className="professiaImg">
                <img src={img3} alt="#" />
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Professia;

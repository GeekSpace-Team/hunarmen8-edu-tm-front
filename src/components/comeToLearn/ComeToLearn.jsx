import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./comeToLearn.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../img/img1.JPG";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";

const ComeToLearn = () => {
  return (
    <div className="comeToLearn">
      <p className="comeTitle">bize okamaga gelin!</p>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
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
              <div className="comeToLearnImg">
                <img src={img1} alt="#" />
              </div>
              <div className="comeToLearnImg">
                <img src={img2} alt="#" />
              </div>
              <div className="comeToLearnImg">
                <img src={img3} alt="#" />
              </div>
            </Carousel>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Stack>
              <h3 style={{ marginTop: "-40px" }}>
                okuwlaryn gunduzki we agsamky bolumleri bar
              </h3>
              <span
                style={{
                  marginTop: "20px",
                  fontWeight: "600",
                  marginBottom: "30px",
                }}
              >
                Resminamalar iyul ayynyn 01-den awgust ayynyn 28-ne cenli irden
                8<sup>00</sup>-dan 18<sup>00</sup> cenli kabul edilyar.
              </span>
              <p style={{ marginBottom: "20px" }}>Gerekli resminamalar:</p>
              <Stack spacing={2}>
                <ul style={{ marginLeft: "7%" }}>
                  <li>passportyn nusgasy</li>
                  <li style={{ marginTop: "3px" }}>
                    orta bilim hakyndaky attestat we onun nusgasy
                  </li>
                  <li style={{ marginTop: "3px" }}>
                    onki okan ya-da isleyan yerinden hasiyetnama
                  </li>
                  <li style={{ marginTop: "3px" }}>harby biledin nusgasy</li>
                  <li style={{ marginTop: "3px" }}>
                    yasayan yerinden guwa haty (Forma №3)
                  </li>
                  <li style={{ marginTop: "3px" }}>6 surat (3x4)</li>
                  <li style={{ marginTop: "3px" }}>lukmancylyk guwanamasy,</li>
                  <li style={{ marginTop: "3px" }}>
                    uc arka we maglumat (cap edilen we elektron gornusi).
                  </li>
                </ul>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ComeToLearn;

import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import "./comeToLearn.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img13 from "../../img/img13.jpg";
import img9 from "../../img/img9.jpg";
import img14 from "../../img/img14.jpg";
import img15 from "../../img/img15.jpg";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";

const ComeToLearn = () => {
  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem("lang");
    // nodeRef = {nodeRef}
    if (l != null && typeof l !== "undefined") {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("ru");
    }
  }, []);

  return (
    <div className="comeToLearn">
      <Grid container>
        <Grid item lg={5} md={5} sm={12} xs={12}></Grid>
        <Grid item lg={7} md={7} sm={12} xs={12} mb={9} className="firstWord">
          <Stack direction="column" spacing={0.5}>
            <span className="spanMedia">{t("come")}</span>
            <img
              className="lineMedia"
              src="./image/Line.svg"
              alt="#"
              style={{ width: "80px" }}
            />
          </Stack>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} xs={12} sm={12} mt={3}>
            <div className="responsive">
              <Carousel
                className="main-slide comeLearn"
                showThumbs={false}
                autoPlay={true}
                showArrows={false}
                interval={7000}
                transitionTime={3000}
                emulateTouch={true}
                showStatus={false}
                infiniteLoop={true}
              >
                <div className="comeToLearnImg">
                  <img src={img9} alt="#" />
                </div>
                <div className="comeToLearnImg">
                  <img src={img13} alt="#" />
                </div>
                <div className="comeToLearnImg">
                  <img src={img14} alt="#" />
                </div>
                <div className="comeToLearnImg">
                  <img src={img15} alt="#" />
                </div>
              </Carousel>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12} mt={-7}>
            <Stack>
              <h3 style={{ marginTop: "40px" }}>{t("gijeki")}</h3>
              <span
                style={{
                  marginTop: "20px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontFamily: "fontRegular",
                  fontSize: "15px",
                  lineHeight: "23px",
                }}
                className="MediaResminama"
              >
                {t("resmi")}
                <br />8<sup>00</sup>
                {t("dan")} 18<sup>00</sup> {t("namalar")}
              </span>
              <span
                style={{
                  marginTop: "20px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontFamily: "fontRegular",
                  fontSize: "15px",
                  lineHeight: "23px",
                }}
                className="mediaResminama"
              >
                {t("resmi")}8<sup>00</sup>
                {t("dan")} 18<sup>00</sup> {t("namalar")}
              </span>
              <p style={{ marginBottom: "15px", fontFamily: "fontRegular" }}>
                {t("resminamaSanaw")}
              </p>
              <Stack spacing={2} className="departmentLissey">
                <ul style={{ marginLeft: "7%" }}>
                  <li>{t("list1")}</li>
                  <li style={{ marginTop: "3px" }}>{t("list2")}</li>
                  <li style={{ marginTop: "3px" }}>{t("list3")}</li>
                  <li style={{ marginTop: "3px" }}>{t("list4")}</li>
                  <li style={{ marginTop: "3px" }}>
                    {t("list5a")} {t("list5b")}
                  </li>
                  <li style={{ marginTop: "3px" }}>{t("list6")} (3x4)</li>
                  <li style={{ marginTop: "3px" }}>{t("list7")}</li>
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

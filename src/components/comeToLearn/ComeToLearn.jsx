import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import "./comeToLearn.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../img/img1.JPG";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
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
        <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
        <Grid item lg={8} md={8} sm={12} xs={12} mb={5} className="firstWord">
          <span>{t("come")}</span>
          <label>{t("okamaGel")}</label>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Carousel
              className="main-slide comeLearn"
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
              <h3 style={{ marginTop: "40px" }}>{t("gijeki")}</h3>
              <span
                style={{
                  marginTop: "20px",
                  fontWeight: "600",
                  marginBottom: "30px",
                }}
              >
                {t("resmi")}8<sup>00</sup>
                {t("dan")} 18<sup>00</sup> {t("namalar")}
              </span>
              <p style={{ marginBottom: "20px" }}>{t("resminamaSanaw")}</p>
              <Stack spacing={2}>
                <ul style={{ marginLeft: "7%" }}>
                  <li>{t("list1")}</li>
                  <li style={{ marginTop: "3px" }}>{t("list2")}</li>
                  <li style={{ marginTop: "3px" }}>{t("list3")}</li>
                  <li style={{ marginTop: "3px" }}>{t("list4")}</li>
                  <li style={{ marginTop: "3px" }}>
                    {t("list5a")} {t("list5b")}
                  </li>
                  <li style={{ marginTop: "3px" }}>{t("list6")} (3x4),</li>
                  <li style={{ marginTop: "3px" }}>{t("list7")}</li>
                  <li style={{ marginTop: "3px" }}>
                    {t("list8a")} {t("list8b")}
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

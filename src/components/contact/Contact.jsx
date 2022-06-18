import { Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-maps";
import { i18n } from "../../Language/LangConfig";
import "./contact.css";

const Contact = () => {
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
    <div className="contact">
      <Container maxWidth="lg">
        <Grid container className="infoMedia">
          <Grid item lg={5.5} md={5.5} xs={12} sm={12} className="kon">
            <Stack className="adresMedia" direction={"row"} spacing={2}>
              <span style={{ fontWeight: "500" }}>{t("adress")}</span>
              <span className="spanMedia">{t("addres")}</span>
            </Stack>
            <Stack direction="row" spacing={3} mt={3}>
              <Stack direction="column" spacing={3}>
                <span style={{ fontWeight: "500" }}>{t("mail")}</span>
                <span style={{ fontWeight: "500" }}>{t("phone")}</span>
              </Stack>
              <Stack direction="column" spacing={3}>
                <a className="phoneNumbersContact" href="mail:bhom8@mail.ru">
                  bhom8@mail.ru
                </a>
                <Stack direction="column" spacing={1}>
                  <a className="phoneNumbersContact" href="tel:+99312 92 73 08">
                    +(993) 12 92 73 08
                  </a>
                  <a className="phoneNumbersContact" href="tel:+99312 92 47 83">
                    +(993) 12 92 47 83
                  </a>
                  <a className="phoneNumbersContact" href="tel:+99312 92 47 89">
                    +(993) 12 92 47 89
                  </a>
                </Stack>
              </Stack>
            </Stack>
            <Grid item lg={12} md={12} xs={12} sm={12} mb={5}></Grid>

            <Grid item lg={12} md={12} xs={12} sm={12} mb={5}>
              <Stack
                className="pochtaMedia"
                direction="row"
                spacing={3}
              ></Stack>
            </Grid>

            <Grid item lg={12} md={12} xs={12} sm={12} mt={3}>
              <Stack direction="row" spacing={2.5}></Stack>
            </Grid>
            <Grid container>
              <Grid item lg={3} md={3} xs={4} sm={4}></Grid>
              <Grid item lg={9} md={9} xs={6} sm={6} mt={-6.1}>
                <Stack spacing={0.5} className="pnFooter"></Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* media section starts here */}
          <div className="mediaStackStart">
            <Stack direction="row" spacing={1} mb={3}>
              <span className="phnimber">{t("adress")}</span>
              <p style={{ fontFamily: "fontRegular", fontSize: "15px" }}>
                {t("addres")}
              </p>
            </Stack>
            <Stack direction="row" className="generalStack">
              <Stack direction="column" className="firstRowStack" spacing={5}>
                <span className="phnimber">{t("mail")}</span>
                <span className="phnimber">{t("phone")}</span>
              </Stack>
              <Stack direction="column" spacing={5} className="secondRowStack">
                <a
                  className="phnimber"
                  style={{ fontFamily: "fontRegular", fontSize: "16px" }}
                  href="mailto:bhom8@mail.ru"
                >
                  bhom8@mail.ru
                </a>
                <Stack direction="column" spacing={2}>
                  <a className="phnimber" href="tel:+99312 92 73 08">
                    +(993) 12 92 73 08
                  </a>
                  <a className="phnimber" href="tel:+99312 92 47 83">
                    +(993) 12 92 47 83
                  </a>
                  <a className="phnimber" href="tel:+99312 92 47 89">
                    +(993) 12 92 47 89
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </div>
          {/* media section ends here */}

          <Grid item lg={6.5} md={6.5} xs={12} sm={12} mt={-12}>
            <Grid container>
              <Grid item lg={12} md={12} xs={2.5} sm={2.5}></Grid>
              <Grid item lg={12} md={12} sm={8.5} xs={8.5} pb={4}>
                <Stack
                  direction="column"
                  spacing={0.5}
                  className="contactMediaTitle"
                >
                  <label>{t("kontact")}</label>
                  <img
                    src="./image/Line.svg"
                    alt="#"
                    style={{ width: "95px" }}
                  />
                </Stack>
              </Grid>
            </Grid>
            <YMaps>
              <div>
                <Map
                  width={"100%"}
                  defaultState={{
                    center: [37.941735, 58.372644],
                    zoom: 16,
                  }}
                >
                  <Placemark geometry={[37.941735, 58.372644]} />
                  <FullscreenControl options={{ float: "left" }} />
                </Map>
              </div>
            </YMaps>
          </Grid>
        </Grid>
      </Container>

      <Grid container className="mediamedia">
        <Grid item lg={6} md={6} xs={12} sm={12} mt={-12}></Grid>
      </Grid>
      <Grid container>
        <Grid item lg={12} md={12} xs={12} sm={12} textAlign="center">
          <p>
            <b style={{ fontFamily: "fontMedium" }}>{t("busDirection")}</b>
          </p>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} xs={12} sm={12} textAlign="center" mt={2}>
            <Stack direction="column" className="digitalBus" spacing={2}>
              <span className="mediaListBus">
                №
                6,8,10,13,14,15,16,21,22,23,26,30,38,40,49,50,51,56,58,61,62,63
              </span>
              <pre className="mediaListBuss">
                № 6,8,10,13,14,15,16,21,22,23,26,
                <br />
                30,38,40,49,50,51,56,58,61,62,63
              </pre>
            </Stack>
          </Grid>
        </Grid>

        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          sm={12}
          mt={0}
          textAlign="center"
        ></Grid>
      </Grid>
    </div>
  );
};

export default Contact;

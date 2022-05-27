import { Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
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
        <Grid container>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Grid item lg={12} md={12} xs={12} sm={12} mb={3}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>{t("adress")} </b>
                </p>
                <p>{t("addres")}</p>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={7}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>{t("phone")}</b>
                </p>
                <a
                  href="tel:+99312 92 73 08"
                  style={{ marginBottom: "5px" }}
                  className="phoneNumbers"
                >
                  +(993) 12 92 73 08
                </a>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Stack direction="column" ml={"24%"}>
                <a href="tel:+99312 92 47 83" className="phoneNumbers">
                  +(993) 12 92 47 83
                </a>
                <a href="tel:+99312 92 47 89" className="phoneNumbers">
                  +(993) 12 92 47 89
                </a>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={5}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>{t("mail")}</b>
                </p>
                <a href="bhom8@mail.ru" className="phoneNumbers">
                  bhom8@mail.ru
                </a>
              </Stack>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12} mt={-15}>
            <Grid item lg={12} md={12} sm={12} xs={12} pb={5}>
              <span className="forContact">{t("forContact")}</span>
            </Grid>
            <iframe
              src="https://yandex.ru/map-widget/v1/-/CCUJIGBjwC"
              style={{
                outline: "none",
                border: "none",
                marginBottom: "50px",
              }}
              width="100%"
              height="300"
            ></iframe>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} xs={12} sm={12} mt={10} textAlign="center">
          <Stack direction="column" spacing={2}>
            <p>
              <b>{t("busDirection")}</b>
            </p>
            <span>
              № 6,8,10,13,14,15,16,21,22,23,26,30,38,40,49,50,51,56,58,61,62,63
            </span>
          </Stack>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;

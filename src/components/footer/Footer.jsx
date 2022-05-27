import { Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import "./footer.css";

const Footer = () => {
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
    <div className="footer" id="footer">
      <Container maxWidth="lg">
        <Grid container mt={5}>
          {/* First column start here */}

          <Grid item lg={4} md={4} sm={12} xs={12} textAlign="center">
            <Stack direction="column" alignItems={"center"} spacing={3}>
              <img src="./image/Gerb.svg" width="130px" alt="#" />
              <span className="footerText">{t("title")}</span>
            </Stack>
          </Grid>

          {/* First column ends here */}

          {/* Second column start here */}

          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Stack direction="column" className="footerDeartment" spacing={2}>
              <Link
                spy={true}
                smooth={true}
                to="header"
                activeClass="activeClass"
              >
                <li>{t("homePage")}</li>
              </Link>
              <Link spy={true} smooth={true} to="comeToLearn">
                <li>{t("aboutUs")}</li>
              </Link>
              <Link spy={true} smooth={true} to="professia">
                <li>{t("raspisaniya")}</li>
              </Link>
              <Link spy={true} smooth={true} to="contact">
                <li>{t("contactUs")}</li>
              </Link>
            </Stack>
          </Grid>

          {/* Second column ends here */}

          {/* Third column start here */}
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>{t("adress")}</b>
                </p>
                <p>{t("addres")}</p>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>{t("mail")}</b>
                </p>
                <a href="bhom8@mail.ru" className="phoneNumbersFooter">
                  bhom8@mail.ru
                </a>
              </Stack>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} mt={2}>
              <Stack direction="row" spacing={3}>
                <p>
                  <b>{t("phone")}</b>
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
          <p>{t("title")}</p>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

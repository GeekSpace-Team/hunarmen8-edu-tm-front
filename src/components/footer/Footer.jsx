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
          <Grid item lg={1} md={1}></Grid>
          {/* Second column start here */}

          <Grid item lg={2} md={2} sm={6} xs={12}>
            <Stack direction="column" className="footerDeartment" spacing={2}>
              <Link
                spy={true}
                smooth={true}
                to="header"
                className="bottomNavbar"
                activeClass="activeClass"
              >
                <li style={{ marginTop: "-10px" }}>{t("homePage")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="bottomNavbar"
                to="comeToLearn"
              >
                <li>{t("aboutUs")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="bottomNavbar"
                to="professia"
              >
                <li>{t("raspisaniya")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="bottomNavbar"
                to="contact"
              >
                <li>{t("contactUs")}</li>
              </Link>
            </Stack>
          </Grid>

          {/* Second column ends here */}
          <Grid item lg={1} md={1}></Grid>

          {/* Third column start here */}
          <Grid item lg={4} md={4} sm={12} xs={12} className="gorunmeMedia">
            <Stack direction={"row"} spacing={2}>
              <span className="infoSpan">{t("adress")}</span>
              <p style={{ fontFamily: "fontRegular", fontSize: "15px" }}>
                {t("addres")}
              </p>
            </Stack>
            <Stack direction="row" spacing={4} mt={4}>
              <Stack direction="column" spacing={4}>
                {" "}
                <span className="infoSpan">{t("saytAdress")}</span>
                <span className="infoSpan">{t("mail")}</span>
                <span className="infoSpan">{t("phone")}</span>
              </Stack>
              <Stack direction="column" spacing={4}>
                <a
                  className="phoneNumbersFooter"
                  style={{ fontFamily: "fontRegular", fontSize: "16px" }}
                  href="https://www.hunarmen8.edu.tm"
                >
                  www.hunarmen8.edu.tm
                </a>
                <a
                  className="phoneNumbersFooter"
                  style={{ fontFamily: "fontRegular", fontSize: "16px" }}
                  href="mailto:bhom8@mail.ru"
                >
                  bhom8@mail.ru
                </a>
                <Stack direction="column" spacing={2}>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 73 08">
                    +(993) 12 92 73 08
                  </a>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 47 83">
                    +(993) 12 92 47 83
                  </a>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 47 89">
                    +(993) 12 92 47 89
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* third column media starts here */}
          <div className="mediaStackStart">
            <Stack direction="row" spacing={1} mb={3}>
              <span className="infoSpan">{t("adress")}</span>
              <p style={{ fontFamily: "fontRegular", fontSize: "15px" }}>
                {t("addres")}
              </p>
            </Stack>
            <Stack direction="row" className="generalStack">
              <Stack direction="column" className="firstRowStack" spacing={3}>
                <span className="infoSpan">{t("saytAdress")}</span>
                <span className="infoSpan">{t("mail")}</span>
                <span className="infoSpan">{t("phone")}</span>
              </Stack>
              <Stack direction="column" spacing={3} className="secondRowStack">
                <a
                  className="phoneNumbersFooter"
                  style={{ fontFamily: "fontRegular", fontSize: "16px" }}
                  href="https://www.hunarmen8.edu.tm"
                >
                  www.hunarmen8.edu.tm
                </a>
                <a
                  className="phoneNumbersFooter"
                  style={{ fontFamily: "fontRegular", fontSize: "16px" }}
                  href="mailto:bhom8@mail.ru"
                >
                  bhom8@mail.ru
                </a>
                <Stack direction="column" spacing={2}>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 73 08">
                    +(993) 12 92 73 08
                  </a>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 47 83">
                    +(993) 12 92 47 83
                  </a>
                  <a className="phoneNumbersFooter" href="tel:+99312 92 47 89">
                    +(993) 12 92 47 89
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </div>
          {/* third column media ends here */}

          {/* Third column ends here */}
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} pt={7} textAlign="center">
          <span
            className="FooterTitttleT"
            style={{
              fontFamily: "fontRegular",
              wordSpacing: "3px",
              fontSize: "18px",
            }}
          >
            {t("titleeT")}
          </span>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} pt={7} textAlign="center">
          <span
            className="FooterTitttle"
            style={{
              fontFamily: "fontRegular",
              wordSpacing: "0px",
              fontSize: "17px",
            }}
          >
            {t("titlee")}
            <br />
            {t("titleee")}
          </span>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;

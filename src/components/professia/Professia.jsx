import { Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import "./professia.css";
import img1 from "../../img/img1.JPG";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Professia = () => {
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

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          {t("invitation")}
        </span>
        <Grid container className="professiaDepartment">
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                    <Tab label="Item Three" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Stack direction="column" spacing={5} mt={3}>
              <p>
                <b>{t("professia2")}</b>
              </p>
              <p>
                <b>{t("professia6")}</b>
              </p>
              <p>
                <b>{t("professia7")}</b>
              </p>
              <p>
                <b>{t("professia9")}</b>
              </p>
              <p>
                <b>
                  {t("professia11")}
                  {t("professia12")}
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

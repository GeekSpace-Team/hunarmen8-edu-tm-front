import { Container, Grid, Stack } from "@mui/material";
import React, { useEffect } from "react";
import img1 from "../../img/img1.JPG";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import { TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import "./professia.css";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  borderTopLeftRadius: "12px",
  borderBottom: "0px none transparent",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#007632",
    height: "48px",
    borderRadius: "12px",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    color: "#FFFFFF",
    borderRadius: "12px",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    borderRadius: "12px",
    borderColor: "#658AAC",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "#000000",
    textDecoration: "underline",
    textDecorationColor: "#000000",
    textUnderlineOffset: "6px",
    "&.Mui-selected": {
      color: "#fff",
      zIndex: "1",
      textDecoration: "underline",
      textDecorationColor: "#FFFFFF",
      borderRadius: "12px",
      textUnderlineOffset: "6px",
      borderWidth: "0px",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
    },
  })
);

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

  const tab1 = t("timee");

  const tab2 = t("time");
  return (
    <div>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1} mb={4}>
          <p
            style={{
              fontSize: "3vw",
              fontWeight: "500",
              textDecoration: "underline",
              textUnderlineOffset: "10px",
              textTransform: "uppercase",
            }}
          >
            {t("okuw")}
          </p>
          <span
            style={{
              fontSize: "3vw",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            {t("hunar")}
          </span>
        </Stack>
        <span
          style={{
            marginTop: "20px",
            fontWeight: "600",
            marginBottom: "30px",
          }}
        >
          {t("invitation")}
        </span>
        <Grid container className="professia">
          <Grid item lg={12} md={12} xs={12} sm={12}>
            <Box
              sx={{
                // borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <StyledTab label={tab1.replace(/ /g, "\u00a0")} value="1" />
                <StyledTab label={tab2.replace(/ /g, "\u00a0")} value="2" />
              </StyledTabs>
            </Box>
            <hr
              style={{
                marginTop: "20px",
                padding: "0.5px",
                background: "#000",
              }}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
            <Grid item lg={12} md={12} xs={12} sm={12}>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <TabPanel value="1">
                    <Grid item lg={12} md={12} xs={12} sm={12}>
                      <Stack
                        className="professiaName"
                        direction="column"
                        spacing={1.5}
                        mt={3}
                      >
                        <p>
                          <b>{t("professia1")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia3")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia4")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia5")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia8")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia10")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia13")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia14")}</b>
                        </p>
                        <hr />
                        <p>
                          <b>{t("professia15")}</b>
                        </p>
                        <hr />
                      </Stack>
                    </Grid>
                  </TabPanel>
                  <TabPanel value="2">
                    <Grid item lg={12} md={12} xs={12} sm={12}>
                      <Stack
                        className="professiaName"
                        direction="column"
                        spacing={1.5}
                        mt={3}
                      >
                        <p>
                          <b>{t("professia2")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia6")}</b>
                        </p>
                        <hr />

                        <p>
                          <b>{t("professia7")}</b>
                        </p>
                        <hr />

                        <p>
                          <b className="professiaName">{t("professia9")}</b>
                        </p>
                        <hr />

                        <p>
                          <b className="professiaName">
                            {t("professia11")}
                            {t("professia12")}
                          </b>
                        </p>
                        <hr />
                      </Stack>
                    </Grid>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12} pt={5} pl={5}>
            <Carousel
              className="main-slide"
              showThumbs={false}
              autoPlay={true}
              showArrows={false}
              emulateTouch={true}
              showStatus={false}
              infiniteLoop={true}
            >
              <div className="proffImg">
                <img src={img1} alt="#" />
              </div>
              <div className="proffImg">
                <img src={img2} alt="#" />
              </div>
              <div className="proffImg">
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

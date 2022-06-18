import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import { Link } from "react-scroll";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Drawer, Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { Nav, Bars, NavMenu } from "./NavbarItems";
import "./navbar.css";
import SwipeListener from "swipe-listener";

const useStyles = makeStyles({
  paper: {
    background: "black",
  },
});
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  list-style: none;
  margin: 0, 30px;
  padding-left: 42px;
  height: 100%;
  cursor: pointer;
  font-family: regularFont;
  font-size: 20px;
  &.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #fff;
  }
`;

const Navbar = () => {
  const listener = SwipeListener(document.body);

  const [firstLangClass, setFirstLangClass] = useState("langBtn");
  const [secondLangClass, setSecondLangClass] = useState("langBtn");
  const [lang, setLang] = useState("en");
  useEffect(() => {
    let l = localStorage.getItem("lang");
    if (l != null && typeof l !== "undefined") {
      setLang(l);
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("ru");
    }
  }, []);

  useEffect(() => {
    setFirstLangClass("langBtn");
    setSecondLangClass("langBtn");
    if (lang == "ru") {
      setFirstLangClass("langBtnActive");
    }
    if (lang == "tm") {
      setSecondLangClass("langBtnActive");
    }
  }, [lang]);

  const { t } = useTranslation();
  useEffect(() => {
    let l = localStorage.getItem("lang");
    if (l != null && typeof l !== "undefined") {
      i18n.changeLanguage(l);
    } else {
      i18n.changeLanguage("ru");
    }
  }, []);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleCloseNavMenu = () => {
    setOpen(false);
  };

  const langChange = (ln) => {
    i18n.changeLanguage(ln);
    setLang(ln);
    localStorage.setItem("lang", ln);
  };
  const classes = useStyles();

  const drawerBleeding = 56;

  document.body.addEventListener("swipe", function (e) {
    var directions = e.detail.directions;
    var x = e.detail.x;
    var y = e.detail.y;
    if (
      e.detail.target.className === "baseSliderImg" ||
      e.detail.target.className === "comeToLearnImg" ||
      e.detail.target.className === "proffImg"
    ) {
      setOpen(false);
    } else if (directions.left) {
      setOpen(true);
    }
    // console.log("Started horizontally at", x[0], "and ended at", x[1]);
    // console.log("Started vertically at", y[0], "and ended at", y[1]);
  });

  const list = (anchor) => (
    <>
      <div className="displayNone">
        <Box
          sx={{
            width: 250,
            height: "100vh",
          }}
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(true)}
          style={{ background: "#a19f9f" }}
        >
          <Stack direction={"column"}>
            <NavLink
              to="header"
              style={{ textTransform: "none" }}
              className="mobileLink"
            >
              {t("homePage")}
            </NavLink>
            <NavLink
              to="comeToLearn"
              style={{ textTransform: "none" }}
              className="mobileLink"
            >
              {t("aboutUs")}
            </NavLink>
            <NavLink
              to="professia"
              style={{ textTransform: "none" }}
              className="mobileLink"
            >
              {t("raspisaniyaa")}
            </NavLink>
            <NavLink
              to="contact"
              style={{ textTransform: "none" }}
              className="mobileLink"
            >
              {t("contactUs")}
            </NavLink>
            <br />
            <Stack direction={"row"} justifyContent="center" spacing={2}>
              <img
                src="./image/RuFlag.svg"
                alt="#"
                onClick={() => langChange("ru")}
                className={firstLangClass}
              />

              <img
                src="./image/TmFlag.svg"
                alt="#"
                onClick={() => langChange("tm")}
                className={secondLangClass}
              />
            </Stack>
          </Stack>
        </Box>
      </div>
    </>
  );
  return (
    <>
      <Nav className="head bgGlass">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item={true} xs={7}>
              <Stack justifyContent={"center"} direction={"row"}>
                <center>
                  <NavMenu style={{ textAlign: "center" }}>
                    <NavLink
                      spy={true}
                      smooth={true}
                      to="header"
                      activeClass="activeClass"
                      onClick={handleCloseNavMenu}
                      className="navBarItem"
                      style={{
                        fontWeight: "500",
                        textDecoration: "underline",
                        textUnderlineOffset: "7px",
                        fontFamily: "fontRegular",
                        fontSize: "20px",
                        cursor: "pointer",
                      }}
                    >
                      {t("homePage")}
                    </NavLink>
                    <NavLink
                      spy={true}
                      smooth={true}
                      to="comeToLearn"
                      activeClass="activeClass"
                      onClick={handleCloseNavMenu}
                      style={{
                        cursor: "pointer",
                        fontSize: "17px",
                        fontFamily: "fontRegular",
                      }}
                      className="navBarItem"
                    >
                      {t("aboutUs")}
                    </NavLink>
                    <NavLink
                      spy={true}
                      smooth={true}
                      to="professia"
                      activeClass="activeClass"
                      onClick={handleCloseNavMenu}
                      style={{
                        cursor: "pointer",
                        fontSize: "17px",
                        fontFamily: "fontRegular",
                      }}
                      className="navBarItem"
                    >
                      {t("raspisaniya")}
                    </NavLink>
                    <NavLink
                      spy={true}
                      smooth={true}
                      activeClass="activeClass"
                      onClick={handleCloseNavMenu}
                      style={{
                        cursor: "pointer",
                        fontSize: "17px",
                        fontFamily: "fontRegular",
                      }}
                      to="contact"
                      className="navBarItem"
                    >
                      {t("contactUs")}
                    </NavLink>
                  </NavMenu>
                </center>
              </Stack>
            </Grid>
            <Grid item={true} xs={2}>
              <Stack justifyContent={"flex-end"} direction={"row"}>
                <Bars onClick={toggleDrawer(true)} />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Nav>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;

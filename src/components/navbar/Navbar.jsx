import React, { useEffect, useState } from "react";
// import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import { Link } from "react-scroll";
import "./navbar.css";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Grid, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

import {
  Nav,
  // NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // InfoContainer,
} from "./NavbarItems";

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
  const [state, setState] = React.useState({
    left: false,
  });

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

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const langChange = (ln) => {
    i18n.changeLanguage(ln);
    setLang(ln);
    localStorage.setItem("lang", ln);
  };
  const classes = useStyles();

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ background: "#a19f9f" }}
    >
      <Stack direction={"column"}>
        <NavLink to="header" className="mobileLink">
          {t("homePage")}
        </NavLink>
        <NavLink to="comeToLearn" className="mobileLink">
          {t("aboutUs")}
        </NavLink>
        <NavLink to="professia" className="mobileLink salam">
          {t("raspisaniya")}
        </NavLink>
        <NavLink to="contact" className="mobileLink">
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
  );
  return (
    <>
      <Nav className="header bgGlass">
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item={true} xs={7}>
              <Stack justifyContent={"center"} direction={"row"}>
                <NavMenu>
                  <NavLink
                    spy={true}
                    smooth={true}
                    to="header"
                    activeClass="activeClass"
                    onClick={handleCloseNavMenu}
                    style={{ cursor: "pointer" }}
                    className="navBarItem"
                    style={{
                      fontWeight: "500",
                      textDecoration: "underline",
                      textUnderlineOffset: "7px",
                      fontFamily: "fontRegular",
                      fontSize: "20px",
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
              </Stack>
            </Grid>
            <Grid item={true} xs={2}>
              <Stack justifyContent={"flex-end"} direction={"row"}>
                <Bars onClick={toggleDrawer("right", true)} />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Nav>

      <SwipeableDrawer
        classes={{ paper: classes.paper }}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;

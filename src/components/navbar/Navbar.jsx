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

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const [firstLangClass, setFirstLangClass] = useState("langBtn");
  const [secondLangClass, setSecondLangClass] = useState("langBtn");
  // const [thirdLangClass, setThirdLangClass] = useState("langBtn");
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
    // setThirdLangClass("langBtn");
    if (lang == "ru") {
      setFirstLangClass("langBtnActive");
    }
    if (lang == "tm") {
      setSecondLangClass("langBtnActive");
    }
    // if (lang == "ru") {
    //   setThirdLangClass("langBtnActive");
    // }
  }, [lang]);

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

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ background: "white" }}
    >
      <Stack direction={"column"}>
        <Link to="header" className="mobileLink">
          {t("homePage")}
        </Link>
        <Link to="comeToLearn" className="mobileLink">
          {t("aboutUs")}
        </Link>
        <Link to="professia" className="mobileLink">
          {t("raspisaniya")}
        </Link>
        <Link to="contact" className="mobileLink">
          {t("contactUs")}
        </Link>
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
      {/* <AppBar
        position="static"
        style={{
          background: "#007632",
          marginTop: "50px",
          height: "10vh",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              style={{
                background: "#000",
                width: "50%",
              }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link
                spy={true}
                smooth={true}
                to="header"
                activeClass="activeClass"
                onClick={handleCloseNavMenu}
                className="activLink"
              >
                <li>{t("homePage")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="comeToLearn"
                onClick={handleCloseNavMenu}
                className="activLink"
              >
                <li>{t("aboutUs")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="professia"
                onClick={handleCloseNavMenu}
                className="activLink"
              >
                <li>{t("raspisaniya")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="contact"
                onClick={handleCloseNavMenu}
                className="activLink"
              >
                <li>{t("contactUs")}</li>
              </Link>
            </Menu>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
            className="nothing"
          >
            <Link
              spy={true}
              smooth={true}
              to="header"
              activeClass="activeClass"
              onClick={handleCloseNavMenu}
              className="activLink"
            >
              <li>{t("homePage")}</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="comeToLearn"
              onClick={handleCloseNavMenu}
              className="activLink"
            >
              <li>{t("aboutUs")}</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="professia"
              onClick={handleCloseNavMenu}
              className="activLink"
            >
              <li>{t("raspisaniya")}</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="contact"
              onClick={handleCloseNavMenu}
              className="activLink"
            >
              <li>{t("contactUs")}</li>
            </Link>
          </Box>
        </Container>
      </AppBar> */}

      {/*  */}

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
                  <Link
                    spy={true}
                    smooth={true}
                    to="header"
                    activeClass="activeClass"
                    onClick={handleCloseNavMenu}
                    style={{ cursor: "pointer" }}
                    className="activLink"
                  >
                    <li>{t("homePage")}</li>
                  </Link>
                  <Link
                    spy={true}
                    smooth={true}
                    to="comeToLearn"
                    activeClass="activeClass"
                    onClick={handleCloseNavMenu}
                    style={{ cursor: "pointer" }}
                    className="activLink"
                  >
                    <li>{t("aboutUs")}</li>
                  </Link>
                  <Link
                    spy={true}
                    smooth={true}
                    to="professia"
                    activeClass="activeClass"
                    onClick={handleCloseNavMenu}
                    style={{ cursor: "pointer" }}
                    className="activLink"
                  >
                    <li>{t("raspisaniya")}</li>
                  </Link>
                  <Link
                    spy={true}
                    smooth={true}
                    activeClass="activeClass"
                    onClick={handleCloseNavMenu}
                    style={{ cursor: "pointer" }}
                    to="contact"
                    className="activLink"
                  >
                    <li>{t("contactUs")}</li>
                  </Link>
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

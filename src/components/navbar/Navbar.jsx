import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import { Link } from "react-scroll";
import "./navbar.css";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
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
              bgColor="#000"
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
      </AppBar>
    </>
  );
};

export default Navbar;

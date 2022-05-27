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

const Navbar = () => {
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
            >
              <MenuIcon />
            </IconButton>

            <Menu
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
              >
                <li>{t("homePage")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="comeToLearn"
                onClick={handleCloseNavMenu}
              >
                <li>{t("aboutUs")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="professia"
                onClick={handleCloseNavMenu}
              >
                <li>{t("raspisaniya")}</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="contact"
                onClick={handleCloseNavMenu}
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
            >
              <li>{t("homePage")}</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="comeToLearn"
              onClick={handleCloseNavMenu}
            >
              <li>{t("aboutUs")}</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="professia"
              onClick={handleCloseNavMenu}
            >
              <li>{t("raspisaniya")}</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="contact"
              onClick={handleCloseNavMenu}
            >
              <li>{t("contactUs")}</li>
            </Link>
            {/* </>
            ))} */}
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;

import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Stack
        direction="row"
        alignItems="center"
        spacing={7}
        justifyContent={"center"}
      >
        <Link
          className="scroolPage"
          spy={true}
          smooth={true}
          to="header"
          activeClass="activeClass"
        >
          Baş sahypa
        </Link>
        <Link className="scroolPage" spy={true} smooth={true} to="comeToLearn">
          Biz barada
        </Link>
        <Link className="scroolPage" spy={true} smooth={true} to="professia">
          Okuw meyilnamalar
        </Link>
        <Link className="scroolPage" spy={true} smooth={true} to="contact">
          Habarlasmak uchin
        </Link>
      </Stack>
    </div>
  );
};

export default Navbar;

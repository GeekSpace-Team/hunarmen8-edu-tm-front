import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import { makeStyles } from "@mui/styles";
import "./header.css";

const useStyles = makeStyles({
  paper: {
    background: "black",
  },
});

const Header = () => {
  const { t } = useTranslation();
  const [state, setState] = React.useState({
    right: false,
  });

  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [firstLangClass, setFirstLangClass] = useState("langBtn");
  const [secondLangClass, setSecondLangClass] = useState("langBtn");
  const [lang, setLang] = useState("tm");
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

  const langChange = (ln) => {
    i18n.changeLanguage(ln);
    setLang(ln);
    localStorage.setItem("lang", ln);
  };
  return (
    <>
      <div className="header">
        <Stack direction="row" spacing={1} className="Flag">
          <img
            src="./image/RuFlag.svg"
            id="flagg"
            onClick={() => langChange("ru")}
            className={firstLangClass}
            style={{ cursor: "pointer", width: "45px", marginLeft: "-15px" }}
            alt="#"
          />
          <img
            src="./image/TmFlag.svg"
            onClick={() => langChange("tm")}
            className={secondLangClass}
            style={{ cursor: "pointer", width: "45px" }}
            alt="#"
          />
        </Stack>
        <div className="headerSection">
          <Stack direction="row" spacing={10} alignItems="center">
            <label style={{ fontFamily: "boldFont" }}>
              aşgabat şäher häkimliginiň <br /> 8-nji hünär-tehniki okuw mekdebi
            </label>
            <img src="./image/Gerb.svg" alt="#" />
            <label style={{ fontFamily: "boldFont" }}>
              профессионально-техническая <br /> школа №8 хякимлика города{" "}
              <br /> ашгабат
            </label>
          </Stack>
        </div>

        {/* Media Section */}
        <div className="headerSectionMedia">
          <Stack direction={"column"} alignItems="center" spacing={3}>
            <img src="./image/Gerb.svg" style={{ width: "100px" }} alt="#" />
            <label style={{ fontFamily: "boldFont" }}>
              aşgabat şäher häkimliginiň <br /> 8-nji hünär-tehniki okuw mekdebi
            </label>
            <label style={{ fontFamily: "boldFont" }}>
              профессионально-техническая <br /> школа №8 хякимлика города{" "}
              <br /> ашгабат
            </label>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Header;

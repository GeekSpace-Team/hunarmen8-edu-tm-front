import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "../../Language/LangConfig";
import "./header.css";
import { makeStyles } from "@mui/styles";

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
    <div className="header">
      <Stack direction="row" spacing={1} className="Flag">
        <img
          src="./image/RuFlag.svg"
          onClick={() => langChange("ru")}
          className={firstLangClass}
          style={{ cursor: "pointer" }}
          alt="#"
        />
        <img
          src="./image/TmFlag.svg"
          onClick={() => langChange("tm")}
          className={secondLangClass}
          style={{ cursor: "pointer" }}
          alt="#"
        />
      </Stack>
      <div className="headerSection">
        <Stack direction="row" spacing={10} alignItems="center">
          <label>
            {t("hakimlik")} <br /> 8-nji hünär okuw mekdebi
          </label>
          <img src="./image/Gerb.svg" alt="#" />
          <label>
            профессионально-техническая <br /> {t("hakimlik")} <br /> ашгабат
          </label>
        </Stack>
      </div>

      {/* Media Section */}
      <div className="headerSectionMedia">
        <Stack direction="column" spacing={1} className="FlagMedia">
          <img
            src="./image/RuFlag.svg"
            onClick={() => langChange("ru")}
            className={firstLangClass}
            style={{ cursor: "pointer" }}
            alt="#"
          />
          <img
            src="./image/TmFlag.svg"
            onClick={() => langChange("tm")}
            className={secondLangClass}
            style={{ cursor: "pointer" }}
            alt="#"
          />
        </Stack>
        <Stack direction={"column"} alignItems="center" spacing={3}>
          <img src="./image/Gerb.svg" style={{ width: "100px" }} alt="#" />
          <label>
            {t("hakimlik")} <br /> 8-nji hünär okuw mekdebi
          </label>
          <label>
            профессионально-техническая <br /> школа №8 хякимлика города <br />{" "}
            ашгабат
          </label>
        </Stack>
      </div>
    </div>
  );
};

export default Header;

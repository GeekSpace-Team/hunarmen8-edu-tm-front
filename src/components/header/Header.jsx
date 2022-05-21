import { Stack } from "@mui/material";
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Stack direction="row" spacing={1} className="Flag">
        <img src="./image/RuFlag.svg" alt="#" />
        <img src="./image/TmFlag.svg" alt="#" />
      </Stack>
      <div className="headerSection">
        <Stack direction="row" spacing={10} alignItems="center">
          <label>
            Aşgabat şäher häkimliginiň <br /> 8-nji hünär okuw mekdebi
          </label>
          <img src="./image/Gerb.svg" alt="#" />
          <label>
            профессионально-техническая <br /> школа №8 хякимлика города <br />{" "}
            ашгабат
          </label>
        </Stack>
      </div>

      {/* Media Section */}
      <div className="headerSectionMedia">
        <Stack direction={"column"} alignItems="center" spacing={3}>
          <img src="./image/Gerb.svg" style={{ width: "100px" }} alt="#" />
          <label>
            Aşgabat şäher häkimliginiň <br /> 8-nji hünär okuw mekdebi
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

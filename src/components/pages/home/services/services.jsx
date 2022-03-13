import { Box } from "@mui/material";
import s from "./services.module.css";
import iconPens from "../../../img/services/pens.svg";
import divan from "../../../img/services/divan.svg";
import hammers from "../../../img/services/hammers.svg";
import home from "../../../img/services/home.svg";

function Services() {
  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box className="subtitleColor">Our services</Box>
        <Box
          sx={{ maxWidth: "348px", textAlign: "center" }}
          className="textBlack"
        >
          Our services include building new buildings and renovating old
          buildings
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            className={s.servicesBg}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
              width: "300px",
              padding: "40px 32px",
            }}
          >
            <Box>
              <img src={iconPens} alt="" />
            </Box>
            <span className="subtitle">Design building/house</span>
            <span className="text">
              We have an architect for design new buildings
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
              width: "300px",
              padding: "40px 32px",
            }}
          >
            <Box>
              <img src={divan} alt="" />
            </Box>
            <span className="subtitleBlack">Interior Design</span>
            <span className="textBlack">
              We have an interior designer for design your perfect inside house
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
              width: "300px",
              padding: "40px 32px",
            }}
          >
            <Box>
              <img src={home} alt="" />
            </Box>
            <span className="subtitleBlack">Build from scratch</span>
            <span className="textBlack">
              We have an contractor for build new building from scratch{" "}
            </span>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
              width: "300px",
              padding: "40px 32px",
            }}
          >
            <Box>
              <img src={hammers} alt="" />
            </Box>
            <span className="subtitleBlack">Renovation</span>
            <span className="textBlack">
              We can also renovate or rebuilds new buildings/house{" "}
            </span>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Services;

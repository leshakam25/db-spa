import s from "./services.module.css";
import { Button, CardMedia, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";
import iconPens from "../../img/services/pens.svg";
import divan from "../../img/services/divan.svg";
import hammers from "../../img/services/hammers.svg";
import home from "../../img/services/home.svg";
import servicesImg1 from "../../img/ServicesPage/servImg1.png";
import servicesImg2 from "../../img/ServicesPage/servImg2.png";

import whiteLine from "../../img/ServicesPage/whiteLine.png";

function Services() {
  return (
    <Box
      sx={{
        top: "100px",
        position: "relative",
      }}
    >
      <div className="container">
        <Box
          className={s.headerCard}
          sx={{
            maxWidth: "1200px",
            minHeight: "311px",
            display: "flex",
            margin: "0 auto",
            marginTop: "56px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#056088",
          }}
        >
          <span className="pageTitle">Our team services </span>
        </Box>
        {/* SERVICES CARD */}
        <Box
          sx={{
            paddingTop: "32vh",
            display: "flex",
            margin: "0 auto",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "112px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                  We have an interior designer for design your perfect inside
                  house
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
        </Box>
        {/* SERVICES CONTENT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10vh",
            height: "428px",
          }}
        >
          <CardMedia
            component="img"
            image={servicesImg1}
            alt="Paella dish"
            sx={{ zIndex: "1500", height: "100%" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "0 96px",
              marginLeft: "-8vw",
              zIndex: "1000",
              height: "100%",
            }}
            className={s.servicesBg1}
          >
            <span className="subtitle">Design building / house</span>
            <Box sx={{ maxWidth: "520px" }} className="text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "428px",
            marginBottom: "16vh",
          }}
          className={s.servicesBg1}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              padding: "0 96px",
              marginRight: "-160px",
              maxWidth: "520px",
            }}
            className="text"
          >
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </Box>
          <Box sx={{ height: "100%" }}>
            <img src={servicesImg2} alt="" />
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Services;

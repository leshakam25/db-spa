import s from "./about.module.css";
import { Button, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";
import aboutImg from "../../img/about/aboutImg.png";
import aboutImg2 from "../../img/about/aboutImg2.png";

function About() {
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
            marginBottom: "15vh",
            bgcolor: "#056088",
          }}
        >
          <span className="pageTitle">
            About our story - We are the best team
          </span>
        </Box>
        <Box
          sx={{
            padding: "15vh 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={aboutImg} alt="" />
          </Box>
          <Box sx={{ maxWidth: "530px" }}>
            <span className="subtitleColor">Here were the story begins</span>
            <p className="textBlack">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <p className="textBlack">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </Box>
        </Box>
      </div>
      <Box
        className={s.aboutBg}
        sx={{
          marginBottom: "20vh",

          width: "100vw",
          height: "50vh",
        }}
      >
        <Box
          className="container"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "510px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <span className="subtitle">We love to make perfect home</span>
            <p className="text">
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </Box>
          <Box>
            <img src={aboutImg2} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;

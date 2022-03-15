import s from "./homePartners.module.css";
import label1 from "../../../img/work/label1.png";
import label2 from "../../../img/work/label2.png";
import label3 from "../../../img/work/label3.png";
import label4 from "../../../img/work/label4.png";
import { Box } from "@mui/material";
import PartnersForm from "./homePartnersForm";

function Partners() {
  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "62px 0",
          }}
        >
          <span className="subtitleColor">Our partners</span>
          <img src={label1} alt="" />
          <img src={label2} alt="" />
          <img src={label3} alt="" />
          <img src={label4} alt="" />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <iframe
            width="100%"
            height="640 "
            src="https://www.youtube.com/embed/3rS_DVatT1w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Box
            className="gradientBg text"
            sx={{
              position: "absolute",
              right: 0,
              bottom: "5px",
              padding: "32px 52px",
            }}
          >
            This is the timelapse video that shows how our teams work
          </Box>
        </Box>
        <PartnersForm />
      </Box>
    </div>
  );
}

export default Partners;

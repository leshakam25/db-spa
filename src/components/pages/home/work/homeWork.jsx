import { Box, Button } from "@mui/material";
import s from "./homeWork.module.css";
import ImageList from "./imageList";
import workImg from "../../../img/work/workImg.png";

function Work() {
  return (
    <div className={s.work}>
      <div className="container">
        <Box
          sx={{
            paddingTop: "132px",
            paddingBottom: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginBottom: "-80px",
          }}
        >
          <Box className="subtitle">Our works</Box>
          <Box className="text">
            Here our some of the best the result when we build some buildings,
            houses, and also interior designs
          </Box>
          <ImageList />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              right: 0,
              bottom: "10px",
              position: "absolute",
            }}
          >
            <Box className={s.workLine}></Box>
            <Button className="button1" variant="contained">
              Hello
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "12vh",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            minHeight: "300px",
          }}
        >
          <Box
            sx={{
              bgcolor: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              padding: "52px 52px",
              marginTop: "-85px",
              maxWidth: "320px",
            }}
          >
            <Box className="subtitleColor">What our clients say?</Box>
            <Box className="textBlack">
              See what our clients say about their new home lor
            </Box>
            <Button sx={{ color: "#ffffff" }} className="button1">
              See more
            </Button>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img src={workImg} alt="" />
            <Box
              className="gradientBg textItalic"
              sx={{
                minHeight: "266px",
                maxWidth: "360px",
                position: "absolute",
                right: 0,
                bottom: "-32px",
                padding: "42px 64px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              I really happy to see the result my new home. It’s really good
              house and good price too. And they work so fast becasue they have
              the best team. Once again, thankyou. I really appreciate it.
              <br />
              <br /> - Mr. Roberto
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Work;

import { Box, Button } from "@mui/material";
import s from "./work.module.css";
import ImageList from "./imageList";

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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          ></Box>
        </Box>
      </div>
    </div>
  );
}

export default Work;

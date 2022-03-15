import s from "./story.module.css";
import { Button, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";

function Story() {
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
          <span className="pageTitle">Read some story from clients!</span>
        </Box>
      </div>
    </Box>
  );
}

export default Story;

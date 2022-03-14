import { Box, Typography, ButtonGroup, Button, TextField } from "@mui/material";
import s from "./partners.module.css";

function PartnersForm() {
  return (
    <Box
      className={s.partnersForm}
      sx={{
        marginTop: "7vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "55px 0",
      }}
    >
      <Box
        className="pageTitle"
        variant="h3"
        align="center"
        sx={{ maxWidth: "680px" }}
      >
        Want to get our offer updates and news?
      </Box>
      <Typography
        sx={{ maxWidth: "700px" }}
        align="center"
        variant="h6"
        className="text"
      >
        Submit your e-mail and we will give you update about information and
        discount. Every single week. (not spamming)
      </Typography>
      <Box>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          size="large"
          sx={{ minHeight: "62px" }}
        >
          <TextField
            label="Enter your e-mail here "
            variant="standard"
            sx={{
              width: "500px",
              bgcolor: "white",
            }}
          />
          <Button className="button1">Submit</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default PartnersForm;

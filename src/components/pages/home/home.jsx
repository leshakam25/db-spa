import s from "./home.module.css";
import Company from "./company/company";
import Services from "./services/services";
import Benefits from "./benefits/benefits";
import Work from "./work/work";
import Partners from "./partners/partners";
import { Button, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";

function Home() {
  return (
    <Box sx={{ top: "100px", position: "relative" }}>
      {" "}
      <div className="container">
        <Box
          className={s.headerCard}
          sx={{
            marginTop: "56px",
            bgcolor: "#fff",
            marginLeft: "-3vw",
            padding: "6vh 4vw",
            maxWidth: "510px",
            minHeight: "311px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "100px",
          }}
        >
          <span className="subtitleColor">
            We build your dream house well and professionally
          </span>
          <span className="textBlack">
            Our team can build a house according to your wishes. Any design and
            concept, we will help make it happen
          </span>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "left",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button className="button1" variant="contained">
              Contact us
            </Button>
            <TextField
              sx={{ top: "-8px", paddingLeft: "1vw", width: "300px" }}
              id="standard-basic"
              variant="standard"
            />
          </Box>
        </Box>
      </div>
      <Company />
      <Services />
      <Benefits />
      <Work />
      <Partners />
    </Box>
  );
}

export default Home;

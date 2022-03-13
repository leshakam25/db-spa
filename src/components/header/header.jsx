import { Button, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";
import s from "./header.module.css";
import ResponsiveAppBar from "./responsiveAppBar";

function Header() {
  return (
    <div className={s.header}>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Link
              sx={{ color: "#023957" }}
              className={s.headerLogo}
              underline="none"
              href="#"
            >
              DB-
            </Link>
            <Box>
              <ResponsiveAppBar />
            </Box>
          </Box>
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
              justifyContent: "space-between",
            }}
          >
            <h1>We build your dream house well and professionally</h1>
            <p>
              Our team can build a house according to your wishes. Any design
              and concept, we will help make it happen
            </p>
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
        </Box>
      </div>
    </div>
  );
}

export default Header;

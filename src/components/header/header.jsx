import { Button, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";
import s from "./header.module.css";
import ResponsiveAppBar from "./responsiveAppBar";

function Header() {
  return (
    <Box
      sx={{ position: "absolute", width: "100vw", zIndex: "0" }}
      className={s.header}
    >
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
        </Box>
      </div>
    </Box>
  );
}

export default Header;

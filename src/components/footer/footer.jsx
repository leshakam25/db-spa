import { Box, Link, Button } from "@mui/material";
import s from "./footer.module.css";

function Footer() {
  return (
    <Box sx={{ position: "relative" }} className={s.footer}>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "10vh 1vw",
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
              maxWidth: "158px",
            }}
          >
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              href="#"
              className={s.footerLogo}
            >
              DB-
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Lizenzo street number 12 Jakarta, Indonesia
            </Link>
            <Button className="button1" variant="contained">
              Get directions
            </Button>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
            }}
          >
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              href="#"
              className="subtitle"
            >
              Menu
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Home
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              About
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Home
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Service
            </Link>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
            }}
          >
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              href="#"
              className="subtitle"
            >
              Contact
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              E-mail
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Mobile
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Whatsapp
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Fax
            </Link>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
            }}
          >
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              href="#"
              className="subtitle"
            >
              Career
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Job
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Part-time
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Internship
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Service
            </Link>
          </Box>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "left",
            }}
          >
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              href="#"
              className="subtitle"
            >
              Business
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Affiliate
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Collaboration
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              Investment
            </Link>
            <Link
              sx={{ color: "#ffffff" }}
              underline="none"
              className="text"
              href="#"
            >
              People
            </Link>
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Footer;

import s from "./contact.module.css";
import {
  ButtonGroup,
  FormControl,
  CardMedia,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";
import contactImg from "../../img/contactPage/contactImg.png";
import ContactForm from "./contactForm";

function Contact() {
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
            marginBottom: "193px",
            bgcolor: "#056088",
          }}
        >
          <span className="pageTitle">
            Need some consultation or want to collaborarion with us? Let’s
            connect!
          </span>
        </Box>
        <Box
          sx={{
            marginTop: "80px",
            marginBottom: "70px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            height: "481px",
          }}
        >
          <CardMedia
            component="img"
            image={contactImg}
            sx={{ maxHeight: "480px", maxWidth: "530px" }}
          ></CardMedia>
          <ContactForm />
        </Box>
      </div>
    </Box>
  );
}

export default Contact;

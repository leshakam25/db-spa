import s from "./gallery.module.css";
import { Button, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";
import GaleryCard from "./galleryCard";
import cardImg1 from "../../img/GalleryPage/cardImg.png";
import cardImg2 from "../../img/GalleryPage/cardImg2.png";
import cardImg3 from "../../img/GalleryPage/cardImg3.png";
import cardImg4 from "../../img/GalleryPage/cardImg4.png";
import cardImg5 from "../../img/GalleryPage/cardImg5.png";
import cardImg6 from "../../img/GalleryPage/cardImg6.png";

function Gallery() {
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
            marginBottom: "200px",
            bgcolor: "#056088",
          }}
        >
          <span className="pageTitle">Here some our best works</span>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "40px 0",
          }}
        >
          <GaleryCard name="Interior design" img={cardImg1} />
          <GaleryCard name="Build modern house" img={cardImg2} />
          <GaleryCard name="Build villa two floors" img={cardImg3} />
          <GaleryCard name="Modern interior design" img={cardImg4} />
          <GaleryCard name="Renovation co working room" img={cardImg5} />
          <GaleryCard name="Real estate house" img={cardImg6} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "120px",
          }}
        >
          <Link className="subtitleColor" underline="none">
            <Button variant="text" size="large" sx={{ color: "#056088" }}>
              See more
            </Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
}

export default Gallery;
